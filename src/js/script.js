console.log('script');

const sections = ['intro', 'service', 'experience', 'message', 'contacts'];

function onIntersect(entries, observer) {
    const viewHeight = window.innerHeight;

    for (var i = 0; i < entries.length; i++) {
        const targetTop = entries[i].boundingClientRect.top;
        const targetBottom = entries[i].boundingClientRect.bottom;
  
        if (
            (targetTop >= 0 && targetTop < viewHeight * 0.6) ||
            (targetBottom <= viewHeight && targetBottom > viewHeight * 0.6) ||
            (targetTop < 0 && targetBottom > viewHeight) ||
            (targetTop > 0 && targetBottom < viewHeight)
        ) {
            const id = entries[i].target.id;
            const navItems = document.querySelectorAll('.nav__span');
            navItems.forEach((target) => {
                target.classList.remove('nav__span_active');
            });

            const targetNavItem = document.querySelector(`.nav__span[href="#${id}"`);
            targetNavItem.classList.add('nav__span_active');
        }
    };
}

window.addEventListener(
    'load',
    (event) => {

        // Добавление динамической подсветки кнопок при прокрутке через обзервер
        const observer = new IntersectionObserver(onIntersect, {
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        });

        const targets = document.querySelectorAll('.observe');
        targets.forEach((target) => {
            observer.observe(target);
        });

        // Нажатие кнопки для раскрытия 
        const navBtn = document.querySelector('#nav-icon');
        const navIntro = document.querySelector('.intro__nav');
        navBtn.addEventListener('click', () => {
            navBtn.classList.toggle('open');
            navIntro.classList.toggle('intro__nav_open');
        })
    },
    false
);
