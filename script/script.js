/*global $, document*/
$(document).ready(function() {

  var navOffset = $('nav').offset().top;
$(window).scroll(function() {

  if($(window).scrollTop() >= navOffset) {
    $('body').css('padding-top', '62px');
    $('nav').css({'position': 'fixed', 'width': '100%','top': '0', 'left': '0', 'z-index': '99'});
    
  } else {
    $('nav').css('position', 'relative');
    $('body').css('padding-top', '0')
  }
})
   $('nav ul').find('a').on('click', function(event) {
       event.preventDefault();
       $('nav ul').find('a').removeClass('current');
       $(this).addClass('current');
       $('#cat').text($(this).text());
       
       // get & filter link text
       
       var category = $(this).text().toLowerCase();
       
       // remove hidden class if all projects si selected
       
       if(category == 'all') {
           $('#gallery').find('.project-holder').show(1000).removeClass('hidden');
       } else {
           $('#gallery').find('.project-holder').each(function() {
              if($(this).data('project') == category) {
                  $(this).show(1000);
              } else {
                  $(this).hide();
              }
           });
       }
   }) ;
});
