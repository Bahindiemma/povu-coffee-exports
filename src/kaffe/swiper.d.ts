declare module 'swiper' {
  import SwiperCore from 'swiper/types';
  export default SwiperCore;
  export const Autoplay: any;
  export const EffectFade: any;
  export const EffectCreative: any;
  export const Grid: any;
  export const Mousewheel: any;
  export const Navigation: any;
  export const Pagination: any;
  export const Parallax: any;
  export const Scrollbar: any;
}

declare module 'swiper/react' {
  import { ComponentType } from 'react';
  export const Swiper: ComponentType<any>;
  export const SwiperSlide: ComponentType<any>;
}
