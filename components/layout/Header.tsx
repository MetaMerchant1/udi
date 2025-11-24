'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Main Header */}
      <Container>
        <div className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/udi-logo.svg"
              alt="UDI - United Development and Innovation"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              size="sm"
              onClick={openModal}
              className="!bg-primary-600 !text-white hover:!bg-primary-700 !border-primary-600 hover:!border-primary-700"
            >
              İletişim
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
