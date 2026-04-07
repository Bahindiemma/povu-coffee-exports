import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from 'swiper';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination, Parallax, Scrollbar]);

export const sliderProps = {
  mainSliderSelector: {
    slidesPerView: 1 as const,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 9000,
    },
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
  kfGridCarousel: {
    slidesPerView: 3 as const,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false as const,
    navigation: false as const,
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  },
  kfTestimonialsCarousel: {
    slidesPerView: 3 as const,
    spaceBetween: 30,
    loop: false,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets' as const,
      clickable: true,
    },
    navigation: false as const,
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  },
  kfInstaCarousel: {
    slidesPerView: 3 as const,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false as const,
    navigation: false as const,
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  },
  kfHistory: {
    slidesPerView: 1 as const,
    spaceBetween: 70,
    loop: false,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets' as const,
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
};
