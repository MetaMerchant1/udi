import type { Metadata } from 'next';
import { Users, Target, Award, Heart } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: '25+ yıllık deneyim ile kapsamlı eğitim danışmanlığı hizmeti. Boğaziçi Üniversitesi mezunu uzman kadro ile öğrencilerinizin geleceğini şekillendiriyoruz.',
  openGraph: {
    title: 'Hakkımızda | EğitimDanışmanlık',
    description: '25+ yıllık deneyim ile kapsamlı eğitim danışmanlığı hizmeti.',
  },
};

const values = [
  {
    icon: Target,
    title: 'Misyonumuz',
    description: 'Öğrencilere dünya çapında kaliteli eğitim fırsatları sunarak, geleceklerini şekillendirmelerine yardımcı olmak.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Award,
    title: 'Vizyonumuz',
    description: 'Türkiye\'nin en güvenilir ve başarılı yurtdışı eğitim danışmanlık firması olmak.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Heart,
    title: 'Değerlerimiz',
    description: 'Dürüstlük, profesyonellik, öğrenci odaklılık ve mükemmeliyetçilik temel değerlerimizdir.',
    color: 'bg-purple-100 text-purple-600',
  },
];

const stats = [
  { number: '25+', label: 'Yıllık Deneyim' },
  { number: '1000+', label: 'Başarılı Öğrenci' },
  { number: '50+', label: 'Partner Üniversite' },
  { number: '%95', label: 'Başarı Oranı' },
];

const team = [
  {
    name: 'Kurucu',
    role: 'Genel Müdür & Eğitim Danışmanı',
    description: 'Boğaziçi Üniversitesi mezunu, İngiltere\'de lisansüstü eğitim, 25+ yıl eğitim deneyimi',
  },
  {
    name: 'Akademik Danışmanlar',
    role: 'Kariyer & Üniversite Danışmanlığı',
    description: 'Yurtdışı üniversite mezunu, başvuru süreçleri ve kariyer planlama uzmanları',
  },
  {
    name: 'Eğitim Koçları',
    role: 'Kişisel Gelişim & Liderlik',
    description: 'Sertifikalı koçlar, kişilik envanterleri ve liderlik eğitimi uzmanları',
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/camilo-botia-k4vFDPJoDZk-unsplash.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-primary-100">
            Öğrenci Odaklı, Şeffaf ve Sürdürülebilir Başarı Yaklaşımı
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Biz Kimiz?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Boğaziçi Üniversitesi mezunu olarak 25+ yıldır eğitim alanında çalışıyorum.
              İngiltere'de lisansüstü eğitim aldıktan sonra, Türkiye'deki farklı eğitim kurumlarında
              öğretmen, koordinatör ve yönetici olarak görev aldım.
            </p>
            <p>
              Kurucusu olduğum EğitimDanışmanlık ile öğrencilerin sadece akademik değil, aynı zamanda
              sosyal ve duygusal gelişimlerini de destekleyen kapsamlı bir eğitim danışmanlığı hizmeti
              sunuyoruz. Yurtdışı üniversite başvuru süreçlerinden kariyer planlamaya, kişilik
              envanterlerinden liderlik eğitimine kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p>
              25+ yıllık deneyimimiz, dünya çapındaki prestijli üniversitelerle kurduğumuz güçlü
              bağlar ve her öğrenciye kişiye özel yaklaşımımız ile sektörün öncü firmasıyız.
              Öğrencilerimizin sadece bir diploma değil, vizyon sahibi bir gelecek kazanmalarını
              hedefliyoruz.
            </p>
            <p>
              Harvard, Oxford, MIT, Cambridge, Stanford gibi dünyanın en iyi üniversitelerine
              öğrenci yerleştirmenin gururunu yaşıyoruz. Her öğrenci için özel olarak hazırlanan
              stratejik planlarımız, düzenli takip sistemimiz ve ailelerle sürekli iletişimimiz
              ile başarı oranımız %95'in üzerindedir.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Değerlerimiz
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-primary-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Ekibimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deneyimli ve uzman kadromuz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <div className="text-primary-600 font-medium mb-2">
                {member.role}
              </div>
              <p className="text-sm text-gray-600">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
