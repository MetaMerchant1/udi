import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Users, Target, Presentation, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Liderlik Eğitimi',
  description: 'Geleceğin liderlerini yetiştiren profesyonel eğitim programları. Liderlik becerileri, takım yönetimi ve iletişim teknikleri eğitimleri.',
  openGraph: {
    title: 'Liderlik Eğitimi | EğitimDanışmanlık',
    description: 'Geleceğin liderlerini yetiştiren profesyonel eğitim programları.',
  },
};

const modules = [
  {
    title: 'Liderlik Becerileri',
    description: 'Etkili liderlik özellikleri ve davranışları',
    icon: Trophy,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Takım Yönetimi',
    description: 'Takım oluşturma ve yönetme teknikleri',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'İletişim ve Sunum',
    description: 'Etkili iletişim ve sunum becerileri',
    icon: Presentation,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Proje Yönetimi',
    description: 'Proje planlama ve uygulama',
    icon: Target,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function LiderlikEgitimiPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/steffen-muldbjerg-4t6nCthD0es-unsplash.jpg"
            alt="Liderlik Eğitimi"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">Liderlik Eğitimi</span>
            </div>
            <h1 className="heading-1 mb-6">
              Geleceğin Lideri Olun
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Profesyonel liderlik eğitimi ile kariyerinizi bir üst seviyeye taşıyın.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Eğitime Katılın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Modules */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Eğitim Modüllerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kapsamlı liderlik geliştirme programı
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${module.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Content */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Neden Liderlik Eğitimi?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              21. yüzyılda başarılı olmak için teknik bilgi yeterli değil. Liderlik becerileri, her alanda öne çıkmanın anahtarıdır.
            </p>
            <ul className="space-y-4">
              {[
                'Özgüven ve öz farkındalık geliştirme',
                'Etkili iletişim kurma becerisi',
                'Problem çözme ve karar alma yeteneği',
                'Takım çalışması ve işbirliği',
                'Değişimi yönetme kapasitesi',
                'Vizyoner düşünme becerisi',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Detayları</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Süre</div>
                <div className="text-lg font-semibold text-gray-900">12 Hafta</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Format</div>
                <div className="text-lg font-semibold text-gray-900">Karma (Online + Yüz yüze)</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Sertifika</div>
                <div className="text-lg font-semibold text-gray-900">Uluslararası Geçerli</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Kişi Sayısı</div>
                <div className="text-lg font-semibold text-gray-900">Maksimum 15 Kişi</div>
              </div>
              <div className="pt-4 border-t border-yellow-200">
                <Link href="/iletisim">
                  <button className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold">
                    Başvuru Yapın
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Geleceğin Liderleri
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Liderlik, yalnızca geleceğin yöneticilerinin değil; kendini tanıyan, sorumluluk alabilen, iletişim becerileri güçlü ve çözüm odaklı bireylerin sahip olması gereken temel bir yetkinliktir. Lise Öğrencileri Liderlik Eğitimi programımız, gençlerin kişisel ve akademik gelişimlerini destekleyerek onları geleceğin bilinçli, özgüvenli ve etkili liderleri olmaya hazırlar.
            </p>
            <p>
              Program kapsamında öğrenciler; etkili iletişim, takım çalışması, problem çözme, karar verme, zaman yönetimi, proje geliştirme, girişimcilik ve duygusal dayanıklılık gibi liderlik için kritik olan becerileri deneyimsel yöntemlerle öğrenir. Etkileşimli oturumlar, uygulamalı çalışmalar ve birebir geri bildirimlerle öğrenciler kendi liderlik stillerini keşfeder ve geliştirir.
            </p>
            <p>
              Liderlik eğitimi, öğrencilerin yalnızca okul hayatındaki başarılarını değil, aynı zamanda üniversite başvurularını, kariyer planlamalarını ve sosyal yaşamlarını da olumlu yönde etkiler. Gençlerin özgüven kazanmasını, potansiyellerini ortaya çıkarmasını ve çevreleriyle daha sağlıklı ilişkiler kurmasını destekler.
            </p>
            <p>
              Amacımız, lise öğrencilerinin kendilerine güvenen, fark yaratan, sorumluluk bilinci yüksek ve topluma değer katabilen bireyler olarak yetişmesine katkı sağlamaktır. Doğru rehberlik ve donanımlı bir eğitimle her genç, kendi liderlik yolculuğunu başarılı bir şekilde şekillendirebilir.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Liderlik Yolculuğunuza Bugün Başlayın
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Sınırlı kontenjan için hemen başvurun
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-yellow-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Hemen Başvur
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
