'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe2, BookOpen, Target, Award, ArrowRight, CheckCircle, FileText, Headphones, PenTool, MessageSquare } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useContactModal } from '@/contexts/ContactModalContext';

const exams = [
  {
    title: 'IELTS',
    description: 'International English Language Testing System',
    icon: Globe2,
    color: 'bg-red-100 text-red-600',
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
  },
  {
    title: 'TOEFL',
    description: 'Test of English as a Foreign Language',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
  },
  {
    title: 'SAT',
    description: 'Scholastic Assessment Test',
    icon: PenTool,
    color: 'bg-purple-100 text-purple-600',
    skills: ['Reading', 'Writing', 'Math'],
  },
  {
    title: 'ACT',
    description: 'American College Testing',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
    skills: ['English', 'Math', 'Reading', 'Science'],
  },
];

const features = [
  {
    title: 'Deneyimli Eğitmenler',
    description: 'Sınavlarda yüksek puan almış, deneyimli ve sertifikalı eğitmenler',
    icon: Award,
  },
  {
    title: 'Kapsamlı Müfredat',
    description: 'Sınavın tüm bölümlerini kapsayan detaylı ve güncel içerik',
    icon: BookOpen,
  },
  {
    title: 'Deneme Sınavları',
    description: 'Gerçek sınav formatında düzenli deneme sınavları ve detaylı analiz',
    icon: Target,
  },
  {
    title: 'Esnek Program',
    description: 'Hafta içi, hafta sonu, online ve yüz yüze ders seçenekleri',
    icon: MessageSquare,
  },
];

export default function UluslararasiSinavlarPage() {
  const { openModal } = useContactModal();

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ivan-rohovchenko-EV2JEWjdLu4-unsplash.jpg"
            alt="Uluslararası Sınavlar"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <Globe2 className="h-5 w-5" />
              <span className="text-sm font-medium">Uluslararası Sınavlar</span>
            </div>
            <h1 className="heading-1 mb-6">
              Uluslararası Sınavlara Profesyonel Hazırlık
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              IELTS, SAT, ACT, TOEFL sınavlarında başarı için kapsamlı eğitim programları.
            </p>
            <Button size="lg" onClick={openModal}>
              Kursa Kayıt Ol
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Exams */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Hazırlık Programlarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tüm uluslararası sınavlar için uzman eğitim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {exams.map((exam, index) => {
            const Icon = exam.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${exam.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {exam.title}
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  {exam.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {exam.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Başarınız için sunduğumuz avantajlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Program İçeriğimiz
            </h2>
            <ul className="space-y-4">
              {[
                'Sınav stratejileri ve zaman yönetimi',
                'Her bölüm için özel teknikler',
                'Gerçek sınav soruları ile pratik',
                'Düzenli deneme sınavları ve analiz',
                'Zayıf yönlerin belirlenmesi ve güçlendirilmesi',
                'Sınav günü için psikolojik hazırlık',
                'Online kaynak kütüphanesi',
                'Sınırsız soru sorma imkanı',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kurs Seçenekleri</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Yoğun Program</h4>
                <p className="text-gray-600 text-sm">Haftada 5 gün, 8 haftalık yoğun hazırlık</p>
                <p className="text-red-600 font-semibold text-sm mt-1">En hızlı sonuç</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Standart Program</h4>
                <p className="text-gray-600 text-sm">Haftada 3 gün, 12 haftalık kapsamlı hazırlık</p>
                <p className="text-red-600 font-semibold text-sm mt-1">En popüler</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Esnek Program</h4>
                <p className="text-gray-600 text-sm">Kendi hızınızda ilerleyin, 6 ay erişim</p>
                <p className="text-red-600 font-semibold text-sm mt-1">En esnek</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bireysel Ders</h4>
                <p className="text-gray-600 text-sm">Birebir özel dersler, kişiye özel program</p>
                <p className="text-red-600 font-semibold text-sm mt-1">En etkili</p>
              </div>
              <div className="pt-4 border-t border-red-200">
                <button
                  onClick={openModal}
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Ücretsiz Deneme Dersi
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Başarı İstatistiklerimiz
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <Card className="text-center bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="text-5xl font-bold text-red-600 mb-3">%92</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Hedef Puana Ulaşma
            </h3>
            <p className="text-gray-600 text-sm">
              Öğrencilerimizin %92'si hedef puanına ulaştı
            </p>
          </Card>
          <Card className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-5xl font-bold text-blue-600 mb-3">7.5+</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Ortalama IELTS Puanı
            </h3>
            <p className="text-gray-600 text-sm">
              IELTS öğrencilerimizin ortalama puanı
            </p>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-5xl font-bold text-purple-600 mb-3">1400+</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Ortalama SAT Puanı
            </h3>
            <p className="text-gray-600 text-sm">
              SAT öğrencilerimizin ortalama puanı
            </p>
          </Card>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Kapsamlı Sınav Hazırlığı
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Uluslararası sınavlar (IELTS, TOEFL, SAT, ACT, AP, IB), öğrencilerin akademik yetkinliklerini ölçen, yurtdışı eğitim başvurularında kritik öneme sahip olan standart değerlendirme araçlarıdır. Bu sınavlar, hem dilsel becerileri hem de akademik analitik düşünme kapasitesini test eder ve başarılı sonuçlar, uluslararası üniversitelere kabul sürecinde belirleyici rol oynar.
            </p>
            <p>
              Uluslararası Sınav Hazırlık programımız; öğrencilerin sınavın yapısını, soruların mantığını ve yanıt stratejilerini tam olarak öğrenmesini sağlar. Alanında uzman eğitmenlerimiz, güncel sınav trendlerine hakim, her bir sınavın bölümlerini (Reading, Listening, Writing, Speaking, Mathematics vb.) ayrıntılı olarak işleyen sistematik bir müfredat sunar.
            </p>
            <p>
              Öğrenciler, programımız boyunca gerçek sınav formatında deneme testleriyle pratik yaparak zaman yönetimi, strateji geliştirme ve hata analizini öğrenir. Zayıf yönlerini belirleyerek güçlendirir, güçlü yanlarını ise daha da ileriye taşır. Hem online hem yüz yüze ders seçenekleri, her öğrencinin kendi hızına göre çalışabilmesini mümkün kılar.
            </p>
            <p>
              Amacımız, her öğrencinin hedeflediği uluslararası sınavda en yüksek puanı almasını sağlamak, özgüvenli ve hazırlıklı bir şekilde sınava girmelerine destek olmak ve böylece hayallerindeki uluslararası eğitim fırsatlarına erişim kapısını aralamaktır.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-red-600 to-orange-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Hedef Puanınıza Ulaşın
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz seviye testi ve program danışmanlığı için iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Hemen Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
