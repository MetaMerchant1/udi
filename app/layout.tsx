import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ContactModalProvider } from '@/contexts/ContactModalContext';
import ContactModal from '@/components/shared/ContactModal';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  title: {
    default: 'Yurtdışı Eğitim Danışmanlığı | EğitimDanışmanlık',
    template: '%s | EğitimDanışmanlık',
  },
  description: 'Yurtdışı eğitim hayallerinizi gerçeğe dönüştürmek için 20+ yıllık deneyimimizle yanınızdayız. Üniversite başvurusu, vize danışmanlığı, dil eğitimi ve daha fazlası.',
  keywords: [
    'yurtdışı eğitim',
    'eğitim danışmanlığı',
    'üniversite başvurusu',
    'vize danışmanlığı',
    'dil eğitimi',
    'IELTS',
    'TOEFL',
    'yurtdışında okumak',
    'Amerika eğitim',
    'İngiltere eğitim',
  ],
  authors: [{ name: 'EğitimDanışmanlık' }],
  creator: 'EğitimDanışmanlık',
  publisher: 'EğitimDanışmanlık',
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
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    title: 'Yurtdışı Eğitim Danışmanlığı | EğitimDanışmanlık',
    description: 'Yurtdışı eğitim hayallerinizi gerçeğe dönüştürmek için 20+ yıllık deneyimimizle yanınızdayız.',
    siteName: 'EğitimDanışmanlık',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışı Eğitim Danışmanlığı | EğitimDanışmanlık',
    description: 'Yurtdışı eğitim hayallerinizi gerçeğe dönüştürmek için 20+ yıllık deneyimimizle yanınızdayız.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={plusJakartaSans.className}>
        <ContactModalProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
