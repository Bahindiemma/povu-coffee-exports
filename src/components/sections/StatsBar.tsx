'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data/content';

export default function StatsBar() {
  return (
    <section className="border-b border-gold/20 bg-surface">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-gold/20 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: i * 0.08 }}
            className="py-10 text-center"
          >
            <p className="mb-1.5 font-display text-[clamp(32px,4vw,52px)] leading-none text-gold-light">
              {stat.value}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/20">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
