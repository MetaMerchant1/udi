import { SessionProvider } from 'next-auth/react';
import AdminSidebar from '@/components/admin/layout/AdminSidebar';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

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
        <div className="min-h-screen bg-gray-50">
          <AdminSidebar />
          <AdminHeader />
          <main className="ml-64 pt-16">
            <div className="p-6">{children}</div>
          </main>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100">{children}</div>
      )}
    </SessionProvider>
  );
}
