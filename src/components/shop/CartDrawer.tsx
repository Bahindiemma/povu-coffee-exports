'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getSubtotalUSD, getCount, isEligibleFreeShipping, shippingProgress } = useCartStore();
  const currency = useCurrencyStore((s) => s.currency);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  const subtotal = currency === 'UGX' ? getSubtotal() : getSubtotalUSD();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[400] bg-black/78"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-[401] flex h-screen w-[470px] max-w-full flex-col border-l border-gold/18 bg-surface"
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex flex-shrink-0 items-center justify-between border-b border-gold/18 px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-[18px] w-[18px] text-gold" />
                <h2 className="font-display text-[20px] text-cream">Cart</h2>
                <span className="font-sans text-[11px] text-cream/30">({getCount()})</span>
              </div>
              <button onClick={closeCart} className="text-cream/40 transition-colors duration-200 hover:text-cream" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="mb-4 h-12 w-12 text-gold/15" />
                  <p className="mb-2 font-display text-[18px] text-cream/50">Your cart is empty</p>
                  <p className="mb-6 font-sans text-[13px] text-cream/20">Add some POVU coffee to get started</p>
                  <Button variant="secondary" size="sm" onClick={closeCart}>Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-gold/8 pb-4">
                      <div className="flex h-16 w-12 flex-shrink-0 items-center justify-center bg-card">
                        <svg viewBox="0 0 40 60" className="h-12 w-8">
                          <rect x="2" y="0" width="36" height="55" rx="2" fill="#1C1510" stroke="#C9913A" strokeWidth="0.5" opacity="0.6" />
                          <text x="20" y="25" textAnchor="middle" fill="#C9913A" fontSize="6" fontFamily="serif">P</text>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans text-[13px] text-cream">{item.name}</h4>
                        <p className="font-sans text-[11px] text-gold/50">
                          {formatPrice(currency === 'UGX' ? item.priceUGX : item.priceUSD, currency)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center border border-gold/18 text-cream/50 transition-colors duration-200 hover:border-gold/40"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-sans text-[13px] text-cream">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center border border-gold/18 text-cream/50 transition-colors duration-200 hover:border-gold/40"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button onClick={() => removeItem(item.id)} className="text-cream/20 transition-colors duration-200 hover:text-red-400" aria-label="Remove item">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <span className="font-sans text-[13px] text-cream">
                          {formatPrice((currency === 'UGX' ? item.priceUGX : item.priceUSD) * item.quantity, currency)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="flex-shrink-0 border-t border-gold/18 px-6 py-5">
                {/* Shipping progress */}
                <div className="mb-3">
                  <p className="mb-1 font-sans text-[11px] text-cream/30">
                    {isEligibleFreeShipping()
                      ? 'Free shipping unlocked!'
                      : `UGX ${(100000 - getSubtotal()).toLocaleString()} away from free shipping`}
                  </p>
                  <div className="h-[2px] w-full bg-card">
                    <div className="h-[2px] bg-gold transition-all duration-500" style={{ width: `${shippingProgress()}%` }} />
                  </div>
                </div>
                <div className="mb-4 flex justify-between">
                  <span className="font-sans text-[13px] text-cream/50">Subtotal</span>
                  <span className="font-display text-[20px] text-gold-light">{formatPrice(subtotal, currency)}</span>
                </div>
                <Link href="/checkout" onClick={closeCart}>
                  <button className="mb-2 flex w-full items-center justify-center bg-gold py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-espresso transition-colors duration-200 hover:bg-gold-light">
                    Checkout <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </button>
                </Link>
                <button onClick={closeCart} className="w-full py-2 text-center font-sans text-[11px] text-cream/30 transition-colors duration-200 hover:text-cream">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
