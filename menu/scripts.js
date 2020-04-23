$(document).ready(function () {
  $('.js-open').on('click', function () {
    $('html').addClass('menu-open');
  });

  $('.js-close').on('click', function () {
    $('html').removeClass('menu-open');
  });
});
