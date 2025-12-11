'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  Image,
  LogOut,
  Plus,
  ChevronDown,
  X,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Kontrol Paneli',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Yazılar',
    icon: FileText,
    children: [
      { title: 'Tüm Yazılar', href: '/admin/yazilar' },
      { title: 'Yeni Yazı', href: '/admin/yazilar/yeni', icon: Plus },
    ],
  },
  {
    title: 'Kategoriler',
    href: '/admin/kategoriler',
    icon: FolderOpen,
  },
  {
    title: 'Etiketler',
    href: '/admin/etiketler',
    icon: Tags,
  },
  {
    title: 'Medya',
    href: '/admin/medya',
    icon: Image,
  },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Yazılar']);

  // Sayfa değiştiğinde mobilde sidebar'ı kapat
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop - sadece mobilde ve açıkken görünür */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-screen w-64 bg-[#24363d] text-white transition-transform duration-300 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
          <Link href="/admin" className="text-xl font-bold">
            Blog Yönetimi
          </Link>
          {/* Mobilde kapat butonu */}
          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-white/10 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.children ? (
                  // Expandable menu item
                  <div>
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                        'hover:bg-white/10',
                        expandedItems.includes(item.title) && 'bg-white/5'
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          expandedItems.includes(item.title) && 'rotate-180'
                        )}
                      />
                    </button>
                    {expandedItems.includes(item.title) && (
                      <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors',
                                'hover:bg-white/10',
                                isActive(child.href) &&
                                  'bg-primary-500 text-white'
                              )}
                            >
                              {child.icon && <child.icon className="h-4 w-4" />}
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  // Regular menu item
                  <Link
                    href={item.href!}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                      'hover:bg-white/10',
                      isActive(item.href!) && 'bg-primary-500 text-white'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="mt-8 border-t border-white/10 pt-4">
            <button
              onClick={() => signOut({ callbackUrl: '/admin/giris' })}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
            >
              <LogOut className="h-5 w-5" />
              Çıkış Yap
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
