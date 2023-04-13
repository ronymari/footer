$(window).scroll(function() {
    var footer = $('.footer');
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var bodyHeight = $('body').height();
    
    if (scrollTop + windowHeight >= bodyHeight) {
      footer.show();
    } else {
      footer.hide();
    }
  });
  