;(function ($) {


    $('.v_sect1_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2700,
    });

    $('.slick-arrow , .slider-inner , .v_sect1_slider').css({
        outline:'none',
        cursor:'pointer'
    })
})(jQuery);
