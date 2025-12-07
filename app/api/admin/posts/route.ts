import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { z } from 'zod';

// Yazı oluşturma/güncelleme şeması
const postSchema = z.object({
  title: z.string().min(1, 'Başlık gerekli'),
  slug: z.string().optional(),
  excerpt: z.string().min(1, 'Özet gerekli'),
  content: z.any(),
  contentHtml: z.string().optional(),
  featuredImage: z.string().nullable().optional(),
  featuredImageAlt: z.string().nullable().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  publishedAt: z.string().nullable().optional(),
  metaTitle: z.string().nullable().optional(),
  metaDescription: z.string().nullable().optional(),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
});

// GET: Yazıları listele
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const skip = (page - 1) * limit;

    const where: any = {};

    if (status && status !== 'all') {
      where.status = status.toUpperCase();
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: {
          author: { select: { id: true, name: true, email: true } },
          categories: {
            include: {
              category: { select: { id: true, name: true, slug: true, color: true } }
            }
          },
          tags: {
            include: {
              tag: { select: { id: true, name: true, slug: true } }
            }
          },
        },
      }),
      prisma.post.count({ where }),
    ]);

    // Veriyi düzle
    const formattedPosts = posts.map((post) => ({
      ...post,
      categories: post.categories.map((c) => c.category),
      tags: post.tags.map((t) => t.tag),
    }));

    return NextResponse.json({
      posts: formattedPosts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Posts list error:', error);
    return NextResponse.json(
      { error: 'Yazılar getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// POST: Yeni yazı oluştur
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = postSchema.parse(body);

    // Slug oluştur
    let slug = validatedData.slug || slugify(validatedData.title, { lower: true, strict: true });

    // Slug benzersizliğini kontrol et
    const existingPost = await prisma.post.findUnique({ where: { slug } });
    if (existingPost) {
      slug = `${slug}-${Date.now()}`;
    }

    // Okuma süresini hesapla
    const wordCount = validatedData.contentHtml?.split(/\s+/).length || 0;
    const readingTime = Math.ceil(wordCount / 200);

    // Yazıyı oluştur
    const post = await prisma.post.create({
      data: {
        title: validatedData.title,
        slug,
        excerpt: validatedData.excerpt,
        content: typeof validatedData.content === 'string'
          ? validatedData.content
          : JSON.stringify(validatedData.content),
        contentHtml: validatedData.contentHtml,
        featuredImage: validatedData.featuredImage,
        featuredImageAlt: validatedData.featuredImageAlt,
        status: validatedData.status || 'DRAFT',
        publishedAt: validatedData.status === 'PUBLISHED'
          ? validatedData.publishedAt
            ? new Date(validatedData.publishedAt)
            : new Date()
          : null,
        metaTitle: validatedData.metaTitle,
        metaDescription: validatedData.metaDescription,
        readingTime,
        authorId: session.user.id,
        categories: validatedData.categoryIds?.length
          ? {
              create: validatedData.categoryIds.map((categoryId) => ({
                category: { connect: { id: categoryId } },
              })),
            }
          : undefined,
        tags: validatedData.tagIds?.length
          ? {
              create: validatedData.tagIds.map((tagId) => ({
                tag: { connect: { id: tagId } },
              })),
            }
          : undefined,
      },
      include: {
        author: { select: { id: true, name: true } },
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
      },
    });

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Post create error:', error);
    return NextResponse.json(
      { error: 'Yazı oluşturulurken hata oluştu.' },
      { status: 500 }
    );
  }
}
