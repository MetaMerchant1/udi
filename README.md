# UDI Yurtdisi Egitim Danismanlik

Modern, SEO optimize ve responsive yurtdisi egitim danismanlik web sitesi.

## Teknoloji Stack

| Kategori | Teknoloji |
|----------|-----------|
| Framework | Next.js 15 |
| UI | React 19 + TypeScript |
| Styling | TailwindCSS v4 |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js v5 |
| Editor | Tiptap |
| Icons | Lucide React |
| Animations | Framer Motion |

## Kurulum

### 1. Bagimliliklari Yukle
```bash
npm install
```

### 2. Ortam Degiskenlerini Ayarla
`.env` dosyasini duzenle:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/udi_blog"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Site
NEXT_PUBLIC_SITE_URL="https://udi.edu.tr"
```

### 3. Veritabanini Olustur
```bash
# Prisma migration
npm run db:push

# Admin kullanici olustur
npm run db:seed
```

### 4. Gelistirme Sunucusunu Baslat
```bash
npm run dev
```

Tarayici: http://localhost:3000

## Admin Panel

Admin paneline `/admin` adresinden erisebilirsiniz.

### Varsayilan Admin Bilgileri
- Email: `admin@udi.com`
- Sifre: `admin123`

### Admin Sayfalari

| Sayfa | Adres | Aciklama |
|-------|-------|----------|
| Dashboard | `/admin` | Genel istatistikler |
| Yazilar | `/admin/yazilar` | Blog yazilari listesi |
| Yeni Yazi | `/admin/yazilar/yeni` | Yeni blog yazisi olustur |
| Yazi Duzenle | `/admin/yazilar/[id]` | Mevcut yaziyi duzenle |
| Kategoriler | `/admin/kategoriler` | Kategori yonetimi |
| Etiketler | `/admin/etiketler` | Etiket yonetimi |
| Yorumlar | `/admin/yorumlar` | Yorum moderasyonu |

### Ozellikler

**Yazi Yonetimi**
- Zengin metin editoru (Tiptap)
- Gorsel yukleme ve optimizasyon
- SEO meta alanları (title, description)
- Kategori ve etiket atama
- Taslak/Yayinla durumu
- Yorum acma/kapama

**Kategori Yonetimi**
- Renk secimi
- Aciklama alani
- Otomatik slug olusturma

**Etiket Yonetimi**
- Hizli ekleme/silme
- Yazi sayisi takibi

**Yorum Moderasyonu**
- Onaylama/Reddetme
- Spam isaretleme
- Filtreleme (durum, arama)

## Veritabani Komutlari

```bash
# Veritabani sema push
npm run db:push

# Migration olustur
npm run db:migrate

# Seed data yukle
npm run db:seed

# Prisma Studio (GUI)
npm run db:studio
```

## Proje Yapisi

```
/app
  /admin                    # Admin panel
    /giris                  # Login sayfasi
    /yazilar               # Yazi yonetimi
    /kategoriler           # Kategori yonetimi
    /etiketler             # Etiket yonetimi
    /yorumlar              # Yorum moderasyonu
  /api
    /admin                  # Admin API'lari
      /posts               # Yazi CRUD
      /categories          # Kategori CRUD
      /tags                # Etiket CRUD
      /comments            # Yorum CRUD
      /upload              # Gorsel yukleme
    /auth                   # NextAuth API
    /blog                   # Public blog API
  /blog                     # Public blog sayfalari
  /hakkimizda
  /hizmetler
  /iletisim
  ...

/components
  /admin                    # Admin componentleri
    /layout                # Sidebar, Header
    /posts                 # PostEditor
  /blog                    # Blog componentleri
    CommentSection.tsx
  /layout                  # Site layout
  /shared                  # Ortak componentler

/lib
  auth.ts                  # NextAuth config
  prisma.ts               # Prisma client

/prisma
  schema.prisma           # Veritabani semasi
  seed.ts                 # Seed data

/public
  /uploads                # Yuklenen gorseller
```

## API Endpoints

### Admin API (Auth gerekli)

```
GET    /api/admin/posts          # Yazilar listesi
POST   /api/admin/posts          # Yeni yazi
GET    /api/admin/posts/[id]     # Tek yazi
PUT    /api/admin/posts/[id]     # Yazi guncelle
DELETE /api/admin/posts/[id]     # Yazi sil

GET    /api/admin/categories     # Kategoriler
POST   /api/admin/categories     # Yeni kategori
PUT    /api/admin/categories/[id]
DELETE /api/admin/categories/[id]

GET    /api/admin/tags           # Etiketler
POST   /api/admin/tags
PUT    /api/admin/tags/[id]
DELETE /api/admin/tags/[id]

GET    /api/admin/comments       # Yorumlar
PUT    /api/admin/comments/[id]  # Durum guncelle
DELETE /api/admin/comments/[id]

POST   /api/admin/upload         # Gorsel yukle
```

### Public API

```
GET  /api/blog                   # Yayinlanan yazilar
GET  /api/blog/[slug]           # Tek yazi (by slug)
GET  /api/blog/comments?postId= # Onaylanmis yorumlar
POST /api/blog/comments         # Yeni yorum (onay bekler)
```

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables (Production)
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://udi.edu.tr"
NEXTAUTH_SECRET="secure-random-string"
NEXT_PUBLIC_SITE_URL="https://udi.edu.tr"
```

### PostgreSQL Kurulumu (Ubuntu)
```bash
sudo apt install postgresql
sudo -u postgres createuser --interactive
sudo -u postgres createdb udi_blog
```

## SEO Ozellikleri

- Her sayfada ozel metadata
- Open Graph tags
- Otomatik sitemap.xml
- robots.txt
- Image optimization
- Server-Side Rendering

## Lisans

MIT
