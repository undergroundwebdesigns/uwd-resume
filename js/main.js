!function ($) {
  $(document).ready(function() {
    var $scrollingDiv = $("#js-contact-keep-visible");
    var initialOffset = 100;
    $(window).scroll(function() {
      var window_top = $(window).scrollTop();
      var offset = window_top - initialOffset;
      if (offset < 0) { offset = 0 };
      $scrollingDiv.stop().animate({"marginTop": (offset) + "px"}, "fast" );
    });
  });
}(window.jQuery);
