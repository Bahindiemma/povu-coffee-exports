'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';

const FREE_SHIPPING_THRESHOLD = 100000;

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getTotalUSD: () => number;
  getCount: () => number;
  getSubtotal: () => number;
  getSubtotalUSD: () => number;
  isEligibleFreeShipping: () => boolean;
  shippingProgress: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, item], isOpen: true };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) =>
                  i.id === id ? { ...i, quantity: qty } : i
                ),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.priceUGX * item.quantity, 0);
      },

      getTotalUSD: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
      },

      getCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.priceUGX * item.quantity, 0);
      },

      getSubtotalUSD: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
      },

      isEligibleFreeShipping: () => {
        return get().getSubtotal() >= FREE_SHIPPING_THRESHOLD;
      },

      shippingProgress: () => {
        const subtotal = get().getSubtotal();
        return Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
      },
    }),
    {
      name: 'povu-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
