import type { Metadata } from 'next';
import { faqs } from '@/lib/data/content';
import JsonLd, { faqSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about POVU Coffee, ordering, delivery, and exports.',
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
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
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section kf-faq">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Help Centre
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
              <div className="kf-faq-items">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                    style={{
                      borderBottom: '1px solid rgba(185,146,114,0.2)',
                      padding: '20px 0',
                    }}
                  >
                    <summary style={{
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '18px',
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 400,
                      listStyle: 'none',
                    }}>
                      {faq.question}
                    </summary>
                    <p style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '15px',
                      lineHeight: '1.8',
                      marginTop: '15px',
                    }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
