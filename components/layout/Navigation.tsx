'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  {
    name: 'Hizmetler',
    href: '/hizmetler',
    dropdown: [
      {
        category: 'Danışmanlık Hizmetleri',
        items: [
          { name: 'Yurtdışı Üniversite Danışmanlığı', href: '/yurtdisi-universite-danismanligi' },
          { name: 'Yurt İçi Üniversite Danışmanlığı', href: '/yurtici-universite-danismanligi' },
          { name: 'Kariyer Planlama', href: '/kariyer-planlama' },
          { name: 'Akademik Takip', href: '/akademik-takip' },
          { name: 'Eğitim Koçluğu', href: '/egitim-koclugu' },
          { name: 'Kişilik Envanterleri', href: '/kisilik-envanterleri' },
        ]
      },
      {
        category: 'Çalışma Alanları',
        items: [
          { name: 'Liderlik Eğitimi', href: '/liderlik-egitimi' },
          { name: 'İş İngilizcesi', href: '/is-ingilizcesi' },
          { name: 'Uluslararası Sınavlar', href: '/uluslararasi-sinavlar' },
        ]
      }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:gap-x-8">
        {navigation.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors inline-flex items-center gap-1',
                pathname === item.href
                  ? 'text-white'
                  : 'text-gray-100 hover:text-white'
              )}
            >
              {item.name}
              {item.dropdown && <ChevronDown className="h-4 w-4" />}
            </Link>

            {/* Dropdown Menu */}
            {item.dropdown && openDropdown === item.name && (
              <div className="absolute top-full left-0 w-80 z-50">
                <div className="mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                {item.dropdown.map((group, idx) => (
                  <div key={group.category} className={cn('px-4', idx > 0 && 'mt-4 pt-4 border-t border-gray-200')}>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {group.category}
                    </div>
                    <div className="space-y-1">
                      {group.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            'block px-3 py-2 rounded-md text-sm transition-colors',
                            pathname === subItem.href
                              ? 'bg-primary-50 text-primary-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden -m-3 inline-flex items-center justify-center rounded-md p-3 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">Menüyü aç</span>
        {mobileMenuOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'
                  )}
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="mt-2 ml-4 space-y-3">
                    {item.dropdown.map((group) => (
                      <div key={group.category}>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                          {group.category}
                        </div>
                        <div className="space-y-1">
                          {group.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                'block px-3 py-2 rounded-md text-sm transition-colors',
                                pathname === subItem.href
                                  ? 'bg-primary-50 text-primary-600 font-medium'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/iletisim"
                className="block w-full text-center px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
