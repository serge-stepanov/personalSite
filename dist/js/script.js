const hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.menu__cross'),
    menu = document.querySelector('.menu'),
    percent = document.querySelectorAll('.skills__scale-percent'),
    lines = document.querySelectorAll('.skills__scale-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

cross.addEventListener('click', () => {
    menu.classList.remove('active');
});

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});