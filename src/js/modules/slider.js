export function slider () {
$(document).ready(function () {
    $(".slider").slick({
      arrows: false,
      dots: true,
      // adaptiveHeight:true,
      // slidesToShow:3,
      // slidesToScroll:3,
      // speed:1000,
      // easing:'linear',
      infinity:true,
      // initialSlide:false,
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnDotsFocus:true,
      // pauseOnDotsHover:true,
      pauseOnDotsHover:true,
      // draggable:false,
      //   (for pc)
      // swipe:false,
      //   (for mob)
      // touchThreshold:5,
      //   (means distanse for swoping)
      // ToucMove:false,
      //   (can't move slide when finger is pressed a slide)
      // waitForAnimate:false,
      //   (fast clicking and moves on sliders)
      // centralMode:true,
      //   (putting on center)
      // variableWidth:true,
      //   (removing auto-width)
      // rows:2,
      //   (rows)
      // slidesPerRow:2,
      //   (how many sliders in row)
      // vertical: true,
      // verticalSwiping: true,
      //   (vertical swiping)
      // fade:true,
      //   (showing only one picture without effect of sliding)
      // asNavFor: ".slider"
      //   (conecting sliders) конект слайдерів потрібно вписати в двух слайдерах цю ж функцію з їхніми класами
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
      ],
      // mobileFirst: false,
      //   (changed max-width to min-width)
      // appendArows: $('.any-class-css'),
      // appendDots: $('.any-class-css'),
      //   (moving arrows or dots to another container(div))
    });
  
  // ***********Event Slick Slider *//////////////////////////////////////////
  
  //   $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
  //     {
  //       console.log(currentSlide);
  //     });
  //     (What a pictures was before the slide)
  
  // ***********Methods Slick Slider *//////////////////////////////////////////
  
  // $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide)
  //     {
  //       console.log(currentSlide);
  //     });
  //     (What a pictures was after the slide)
  // $('.slider).slick('setPosition');
  //     (putting on correct position)
  
  // $('.link_r').slick('slickPrew');
  // $('.linl_l').slick('slickNext');
  //     (move for nex, prew slide)
  
  // $('.slider').slick('goTo', 3);
  //     (swipe to 4 slide)
  // $('.link').click(function(event) {
  //     $('.slider').slick('goTo',3)});
  //     (when u click on the link(class) you moving to 4 slide)
  
  // $('.link_play').click(function(event) {
  //     $('.slider').slick('slickPlay')});
  //     (when u click on the link(class) putting to autoplay)
  
  // $('.link_r').click(function(event) {
  //     $('.slider').slick('slickPause')});
  //     (when u click on the link(class) stopping autoplay)
  
  // $('.link_add').click(function(event) {
  //     $('.slider').slick('slickAdd', '<div class="newslide"> 123</div>')
  //       return: false});
  //     (when u click on the link(class) added the new div witch class "newslide")
  //     (return:false for not realoading a web peges )
  // $('.link_add').click(function(event) {
  //     $('.slider').slick('slickRemove', 0)
  //       return: false});
  //     (when u click on the link(class) removing the new div with number 0")
  //     (return:false for not realoading a web peges )
  
  //****function filter */!!!
  // var filtered = false;
  // $('.link_filter').on('click', function() {
  //     if (filtered === false) {
  //         $('.slider').slick('slickFilter', '.Put some class on DOM');
  //         $(this).text('remove filter');
  //         filtered = true;
  //     }else {
  //         $('.slider').slick('slickUnfilter');
  //         $(this).text('filtered');
  //         filtered = false;
  //         }
  //         return false;
  //     });
  
  //****function for showing witch options in slider is using */
  // var s=$('.slider').slick('slickGetOption','pauseOnDotsHover');
  // console.log(s);
  
  //****function for added options in slider*/
  // $('.slider').slick('slickSetOption','pauseOnDotsHover', false);
  });
  //****function for swiching off Slick slider*/
  // $('.slider').slick('unslick');
  
}