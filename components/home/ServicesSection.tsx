'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Target, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

const serviceCategories = [
  {
    id: '1',
    title: 'Danışmanlık Hizmetleri',
    description: 'Yurtdışı eğitim yolculuğunuzda kapsamlı danışmanlık ve koçluk desteği.',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    href: '/hizmetler#danismanlik',
    services: [
      { name: 'Yurtdışı Üniversite Danışmanlığı', href: '/yurtdisi-universite-danismanligi' },
      { name: 'Yurt İçi Üniversite Danışmanlığı', href: '/yurtici-universite-danismanligi' },
      { name: 'Kariyer Planlama', href: '/kariyer-planlama' },
      { name: 'Akademik Takip', href: '/akademik-takip' },
      { name: 'Eğitim Koçluğu', href: '/egitim-koclugu' },
      { name: 'Kişilik Envanterleri', href: '/kisilik-envanterleri' },
    ],
  },
  {
    id: '2',
    title: 'Çalışma Alanları',
    description: 'Profesyonel gelişim ve akademik başarı için özel eğitim programları.',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    href: '/hizmetler#calisma-alanlari',
    services: [
      { name: 'Liderlik Eğitimi', href: '/liderlik-egitimi' },
      { name: 'İş İngilizcesi', href: '/is-ingilizcesi' },
      { name: 'Uluslararası Sınavlar (IELTS, SAT, ACT, TOEFL)', href: '/uluslararasi-sinavlar' },
    ],
  },
];

export default function ServicesSection() {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yurtdışı eğitim yolculuğunuzun her aşamasında profesyonel destek
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {serviceCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full group">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link
                        href={service.href}
                        className="flex items-start gap-3 text-gray-700 hover:text-primary-600 transition-colors group/item"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link href={category.href}>
                  <div className="flex items-center text-primary-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                    Tümünü Gör
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link href="/hizmetler">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Tüm Hizmetleri Keşfet
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </motion.div>
    </Section>
  );
}
