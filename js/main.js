$(function () {
  ///////menu///////////
  $(".menu_btn").click(function () {
    $(".menu_ul").toggleClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() < 992) {
      $(".menu_ul").removeClass("active");
    }
  });

  var link = $(".menu_ul ul a");

  link.on("click", function (e) {
    e.preventDefault(); //вырубает сылк

    link.removeClass("active"); //заменяет клаcс актив
    var selector = $(this).addClass("active").attr("href");
    var target = $(selector);

    $("html, body").animate({ scrollTop: target.offset().top - 50 }, 800);
  });

  $(window).scroll(function () {
    //----------------кнопка верх часть - 1-------
    if ($(this).scrollTop() > 500) {
      $(".footer .up a").fadeIn();
    } else {
      $(".footer .up a").fadeOut();
    }

    //---------------------
    var scroll = $(window).scrollTop();
    link.each(function () {
      var selector = $(this).attr("href");
      var target = $(selector);
      if (scroll >= target.offset().top - 200) {
        link.removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  //--------------------------часть - 2--------
  $(".footer .up a").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });

  /////////trainers//////////////
  $(".trainers_card").click(function () {
    $(this).toggleClass("active");
    $(".trainers_card").removeClass("active");
    $(this).addClass("active");
  });

  ///////////////////////////////////////////jquery.elastislide.js

  $("#elastislide").elastislide();

  /////////slider//////////

  function slider() {
    var btn_left = document.querySelector(".left");
    var btn_right = document.querySelector(".right");
    var images = document.querySelectorAll(".item_box");
    var i = 0;

    btn_left.onclick = function () {
      images[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      images[i].classList.add("active");
    };
    btn_right.onclick = function () {
      images[i].classList.remove("active");
      i++;
      if (i > images.length - 1) {
        i = 0;
      }
      images[i].classList.add("active");
    };
  }
  slider();
  
  
  
  function sliderPartners() {
    var btn_left1 = document.querySelector(".partners_btn_left");
    var btn_right1 = document.querySelector(".partners_btn_right");
    var images1 = document.querySelectorAll(".partners_item_box");
    var x = 0;

    btn_left1.onclick = function () {
      images1[x].classList.remove("active");
      x--;
      if (x < 0) {
        x = images1.length - 1;
      }
      images1[x].classList.add("active");
    };
    btn_right1.onclick = function () {
      images1[x].classList.remove("active");
      x++;
      if (x > images1.length - 1) {
        x = 0;
      }
      images1[x].classList.add("active");
    };
  }
  sliderPartners();
  
});
 


