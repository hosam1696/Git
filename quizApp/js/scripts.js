$(function() {
   $("html").niceScroll({
       'cursorborder': 'none'
   }); 
   $(".modal-dialog,.well").niceScroll({
       'cursorborder' : 'none',
       'cursorcolor' :" rgba(34, 34, 34, 0.71)"
   }); 
    (function($){
        $.fn.coor = function(options){
      var topOffset  = $(this).offset().top; 
      var leftOffset  = $(this).offset().left;
      var w = $(this).width();
      var h = $(this).height();
            
            var self =this;
        var ce = $(document.createElement('div'));
    var defaults = {
        'topOffset': topOffset,
        'leftOffset': leftOffset,
        'w':w,
        'h': h,
        'defW': 5,
        'bgColor': 'red',
        'cEle' : ce
    };
            var setting = $.extend(defaults,options);
            console.log(setting);
        
    $('<div />').css({
        'background': 'red',
        'position': 'fixed',
        'top': setting.topOffset+'px',
        left: (setting.leftOffset+ w) - setting.defW +'px',   
        'height': setting.h+'px',
        width: setting.defW+'px',
        'bodrer-radius': '3px'
    }).appendTo($(this));
    };
    })(jQuery);
    
    $('.well').coor();
    /*var ce = document.createElement('div');
    $(ce).css({
        'background': 'red',
        'position': 'absolute',
        'top': '0px',
        right: '0px',   
        'height': '100%',
        width: '10px'
    });
    console.log(ce);
    $('body').append(ce);*/
    
    
});