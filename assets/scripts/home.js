
  import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

  const swiper = new Swiper('.media-slider__wrapper', {
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
