import '@/styles/main.scss';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Fira_Sans, Autour_One } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const firaSans = Fira_Sans({ subsets: ['latin', 'latin-ext'], weight: ['400', '600', '700'] });
const autourOne = Autour_One({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-brand',
});

const getSiteUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://serwispcktw.pl';
  // Upewniamy się, że URL zaczyna się od http (naprawia błąd "Invalid URL")
  return url.startsWith('http') ? url : `https://${url}`;
};

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b263b',
};

export const metadata: Metadata = {
  title: 'ColdFix | Serwis Komputerowy | Profesjonalna Naprawa Laptopów i PC',
  description:
    'Szybka i fachowa naprawa komputerów, usuwanie wirusów, modernizacja sprzętu. Sprawdź nasz cennik!',
  keywords: [
    'ColdFix',
    'AKNETH Studio',
    'serwis komputerowy',
    'naprawa komputerów',
    'naprawa laptopów',
    'naprawa PC',
    'usuwanie wirusów',
    'reinstalacja systemu',
    'wymiana matrycy',
    'wymiana dysku',
    'wymiana baterii laptopa',
    'modernizacja komputera',
    'upgrade RAM',
    'czyszczenie laptopa',
    'odzyskiwanie danych',
    'tani serwis komputerowy',
    'szybka naprawa komputera',
    'profesjonalny serwis IT',
    'serwis laptopów',
    'naprawa sprzętu komputerowego',
    'serwis komputerowy Katowice',
    'naprawa komputerów Katowice',
    'naprawa laptopów Katowice',
    'serwis laptopów Katowice',
    'usuwanie wirusów Katowice',
    'odzyskiwanie danych Katowice',
    'naprawa PC Katowice',
    'serwis IT Katowice',
    'tani serwis komputerowy Katowice',
    'szybka naprawa laptopa Katowice',
  ],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'ColdFix Serwis Komputerowy',
    title: {
      default : 'ColdFix | Serwis Komputerowy | Profesjonalna Naprawa Laptopów i PC',
      template: '%s | ColdFix | Serwis komputerowy',
    },
    description:
      'Szybka i fachowa naprawa komputerów, usuwanie wirusów, modernizacja sprzętu. Sprawdź nasz cennik!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 628,
        alt: 'ColdFix – Serwis Komputerowy Katowice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColdFix | Serwis Komputerowy | Profesjonalna Naprawa Laptopów i PC',
    description:
      'Szybka i fachowa naprawa komputerów, usuwanie wirusów, modernizacja sprzętu. Sprawdź nasz cennik!',
    images: ['/og-image.png'],
  },
  icons: [
    {
      url: '/ico/favicon.ico',
      type: 'image/x-icon',
      sizes: 'any',
      rel: 'icon',
    },
    {
      url: '/ico/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
      rel: 'icon',
    },
    {
      url: '/ico/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
      rel: 'icon',
    },
    {
      url: '/ico/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
    // {
    //   url: '/ico/icon.svg',
    //   type: 'image/svg+xml',
    //   rel: 'icon'
    // },
    {
      url: '/ico/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192',
      rel: 'icon',
    },
    {
      url: '/ico/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512',
      rel: 'icon',
    },
  ],
  manifest: '/manifest.webmanifest',
  applicationName: 'ColdFix Serwis komputerowy',
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Katarzyna Pawłowska-Malesa',
  authors: [
    {
      name: 'Katarzyna Pawłowska-Malesa',
    },
    {
      name: 'AKNETH Studio',
      url: 'https://akneth-studio.vercel.app',
    },
  ],
  metadataBase: new URL(siteUrl),
  // other: {
  //   'google-site-verification': 'xxx'
  // }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${firaSans.className} ${autourOne.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
