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



  $(window).on('load', function () {
    if (localStorage.getItem('isSticky') === 'true') {
      $(".header").addClass("header--fixed");
    } else {
      $("header").removeClass("header--fixed");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header").addClass("header--fixed");
      localStorage.setIten('isSticky', 'true');
    } else {
      $(".header").removeClass("header--fixed");
      localStorage.setItem('isSticky', 'false');
    }
  });


  const burger = document.querySelector('.menu__btn');
  const mobileMenu = document.querySelector('.menu-mobile');
  const bodyLock = document.querySelector('body');

  if (!burger || !mobileMenu) {
    console.error();
    return;
  }

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mobile--active');
    burger.classList.toggle('menu__btn--active');

    if (mobileMenu.classList.contains('menu-mobile--active')) {
      bodyLock.classList.add('lock');
    } else {
      bodyLock.classList.remove('lock');
    }
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove('menu-mobile--active');
      burger.classList.remove('menu__btn--active');
      bodyLock.classList.remove('lock');
    }
  });



});