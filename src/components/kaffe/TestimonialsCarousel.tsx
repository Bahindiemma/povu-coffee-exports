'use client';
import Image from "next/image";

import { sliderProps } from '@/kaffe/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviews } from '@/lib/data/content';

export default function TestimonialsCarousel() {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80)' }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
            Customer Feedback
          </div>
          <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
            What Our Clients Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper {...sliderProps.kfTestimonialsCarousel} className="swiper-container">
            <div className="swiper-wrapper">
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <Image src={`/images/rev${(index % 3) + 1}.jpg`} alt={review.name} width={80} height={80} className="w-full h-auto" />
                    </div>
                    <div className="desc">
                      <div className="stars">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <i key={i} className="fas fa-star" />
                        ))}
                      </div>
                      <div className="text">{review.quote}</div>
                      <h5 className="name">
                        {review.name} <em>{review.role}, {review.city}</em>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Duplicate for carousel smoothness */}
              {reviews.map((review, index) => (
                <SwiperSlide key={`dup-${index}`} className="swiper-slide">
                  <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <Image src={`/images/rev${(index % 3) + 1}.jpg`} alt={review.name} width={80} height={80} className="w-full h-auto" />
                    </div>
                    <div className="desc">
                      <div className="stars">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <i key={i} className="fas fa-star" />
                        ))}
                      </div>
                      <div className="text">{review.quote}</div>
                      <h5 className="name">
                        {review.name} <em>{review.role}, {review.city}</em>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
