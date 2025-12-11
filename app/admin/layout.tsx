import { SessionProvider } from 'next-auth/react';
import AdminLayoutClient from '@/components/admin/layout/AdminLayoutClient';
import { auth } from '@/lib/auth';

export const metadata = {
  title: {
    default: 'Admin Panel',
    template: '%s | Blog Yönetimi',
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Login sayfası için layout'u basit tut
  return (
    <SessionProvider session={session}>
      {session ? (
        <AdminLayoutClient>{children}</AdminLayoutClient>
      ) : (
        <div className="min-h-screen bg-gray-100">{children}</div>
      )}
    </SessionProvider>
  );
}
