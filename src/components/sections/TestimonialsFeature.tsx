'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { reviews } from '@/lib/data/content';

const FLAGS: Record<string, string> = {
  Germany: '🇩🇪',
  Netherlands: '🇳🇱',
  Kenya: '🇰🇪',
  Uganda: '🇺🇬',
};

function flagFor(city: string): string {
  const country = city.split(',').pop()?.trim() ?? '';
  return FLAGS[country] ?? '';
}

export default function TestimonialsFeature() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="bg-surface px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Customer Feedback
          </p>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] font-bold text-cream">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative rounded-3xl border border-gold/15 bg-card/60 px-7 py-14 text-center md:px-16">
          <span
            aria-hidden
            className="pointer-events-none absolute left-8 top-4 select-none font-display text-[120px] leading-none text-gold/15 md:text-[160px]"
          >
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="relative mx-auto max-w-3xl"
            >
              <div className="mb-6 flex justify-center gap-1 text-gold">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-sm" />
                ))}
              </div>
              <p className="font-display text-[clamp(20px,2.6vw,30px)] font-normal leading-snug text-cream">
                {review.quote}
              </p>
              <footer className="mt-8">
                <p className="font-heading text-lg font-semibold uppercase tracking-wide text-gold">
                  {review.name}
                </p>
                <p className="mt-1 font-sans text-[13px] text-cream/55">
                  {review.role} · {flagFor(review.city)} {review.city}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Read review from ${r.name}`}
                aria-pressed={active === i}
                className={`povu-avatar relative h-12 w-12 ${active === i ? 'is-active' : ''}`}
              >
                <Image
                  src={`/images/rev${(i % 3) + 1}.jpg`}
                  alt={r.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
