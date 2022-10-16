$(document).ready(function() {
  $("#catalogue").click(function() {
  $("#menu").slideToggle();
  });

  $('.slider__wrap').slick();
  });
  

  $(function(){
    $('.catalogue__btn').on('click', function(){
        $('.sprite--chevron').toggleClass('sprite--up');
    });
});

$(function () {
 
  $(".goods__star").rateYo({
    rating: 3.6,
    ratedFill: "#FFB800",
    maxValue: 5,
    numStars: 1,
    readOnly: true,
    starWidth: "16px"
  });
});