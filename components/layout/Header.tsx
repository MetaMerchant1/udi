'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Navigation from './Navigation';
import Button from '@/components/shared/Button';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#220b47] shadow-md' : 'bg-[#220b47]/95 backdrop-blur-sm'
      }`}
    >
      {/* Main Header */}
      <Container>
        <div className="flex items-center justify-between py-3 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-wide transition-all duration-300 group-hover:scale-105 drop-shadow-lg">
              United Development and Innovation
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Navigation />

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button
                size="sm"
                onClick={openModal}
                className="!bg-white !text-[#220b47] hover:!bg-gray-100 !border-white hover:!border-gray-100 font-semibold"
              >
                İletişim
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
