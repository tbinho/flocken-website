import type { Metadata } from 'next';
import { Source_Serif_4, Public_Sans } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

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
    <html lang="sv" className={`${sourceSerif.variable} ${publicSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}

