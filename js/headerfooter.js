$(document).ready(function () {
  $('.drop-menu').hide();

  $('#menu-bar').click(function (e) { 
    e.preventDefault();
    $('.drop-menu').slideToggle();
  });
});