import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { prisma } from '@/lib/prisma';

const UPLOAD_DIR = './public/uploads';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request: NextRequest) {
  try {
    // Auth kontrolü
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    // Dosya tipi kontrolü
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Geçersiz dosya tipi. Sadece JPEG, PNG, WebP ve GIF kabul edilir.' },
        { status: 400 }
      );
    }

    // Dosya boyutu kontrolü
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Dosya boyutu 5MB\'dan büyük olamaz.' },
        { status: 400 }
      );
    }

    // Dosya adı oluştur
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const ext = path.extname(originalName);
    const baseName = path.basename(originalName, ext);
    const filename = `${baseName}-${timestamp}${ext}`;

    // Yıl/ay klasörü oluştur
    const date = new Date();
    const yearMonth = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`;
    const uploadPath = path.join(UPLOAD_DIR, yearMonth);

    // Klasörü oluştur
    await mkdir(uploadPath, { recursive: true });

    // Dosyayı oku
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sharp ile görsel işleme
    let processedBuffer: Buffer = buffer;
    let width: number | undefined;
    let height: number | undefined;

    if (file.type !== 'image/gif') {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      width = metadata.width;
      height = metadata.height;

      // Büyük görselleri yeniden boyutlandır
      if (width && width > 1920) {
        processedBuffer = await image
          .resize(1920, undefined, { withoutEnlargement: true })
          .jpeg({ quality: 85 })
          .toBuffer();

        const newMetadata = await sharp(processedBuffer).metadata();
        width = newMetadata.width;
        height = newMetadata.height;
      }
    }

    // Dosyayı kaydet
    const filePath = path.join(uploadPath, filename);
    await writeFile(filePath, processedBuffer);

    // URL oluştur
    const url = `/uploads/${yearMonth}/${filename}`;

    // Veritabanına kaydet
    const media = await prisma.media.create({
      data: {
        filename,
        url,
        mimeType: file.type,
        size: processedBuffer.length,
        width,
        height,
        uploadedBy: session.user.id,
      },
    });

    return NextResponse.json({
      success: true,
      media: {
        id: media.id,
        url: media.url,
        filename: media.filename,
        width: media.width,
        height: media.height,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Dosya yüklenirken bir hata oluştu.' },
      { status: 500 }
    );
  }
}

// Medya listesi
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const [media, total] = await Promise.all([
      prisma.media.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.media.count(),
    ]);

    return NextResponse.json({
      media,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Media list error:', error);
    return NextResponse.json(
      { error: 'Medya listesi alınırken hata oluştu.' },
      { status: 500 }
    );
  }
}
