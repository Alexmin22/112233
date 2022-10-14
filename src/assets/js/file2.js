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

