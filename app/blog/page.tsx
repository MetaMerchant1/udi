import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Yurtdışı eğitim, üniversite başvuruları, vize süreçleri ve daha fazlası hakkında güncel bilgiler ve rehberler.',
  openGraph: {
    title: 'Blog | EğitimDanışmanlık',
    description: 'Yurtdışı eğitim, üniversite başvuruları, vize süreçleri hakkında güncel bilgiler.',
  },
};

// Mock blog posts (replace with real data from Sanity)
const mockPosts = [
  {
    _id: '1',
    title: 'Amerika\'da Üniversite Eğitimi: Kapsamlı Rehber',
    slug: { current: 'amerikada-universite-egitimi-rehber' },
    excerpt: 'ABD\'de üniversite okumak isteyenler için detaylı başvuru süreçleri, maliyetler ve ipuçları.',
    publishedAt: '2025-01-15',
    author: { name: 'Esra Yılmaz' },
    categories: [{ title: 'Amerika', slug: { current: 'amerika' } }],
  },
  {
    _id: '2',
    title: 'IELTS Sınavına Nasıl Hazırlanılır?',
    slug: { current: 'ielts-sinavina-nasil-hazirlanilir' },
    excerpt: 'IELTS sınavında yüksek skor almak için en etkili çalışma yöntemleri ve ipuçları.',
    publishedAt: '2025-01-10',
    author: { name: 'Ahmet Demir' },
    categories: [{ title: 'Dil Eğitimi', slug: { current: 'dil-egitimi' } }],
  },
  {
    _id: '3',
    title: 'İngiltere Öğrenci Vizesi Başvuru Süreci',
    slug: { current: 'ingiltere-ogrenci-vizesi-basvuru-sureci' },
    excerpt: 'İngiltere Tier 4 öğrenci vizesi için gerekli evraklar ve başvuru adımları.',
    publishedAt: '2025-01-05',
    author: { name: 'Zeynep Kaya' },
    categories: [{ title: 'Vize', slug: { current: 'vize' } }],
  },
  {
    _id: '4',
    title: 'Kanada\'da Eğitim: Burs İmkanları',
    slug: { current: 'kanadada-egitim-burs-imkanlari' },
    excerpt: 'Kanada\'da eğitim görmek isteyenler için burs ve finansal destek seçenekleri.',
    publishedAt: '2025-01-01',
    author: { name: 'Esra Yılmaz' },
    categories: [{ title: 'Kanada', slug: { current: 'kanada' } }],
  },
  {
    _id: '5',
    title: 'Motivasyon Mektubu Yazma Rehberi',
    slug: { current: 'motivasyon-mektubu-yazma-rehberi' },
    excerpt: 'Üniversite başvurularında fark yaratan motivasyon mektubu nasıl yazılır?',
    publishedAt: '2024-12-28',
    author: { name: 'Ahmet Demir' },
    categories: [{ title: 'Başvuru', slug: { current: 'basvuru' } }],
  },
  {
    _id: '6',
    title: 'Almanya\'da Ücretsiz Eğitim Fırsatları',
    slug: { current: 'almanyada-ucretsiz-egitim-firsatlari' },
    excerpt: 'Almanya\'da üniversite okumak isteyenler için ücretsiz eğitim veren programlar.',
    publishedAt: '2024-12-25',
    author: { name: 'Zeynep Kaya' },
    categories: [{ title: 'Almanya', slug: { current: 'almanya' } }],
  },
];

export default async function BlogPage() {
  // In production, use real data:
  // const posts = await getBlogPosts();
  const posts = mockPosts;

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/wonderlane-6zlgM-GUd6I-unsplash.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">
            Blog
          </h1>
          <p className="text-xl text-primary-100">
            Yurtdışı eğitim yolculuğunuzda size rehberlik edecek güncel bilgiler ve öneriler
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card className="h-full group cursor-pointer">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category.slug.current}
                        className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                  )}
                </div>

                {/* Read More */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  Devamını Oku
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
