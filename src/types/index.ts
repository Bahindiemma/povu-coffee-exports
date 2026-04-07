export interface ProductVariant {
  id: string;
  size: string;
  priceUGX: number;
  priceUSD: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  badge: string;
  description: string;
  promise: string;
  aroma?: string[];
  sca_score?: string;
  grinds?: string[];
  variants: ProductVariant[];
  includes: string;
  category: 'single';
}

export interface Bundle {
  id: string;
  slug: string;
  name: string;
  badge: string;
  popular: boolean;
  contents: string;
  promise: string;
  priceUGX: number;
  priceUSD: number;
  savingUGX: number;
  bestFor: string;
}

export interface Subscription {
  id: string;
  name: string;
  badge: string;
  popular: boolean;
  delivery: string;
  promise: string;
  priceUGX: number;
  annualUGX: number;
  isCustom?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  variant?: string;
  priceUGX: number;
  priceUSD: number;
  quantity: number;
  type: 'single' | 'bundle' | 'subscription';
}

export interface ReviewData {
  name: string;
  role: string;
  city: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  deliveryMethod: 'kampala' | 'international' | 'pickup';
  paymentMethod: 'mtn' | 'airtel' | 'bank' | 'paypal';
  notes?: string;
}

export type Currency = 'UGX' | 'USD';
