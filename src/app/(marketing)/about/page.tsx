'use client';

import TestimonialsCarousel from '@/components/kaffe/TestimonialsCarousel';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80)' }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About POVU
          </h1>
        </div>
      </section>

      {/* Section About */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  About POVU Coffee
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Premium Wild-Type Robusta From Kyegegwa, Uganda
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  POVU (POH-VOO) is the Swahili word for foam — the golden crema that crowns a great
                  espresso shot. It is the first signal of quality that any specialty coffee buyer looks
                  for, and Uganda&apos;s wild-type Robusta from Kyegegwa delivers it consistently.
                </p>
                <p style={{ marginTop: '15px' }}>
                  We are a COTE TECH (U) Ltd brand initiative that sources, grades, roasts, and exports
                  specialty-grade Robusta. Every farmer is profiled by name, GPS location, and lot number.
                  Every bag shipped includes a certificate of origin.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li className="element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <img src="/images/choose_icon1.png" alt="Genetics" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Wild-Type Genetics</h5>
                      <div className="subname">
                        Genetically diverse trees, not cloned high-yield varieties.
                        SCA cupping scores 81-84 — Fine Robusta territory.
                      </div>
                    </div>
                  </li>
                  <li className="element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <img src="/images/choose_icon2.png" alt="Traceability" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Digital Traceability</h5>
                      <div className="subname">
                        Custom software built by our founder traces every bean from
                        GPS-tagged farm to your cup.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="/shop" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Shop Now</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80" alt="POVU Coffee" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Numbers */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                <div className="icon"><i className="las la-seedling" /></div>
                <div className="num">2</div>
                <div className="desc">
                  <h5 className="name">Source Districts</h5>
                  <div className="subname">Kyegegwa & Mubende</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                <div className="icon"><i className="las la-laptop-code" /></div>
                <div className="num">100%</div>
                <div className="desc">
                  <h5 className="name">Digitally Traced</h5>
                  <div className="subname">Every farmer profiled</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                <div className="icon"><i className="las la-hand-holding-usd" /></div>
                <div className="num">100%</div>
                <div className="desc">
                  <h5 className="name">Above-Market Pay</h5>
                  <div className="subname">Direct to farmers</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                <div className="icon"><i className="las la-star" /></div>
                <div className="num">81-84</div>
                <div className="desc">
                  <h5 className="name">SCA Cupping Score</h5>
                  <div className="subname">Fine Robusta grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              What Makes Us Different
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              The POVU Difference
            </h3>
          </div>
          <div className="kf-services-items-2 row">
            {[
              { icon: 'las la-dna', name: 'Genetics', desc: 'Wild-type Robusta, not commercial clones. Genetically diverse trees shaped by natural selection.' },
              { icon: 'las la-microchip', name: 'Technology', desc: 'Custom traceability software tracks every bean from GPS-tagged farm to export container.' },
              { icon: 'las la-balance-scale', name: 'Ethics', desc: '100% above-market farmer payments. Direct trade, no middlemen extracting value.' },
              { icon: 'las la-code', name: 'Software Discipline', desc: 'Founded by a software engineer who applies engineering rigor to every supply chain step.' },
            ].map((item, index) => (
              <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <i className={item.icon} style={{ fontSize: '48px', color: '#C9913A' }} />
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  Ready to Experience POVU?
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Shop Premium Kyegegwa Robusta
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link href="/shop" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Shop Now</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
