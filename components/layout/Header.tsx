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
        isScrolled ? 'bg-[#24363d] shadow-md' : 'bg-[#24363d]/95 backdrop-blur-sm'
      }`}
    >
      {/* Main Header */}
      <Container>
        <div className="flex items-center justify-between py-3 relative">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 text-white group">
            <span className="text-2xl font-bold transition-all duration-300 group-hover:scale-105">UDI</span>
            <span className="text-gray-300">|</span>
            <span className="text-base italic text-gray-200 transition-all duration-300 group-hover:scale-105">United Development and Innovation</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Navigation />

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button
                size="sm"
                onClick={openModal}
                className="!bg-white !text-[#24363d] hover:!bg-gray-100 !border-white hover:!border-gray-100 font-semibold"
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
