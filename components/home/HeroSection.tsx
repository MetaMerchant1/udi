'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import Button from '@/components/shared/Button';
import Container from '@/components/shared/Container';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/zhanhui-li-1iuxWsIZ6ko-unsplash.jpg"
          alt="Yurtdışı Eğitim"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.9), 0 4px 60px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.8)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-4 py-2 mb-6 mx-auto border border-white/40 shadow-lg"
            >
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">Akademik ve Uluslararası Uzmanlıkla Güvenilir Rehberlik</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Yurt Dışı Üniversite Danışmanlığı
              <span className="block text-primary-200">ve Öğrenci Koçluğu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
            >
              Kişiye Özel Eğitim ve Kariyer Yolculuğu Tasarımı
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto">
                İletişim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/hizmetler">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Hizmetlerimiz
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 pt-8 border-t border-white/20 max-w-2xl mx-auto"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">1000+</div>
                <div className="text-sm sm:text-base text-primary-200 mt-1">Başarılı Öğrenci</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                <div className="text-sm sm:text-base text-primary-200 mt-1">Partner Üniversite</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">%98</div>
                <div className="text-sm sm:text-base text-primary-200 mt-1">Vize Başarı Oranı</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Wave - Static */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
