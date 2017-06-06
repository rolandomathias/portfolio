$(function(){

    $('.popup-stroke').hover(
        function() {
            // Hover
            var wrapper = $(this).find('.hover-image-wrapper');
            var img = $(wrapper).find('img');

            console.log( $(this).width(), $(this).height(), img.width() );

            wrapper.css('left', Math.floor($(this).width() / 2) - Math.floor( img.width() / 2) + 'px' );
            wrapper.css('bottom', Math.floor( $(this).height() ) + 5 + 'px');

            $(this).addClass('hovered');
        },
        function() {
            // Blur
            $(this).removeClass('hovered');
        }
    );

});