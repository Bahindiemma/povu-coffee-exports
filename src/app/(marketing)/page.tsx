'use client';
import Image from "next/image";

import MainSlider from '@/components/kaffe/MainSlider';
import TestimonialsCarousel from '@/components/kaffe/TestimonialsCarousel';
import { sliderProps } from '@/kaffe/sliderProps';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { singleProducts } from '@/lib/data/products';
import { blogPosts, stats } from '@/lib/data/content';

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <MainSlider />

      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  About POVU Coffee
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Premium Wild-Type Robusta <br />
                  From Kyegegwa, Uganda
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  POVU (POH-VOO) is the Swahili word for foam — the golden crema that crowns a
                  perfect espresso shot. We source, grade, roast, and export wild-type Robusta coffee
                  exclusively from Kyegegwa and Mubende districts in western Uganda. Every farmer in
                  our supply chain is profiled by name, location, and lot — and paid 100% above
                  market rate.
                </p>
              </div>
              <div className="kf-about-quote element-anim-1 scroll-animate" data-animate="active">
                <Image src="/images/quote_img.png" alt="quote" width={40} height={40} />
                <div>
                  The first signal of quality is the foam on your espresso. Kyegegwa Robusta delivers
                  it every single time.
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="kf-about-image element-anim-1 scroll-animate" data-animate="active">
                <Image src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80" alt="POVU Coffee beans from Kyegegwa" width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - What We Offer */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image kf-image-hover">
                  <Link href="/product/roasted-robusta-beans">
                    <Image src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80" alt="Roasted Beans" width={600} height={400} className="w-full h-auto" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Roasted Robusta Beans</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image kf-image-hover">
                  <Link href="/product/premium-ground-coffee">
                    <Image src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80" alt="Ground Coffee" width={600} height={400} className="w-full h-auto" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-mortar-pestle" />
                  </div>
                  <h5 className="name">Premium Ground Coffee</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image kf-image-hover">
                  <Link href="/export">
                    <Image src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80" alt="Export Services" width={600} height={400} className="w-full h-auto" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-globe-africa" />
                  </div>
                  <h5 className="name">Export & Wholesale</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Menu - Our Products */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80)' }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Kyegegwa Wild-Type Robusta
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              POVU Coffee Products
            </h3>
          </div>
          <div className="kf-menu-items" style={{ backgroundImage: 'url(/assets/images/menu_logo.png)' }}>
            <div className="row">
              {singleProducts.map((product) =>
                product.variants.map((variant) => (
                  <div key={variant.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                      <div className="image kf-image-hover">
                        <Link href={`/product/${product.slug}`}>
                          <Image src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" alt={product.name} width={400} height={300} className="w-full h-auto" />
                        </Link>
                      </div>
                      <div className="desc">
                        <h5 className="name">{product.name} — {variant.size}</h5>
                        <div className="subname">{product.description.slice(0, 60)}...</div>
                        <div className="price">
                          UGX {variant.priceUGX.toLocaleString()} / ${variant.priceUSD}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="align-center" style={{ marginTop: '30px' }}>
            <Link href="/shop" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
              <span>View All Products</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Why Choose POVU */}
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
                <Image src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80" alt="POVU Coffee Quality" width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  Why Choose POVU
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Stop Buying Cheap Coffee. Start Buying Results.
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  POVU sources exclusively from Kyegegwa&apos;s wild-type Robusta trees — genetically diverse,
                  deeply rooted, and shaped by decades of natural selection in volcanic red laterite soil
                  at 1,100–1,300m altitude.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li className="element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <Image src="/images/choose_icon1.png" alt="Wild-Type Genetics" width={48} height={48} />
                    </div>
                    <div className="desc">
                      <h5 className="name">Wild-Type Genetics</h5>
                      <div className="subname">
                        Not cloned, high-yield varieties — these are genetically diverse trees producing
                        SCA 81-84 Fine Robusta with dark chocolate and smoky cedar notes.
                      </div>
                    </div>
                  </li>
                  <li className="element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <Image src="/images/choose_icon2.png" alt="Digital Traceability" width={48} height={48} />
                    </div>
                    <div className="desc">
                      <h5 className="name">Digital Farmer Profiling</h5>
                      <div className="subname">
                        Every bag traces back to a named farmer with GPS coordinates, acreage, yield data.
                        Origin certificate included with every order.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="/about" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Learn More</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gallery Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            {[
              { img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80', name: 'Roasted Beans' },
              { img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80', name: 'Fresh Harvest' },
              { img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', name: 'Espresso Crema' },
              { img: 'https://images.unsplash.com/photo-1524350876685-274059332603?w=600&q=80', name: 'Kyegegwa Farm' },
              { img: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80', name: 'Processing' },
              { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80', name: 'Ground Coffee' },
              { img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80', name: 'Farmer Profiles' },
              { img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80', name: 'Export Ready' },
            ].map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href={item.img} className="has-popup-image">
                      <Image src={item.img} alt={item.name} width={600} height={400} className="w-full h-auto" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Section Testimonials */}
      <TestimonialsCarousel />

      {/* Section Numbers / Stats */}
      <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            {stats.map((stat, index) => (
              <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="kf-numbers-item">
                  <div className="num">{stat.value}</div>
                  <div className="desc">
                    <h5 className="name">{stat.label}</h5>
                    <div className="subname">
                      {index === 0 && 'Kyegegwa & Mubende'}
                      {index === 1 && 'Ready for international shipment'}
                      {index === 2 && 'Farmers paid above commodity rate'}
                      {index === 3 && 'Entebbe Airport & Mombasa Port'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              The POVU Journal
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Stories From the Origin
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <Link href={`/blog/${post.slug}`}>
                      <Image src={['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80','https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80','https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80'][index]} alt={post.title} width={600} height={400} className="w-full h-auto" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">{post.title}</h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      {post.date}
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-clock" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="align-center">
            <Link href="/blog" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
              <span>View All</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA - Export */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  Source Kyegegwa Robusta at Scale
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Export & Wholesale Enquiries Welcome
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link href="/export/enquiry" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Request a Sample</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
