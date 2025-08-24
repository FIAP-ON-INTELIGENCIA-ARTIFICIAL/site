import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adaturing.com'),
  title: {
    default: 'AdaTuring - Time desenvolvimento de Alunos da FIAP',
    template: '%s | AdaTuring',
  },
  description: 'Time de desenvolvimento de Alunos da FIAP. Inspirado por Ada Lovelace e Alan Turing, transformamos ideias em soluções tecnológicas práticas.',
  keywords: [
    'AdaTuring',
    'FIAP', 
    'desenvolvimento',
    'programação',
    'tecnologia',
    'Ada Lovelace',
    'Alan Turing',
    'projetos acadêmicos',
    'ciência de dados',
    'inteligência artificial',
    'React',
    'Next.js',
    'JavaScript',
    'Python',
    'Java'
  ],
  authors: [{ name: 'AdaTuring Team', url: 'https://github.com/AdaTuring' }],
  creator: 'AdaTuring',
  publisher: 'FIAP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#008F8C' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    <html lang="pt-BR" className={`${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#008F8C" />
        <meta name="msapplication-TileColor" content="#008F8C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AdaTuring" />
        <meta name="application-name" content="AdaTuring" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}