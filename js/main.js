$(document).ready(function () {
  gsap.config({ nullTargetWarn: false });
  if (window.innerWidth <= 991) {
    $(".c-new-list li:first-child").addClass("is-open");
    $(".c-new-list li").click(function () {
      $(".c-new-list li").removeClass("is-open");
      $(this).addClass("is-open");
    });
  }
  // search toggle
  $(".search-toggle").click(function () {
    $(".search--container").slideToggle(100);
  });

  // nav auto-hide
  let sw;
  let ls = 0;

  if ($(window).width() > 0 && $(window).width() >= 1200) {
    let watchNav = () => {
      if (sw) clearTimeout(sw);

      sw = setTimeout(() => {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > ls) {
          gsap.to(".navbar", {
            yPercent: -100,
            duration: 1,
            ease: "power4.out(2)",
            onEnter: function () {
              $(".navbar").addClass("hidden");
            },
          });
        } else {
          gsap.to(".navbar", {
            yPercent: 0,
            duration: 1,
            ease: "power4.out(2)",
            onEnter: function () {
              $(".navbar").removeClass("hidden");
            },
          });
        }

        ls = scrollTop;
      }, 10);
    };
    // Use touchmove event for mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const scrollEvent = isMobile ? "touchmove" : "scroll";

    // Attach the event listener
    $(window).on(scrollEvent, watchNav);

    // window scroll
    var $navbarHight = $(".top--navbar").height();

    if ($(window).scrollTop() > $navbarHight) {
      $(".scroll-body-top-btn").addClass("show");
    }

    $(window).scroll(() => {
      var $windowScroll = $(this).scrollTop();
      if ($windowScroll > $navbarHight) {
        $(".scroll-body-top-btn").addClass("show");
      } else {
        $(".scroll-body-top-btn").removeClass("show");
      }

      watchNav();
    });
  }

  //for language changes
  $(document).ready(function () {
    var currentUrl = window.location.href;
    if (!currentUrl.includes("/ar/")) {
      $(".language-change-link").text("عربي");
    }
    if (currentUrl.includes("/ar/")) {
      $(".language-change-link").text("English");
    }
    $(".language-change-link").click(function () {
      $(this).toggleClass("lang");
      if (!currentUrl.includes("/ar/")) {
        var fileName = currentUrl.substring(currentUrl.lastIndexOf("/"));
        fileName = fileName.replace("/", ""); // Remove the leading "/"
        var newUrl = currentUrl.replace(fileName, "ar/" + fileName);
        document.location.href = newUrl;
      }
      if (currentUrl.includes("/ar/")) {
        fileName = currentUrl.replace("ar/", ""); // Remove the leading "/"
        document.location.href = fileName;
      }
    });
  });

  // scroll page

  $(".scroll-pge-top").click(function () {
    var hash = $(this).data("target");
    console.log(hash);
    $("html, body").animate(
      {
        scrollTop: $("#" + hash).offset().top,
      },
      300
    );
  });

  const swiper = new Swiper(".inspiring-slider", {
    loop: false,
    slidesPerView: 1.3,
    slidesPerColumn: 1,
    spaceBetween: 10,
    pagination: false,
    parallax: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 600,
    navigation: {
      nextEl: ".inspire-slider--next",
      prevEl: ".inspire-slider--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      // Add more breakpoints as needed
    },
  });

  const swiperHeart = new Swiper(".swiperHeart", {
    loop: false,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next-hert",
      prevEl: ".swiper-button-prev-hert",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        pagination: false,
      },
    },
  });

  const swiperOurValueFirst = new Swiper(".swiperOurValue-first", {
    loop: false,
    slidesPerView: 1,
    slidesPerColumn: 1,
    pagination: false,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  const swiperOurValueSecond = new Swiper(".swiperOurValue-second", {
    loop: false,
    slidesPerView: 1,
    slidesPerColumn: 1,
    pagination: false,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

  const swiperInspiring = new Swiper(".swiperInspiring", {
    loop: false,
    slidesPerView: 1,
    slidesPerColumn: 1,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });

  const swipemb = new Swiper(".swipemb", {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1.2,
    slidesPerColumn: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: false,
  });

  const swipernew = new Swiper(".opportunities__slider-first", {
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 165,
    pagination: false,
    allowTouchMove: false,
    breakpoints: {
      1600: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 165,
      },
      992: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 55,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1.1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      // Add more breakpoints as needed
    },
  });

  const swiperne1w = new Swiper(".opportunities__slider-second", {
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 165,
    pagination: false,
    allowTouchMove: false,
    breakpoints: {
      1600: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 165,
      },
      992: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 55,
        allowTouchMove: true,
      }, 	
      320: {
        slidesPerView: 1.1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      // Add more breakpoints as needed
    },
  });

  const swiperne2w = new Swiper(".invest", {
    loop: false,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 26,
    pagination: false,
    navigation: {
      nextEl: ".invest-slider--next",
      prevEl: ".invest-slider--prev",
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 1,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 1,
      },
      550: {
        slidesPerView: 2.1,
        slidesPerColumn: 1,
      },
      320: {
        slidesPerView: 1.1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // Add more breakpoints as needed
    },
  });

  //video play pause
  $(".play-button").click(function () {
    var video = $(this).parents(".video-main").find(".video-player")[0];
    if (video.paused) {
      video.play();
      $(this).find(".text-block").text("Pause Video");
    } else {
      video.pause();
      $(this).find(".text-block").text("Play Video");
    }
  });

  // Interest slider
  const swiperInterest = new Swiper(".interest-slider", {
    loop: false,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 26,
    pagination: false,
    navigation: {
      nextEl: ".invest-slider--next",
      prevEl: ".invest-slider--prev",
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 1,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 1,
      },
      767: {
        slidesPerView: 2.1,
        slidesPerColumn: 1,
      },
      320: {
        slidesPerView: 1.2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // Add more breakpoints as needed
    },
  });

  const swiperRelated = new Swiper(".related-slider", {
    loop: false,
    slidesPerView: "auto",
    slidesPerColumn: 1,
    pagination: false,
    autoHeight: true,
    spaceBetween: 40,
    navigation: {
      nextEl: ".invest-slider--next",
      prevEl: ".invest-slider--prev",
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        direction: "vertical",
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        direction: "vertical",
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 2.1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1.2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // Add more breakpoints as needed
    },
  });

  $("#registerModal .btn ").click(function (e) {
    if (!$("#registerModal #flexCheckChecked").is(":checked")) {
      e.preventDefault();
    }
  });

  $("body").on("click", ".utag-tag", function () {
    const data = $(this).data();
    const convertedData = {};

    for (const key in data) {
      if (data.hasOwnProperty(key) && !key.startsWith("data-bs")) {
        convertedData[key] = data[key].toString();
      }
    }

    delete convertedData["bsTarget"]; // Remove the "data-bs" property from the object
    delete convertedData["bsToggle"]; // Remove the "data-bs" property from the object
    delete convertedData["formType"]; // Remove the "data-bs" property from the object
    var pageName = window.location.pathname.replace("/", "");
    if (pageName == "en" || pageName == "ar") pageName = "home";

    console.log({
      ...convertedData,
      page_name: pageName.toLowerCase(),
      page_url: window.location.href.toLowerCase(),
    });

    // utag.link({
    //   ...convertedData,
    //   page_name: pageName.toLowerCase(),
    //   page_url: window.location.href.toLowerCase(),
    // });

    dataLayer.push({
      ...convertedData,
      page_name: pageName.toLowerCase(),
      page_url: window.location.href.toLowerCase(),
    });
  });

  // Initially hide the footer
  setTimeout(function () {
    // After 1.5 seconds, show the footer with a fade-in effect
    $("#footer").css("display", "block");
  }, 1500);
});
