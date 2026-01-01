import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://flocken.info'),
  title: {
    default: 'Flocken - För ett bättre liv som hund',
    template: '%s | Flocken'
  },
  description: 'Allt du behöver som hundägare på ett ställe. Para, Passa, Rasta, Besöka. Fyra funktioner. En app.',
  keywords: ['hundapp', 'hundparning', 'hundvakt', 'hundpromenader', 'hundvänliga platser', 'hund', 'Sverige'],
  authors: [{ name: 'Spitakolus AB' }],
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://flocken.info',
    siteName: 'Flocken',
    title: 'Flocken - För ett bättre liv som hund',
    description: 'Allt du behöver som hundägare på ett ställe',
    images: [
      {
        url: '/assets/flocken/generated/hero.png',
        width: 1920,
        height: 1080,
        alt: 'Flocken - Hundapp för svenska hundägare'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flocken - För ett bättre liv som hund',
    description: 'Para, Passa, Rasta, Besöka. Allt på ett ställe.',
    images: ['/assets/flocken/generated/hero.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        {/* Initialize dataLayer for consent management (if GTM is added later) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              
              // Default consent state - denied until user accepts
              window.dataLayer.push({
                'event': 'consent_default',
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });
            `,
          }}
        />
        
        {/* Cookie Banner - Modal design */}
        <script defer src="/scripts/cookie-banner-custom.js"></script>
        
        {/* Google tag (gtag.js) - Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17821309500"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17821309500');
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

