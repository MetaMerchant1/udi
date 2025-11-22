import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, Target, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Eğitim Koçluğu',
  description: 'Kişisel ve akademik gelişim için özel koçluk desteği. Bire bir koçluk seansları, motivasyon ve hedef belirleme ile başarıya giden yolda yanınızdayız.',
  openGraph: {
    title: 'Eğitim Koçluğu | EğitimDanışmanlık',
    description: 'Kişisel ve akademik gelişim için özel koçluk desteği.',
  },
};

const benefits = [
  {
    title: 'Bire Bir Koçluk Seansları',
    description: 'Kişiye özel, düzenli koçluk görüşmeleri',
    icon: Users,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Motivasyon ve Hedef Belirleme',
    description: 'Net hedefler ve sürekli motivasyon desteği',
    icon: Target,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Zaman Yönetimi',
    description: 'Etkili zaman yönetimi becerileri kazandırma',
    icon: Clock,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Duygusal Denge',
    description: 'Akademik ve duygusal dengeyi koruma',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
];

export default function EgitimKocluguPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/camilo-botia-k4vFDPJoDZk-unsplash.jpg"
            alt="Eğitim Koçluğu"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Eğitim Koçluğu</span>
            </div>
            <h1 className="heading-1 mb-6">
              Potansiyelinizi Ortaya Çıkarın
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Kişiye özel eğitim koçluğu ile akademik başarının ötesinde kişisel gelişim.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Koçluk Seansı Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Eğitim Koçluğu ile Neler Kazanırsınız?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akademik başarı ve kişisel gelişimi bir arada sunuyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index}>
                <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Eğitim Koçluğu Sürecimiz
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">İlk Değerlendirme</h3>
                  <p className="text-gray-600">Hedeflerinizi ve ihtiyaçlarınızı belirliyoruz.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kişisel Plan Oluşturma</h3>
                  <p className="text-gray-600">Size özel gelişim planı hazırlıyoruz.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Düzenli Seanslar</h3>
                  <p className="text-gray-600">Haftalık veya aylık koçluk görüşmeleri.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">İzleme ve Değerlendirme</h3>
                  <p className="text-gray-600">Gelişiminizi sürekli takip ediyoruz.</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Koçluk Alanlarımız</h3>
            <ul className="space-y-3">
              {[
                'Akademik performans iyileştirme',
                'Öz güven geliştirme',
                'Stres yönetimi',
                'Çalışma alışkanlıkları',
                'Sosyal beceriler',
                'Kariyer planlama',
                'Sınav kaygısı yönetimi',
                'Öz farkındalık geliştirme'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Bütünsel Rehberlik Süreci
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Eğitim Koçluğu, öğrencinin akademik yolculuğunu sadece ders başarısı üzerinden değil; motivasyon, hedef belirleme, zaman yönetimi, öz disiplin ve kişisel gelişim gibi çok yönlü noktalar üzerinden destekleyen bütünsel bir rehberlik sürecidir. Eğitim Koçluğu hizmetimiz, öğrencinin potansiyelini keşfetmesini ve bu potansiyeli doğru stratejilerle en verimli şekilde kullanmasını amaçlar.
            </p>
            <p>
              Deneyimli eğitim koçlarımız, öğrenciyle birebir çalışarak güçlü ve gelişime açık yönlerini analiz eder, hedeflerine uygun kısa ve uzun vadeli planlar oluşturur. Öğrencinin sınavlara, projelere ve akademik sorumluluklara daha planlı ve özgüvenli yaklaşması için yol gösterir; motivasyon yönetimi ve stres kontrolü gibi alanlarda destek sunar.
            </p>
            <p>
              Bu süreçte öğrencinin ders çalışma rutinleri, öğrenme yöntemleri, dikkat yönetimi ve performans alışkanlıkları düzenli olarak takip edilir ve gerekli durumlarda revize edilir. Böylece öğrencinin hem akademik hem kişisel gelişimi sistemli bir biçimde güçlendirilir.
            </p>
            <p>
              Eğitim Koçluğu ile amacımız, öğrencinin kendi öğrenme yolculuğunu sahiplenmesini, sorumluluk bilincini geliştirmesini ve hedeflerine daha emin adımlarla ilerlemesini sağlamaktır. Doğru rehberlik ve süreklilikle, başarıyı tesadüf olmaktan çıkarıyoruz.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Değişim İçin İlk Adımı Atın
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz ön görüşme için hemen iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              İletişime Geç
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
