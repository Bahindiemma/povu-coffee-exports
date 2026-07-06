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
                  I did not build POVU to sell coffee. I built it to change what a cup of
                  Kyegegwa Robusta is worth — to the farmer who grew it and to the world that drinks it.
                </div>
              </div>
              <p style={{ color: '#C9913A', marginTop: '10px', fontSize: '14px' }}>— Emmanuel Bahindi, Founder & CEO</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <h4 style={{ color: '#fff', marginBottom: '15px' }}>The Beginning</h4>
                <p>
                  Born in Kyegegwa District to a mother with a serious mental illness, Emmanuel was
                  raised by his elderly grandmother from three months old. She fed him mashed Irish
                  potatoes mixed with milk — not tradition, but all she could afford.
                </p>
                <h4 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>The Student</h4>
                <p>
                  Despite everything, Emmanuel became the top student in his rural community. A HESFB
                  government loan took him to Makerere University to study Software Engineering. He
                  survived on Kikomando in a leaking room in Nakulabye and coded his first software
                  contract for UGX 600,000.
                </p>
                <h4 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>The Return</h4>
                <p>
                  After founding COTE TECH (U) Ltd, he did what no one expected — he returned to
                  Kyegegwa. Armed with digital farmer profiling, professional grading standards, and
                  above-market pricing, he built what no supply chain had ever offered those farmers:
                  dignity. POVU Coffee was born.
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
