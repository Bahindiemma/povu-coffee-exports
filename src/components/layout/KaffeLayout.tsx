'use client';

import { useEffect } from 'react';
import { scrollAnimation, stickyNav } from '@/kaffe/utils';
import Header from './Header';
import Footer from './Footer';

export default function KaffeLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
    stickyNav();
    return () => {
      window.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  return (
    <div className="bg">
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
