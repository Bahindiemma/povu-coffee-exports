'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function OriginSection() {
  const facts = [
    { value: 'Tooro', desc: 'Ancient kingdom in western Uganda. Altitude 1,100–1,300 metres above sea level.' },
    { value: 'Wild', desc: 'Genetically diverse wild-type Robusta. Not cloned commercial varieties.' },
    { value: '2', desc: 'Source districts: Kyegegwa (primary) and Mubende (secondary).' },
    { value: 'Sea+Air', desc: 'Dual export routes via Mombasa Port and Entebbe Airport.' },
  ];

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
            The Origin
          </p>
          <h2 className="mb-4 font-display text-[clamp(32px,4vw,48px)] font-light text-cream">
            Kyegegwa, Uganda
          </h2>
          <p className="mx-auto max-w-lg font-sans text-[14px] font-light text-cream/40">
            Where wild-type Robusta grows in volcanic soil at elevations that most commercial farms never reach.
          </p>
        </motion.div>

        {/* Aromista-style 2x2 fact grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-px border border-gold/18 bg-gold/18 md:grid-cols-2"
        >
          {facts.map((fact, i) => (
            <div key={i} className="bg-card p-10">
              <p className="mb-2 font-display text-[clamp(32px,5vw,54px)] leading-none text-gold-light">
                {fact.value}
              </p>
              <p className="font-sans text-[13px] leading-[1.5] text-cream/70">{fact.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link href="/origin">
            <Button variant="secondary">Explore the Origin</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
