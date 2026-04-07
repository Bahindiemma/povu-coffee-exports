'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

function OrderConfirmedContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || 'POVU-0000';

  return (
    <>
      <section className="section kf-started-inner">
        <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
        <div className="container">
          <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Order Confirmed!
          </h1>
        </div>
      </section>

      <section className="section kf-contacts-form">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <i className="las la-check-circle" style={{ fontSize: '72px', color: '#C9913A', display: 'block', marginBottom: '20px' }} />
            <h3 style={{ color: '#fff', fontSize: '28px', fontFamily: 'Oswald, sans-serif', marginBottom: '10px' }}>
              Thank You for Your Order!
            </h3>
            <p style={{ color: '#C9913A', fontSize: '22px', fontFamily: 'Oswald, sans-serif', marginBottom: '30px' }}>
              {orderNumber}
            </p>

            <div style={{
              border: '1px solid rgba(185,146,114,0.2)',
              padding: '30px',
              textAlign: 'left',
              marginBottom: '30px',
            }}>
              <h4 style={{ color: '#C9913A', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '15px' }}>
                What Happens Next
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Your order will be confirmed within 2 hours via WhatsApp and email.',
                  'Payment details (Mobile Money, Bank Transfer, or PayPal) will be included in the confirmation message.',
                  'Your POVU coffee will ship with a certificate of origin — source district, roast date, and lot reference.',
                ].map((text, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    marginBottom: '12px',
                  }}>
                    <span style={{ width: '6px', height: '6px', background: '#C9913A', flexShrink: 0, marginTop: '8px' }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/shop" className="kf-btn">
              <span>Continue Shopping</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'rgba(255,255,255,0.3)' }}>Loading...</p>
        </div>
      </section>
    }>
      <OrderConfirmedContent />
    </Suspense>
  );
}
