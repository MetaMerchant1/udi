import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Target, Users, TrendingUp, Brain, BookOpen, MessageSquare, Globe2, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Yurtdışı eğitim yolculuğunuzun her aşamasında profesyonel destek. Danışmanlık hizmetleri ve çalışma alanları.',
  openGraph: {
    title: 'Hizmetlerimiz | EğitimDanışmanlık',
    description: 'Yurtdışı eğitim yolculuğunuzun her aşamasında profesyonel destek.',
  },
};

const danismanlikHizmetleri = [
  {
    id: '1',
    title: 'Yurtdışı Üniversite Danışmanlığı',
    description: 'Dünya çapındaki üniversitelere başvuru sürecinizde A\'dan Z\'ye profesyonel destek sunuyoruz.',
    icon: GraduationCap,
    href: '/yurtdisi-universite-danismanligi',
    features: [
      'Üniversite ve bölüm seçimi danışmanlığı',
      'Başvuru evraklarının hazırlanması',
      'Motivasyon mektubu yazımı',
      'Online başvuru süreçlerinin yönetimi',
    ],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: '2',
    title: 'Yurt İçi Üniversite Danışmanlığı',
    description: 'Türkiye\'deki saygın üniversitelere hazırlık ve tercih sürecinde profesyonel rehberlik.',
    icon: GraduationCap,
    href: '/yurtici-universite-danismanligi',
    features: [
      'YKS hazırlık ve strateji desteği',
      'Bölüm seçimi danışmanlığı',
      'Burs imkanlarının değerlendirilmesi',
      'Tercih döneminde detaylı analiz',
    ],
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    id: '3',
    title: 'Kariyer Planlama',
    description: 'Doğru bölüm ve kariyer planlaması için uzman rehberliği sunuyoruz.',
    icon: TrendingUp,
    href: '/kariyer-planlama',
    features: [
      'Kariyer hedefi belirleme',
      'Bölüm seçimi danışmanlığı',
      'Staj ve iş imkanları',
      'Mezuniyet sonrası planlama',
    ],
    color: 'bg-green-100 text-green-600',
  },
  {
    id: '4',
    title: 'Akademik Takip',
    description: 'Öğrencilerimizin akademik gelişimini yakından takip ediyoruz.',
    icon: BookOpen,
    href: '/akademik-takip',
    features: [
      'Düzenli performans değerlendirme',
      'Akademik hedef belirleme',
      'Ders planlaması ve destek',
      'Aile ile düzenli iletişim',
    ],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: '5',
    title: 'Eğitim Koçluğu',
    description: 'Kişisel ve akademik gelişim için özel koçluk desteği.',
    icon: Users,
    href: '/egitim-koclugu',
    features: [
      'Bire bir koçluk seansları',
      'Motivasyon ve hedef belirleme',
      'Zaman yönetimi becerileri',
      'Akademik ve duygusal denge',
    ],
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: '6',
    title: 'Kişilik Envanterleri',
    description: 'Yetenek ve kişilik analizi ile doğru kariyer yolu belirleme.',
    icon: Brain,
    href: '/kisilik-envanterleri',
    features: [
      'Profesyonel kişilik testleri',
      'Yetenek analizi',
      'Kariyer uyumluluk değerlendirmesi',
      'Detaylı raporlama ve yorumlama',
    ],
    color: 'bg-indigo-100 text-indigo-600',
  },
];

const calismaAlanlari = [
  {
    id: '1',
    title: 'Liderlik Eğitimi',
    description: 'Geleceğin liderlerini yetiştiren profesyonel eğitim programları.',
    icon: Trophy,
    href: '/liderlik-egitimi',
    features: [
      'Liderlik becerileri geliştirme',
      'Takım yönetimi',
      'İletişim ve sunum teknikleri',
      'Proje yönetimi',
    ],
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: '2',
    title: 'İş İngilizcesi',
    description: 'Profesyonel iş hayatı için İngilizce eğitim programları.',
    icon: MessageSquare,
    href: '/is-ingilizcesi',
    features: [
      'İş görüşmeleri İngilizcesi',
      'Sunum ve raporlama',
      'E-posta yazışmaları',
      'Toplantı yönetimi',
    ],
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    id: '3',
    title: 'Uluslararası Sınavlar',
    description: 'IELTS, SAT, ACT, TOEFL sınavlarına hazırlık programları.',
    icon: Globe2,
    href: '/uluslararasi-sinavlar',
    features: [
      'IELTS hazırlık kursu',
      'SAT & ACT hazırlık',
      'TOEFL eğitimi',
      'Deneme sınavları ve değerlendirme',
    ],
    color: 'bg-red-100 text-red-600',
  },
];

export default function HizmetlerPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-primary-100">
            Global Standartlarda Sınav, Üniversite ve Kariyer Destek Hizmetleri
          </p>
        </div>
      </Section>

      {/* Danışmanlık Hizmetleri */}
      <Section className="bg-white" id="danismanlik">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Danışmanlık Hizmetleri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kapsamlı danışmanlık ve koçluk desteği ile hedeflerinize ulaşın
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {danismanlikHizmetleri.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="h-full">
                <div className="mb-6">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 group">
                    Detaylı Bilgi
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Çalışma Alanları */}
      <Section className="bg-gray-50" id="calisma-alanlari">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Çalışma Alanları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel gelişim ve akademik başarı için özel eğitim programları
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {calismaAlanlari.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="h-full">
                <div className="mb-6">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 group">
                    Detaylı Bilgi
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Başlamaya Hazır Mısınız?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık için hemen iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
