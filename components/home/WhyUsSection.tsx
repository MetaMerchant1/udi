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

      {/* Stats Section with Image */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Rakamlarla Başarımız</h3>
              <p className="text-primary-200 text-sm sm:text-base">Kanıtlanmış sonuçlar ve mutlu öğrenciler</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">1000+</div>
                <div className="text-primary-200 text-xs sm:text-sm">Başarılı Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">50+</div>
                <div className="text-primary-200 text-xs sm:text-sm">Partner Üniversite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">%98</div>
                <div className="text-primary-200 text-xs sm:text-sm">Vize Başarı Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">20+</div>
                <div className="text-primary-200 text-xs sm:text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Story Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]"
        >
          <div className="relative h-full rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              {/* Student Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/pexels-george-pak-7972980.jpg')" }}
              ></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-xs font-medium bg-green-500/40 backdrop-blur-sm px-3 py-1 rounded-full">Başarı Hikayelerimiz</span>
                </div>
                <p className="text-2xl font-bold">1000+ Mutlu Öğrenci</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Countries Coverage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Danışmanlık Verdiğimiz Ülkeler
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['ABD', 'İngiltere', 'Kanada', 'Almanya', 'Hollanda', 'Fransa', 'Avustralya', 'İsviçre', 'İtalya', 'İspanya', 'Japonya', 'Singapur'].map((country) => (
            <span
              key={country}
              className="inline-block px-6 py-3 bg-white shadow-md rounded-full text-gray-700 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {country}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
