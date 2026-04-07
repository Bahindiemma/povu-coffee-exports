'use client';

import { Package } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import { Bundle, CartItem } from '@/types';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils/cn';

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const currency = useCurrencyStore((s) => s.currency);
  const price = currency === 'UGX' ? bundle.priceUGX : bundle.priceUSD;
  const saving = currency === 'UGX' ? bundle.savingUGX : Math.round(bundle.savingUGX / 3600);

  const handleAddToCart = () => {
    const item: CartItem = {
      id: bundle.id,
      name: bundle.name,
      priceUGX: bundle.priceUGX,
      priceUSD: bundle.priceUSD,
      quantity: 1,
      type: 'bundle',
    };
    addItem(item);
    toast.success(`${bundle.name} added to cart`);
  };

  return (
    <div className={cn(
      'relative flex flex-col border bg-card p-7 transition-colors duration-300 hover:bg-[#251e13]',
      bundle.popular ? 'border-gold/45' : 'border-gold/18'
    )}>
      {bundle.popular && (
        <div className="absolute -top-3 left-6">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}
      <div className="mb-6">
        <Badge>{bundle.badge}</Badge>
      </div>
      <h3 className="mb-2 font-display text-[22px] text-cream">{bundle.name}</h3>
      <div className="mb-3 flex items-center gap-2 font-sans text-[12px] text-cream/40">
        <Package className="h-3.5 w-3.5 text-gold/40" />
        <span>{bundle.contents}</span>
      </div>
      <p className="mb-5 border border-[#3D9E6A]/22 px-2.5 py-2 font-sans text-[12px] italic leading-[1.5] text-[#3D9E6A]">
        &ldquo;{bundle.promise}&rdquo;
      </p>
      <p className="mb-5 font-sans text-[11px] text-cream/20">Best for: {bundle.bestFor}</p>
      <div className="mt-auto">
        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-display text-[26px] text-gold-light">
            {formatPrice(price, currency)}
          </span>
          {saving > 0 && (
            <span className="font-sans text-[11px] text-gold/50">
              Save {formatPrice(saving, currency)}
            </span>
          )}
        </div>
        <Button size="sm" onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
