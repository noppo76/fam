/////////////////////////////////////////////// hamburder buttton

$(function () {
  $("#js-navButton").click(function () {
    $("body").toggleClass("js-drawerActive");

    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });
});
/////////////////////////////////////////////// mv animation

const keyName = "visited";
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
  sessionStorage.setItem(keyName, keyValue);

  $(window).on("load", function () {
    $("#js-opening").addClass("opening");
    setTimeout(function () {
      $(".svg-wrap .svg-item .st0").css({ opacity: "1" });

      setTimeout(function () {
        $("#js-opening").fadeOut();
      }, 10000);
    }, 2000);
  });
} else {
}
/////////////////////////////////////////////// scroll fadein

var window_h = $(window).height();

$(window).on("scroll", function () {
  var scroll_top = $(this).scrollTop();

  $(".block").each(function () {
    var elem_h = $(this).offset().top;
    if (scroll_top >= elem_h - window_h + 200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

/////////////////////////////////////////////// scroll Down Up
$(window).on("scroll", function () {
  var document_h = $(document).innerHeight();
  var page_b = document_h - window_h;

  $(".md_scroll_wrap span").each(function () {
    if (page_b * 0.8 <= $(window).scrollTop()) {
      $(this).addClass("active").removeClass(".md_scroll-down");
    } else {
      $(this).addClass(".md_scroll-down").removeClass("active");
    }
  });
});

/////////////////////////////////////////////// modal window

$(function () {
  $(".js-open").on("click", function () {
    $("body").addClass("no-scroll");
    var id = $(this).data(`id`);
    $('#overlay, .l_modal-window[data-id="modal' + id + '"]').fadeIn();
  });
  $("#overlay, .js-close").on("click", function () {
    $("body").removeClass("no-scroll");
    $("#overlay, .l_modal-window").fadeOut();
  });
});

/////////////////////////////////////////////// gallery content fadeIn

$(window).on("load", function () {
  setTimeout(function () {
    $(".l_up_block, .md_content_ttl").fadeIn(2000);
  }, 2000);
});
