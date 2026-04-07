import { Currency } from '@/types';

export function formatPrice(amount: number, currency: Currency): string {
  if (currency === 'UGX') {
    return `UGX ${amount.toLocaleString('en-UG')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

export function formatPriceCompact(amount: number, currency: Currency): string {
  if (currency === 'UGX') {
    if (amount >= 1000000) {
      return `UGX ${(amount / 1000000).toFixed(1)}M`;
    }
    return `UGX ${(amount / 1000).toFixed(0)}K`;
  }
  return `$${amount}`;
}
