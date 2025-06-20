
let rtl = Boolean(document.dir === "rtl");

// init main carousel
if ($(".fs-slide-carousel").length > 0) {
    $(".fs-slide-carousel").flickity({
        cellAlign: 'left',
        contain: true,
        rightToLeft: rtl,
    });

    // hide initially
    let mainCarousel = $(".sliding-container-full-slider");
    mainCarousel.addClass("active").hide();

    let openMainCarousel = (index) => {
        mainCarousel.fadeIn();
        if (index) {
            $(".fs-slide-carousel").flickity('select', index, false, true)
        };
        $(".fs-slide-carousel").focus();
    }

    let closeMainCarousel = () => {
        mainCarousel.fadeOut(100);
    }

    $(".c-new-list li").each((i, item) => {
        $(item).on("click", () => {
            openMainCarousel($(item).attr("data-clip-id"))
        });
    });

    $(".main-carousel-close-btn").each((i, item) => {
        $(item).on("click", closeMainCarousel);
    });

    // navigate to the previous slide. close on first slide
    $(".main-carousel-back-btn").each((i, item) => {
        $(item).on("click", () => {
            if (i === 0) {
                closeMainCarousel();
            }
            else {
                $(".fs-slide-carousel").flickity('previous', false, false);
            }
        });
    });

    $(".main-carousel-next-btn").each((i, item) => {
        $(item).on("click", () => {
            $(".fs-slide-carousel").flickity('next', false, false);
        });
    });

    $(document).on("keyup", (e) => {
        if (e.repeat) return;
        if (e.key === "Escape") {
            closeMainCarousel();
        };
    });
}

function formSubmit() {
    $('#submit_message').slideToggle();
    $('input[type="text"], textarea').val('');
}