$(function () {

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init();

  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.feedback__btn--left',
      prevEl: '.feedback__btn--right',
    },
    mousewheel: true,
  });

});