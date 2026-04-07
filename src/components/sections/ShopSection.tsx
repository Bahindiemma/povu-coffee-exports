'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import BundleCard from '@/components/ui/BundleCard';
import SubscriptionCard from '@/components/ui/SubscriptionCard';
import { singleProducts, bundles, subscriptions } from '@/lib/data/products';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

type Tab = 'singles' | 'bundles' | 'subscriptions';

export default function ShopSection() {
  const [activeTab, setActiveTab] = useState<Tab>('singles');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'singles', label: 'Single Packs' },
    { key: 'bundles', label: 'Bundles' },
    { key: 'subscriptions', label: 'Subscriptions' },
  ];

  return (
    <section className="bg-surface py-28 px-8" id="shop">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14 text-center"
        >
          <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
            The Collection
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light text-cream">
            Shop POVU Coffee
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'px-6 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200',
                activeTab === tab.key
                  ? 'bg-gold text-espresso'
                  : 'border border-gold/18 text-cream/40 hover:border-gold/40 hover:text-cream'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grids */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'singles' && (
              <div className="grid gap-6 md:grid-cols-2">
                {singleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            {activeTab === 'bundles' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {bundles.map((bundle) => (
                  <BundleCard key={bundle.id} bundle={bundle} />
                ))}
              </div>
            )}
            {activeTab === 'subscriptions' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {subscriptions.map((sub) => (
                  <SubscriptionCard key={sub.id} subscription={sub} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 text-center">
          <Link href="/shop">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
