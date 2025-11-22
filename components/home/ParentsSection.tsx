'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, Heart } from 'lucide-react';
import Section from '@/components/shared/Section';

export default function ParentsSection() {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/pexels-shanerich5-34331045.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm text-gray-200">Mutlu Aile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Veli Desteği
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Veliler İçin
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Ebeveynlerle düzenli ilerleme toplantıları yaparak öğrencinin gelişimini paylaşırız.
            Amaç, sadece iyi bir üniversite değil, <span className="font-semibold text-gray-900">mutlu, bilinçli ve güçlü bir birey yetiştirmektir</span>.
          </p>

          {/* Benefits */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Düzenli İlerleme Toplantıları</h3>
                <p className="text-gray-600 text-sm">
                  Öğrencinizin akademik ve kişisel gelişimini her aşamada sizlerle paylaşıyoruz
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-purple-50 border border-purple-100"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Şeffaf İletişim</h3>
                <p className="text-gray-600 text-sm">
                  Ailelerle açık ve sürekli iletişim halinde, sorularınıza anında yanıt veriyoruz
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-pink-50 border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Bütüncül Yaklaşım</h3>
                <p className="text-gray-600 text-sm">
                  Sadece akademik başarı değil, mutlu ve dengeli bir gelecek için çalışıyoruz
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border-l-4 border-primary-600"
          >
            <p className="text-gray-700 italic">
              "Çocuğumuzun sadece iyi bir üniversiteye gitmesi değil, hayata hazır, özgüvenli ve mutlu bir birey olması bizim için en önemlisi."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Bir Velimizin Görüşü</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
