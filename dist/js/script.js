const hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.menu__cross'),
    menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

cross.addEventListener('click', () => {
    menu.classList.remove('active');
});