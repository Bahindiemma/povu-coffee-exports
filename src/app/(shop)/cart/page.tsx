'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, getSubtotalUSD, getCount, isEligibleFreeShipping, shippingProgress } = useCartStore();
  const currency = useCurrencyStore((s) => s.currency);
  const subtotal = currency === 'UGX' ? getSubtotal() : getSubtotalUSD();

  if (items.length === 0) {
    return (
      <>
        <section className="section kf-started-inner">
          <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
          <div className="container">
            <h1 className="kf-h-title">Your Cart is Empty</h1>
          </div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <i className="las la-shopping-bag" style={{ fontSize: '64px', color: 'rgba(185,146,114,0.2)', display: 'block', marginBottom: '20px' }} />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', marginBottom: '30px' }}>Add some POVU coffee to get started.</p>
            <Link href="/shop" className="kf-btn"><span>Continue Shopping</span><i className="fas fa-chevron-right" /></Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="section kf-started-inner">
        <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
        <div className="container">
          <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Your Cart
          </h1>
        </div>
      </section>

      {/* Cart Items */}
      <section className="section kf-menu section-bg">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  {getCount()} Items in Cart
                </div>
              </div>

              {/* Items */}
              {items.map((item) => (
                <div key={item.id} className="kf-menu-item element-anim-1 scroll-animate" data-animate="active"
                  style={{ borderBottom: '1px solid rgba(185,146,114,0.15)', paddingBottom: '20px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
                    <div style={{ flex: 1 }}>
                      <h5 className="name">{item.name}</h5>
                      <div className="subname">
                        {formatPrice(currency === 'UGX' ? item.priceUGX : item.priceUSD, currency)} each
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '30px', height: '30px', border: '1px solid rgba(185,146,114,0.2)', background: 'transparent', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '16px' }}
                      >−</button>
                      <span style={{ width: '30px', textAlign: 'center', color: '#fff', fontSize: '14px' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '30px', height: '30px', border: '1px solid rgba(185,146,114,0.2)', background: 'transparent', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '16px' }}
                      >+</button>
                    </div>
                    <div className="price" style={{ minWidth: '120px', textAlign: 'right' }}>
                      {formatPrice((currency === 'UGX' ? item.priceUGX : item.priceUSD) * item.quantity, currency)}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.2)', cursor: 'pointer', fontSize: '18px' }}
                      title="Remove"
                    >
                      <i className="las la-times" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Shipping Progress */}
              <div style={{ margin: '20px 0', padding: '15px 0', borderTop: '1px solid rgba(185,146,114,0.15)' }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginBottom: '8px' }}>
                  {isEligibleFreeShipping() ? 'Free shipping unlocked!' : `UGX ${(100000 - getSubtotal()).toLocaleString()} away from free shipping`}
                </p>
                <div style={{ height: '2px', width: '100%', background: 'rgba(185,146,114,0.1)' }}>
                  <div style={{ height: '2px', background: '#C9913A', transition: 'width 0.5s ease', width: `${shippingProgress()}%` }} />
                </div>
              </div>

              {/* Totals */}
              <div style={{ borderTop: '1px solid rgba(185,146,114,0.2)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Subtotal</span>
                  <span style={{ color: '#fff', fontSize: '14px' }}>{formatPrice(subtotal, currency)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Shipping</span>
                  <span style={{ color: '#fff', fontSize: '14px' }}>{isEligibleFreeShipping() ? 'Free' : 'Calculated at checkout'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(185,146,114,0.2)', paddingTop: '15px', marginTop: '15px' }}>
                  <span style={{ color: '#fff', fontSize: '18px', fontFamily: 'Oswald, sans-serif' }}>Total</span>
                  <span style={{ color: '#C9913A', fontSize: '28px', fontFamily: 'Oswald, sans-serif' }}>{formatPrice(subtotal, currency)}</span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                <Link href="/checkout" className="kf-btn" style={{ flex: 1, textAlign: 'center' }}>
                  <span>Proceed to Checkout</span>
                  <i className="fas fa-chevron-right" />
                </Link>
                <Link href="/shop" className="kf-btn dark-btn">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
