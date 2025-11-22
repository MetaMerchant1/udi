'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/contexts/ContactModalContext';
import Button from '@/components/shared/Button';
import { ContactFormData } from '@/lib/types';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
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

  const messageValue = watch('message', '');

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration is missing. Please check your .env.local file.');
        throw new Error('EmailJS yapılandırması eksik.');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitSuccess(true);
      reset();
      setMessageLength(0);

      // Close modal and hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">İletişim</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
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
                      <p className="text-sm text-red-700 mt-1">Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="label label-required">
                        Ad Soyad
                      </label>
                      <input
                        id="modal-name"
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
                      <label htmlFor="modal-email" className="label label-required">
                        E-posta
                      </label>
                      <input
                        id="modal-email"
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
                    <label htmlFor="modal-phone" className="label label-required">
                      Telefon
                    </label>
                    <input
                      id="modal-phone"
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
                      <label htmlFor="modal-message" className="label label-required !mb-0">
                        Mesajınız
                      </label>
                      <span className={`text-xs ${
                        messageValue?.length > maxMessageLength ? 'text-red-600 font-semibold' : 'text-gray-500'
                      }`}>
                        {messageValue?.length || 0} / {maxMessageLength}
                      </span>
                    </div>
                    <textarea
                      id="modal-message"
                      rows={4}
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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
