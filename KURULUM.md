# UDI Blog Sistemi - Lokal Kurulum Kılavuzu

## Gereksinimler

- Node.js 18+
- PostgreSQL veritabanı (lokal veya cloud)
- npm veya yarn

## 1. Bağımlılıkları Yükle

```bash
npm install
```

## 2. Veritabanı Kurulumu

### Seçenek A: Lokal PostgreSQL

1. PostgreSQL'i bilgisayarınıza kurun
2. Yeni bir veritabanı oluşturun:
```sql
CREATE DATABASE udi_blog;
```

### Seçenek B: Cloud Veritabanı (Önerilen)

- [Neon](https://neon.tech) - Ücretsiz PostgreSQL
- [Supabase](https://supabase.com) - Ücretsiz PostgreSQL
- [Railway](https://railway.app) - PostgreSQL

## 3. Environment Dosyası

Proje kök dizininde `.env.local` dosyası oluşturun:

```env
# Veritabanı URL'i
DATABASE_URL="postgresql://kullanici:sifre@host:5432/veritabani?sslmode=require"

# NextAuth Ayarları
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="gizli-bir-anahtar-buraya-yazin-en-az-32-karakter"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### NEXTAUTH_SECRET Oluşturma

Terminal'de şu komutu çalıştırın:
```bash
openssl rand -base64 32
```

Veya online: https://generate-secret.vercel.app/32

## 4. Veritabanı Migration

```bash
# Prisma client oluştur
npx prisma generate

# Veritabanı tablolarını oluştur
npx prisma db push
```

## 5. Admin Kullanıcısı Oluştur

Prisma Studio ile admin kullanıcısı ekleyin:

```bash
npx prisma studio
```

Browser'da açılan arayüzde:
1. `User` tablosuna tıklayın
2. "Add record" butonuna tıklayın
3. Şu bilgileri girin:
   - email: `admin@udi.com`
   - password: (bcrypt hash gerekli - aşağıya bakın)
   - name: `Admin`
   - role: `ADMIN`

### Şifre Hash'i Oluşturma

Node.js ile hash oluşturun:
```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('sifreniz123', 10).then(h => console.log(h));"
```

Örnek çıktı: `$2a$10$...` (bu hash'i password alanına yapıştırın)

## 6. Projeyi Çalıştır

```bash
# Development modunda çalıştır
npm run dev
```

Proje şu adreste açılacak: http://localhost:3000

## 7. Admin Paneline Erişim

1. http://localhost:3000/admin/giris adresine gidin
2. Oluşturduğunuz admin bilgileriyle giriş yapın
3. Blog yazıları, kategoriler, etiketler ve yorumları yönetin

## Hızlı Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development sunucusu |
| `npm run build` | Production build |
| `npm start` | Production sunucusu |
| `npx prisma studio` | Veritabanı arayüzü |
| `npx prisma db push` | Schema sync |
| `npx prisma generate` | Client yenile |

## Sorun Giderme

### "PrismaClientInitializationError" Hatası
- DATABASE_URL'in doğru olduğundan emin olun
- Veritabanı sunucusunun çalıştığından emin olun

### "NEXTAUTH_SECRET is not set" Hatası
- `.env.local` dosyasında NEXTAUTH_SECRET tanımlı olmalı

### Giriş yapamıyorum
- Şifre hash'inin doğru oluşturulduğundan emin olun
- bcryptjs kullanarak hash oluşturun

## Klasör Yapısı

```
├── app/
│   ├── admin/          # Admin panel sayfaları
│   ├── api/            # API endpoint'leri
│   ├── blog/           # Blog sayfaları
│   └── ...
├── components/
│   ├── admin/          # Admin bileşenleri
│   ├── blog/           # Blog bileşenleri
│   └── ...
├── lib/
│   ├── auth.ts         # NextAuth yapılandırması
│   └── prisma.ts       # Prisma client
├── prisma/
│   └── schema.prisma   # Veritabanı şeması
└── public/
    └── uploads/        # Yüklenen görseller
```
