import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { z } from 'zod';

const tagSchema = z.object({
  name: z.string().min(1, 'Etiket adı gerekli'),
  slug: z.string().optional(),
});

// GET: Etiketleri listele
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { posts: true } },
      },
    });

    const formattedTags = tags.map((tag) => ({
      ...tag,
      postCount: tag._count.posts,
    }));

    return NextResponse.json({ tags: formattedTags });
  } catch (error) {
    console.error('Tags list error:', error);
    return NextResponse.json(
      { error: 'Etiketler getirilirken hata oluştu.' },
      { status: 500 }
    );
  }
}

// POST: Yeni etiket oluştur
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = tagSchema.parse(body);

    const slug = validatedData.slug || slugify(validatedData.name, { lower: true, strict: true });

    // Slug benzersizliğini kontrol et
    const existingTag = await prisma.tag.findUnique({ where: { slug } });
    if (existingTag) {
      return NextResponse.json(
        { error: 'Bu slug ile bir etiket zaten mevcut.' },
        { status: 400 }
      );
    }

    const tag = await prisma.tag.create({
      data: {
        name: validatedData.name,
        slug,
      },
    });

    return NextResponse.json({ success: true, tag }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Tag create error:', error);
    return NextResponse.json(
      { error: 'Etiket oluşturulurken hata oluştu.' },
      { status: 500 }
    );
  }
}
