import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string().min(1, 'Kategori adı gerekli'),
  slug: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

// GET: Tek kategori getir
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

    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        _count: { select: { posts: true } },
      },
    });

    if (!category) {
      return NextResponse.json({ error: 'Kategori bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({
      category: {
        ...category,
        postCount: category._count.posts,
      },
    });
  } catch (error) {
    console.error('Category get error:', error);
    return NextResponse.json(
      { error: 'Kategori getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// PUT: Kategori güncelle
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
    const validatedData = categorySchema.parse(body);

    const existingCategory = await prisma.category.findUnique({ where: { id } });
    if (!existingCategory) {
      return NextResponse.json({ error: 'Kategori bulunamadı' }, { status: 404 });
    }

    const slug = validatedData.slug || slugify(validatedData.name, { lower: true, strict: true });

    // Slug benzersizliğini kontrol et (kendi slug'u hariç)
    const duplicateSlug = await prisma.category.findFirst({
      where: {
        slug,
        id: { not: id },
      },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        { error: 'Bu slug ile başka bir kategori zaten mevcut.' },
        { status: 400 }
      );
    }

    const category = await prisma.category.update({
      where: { id },
      data: {
        name: validatedData.name,
        slug,
        description: validatedData.description,
        color: validatedData.color,
      },
    });

    return NextResponse.json({ success: true, category });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Category update error:', error);
    return NextResponse.json(
      { error: 'Kategori güncellenirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// DELETE: Kategori sil
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

    const existingCategory = await prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { posts: true } } },
    });

    if (!existingCategory) {
      return NextResponse.json({ error: 'Kategori bulunamadı' }, { status: 404 });
    }

    // Kategori yazılarla ilişkiliyse uyar
    if (existingCategory._count.posts > 0) {
      return NextResponse.json(
        {
          error: `Bu kategoride ${existingCategory._count.posts} yazı bulunuyor. Önce yazıları başka bir kategoriye taşıyın veya silin.`,
        },
        { status: 400 }
      );
    }

    await prisma.category.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Category delete error:', error);
    return NextResponse.json(
      { error: 'Kategori silinirken hata oluştu.' },
      { status: 500 }
    );
  }
}
