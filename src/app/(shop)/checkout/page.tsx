'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import { checkoutSchema, CheckoutFormData } from '@/lib/validations/checkout';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const { items, getSubtotal, getSubtotalUSD, clearCart, isEligibleFreeShipping } = useCartStore();
  const currency = useCurrencyStore((s) => s.currency);
  const subtotal = currency === 'UGX' ? getSubtotal() : getSubtotalUSD();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { deliveryMethod: 'kampala', paymentMethod: 'mtn' },
  });

  const selectedDelivery = watch('deliveryMethod');
  const selectedPayment = watch('paymentMethod');

  const onSubmit = async (data: CheckoutFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, items, subtotal: getSubtotal() }),
      });
      const result = await res.json();
      if (res.ok) {
        clearCart();
        router.push(`/order-confirmed?order=${result.orderNumber}`);
      } else {
        toast.error('Order failed. Please try again.');
      }
    } catch {
      toast.error('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <section className="section kf-started-inner">
          <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
          <div className="container"><h1 className="kf-h-title">Cart is Empty</h1></div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link href="/shop" className="kf-btn"><span>Shop Now</span><i className="fas fa-chevron-right" /></Link>
          </div>
        </section>
      </>
    );
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%', border: '1px solid rgba(185,146,114,0.2)', background: 'transparent',
    padding: '12px 15px', color: '#fff', fontSize: '14px', outline: 'none',
    fontFamily: 'Roboto, sans-serif', transition: 'border-color 0.3s ease',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '11px', color: '#C9913A', textTransform: 'uppercase',
    letterSpacing: '0.15em', marginBottom: '6px', fontFamily: 'Roboto, sans-serif',
  };
  const errorStyle: React.CSSProperties = { color: '#ff5555', fontSize: '12px', marginTop: '4px' };

  return (
    <>
      <section className="section kf-started-inner">
        <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
        <div className="container">
          <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Checkout
          </h1>
        </div>
      </section>

      <section className="section kf-reservation">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* Form Fields */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-reservation-form element-anim-1 scroll-animate" data-animate="active">
                  {/* Contact Details */}
                  <div className="kf-titles">
                    <div className="kf-subtitle">Contact Details</div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '15px' }}>
                      <label style={labelStyle}>Full Name</label>
                      <input {...register('fullName')} placeholder="Emmanuel Bahindi" style={fieldStyle} />
                      {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '15px' }}>
                      <label style={labelStyle}>Email</label>
                      <input {...register('email')} type="email" placeholder="hello@povu.coffee" style={fieldStyle} />
                      {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '15px' }}>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input {...register('phone')} placeholder="+256 773 165 989" style={fieldStyle} />
                      {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '15px' }}>
                      <label style={labelStyle}>Country</label>
                      <select {...register('country')} style={fieldStyle}>
                        <option value="">Select country</option>
                        <option value="UG">Uganda</option><option value="KE">Kenya</option>
                        <option value="DE">Germany</option><option value="NL">Netherlands</option>
                        <option value="SE">Sweden</option><option value="GB">United Kingdom</option>
                        <option value="US">United States</option><option value="OTHER">Other</option>
                      </select>
                      {errors.country && <p style={errorStyle}>{errors.country.message}</p>}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: '15px' }}>
                      <label style={labelStyle}>Delivery Address</label>
                      <input {...register('address')} placeholder="Plot 12, Kampala Road..." style={fieldStyle} />
                      {errors.address && <p style={errorStyle}>{errors.address.message}</p>}
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div className="kf-titles" style={{ marginTop: '30px' }}>
                    <div className="kf-subtitle">Delivery Method</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {([
                      { value: 'kampala' as const, label: 'Kampala Delivery', desc: '1–2 days. Free above UGX 100,000.' },
                      { value: 'international' as const, label: 'International Shipping', desc: '7–14 days (air) or 3–6 weeks (ocean).' },
                      { value: 'pickup' as const, label: 'Pick Up', desc: 'Collect from our Kampala location.' },
                    ]).map((opt) => (
                      <label key={opt.value} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px',
                        border: selectedDelivery === opt.value ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.15)',
                        background: selectedDelivery === opt.value ? 'rgba(185,146,114,0.08)' : 'transparent',
                        cursor: 'pointer', transition: 'all 0.3s ease',
                      }}>
                        <input type="radio" value={opt.value} {...register('deliveryMethod')} style={{ marginTop: '3px', accentColor: '#C9913A' }} />
                        <div>
                          <p style={{ color: '#fff', fontSize: '14px' }}>{opt.label}</p>
                          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>{opt.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Payment Method */}
                  <div className="kf-titles" style={{ marginTop: '30px' }}>
                    <div className="kf-subtitle">Payment Method</div>
                  </div>
                  <div className="row" style={{ marginBottom: '20px' }}>
                    {([
                      { value: 'mtn' as const, label: 'MTN Mobile Money' },
                      { value: 'airtel' as const, label: 'Airtel Money' },
                      { value: 'bank' as const, label: 'Bank Transfer' },
                      { value: 'paypal' as const, label: 'PayPal / Card' },
                    ]).map((opt) => (
                      <div key={opt.value} className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{ marginBottom: '8px' }}>
                        <label style={{
                          display: 'flex', alignItems: 'center', gap: '10px', padding: '15px',
                          border: selectedPayment === opt.value ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.15)',
                          background: selectedPayment === opt.value ? 'rgba(185,146,114,0.08)' : 'transparent',
                          cursor: 'pointer', transition: 'all 0.3s ease',
                        }}>
                          <input type="radio" value={opt.value} {...register('paymentMethod')} style={{ accentColor: '#C9913A' }} />
                          <span style={{ color: '#fff', fontSize: '13px' }}>{opt.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Notes */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Order Notes (optional)</label>
                    <textarea {...register('notes')} rows={3} placeholder="Special instructions..." style={fieldStyle} />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div style={{
                  position: 'sticky', top: '120px',
                  border: '1px solid rgba(185,146,114,0.2)', padding: '30px',
                }}>
                  <h3 style={{ color: '#fff', fontSize: '22px', fontFamily: 'Oswald, sans-serif', marginBottom: '20px' }}>
                    Order Summary
                  </h3>
                  <div style={{ borderBottom: '1px solid rgba(185,146,114,0.15)', paddingBottom: '15px', marginBottom: '15px' }}>
                    {items.map((item) => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{item.name} &times; {item.quantity}</span>
                        <span style={{ color: '#fff', fontSize: '13px' }}>{formatPrice((currency === 'UGX' ? item.priceUGX : item.priceUSD) * item.quantity, currency)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Subtotal</span>
                    <span style={{ color: '#fff', fontSize: '13px' }}>{formatPrice(subtotal, currency)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Shipping</span>
                    <span style={{ color: '#fff', fontSize: '13px' }}>{isEligibleFreeShipping() ? 'Free' : 'TBD'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(185,146,114,0.2)', paddingTop: '15px', marginBottom: '20px' }}>
                    <span style={{ color: '#fff', fontSize: '16px', fontFamily: 'Oswald, sans-serif' }}>Total</span>
                    <span style={{ color: '#C9913A', fontSize: '26px', fontFamily: 'Oswald, sans-serif' }}>{formatPrice(subtotal, currency)}</span>
                  </div>
                  <button type="submit" className="kf-btn" disabled={submitting} style={{ width: '100%', textAlign: 'center' }}>
                    <span>{submitting ? 'Placing Order...' : 'Place Order'}</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                  <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '11px', marginTop: '10px' }}>
                    Payment details sent via WhatsApp and email within 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
