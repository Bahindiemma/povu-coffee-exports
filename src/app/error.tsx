'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80)' }}
        />
        <div className="container">
          <h1 className="kf-h-title">Something Went Wrong</h1>
        </div>
      </section>

      <section className="section kf-contacts-form">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <i className="las la-exclamation-triangle" style={{ fontSize: '72px', color: '#C9913A', display: 'block', marginBottom: '20px' }} />
            <h2 style={{ color: '#fff', fontSize: '24px', fontFamily: 'Oswald, sans-serif', marginBottom: '15px' }}>
              An unexpected error occurred
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
              We apologise for the inconvenience. Please try again or contact us at hello@povu.coffee.
            </p>
            <button onClick={reset} className="kf-btn">
              <span>Try Again</span>
              <i className="fas fa-redo" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
