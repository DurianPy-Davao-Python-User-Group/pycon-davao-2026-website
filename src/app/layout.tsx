import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const title = "PyCon Davao 2026"
const ogTitle = "PyCon Davao 2026: PAGLANTAW – Envisioning the Future Through Python"
const description = "Join Mindanao's Python community at PyCon Davao 2026! Embrace the theme 'PAGLANTAW' — look ahead, exchange ideas, and shape the future with Python."

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${title}` },
  description,

  metadataBase: new URL('https://pycon-davao.durianpy.org'),

  openGraph: {
    type: 'website',
    url: '/',
    title: ogTitle,
    description,
    siteName: 'PyCon Davao 2026',
    images: [
      {
        url: '/images/pycon-davao-2026-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PyCon Davao 2026: PAGLANTAW promotional artwork',
      },
    ],
    locale: 'en_PH',
  },

  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description,
    images: {
      url: '/images/pycon-davao-2026-og.jpg',
      alt: 'PyCon Davao 2026: PAGLANTAW promotional artwork',
    },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}