'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ExportSection() {
  const features = [
    'Export to Germany, Netherlands, Scandinavia, Kenya',
    'Full traceability documentation with every shipment',
    'FOB Mombasa or CIF destination via sea and air freight',
    'UCDA export licence · Phytosanitary certified',
  ];

  return (
    <section className="bg-[#152E1F] py-28 px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-cream/40">
              B2B &amp; Export
            </p>
            <h2 className="mb-8 font-display text-[clamp(32px,4vw,48px)] font-light text-cream">
              Source Kyegegwa Robusta at Scale
            </h2>
            <div className="mb-10 space-y-2">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3.5 border border-[#1E4430]/60 bg-white/[0.03] px-5 py-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <span className="font-sans text-[13px] leading-[1.6] text-cream/60">{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/export/enquiry">
                <Button>Request a Sample Lot</Button>
              </Link>
              <Link href="/export">
                <Button variant="secondary">View Export Profile</Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Watermark */}
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <span className="font-display text-[clamp(56px,10vw,110px)] italic leading-none text-gold/[0.09]">
              povu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
