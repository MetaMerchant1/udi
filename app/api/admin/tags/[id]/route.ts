import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { z } from 'zod';

const tagSchema = z.object({
  name: z.string().min(1, 'Etiket adı gerekli'),
  slug: z.string().optional(),
});

// GET: Tek etiket getir
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

    const tag = await prisma.tag.findUnique({
      where: { id },
      include: {
        _count: { select: { posts: true } },
      },
    });

    if (!tag) {
      return NextResponse.json({ error: 'Etiket bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({
      tag: {
        ...tag,
        postCount: tag._count.posts,
      },
    });
  } catch (error) {
    console.error('Tag get error:', error);
    return NextResponse.json(
      { error: 'Etiket getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// PUT: Etiket güncelle
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
    const validatedData = tagSchema.parse(body);

    const existingTag = await prisma.tag.findUnique({ where: { id } });
    if (!existingTag) {
      return NextResponse.json({ error: 'Etiket bulunamadı' }, { status: 404 });
    }

    const slug = validatedData.slug || slugify(validatedData.name, { lower: true, strict: true });

    // Slug benzersizliğini kontrol et (kendi slug'u hariç)
    const duplicateSlug = await prisma.tag.findFirst({
      where: {
        slug,
        id: { not: id },
      },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        { error: 'Bu slug ile başka bir etiket zaten mevcut.' },
        { status: 400 }
      );
    }

    const tag = await prisma.tag.update({
      where: { id },
      data: {
        name: validatedData.name,
        slug,
      },
    });

    return NextResponse.json({ success: true, tag });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Tag update error:', error);
    return NextResponse.json(
      { error: 'Etiket güncellenirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// DELETE: Etiket sil
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

    const existingTag = await prisma.tag.findUnique({
      where: { id },
    });

    if (!existingTag) {
      return NextResponse.json({ error: 'Etiket bulunamadı' }, { status: 404 });
    }

    // Etiket yazılardan bağımsız silinebilir (many-to-many ilişki)
    await prisma.tag.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tag delete error:', error);
    return NextResponse.json(
      { error: 'Etiket silinirken hata oluştu.' },
      { status: 500 }
    );
  }
}
