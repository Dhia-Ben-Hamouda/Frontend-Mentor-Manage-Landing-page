const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    spaceBetween:24,
    autoplay: {
      delay:3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
  });