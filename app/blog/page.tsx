import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Eye } from 'lucide-react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import { formatDate } from '@/lib/utils';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Yurtdışı eğitim, üniversite başvuruları, vize süreçleri ve daha fazlası hakkında güncel bilgiler ve rehberler.',
  openGraph: {
    title: 'Blog | UDI Yurtdışı Eğitim',
    description: 'Yurtdışı eğitim, üniversite başvuruları, vize süreçleri hakkında güncel bilgiler.',
  },
};

async function getBlogPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: 'PUBLISHED',
      },
      orderBy: { publishedAt: 'desc' },
      take: 12,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        featuredImageAlt: true,
        publishedAt: true,
        viewCount: true,
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
      },
    });
    return posts;
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-[#1c2a2f] text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/wonderlane-6zlgM-GUd6I-unsplash.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800/95 to-secondary-900/95"></div>

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
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Henüz blog yazısı bulunmuyor.</p>
            <p className="text-gray-500 mt-2">Yakında yeni içerikler eklenecek.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full group cursor-pointer overflow-hidden">
                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 2).map(({ category }) => (
                        <span
                          key={category.id}
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: category.color ? `${category.color}20` : '#e5e7eb',
                            color: category.color || '#374151',
                          }}
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
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
                      <span>{post.publishedAt ? formatDate(post.publishedAt.toISOString()) : '-'}</span>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                    )}
                    {post.viewCount > 0 && (
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.viewCount}</span>
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
        )}
      </Section>
    </div>
  );
}
