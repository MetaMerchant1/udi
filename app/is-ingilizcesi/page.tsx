import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Briefcase, Mail, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'İş İngilizcesi',
  description: 'Profesyonel iş hayatı için İngilizce eğitim programları. İş görüşmeleri, sunum, e-posta yazışmaları ve toplantı yönetimi eğitimleri.',
  openGraph: {
    title: 'İş İngilizcesi | EğitimDanışmanlık',
    description: 'Profesyonel iş hayatı için İngilizce eğitim programları.',
  },
};

const modules = [
  {
    title: 'İş Görüşmeleri',
    description: 'Profesyonel mülakatlar için İngilizce',
    icon: Users,
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Sunum ve Raporlama',
    description: 'İş sunumları ve rapor hazırlama',
    icon: Briefcase,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'E-posta Yazışmaları',
    description: 'Profesyonel İngilizce yazışma',
    icon: Mail,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Toplantı Yönetimi',
    description: 'İş toplantılarında etkili iletişim',
    icon: MessageSquare,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function IsIngilizcesiPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jane-last-k60YOEjB75k-unsplash.jpg"
            alt="İş İngilizcesi"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

        <div className="relative z-10 max-w-3xl">
          <div style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm font-medium">İş İngilizcesi</span>
            </div>
            <h1 className="heading-1 mb-6">
              Profesyonel İş Hayatı İçin İngilizce
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Global iş dünyasında öne çıkmak için özel İngilizce eğitim programları.
            </p>
            <Link href="/iletisim">
              <Button size="lg">
                Kursa Katılın
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
            Eğitim İçeriğimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İş hayatında ihtiyacınız olan tüm İngilizce becerileri
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
              Kimler İçin?
            </h2>
            <ul className="space-y-4">
              {[
                'Uluslararası şirketlerde çalışan profesyoneller',
                'Yurt dışında çalışmayı hedefleyen bireyler',
                'İş İngilizcesi seviyesini geliştirmek isteyenler',
                'Global projelerde yer alan ekip üyeleri',
                'Müşteri ile İngilizce iletişim kuranlar',
                'Kariyerinde ilerleme hedefleyenler',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Özellikleri</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Esnek Eğitim Formatı</h4>
                <p className="text-gray-600 text-sm">Online veya yüz yüze, size uygun formatta eğitim</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sektöre Özel İçerik</h4>
                <p className="text-gray-600 text-sm">Çalıştığınız sektöre özel terminoloji ve konuşma kalıpları</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Gerçek Senaryolar</h4>
                <p className="text-gray-600 text-sm">İş hayatından gerçek durumlarda pratik yapma fırsatı</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bireysel İlgi</h4>
                <p className="text-gray-600 text-sm">Küçük gruplar veya birebir özel dersler</p>
              </div>
              <div className="pt-4 border-t border-cyan-200">
                <Link href="/iletisim">
                  <button className="w-full px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                    Ücretsiz Seviye Testi
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Levels */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Seviye Seçeneklerimiz
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Başlangıç</h3>
            <p className="text-gray-600 mb-4">Temel İş İngilizcesi becerileri</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Temel iş terimleri</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Basit e-posta yazışmaları</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Telefon görüşmeleri</span>
              </li>
            </ul>
          </Card>
          <Card className="border-cyan-300 shadow-lg">
            <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold mb-4">
              EN POPÜLER
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Orta Seviye</h3>
            <p className="text-gray-600 mb-4">İleri İş İngilizcesi</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>İş sunumları</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Profesyonel yazışmalar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Müzakere teknikleri</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">İleri Seviye</h3>
            <p className="text-gray-600 mb-4">Executive İngilizce</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Stratejik iletişim</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Liderlik dilbilgisi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                <span>Kriz yönetimi iletişimi</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Detailed Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Profesyonel İletişim Becerileri
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Küreselleşen iş dünyasında etkili iletişim, profesyonel başarının vazgeçilmez bir parçasıdır. İş İngilizcesi programımız, kişilerin mesleki ihtiyaçlarına uygun olarak tasarlanmış, uygulama odaklı ve tamamen pratik bir dil geliştirme süreci sunar.
            </p>
            <p>
              Alanında uzman eğitmenlerimiz, sektöre özel terminoloji, resmi yazışma kuralları, sunum becerileri, müzakere dili ve toplantı yönetimi gibi konularda detaylı ve sistematik eğitimler verir. Öğrenciler; gerçek iş senaryolarıyla çalışarak pratik deneyim kazanır, özgüvenle İngilizce iletişim kurma yeteneğini geliştirir.
            </p>
            <p>
              Programımız; bireysel ihtiyaçlara uygun esneklikte tasarlanmış olup online veya yüz yüze seçenekler sunar. Profesyonel gelişim hedeflerinize ulaşmanız, iş dünyasında İngilizce ile güçlü bir iletişim kurabilmeniz için doğru rehberlik ve sürekli destek sağlıyoruz.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Kariyerinizi Bir Üst Seviyeye Taşıyın
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz seviye testi ve danışmanlık için iletişime geçin
          </p>
          <Link href="/iletisim">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-cyan-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Hemen Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
