'use client';

import { sliderProps } from '@/kaffe/sliderProps';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainSlider() {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80)' }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Premium Wild-Type Robusta</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Crown <br />
                  of Every Cup
                </h2>
                <div className="kf-bts">
                  <Link href="/shop" className="kf-btn">
                    <span>Shop Now</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="/origin" className="kf-btn dark-btn">
                    <span>Our Origin</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">From Kyegegwa to the World</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Ethically Sourced
                  <br />
                  Digitally Traced
                </h2>
                <div className="kf-bts">
                  <Link href="/export" className="kf-btn">
                    <span>Export Info</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="/story" className="kf-btn dark-btn">
                    <span>Our Story</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80)' }}
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">Fine Robusta Grade SCA 81-84</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  POVU Coffee <br />
                  Uganda
                </h2>
                <div className="kf-bts">
                  <Link href="/shop" className="kf-btn">
                    <span>Browse Products</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="/about" className="kf-btn dark-btn">
                    <span>Learn More</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
}
