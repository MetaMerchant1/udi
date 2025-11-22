'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/shared/Section';

const universities = [
  { name: 'Harvard', country: 'USA' },
  { name: 'Oxford', country: 'UK' },
  { name: 'MIT', country: 'USA' },
  { name: 'Cambridge', country: 'UK' },
  { name: 'Stanford', country: 'USA' },
  { name: 'Yale', country: 'USA' },
  { name: 'Princeton', country: 'USA' },
  { name: 'Imperial College', country: 'UK' },
];

export default function UniversitiesSection() {
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
            Partner Üniversiteler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dünyanın en prestijli üniversiteleri ile iş birliği içindeyiz
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* University Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {university.name}
                </div>
                <div className="text-sm text-gray-500">
                  {university.country}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary-600 text-white rounded-2xl px-8 py-4">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm">Partner Üniversite</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
