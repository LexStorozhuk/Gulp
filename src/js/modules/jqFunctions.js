//****************************** */ Spoller function
export function spoller (){
$(document).ready(function() {
    $('.menu__arrow').click(function(event) {
      // if($('.menu__list').hasClass('one')) {
      //   $('.menu__arrow').not($(this)).removeClass('_active');
      //   $('.menu__sub-list').not($(this).next()).slideUp(300);
      // }
      // //For closing all sub-list but not a current
      $(this).toggleClass('_active').next().slideToggle(300)
    })
  })
} 