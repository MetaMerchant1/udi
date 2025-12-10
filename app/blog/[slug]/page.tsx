import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Eye, Tag } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import Button from '@/components/shared/Button';
import { formatDate } from '@/lib/utils';
import { prisma } from '@/lib/prisma';

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlogPost(slug: string) {
  try {
    const post = await prisma.post.findFirst({
      where: {
        slug,
        status: 'PUBLISHED',
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        categories: {
          select: {
            category: {
              select: {
                id: true,
                name: true,
                slug: true,
                color: true,
              },
            },
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });

    if (post) {
      // Görüntülenme sayısını artır
      await prisma.post.update({
        where: { id: post.id },
        data: { viewCount: { increment: 1 } },
      });
    }

    return post;
  } catch (error) {
    console.error('Blog post fetch error:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: `${post.metaTitle || post.title} | UDI Yurtdışı Eğitim Blog`,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://udi.edu.tr'}/blog/${slug}`;

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      <Container className="max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Blog'a Dön
        </Link>

        <article>
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map(({ category }) => (
                <Link
                  key={category.id}
                  href={`/blog?category=${category.slug}`}
                  className="inline-block px-4 py-2 text-sm font-medium rounded-full transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: category.color ? `${category.color}20` : '#e5e7eb',
                    color: category.color || '#374151',
                  }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author.name}</span>
              </div>
            )}
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.publishedAt.toISOString())}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              <span>{post.viewCount.toLocaleString('tr-TR')} görüntülenme</span>
            </div>
          </div>

          {/* Content */}
          {post.contentHtml ? (
            <div
              className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          ) : (
            <p className="text-gray-600 mb-12">{post.excerpt}</p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-t border-gray-200 pt-8 mb-8">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-5 w-5 text-gray-500" />
                {post.tags.map(({ tag }) => (
                  <Link
                    key={tag.id}
                    href={`/blog?tag=${tag.slug}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bu yazıyı paylaş:</h3>
            <div className="flex flex-wrap gap-3">
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
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
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
        <Section className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-[#1c2a2f] rounded-2xl text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Yurtdışı Eğitim Hayalinizi Gerçekleştirin
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Ücretsiz danışmanlık için hemen iletişime geçin
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                İletişim
              </Button>
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
}
