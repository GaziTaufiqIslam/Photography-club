$(window).load( function() {
  $('.overlay').css({'opacity': '0'});
  setTimeout(function() {
    $('.overlay').css({'display': 'none'});
  }, 600);
  togglehidden();
});

$( document ).ready(function(){
  smoothScroll(300);
  blogStuff();
  $('.typed').typeIt({
    speed: 300,
    autoStart: false
  })


});

$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();
  $('.fly-in-text').css({'transform':'translate(-50%,' + ((-50)+wScroll/2.5) + '%)'});
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

function togglehidden() {
  setTimeout(function() {
    $('.fly-in-text').removeClass('hidden');
  }, 500);
}

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
