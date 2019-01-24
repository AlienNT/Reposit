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


    });

})(jQuery);

