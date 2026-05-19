import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vastotech.in'),
  title: {
    default: 'Vastotech | Intelligent Solutions. Connected Future.',
    template: '%s | Vastotech',
  },
  description:
    'Vastotech delivers intelligent software and IoT solutions — video analytics, building management, and connected platforms — for a smarter, safer, more efficient world.',
  keywords: [
    'Vastotech',
    'Video Analytics',
    'BMS Software',
    'IoT Solutions',
    'Smart Infrastructure',
    'Enterprise SaaS',
    'Connected Future',
  ],
  authors: [{ name: 'Vastotech Solutions' }],
  openGraph: {
    title: 'Vastotech | Intelligent Solutions. Connected Future.',
    description:
      'Empowering businesses with intelligent software and IoT solutions for a smarter, safer and more efficient world.',
    url: 'https://vastotech.in',
    siteName: 'Vastotech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vastotech | Intelligent Solutions. Connected Future.',
    description:
      'Intelligent software and IoT solutions for a smarter, safer, more efficient world.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
