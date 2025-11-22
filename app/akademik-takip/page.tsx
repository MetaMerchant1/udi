'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, CheckCircle, ArrowRight, TrendingUp, Calendar, Users } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useContactModal } from '@/contexts/ContactModalContext';

const services = [
  {
    title: 'Düzenli Performans Değerlendirme',
    description: 'Akademik başarınızı düzenli olarak değerlendirip raporluyoruz.',
    icon: TrendingUp,
  },
  {
    title: 'Akademik Hedef Belirleme',
    description: 'Kısa ve uzun vadeli akademik hedeflerinizi birlikte planlıyoruz.',
    icon: CheckCircle,
  },
  {
    title: 'Ders Planlaması ve Destek',
    description: 'İhtiyacınız olan derslerde özel destek ve planlama.',
    icon: BookOpen,
  },
  {
    title: 'Aile ile Düzenli İletişim',
    description: 'Ailenize düzenli raporlama ve bilgilendirme.',
    icon: Users,
  },
];

export default function AkademikTakipPage() {
  const { openModal } = useContactModal();

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/zhanhui-li-1iuxWsIZ6ko-unsplash.jpg"
            alt="Akademik Takip"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium">Akademik Takip</span>
            </div>
            <h1 className="heading-1 mb-6">
              Akademik Başarınızı Birlikte İzleyelim
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Düzenli takip ve profesyonel destek ile akademik hedeflerinize ulaşın.
            </p>
            <Button size="lg" onClick={openModal}>
              Hemen Başlayın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Akademik Takip Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Başarınız için sürekli destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Neden Akademik Takip Önemlidir?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Erken Müdahale</h3>
                  <p className="text-gray-600">Akademik sorunları erken tespit edip çözüm üretiyoruz.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hedef Odaklı Çalışma</h3>
                  <p className="text-gray-600">Net hedeflerle daha verimli çalışma stratejileri geliştiriyoruz.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Motivasyon Desteği</h3>
                  <p className="text-gray-600">Düzenli takip ile motivasyonunuzu yüksek tutuyoruz.</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <div className="text-center p-8">
              <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Düzenli Raporlama
              </h3>
              <p className="text-gray-600 mb-6">
                Aylık detaylı performans raporları ile gelişiminizi takip edin
              </p>
              <button
                onClick={openModal}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Detaylı Bilgi
              </button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Kapsamlı Akademik Takip
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Akademik başarı, düzenli takip ve doğru yönlendirme ile sürdürülebilir hâle gelir. Akademik Takip hizmetimiz, öğrencilerin eğitim süreçlerini yakından izleyerek akademik gelişimlerini desteklemeyi ve maksimum başarıya ulaşmalarını sağlamayı amaçlar.
            </p>
            <p>
              Deneyimli danışman ekibimiz, öğrencilerin ders performanslarını, sınav sonuçlarını, çalışma alışkanlıklarını ve motivasyon seviyelerini düzenli olarak değerlendirir. Bu doğrultuda kişiye özel çalışma planları oluşturulur, eksik alanlar belirlenir ve öğrencinin ihtiyaçlarına uygun çözüm önerileri sunulur.
            </p>
            <p>
              Düzenli görüşmeler, performans analizleri ve takip raporları ile öğrencinin gelişimi hem aile hem öğrenci tarafından somut olarak izlenir. Öğrencinin hedeflerine odaklanması, zamanı verimli yönetmesi, akademik becerilerini geliştirmesi ve sınav dönemlerine hazırlığını güçlendirmesi için rehberlik sağlanır.
            </p>
            <p>
              Amacımız, öğrencilerin yalnızca ders başarılarını artırmak değil; aynı zamanda öğrenme disiplinini, özgüvenini ve sorumluluk bilincini pekiştirmektir. Akademik yolculuk boyunca öğrencinin yanında duran uzman ekibimiz, her adımı planlı, takip edilen ve sonuç odaklı bir sürece dönüştürür.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Akademik Başarınızı Garanti Altına Alın
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Profesyonel akademik takip hizmeti için iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Randevu Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
