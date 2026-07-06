'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  sub: string;
}

const STATS: Stat[] = [
  { value: '2', label: 'Source Districts', sub: 'Western Uganda' },
  { value: '60kg+', label: 'Export Green Beans Ready', sub: 'Ready for international shipment' },
  { value: '100%', label: 'Above-Market Farmer Pay', sub: 'Farmers paid above commodity rate' },
  { value: 'Sea+Air', label: 'Dual Export Routes', sub: 'Entebbe Airport & Mombasa Port' },
];

function parseValue(value: string): { prefix: string; number: number | null; suffix: string } {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: value, number: null, suffix: '' };
  return { prefix: match[1], number: Number(match[2]), suffix: match[3] };
}

function StatValue({ value, run }: { value: string; run: boolean }) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(number === null ? number : 0);

  useEffect(() => {
    if (!run || number === null) return;
    const duration = 1100;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * number));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, number]);

  return (
    <span className="font-heading text-[clamp(44px,5vw,64px)] font-bold leading-none text-gold">
      {number === null ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-espresso px-6 py-20">
      <div ref={ref} className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`px-4 text-center md:px-8 ${
                i > 0 ? 'md:border-l md:border-gold/15' : ''
              }`}
            >
              <StatValue value={stat.value} run={inView} />
              <p className="mt-4 font-heading text-[15px] font-medium uppercase tracking-wide text-cream">
                {stat.label}
              </p>
              <p className="mx-auto mt-2 max-w-[180px] font-sans text-[12.5px] leading-relaxed text-cream/45">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
