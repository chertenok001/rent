$(function () {

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init();

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'advantage-animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init();


  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
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
      localStorage.setItem('isSticky', 'true');
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


  $(".menu a, .logo").on("click", function (e) {
    var href = $(this).attr('href');
  
    if (href.startsWith("#")) {
      e.preventDefault();
      var target = $(href);
      
      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top },
          1500
        );
      }
    } 
  });


});

