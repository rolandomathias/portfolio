$(function () {

    $('#case-1').on('click', function () {
        var link = $(this).find('a').attr('href');
        if ($(window).width() < 992) {
            var win = window.open(link, '_blank');
            win.focus();
        }
    });

    $('.popup-stroke').hover(
        function () {

            //console.log('hover');

            if ($(this).hasClass('hovered')) {
                return;
            }

            var isMobile = $(window).width() < 768;

            // Hover
            var wrapper = $(this).find('.hover-image-wrapper');
            var img = $(wrapper).find('img');
            var imageHeight = $(img).height();

            if (!isMobile) {

                // Position it on desktop
                // Center the image
                wrapper.css('left', Math.floor($(this).width() / 2) - Math.floor(img.width() / 2) + 'px');

                var availableSpace = $(this).offset().top;

                if (availableSpace < imageHeight + 20) {
                    // Display at bottom
                    wrapper.css('bottom', '-' + (imageHeight + 10) + 'px');
                } else {
                    // Display at top
                    wrapper.css('bottom', Math.floor($(this).height()) + 5 + 'px');
                }
            } else {
                // Position on mobiles
                //console.log('mobile!');

                //console.log(imageHeight);

                wrapper.css('left', 0);
                if (!$(this).parents('.img-subtitle').length) {
                    wrapper.css('top', Math.floor(($(window).scrollTop() + ($(window).height() / 2)) - (imageHeight / 2)) + 'px');
                }
                wrapper.css('height', imageHeight + 'px');
            }

            $(this).addClass('hovered');
        },
        function () {
            // Blur

            //console.log('blur');

            if (!$(this).hasClass('hovered')) {
                return;
            }

            $(this).removeClass('hovered');
        }
    );

});