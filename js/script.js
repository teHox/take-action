window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const burgerBtn = document.querySelector(".burger-btn");
  const headerMenu = document.querySelector(".header__right");
  const opacity = document.querySelector(".opacity");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-btn_active");
    headerMenu.classList.toggle("header__right_active");
    opacity.classList.toggle("opacity_active");
  });

  const playButton = document.querySelector(".about-us__play");
  const video = document.querySelector("#myVideo");
  playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
  });

  let tab = document.querySelectorAll(".projects__tab"),
    categories = document.querySelector(".projects__categories"),
    tabContent = document.querySelectorAll(".projects__content");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  categories.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("projects__tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  new Swiper(".projects-slider-1", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".projects-swiper-button-next-1",
      prevEl: ".projects-swiper-button-prev-1",
    },
    pagination: {
      el: ".swiper-pagination-1",
      type: "bullets",
      dynamicBullets: "true",
    },
  });

  new Swiper(".projects-slider-2", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".projects-swiper-button-next-2",
      prevEl: ".projects-swiper-button-prev-2",
    },
    pagination: {
      el: ".swiper-pagination-2",
      type: "bullets",
      dynamicBullets: "true",
    },
  });

  new Swiper(".projects-slider-3", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".projects-swiper-button-next-3",
      prevEl: ".projects-swiper-button-prev-3",
    },
    pagination: {
      el: ".swiper-pagination-3",
      type: "bullets",
      dynamicBullets: "true",
    },
  });

  new Swiper(".projects-slider-4", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".projects-swiper-button-next-4",
      prevEl: ".projects-swiper-button-prev-4",
    },
    pagination: {
      el: ".swiper-pagination-4",
      type: "bullets",
      dynamicBullets: "true",
    },
  });

  new Swiper(".news-slider", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
    navigation: {
      nextEl: ".partners-swiper-button-next",
      prevEl: ".partners-swiper-button-prev",
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3.2,
      },
      768: {
        spaceBetween: 25,

        slidesPerView: 2.8,
      },
      425: {
        slidesPerView: 1.8,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  new Swiper(".reviews-slider", {
    //   slidesPerView: 3,
    spaceBetween: 30,
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
      425: {
        slidesPerView: 1,
      },
    },
  });
}
