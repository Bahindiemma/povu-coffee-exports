'use client';

import { motion } from 'framer-motion';
import { tickerItems } from '@/lib/data/content';

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  const text = items.join('  ·  ');

  return (
    <div className="overflow-hidden bg-gold py-2.5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-espresso">
          {text}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{text}
        </span>
      </motion.div>
    </div>
  );
}
