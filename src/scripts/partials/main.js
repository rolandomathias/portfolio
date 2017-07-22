$(function(){

    $('.popup-stroke').hover(
        function() {

            var isMobile = $(window).width() < 768;

            // Hover
            var wrapper = $(this).find('.hover-image-wrapper');
            var img = $(wrapper).find('img');

            if( !isMobile ) {

                console.log('desktop!');

                // Position it on desktop
                // Center the image
                wrapper.css('left', Math.floor($(this).width() / 2) - Math.floor(img.width() / 2) + 'px');

                var imageHeight = $(img).height();
                var availableSpace = $(this).offset().top;

                if (availableSpace < imageHeight + 20) {
                    // Display at bottom
                    wrapper.css('bottom', '-' + ( imageHeight + 10 ) + 'px');
                } else {
                    // Display at top
                    wrapper.css('bottom', Math.floor($(this).height()) + 5 + 'px');
                }
            }else{
                // Position on mobiles
                console.log('mobile!');
                wrapper.css('left', 0);
                wrapper.css('top', $(this).offset().top + Math.floor($(this).height())+ 10 + 'px');
            }

            $(this).addClass('hovered');
        },
        function() {
            // Blur
            $(this).removeClass('hovered');
        }
    );

});