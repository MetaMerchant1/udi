'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Target, Compass, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useContactModal } from '@/contexts/ContactModalContext';

const services = [
  {
    title: 'Kariyer Hedefi Belirleme',
    description: 'İlgi alanlarınız, yetenekleriniz ve değerleriniz doğrultusunda kariyer hedeflerinizi belirleriz.',
    icon: Target,
  },
  {
    title: 'Bölüm Seçimi Danışmanlığı',
    description: 'Kariyer hedeflerinize uygun üniversite bölümlerini birlikte belirliyoruz.',
    icon: Compass,
  },
  {
    title: 'Staj ve İş İmkanları',
    description: 'Sektörel deneyim kazanmanız için staj ve iş fırsatları rehberliği.',
    icon: Briefcase,
  },
  {
    title: 'Mezuniyet Sonrası Planlama',
    description: 'Yüksek lisans, iş hayatı veya girişimcilik - size en uygun yolu belirliyoruz.',
    icon: TrendingUp,
  },
];

const steps = [
  'Kişisel özellikler ve ilgi alanları değerlendirmesi',
  'Piyasa analizi ve sektör trendleri incelemesi',
  'Uygun kariyer yollarının belirlenmesi',
  'Eğitim ve gelişim planı oluşturma',
  'Kısa ve uzun vadeli hedef belirleme',
  'Düzenli takip ve yönlendirme',
];

export default function KariyerPlanlamaPage() {
  const { openModal } = useContactModal();

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/zetong-li-y8diuDh3M0s-unsplash.jpg"
            alt="Kariyer Planlama"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">Kariyer Planlama</span>
            </div>
            <h1 className="heading-1 mb-6">
              Geleceğinizi Doğru Planlayın
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Profesyonel kariyer danışmanlığı ile hayalinizdeki mesleğe giden yolu birlikte çizelim.
            </p>
            <Button size="lg" onClick={openModal}>
              Kariyer Danışmanlığı Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Kariyer Danışmanlığı Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Başarılı bir kariyer için ihtiyacınız olan tüm destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-green-600" />
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

      {/* Process */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Kariyer Planlama Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sistematik ve kişiye özel yaklaşımımızla kariyer yolculuğunuzda yanınızdayız.
            </p>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-green-600 mb-4">%95</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Kariyer Memnuniyeti
                </h3>
                <p className="text-gray-600">
                  Danışmanlık aldığımız öğrencilerimizin %95'i seçtikleri kariyer yolundan memnun
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Kapsamlı Rehberlik Hizmetimiz
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Doğru kariyer seçimi, öğrencilerin ve genç profesyonellerin geleceğini şekillendiren en önemli adımlardan biridir. Kariyer Planlama hizmetimiz, bireylerin akademik geçmişi, yetenekleri, ilgi alanları ve kişilik özelliklerini analiz ederek onlara en uygun kariyer yolunu belirlemeyi amaçlar.
            </p>
            <p>
              Alanında uzman danışmanlarımız, uluslararası geçerliliği olan envanterler, mesleki eğilim analizleri ve birebir görüşmelerle her öğrenciye özel bir kariyer profili oluşturur. Bu kapsamlı değerlendirme sayesinde öğrenciler, güçlü yönlerini keşfeder, potansiyellerine en uygun meslekleri tanır ve geleceğe daha bilinçli adımlarla ilerler.
            </p>
            <p>
              Kariyer planlama sürecinde; bölüm ve meslek seçimi, üniversite veya program tercihi, profesyonel beceri geliştirme, staj ve deneyim önerileri, iş dünyası trendleri ve geleceğin meslekleri gibi konularda kapsamlı rehberlik sunuyoruz. Böylece öğrenciler yalnızca bir meslek seçmekle kalmaz, aynı zamanda uzun vadeli ve sürdürülebilir bir kariyer yolculuğuna hazırlanır.
            </p>
            <p>
              Amacımız, bireylerin kariyerlerini rastlantılara bırakmadan, kendilerini tanıyarak, güçlü bir vizyonla ve doğru stratejilerle planlamalarına destek olmaktır. Doğru yönlendirme, profesyonel analiz ve kişiye özel rehberlikle geleceğiniz için en sağlam temeli birlikte atıyoruz.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Doğru Kariyer Kararı İçin Şimdi Harekete Geçin
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz kariyer danışmanlığı görüşmesi için iletişime geçin
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Hemen Başla
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </Section>
    </div>
  );
}
