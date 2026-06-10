'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { resolveMoney } from './auto';

interface MoneyContextValue {
  code: string;
  rate: number;
  ready: boolean;
  // `nativeUGX` is the exact catalog price in UGX, used as-is for Ugandan
  // visitors so home-market prices stay precise; everyone else converts from USD.
  format: (usd: number, nativeUGX?: number) => string;
}

const NO_DECIMAL = new Set(['UGX', 'KES', 'TZS', 'RWF', 'JPY', 'NGN']);

function formatMoney(
  usd: number,
  code: string,
  rate: number,
  nativeUGX?: number
): string {
  const useNative = code === 'UGX' && typeof nativeUGX === 'number';
  const value = useNative ? (nativeUGX as number) : usd * rate;
  // Round converted prices so we never show ugly trailing digits. Exact native
  // prices and plain USD are left untouched.
  const rounded =
    useNative || code === 'USD'
      ? value
      : value >= 1000
        ? Math.round(value / 100) * 100
        : Math.round(value * 100) / 100;
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: code,
      maximumFractionDigits: NO_DECIMAL.has(code) ? 0 : 2,
      minimumFractionDigits: 0,
    }).format(rounded);
  } catch {
    return `$${usd}`;
  }
}

const CurrencyContext = createContext<MoneyContextValue>({
  code: 'USD',
  rate: 1,
  ready: false,
  format: (usd, nativeUGX) => formatMoney(usd, 'USD', 1, nativeUGX),
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render are always USD, so hydration matches. We
  // upgrade to the visitor's local currency after mount.
  const [state, setState] = useState({ code: 'USD', rate: 1, ready: false });

  useEffect(() => {
    let alive = true;
    resolveMoney()
      .then((m) => {
        if (!alive) return;
        setState({ code: m.code, rate: m.rate, ready: true });
      })
      .catch(() => {
        if (alive) setState((s) => ({ ...s, ready: true }));
      });
    return () => {
      alive = false;
    };
  }, []);

  const format = useCallback(
    (usd: number, nativeUGX?: number) =>
      formatMoney(usd, state.code, state.rate, nativeUGX),
    [state.code, state.rate]
  );

  return (
    <CurrencyContext.Provider value={{ ...state, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useMoney(): MoneyContextValue {
  return useContext(CurrencyContext);
}
