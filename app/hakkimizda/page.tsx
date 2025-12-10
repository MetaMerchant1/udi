import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Award, Heart } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'United Development and Innovation (UDI) - 25+ yıllık deneyim ile kapsamlı eğitim danışmanlığı hizmeti. Boğaziçi Üniversitesi mezunu uzman kadro ile öğrencilerinizin geleceğini şekillendiriyoruz.',
  keywords: ['UDI', 'United Development and Innovation', 'eğitim danışmanlığı', 'yurtdışı eğitim', 'Boğaziçi Üniversitesi', 'kariyer planlaması'],
  openGraph: {
    title: 'Hakkımızda | UDI - United Development and Innovation',
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

export default function HakkimizdaPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-[#1c2a2f] text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/camilo-botia-k4vFDPJoDZk-unsplash.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800/95 to-secondary-900/95"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/images/logo.jpg"
              alt="UDI - United Development and Innovation"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 208px"
            />
          </div>
          <h1 className="heading-1 mb-4 sm:mb-6 px-4">
            United Development and Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
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
              Yurt içi ve yurt dışı eğitim danışmanlığı alanında uzun yıllara dayanan birikimi, profesyonel yaklaşımı ve güçlü akademik geçmişi bir araya getiren bir danışmanlık ekibiyiz. Ekibimizin lideri; Boğaziçi Üniversitesi Mütercim-Tercümanlık mezunu, Özel Saint Benoît Fransız Lisesi kökenli ve 25 yılı aşkın süredir eğitim sektöründe aktif olarak görev yapan deneyimli bir uzmandır.
            </p>
            <p>
              Kariyeri boyunca yurt dışı eğitim danışmanı, İngilizce öğretmeni, müdür yardımcısı, okul müdürü ve eğitim koordinatörü gibi birçok kritik rolde görev almış danışmanımız; hem ulusal hem uluslararası eğitim dinamiklerine hâkimiyetiyle öğrencilerimize ve ailelerimize en doğru yönlendirmeyi sunmaktadır.
            </p>
            <p>
              Yıllardır sektörün içinde aktif olarak çalışan danışman ekibimiz; öğrencilerin akademik hedeflerine, kariyer planlarına ve kişisel ihtiyaçlarına uygun, güvenilir ve birebir ilgiye dayalı bir danışmanlık hizmeti sunmayı ilke edinmiştir. Amacımız; yurt içi ve yurt dışında doğru okulu, doğru programı ve doğru yolu birlikte belirleyerek sizin için en ideal eğitim deneyimini oluşturmaktır.
            </p>
            <p>
              Biz, sadece bir danışmanlık şirketi değil; eğitime gönül vermiş, öğrencinin başarısını kendi başarısı gören bir ekibiz.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Misyon, Vizyon ve Değerlerimiz
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
    </div>
  );
}
