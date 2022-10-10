$(document).ready(function() {
  $("#catalogue").click(function() {
  $("#menu").slideToggle();
  });
  });

  $(function(){
    $('.catalogue__btn').on('click', function(){
        $('.sprite--chevron').toggleClass('sprite--up');
    });
});

console.log('file 1');
