import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Lightbulb, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Kişilik Envanterleri',
  description: 'Yetenek ve kişilik analizi ile doğru kariyer yolu belirleme. Profesyonel kişilik testleri ve detaylı raporlama ile kendinizi keşfedin.',
  openGraph: {
    title: 'Kişilik Envanterleri | EğitimDanışmanlık',
    description: 'Yetenek ve kişilik analizi ile doğru kariyer yolu belirleme.',
  },
};

const tests = [
  {
    title: 'Kişilik Profili Analizi',
    description: 'MBTI ve benzeri profesyonel kişilik testleri',
    icon: Brain,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Yetenek Değerlendirmesi',
    description: 'Güçlü yönlerinizi ve yeteneklerinizi keşfedin',
    icon: Award,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'İlgi Alanları Haritası',
    description: 'Gerçek ilgi alanlarınızı bilimsel metodlarla belirleyin',
    icon: Lightbulb,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Kariyer Uyumluluk',
    description: 'Kişiliğinize en uygun kariyer yollarını keşfedin',
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function KisilikEnvanterleriPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/divyansh-jain--BA1r4Rf_zM-unsplash.jpg"
            alt="Kişilik Envanterleri"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <Brain className="h-5 w-5" />
              <span className="text-sm font-medium">Kişilik Envanterleri</span>
            </div>
            <h1 className="heading-1 mb-6">
              Kendinizi Keşfedin, Geleceğinizi Belirleyin
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Bilimsel kişilik testleri ile doğru kariyer yolunu bulun.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Test Randevusu Alın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Tests */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Kişilik Değerlendirme Araçlarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel ve bilimsel testlerle kendinizi tanıyın
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {tests.map((test, index) => {
            const Icon = test.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${test.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {test.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {test.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Neler Öğrenirsiniz?</h3>
            <ul className="space-y-4">
              {[
                'Kişilik özellikleriniz ve güçlü yönleriniz',
                'Doğal yetenekleriniz ve potansiyeliniz',
                'İlgi alanlarınıza uygun kariyer seçenekleri',
                'Çalışma tarzınız ve öğrenme stiliniz',
                'Kişiler arası iletişim özellikleriniz',
                'Stres yönetimi ve motivasyon faktörleriniz',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Profesyonel Değerlendirme Süreci
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Test Uygulaması</h3>
                  <p className="text-gray-600">Profesyonel ortamda standart testlerin uygulanması.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Analiz ve Değerlendirme</h3>
                  <p className="text-gray-600">Uzman psikologlar tarafından detaylı analiz.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Raporlama</h3>
                  <p className="text-gray-600">Kapsamlı ve anlaşılır rapor hazırlanması.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Yönlendirme Görüşmesi</h3>
                  <p className="text-gray-600">Sonuçların yorumlanması ve kariyer önerileri.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Bilimsel Değerlendirme
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Kişilik Envanterleri, bireyin kendisini daha iyi tanımasına, güçlü yönlerini keşfetmesine ve doğru akademik veya kariyer yolunu belirlemesine yardımcı olan bilimsel değerlendirme araçlarıdır. Danışmanlık sürecimizin önemli bir parçası olan bu envanterler, öğrencilerin ilgi alanlarını, çalışma stillerini, motivasyon kaynaklarını ve mesleki eğilimlerini objektif bir şekilde ortaya koyar.
            </p>
            <p>
              Uzman ekibimiz tarafından uygulanan uluslararası geçerliliğe sahip kişilik ve yetkinlik envanterleri, öğrencinin profilini bütüncül bir şekilde analiz etmemizi sağlar. Elde edilen sonuçlar; bölüm ve meslek seçimi, kariyer yönlendirme, akademik planlama ve kişisel gelişim süreçlerinde yol gösterici bir temel oluşturur.
            </p>
            <p>
              Kişilik Envanterleri sayesinde öğrenciler; hangi alanlarda daha başarılı olabileceklerini, hangi çalışma yöntemlerinin kendilerine uygun olduğunu ve gelecekte hangi mesleklerin kişisel özellikleriyle daha uyumlu olduğunu somut verilerle görür. Böylece tercih süreçleri daha bilinçli, hedef belirleme daha isabetli ve gelişim planlaması daha net bir hale gelir.
            </p>
            <p>
              Amacımız, bilimsel ve güvenilir analizlerle her öğrencinin kendine özgü potansiyelini ortaya çıkarmak ve bu potansiyeli en doğru şekilde yönlendirmektir. Kişisel farkındalık, doğru seçimlerin en güçlü başlangıcıdır.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Doğru Kariyer Seçimi İçin Kendinizi Tanıyın
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Kişilik envanteri değerlendirmesi için randevu alın
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Hemen Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
