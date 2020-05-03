$(document).ready(function(){
//Counter
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });

    new WOW().init();

//Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:5,
        responsiveClass:true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 250,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
            }
        }
    });
//MixitUp
    var mixer = mixitup('.portfolio-content');


});
//Mobile Menu
function openNav() {
    document.getElementById("mynav").style.width="100%";
}

function closeNav() {
    document.getElementById("mynav").style.width="0%";
}