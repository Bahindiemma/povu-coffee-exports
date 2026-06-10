'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { singleProducts } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cart';
import { useMoney } from '@/lib/currency/CurrencyProvider';
import { Product } from '@/types';

const PRODUCT_IMAGES: Record<string, string> = {
  'roasted-robusta-beans':
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
  'premium-ground-coffee':
    'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80',
};

function FeatureCard({ product, index }: { product: Product; index: number }) {
  const [selected, setSelected] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const { format } = useMoney();
  const variant = product.variants[selected];
  const notes = product.aroma ?? product.grinds ?? [];

  const add = () => {
    addItem({
      id: variant.id,
      name: `${product.name} - ${variant.size}`,
      variant: variant.size,
      priceUGX: variant.priceUGX,
      priceUSD: variant.priceUSD,
      quantity: 1,
      type: 'single',
    });
    toast.success(`${product.name} (${variant.size}) added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-card transition-colors duration-500 hover:border-gold/40"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={PRODUCT_IMAGES[product.slug] ?? PRODUCT_IMAGES['roasted-robusta-beans']}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
        {product.sca_score && (
          <span className="absolute left-5 top-5 rounded-full border border-gold/40 bg-espresso/70 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
            SCA {product.sca_score}
          </span>
        )}
        <span className="absolute bottom-5 left-5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-cream/70">
          {product.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-bold text-cream">{product.name}</h3>
        <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-cream/55">
          {product.description}
        </p>

        {notes.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {notes.map((note) => (
              <span
                key={note}
                className="rounded-full border border-gold/20 bg-espresso/40 px-3 py-1 font-sans text-[11px] tracking-wide text-cream/60"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center gap-2.5">
          {product.variants.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`povu-pill flex-1 font-heading ${selected === i ? 'is-active' : ''}`}
            >
              {v.size}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-7">
          <div>
            <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-cream/40">
              {variant.size}
            </span>
            <span className="font-heading text-3xl font-semibold text-gold">
              {format(variant.priceUSD, variant.priceUGX)}
            </span>
          </div>
          <button type="button" onClick={add} className="povu-cta font-sans">
            Add
            <i className="las la-shopping-bag text-base" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductFeatureCards() {
  return (
    <section className="bg-espresso px-6 py-24 md:py-28" id="products">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Shop the Range
          </p>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] font-bold text-cream">
            POVU Coffee Products
          </h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2">
          {singleProducts.map((product, i) => (
            <FeatureCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-b border-gold/40 pb-1 font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-cream/70 transition-colors duration-200 hover:border-gold hover:text-cream"
          >
            View All Products
            <i className="fas fa-chevron-right text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
