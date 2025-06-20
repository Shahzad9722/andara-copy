gsap.registerPlugin(ScrollTrigger);
let mobiMed = gsap.matchMedia();

if (window.innerWidth >= 1025) {
  // cursor follower code

  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".ball", "x", { duration: 0.1, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.1, ease: "power3" });

  $(".sliding-section").on("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  $(".sliding-container").on("mouseenter", function () {
    $(".ball").addClass("active").css("opacity", "1");
  });
  $(".sliding-container").on("mouseleave", function () {
    $(".ball").removeClass("active").css("opacity", "0");
  });

  $(".fs-slider-content-block").on("mouseenter", function () {
    $(".ball").addClass("is-active").css("opacity", "1");
  });
  $(".sliding-container").on("mouseleave", function () {
    $(".ball").removeClass("is-active").css("opacity", "0");
  });
  $(".slider-form").on("mouseenter", function () {
    $(".ball").css("opacity", "0");
  });
  $(".slider-form").on("mouseleave", function () {
    $(".ball").css("opacity", "1");
  });

  // cursor follower code end
}

// hero video scroll animation
let heroTl = gsap.timeline({ delay: 0.2, ease: "power4.out(2)" }).pause();

heroTl
  .to(".video-block", {
    scale: 0.85,
  })
  .from(
    ".navbar",
    {
      yPercent: -100,
    },
    0
  )
  .to(".video-block .logo-img", {
    opacity: 1,
  })

  .from(
    ".btn-chat",
    {
      scale: 0.85,
      opacity: 0,
      rotate: 10,
    },
    "<"
  );

$(".video-block").imagesLoaded().always(() => {
  
  

  var timerId =   setInterval(function(){
    console.log($('.video-block').length)
    console.log($('.navbar').length)
    if($('.video-block').length == 1 && $('.navbar').length == 1){

      heroTl.play();
      clearInterval(timerId)
    }
  },10)
});

mobiMed.add("(min-width: 992px)", () => {
  // logo section initial animation
  let logoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sliding-container",
      start: "top center",
      ease: "power2.inOut(2)",
    },
  });

  logoTl.to(
    ".clip1, .clip3, .clip6",
    {
      clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
    },
    0
  );
  logoTl.to(
    ".clip1, .clip3, .clip6",
    {
      top: 0,
    },
    0
  );
  logoTl.to(
    ".clip2, .clip5",
    {
      clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
    },
    0
  );
  logoTl.to(
    ".clip2, .clip5",
    {
      top: 0,
    },
    "<"
  );
  logoTl.to(
    ".clip4",
    {
      clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 50%, 0% 50%, 0% 0%)",
      height: 748,
      flexBasis: "20%",
      left: 0,
      top: 0,
      clearProps: "flexBasis",
      onComplete: () => {
        $(".c-new-list li").hover(function () {
          $(".c-new-list li").removeClass("is-open");
          $(this).addClass("is-open");
        });
      },
    },
    0
  );
  logoTl.to(
    ".sliding-container",
    {
      scale: 1,
      duration: 1,
      ease: "expo.out(1.2)",
    },
    1.4
  );

  gsap.from(".opportunities__container", {
    translateY: "-50vh",
    opacity: 0,
    scrollTrigger: {
      trigger: ".inspiring-living__container",
      start: "bottom bottom",
      end: "bottom 35%",
      scrub: true,
      toggleActions: "play pause reverse pause",
    },
  });

  const opportunitiesSecTitleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".opportunities__container",
      start: "top 35%",
      end: "bottom 25%",
    },
  });
  opportunitiesSecTitleTl.fromTo(
    ".opportunities__container .block--title",
    { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
    {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1.2,
      ease: "Expo.easeOut",
    }
  );

  gsap.from(".opportunities__container .text", {
    duration: 1,
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: ".opportunities__container",
      start: "top 35%",
      end: "bottom 25%",
    },
  });
  function remContainerProp() {
    setTimeout(function () {
      $(".opportunities__container .container-inner")
        .addClass("container")
        .css("padding", "")
        .css("max-width", "");
    }, 1000);
  }

  const opportunitiesContainerImg = gsap.timeline({
    ease: "Expo.easeOut",
    onComplete: function () {
      remContainerProp();
    },
    scrollTrigger: {
      trigger: ".opportunities_inner",
      start: "top 45%",
      end: "top 35%",
    },
  });

  opportunitiesContainerImg.fromTo(
    ".opportunities__container .big_image",
    {
      maxWidth: "100%",
      minWidth: "100%",
    },
    {
      duration: 1,
      maxWidth: "60%",
      minWidth: "60%",
    }
  );
  opportunitiesContainerImg.fromTo(
    ".opportunities__container .container-inner",
    {
      maxWidth: "100%",
      padding: "0 0",
    },
    {
      duration: 1,
      maxWidth: "1800px",
      padding: "0 60px",
    },
    "<"
  );
  opportunitiesContainerImg.fromTo(
    ".opportunities__container .small_image",
    {
      xPercent: 110,
      width: "30%",
    },
    {
      duration: 1,
      xPercent: 0,
      width: "40%",
    },
    "<"
  );

  // const destinationContainerTl = gsap.timeline({
  //   duration: 1.5,
  //   scrollTrigger: {
  //     trigger: ".destination__container .destination-title",
  //     start: "-40% 45%",
  //     // end: "bottom 35%",
  //     markers:true,
  //   },
  // });
  // destinationContainerTl.fromTo(
  //   ".destination-title",
  //   { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  //   { clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }
  // );

  // gsap.from(".destination__container .description-text", {
  //   delay: 0.1,
  //   duration: 1.2,
  //   opacity: 0,
  //   y: 500,
  //   scrollTrigger: {
  //     trigger: ".destination__container",
  //     start: "top 45%",
  //     end: "bottom 35%",
  //   },
  // });

  function remContainerProp2() {
    setTimeout(function () {
      $(".destination_inner")
        .addClass("container")
        .css("padding", "")
        .css("max-width", "");
    }, 2000);
  }

  const destinationContainerImgs = gsap.timeline({
    ease: "Expo.easeOut",
    onComplete: function () {
      remContainerProp2();
    },
    scrollTrigger: {
      trigger: ".destination_inner",
      start: "-=50% 45%",
      // end: "top 45%",
    },
  });

  destinationContainerImgs.fromTo(
    ".destination_inner .big_image",
    {
      maxWidth: "100%",
      minWidth: "100%",
    },
    {
      duration: 1,
      maxWidth: "60%",
      minWidth: "60%",
    },
    0
  );
  destinationContainerImgs.fromTo(
    ".destination_inner",
    {
      maxWidth: "100%",
      padding: "0 0",
    },
    {
      duration: 0.1,
      maxWidth: "1800px",
      padding: "0 60px",
    },
    0
  );
  destinationContainerImgs.fromTo(
    ".destination_inner .small_image",
    {
      xPercent: -110,
      width: "30%",
    },
    {
      duration: 0.8,
      xPercent: 0,
      width: "40%",
    },
    0
  );
});

const SecTextImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".side-img-contnet__box",
    start: "top 70%",
    // end: "bottom 60%",
    // scrub: 1,
  },
});
SecTextImgTl.to(".img-box-1", {
  duration: 1.1,
  delay: 0.1,
  clipPath: "polygon(1% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "Expo.easeOut",
});
gsap.to(".description-text-block-1", {
  delay: 0,
  duration: 1.1,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scrollTrigger: {
    trigger: ".guided-by__container",
    start: "top 75%",
    // end: "top 10%",
    end: "+=600%",
    // scrub: 2,
  },
});
gsap.from(".description-text-block-2", {
  delay: 0.1,
  duration: 0.9,
  opacity: 1,
  y: 300,
  scrollTrigger: {
    trigger: ".guided-by__container",
    start: "top 55%",
    end: "+=600%",
  },
});

const SecImgTextTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".aligned-with__container",
    start: "top 30%",
    end: "top 20%",
  },
});
SecImgTextTl.fromTo(
  ".img-box-2",
  { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1,
    delay: 0,
    ease: "Expo.easeOut",
  }
);

gsap.from(".img-content-text-block-1", {
  delay: 0.1,
  duration: 1,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".aligned-with__container",
    start: "top 30%",
    end: "+=600%",
  },
});
gsap.to(".img-content-text-block-2", {
  delay: 0.1,
  duration: 1,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scrollTrigger: {
    trigger: ".aligned-with__container",
    start: "top 30%",
  },
});
gsap.from(".img-content-text-block-3", {
  delay: 0.1,
  duration: 1,
  opacity: 0,
  y: 300,
  scrollTrigger: {
    trigger: ".aligned-with__container",
    start: "top 30%",
  },
});

const inspiringSecImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".inspiring__container",
    start: "top 65%",
    end: "top 35%",
  },
});
inspiringSecImgTl.fromTo(
  ".inspiring__container .block--title",
  { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1,
    delay: 0,
    ease: "Expo.easeOut",
  }
);

gsap.from(".inspiring__container .description-text", {
  duration: 1,
  opacity: 0,
  y: 600,
  scrollTrigger: {
    trigger: ".inspiring__container",
    start: "top 50%",
  },
});
gsap.from(".inspiring__container .inspiring-slider", {
  delay: 0,
  duration: 1,
  opacity: 0,
  y: 600,
  scrollTrigger: {
    trigger: ".inspiring__container",
    start: "top 50%",
    end: "top 40%",
  },
});

const inspiringLivingSecTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".inspiring-living__container",
    start: "top 48%",
    end: "bottom 30%",
  },
});
inspiringLivingSecTitleTl.fromTo(
  ".inspiring-living__container .block--title",
  { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1.1,
    delay: 0,
    ease: "Expo.easeOut",
  }
);

gsap.from(".inspiring-living__container .description-text", {
  duration: 1,
  opacity: 0,
  y: 950,
  scrollTrigger: {
    trigger: ".inspiring-living__container",
    start: "top 48%",
    end: "bottom 30%",
  },
});
gsap.from(".inspiring-living__container .video__container ", {
  duration: 1,
  opacity: 0,
  y: 500,
  scrollTrigger: {
    trigger: ".inspiring-living__container",
    start: "top 50%",
    end: "top 20%",
  },
});

// const footerMainTl = gsap.timeline({
//   ease: "Expo.easeOut",
//   delay: 0.2,
//   scrollTrigger: {
//     trigger: ".footer-action__block",
//     start: "top 50%",
//     // start: "top 24%",
//     // end: "bottom +=250px",
//     // markers:true,
//   },
// });
// footerMainTl.fromTo(
//   ".footer-ardara-logo-stripe",
//   {
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 82.5%, 0% 82.5%)",
//   },
//   {
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//   }
// );

// const footerImgTl = gsap.timeline({
//   ease: "Expo.easeOut",
//   scrollTrigger: {
//     trigger: ".main-footer",
//     start: "-=1500px 25%",
//     scrub: 1,
//   },
// });
// footerImgTl.from(".footer-bg-img", {
//   y: "16%",
// });

gsap.from(".footer-bg-img", {
  translateY: "16%",
  top: "16%",
  // duration: 1,
  scrollTrigger: {
    trigger: ".invest-tomorrow__container",
    start: "bottom bottom",
    scrub: 1,
  },
});

// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();

//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function () {
//   console.log("asdg")
//   $('.footer-wrapper').each(function () {
//       if (isScrolledIntoView(this) === true) {
//           $(this).addClass('ftr-visible');
//       }
//       else{
//         $(this).removeClass('ftr-visible');
//       }
//   });

// })

const intersectionObserver = new IntersectionObserver((entries) => {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    $("#logoStrip_1").addClass("is-show");
    // console.log(entry.isIntersecting);
  });
});
// start observing
intersectionObserver.observe(document.querySelector(".main-footer"));

const intersectionObserverTow = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    $("#logoStrip_2").addClass("is-show");
  });
});

intersectionObserverTow.observe(document.querySelector(".social-secton"));
