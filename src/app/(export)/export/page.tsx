import type { Metadata } from 'next';
import Link from 'next/link';
import { exportMarkets } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Export & Wholesale',
  description: 'POVU Coffee B2B export — premium Robusta for specialty roasters and importers.',
};

export default function ExportPage() {
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
            Export & Wholesale
          </h1>
        </div>
      </section>

      {/* Features */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              B2B & Export
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Source Kyegegwa Robusta at Scale
            </h3>
          </div>
          <div className="kf-numbers-items-2 row">
            {[
              { icon: 'las la-globe', name: 'Global Reach', desc: 'Germany, Netherlands, Scandinavia, Kenya, and domestic Uganda.' },
              { icon: 'las la-file-alt', name: 'Full Traceability', desc: 'Farmer profile, lot number, GPS coordinates, cupping notes.' },
              { icon: 'las la-ship', name: 'Dual Routes', desc: 'FOB Mombasa (ocean) or Ex Works Entebbe (air). CIF available.' },
              { icon: 'las la-certificate', name: 'Licensed & Certified', desc: 'UCDA export licence. Phytosanitary certificate. ICO compliant.' },
            ].map((item, index) => (
              <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="kf-numbers-item-2 element-anim-1 scroll-animate" data-animate="active">
                  <div className="icon"><i className={item.icon} /></div>
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

      {/* Target Markets */}
      <section className="section kf-about">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Where We Export
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Target Markets
            </h3>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(185,146,114,0.3)' }}>
                    <th style={{ padding: '12px 0', textAlign: 'left', color: '#C9913A', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Country</th>
                    <th style={{ padding: '12px 0', textAlign: 'left', color: '#C9913A', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {exportMarkets.map((m, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(185,146,114,0.1)' }}>
                      <td style={{ padding: '15px 0', color: '#fff', fontSize: '15px' }}>{m.country}</td>
                      <td style={{ padding: '15px 0', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>{m.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Technical Details
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Product Specifications
            </h3>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
              {[
                { label: 'Species', value: 'Coffea canephora (Robusta)' },
                { label: 'Type', value: 'Wild-type, genetically diverse' },
                { label: 'Origin', value: 'Kyegegwa & Mubende, Uganda' },
                { label: 'Altitude', value: '1,100–1,300 metres' },
                { label: 'Processing', value: 'Washed / Natural' },
                { label: 'SCA Score', value: '81–84 (Fine Robusta)' },
                { label: 'Screen Size', value: '15+ (90%+ above screen 15)' },
                { label: 'Moisture', value: '10–12%' },
                { label: 'Defects', value: '< 5 full defects per 300g' },
                { label: 'Packaging', value: '60kg GrainPro-lined jute bags' },
              ].map((spec, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(185,146,114,0.1)',
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>{spec.label}</span>
                  <span style={{ color: '#fff', fontSize: '14px' }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              How It Works
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Three Steps to Source POVU
            </h3>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            {[
              { step: '01', title: 'Request Sample', desc: 'Fill out the enquiry form or email hello@povu.coffee.' },
              { step: '02', title: 'Receive & Cup', desc: 'We send a sample with full documentation.' },
              { step: '03', title: 'Contract & Ship', desc: 'Agree on terms, confirm lot, and we ship.' },
            ].map((item) => (
              <div key={item.step} className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
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
                  Ready to Source?
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Request a Sample Lot Today
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link href="/export/enquiry" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Request Sample</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
