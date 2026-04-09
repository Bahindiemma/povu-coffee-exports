export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'POVU Coffee Exports Limited',
  url: 'https://povu.coffee',
  logo: 'https://povu.coffee/images/povu-logo.png',
  description: 'Premium wild-type Robusta from Kyegegwa, Uganda. Ethically sourced, digitally traced.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+256773165989',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kyegegwa',
    addressRegion: 'Western Uganda',
    addressCountry: 'UG',
  },
  sameAs: [
    'https://instagram.com/povu.coffee',
    'https://twitter.com/povucoffee',
    'https://facebook.com/povucoffee',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'POVU Coffee',
  url: 'https://povu.coffee',
  description: 'Premium wild-type Robusta from Kyegegwa, Uganda.',
  publisher: { '@type': 'Organization', name: 'POVU Coffee Exports Limited' },
};

export function productSchema(product: {
  name: string;
  description: string;
  slug: string;
  priceUGX: number;
  priceUSD: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `https://povu.coffee/product/${product.slug}`,
    brand: { '@type': 'Brand', name: 'POVU Coffee' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: product.priceUSD,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'POVU Coffee Exports Limited' },
    },
    image: 'https://povu.coffee/images/povu-logo.png',
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `https://povu.coffee/blog/${post.slug}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Emmanuel Bahindi' },
    publisher: {
      '@type': 'Organization',
      name: 'POVU Coffee Exports Limited',
      logo: { '@type': 'ImageObject', url: 'https://povu.coffee/images/povu-logo.png' },
    },
    articleSection: post.category,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
