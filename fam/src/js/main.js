/////////////////////////////////////////////// hamburder buttton

$(function() {
  $("#js-navButton").click(function() {
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
  //sessionStorageにキーと値を追加
  sessionStorage.setItem(keyName, keyValue);

  //ここに初回アクセス時の処理
  $(window).on("load", function() {
    $("#js-opening").addClass("opening");
    setTimeout(function() {
      $(".svg-wrap .svg-item .st0").css({ opacity: "1" });

      setTimeout(function() {
        $("#js-opening").fadeOut();
      }, 10000);
    }, 2000);
  });
} else {
  //ここに通常アクセス時の処理
}

// $(window).on("load", function() {
//   $("#js-opening").addClass("opening");
//   setTimeout(function() {
//     $(".svg-wrap .svg-item .st0").css({ opacity: "1" });

//     setTimeout(function() {
//       $("#js-opening").fadeOut();
//     }, 10000);
//   }, 2000);
// });

// $(function() {
//   // 1回目のアクセス
//   if ($.cookie("access") == undefined) {
//     //最初にアクセスしたときにはここに書いたアニメーションのJSが動く
//     $.cookie("access", "onece");
//     $("#js-opening").css("display", "block");
//     // 2回目以降は動かないようにするけど最初は動かす
//   } else {
//     $("#js-opening .opening").css("display", "none");
//     // 2回目以降は動かないようにする
//   }
// });
/////////////////////////////////////////////// scroll fadein

var window_h = $(window).height(); // ウィンドウの高さ

$(window).on("scroll", function() {
  var scroll_top = $(this).scrollTop();

  $(".block").each(function() {
    var elem_h = $(this).offset().top;
    if (scroll_top >= elem_h - window_h + 200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

/////////////////////////////////////////////// scroll Down Up
// ***** ページの上でのスクロール量 document_h
// ***** ウィンドウの高さ window_h
// ***** ベージの最後　page_b

$(window).on("scroll", function() {
  var document_h = $(document).innerHeight(); // ページの上でのスクロール量を取得
  var page_b = document_h - window_h;

  $(".md_scroll_wrap span").each(function() {
    if (page_b * 0.8 <= $(window).scrollTop()) {
      $(this)
        .addClass("active")
        .removeClass(".md_scroll-down");
    } else {
      $(this)
        .addClass(".md_scroll-down")
        .removeClass("active");
    }
  });
});

/////////////////////////////////////////////// modal window

$(function() {
  $(".js-open").on("click", function() {
    $("body").addClass("no-scroll");
    var id = $(this).data(`id`);
    $('#overlay, .l_modal-window[data-id="modal' + id + '"]').fadeIn();
  });
  $("#overlay, .js-close").on("click", function() {
    $("body").removeClass("no-scroll");
    $("#overlay, .l_modal-window").fadeOut();
  });
});

/////////////////////////////////////////////// gallery content fadeIn

$(window).on("load", function() {
  setTimeout(function() {
    $(".l_up_block, .md_content_ttl").fadeIn(2000);
  }, 2000);
});
