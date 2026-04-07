'use client';

import Badge from './Badge';
import Button from './Button';
import { Subscription, CartItem } from '@/types';
import { useCartStore } from '@/lib/store/cart';
import { useCurrencyStore } from '@/lib/store/currency';
import { formatPrice } from '@/lib/utils/currency';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils/cn';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export default function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const currency = useCurrencyStore((s) => s.currency);

  const handleSubscribe = () => {
    if (subscription.isCustom) {
      window.location.href = '/export/enquiry';
      return;
    }
    const item: CartItem = {
      id: subscription.id,
      name: subscription.name,
      priceUGX: subscription.priceUGX,
      priceUSD: Math.round(subscription.priceUGX / 3600),
      quantity: 1,
      type: 'subscription',
    };
    addItem(item);
    toast.success(`${subscription.name} added to cart`);
  };

  return (
    <div className={cn(
      'relative flex flex-col border bg-card p-7 transition-colors duration-300 hover:bg-[#251e13]',
      subscription.popular ? 'border-gold/45' : 'border-gold/18'
    )}>
      {subscription.popular && (
        <div className="absolute -top-3 left-6">
          <Badge variant="popular">Best Value</Badge>
        </div>
      )}
      <div className="mb-6">
        <Badge>{subscription.badge}</Badge>
      </div>
      <h3 className="mb-2 font-display text-[22px] text-cream">{subscription.name}</h3>
      <p className="mb-2 font-sans text-[13px] text-cream/40">{subscription.delivery}</p>
      <p className="mb-5 flex-1 font-sans text-[12px] italic text-cream/50">
        &ldquo;{subscription.promise}&rdquo;
      </p>
      <div className="mt-auto">
        <div className="mb-4">
          {subscription.isCustom ? (
            <span className="font-display text-[22px] text-gold-light">Custom Pricing</span>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[26px] text-gold-light">
                {formatPrice(currency === 'UGX' ? subscription.priceUGX : Math.round(subscription.priceUGX / 3600), currency)}
              </span>
              <span className="font-sans text-[11px] text-cream/30">/month</span>
            </div>
          )}
        </div>
        <Button
          size="sm"
          variant={subscription.isCustom ? 'secondary' : 'primary'}
          onClick={handleSubscribe}
          className="w-full"
        >
          {subscription.isCustom ? 'Request Quote' : 'Subscribe'}
        </Button>
      </div>
    </div>
  );
}
