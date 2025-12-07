import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed işlemi başlatılıyor...');

  // Admin kullanıcısı oluştur
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@udi.com' },
    update: {},
    create: {
      email: 'admin@udi.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  console.log('Admin kullanıcısı oluşturuldu:', admin.email);

  // Örnek kategoriler oluştur
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'yurtdisi-egitim' },
      update: {},
      create: {
        name: 'Yurtdışı Eğitim',
        slug: 'yurtdisi-egitim',
        description: 'Yurtdışında eğitim ile ilgili yazılar',
        color: 'blue',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'sinav-hazirlik' },
      update: {},
      create: {
        name: 'Sınav Hazırlık',
        slug: 'sinav-hazirlik',
        description: 'IELTS, TOEFL ve diğer sınavlar',
        color: 'green',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'kariyer' },
      update: {},
      create: {
        name: 'Kariyer',
        slug: 'kariyer',
        description: 'Kariyer planlama ve gelişim',
        color: 'purple',
      },
    }),
  ]);

  console.log('Kategoriler oluşturuldu:', categories.length);

  // Örnek etiketler oluştur
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'ielts' },
      update: {},
      create: { name: 'IELTS', slug: 'ielts' },
    }),
    prisma.tag.upsert({
      where: { slug: 'toefl' },
      update: {},
      create: { name: 'TOEFL', slug: 'toefl' },
    }),
    prisma.tag.upsert({
      where: { slug: 'ingiltere' },
      update: {},
      create: { name: 'İngiltere', slug: 'ingiltere' },
    }),
    prisma.tag.upsert({
      where: { slug: 'amerika' },
      update: {},
      create: { name: 'Amerika', slug: 'amerika' },
    }),
    prisma.tag.upsert({
      where: { slug: 'burs' },
      update: {},
      create: { name: 'Burs', slug: 'burs' },
    }),
  ]);

  console.log('Etiketler oluşturuldu:', tags.length);

  console.log('Seed işlemi tamamlandı!');
  console.log('');
  console.log('Admin Giriş Bilgileri:');
  console.log('E-posta: admin@udi.com');
  console.log('Şifre: admin123');
  console.log('');
  console.log('ÖNEMLİ: Production ortamında bu şifreyi değiştirin!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
