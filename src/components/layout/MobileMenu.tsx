'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Our Story', href: '/story' },
    { label: 'The Origin', href: '/origin' },
    { label: 'Export', href: '/export' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/78"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-0 top-0 z-[401] flex h-full w-72 flex-col border-r border-gold/18 bg-surface"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-gold/18 px-6 py-5">
              <span className="font-display text-[20px] tracking-[0.15em] text-cream">POVU</span>
              <button onClick={onClose} className="text-cream/40 transition-colors duration-200 hover:text-cream" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-gold/8 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-cream/40 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gold/18 px-6 py-5">
              <p className="font-sans text-[11px] text-cream/20">hello@povu.coffee</p>
              <p className="mt-1 font-sans text-[9px] tracking-[0.2em] uppercase text-gold/30">The Crown of Every Cup</p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
