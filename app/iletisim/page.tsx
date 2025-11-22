'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { ContactFormData } from '@/lib/types';

const countries = [
  'Amerika Birleşik Devletleri',
  'İngiltere',
  'Kanada',
  'Almanya',
  'Avustralya',
  'Hollanda',
  'Fransa',
  'İsviçre',
  'İtalya',
  'İspanya',
  'Diğer',
];

const educationLevels = [
  'Lise Öğrencisi',
  'Lisans',
  'Yüksek Lisans',
  'Doktora',
  'Dil Eğitimi',
  'Sertifika Programı',
  'Diğer',
];

export default function IletisimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const maxMessageLength = 500;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData & { educationLevel: string }>();

  // Watch message field for character count
  const messageValue = watch('message', '');

  const onSubmit = async (data: ContactFormData & { educationLevel: string }) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration is missing. Please check your .env.local file.');
        throw new Error('EmailJS yapılandırması eksik.');
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          education_level: data.educationLevel,
          country: data.country,
          message: data.message,
        },
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitSuccess(true);
      reset();
      setMessageLength(0);

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update message length counter
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/pexels-shanerich5-34331045.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">
            İletişim
          </h1>
          <p className="text-xl text-primary-100">
            Yurtdışı eğitim hayalleriniz için ücretsiz danışmanlık almak üzere bizimle iletişime geçin
          </p>
        </div>
      </Section>

      {/* Contact Info & Form */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Bize Ulaşın
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Sorularınız için bize ulaşabilir veya ofisimizi ziyaret edebilirsiniz.
              Uzman ekibimiz size yardımcı olmak için hazır.
            </p>

            <div className="space-y-4 md:space-y-6">
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+905XXXXXXXXX" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +90 5XX XXX XX XX
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                    <a href="mailto:info@example.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      info@example.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24 saat içinde yanıt veriyoruz</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Örnek Mahallesi, Örnek Sokak No:1<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Office Hours */}
            <Card hover={false} className="mt-4 md:mt-6 bg-primary-50 border-2 border-primary-200">
              <h3 className="font-semibold text-gray-900 mb-3">Çalışma Saatlerimiz</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Pazartesi - Cuma:</span>
                  <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Cumartesi:</span>
                  <span className="font-semibold text-gray-900">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Pazar:</span>
                  <span className="font-semibold text-gray-900">Kapalı</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              İletişim Formu
            </h2>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-start gap-3 animate-slide-down">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Mesajınız başarıyla gönderildi!</p>
                  <p className="text-sm text-green-700 mt-1">En kısa sürede size dönüş yapacağız.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3 animate-slide-down">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Bir hata oluştu</p>
                  <p className="text-sm text-red-700 mt-1">Lütfen daha sonra tekrar deneyin veya bizi arayın.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label label-required">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', {
                      required: 'Ad soyad gereklidir',
                      minLength: { value: 3, message: 'En az 3 karakter olmalıdır' }
                    })}
                    className={`input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Adınız Soyadınız"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label label-required">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'E-posta gereklidir',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Geçerli bir e-posta adresi girin',
                      },
                    })}
                    className={`input ${errors.email ? 'input-error' : ''}`}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Education Level Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label label-required">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Telefon numarası gereklidir',
                      pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: 'Geçerli bir telefon numarası girin'
                      }
                    })}
                    className={`input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="05XX XXX XX XX"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Education Level */}
                <div>
                  <label htmlFor="educationLevel" className="label label-required">
                    Eğitim Seviyesi
                  </label>
                  <select
                    id="educationLevel"
                    {...register('educationLevel', { required: 'Eğitim seviyesi seçimi gereklidir' })}
                    className={`input ${errors.educationLevel ? 'input-error' : ''}`}
                  >
                    <option value="">Seçin</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.educationLevel && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.educationLevel.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="label label-required">
                  İlgilendiğiniz Ülke
                </label>
                <select
                  id="country"
                  {...register('country', { required: 'Ülke seçimi gereklidir' })}
                  className={`input ${errors.country ? 'input-error' : ''}`}
                >
                  <option value="">Ülke seçin</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="label label-required !mb-0">
                    Mesajınız
                  </label>
                  <span className={`text-xs ${
                    messageValue?.length > maxMessageLength ? 'text-red-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {messageValue?.length || 0} / {maxMessageLength}
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: 'Mesaj gereklidir',
                    maxLength: {
                      value: maxMessageLength,
                      message: `Mesaj en fazla ${maxMessageLength} karakter olabilir`
                    },
                    minLength: {
                      value: 10,
                      message: 'Mesaj en az 10 karakter olmalıdır'
                    }
                  })}
                  onChange={handleMessageChange}
                  className={`textarea ${errors.message ? 'textarea-error' : ''}`}
                  placeholder="Eğitim planlarınız ve sorularınız hakkında bilgi verin..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Gönderiliyor...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Mesaj Gönder
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                <span className="text-red-500">*</span> işaretli alanlar zorunludur
              </p>
            </form>
          </Card>
        </div>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section className="bg-white" fullWidth>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <p>Harita konumu buraya gelecek</p>
            <p className="text-sm">(Google Maps entegrasyonu)</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
