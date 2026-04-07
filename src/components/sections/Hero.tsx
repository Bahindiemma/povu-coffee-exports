'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mb-6 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold"
            >
              Kyegegwa &middot; Tooro Kingdom &middot; Uganda
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-6 font-display text-[clamp(60px,11vw,128px)] font-light leading-none tracking-tight text-cream"
            >
              The Crown of
              <br />
              <span className="italic text-gold-light">Every Cup.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mb-10 max-w-lg font-sans text-[clamp(14px,1.8vw,17px)] font-light leading-[1.8] text-cream/40"
            >
              Uganda&apos;s rarest wild-type Robusta. Traceable to a named farmer in Kyegegwa.
              Graded with a software engineer&apos;s precision. This is not just coffee — it is
              a result you can taste and a story you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/shop">
                <Button size="lg">Shop POVU Coffee</Button>
              </Link>
              <Link href="/story">
                <Button variant="secondary" size="lg">The Origin Story</Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Crema Ring Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.9 }}
            className="hidden items-center justify-center lg:flex"
          >
            <svg viewBox="0 0 400 400" className="h-[380px] w-[380px]">
              <defs>
                <radialGradient id="hero-crema" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DFB468" stopOpacity="0.12" />
                  <stop offset="60%" stopColor="#C9913A" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#C9913A" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="185" fill="none" stroke="#C9913A" strokeWidth="0.4" opacity="0.15" />
              <circle cx="200" cy="200" r="155" fill="none" stroke="#C9913A" strokeWidth="0.3" opacity="0.12" />
              <circle cx="200" cy="200" r="125" fill="none" stroke="#DFB468" strokeWidth="0.5" opacity="0.2" />
              <circle cx="200" cy="200" r="95" fill="url(#hero-crema)" />
              <circle cx="200" cy="200" r="65" fill="#C9913A" opacity="0.04" />
              <circle cx="200" cy="200" r="35" fill="#DFB468" opacity="0.03" />
              <text x="200" y="195" textAnchor="middle" fill="#C9913A" fontSize="32" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontStyle="italic" opacity="0.5">povu</text>
              <text x="200" y="222" textAnchor="middle" fill="#F0E6CC" fontSize="7" fontFamily="'Jost', sans-serif" letterSpacing="4" opacity="0.2">THE FOAM · THE CREMA</text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="h-8 w-[1px] bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
