import { Product, Bundle, Subscription } from '@/types';

export const singleProducts: Product[] = [
  {
    id: 'beans',
    slug: 'roasted-robusta-beans',
    name: 'Roasted Robusta Beans',
    badge: 'Signature · Robusta',
    description: 'Bold, earthy, dark chocolate body. Kyegegwa wild-type at its finest. Delivers the thickest povu crema of any African origin.',
    promise: 'The Robusta your espresso machine has been waiting for.',
    aroma: ['Dark chocolate', 'Roasted cocoa', 'Damp earth', 'Smoky cedar', 'Walnut'],
    sca_score: '81–84',
    variants: [
      { id: 'beans-250', size: '250g', priceUGX: 28000, priceUSD: 8 },
      { id: 'beans-500', size: '500g', priceUGX: 48000, priceUSD: 14 },
      { id: 'beans-1kg', size: '1kg', priceUGX: 85000, priceUSD: 24 },
    ],
    includes: 'Origin certificate',
    category: 'single',
  },
  {
    id: 'ground',
    slug: 'premium-ground-coffee',
    name: 'Premium Ground Coffee',
    badge: 'Ready to Brew',
    description: 'Precision-ground Robusta and Arabica. From espresso-fine to French press coarse — your brew method, perfected.',
    promise: 'Every grind calibrated. Every cup consistent.',
    grinds: ['Espresso Fine', 'Medium', 'Coarse'],
    variants: [
      { id: 'ground-250', size: '250g', priceUGX: 24000, priceUSD: 7 },
      { id: 'ground-500', size: '500g', priceUGX: 42000, priceUSD: 12 },
      { id: 'ground-1kg', size: '1kg', priceUGX: 75000, priceUSD: 21 },
    ],
    includes: 'Origin certificate',
    category: 'single',
  },
];

export const bundles: Bundle[] = [
  {
    id: 'bundle-discovery',
    slug: 'origin-discovery',
    name: 'The Origin Discovery',
    badge: 'Entry Bundle',
    popular: false,
    contents: '250g Beans + 250g Ground + Origin Story Card',
    promise: 'Your first taste of what Kyegegwa grows. The story starts here.',
    priceUGX: 60000,
    priceUSD: 17,
    savingUGX: 4000,
    bestFor: 'First-time POVU buyers, coffee explorers',
  },
  {
    id: 'bundle-connoisseur',
    slug: 'connoisseur-set',
    name: 'The Connoisseur Set',
    badge: 'Flagship Bundle',
    popular: true,
    contents: '500g Beans + 500g Ground + Premium Brewing Guide',
    promise: '50 premium espresso shots. Every guest impressed. Every morning transformed.',
    priceUGX: 130000,
    priceUSD: 37,
    savingUGX: 10000,
    bestFor: 'Established coffee lovers, household buyers',
  },
  {
    id: 'bundle-signature',
    slug: 'kyegegwa-signature',
    name: 'The Kyegegwa Signature',
    badge: 'Signature Bundle',
    popular: false,
    contents: '1kg Beans + 500g Ground + Farmer Profile Card + Certificate of Origin',
    promise: 'Know your farmer. Know your origin. Own your cup.',
    priceUGX: 215000,
    priceUSD: 60,
    savingUGX: 15000,
    bestFor: 'Premium buyers, collectors, restaurant and hotel accounts',
  },
  {
    id: 'bundle-gift',
    slug: 'gift-of-origin',
    name: 'The Gift of Origin',
    badge: 'Gift Bundle',
    popular: false,
    contents: '3 × 250g (Beans + Ground + Arabica) in Branded Gift Box',
    promise: 'The coffee that tells a story. For the person who deserves more than ordinary.',
    priceUGX: 95000,
    priceUSD: 27,
    savingUGX: 0,
    bestFor: 'Corporate gifting, birthdays, holidays',
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 'sub-daily',
    name: 'The Daily Ritual',
    badge: 'Monthly · Starter',
    popular: false,
    delivery: '500g Roasted Beans monthly',
    promise: 'Your morning, guaranteed — every month.',
    priceUGX: 45000,
    annualUGX: 540000,
  },
  {
    id: 'sub-collector',
    name: 'The Collector',
    badge: 'Monthly · Best Value',
    popular: true,
    delivery: '1kg Beans + 250g Ground monthly',
    promise: 'More POVU. Every month. Always fresh.',
    priceUGX: 90000,
    annualUGX: 1080000,
  },
  {
    id: 'sub-insider',
    name: 'The Insider',
    badge: 'Monthly · Premium',
    popular: false,
    delivery: '1kg Beans + 500g Ground + Monthly Origin Report',
    promise: 'Be the first to know every harvest.',
    priceUGX: 130000,
    annualUGX: 1560000,
  },
  {
    id: 'sub-roaster',
    name: 'The Roaster Partner',
    badge: 'Annual Contract',
    popular: false,
    delivery: 'Custom lot + traceability docs + cupping notes',
    promise: 'Your roastery powered by a guaranteed Kyegegwa supply.',
    priceUGX: 0,
    annualUGX: 0,
    isCustom: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return singleProducts.find((p) => p.slug === slug);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug);
}

export function getAllProducts() {
  return { singles: singleProducts, bundles, subscriptions };
}
