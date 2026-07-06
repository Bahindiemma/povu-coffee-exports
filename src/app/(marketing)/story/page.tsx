import Link from 'next/link';
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How POVU Coffee was born — from Kyegegwa roots to global specialty coffee.',
};

export default function StoryPage() {
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
            Our Story
          </h1>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  From Kyegegwa to the World
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  The Story Behind POVU Coffee
                </h3>
              </div>
              <div className="kf-about-quote element-anim-1 scroll-animate" data-animate="active">
                <Image src="/images/quote_img.png" alt="quote" width={40} height={40} />
                <div>
                  POVU was not built to sell coffee. It was built to change what a cup of
                  Kyegegwa Robusta is worth — to the farmer who grew it and to the world that drinks it.
                </div>
              </div>
              <p style={{ color: '#C9913A', marginTop: '10px', fontSize: '14px' }}>— The POVU Promise</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>The Roots</h4>
                <p>
                  POVU begins in the high, red-soiled hills of Kyegegwa District in western Uganda,
                  where Robusta has been grown for generations. For too long that coffee left the
                  region as an anonymous commodity — undervalued, untraceable, and disconnected from
                  the hands that grew it.
                </p>
                <h4 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>The Mission</h4>
                <p>
                  We set out to rebuild that supply chain from the farm up. Through digital farmer
                  profiling, professional grading standards, and above-market pricing, every bean is
                  tied to a real farm and a fair price — proving that Kyegegwa Robusta belongs among
                  the world&apos;s finest specialty coffees.
                </p>
                <h4 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>The Promise</h4>
                <p>
                  Every cup carries that promise forward: full traceability from farm to export,
                  quality that speaks for itself, and dignity for the farmers behind it. POVU Coffee
                  exists to change what a cup of Uganda&apos;s coffee is worth — for the people who
                  grow it and the world that drinks it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  Taste the Story
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Every Cup Tells a Story
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
