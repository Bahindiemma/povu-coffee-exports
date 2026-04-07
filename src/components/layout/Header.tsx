'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { stickyNav } from '@/kaffe/utils';
import { useCartStore } from '@/lib/store/cart';

export default function Header() {
  const openCart = useCartStore((s) => s.openCart);
  const getCount = useCartStore((s) => s.getCount);

  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header && header.className.includes('animated')) {
      setTimeout(() => {
        header.classList.add('opened', 'show');
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState('');
  const activeMenuSet = (value: string) =>
    setActiveMenu(activeMenu === value ? '' : value);
  const activeLi = (value: string): React.CSSProperties =>
    value === activeMenu ? { display: 'block' } : { display: 'none' };

  return (
    <header className={`kf-header ${toggle ? 'animated' : ''}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>Origin :</em> Kyegegwa, Uganda
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            <div className="kf-h-social">
              <a href="https://instagram.com/povu.coffee" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/povucoffee" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://facebook.com/povucoffee" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://wa.me/256773165989" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Exports :</em> Africa, Europe & U.A.E
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="kf-logo">
              <Link href="/">
                <img src="/images/povu-logo.png" alt="POVU Coffee Exports" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/shop">
                    Shop
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li><Link href="/shop">All Products</Link></li>
                    <li><Link href="/product/roasted-robusta-beans">Roasted Beans</Link></li>
                    <li><Link href="/product/premium-ground-coffee">Ground Coffee</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Pages
                    <i className="las la-angle-down" />
                  </a>
                  <ul>
                    <li><Link href="/story">Our Story</Link></li>
                    <li><Link href="/origin">The Origin</Link></li>
                    <li><Link href="/export">Export & Wholesale</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/export/enquiry">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setToggle(!toggle); }}
            >
              <span />
            </a>
            <button
              onClick={openCart}
              className="kf-btn h-btn"
              style={{ position: 'relative', cursor: 'pointer', background: 'transparent', border: '1px solid rgba(201,145,58,0.42)' }}
            >
              <span>
                <i className="las la-shopping-bag" style={{ marginRight: '6px' }} />
                Cart {getCount() > 0 && `(${getCount()})`}
              </span>
            </button>
            <Link href="/shop" className="kf-btn h-btn" style={{ marginLeft: '10px' }}>
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        <div className="kf-main-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="has-children">
              <Link href="/shop">Shop</Link>
              <i className="las la-angle-down" onClick={() => activeMenuSet('shop')} />
              <ul style={activeLi('shop')}>
                <li><Link href="/shop">All Products</Link></li>
                <li><Link href="/product/roasted-robusta-beans">Roasted Beans</Link></li>
                <li><Link href="/product/premium-ground-coffee">Ground Coffee</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Pages</a>
              <i className="las la-angle-down" onClick={() => activeMenuSet('pages')} />
              <ul style={activeLi('pages')}>
                <li><Link href="/story">Our Story</Link></li>
                <li><Link href="/origin">The Origin</Link></li>
                <li><Link href="/export">Export & Wholesale</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/export/enquiry">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link href="/shop" className="kf-btn h-btn">
                <span>Shop Now</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button
                onClick={openCart}
                className="kf-btn h-btn"
                style={{ width: '100%', cursor: 'pointer', background: 'transparent', border: '1px solid rgba(201,145,58,0.42)', marginTop: '10px' }}
              >
                <span>
                  <i className="las la-shopping-bag" style={{ marginRight: '6px' }} />
                  Cart {getCount() > 0 && `(${getCount()})`}
                </span>
              </button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="kf-h-social">
                <a href="https://instagram.com/povu.coffee" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://twitter.com/povucoffee" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://facebook.com/povucoffee" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://wa.me/256773165989" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Origin :</em> Kyegegwa, Uganda
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="kf-h-group">
                <i className="fas fa-envelope" /> <em>Email :</em> hello@povu.coffee
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
