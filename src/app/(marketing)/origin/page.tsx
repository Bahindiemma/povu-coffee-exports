import Link from 'next/link';
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Origin',
  description: 'Kyegegwa District, Uganda — where POVU wild-type Robusta grows at altitude.',
};

export default function OriginPage() {
  const specs = [
    { label: 'Altitude', value: '1,100 – 1,300m', icon: 'las la-mountain' },
    { label: 'Annual Rainfall', value: '1,200mm/year', icon: 'las la-cloud-rain' },
    { label: 'Soil Type', value: 'Volcanic Red Laterite', icon: 'las la-globe-africa' },
    { label: 'Temperature', value: '20 – 28°C', icon: 'las la-thermometer-half' },
  ];

  const process = [
    { step: '01', title: 'Harvest', desc: 'Hand-picked ripe cherries from wild-type trees' },
    { step: '02', title: 'Wet Processing', desc: 'Fermentation and washing at local collection points' },
    { step: '03', title: 'Drying', desc: 'Sun-dried on raised beds to 11-12% moisture' },
    { step: '04', title: 'Grading', desc: 'Screen-sorted, density-graded, cupped for SCA score' },
    { step: '05', title: 'Roasting', desc: 'Medium-dark profile optimised for crema and body' },
    { step: '06', title: 'Export', desc: 'Shipped via Entebbe Airport or Mombasa Port' },
  ];

  return (
    <>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            The Origin
          </h1>
        </div>
      </section>

      {/* Kyegegwa Section */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  Kyegegwa, Uganda
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  In the Foothills of the Rwenzori Mountains
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  In Kyegegwa District, within the ancient Tooro Kingdom of western Uganda, coffee
                  grows differently. These are not cloned, high-yield Robusta varieties — these are
                  wild-type trees shaped by decades of natural selection.
                </p>
                <p style={{ marginTop: '15px' }}>
                  The volcanic red laterite soil, rich in iron and organic matter, combined with altitude
                  at 1,100 to 1,300 metres, slows cherry maturation and develops complexity that
                  commercial Robusta rarely achieves.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
                <Image src="https://images.unsplash.com/photo-1524350876685-274059332603?w=800&q=80" alt="Kyegegwa farmland" width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Specs */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            {specs.map((spec, index) => (
              <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                  <div className="icon"><i className={spec.icon} /></div>
                  <div className="num" style={{ fontSize: '20px' }}>{spec.value}</div>
                  <div className="desc">
                    <h5 className="name">{spec.label}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wild-Type Science */}
      <section className="section kf-about">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Wild-Type Robusta Science
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Cup Profile & Tasting Notes
            </h3>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active" style={{ textAlign: 'center' }}>
                <p>
                  The result is a cup profile that surprises even specialty buyers: <strong style={{ color: '#fff' }}>dark
                  chocolate body, roasted cocoa, damp earth after rain, smoky cedar, and walnut</strong>. SCA
                  cupping scores consistently land between 81 and 84 — firmly in Fine Robusta territory.
                </p>
                <p style={{ marginTop: '15px' }}>
                  The crema density from POVU Robusta is unmatched by any single-origin Arabica — persistent,
                  golden, and lasting 3-4 minutes in the cup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Farm to Cup */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              From Farm to Cup
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Our Process
            </h3>
          </div>
          <div className="row">
            {process.map((item) => (
              <div key={item.step} className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{ marginBottom: '30px' }}>
                <div className="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '48px', color: '#C9913A', fontWeight: 700 }}>{item.step}</span>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.title}</h5>
                    <div className="subname">{item.desc}</div>
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
                  Taste the Terroir
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Experience Kyegegwa in Every Cup
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
