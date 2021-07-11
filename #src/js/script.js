$(document).ready(function () {

    /**
     *  Фиксация header
     */
    window.onscroll = function () {
        myFunction()
    };
    var header = document.getElementById("header-top");
    var sticky = 10;
    if (window.screen.width <= '768') {
        header = document.getElementById("header");
        sticky = 0
    }

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

    /**
     * Меню на мобильных
     */
    if ($(window).width() <= '768') {
        $('.header__menu').addClass('sidenav')
    }
    $('.header__mobile').on('click', function () {
        if ($(this).hasClass('change')) {
            $('.header__mobile').removeClass('change')
            $('.header__menu').removeClass('width')
        } else {
            $('.header__mobile').addClass('change')
            $('.header__menu').addClass('width')
        }
    })

    /**
     * Определение слайдеров
     */
    if ($(window).width() <= '768') {
        $('.works__slider').slick({
            variableWidth: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '40px'
        });
    } else if ($(window).width() > '768') {
        $('.works__slider').slick({
            variableWidth: false,
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
        });
    }

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