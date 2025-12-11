'use client';

import { useSession } from 'next-auth/react';
import { Bell, User, Menu } from 'lucide-react';
import Link from 'next/link';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:left-64 lg:px-6">
      {/* Sol taraf - Hamburger menu ve link */}
      <div className="flex items-center gap-4">
        {/* Hamburger menu - sadece mobilde görünür */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          href="/"
          target="_blank"
          className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
        >
          <span className="hidden sm:inline">Siteyi Görüntüle →</span>
          <span className="sm:hidden">Site →</span>
        </Link>
      </div>

      {/* Sağ taraf */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <User className="h-4 w-4" />
          </div>
          <div className="hidden text-sm sm:block">
            <p className="font-medium text-gray-900">{session?.user?.name}</p>
            <p className="text-xs text-gray-500">{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
