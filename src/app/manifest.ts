import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ColdFix Serwis Komputerowy',
    short_name: 'ColdFix',
    description:
      'Szybka i fachowa naprawa komputerów, usuwanie wirusów, modernizacja sprzętu. Sprawdź nasz cennik!',
    start_url: '/',
    display: 'standalone',
    background_color: '#1b263b',
    theme_color: '#1b263b',
    lang: 'pl',
    icons: [
      {
        src: '/ico/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/ico/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/ico/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/ico/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ico/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/ico/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
