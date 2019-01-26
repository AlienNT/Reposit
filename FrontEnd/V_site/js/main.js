;(function ($) {
    $(document).ready(function () {

//Скролл

        $(".scroll-down, .v_nav a").on("click", function (event) {
            event.preventDefault();
            var name = $(this).attr('href'),
                top = $(name).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });

// Слайдер


        $('.v_sect1_slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.slick-arrow , .slider-inner').css({
            outline: 'none',
            cursor: 'pointer'
        });

        $('.hamburger').on("click", function () {
            var nav = $('.v_nav'),
                navA = $('.v_nav a');

            if (nav.hasClass('active_nav')) {
                nav.removeClass('active_nav')
            } else {
                nav.addClass('active_nav')
            }
            navA.on('click',function () {
                nav.removeClass('active_nav');
                $('.hamburger-inner').removeClass('active_hamburger')
            });
            $('.hamburger-inner').toggleClass('active_hamburger');
        });


        // $('.blog-inner img').on('click', function () {
        //     $(this).toggleClass('img_toggle')
        // })

    });

})(jQuery);

