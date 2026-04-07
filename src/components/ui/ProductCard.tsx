'use client';

import { useState } from 'react';
import Badge from './Badge';
import Button from './Button';
import { Product, CartItem } from '@/types';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils/cn';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const currency = useCurrencyStore((s) => s.currency);

  const variant = product.variants[selectedVariant];
  const price = currency === 'UGX' ? variant.priceUGX : variant.priceUSD;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: variant.id,
      name: `${product.name} (${variant.size})`,
      variant: variant.size,
      priceUGX: variant.priceUGX,
      priceUSD: variant.priceUSD,
      quantity: 1,
      type: 'single',
    };
    addItem(item);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group flex flex-col border border-gold/18 bg-card p-7 transition-colors duration-300 hover:bg-[#251e13]">
      <div className="mb-6">
        <Badge>{product.badge}</Badge>
      </div>

      <Link href={`/product/${product.slug}`} className="mb-4 block">
        <div className="mb-5 flex h-48 items-center justify-center">
          <svg viewBox="0 0 120 180" className="h-40 w-28 transition-transform duration-300 group-hover:scale-105">
            <rect x="10" y="0" width="100" height="160" rx="4" fill="#1C1510" stroke="#C9913A" strokeWidth="0.5" opacity="0.8" />
            <rect x="20" y="15" width="80" height="40" rx="2" fill="none" stroke="#C9913A" strokeWidth="0.3" opacity="0.4" />
            <text x="60" y="35" textAnchor="middle" fill="#C9913A" fontSize="8" fontFamily="serif" fontWeight="300">POVU</text>
            <text x="60" y="48" textAnchor="middle" fill="#F0E6CC" fontSize="4" fontFamily="sans-serif" opacity="0.6">COFFEE</text>
            <text x="60" y="90" textAnchor="middle" fill="#F0E6CC" fontSize="5" fontFamily="sans-serif" opacity="0.5">{variant.size}</text>
            <rect x="10" y="140" width="100" height="20" rx="0" fill="#C9913A" opacity="0.15" />
            <text x="60" y="154" textAnchor="middle" fill="#C9913A" fontSize="5" fontFamily="sans-serif">KYEGEGWA · UGANDA</text>
          </svg>
        </div>
        <h3 className="font-display text-[22px] text-cream transition-colors duration-200 group-hover:text-gold">
          {product.name}
        </h3>
      </Link>

      <p className="mb-4 font-sans text-[13px] font-light leading-[1.65] text-cream/40">
        {product.description}
      </p>

      <p className="mb-5 border border-[#3D9E6A]/22 px-2.5 py-2 font-sans text-[12px] italic leading-[1.5] text-[#3D9E6A]">
        &ldquo;{product.promise}&rdquo;
      </p>

      {product.sca_score && (
        <p className="mb-4 font-mono text-[10px] text-cream/30">SCA Score: {product.sca_score}</p>
      )}

      <div className="mb-5 flex gap-2">
        {product.variants.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setSelectedVariant(i)}
            className={cn(
              'border px-3 py-1.5 font-sans text-[11px] transition-all duration-200 cursor-pointer',
              i === selectedVariant
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-gold/18 text-cream/40 hover:border-gold hover:bg-gold/10'
            )}
          >
            {v.size}
          </button>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4">
        <span className="font-display text-[26px] text-gold-light">
          {formatPrice(price, currency)}
        </span>
        <Button size="sm" onClick={handleAddToCart} className="flex-shrink-0">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
