jQuery(function($) {
    $(document).ready( function() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:40,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })
    });
});

//initiating jQuery
jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
});

jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      new WOW().init();
    });
});


// counter number js code here
jQuery(function($) {
    $(document).ready( function() {
     //enabling 
        $('#counter-block').ready(function(){
            $('.hours').animationCounter({
            start: 0,
            step: 20,
            delay:100,
            end: 5000,
            });
        });
        $('#counter-block').ready(function(){
            $('.projects').animationCounter({
            start: 0,
            step: 20,
            delay:100,
            end: 8000,
            });
        });
        $('#counter-block').ready(function(){
            $('.clients').animationCounter({
            start: 0,
            step: 10,
            delay:100,
            end: 2000,
            });
        });
    });
});


// slider js here
jQuery(function($) {
    $(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
