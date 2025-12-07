'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { ContactModalProvider } from '@/contexts/ContactModalContext';
import ContactModal from '@/components/shared/ContactModal';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // Admin sayfalarında Header, Footer ve ContactModal gösterme
  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <ContactModalProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactModal />
    </ContactModalProvider>
  );
}
