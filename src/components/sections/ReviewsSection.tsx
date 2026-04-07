'use client';

import { motion } from 'framer-motion';
import ReviewCard from '@/components/ui/ReviewCard';
import { reviews } from '@/lib/data/content';

export default function ReviewsSection() {
  return (
    <section className="bg-espresso py-28 px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14 text-center"
        >
          <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
            What They Say
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light text-cream">
            Trusted by Specialty Buyers
          </h2>
        </motion.div>

        {/* Aromista-style grid: gap-px with gold border grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="grid grid-cols-1 gap-px border border-gold/18 bg-gold/18 md:grid-cols-3"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
