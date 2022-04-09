$(document).ready(function() {
    $('.header__slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header__dots',
    });

    $('.menu__btn').on('click', function() {
        $('.menu__items').slideToggle();
    });
});
