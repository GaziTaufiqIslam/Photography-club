$(window).load( function() {
  $('.overlay').hide();
});

$( document ).ready(function(){
  blogStuff();
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

function blogStuff() {
  $('.blog-unit').first().addClass('active');

  $('.blog-control-next, .blog-control-prev').on('click', function(){
    var $this= $(this),
    curActiveBlog = $('.blog-belt').find('.active'),
    position = $('.blog-belt').children().index(curActiveBlog),
    blogNum = $('.blog-unit').length;
    if($this.hasClass('blog-control-next')){
      if(position<(blogNum-1)){
        $('.active').removeClass('active').next().addClass('active');
      }
      else {
        $('.blog-unit').removeClass('active').first().addClass('active');
      }}
      else {
        if(position>0){
          $('.active').removeClass('active').prev().addClass('active');
        }
        else {
          $('.blog-unit').removeClass('active').last().addClass('active');
        }
      }
    });
  }
