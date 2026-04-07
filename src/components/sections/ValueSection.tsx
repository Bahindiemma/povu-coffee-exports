'use client';

import { motion } from 'framer-motion';

export default function ValueSection() {
  const values = [
    { label: 'Quality', title: 'SCA 81–84', desc: 'Fine Robusta grade. Cupped by certified Q graders.' },
    { label: 'Traceability', title: 'Named Farmer', desc: 'Every lot traced to a specific person and GPS coordinate.' },
    { label: 'Ethics', title: 'Above Market', desc: '100% above-market pricing paid directly to farmers.' },
    { label: 'Proof', title: 'Origin Certified', desc: 'Certificate of origin with every order. Data-backed.' },
  ];

  return (
    <section className="bg-surface py-28 px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left: Argument */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
              The Philosophy
            </p>
            <h2 className="mb-5 font-display text-[clamp(28px,3.5vw,42px)] font-light leading-[1.15] text-cream">
              Stop buying cheap coffee. Start buying results.
            </h2>
            <p className="font-sans text-[15px] font-light leading-[1.8] text-cream/40">
              Every cup of POVU delivers a measurable outcome: denser crema, traceable origin,
              above-market farmer payment, and a story that holds up to scrutiny.
              This is what premium means when it is backed by data, not marketing.
            </p>
          </motion.div>

          {/* Right: Value card stack */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col gap-px border border-gold/18 bg-gold/18"
          >
            {values.map((v, i) => (
              <div key={i} className="bg-card px-7 py-5">
                <p className="mb-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                  {v.label}
                </p>
                <h3 className="mb-1 font-display text-[20px] text-cream">{v.title}</h3>
                <p className="font-sans text-[12px] text-cream/40">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
