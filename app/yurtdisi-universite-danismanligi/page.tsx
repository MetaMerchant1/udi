import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, CheckCircle, ArrowRight, Globe, BookOpen, Users } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Yurtdışı Üniversite Danışmanlığı',
  description: 'Dünya çapındaki üniversitelere başvuru sürecinizde profesyonel destek. 25+ yıllık deneyimimizle hayalinizdeki üniversiteye adım atmanız için yanınızdayız.',
  openGraph: {
    title: 'Yurtdışı Üniversite Danışmanlığı | EğitimDanışmanlık',
    description: 'Dünya çapındaki üniversitelere başvuru sürecinizde profesyonel destek.',
  },
};

const steps = [
  {
    title: 'Ön Görüşme ve Değerlendirme',
    description: 'Akademik geçmişiniz, hedefleriniz ve bütçeniz doğrultusunda size en uygun üniversiteleri belirleriz.',
    icon: Users,
  },
  {
    title: 'Üniversite ve Bölüm Seçimi',
    description: 'Kariyer hedeflerinize uygun üniversite ve bölüm seçiminde profesyonel danışmanlık.',
    icon: GraduationCap,
  },
  {
    title: 'Evrak Hazırlığı ve Başvuru',
    description: 'Tüm başvuru evraklarınızın eksiksiz ve standartlara uygun hazırlanması.',
    icon: BookOpen,
  },
  {
    title: 'Motivasyon Mektubu',
    description: 'Sizi en iyi şekilde yansıtan, özgün motivasyon mektubunun yazılması.',
    icon: BookOpen,
  },
  {
    title: 'Başvuru Süreci Yönetimi',
    description: 'Online başvuru formlarının doldurulması ve evrakların yüklenmesi.',
    icon: Globe,
  },
  {
    title: 'Takip ve Kabul Sonrası Destek',
    description: 'Başvuru sonuçlarının takibi ve kabul sonrası tüm işlemler.',
    icon: CheckCircle,
  },
];

const countries = [
  { name: 'Amerika Birleşik Devletleri', universities: '50+', flag: '🇺🇸' },
  { name: 'İngiltere', universities: '40+', flag: '🇬🇧' },
  { name: 'Kanada', universities: '30+', flag: '🇨🇦' },
  { name: 'Almanya', universities: '25+', flag: '🇩🇪' },
  { name: 'Avustralya', universities: '20+', flag: '🇦🇺' },
  { name: 'Hollanda', universities: '15+', flag: '🇳🇱' },
];

export default function YurtdisiUniversiteDanismanligiPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/richard-vance-cabusao-adQAb-L-YkE-unsplash.jpg"
            alt="Yurtdışı Üniversite"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">Yurtdışı Üniversite Danışmanlığı</span>
            </div>
            <h1 className="heading-1 mb-6">
              Dünya'nın En İyi Üniversitelerine Başvurun
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              25+ yıllık deneyimimiz ile hayalinizdeki üniversiteye adım atmanız için yanınızdayız.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Başvuru Sürecimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adım adım size özel profesyonel hizmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-600 mb-2">Adım {index + 1}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Kapsamlı Danışmanlık Hizmetimiz
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Yurt dışında üniversite okumak, öğrencilerin hayatlarındaki en önemli kararlardan biridir.
              Bu süreçte doğru rehberlik ve destek almak, başarının anahtarıdır. 25+ yıllık deneyimimizle,
              öğrencilerimize A'dan Z'ye kapsamlı bir danışmanlık hizmeti sunuyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Global Üniversite Ağımız</h3>
            <p>
              Dünya çapında prestijli üniversitelerle kurduğumuz güçlü bağlar sayesinde, öğrencilerimize
              en iyi eğitim fırsatlarını sunabiliyoruz. Amerika Birleşik Devletleri, İngiltere, Kanada,
              Almanya, Avustralya, Hollanda ve daha birçok ülkedeki önde gelen üniversitelerle iş birliği
              içindeyiz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kişiye Özel Yaklaşım</h3>
            <p>
              Her öğrencinin benzersiz yetenekleri, hedefleri ve ihtiyaçları vardır. Bu nedenle, her
              öğrenci için özel olarak hazırlanan stratejik planlar oluşturuyoruz. Kişilik envanterleri,
              akademik geçmiş analizi ve kariyer hedefleri doğrultusunda en uygun üniversite ve bölüm
              seçiminde rehberlik ediyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Başvuru Sürecinde Tam Destek</h3>
            <p>
              Üniversite başvuru süreci karmaşık ve zaman alıcı olabilir. Motivasyon mektubu yazımından
              referans mektuplarının hazırlanmasına, online başvuru formlarının doldurulmasından evrakların
              yüklenmesine kadar tüm süreçte yanınızdayız. Her evrakın eksiksiz, standartlara uygun ve
              zamanında hazırlanmasını garanti ediyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kabul Sonrası Hizmetler</h3>
            <p>
              Üniversiteye kabul aldıktan sonra da destek hizmetlerimiz devam ediyor. Vize başvurusu,
              konaklama ayarlamaları, sağlık sigortası, uçak bileti rezervasyonu ve oryantasyon süreci
              gibi tüm konularda profesyonel yardım sağlıyoruz. Öğrencilerimizin yurt dışındaki yeni
              hayatlarına sorunsuz bir şekilde adapte olmalarını sağlıyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ailelerle Sürekli İletişim</h3>
            <p>
              Süreç boyunca ailelerle düzenli iletişim halinde oluyoruz. Her aşamada detaylı bilgilendirme
              yapıyor, soruları yanıtlıyor ve öğrencinin gelişimini paylaşıyoruz. Ailelerin de sürece
              dahil olması, öğrencinin başarısı için önemli bir faktördür.
            </p>
          </div>
        </div>
      </Section>

      {/* Countries */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Partner Üniversitelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dünyanın dört bir yanındaki prestijli üniversitelerle işbirliğimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-5xl mb-4">{country.flag}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {country.name}
              </h3>
              <p className="text-primary-600 font-semibold">
                {country.universities} Partner Üniversite
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Hayalinizdeki Üniversiteye Giden Yol Buradan Başlıyor
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz ön görüşme için hemen iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              İletişime Geç
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
