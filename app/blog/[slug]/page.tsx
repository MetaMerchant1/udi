import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import Button from '@/components/shared/Button';
import { formatDate } from '@/lib/utils';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // In production, fetch real post data
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title,
    description: `${title} hakkında detaylı bilgi ve rehber.`,
    openGraph: {
      title: `${title} | EğitimDanışmanlık Blog`,
      description: `${title} hakkında detaylı bilgi ve rehber.`,
    },
  };
}

// Mock blog post data
const mockPost = {
  _id: '1',
  title: 'Amerika\'da Üniversite Eğitimi: Kapsamlı Rehber',
  slug: { current: 'amerikada-universite-egitimi-rehber' },
  excerpt: 'ABD\'de üniversite okumak isteyenler için detaylı başvuru süreçleri, maliyetler ve ipuçları.',
  publishedAt: '2025-01-15',
  author: { name: 'Esra Yılmaz' },
  categories: [{ title: 'Amerika', slug: { current: 'amerika' } }],
  body: `
    <h2>Giriş</h2>
    <p>Amerika Birleşik Devletleri, dünya çapında en prestijli üniversitelere ev sahipliği yapmaktadır. Harvard, MIT, Stanford gibi dünyaca ünlü kurumlar, her yıl binlerce uluslararası öğrenci kabul etmektedir.</p>

    <h2>Başvuru Süreci</h2>
    <p>ABD üniversitelerine başvuru süreci genellikle bir yıl öncesinden başlar ve şu adımları içerir:</p>
    <ul>
      <li>Üniversite araştırması ve seçimi</li>
      <li>Standart test sınavları (SAT, ACT, GRE, GMAT)</li>
      <li>Dil sınavları (TOEFL, IELTS)</li>
      <li>Başvuru formlarının doldurulması</li>
      <li>Motivasyon mektubu ve referans mektupları</li>
      <li>Finansal belgelerin hazırlanması</li>
    </ul>

    <h2>Maliyetler</h2>
    <p>ABD'de eğitim maliyetleri üniversiteye ve eyalete göre değişmektedir. Yıllık ortalama maliyetler:</p>
    <ul>
      <li>Kamu üniversiteleri: $20,000 - $35,000</li>
      <li>Özel üniversiteler: $35,000 - $60,000</li>
      <li>Yaşam giderleri: $10,000 - $15,000</li>
    </ul>

    <h2>Burs İmkanları</h2>
    <p>Birçok üniversite, uluslararası öğrencilere burs ve finansal destek sağlamaktadır. Merit-based ve need-based burslar en yaygın olanlarıdır.</p>

    <h2>Sonuç</h2>
    <p>ABD'de eğitim almak, akademik ve profesyonel gelişim için harika bir fırsat sunmaktadır. Doğru hazırlık ve planlama ile bu hayalinizi gerçeğe dönüştürebilirsiniz.</p>
  `,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // In production, use real data:
  // const post = await getBlogPost(slug);
  const post = mockPost;

  if (!post) {
    return <div>Post not found</div>;
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      <Container className="max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Blog'a Dön
        </Link>

        <article>
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
                <span
                  key={category.slug.current}
                  className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Share Buttons */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bu yazıyı paylaş:</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </article>

        {/* CTA */}
        <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 rounded-2xl text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Yurtdışı Eğitim Hayalinizi Gerçekleştirin
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Ücretsiz danışmanlık için hemen iletişime geçin
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Ücretsiz Danışmanlık Alın
              </Button>
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
}
