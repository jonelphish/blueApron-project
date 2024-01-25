function back() {
    "use strict";
    var o = $(window)
      , t = $('*[data-role="scroll-top"]');
    if (!t.length)
        return !1;
    var e = function() {
        $("html, body").animate({
            scrollTop: 0
        }, 200)
    }
      , n = function() {
        var e = $("footer").outerHeight()
          , n = o.scrollTop()
          , c = $(document).height() - n - o.height();
        n > 1e3 && o.width() > 1e3 ? (t.fadeIn(),
        e > c ? t.css("bottom", e - c) : t.css("bottom", 0)) : t.fadeOut()
    };
    t.on("click", e),
    o.on("scroll", n)
  };
  