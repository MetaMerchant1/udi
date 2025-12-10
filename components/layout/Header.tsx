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
        isScrolled ? 'bg-[#24363d] shadow-md' : 'bg-[#24363d]/95 backdrop-blur-sm'
      }`}
    >
      {/* Main Header */}
      <Container>
        <div className="flex items-center justify-between py-3 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/header.jpg"
              alt="United Development and Innovation"
              width={50}
              height={50}
              className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105"
              priority
            />
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
