window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const burgerBtn = document.querySelector(".burger-btn");
  const headerRight = document.querySelector(".header__right");
  const opacity = document.querySelector(".opacity");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-btn_active");
    headerRight.classList.toggle("header__right_active");
    opacity.classList.toggle("opacity_active");
  });

  const links = document.querySelectorAll(".header__link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(1);
      burgerBtn.classList.remove("burger-btn_active");
      headerRight.classList.remove("header__right_active");
      opacity.classList.remove("opacity_active");
    });
  });

  const headerMenu = document.querySelector(".header__menu");

  // headerMenu.forEach((e) => {
  //   const link = e.querySelector(".header__link");
  //   link.addEventListener("click", () => {
  //     burgerBtn.classList.remove("burger-btn_active");
  //     headerRight.classList.remove("header__right_active");
  //     opacity.classList.remove("opacity_active");
  //   });
  // });

  function popup() {
    const popUpShowButton = document.querySelector("#button-consultation");
    const popUp = document.querySelector("#consultation");
    const closeButton = document.querySelector("#close-consultation");

    function closePopUp() {
      popUp.style.top = "-300%";
    }

    popUpShowButton.addEventListener("click", () => {
      popUp.style.top = "0";
    });

    popUp.addEventListener("click", function (e) {
      if (e.target == this) closePopUp();
    });
    closeButton.addEventListener("click", closePopUp);
  }
  window.addEventListener("load", popup);

  const playButton = document.querySelector(".about-us__play");
  const video = document.querySelector("#myVideo");
  playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
  });

  function initTab(elem) {
    //addEventListener on mouse click
    document.addEventListener("click", function (e) {
      //check is the right element clicked
      if (!e.target.matches(elem + " .t-btn")) return;
      else {
        if (!e.target.classList.contains("active")) {
          //if option true remove active class from all other t-btn and t-panel
          findActiveElementAndRemoveIt(elem + " .t-btn");
          findActiveElementAndRemoveIt(elem + " .t-panel");

          //add active class on clicked tab
          e.target.classList.add("active");

          setTimeout(function () {
            var panel = document.querySelectorAll(
              elem + " .t-panel." + e.target.dataset.name
            );
            Array.prototype.forEach.call(panel, function (el) {
              //add active class on right t-panel after 200ms because of the smooth animation
              el.classList.add("active");
            });
          }, 200);
        }
      }
    });
  }

  //if option true remove active class from added element
  function findActiveElementAndRemoveIt(elem) {
    var elementList = document.querySelectorAll(elem);
    Array.prototype.forEach.call(elementList, function (e) {
      e.classList.remove("active");
    });
  }

  //activate tabs function
  initTab(".tabs");

  new Swiper(".t-btn-slider", {
    //   slidesPerView: 3,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      425: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".t-btn-swiper-button-next",
      prevEl: ".t-btn-swiper-button-prev",
    },
  });

  new Swiper(".news-slider", {
    //   slidesPerView: 3,
    spaceBetween: 30,
    loop: "true",
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        centeredSlides: "false",
        slidesPerView: 2.2,
      },
      425: {
        centeredSlides: "true",
        slidesPerView: 1.2,
      },
      0: {
        centeredSlides: "true",
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".news-swiper-button-next",
      prevEl: ".news-swiper-button-prev",
    },
  });

  new Swiper(".partners-slider", {
    //   slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".partners-swiper-button-next",
      prevEl: ".partners-swiper-button-prev",
    },
    loop: "true",
    breakpoints: {
      1440: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      },
    },
  });

  new Swiper(".reviews-slider", {
    //   slidesPerView: 3,
    spaceBetween: 30,
    loop: "true",
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        centeredSlides: "true",
        slidesPerView: 1,
      },
    },
  });

  articleSliderInit();
  newsSliderInit();
}

function articleSliderInit() {
  const popUpRefLeft = document.querySelector(".projects-swiper-button-next");

  const popUpRefRight = document.querySelector(".projects-swiper-button-prev");

  const paginationSlide = document.querySelector(".swiper-pagination");

  new Swiper(".projects-slider", {
    //   slidesPerView: 3,
    spaceBetween: 30,
    loop: "true",
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.2,
      },
      425: {
        slidesPerView: 1.2,
      },
      0: {
        centeredSlides: "true",
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: popUpRefLeft,
      prevEl: popUpRefRight,
    },
    pagination: {
      el: paginationSlide,
      type: "bullets",
      dynamicBullets: "true",
      clickable: "true",
    },
  });
}

function newsSliderInit() {
  const tPpanel = document.querySelectorAll(".t-panel");

  tPpanel.forEach((e) => {
    const popUpRefLeft = e.querySelector(".projects-swiper-button-next");

    const popUpRefRight = e.querySelector(".projects-swiper-button-prev");

    const paginationSlide = e.querySelector(".swiper-pagination");

    const slider = e.querySelector(".projects-slider");

    new Swiper(slider, {
      spaceBetween: 30,
      loop: "true",
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2.2,
        },
        425: {
          slidesPerView: 1.2,
        },
        0: {
          centeredSlides: "true",
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: popUpRefLeft,
        prevEl: popUpRefRight,
      },
      pagination: {
        el: paginationSlide,
        type: "bullets",
        dynamicBullets: "true",
        clickable: "true",
      },
    });
  });
}
