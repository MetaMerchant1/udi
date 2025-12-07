import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { z } from 'zod';

// Yazı güncelleme şeması
const updatePostSchema = z.object({
  title: z.string().min(1, 'Başlık gerekli').optional(),
  slug: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.any().optional(),
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

// GET: Tek yazı getir
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const { id } = await params;

    const post = await prisma.post.findUnique({
      where: { id },
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
    });

    if (!post) {
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 });
    }

    // Veriyi düzle
    const formattedPost = {
      ...post,
      categories: post.categories.map((c) => c.category),
      tags: post.tags.map((t) => t.tag),
    };

    return NextResponse.json({ post: formattedPost });
  } catch (error) {
    console.error('Post get error:', error);
    return NextResponse.json(
      { error: 'Yazı getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// PUT: Yazı güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const validatedData = updatePostSchema.parse(body);

    // Mevcut yazıyı kontrol et
    const existingPost = await prisma.post.findUnique({ where: { id } });
    if (!existingPost) {
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 });
    }

    // Slug güncelleme
    let slug = validatedData.slug;
    if (validatedData.title && !validatedData.slug) {
      slug = slugify(validatedData.title, { lower: true, strict: true });
    }

    // Slug benzersizliğini kontrol et
    if (slug && slug !== existingPost.slug) {
      const slugExists = await prisma.post.findFirst({
        where: { slug, id: { not: id } }
      });
      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }
    }

    // Okuma süresini hesapla
    let readingTime = existingPost.readingTime;
    if (validatedData.contentHtml) {
      const wordCount = validatedData.contentHtml.split(/\s+/).length;
      readingTime = Math.ceil(wordCount / 200);
    }

    // Kategorileri ve etiketleri güncelle
    if (validatedData.categoryIds !== undefined) {
      await prisma.categoriesOnPosts.deleteMany({ where: { postId: id } });
    }
    if (validatedData.tagIds !== undefined) {
      await prisma.tagsOnPosts.deleteMany({ where: { postId: id } });
    }

    // Yazıyı güncelle
    const post = await prisma.post.update({
      where: { id },
      data: {
        title: validatedData.title,
        slug: slug || undefined,
        excerpt: validatedData.excerpt,
        content: validatedData.content
          ? typeof validatedData.content === 'string'
            ? validatedData.content
            : JSON.stringify(validatedData.content)
          : undefined,
        contentHtml: validatedData.contentHtml,
        featuredImage: validatedData.featuredImage,
        featuredImageAlt: validatedData.featuredImageAlt,
        status: validatedData.status,
        publishedAt: validatedData.status === 'PUBLISHED' && !existingPost.publishedAt
          ? validatedData.publishedAt
            ? new Date(validatedData.publishedAt)
            : new Date()
          : validatedData.publishedAt
            ? new Date(validatedData.publishedAt)
            : undefined,
        metaTitle: validatedData.metaTitle,
        metaDescription: validatedData.metaDescription,
        readingTime,
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

    return NextResponse.json({ success: true, post });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Post update error:', error);
    return NextResponse.json(
      { error: 'Yazı güncellenirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// DELETE: Yazı sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const { id } = await params;

    // Yazıyı kontrol et
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 });
    }

    // Yazıyı sil (cascade ile ilişkiler de silinir)
    await prisma.post.delete({ where: { id } });

    return NextResponse.json({ success: true, message: 'Yazı silindi' });
  } catch (error) {
    console.error('Post delete error:', error);
    return NextResponse.json(
      { error: 'Yazı silinirken hata oluştu.' },
      { status: 500 }
    );
  }
}
