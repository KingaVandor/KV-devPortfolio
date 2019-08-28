
$(document).ready(()=>{
   $('#about-section').hide();

  //hover state
   $('a').on('mouseenter', event => {$(event.currentTarget).addClass('hover')}).on('mouseleave', event => {$(event.currentTarget).removeClass('hover')})

  //toggles between main page and about page
  $('.about-link').on('click', () => {
    $('#about-section').fadeIn();
    $('#main-section').fadeOut();
    });

  $('.main-link').on('click', () => {
    $('#about-section').fadeOut();
    $('#main-section').fadeIn();
   });



  //shows active navbar link
  $('.nav-link').on('click', event => {
    $('.nav-link').each(function(){
       $(this).removeClass('active');
    });
    $(event.currentTarget).addClass('active');
   });

   $('#icons').clone().appendTo('#about-profiles')

});


/*document.querySelector(".card-flip").classList.toggle("flip");


   $('.nav-link').on('click', event => {
     if ("a[hreflang|='en']"$item.attr('class') == 'about-link'){
       $('#about-section').fadeIn();
       $('#main-section').fadeOut();
    }
      else {
       $('#about-section').fadeOut();
       $('#main-section').fadeIn();
    }
        });
  */
