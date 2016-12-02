/**
 * Created by #Hosam on 02/12/2016.
 */
$(function() {

    $.fn.meter = function(element) {
        // remeber this to be added on top of scroll event
        let bodyHeight = $('body').innerHeight();
        let topScroll = $(window).scrollTop();
        let winHeight = $(window).innerHeight();
        let exatHeight = bodyHeight - winHeight;
        element = $(this);
        let meterPercentage = (topScroll/exatHeight) *100;
        element.find('.meter').css('width', meterPercentage+ '%');

    };
});