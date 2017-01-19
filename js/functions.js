$(window).load( function() {
  $('.overlay').hide();
});

$( document ).ready(function(){
  smoothScroll(300);
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

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event){
    var target=$( $(this).attr('href') );
    if(target.length){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });
}

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
