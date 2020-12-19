//nav start

$(".navbar-collapse a").click(function(){
  $(".navbar-collapse").collapse('hide')
})

















//banner type js start

var typed = new Typed('.ami', {

  strings: [
      "A Web Designer",
      "A Web Developer",
      "A Wordpress Expert",
     
      
 
  ],
  stringsElement: null,

  typeSpeed: 100,

  startDelay: 0,

  backSpeed: 50,

  smartBackspace: false,

  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  loop: true,

  showCursor: false,


});








//mixitup part start

var mixer = mixitup('.filter');








//service slider part start
$('.service').slick({
  dots: true,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
//    autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

















// Testimonial top part start
$('.testi').slick({
  dots: false,
    fade:true,
    asNavFor:".bottom",
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});












// Testimonial bottom part start
$('.bottom').slick({
    dots: true,
    centerMode:true,
    centerPadding:0,
//     autoplay:true,
    asNavFor: ".testi",
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


























// fixed menu


$(window).scroll(function(){
    var scrollamount  = $(window).scrollTop()
    
    if(scrollamount > 500){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
    
       if(scrollamount > 1000){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }

})






// back to top

$(".btop").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 2000)
})

// WOW js

new WOW().init();


