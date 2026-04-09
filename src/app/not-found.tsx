import Link from 'next/link';

export default function NotFound() {
  return (
    <>
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
            Page Not Found
          </h1>
        </div>
      </section>

      <section className="section kf-contacts-form">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <i className="las la-coffee" style={{ fontSize: '72px', color: '#C9913A', display: 'block', marginBottom: '20px' }} />
            <h2 style={{ color: '#fff', fontSize: '28px', fontFamily: 'Oswald, sans-serif', marginBottom: '15px' }}>
              404 — This Cup Is Empty
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the good stuff.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="kf-btn">
                <span>Back to Home</span>
                <i className="fas fa-chevron-right" />
              </Link>
              <Link href="/shop" className="kf-btn dark-btn">
                <span>Shop POVU</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
