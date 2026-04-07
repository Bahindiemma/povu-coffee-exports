'use client';

import { motion } from 'framer-motion';

export default function MeaningSection() {
  const values = [
    {
      label: 'Crema Standard',
      title: 'Povu = the crema standard',
      desc: "Specialty buyers judge Robusta by foam density. Kyegegwa's wild-type delivers consistently.",
    },
    {
      label: 'Traceability',
      title: 'Digitally traced',
      desc: 'Every lot linked to a named farmer, GPS location, and grading record.',
    },
    {
      label: 'Identity',
      title: 'One word. The whole story.',
      desc: 'POH-VOO.',
    },
  ];

  return (
    <section className="bg-espresso py-28 px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
              What is POVU
            </p>
            <h2 className="mb-5 font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-cream">
              The foam that tells you<br />the Robusta is real.
            </h2>
            <p className="mb-10 font-sans text-[15px] font-light leading-[1.8] text-cream/40">
              In Swahili, <em className="not-italic text-gold">povu</em> is the foam — the golden crema that crowns every great espresso shot.
            </p>

            <div className="flex flex-col gap-0 border border-gold/18">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-b border-gold/18 bg-card px-7 py-5 last:border-b-0"
                >
                  <p className="mb-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                    {v.label}
                  </p>
                  <h3 className="mb-1 font-display text-[20px] text-cream">{v.title}</h3>
                  <p className="font-sans text-[12px] text-cream/40">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Crema Ring SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <svg viewBox="0 0 400 400" className="h-72 w-72 md:h-96 md:w-96">
              <defs>
                <radialGradient id="crema-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DFB468" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#C9913A" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#C9913A" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="none" stroke="#C9913A" strokeWidth="0.5" opacity="0.2" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="#C9913A" strokeWidth="0.3" opacity="0.15" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#DFB468" strokeWidth="0.5" opacity="0.25" />
              <circle cx="200" cy="200" r="90" fill="url(#crema-gradient)" />
              <circle cx="200" cy="200" r="60" fill="#C9913A" opacity="0.06" />
              <circle cx="200" cy="200" r="30" fill="#DFB468" opacity="0.04" />
              <text x="200" y="195" textAnchor="middle" fill="#C9913A" fontSize="28" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontStyle="italic" opacity="0.6">povu</text>
              <text x="200" y="220" textAnchor="middle" fill="#F0E6CC" fontSize="8" fontFamily="'Jost', sans-serif" letterSpacing="3" opacity="0.3">THE FOAM · THE CREMA</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
