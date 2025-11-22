import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Target, BookOpen, TrendingUp, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Yurt İçi Üniversite Danışmanlığı',
  description: 'Türkiye\'deki saygın vakıf ve devlet üniversitelerine hazırlık ve tercih sürecinde profesyonel rehberlik. YKS, burs imkanları ve bölüm seçiminde uzman desteği.',
  openGraph: {
    title: 'Yurt İçi Üniversite Danışmanlığı | EğitimDanışmanlık',
    description: 'Türkiye\'deki saygın üniversitelere hazırlık ve tercih sürecinde profesyonel rehberlik.',
  },
};

const services = [
  {
    title: 'Hedef Belirleme',
    description: 'Akademik profil, ilgi alanları ve kariyer hedefleri doğrultusunda kişiselleştirilmiş strateji',
    icon: Target,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Bölüm Seçimi',
    description: 'Güçlü yönlerinizi ve potansiyelinizi yansıtan doğru bölüm belirleme',
    icon: BookOpen,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Üniversite Araştırması',
    description: 'Vakıf ve devlet üniversitelerinin detaylı analizi ve karşılaştırması',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Burs İmkanları',
    description: 'Burs programlarının değerlendirilmesi ve başvuru süreçlerinde destek',
    icon: Award,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'YKS Hazırlık Desteği',
    description: 'Motivasyon, çalışma planı ve sınav stratejileri rehberliği',
    icon: TrendingUp,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Tercih Danışmanlığı',
    description: 'Puan ve sıralamaya uygun en doğru tercih stratejisinin oluşturulması',
    icon: Users,
    color: 'bg-cyan-100 text-cyan-600',
  },
];

const steps = [
  'Akademik profil ve ilgi alanları değerlendirmesi',
  'Kariyer hedefleri doğrultusunda bölüm belirleme',
  'Üniversite araştırması ve burs imkanlarının incelenmesi',
  'Özel yetenek sınavı olan programlara hazırlık',
  'YKS hazırlık sürecinde motivasyon ve strateji desteği',
  'Tercih döneminde detaylı analiz ve yerleştirme stratejisi',
];

export default function YurticiUniversiteDanismanligiPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tim-alex-JYqLCa-rv7o-unsplash.jpg"
            alt="Yurt İçi Üniversite Danışmanlığı"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">Yurt İçi Üniversite Danışmanlığı</span>
            </div>
            <h1 className="heading-1 mb-6">
              Doğru Üniversite, Doğru Bölüm
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Türkiye'deki saygın üniversitelere hazırlık ve tercih sürecinde profesyonel rehberlik.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Danışmanlık Alın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kapsamlı danışmanlık hizmetimizle başarıya giden yolu birlikte çizelim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
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

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Kapsamlı Rehberlik Hizmetimiz
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Yurt içindeki üniversitelere hazırlık süreci, doğru yönlendirme ve bilinçli tercihlerle
              çok daha başarılı bir şekilde yönetilebilir. Yurt İçi Üniversite Danışmanlığı hizmetimiz,
              öğrencilerin Türkiye'deki saygın vakıf ve devlet üniversitelerine en doğru adımlarla
              ilerleyebilmeleri için kapsamlı bir rehberlik sunar.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kişiselleştirilmiş Tercih Stratejisi</h3>
            <p>
              Deneyimli danışman ekibimiz, öğrencilerimizin akademik profillerini, ilgi alanlarını,
              güçlü yönlerini ve kariyer hedeflerini detaylı şekilde değerlendirerek her öğrenci için
              kişiselleştirilmiş bir tercih stratejisi oluşturur. Hedef belirleme, bölüm seçimi,
              üniversite araştırması, burs imkânlarının değerlendirilmesi, özel yetenek sınavı olan
              programlara hazırlık ve tercih dönemindeki tüm süreçlerde profesyonel destek sağlarız.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">YKS Hazırlık Desteği</h3>
            <p>
              Ayrıca öğrencilere başarıyı destekleyen motivasyon, çalışma planı, sınav stratejileri
              ve rehberlik hizmetleri sunarak YKS hazırlık sürecini daha verimli hâle getiririz.
              Tercih döneminde ise öğrencilerin puan ve başarı sıralamalarına en uygun, aynı zamanda
              potansiyellerini en iyi yansıtacak üniversite ve bölümleri titizlikle belirlerinde yol
              gösteririz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hedefimiz</h3>
            <p>
              Amacımız, öğrencilerimizin sadece üniversiteye yerleşmelerini değil; doğru üniversitede,
              doğru bölümde güçlü bir akademik başlangıç yapmalarını sağlamaktır. Doğru planlama, uzman
              rehberlik ve birebir ilgiyle üniversite yolculuğunuzu güvenle şekillendiriyoruz.
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Danışmanlık Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Adım adım yanınızda olarak başarıya ulaşmanızı sağlıyoruz.
            </p>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Neden Biz?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Deneyimli Kadro</h4>
                  <p className="text-gray-600 text-sm">25+ yıllık eğitim ve danışmanlık deneyimi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Kişiye Özel Yaklaşım</h4>
                  <p className="text-gray-600 text-sm">Her öğrenci için özel strateji ve planlama</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sürekli Destek</h4>
                  <p className="text-gray-600 text-sm">Hazırlıktan yerleştirmeye kadar kesintisiz rehberlik</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Kanıtlanmış Başarı</h4>
                  <p className="text-gray-600 text-sm">%95 öğrenci memnuniyeti ve başarı oranı</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Doğru Tercih İçin Doğru Rehberlik
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Üniversite tercih danışmanlığı için ücretsiz ön görüşme
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Hemen Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
