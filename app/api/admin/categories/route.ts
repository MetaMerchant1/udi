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

// GET: Kategorileri listele
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { posts: true } },
      },
    });

    const formattedCategories = categories.map((cat) => ({
      ...cat,
      postCount: cat._count.posts,
    }));

    return NextResponse.json({ categories: formattedCategories });
  } catch (error) {
    console.error('Categories list error:', error);
    return NextResponse.json(
      { error: 'Kategoriler getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// POST: Yeni kategori oluştur
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = categorySchema.parse(body);

    const slug = validatedData.slug || slugify(validatedData.name, { lower: true, strict: true });

    // Slug benzersizliğini kontrol et
    const existingCategory = await prisma.category.findUnique({ where: { slug } });
    if (existingCategory) {
      return NextResponse.json(
        { error: 'Bu slug ile bir kategori zaten mevcut.' },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: {
        name: validatedData.name,
        slug,
        description: validatedData.description,
        color: validatedData.color,
      },
    });

    return NextResponse.json({ success: true, category }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Category create error:', error);
    return NextResponse.json(
      { error: 'Kategori oluşturulurken hata oluştu.' },
      { status: 500 }
    );
  }
}
