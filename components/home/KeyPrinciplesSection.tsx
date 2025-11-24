'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Lightbulb, Globe2, Users } from 'lucide-react';
import Section from '@/components/shared/Section';

const principles = [
  {
    id: '1',
    icon: Award,
    title: 'Akademik ve Uluslararası Uzmanlıkla Güvenilir Rehberlik',
    gradient: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: '2',
    icon: Target,
    title: 'Kişiye Özel Eğitim ve Kariyer Yolculuğu Tasarımı',
    gradient: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: '3',
    icon: Lightbulb,
    title: 'Deneyim Odaklı, Profesyonel ve Sonuç Getiren Danışmanlık',
    gradient: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: '4',
    icon: Globe2,
    title: 'Global Standartlarda Sınav, Üniversite ve Kariyer Destek Hizmetleri',
    gradient: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: '5',
    icon: Users,
    title: 'Öğrenci Odaklı, Şeffaf ve Sürdürülebilir Başarı Yaklaşımı',
    gradient: 'from-rose-500 to-red-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

export default function KeyPrinciplesSection() {
  return (
    <Section className="bg-white">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Temel İlkelerimiz
          </span>
          <h2 className="heading-2 text-gray-900 mb-4">
            5 Anahtar İlkemiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Başarıya giden yolda sizinle beraber olacağımız 5 temel değer
          </p>
        </motion.div>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${index === 4 ? 'md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:max-w-none' : ''}`}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden">
                {/* Background Gradient (appears on hover) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${principle.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${principle.iconColor}`} />
                  </div>

                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${principle.gradient} text-white rounded-full text-sm font-bold mb-4`}>
                    {principle.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    {principle.title}
                  </h3>

                  {/* Bottom Accent Line */}
                  <div className={`h-1 bg-gradient-to-r ${principle.gradient} mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 md:mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-white max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Bu İlkelerle Yanınızdayız
          </h3>
          <p className="text-primary-100 text-base md:text-lg">
            Eğitim yolculuğunuzda her adımda profesyonel destek ve güvenilir rehberlik
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
