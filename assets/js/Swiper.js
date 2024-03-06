

const wwdSwiper = new Swiper(".homepage_swiper", {
  spaceBetween: 30,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

