const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Prisma 7 requires adapter or accelerateUrl, use the default from prisma.config.ts
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@udi.com' },
    update: {},
    create: {
      email: 'admin@udi.com',
      password: password,
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  console.log('Admin kullanıcısı oluşturuldu:');
  console.log('Email: admin@udi.com');
  console.log('Şifre: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
