import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import MembersGrid from '@/components/MembersGrid';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: SITE_CONFIG.SITE_TITLE,
  description: SITE_CONFIG.SITE_DESCRIPTION,
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
    'inteligência artificial'
  ],
  authors: [{ name: 'AdaTuring Team' }],
  creator: 'AdaTuring',
  publisher: 'FIAP',
  openGraph: {
    title: SITE_CONFIG.SITE_TITLE,
    description: SITE_CONFIG.SITE_DESCRIPTION,
    url: 'https://adaturing.com',
    siteName: SITE_CONFIG.SITE_TITLE,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdaTuring - Time oficial de desenvolvimento da FIAP',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.SITE_TITLE,
    description: SITE_CONFIG.SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  return (
    <main className="font-thoughtworks">
      <Hero />
      <ProjectsGrid />
      <MembersGrid />
      <Footer />
    </main>
  );
}