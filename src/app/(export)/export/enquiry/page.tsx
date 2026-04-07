'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function ExportEnquiryPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'export' }),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success('Enquiry sent!');
      } else {
        toast.error('Failed to send.');
      }
    } catch {
      toast.error('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }}
          />
          <div className="container">
            <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
              Enquiry Received
            </h1>
          </div>
        </section>
        <section className="section kf-contacts-form">
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <i className="las la-check-circle" style={{ fontSize: '64px', color: '#C9913A', display: 'block', marginBottom: '20px' }} />
              <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '15px', fontFamily: 'Oswald, sans-serif' }}>Thank You!</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                We will respond with a tailored quotation and sample offer within 48 hours.
              </p>
              <Link href="/export" className="kf-btn">
                <span>Back to Export</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }}
        />
        <div className="container">
          <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Request a Sample
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div className="kf-reservation-form element-anim-1 scroll-animate" data-animate="active">
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Export Enquiry</div>
              <h3 className="kf-title">Request a Sample Lot</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="company" placeholder="Company Name *" required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Contact Name *" required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="email" name="email" placeholder="Email Address *" required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="country" placeholder="Country *" required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="volume" placeholder="Monthly Volume (kg) *" required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <select name="product">
                      <option value="green">Green Beans (export grade)</option>
                      <option value="roasted">Roasted Beans</option>
                      <option value="ground">Ground Coffee</option>
                      <option value="mixed">Mixed / Custom</option>
                    </select>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea name="message" rows={4} placeholder="Tell us about your requirements..." />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
                  <button type="submit" className="kf-btn" disabled={submitting}>
                    <span>{submitting ? 'Sending...' : 'Submit Enquiry'}</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
