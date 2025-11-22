'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Trophy, FileText, Plane } from 'lucide-react';
import Section from '@/components/shared/Section';

const steps = [
  {
    number: '01',
    title: 'Kişilik ve Yetenek Analizi',
    description: 'Profesyonel kişilik envanterleri ile doğru kariyer yolunu belirleme',
    icon: Compass,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    title: 'Akademik Planlama',
    description: 'Kariyer hedeflerinize uygun ders seçimi ve sınav stratejileri',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    number: '03',
    title: 'Liderlik ve Kişisel Gelişim',
    description: 'Liderlik eğitimi, iş İngilizcesi ve profesyonel beceriler',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  {
    number: '04',
    title: 'Sınav Hazırlığı',
    description: 'IELTS, SAT, ACT, TOEFL sınavlarına profesyonel hazırlık',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    number: '05',
    title: 'Üniversite Başvuru ve Kabul',
    description: 'Başvuru sürecinden kabule kadar A\'dan Z\'ye destek',
    icon: Plane,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
  },
];

export default function PreparationProcessSection() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Başarı Yol Haritası
          </span>
          <h2 className="heading-2 text-gray-900 mb-4">
            Kapsamlı Eğitim Danışmanlığı Sürecimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Yetenek analizinden üniversite kabulüne kadar her adımda profesyonel destek
          </p>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} order-2 lg:order-1`}>
                    <div className="inline-block">
                      <div className={`inline-flex items-center gap-2 sm:gap-3 ${step.bgColor} rounded-full px-4 sm:px-6 py-2 mb-3 sm:mb-4`}>
                        <span className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Card */}
                  <div className={`${isEven ? 'lg:pl-12' : 'lg:col-start-1 lg:pr-12'} flex ${isEven ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'} order-1 lg:order-2`}>
                    <div className="relative group">
                      <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} p-[2px] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-[14px] sm:rounded-[21px] flex items-center justify-center">
                          <Icon className={`h-12 w-12 sm:h-16 sm:w-16 text-white drop-shadow-lg`} strokeWidth={2} />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                    </div>
                  </div>
                </div>

                {/* Center Dot on Timeline */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-lg`}></div>
                  <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-75`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl px-8 py-6 shadow-xl">
          <p className="text-lg font-semibold mb-2">5 adımda hedeflerinize ulaşın</p>
          <p className="text-primary-100">Kariyer planlamadan üniversite kabulüne kadar her aşamada yanınızdayız</p>
        </div>
      </motion.div>
    </Section>
  );
}
