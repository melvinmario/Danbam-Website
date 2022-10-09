$(document).ready(function () {
  let slideCount = 5;
  let slideWidth = $(window).width();
  let totalWidth = slideCount * slideWidth;

  $('.slides').css({
    width: totalWidth,
    marginLeft: -slideWidth
  });

  $('.slide:last-child').prependTo('.slides');
  
  $('#left').click(function() { 
    $('.slides').animate({left: +slideWidth}, 500, function(){
        $('.slide:last-child').prependTo('.slides');
        $('.slides').css({left:0});
    })
  });

  $('#rite').click(function() { 
    $('.slides').animate({left: -slideWidth}, 500, ()=>{
        $('.slide:first-child').appendTo('.slides');
        $('.slides').css({left:0});
    })
  });
});