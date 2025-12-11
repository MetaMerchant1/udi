const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Prisma 7 requires adapter or accelerateUrl, use the default from prisma.config.ts
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Desraaydin2025', 10);

  const user = await prisma.user.upsert({
    where: { email: 'udi@udidanismanlik.com' },
    update: {
      password: password,
    },
    create: {
      email: 'udi@udidanismanlik.com',
      password: password,
      name: 'UDI Admin',
      role: 'ADMIN',
    },
  });

  console.log('Admin kullanıcısı oluşturuldu:');
  console.log('Email: udi@udidanismanlik.com');
  console.log('Şifre: Desraaydin2025');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
