let navToggle = document.querySelector('.nav-toggle');
let navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');

    if (navMenu.classList.contains('nav-menu_visible')) {
        navToggle.setAttribute('aria-label', 'close nav menu');
    } else {
        navToggle.setAttribute('aria-label', 'open nav menu');
    }
})