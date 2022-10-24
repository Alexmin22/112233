$(function() {
  $('.catalogue__btn').click(function() {
  $('.catalogue__subnav').slideToggle();
  });

  $('.slider__wrap').slick({
    infinite: false
  });
  });
  

  $(function(){
    $('.catalogue__btn').on('click', function(){
        $('.sprite--chevron').toggleClass('sprite--up'),
        $('.catalogue__btn ').toggleClass('catalogue__btn--active');
    });
    
    $(function(){ 
      var containerEl1 = document.querySelector('[data-ref="container-1"]');
      var containerEl2 = document.querySelector('[data-ref="container-2"]');
     
      var config = {
        controls: {
          scope: 'local'
        }
      };
     
      var mixer1 = mixitup(containerEl1, config);
      var mixer2 = mixitup(containerEl2, config);
    });
});

$(function(){
  $('.top-goods__cart').on('click', function(){
      $('.top-goods__amount').addClass('top-goods__amount--active');
  });
});

function plus_modifier_count_product() {
  var count = parseFloat($('.counter__plus').val());
  var new_count = count + 1;
  $('.counter__plus').val(Number(new_count.toFixed(3)));
}


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

new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true
});