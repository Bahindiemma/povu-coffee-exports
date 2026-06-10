'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const QUICK_LINKS = [
  { label: 'All Products', href: '/shop' },
  { label: 'Roasted Beans', href: '/product/roasted-robusta-beans' },
  { label: 'Ground Coffee', href: '/product/premium-ground-coffee' },
  { label: 'Export & Wholesale', href: '/export' },
  { label: 'Blog', href: '/blog' },
];

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/story' },
  { label: 'The Origin', href: '/origin' },
  { label: 'About POVU', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/export/enquiry' },
];

const SOCIALS = [
  { icon: 'fab fa-instagram', href: 'https://instagram.com/povu.coffee' },
  { icon: 'fab fa-twitter', href: 'https://twitter.com/povucoffee' },
  { icon: 'fab fa-facebook-f', href: 'https://facebook.com/povucoffee' },
  { icon: 'fab fa-whatsapp', href: 'https://wa.me/256773165989' },
];

function Steam() {
  return (
    <div aria-hidden className="pointer-events-none mb-2 flex h-16 items-end justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-px rounded-full bg-gradient-to-t from-transparent via-gold/50 to-transparent"
          style={{ height: 56 }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [4, -6, 4] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Welcome to the POVU circle!');
        setEmail('');
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } catch {
      toast.error('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-espresso">
      {/* faded oversized bean glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />

      {/* wordmark band */}
      <div className="relative px-6 pt-16 text-center">
        <Steam />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="select-none bg-gradient-to-b from-gold-light to-gold/40 bg-clip-text font-display text-[clamp(72px,16vw,200px)] font-bold leading-[0.85] tracking-tight text-transparent"
        >
          POVU
        </motion.h2>
        <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.5em] text-cream/50">
          The Crown of Every Cup
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1180px] px-6">
        <div className="grid gap-12 border-t border-gold/10 pt-14 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* brand + newsletter */}
          <div>
            <p className="max-w-xs font-sans text-[13.5px] leading-relaxed text-cream/50">
              Premium wild-type Robusta from Kyegegwa, Uganda. Ethically sourced, digitally traced.
            </p>
            <form onSubmit={subscribe} className="mt-6 flex max-w-xs overflow-hidden rounded-lg border border-gold/30">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                aria-label="Email address"
                className="flex-1 bg-transparent px-3.5 py-2.5 font-sans text-[13px] text-cream outline-none placeholder:text-cream/25"
              />
              <button type="submit" disabled={loading} className="povu-join font-sans">
                {loading ? '...' : 'Join'}
              </button>
            </form>
            <p className="mt-6 font-sans text-[11px] italic text-cream/25">
              A COTE TECH (U) Ltd Brand Initiative
            </p>
          </div>

          {/* quick links */}
          <div>
            <h5 className="mb-5 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13.5px] text-cream/55 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h5 className="mb-5 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
              Company
            </h5>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13.5px] text-cream/55 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h5 className="mb-5 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
              Contact Us
            </h5>
            <ul className="space-y-4 font-sans text-[13.5px] text-cream/55">
              <li className="flex gap-3">
                <i className="las la-map-marker mt-0.5 text-lg text-gold" />
                <span>Kyegegwa District, Tooro Kingdom, Western Uganda</span>
              </li>
              <li className="flex gap-3">
                <i className="las la-envelope-open-text mt-0.5 text-lg text-gold" />
                <a href="mailto:hello@povu.coffee" className="hover:text-gold">hello@povu.coffee</a>
              </li>
              <li className="flex gap-3">
                <i className="las la-phone mt-0.5 text-lg text-gold" />
                <a href="tel:+256773165989" className="hover:text-gold">+256 773 165 989</a>
              </li>
              <li className="flex gap-3">
                <i className="fab fa-whatsapp mt-0.5 text-lg text-gold" />
                <a href="https://wa.me/256773165989" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  +256 773 165 989
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gold/10 py-7 md:flex-row">
          <p className="font-sans text-[12px] text-cream/30">
            Copyright &copy; {new Date().getFullYear()} POVU Coffee Exports Limited. All Rights Reserved.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-cream/50 transition-colors duration-200 hover:border-gold hover:text-gold"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
