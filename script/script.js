/*global $, document*/
$(document).ready(function() {

  var navOffset = $('nav').offset().top;

  $('#follow').addClass('show');

$(window).scroll(function() {

  if($(window).scrollTop() >= navOffset) {
    $('body').css('padding-top', '62px');
    $('nav').css({'position': 'fixed', 'width': '100%','top': '0', 'left': '0', 'z-index': '99'});
    
  } else {
    $('nav').css('position', 'relative');
    $('body').css('padding-top', '0');
  }
});
   $('nav ul').find('a').on('click', function(event) {
       event.preventDefault();
       $('nav ul').find('a').removeClass('current');
       $(this).addClass('current');
       $('#cat').text($(this).text());
       
       // get & filter link text
       
       var category = $(this).text().toLowerCase();
       
       // remove hidden class if all projects si selected
       
       if(category == 'all') {
           $('#gallery').find('.project-holder').show().removeClass('hidden');
       } else {
           $('#gallery').find('.project-holder').each(function() {
              if($(this).data('project') == category) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
           });
       }
   });
    let bgModal = $("#bg-modal");
    $(".project-holder").find('a:last-child').on('click', function() {

        $('body').addClass('body-overflow');
        bgModal.addClass('modal-open');
        console.log($(this).parents(".project-holder").find('img').attr('src'));
        bgModal.find(".bg-img").find('img').attr('src', $(this).parents(".project-holder").find('img').attr('src').replace('-sm', ""));
        bgModal.find('img').on('load', function() {
            bgModal.find('.bg-img').removeClass('hide');
            bgModal.find('.bg-img-alt').addClass('hide');
        });

    });

    $('.bg-modal-overlay,.close').click(function() {
        bgModal.removeClass('modal-open');
        $('body').removeClass('body-overflow');

        bgModal.find('.bg-img').addClass('hide');
        bgModal.find('.bg-img-alt').removeClass('hide');
    });


});
