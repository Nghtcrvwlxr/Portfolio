const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percentage = document.querySelectorAll('.skills__percentage'),
      lines = document.querySelectorAll('.skills__scale_colored');

percentage.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML
});

new WOW().init();