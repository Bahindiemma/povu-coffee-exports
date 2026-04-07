import type { Metadata } from 'next';
import './globals.css';
import KaffeLayout from '@/components/layout/KaffeLayout';
import CartDrawer from '@/components/shop/CartDrawer';
import ToastProvider from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: {
    default: 'POVU Coffee — The Crown of Every Cup',
    template: '%s | POVU Coffee',
  },
  description:
    'Premium wild-type Robusta from Kyegegwa, Uganda. Ethically sourced, digitally traced. Shop single packs, bundles and subscriptions.',
  keywords: [
    'Uganda coffee',
    'Kyegegwa Robusta',
    'fine Robusta',
    'single origin Uganda',
    'buy Uganda coffee',
    'povu coffee',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    siteName: 'POVU Coffee',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/bootstrap.css" />
        <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="/fonts/font-awesome/css/line-awesome.css" />
        <link rel="stylesheet" href="/styles/animate.css" />
        <link rel="stylesheet" href="/styles/magnific-popup.css" />
        <link rel="stylesheet" href="/styles/splitting.css" />
        <link rel="stylesheet" href="/styles/swiper.css" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/styles/povu-overrides.css" />
      </head>
      <body>
        <KaffeLayout>
          <main id="main-content">{children}</main>
        </KaffeLayout>
        <CartDrawer />
        <ToastProvider />
      </body>
    </html>
  );
}
