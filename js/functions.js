$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();
    $(".scroll-parallax").css("background-position","50% " + ( -(100+(wScroll / 20))) + "px");
  if(wScroll > winH) {
  $('.navtop').addClass('show');
}
else {
    $('.navtop').removeClass('show');
}
});
