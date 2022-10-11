$(document).ready(function() {
  $("#catalogue").click(function() {
  $("#menu").slideToggle();
  });
  });
  
  $(document).ready(function(){
    $('.slider__list').slick();
  });

  $(function(){
    $('.catalogue__btn').on('click', function(){
        $('.sprite--chevron').toggleClass('sprite--up');
    });
});

