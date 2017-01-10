$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();
    $("body").css("background-position","50% " + ( - (wScroll / 40)) + "px");
  if(wScroll > winH) {
  $('.navtop').addClass('show');
}
else {
    $('.navtop').removeClass('show');
}
});
