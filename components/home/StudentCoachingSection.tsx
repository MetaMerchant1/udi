'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Target, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

const benefits = [
  {
    icon: Target,
    title: 'Hedef Belirleme',
    description: 'Akademik ve kişisel hedeflerinizi net bir şekilde belirliyoruz',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Clock,
    title: 'Zaman Yönetimi',
    description: 'Etkili çalışma teknikleri ve zaman planlaması stratejileri',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Heart,
    title: 'Duygusal Denge',
    description: 'Stres yönetimi ve öz güven geliştirme desteği',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export default function StudentCoachingSection() {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Kişisel Gelişim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Eğitim Koçluğu: Potansiyelinizi Keşfedin
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Bire bir koçluk seanslarıyla akademik performansınızı artırın, hedeflerinize ulaşın.
            Her öğrencinin benzersiz ihtiyaçlarına göre özelleştirilmiş stratejiler ve sürekli destek
            ile başarınızı garanti altına alıyoruz.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/camilo-botia-k4vFDPJoDZk-unsplash.jpg')" }}
            ></div>

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">%100</div>
                    <div className="text-xs text-white/80">Öğrenci Memnuniyeti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>
        </motion.div>
      </div>
    </Section>
  );
}
