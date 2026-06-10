'use client';

import { useEffect } from 'react';
import { stickyNav } from '@/kaffe/utils';
import Header from './Header';
import Footer from './Footer';

export default function KaffeLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <div className="bg">
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
