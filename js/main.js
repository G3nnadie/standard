$(document).ready(function () {

  // Copy
  $(document).on('click', '.copy-info__btn', function (e) {
    e.preventDefault();

    const $copyInfo = $(this).closest('.copy-info');
    const $link = $copyInfo.find('a, span');
    const text = $.trim($link.text());

    const $temp = $('<input>');
    $('body').append($temp);
    $temp.val(text).select();
    document.execCommand('copy');
    $temp.remove();

    $copyInfo.addClass('copy-info--active');

    setTimeout(function () {
      $copyInfo.removeClass('copy-info--active');
    }, 1000);
  });

  // Show menu mobail
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').fadeToggle(200);
    $('.overlay').fadeToggle(200);
  });

  // Header add class
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 0) {
      $('.header').addClass('header--shadow');
    }
    else {
      $('.header').removeClass('header--shadow');
    }
  });

  // Tabs nav
  var swiper = new Swiper(".tabs__nav-sl", {
    spaceBetween: 8,
    // simulateTouch: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".tabs__nav-swiper-button-next",
      prevEl: ".tabs__nav-swiper-button-prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 4,
      },
      1200: {
        spaceBetween: 8,
      },
    },
  });

  // Tabs
  $('.tabs__nav-item').on('click', function() {
    const index = $(this).index();

    $('.tabs__nav-item').removeClass('active');
    $(this).addClass('active');

    $('.tabs__item')
      .removeClass('active')
      .hide()
      .eq(index)
      .fadeIn()
      .addClass('active');
  });

});