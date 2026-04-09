'use client';
import Image from "next/image";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { singleProducts } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import { CartItem } from '@/types';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = singleProducts.find((p) => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const currency = useCurrencyStore((s) => s.currency);

  if (!product) {
    return (
      <>
        <section className="section kf-started-inner">
          <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
          <div className="container">
            <h1 className="kf-h-title">Product Not Found</h1>
          </div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link href="/shop" className="kf-btn"><span>Back to Shop</span><i className="fas fa-chevron-right" /></Link>
          </div>
        </section>
      </>
    );
  }

  const variant = product.variants[selectedVariant];
  const price = currency === 'UGX' ? variant.priceUGX : variant.priceUSD;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: variant.id,
      name: `${product.name} (${variant.size})`,
      variant: variant.size,
      priceUGX: variant.priceUGX,
      priceUSD: variant.priceUSD,
      quantity,
      type: 'single',
    };
    addItem(item);
    toast.success(`${product.name} added to cart`);
  };

  const otherProduct = singleProducts.find((p) => p.id !== product.id);

  return (
    <>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div className="kf-parallax-bg js-parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=1920&q=80)' }} />
        <div className="container">
          <h1 className="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Product Details */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            {/* Product Image / Visual */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-choose-image element-anim-1 scroll-animate" data-animate="active"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(28,21,16,0.5)', border: '1px solid rgba(185,146,114,0.15)', padding: '60px 30px' }}>
                <svg viewBox="0 0 200 300" style={{ height: '320px', width: '220px' }}>
                  <rect x="15" y="0" width="170" height="270" rx="6" fill="#1C1510" stroke="#C9913A" strokeWidth="0.5" opacity="0.8" />
                  <rect x="30" y="25" width="140" height="70" rx="3" fill="none" stroke="#C9913A" strokeWidth="0.3" opacity="0.4" />
                  <text x="100" y="55" textAnchor="middle" fill="#C9913A" fontSize="16" fontFamily="Merienda, serif" fontWeight="400">POVU</text>
                  <text x="100" y="75" textAnchor="middle" fill="#F0E6CC" fontSize="6" fontFamily="Roboto, sans-serif" opacity="0.6" letterSpacing="3">COFFEE</text>
                  <text x="100" y="130" textAnchor="middle" fill="#F0E6CC" fontSize="7" fontFamily="Roboto, sans-serif" opacity="0.5">{product.name}</text>
                  <text x="100" y="155" textAnchor="middle" fill="#d4a97a" fontSize="10" fontFamily="Roboto, sans-serif">{variant.size}</text>
                  <rect x="15" y="230" width="170" height="40" rx="0" fill="#C9913A" opacity="0.12" />
                  <text x="100" y="255" textAnchor="middle" fill="#C9913A" fontSize="7" fontFamily="Roboto, sans-serif" letterSpacing="2">KYEGEGWA · UGANDA</text>
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  {product.badge}
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  {product.name}
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>{product.description}</p>
                <p style={{ marginTop: '15px', color: '#3D9E6A', fontStyle: 'italic' }}>&ldquo;{product.promise}&rdquo;</p>
              </div>

              {/* Aroma Profile */}
              {product.aroma && (
                <div className="element-anim-1 scroll-animate" data-animate="active" style={{ margin: '20px 0' }}>
                  <p style={{ fontSize: '11px', color: '#C9913A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Aroma Profile</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.aroma.map((note) => (
                      <span key={note} style={{ border: '1px solid rgba(185,146,114,0.3)', padding: '4px 12px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{note}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Grinds */}
              {product.grinds && (
                <div className="element-anim-1 scroll-animate" data-animate="active" style={{ margin: '20px 0' }}>
                  <p style={{ fontSize: '11px', color: '#C9913A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Available Grinds</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.grinds.map((grind) => (
                      <span key={grind} style={{ border: '1px solid rgba(185,146,114,0.3)', padding: '4px 12px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{grind}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              <div style={{ margin: '20px 0' }}>
                <p style={{ fontSize: '11px', color: '#C9913A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Size</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {product.variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(i)}
                      style={{
                        padding: '8px 20px',
                        fontSize: '13px',
                        border: i === selectedVariant ? '1px solid #C9913A' : '1px solid rgba(185,146,114,0.2)',
                        background: i === selectedVariant ? 'rgba(185,146,114,0.15)' : 'transparent',
                        color: i === selectedVariant ? '#C9913A' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {v.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div style={{ margin: '20px 0', display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                <span style={{ fontSize: '32px', color: '#C9913A', fontFamily: 'Oswald, sans-serif' }}>
                  {formatPrice(price, currency)}
                </span>
                {product.sca_score && (
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>SCA {product.sca_score}</span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(185,146,114,0.2)' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '10px 15px', color: 'rgba(255,255,255,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px' }}>−</button>
                  <span style={{ width: '40px', textAlign: 'center', color: '#fff', fontSize: '14px' }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '10px 15px', color: 'rgba(255,255,255,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px' }}>+</button>
                </div>
                <button onClick={handleAddToCart} className="kf-btn">
                  <span>Add to Cart — {formatPrice(price * quantity, currency)}</span>
                  <i className="fas fa-shopping-bag" style={{ marginLeft: '8px' }} />
                </button>
              </div>

              {/* Meta Info */}
              <div style={{ borderTop: '1px solid rgba(185,146,114,0.15)', paddingTop: '15px' }}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', marginBottom: '5px' }}>Includes: {product.includes}</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', marginBottom: '5px' }}>Origin: Kyegegwa District, Tooro Kingdom, Uganda</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>Free shipping on orders above UGX 100,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Product */}
      {otherProduct && (
        <section className="section kf-menu section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">You May Also Like</div>
            </div>
            <div className="kf-menu-items">
              <div className="row" style={{ justifyContent: 'center' }}>
                {otherProduct.variants.slice(0, 2).map((v) => (
                  <div key={v.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                      <div className="image kf-image-hover">
                        <Link href={`/product/${otherProduct.slug}`}>
                          <Image src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&q=80" alt={otherProduct.name} width={400} height={300} className="w-full h-auto" />
                        </Link>
                      </div>
                      <div className="desc">
                        <h5 className="name">{otherProduct.name} — {v.size}</h5>
                        <div className="subname">{otherProduct.badge}</div>
                        <div className="price">{formatPrice(currency === 'UGX' ? v.priceUGX : v.priceUSD, currency)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
