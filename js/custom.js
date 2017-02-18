$(document).ready(function(){
    $('p').hide();
    
    $('.slide-show').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
        var curr=$('.single-slide:nth-child('+(currentSlide+2)+')>p').text();
        console.log("Ostatni slajd: "+curr);
    });
    $('.slide-show').on('afterChange', function(slick, currentSlide){
        console.log(currentSlide);
    });
    
  $(".slide-show").slick({
        dots: true
    });
    
    
});