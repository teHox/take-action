function popupSec() {
  console.log(1);
  const popUpSecShowButton = document.querySelectorAll(".news-slider__slide1");
  const popUpSec = document.querySelector("#popup-references");
  const closeButtonSec = document.querySelector(".popup-references__close");
  function closePopUpSec() {
    popUpSec.style.top = "-300%";
  }
  popUpSecShowButton.forEach((e) => {
    e.addEventListener("click", () => {
      popUpSec.style.top = "0";
    });
  });

  popUpSec.addEventListener("click", function (e) {
    if (e.target == this) closePopUpSec();
  });
  closeButtonSec.addEventListener("click", closePopUpSec);

  //

  const popUpRefLeft = document.querySelector(".popup-slider__prev");
  const popUpRefRight = document.querySelector(".popup-slider__next");

  var popupThumbs = new Swiper(".popup-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  new Swiper(".popup-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: popUpRefRight,
      prevEl: popUpRefLeft,
    },
    thumbs: {
      swiper: popupThumbs,
    },
  });
}
window.addEventListener("load", popupSec);
