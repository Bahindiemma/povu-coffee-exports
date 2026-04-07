'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Welcome to the POVU circle!');
        setEmail('');
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } catch {
      toast.error('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-surface px-8 py-32">
      <div className="mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
            Stay Connected
          </p>
          <h2 className="mb-4 font-display text-[clamp(28px,3.5vw,42px)] font-light text-cream">
            Join the POVU Circle
          </h2>
          <p className="mb-8 font-sans text-[14px] font-light text-cream/40">
            Early access to new harvests, subscriber-only pricing, and origin reports delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md border border-gold/40">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent px-4.5 font-sans text-[14px] text-cream outline-none placeholder:text-cream/20"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gold px-6 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-espresso transition-colors duration-200 hover:bg-gold-light disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
          <p className="mt-5 font-sans text-[11px] text-cream/20">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
