import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How POVU Coffee was born — from Kyegegwa roots to global specialty coffee.',
};

export default function StoryPage() {
  const timeline = [
    { year: 'Birth', event: 'Emmanuel Bahindi born in Kyegegwa District, western Uganda. Raised by grandmother from three months old.' },
    { year: '2011', event: 'Mother passed away. Emmanuel in Primary Six. Grandmother continued raising him.' },
    { year: 'PLE', event: 'Top student — First Grade, 8 aggregates. Won scholarships to Central College Mityana.' },
    { year: 'UCE', event: 'Multiple distinctions at O-Level. Secured HESFB government loan for university.' },
    { year: 'Makerere', event: 'Enrolled in Software Engineering at Makerere University. Built first software contract for UGX 600K.' },
    { year: 'GDSC', event: 'Competed in Google Developer Student Clubs hackathon.' },
    { year: 'Baylor', event: 'Worked with Baylor Uganda on health technology systems.' },
    { year: 'Jan 2024', event: 'Graduated from Makerere University in Software Engineering.' },
    { year: 'COTE TECH', event: 'Founded COTE TECH (U) Limited — building digital systems for African enterprises.' },
    { year: '2025', event: 'Dual export routes established: Entebbe Airport + Mombasa Port.' },
    { year: 'POVU', event: 'Returned to Kyegegwa with digital farmer profiling. Founded POVU Coffee.' },
  ];

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
                <img src="/images/quote_img.png" alt="quote" />
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

      {/* Timeline */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Key Milestones
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              The POVU Journey
            </h3>
          </div>
          <div className="row">
            {timeline.map((item, index) => (
              <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{ marginBottom: '30px' }}>
                <div className="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '36px', color: '#C9913A', fontWeight: 700 }}>{item.year}</span>
                  </div>
                  <div className="desc">
                    <div className="subname">{item.event}</div>
                  </div>
                </div>
              </div>
            ))}
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
