'use client';

import { motion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';
import { faqs } from '@/lib/data/content';

export default function FaqSection() {
  return (
    <section className="bg-espresso py-28 px-8">
      <div className="mx-auto max-w-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14 text-center"
        >
          <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
            Questions
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light text-cream">
            Frequently Asked
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
