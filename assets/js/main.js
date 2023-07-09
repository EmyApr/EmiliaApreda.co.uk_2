  // TESTIMONIAL SWIPER //
const tSwiper = new Swiper('.testimonials-container', {
  speed: 600,
  longSwipes:true,
  draggable: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      navigationDisabledClass: 'swiper-navigation-disabled',
    }
}});


