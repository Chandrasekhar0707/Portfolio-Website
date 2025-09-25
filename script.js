var typed = new Typed("#element", {
    strings: ["Web Developer", "Frontend Developer",],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

document.querySelectorAll('.summary-btn').forEach(btn => {
    const contentWrap = btn.nextElementSibling;

    function open() {
        contentWrap.hidden = false;
        void contentWrap.offsetHeight;
        contentWrap.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    }
    function close() {
        contentWrap.classList.remove('open');
        contentWrap.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'max-height' && !contentWrap.classList.contains('open')) {
                contentWrap.hidden = true;
            }
            contentWrap.removeEventListener('transitionend', handler);
        });
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        expanded ? close() : open();
    });
});

// service

 const serviceBoxes = document.querySelectorAll('.service-box');

        function showServices() {
            serviceBoxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (boxTop < windowHeight - 50) {
                    box.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', showServices);
        window.addEventListener('load', showServices);