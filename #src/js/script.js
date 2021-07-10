$(document).ready(function () {
    // if ($(window).width() <= '768') {
    $('.works__slider').slick({
        variableWidth: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
    });
    // }

    if ($(window).width() <= '568') {
        $('.reviews__slider').slick({
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/arrow-prev.png"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/arrow-next.png"></div>',
            dots: false,
            infinite: false,
            slidesToShow: 1,
        });
    } else if ($(window).width() <= '768') {
        $('.reviews__slider').slick({
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/arrow-prev.png"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/arrow-next.png"></div>',
            dots: false,
            infinite: false,
            slidesToShow: 2,
        });
    }
})