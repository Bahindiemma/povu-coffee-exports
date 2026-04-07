'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function StorySection() {
  const pills = ['Kyegegwa Born', 'Makerere Graduate', 'Software Engineer', 'Coffee Founder'];

  return (
    <section className="bg-surface py-28 px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left: Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <blockquote className="mb-8 border-l-2 border-gold pl-8">
              <p className="font-display text-[clamp(20px,3vw,34px)] italic leading-[1.45] text-cream">
                &ldquo;I did not build POVU to sell coffee. I built it to change what a cup of Kyegegwa Robusta is worth — to the farmer who grew it and to the world that drinks it.&rdquo;
              </p>
              <footer className="mt-5 font-sans text-[11px] tracking-[0.2em] uppercase text-gold/60">
                Emmanuel Bahindi &middot; Founder &amp; CEO
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="border border-gold/18 px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-cream/40"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
              The Founder
            </p>
            <h2 className="mb-6 font-display text-[clamp(28px,3.5vw,42px)] font-light text-cream">
              From Kyegegwa to the World
            </h2>
            <div className="space-y-5 font-sans text-[14px] font-light leading-[1.8] text-cream/40">
              <p>
                Born in Kyegegwa District to a mother with a serious mental illness, Emmanuel was raised by his elderly grandmother from three months old. She fed him mashed Irish potatoes mixed with milk. In 2011, his mother passed. He was in Primary Six.
              </p>
              <p>
                He became the top student in his rural community — First Grade, 8 aggregates. Scholarships followed. He survived Makerere University on Kikomando in a leaking room in Nakulabye, coding his first contract for UGX 600,000. He graduated in January 2024 with a Second Class degree in Software Engineering.
              </p>
              <p>
                He founded COTE TECH (U) Limited. Then he returned to Kyegegwa — with digital farmer profiling, professional grading, and above-market pricing — to build what no supply chain had ever offered those farmers: dignity.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/story">
                <Button variant="ghost">Read the Full Story</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
