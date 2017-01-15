$(window).load( function() {
  $('.overlay').hide();
});
$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();
    $(".scroll-parallax").css("background-position","50% " + ( -((wScroll / 5))) + "px");
  if(wScroll > winH) {
  $('.navtop').addClass('show');
}
else {
    $('.navtop').removeClass('show');
}
});

lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true,
    })
