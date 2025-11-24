'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Globe2, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

const reasons = [
  {
    id: '1',
    icon: Lightbulb,
    title: 'Erken Planlama, Büyük Fırsatlar',
    description: 'Öğrencilerimizin ilgi alanlarını, güçlü yönlerini ve hedeflerini keşfederek erken yaşta yön belirliyoruz. Bu sayede lise ve üniversite yıllarında fark yaratan bir profil oluşturuyoruz.',
    color: 'bg-yellow-100 text-yellow-600',
    gradient: 'from-yellow-400 to-orange-500',
    features: [
      '7. sınıftan itibaren kariyer keşfi',
      'İlgi alanı ve yetenek analizi',
      'Erken dönem hedef belirleme',
      'Fark yaratan profil oluşturma',
    ],
  },
  {
    id: '2',
    icon: Target,
    title: 'Kişiye Özel Kariyer Planı',
    description: 'Her öğrenci benzersizdir. Akademik başarı, sosyal beceriler, gönüllülük çalışmaları, staj ve liderlik deneyimleriyle uyumlu bireysel planlar hazırlıyoruz.',
    color: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-400 to-indigo-500',
    features: [
      'Bireysel akademik planlama',
      'Sosyal beceri geliştirme',
      'Gönüllülük ve staj koordinasyonu',
      'Liderlik deneyimi fırsatları',
    ],
  },
  {
    id: '3',
    icon: Globe2,
    title: 'Dünya Standartlarında Danışmanlık',
    description: 'ABD, İngiltere, Kanada, Avrupa ve Asya\'daki önde gelen üniversiteler için başvuru süreçlerinde uzman desteği sağlıyoruz.',
    color: 'bg-green-100 text-green-600',
    gradient: 'from-green-400 to-emerald-500',
    features: [
      'Essay yazımı danışmanlığı',
      'Referans mektupları hazırlığı',
      'Portfolyo oluşturma',
      'Mülakat koçluğu',
    ],
  },
];

export default function WhyUsSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Farkımız
          </span>
          <h2 className="heading-2 text-gray-900 mb-4">
            Neden Biz?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deneyim Odaklı, Profesyonel ve Sonuç Getiren Danışmanlık
          </p>
        </motion.div>
      </div>

      {/* Reasons Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  {reason.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${reason.gradient} mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            </motion.div>
          );
        })}
      </div>

    </Section>
  );
}
