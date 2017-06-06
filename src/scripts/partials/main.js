$(function(){

    $('.popup-stroke').each(function(index, element) {

        var wrapper = $(element).find('.hover-image-wrapper');
        var img = $(wrapper).find('img');

        console.log( $(element).width(), $(element).height(), img.width() );

        wrapper.css('left', Math.floor( ($(element).width() / 2) - ( img.width() )) + 'px' );

    });

});