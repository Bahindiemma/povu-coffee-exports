'use client';

import { useState } from 'react';
import Link from 'next/link';
import { singleProducts, bundles, subscriptions } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import { CartItem } from '@/types';
import toast from 'react-hot-toast';

type Tab = 'singles' | 'bundles' | 'subscriptions';

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<Tab>('singles');
  const addItem = useCartStore((s) => s.addItem);
  const currency = useCurrencyStore((s) => s.currency);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: 'singles', label: 'Single Packs', count: singleProducts.length },
    { key: 'bundles', label: 'Bundles', count: bundles.length },
    { key: 'subscriptions', label: 'Subscriptions', count: subscriptions.length },
  ];

  const handleAddBundle = (bundle: typeof bundles[0]) => {
    const item: CartItem = {
      id: bundle.id,
      name: bundle.name,
      priceUGX: bundle.priceUGX,
      priceUSD: bundle.priceUSD,
      quantity: 1,
      type: 'bundle',
    };
    addItem(item);
    toast.success(`${bundle.name} added to cart`);
  };

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
            Shop POVU
          </h1>
        </div>
      </section>

      {/* Shop Section */}
      <section className="section kf-menu section-bg">
        <div className="container">
          {/* Tab Navigation */}
          <div className="kf-filter" style={{ textAlign: 'center', marginBottom: '40px' }}>
            {tabs.map((tab) => (
              <a
                key={tab.key}
                href="#"
                className={`kf-filter-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab(tab.key); }}
                style={{
                  display: 'inline-block',
                  padding: '10px 25px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: activeTab === tab.key ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: activeTab === tab.key ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.2)',
                  background: activeTab === tab.key ? 'rgba(185,146,114,0.15)' : 'transparent',
                  margin: '5px',
                  cursor: 'pointer',
                  fontFamily: 'Oswald, sans-serif',
                  transition: 'all 0.3s ease',
                }}
              >
                {tab.label} ({tab.count})
              </a>
            ))}
          </div>

          {/* Singles */}
          {activeTab === 'singles' && (
            <div className="kf-menu-items">
              <div className="row">
                {singleProducts.map((product) =>
                  product.variants.map((variant) => (
                    <div key={variant.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                        <div className="image kf-image-hover">
                          <Link href={`/product/${product.slug}`}>
                            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" alt={product.name} />
                          </Link>
                        </div>
                        <div className="desc">
                          <h5 className="name">{product.name} — {variant.size}</h5>
                          <div className="subname">{product.badge} | {product.includes}</div>
                          <div className="price">
                            {formatPrice(currency === 'UGX' ? variant.priceUGX : variant.priceUSD, currency)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Bundles */}
          {activeTab === 'bundles' && (
            <div className="row">
              {bundles.map((bundle) => (
                <div key={bundle.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ marginBottom: '30px' }}>
                  <div className="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active"
                    style={{ position: 'relative', border: bundle.popular ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.15)', padding: '30px 20px', textAlign: 'center' }}>
                    {bundle.popular && (
                      <span style={{
                        position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                        background: '#C9913A', color: '#0e1317', fontSize: '10px', textTransform: 'uppercase',
                        letterSpacing: '0.15em', padding: '4px 15px', fontFamily: 'Roboto, sans-serif', fontWeight: 500,
                      }}>Most Popular</span>
                    )}
                    <div className="desc">
                      <span style={{ fontSize: '11px', color: '#C9913A', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{bundle.badge}</span>
                      <h5 className="name" style={{ marginTop: '10px' }}>{bundle.name}</h5>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', margin: '10px 0', lineHeight: '1.6' }}>{bundle.contents}</p>
                      <div style={{ fontSize: '24px', color: '#fff', fontFamily: 'Oswald, sans-serif', margin: '15px 0' }}>
                        {formatPrice(currency === 'UGX' ? bundle.priceUGX : bundle.priceUSD, currency)}
                      </div>
                      {bundle.savingUGX > 0 && (
                        <p style={{ color: '#3D9E6A', fontSize: '12px', marginBottom: '10px' }}>
                          Save UGX {bundle.savingUGX.toLocaleString()}
                        </p>
                      )}
                      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', marginBottom: '20px' }}>
                        Best for: {bundle.bestFor}
                      </p>
                      <button
                        onClick={() => handleAddBundle(bundle)}
                        className="kf-btn"
                        style={{ width: '100%' }}
                      >
                        <span>Add to Cart</span>
                        <i className="fas fa-shopping-bag" style={{ marginLeft: '8px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subscriptions */}
          {activeTab === 'subscriptions' && (
            <div className="row">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ marginBottom: '30px' }}>
                  <div className="kf-services-item-2 element-anim-1 scroll-animate" data-animate="active"
                    style={{ position: 'relative', border: sub.popular ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.15)', padding: '30px 20px', textAlign: 'center' }}>
                    {sub.popular && (
                      <span style={{
                        position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                        background: '#C9913A', color: '#0e1317', fontSize: '10px', textTransform: 'uppercase',
                        letterSpacing: '0.15em', padding: '4px 15px', fontFamily: 'Roboto, sans-serif', fontWeight: 500,
                      }}>Best Value</span>
                    )}
                    <div className="desc">
                      <span style={{ fontSize: '11px', color: '#C9913A', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{sub.badge}</span>
                      <h5 className="name" style={{ marginTop: '10px' }}>{sub.name}</h5>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', margin: '10px 0', lineHeight: '1.6' }}>{sub.delivery}</p>
                      {!sub.isCustom ? (
                        <div style={{ fontSize: '24px', color: '#fff', fontFamily: 'Oswald, sans-serif', margin: '15px 0' }}>
                          UGX {sub.priceUGX.toLocaleString()}<span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>/month</span>
                        </div>
                      ) : (
                        <div style={{ fontSize: '18px', color: '#C9913A', fontFamily: 'Oswald, sans-serif', margin: '15px 0' }}>
                          Contact for Pricing
                        </div>
                      )}
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontStyle: 'italic', marginBottom: '20px' }}>
                        &ldquo;{sub.promise}&rdquo;
                      </p>
                      <Link href={sub.isCustom ? '/export/enquiry' : '/export/enquiry'} className="kf-btn" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>
                        <span>{sub.isCustom ? 'Contact Us' : 'Subscribe'}</span>
                        <i className="fas fa-chevron-right" style={{ marginLeft: '8px' }} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
