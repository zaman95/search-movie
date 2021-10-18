$(document).ready(function () {
    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');
        viewedSlider.owlCarousel(
            {
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 4000,
                nav: false,
                dots: false,
                responsive:
                {
                    0: { items: 1 },
                    575: { items: 2 },
                    768: { items: 3 },
                    991: { items: 3 },
                    1199: { items: 4 }
                }
            });
        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function () {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }
        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function () {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }


    if ($('.bbb_viewed_slider1').length) {
        var viewedSlider = $('.bbb_viewed_slider1');
        viewedSlider.owlCarousel(
            {
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 4000,
                nav: false,
                dots: false,
                responsive:
                {
                    0: { items: 1 },
                    575: { items: 2 },
                    768: { items: 3 },
                    991: { items: 3 },
                    1199: { items: 4 }
                }
            });
        if ($('.bbb_viewed_prev1').length) {
            var prev = $('.bbb_viewed_prev1');
            prev.on('click', function () {
                viewedSlider.trigger('prev.owl.carousel1');
            });
        }
        if ($('.bbb_viewed_next1').length) {
            var next = $('.bbb_viewed_next1');
            next.on('click', function () {
                viewedSlider.trigger('next.owl.carousel1');
            });
        }
    }
});