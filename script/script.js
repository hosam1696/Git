/*global $, document*/
$(document).ready(function() {
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
                  $(this).hide().css('transform', 'translateY(-10px)');
              }
           });
       }
   }) ;
});
