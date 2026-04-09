'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getSubtotalUSD, getCount, isEligibleFreeShipping, shippingProgress } = useCartStore();
  const currency = useCurrencyStore((s) => s.currency);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  const subtotal = currency === 'UGX' ? getSubtotal() : getSubtotalUSD();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.78)',
          zIndex: 400, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Shopping cart"
        style={{
          position: 'fixed', top: 0, right: isOpen ? '0' : '-500px',
          width: '470px', maxWidth: '100vw', height: '100vh',
          background: '#131009', zIndex: 401,
          transition: 'right 0.38s cubic-bezier(0.4,0,0.2,1)',
          borderLeft: '0.5px solid rgba(201,145,58,0.18)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.4rem 1.6rem', borderBottom: '0.5px solid rgba(201,145,58,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '24px', fontWeight: 400, color: '#F0E6CC' }}>Your Order</span>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(240,230,204,0.4)', textTransform: 'uppercase' }}>({getCount()})</span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            style={{
              background: 'transparent', border: '0.5px solid rgba(201,145,58,0.18)',
              color: 'rgba(240,230,204,0.4)', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <i className="las la-times" style={{ fontSize: '16px' }} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 0 }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1.2rem', padding: '3rem 2rem', textAlign: 'center' }}>
              <i className="las la-shopping-bag" style={{ fontSize: '48px', color: 'rgba(201,145,58,0.15)' }} />
              <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', fontStyle: 'italic', color: 'rgba(240,230,204,0.4)' }}>Your cart is empty</p>
              <p style={{ fontSize: '12px', color: 'rgba(240,230,204,0.2)', lineHeight: '1.7', maxWidth: '240px' }}>Add a product to begin your POVU order. Every batch ships with an origin certificate.</p>
              <button onClick={closeCart} className="kf-btn dark-btn"><span>Continue Shopping</span></button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{
                padding: '1.2rem 1.6rem', borderBottom: '0.5px solid rgba(201,145,58,0.18)',
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start',
              }}>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#F0E6CC', marginBottom: '2px' }}>{item.name}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(240,230,204,0.4)', marginBottom: '0.75rem' }}>
                    {formatPrice(currency === 'UGX' ? item.priceUGX : item.priceUSD, currency)} each
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'transparent', border: '0.5px solid rgba(201,145,58,0.18)', color: 'rgba(240,230,204,0.4)', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', cursor: 'pointer' }}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span style={{ width: '34px', textAlign: 'center', fontSize: '12px', color: '#F0E6CC', borderTop: '0.5px solid rgba(201,145,58,0.18)', borderBottom: '0.5px solid rgba(201,145,58,0.18)', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'transparent', border: '0.5px solid rgba(201,145,58,0.18)', color: 'rgba(240,230,204,0.4)', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', cursor: 'pointer' }}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'transparent', border: 'none', color: 'rgba(240,230,204,0.2)', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 0', cursor: 'pointer', display: 'block', marginTop: '0.5rem' }}
                  >Remove</button>
                </div>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '19px', color: '#DFB468', whiteSpace: 'nowrap' }}>
                  {formatPrice((currency === 'UGX' ? item.priceUGX : item.priceUSD) * item.quantity, currency)}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.4rem 1.6rem', borderTop: '0.5px solid rgba(201,145,58,0.18)', flexShrink: 0 }}>
            <p style={{ fontSize: '11px', color: 'rgba(240,230,204,0.4)', marginBottom: '0.5rem' }}>
              {isEligibleFreeShipping() ? 'Free delivery within Kampala' : `UGX ${(100000 - getSubtotal()).toLocaleString()} away from free shipping`}
            </p>
            <div style={{ height: '3px', background: 'rgba(240,230,204,0.08)', marginBottom: '1rem' }}>
              <div style={{ height: '3px', background: '#C9913A', transition: 'width 0.4s ease', width: `${shippingProgress()}%`, maxWidth: '100%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'rgba(240,230,204,0.4)', marginBottom: '0.6rem' }}>
              <span>Subtotal</span><span>{formatPrice(subtotal, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', color: '#F0E6CC', fontWeight: 500, paddingTop: '0.75rem', borderTop: '0.5px solid rgba(201,145,58,0.18)', marginTop: '0.4rem' }}>
              <span>Total</span>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '24px', color: '#DFB468' }}>{formatPrice(subtotal, currency)}</span>
            </div>
            <Link href="/checkout" onClick={closeCart}>
              <button style={{
                width: '100%', background: '#C9913A', color: '#0C0906', border: 'none',
                padding: '14px', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
                fontWeight: 500, cursor: 'pointer', marginTop: '1rem', marginBottom: '0.5rem',
                fontFamily: 'Roboto, sans-serif', transition: 'background 0.25s',
              }}>
                Proceed to Checkout
              </button>
            </Link>
            <button
              onClick={closeCart}
              style={{
                width: '100%', background: 'transparent', color: 'rgba(240,230,204,0.4)',
                border: '0.5px solid rgba(201,145,58,0.18)', padding: '11px',
                fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif', transition: 'all 0.2s',
              }}
            >
              Continue Shopping
            </button>
            <p style={{ fontSize: '10px', color: 'rgba(240,230,204,0.2)', textAlign: 'center', marginTop: '0.75rem', lineHeight: '1.65' }}>
              Origin certificate with every order
            </p>
          </div>
        )}
      </div>
    </>
  );
}
