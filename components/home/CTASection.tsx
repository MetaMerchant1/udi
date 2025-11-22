'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/shared/Button';
import Section from '@/components/shared/Section';

export default function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
          Geleceğiniz Bekliyor
        </span>
        <h2 className="heading-2 mb-4">
          Kariyer Hedeflerinize Ulaşmanın Tam Zamanı
        </h2>
        <p className="text-xl text-primary-100 mb-3 max-w-3xl mx-auto leading-relaxed">
          Kapsamlı danışmanlık hizmetlerimiz ve profesyonel eğitim programlarımızla <span className="font-semibold text-white">hayalinizdeki geleceği inşa edin</span>.
        </p>
        <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
          25+ yıllık deneyimimizle yanınızdayız
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/iletisim">
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-100">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>25+ Yıl Deneyim</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>8 Farklı Hizmet</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Kişiye Özel Program</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
