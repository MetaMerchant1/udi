'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

const testimonials = [
  {
    id: '1',
    name: 'Ayşe Yılmaz',
    role: 'Harvard University - MBA',
    content: 'EğitimDanışmanlık ekibi sayesinde hayalimde ki üniversiteye kabul aldım. Profesyonel yaklaşımları ve her aşamada yanımda olmaları çok değerliydi.',
    rating: 5,
    university: 'Harvard University',
  },
  {
    id: '2',
    name: 'Mehmet Demir',
    role: 'Oxford University - Computer Science',
    content: 'Vize sürecinde yaşadığım kaygıları anlayışla karşıladılar ve başarıyla sonuçlandırdık. Kesinlikle tavsiye ederim!',
    rating: 5,
    university: 'Oxford University',
  },
  {
    id: '3',
    name: 'Zeynep Kaya',
    role: 'MIT - Mechanical Engineering',
    content: 'Motivasyon mektubu ve başvuru evraklarının hazırlanmasında aldığım destek harikaydı. MIT\'ye kabul almamda büyük rolleri var.',
    rating: 5,
    university: 'MIT',
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Öğrencilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Başarı hikayelerimiz, en büyük motivasyon kaynağımız
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary-600 font-medium mt-1">
                  {testimonial.university}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
