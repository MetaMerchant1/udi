'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { ContactFormData } from '@/lib/types';

const WEB3FORMS_ACCESS_KEY = 'abceb852-5a5b-4cf0-8ffb-29b87129a7a5';

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
  } = useForm<ContactFormData>();

  // Watch message field for character count
  const messageValue = watch('message', '');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `UDI Iletisim Formu - ${data.name}`);
      formData.append('from_name', 'UDI Danismanlik Web Sitesi');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('message', data.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
        setMessageLength(0);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Form gönderilemedi');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
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
      <Section className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-[#1c2a2f] text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/pexels-shanerich5-34331045.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800/95 to-secondary-900/95"></div>

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
                    <a href="tel:+905325172006" className="text-gray-600 hover:text-primary-600 transition-colors">
                      0532 517 20 06
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Pazartesi - Cumartesi: 10:00 - 18:00</p>
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
                    <a href="mailto:unitedevelopmentinnovation@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      unitedevelopmentinnovation@gmail.com
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
                  <span className="font-semibold text-gray-900">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Cumartesi:</span>
                  <span className="font-semibold text-gray-900">10:00 - 18:00</span>
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

    </div>
  );
}
