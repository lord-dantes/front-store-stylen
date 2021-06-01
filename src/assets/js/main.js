$(document).ready(function(){
  $(".slide-one").owlCarousel();
});
$('.slide-one').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    smartSpeed:450,
    loop:true,
    autoplay:true,
    autoplayTimeout:100
});
$(document).ready(function(){
  $(".slide-two").owlCarousel({
    items:3,
  });
});