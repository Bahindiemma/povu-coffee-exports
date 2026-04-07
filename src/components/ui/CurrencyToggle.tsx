'use client';

import { useCurrencyStore } from '@/lib/store/currency';
import { cn } from '@/lib/utils/cn';

export default function CurrencyToggle() {
  const { currency, toggleCurrency } = useCurrencyStore();

  return (
    <button
      onClick={toggleCurrency}
      className="flex items-center gap-1 border border-gold/20 px-2.5 py-1 font-mono text-[10px] tracking-wider transition-colors duration-200 hover:border-gold/40"
      aria-label={`Switch to ${currency === 'UGX' ? 'USD' : 'UGX'}`}
    >
      <span className={cn(currency === 'UGX' ? 'text-gold' : 'text-cream/30')}>UGX</span>
      <span className="text-cream/20">/</span>
      <span className={cn(currency === 'USD' ? 'text-gold' : 'text-cream/30')}>USD</span>
    </button>
  );
}
