$(".burger-btn").on("click", function () {
  $(this).toggleClass("burger-btn--active");

  $(".header__list-user").toggleClass("header__list-user--active");

  $(".footer__nav").toggleClass("footer__nav--active");

  $(".footer__address").toggleClass("footer__address--active");

  $(".catalogue").toggleClass("catalogue--active");

  $(".catalogue__btn").toggleClass("catalogue--active__btn");

  $(".logo-green").toggleClass("logo-green--active");
});

$(function () {
  $(".catalogue__btn").on("click", function () {
    $(".catalogue__subnav").slideToggle();
  });

  $(function () {
    $(".catalogue__btn").on("click", function () {
      $(".sprite--chevron").toggleClass("sprite--up"),
        $(".catalogue__btn ").toggleClass("catalogue__btn--active");
    });

    $(".search-btn").on("click", function () {
      $(".search-row").toggleClass("search-row--active");
    });

    $(".slider__wrap").slick({
      dots: true,
      infinite: false,
    });
  });

  $(function () {
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
      controls: {
        scope: "local",
      },
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
  });
});

$(function () {
  $(".top-goods__cart").on("click", function () {
    $(this.parentElement).addClass("top-goods__form--active");
  });
});

function plus_modifier_count_product() {
  var count = parseFloat($(".counter__plus").val());
  var new_count = count + 1;
  $(".counter__plus").val(Number(new_count.toFixed(3)));
}

$(function () {
  $(".star").rateYo({
    ratedFill: "#FFB800",
    maxValue: 5,
    numStars: 1,
    readOnly: true,
    starWidth: "16px",
  });
});

new Swiper(".swiper", {
  spaceBetween: 10,
  freeMode: true,

  breakpoints: {
    685: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    1330: {
      slidesPerView: 6,
    },
  },
});

$(".user-cart").on("click", function () {
  $(".buy").addClass("buy--active");
});

$(".buy__close").on("click", function () {
  $(".buy--active").removeClass("buy--active");
});

var $range = $(".aside__input");
var $inputFrom = $(".aside__from");
var $inputTo = $(".aside__to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val,
  });

  $(this).prop("value", val);
});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val,
  });

  $(this).prop("value", val);
});

$(function () {
  $(".shop__sort").styler();
}, 100);

$(".shop__btn").on("click", function () {
  $(".shop__btn").removeClass("shop__btn--active");
  $(this).addClass("shop__btn--active");
});

$(".button__list").on("click", function () {
  $(".goods__card").addClass("goods__card--list");
});

$(".button__grid").on("click", function () {
  $(".goods__card").removeClass("goods__card--list");
});
