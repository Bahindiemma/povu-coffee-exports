'use client';

// Geo-aware currency resolution using free, no-key providers (the same family
// getmycents uses: open.er-api + the fawazahmed0 currency-api mirrors). All
// prices are authored in USD; we detect the visitor's currency and a USD->local
// rate, cache it, and fall back to USD on any failure.

export interface MoneyInfo {
  code: string;
  rate: number;
}

const CACHE_KEY = 'povu-money-v1';
const TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

// Currencies we are comfortable displaying. Anything else stays in USD so we
// never surface an exotic or thinly-traded conversion.
const SUPPORTED = new Set([
  'USD', 'EUR', 'GBP', 'UGX', 'KES', 'CAD', 'AUD', 'CHF',
  'SEK', 'NOK', 'DKK', 'AED', 'ZAR', 'NGN', 'JPY', 'INR', 'TZS', 'RWF',
]);

async function fetchJSON(url: string, ms = 4000): Promise<unknown> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// Timezone -> currency. This needs no network and is reliable, so it is the
// first signal we try (a US-locale browser physically in Kampala still resolves
// to UGX). Only the zones for currencies we support are listed.
const TZ_TO_CODE: Record<string, string> = {
  'Africa/Kampala': 'UGX',
  'Africa/Nairobi': 'KES',
  'Africa/Dar_es_Salaam': 'TZS',
  'Africa/Kigali': 'RWF',
  'Africa/Lagos': 'NGN',
  'Africa/Johannesburg': 'ZAR',
  'Europe/London': 'GBP',
  'Europe/Berlin': 'EUR',
  'Europe/Paris': 'EUR',
  'Europe/Amsterdam': 'EUR',
  'Europe/Madrid': 'EUR',
  'Europe/Rome': 'EUR',
  'Europe/Brussels': 'EUR',
  'Europe/Vienna': 'EUR',
  'Europe/Dublin': 'EUR',
  'Europe/Helsinki': 'EUR',
  'Europe/Lisbon': 'EUR',
  'Europe/Stockholm': 'SEK',
  'Europe/Oslo': 'NOK',
  'Europe/Copenhagen': 'DKK',
  'Europe/Zurich': 'CHF',
  'America/New_York': 'USD',
  'America/Chicago': 'USD',
  'America/Denver': 'USD',
  'America/Los_Angeles': 'USD',
  'America/Toronto': 'CAD',
  'America/Vancouver': 'CAD',
  'Asia/Dubai': 'AED',
  'Asia/Tokyo': 'JPY',
  'Asia/Kolkata': 'INR',
  'Australia/Sydney': 'AUD',
  'Australia/Melbourne': 'AUD',
};

const LOCALE_TO_CODE: Record<string, string> = {
  DE: 'EUR', FR: 'EUR', NL: 'EUR', IT: 'EUR', ES: 'EUR', IE: 'EUR', AT: 'EUR', BE: 'EUR', FI: 'EUR',
  GB: 'GBP', UG: 'UGX', KE: 'KES', TZ: 'TZS', RW: 'RWF', US: 'USD', CA: 'CAD', AU: 'AUD',
  CH: 'CHF', SE: 'SEK', NO: 'NOK', DK: 'DKK', AE: 'AED', ZA: 'ZAR', NG: 'NGN', JP: 'JPY', IN: 'INR',
};

async function detectCode(): Promise<string> {
  // 0. Browser timezone - no network, reliable, instant. Covers most visitors.
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && TZ_TO_CODE[tz]) return TZ_TO_CODE[tz];
  } catch {
    // try network providers
  }
  // 1. geojs: reliable CORS, returns the ISO country code -> map to currency.
  try {
    const d = (await fetchJSON('https://get.geojs.io/v1/ip/country.json')) as {
      country?: string;
    };
    const cc = d?.country?.toUpperCase();
    if (cc && LOCALE_TO_CODE[cc]) return LOCALE_TO_CODE[cc];
  } catch {
    // try next
  }
  // 2. ipwho.is: returns the local currency code directly.
  try {
    const d = (await fetchJSON('https://ipwho.is/')) as { currency?: { code?: string } };
    const code = d?.currency?.code;
    if (typeof code === 'string' && code.length === 3) return code.toUpperCase();
  } catch {
    // try next
  }
  // 3. ipapi.co: also returns a currency code (flakier, kept as a backup).
  try {
    const d = (await fetchJSON('https://ipapi.co/json/')) as { currency?: string };
    if (d && typeof d.currency === 'string' && d.currency.length === 3) {
      return d.currency.toUpperCase();
    }
  } catch {
    // fall through to locale guess
  }
  // 4. Last resort: derive the region from the browser locale.
  try {
    const region = (navigator.language || '').split('-')[1];
    if (region && LOCALE_TO_CODE[region.toUpperCase()]) {
      return LOCALE_TO_CODE[region.toUpperCase()];
    }
  } catch {
    // ignore
  }
  return 'USD';
}

async function fetchRate(code: string): Promise<number> {
  if (code === 'USD') return 1;
  const providers = [
    async () => {
      const d = (await fetchJSON('https://open.er-api.com/v6/latest/USD')) as {
        rates?: Record<string, number>;
      };
      return d?.rates?.[code];
    },
    async () => {
      const d = (await fetchJSON(
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
      )) as { usd?: Record<string, number> };
      return d?.usd?.[code.toLowerCase()];
    },
    async () => {
      const d = (await fetchJSON(
        'https://latest.currency-api.pages.dev/v1/currencies/usd.json'
      )) as { usd?: Record<string, number> };
      return d?.usd?.[code.toLowerCase()];
    },
  ];
  for (const provider of providers) {
    try {
      const rate = await provider();
      if (typeof rate === 'number' && rate > 0) return rate;
    } catch {
      // try next provider
    }
  }
  throw new Error('no rate available');
}

export async function resolveMoney(): Promise<MoneyInfo> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const cached = JSON.parse(raw) as { code: string; rate: number; ts: number };
      if (cached && cached.code && Date.now() - cached.ts < TTL_MS) {
        return { code: cached.code, rate: cached.rate };
      }
    }
  } catch {
    // ignore bad cache
  }

  let code = await detectCode();
  if (!SUPPORTED.has(code)) code = 'USD';
  let rate = 1;
  if (code !== 'USD') {
    try {
      rate = await fetchRate(code);
    } catch {
      code = 'USD';
      rate = 1;
    }
  }

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ code, rate, ts: Date.now() }));
  } catch {
    // storage unavailable, fine
  }
  return { code, rate };
}
