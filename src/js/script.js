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

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }   else{
            $('.pageup').fadeOut();
        }
    });

    const $page = $('html, body');
    $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
    });
});

new WOW().init();