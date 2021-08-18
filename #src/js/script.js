$(document).ready(function () {

    /**
     *  Фиксация header
     */
    window.onscroll = function () {
        myFunction()
    };
    var header = document.getElementById("header-top");
    var sticky = 10;
    // if (window.screen.width <= '768') {
    //     header = document.getElementById("header");
    //     sticky = 0
    // }

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

    $('.menu__link').on('click', function () {
        $('.header__mobile').removeClass('change')
        $('.header__menu').removeClass('width')
    })

    /**
     * Определение слайдеров
     */
    if ($(window).width() <= '1024') {
        $('.works__slider').slick({
            variableWidth: false,
            slidesToShow: 1,
            arrows: false,
            dots: true,
        });
    } else if ($(window).width() > '1024') {
        $('.works__slider').slick({
            variableWidth: true,
            centerMode: true,
            centerPadding: '80px',
            dots: true,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            slidesToShow: 3,
            infinite: true
        });
    }

    if ($(window).width() <= '568') {
        $('.reviews__slider').slick({
            variableWidth: false,
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
        });
    } else if ($(window).width() <= '1024') {
        $('.reviews__slider').slick({
            variableWidth: false,
            dots: true,
            arrows: false,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            infinite: false,
            slidesToShow: 2,
        });
    } else if ($(window).width() > '1024') {
        $('.reviews__slider').slick({
            variableWidth: false,
            dots: true,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            infinite: false,
            slidesToShow: 3,
        });
    }

    /**
     * Форма для заявки
     */
    $('.btn').on("click", function () {
        $('.pop-up__card').addClass('active')
        $('.pop-up__wall').addClass('active')
    })

    $('.pop-up__close-btn').on("click", function () {
        $('.pop-up__card').removeClass('active')
        $('.pop-up__wall').removeClass('active')
    })
})