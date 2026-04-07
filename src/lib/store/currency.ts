'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Currency } from '@/types';

interface CurrencyState {
  currency: Currency;
  toggleCurrency: () => void;
  setCurrency: (c: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'UGX',
      toggleCurrency: () =>
        set((state) => ({
          currency: state.currency === 'UGX' ? 'USD' : 'UGX',
        })),
      setCurrency: (c) => set({ currency: c }),
    }),
    { name: 'povu-currency' }
  )
);
