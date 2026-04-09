import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-logo element-anim-1 scroll-animate" data-animate="active">
              <Link href="/">
                <Image src="/images/povu-logo.png" alt="POVU Coffee Exports" width={200} height={80} style={{ maxHeight: "80px", width: "auto" }} />
              </Link>
              <p style={{ color: '#C9913A', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', marginTop: '10px', fontFamily: 'Roboto, sans-serif' }}>
                The Crown of Every Cup
              </p>
              <p style={{ color: 'rgba(240,230,204,0.5)', fontSize: '14px', marginTop: '15px', lineHeight: '1.7' }}>
                Premium wild-type Robusta from Kyegegwa, Uganda. Ethically sourced, digitally traced.
              </p>
              <p style={{ color: 'rgba(240,230,204,0.3)', fontSize: '12px', marginTop: '10px', fontStyle: 'italic' }}>
                A COTE TECH (U) Ltd Brand Initiative
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-hours element-anim-1 scroll-animate" data-animate="active">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/shop">All Products</Link></li>
                <li><Link href="/product/roasted-robusta-beans">Roasted Beans</Link></li>
                <li><Link href="/product/premium-ground-coffee">Ground Coffee</Link></li>
                <li><Link href="/export">Export & Wholesale</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-hours element-anim-1 scroll-animate" data-animate="active">
              <h5>Company</h5>
              <ul>
                <li><Link href="/story">Our Story</Link></li>
                <li><Link href="/origin">The Origin</Link></li>
                <li><Link href="/about">About POVU</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/export/enquiry">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-contact element-anim-1 scroll-animate" data-animate="active">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Origin :</em>
                  Kyegegwa District, Tooro Kingdom, Western Uganda
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email :</em>
                  hello@povu.coffee
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone :</em>
                  <a href="tel:+256773165989" style={{ color: 'inherit' }}>+256 773 165 989</a>
                </li>
                <li>
                  <i className="fab fa-whatsapp" style={{ marginRight: '8px' }} />
                  <em>WhatsApp :</em>
                  <a href="https://wa.me/256773165989" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+256 773 165 989</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            <div className="kf-copyright element-anim-1 scroll-animate" data-animate="active">
              Copyright &copy; {new Date().getFullYear()} POVU Coffee Exports Limited. All Rights Reserved. | Kyegegwa &middot; Tooro Kingdom &middot; Uganda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
