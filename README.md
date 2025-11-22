# Yurtdışı Eğitim Danışmanlık Web Sitesi

Modern, SEO optimize ve responsive yurtdışı eğitim danışmanlık web sitesi.

## 🚀 Özellikler

- ✅ **Next.js 14** (App Router)
- ✅ **React 18 & TypeScript**
- ✅ **TailwindCSS v4** ile modern tasarım (@theme sistemi)
- ✅ **SEO Optimize** (metadata, sitemap, robots.txt)
- ✅ **Framer Motion** animasyonlar
- ✅ **React Hook Form** ile form yönetimi
- ✅ **Responsive & Mobile-first** design
- ✅ **Accessibility** (WCAG AA)
- ✅ **Lucide Icons**

## 📄 Sayfalar

### Ana Sayfa (/)
- Hero bölümü (animasyonlu, gradient background)
- Hizmetler kartları (4 adet)
- Testimonials (başarı hikayeleri)
- Partner üniversiteler
- CTA (Call to Action) bölümü

### Kurumsal
- **Hakkımızda** - Şirket hikayesi, değerler, ekip, istatistikler
- **İletişim** - İletişim formu, harita, iletişim bilgileri

### Hizmetler
- **Hizmetler Genel** - Tüm hizmetlerin listesi
- **Üniversite Başvurusu** - Detaylı başvuru süreci, adımlar, ülkeler
- **Vize Danışmanlığı** - Vize türleri, başarı oranları, süreç
- **Dil Eğitimi** - IELTS, TOEFL, genel İngilizce programları

### Blog
- **Blog Listesi** - Tüm blog yazıları (kategoriler, tarih, yazar)
- **Blog Detay** - Dinamik blog sayfası, sosyal paylaşım butonları

## 🛠️ Kurulum

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın
`.env.local` dosyasını düzenleyin:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Production sunucusu
npm start

# Type checking
npm run lint
```

## 🎨 TailwindCSS v4 Özellikleri

Bu projede TailwindCSS v4 kullanılmaktadır:
- CSS-first configuration (`@theme` directive)
- Modern performans optimizasyonları
- Lightning CSS ile hızlı build
- Özel renkler ve animasyonlar

### Özel Temalar:
```css
@theme {
  --color-primary-*: /* Mavi tonları */
  --color-secondary-*: /* Gri tonları */
  --font-family-sans: Inter
}
```

### Animasyonlar:
- `animate-blob` - Yüzen şekiller
- `animation-delay-*` - Gecikme sınıfları
- Keyframes: fade-in, slide-up, slide-down

## 📂 Proje Yapısı

```
/app
  /page.tsx                    # Ana sayfa
  /layout.tsx                  # Root layout
  /globals.css                 # TailwindCSS v4 config
  /hakkimizda/page.tsx
  /hizmetler/page.tsx
  /universite-basvurusu/page.tsx
  /vize-danismanligi/page.tsx
  /dil-egitimi/page.tsx
  /blog/
    page.tsx                   # Blog listesi
    [slug]/page.tsx            # Blog detay
  /iletisim/page.tsx
  /robots.ts                   # SEO robots
  /sitemap.ts                  # SEO sitemap

/components
  /layout                      # Header, Footer, Navigation
  /home                        # Ana sayfa bileşenleri
  /shared                      # Ortak bileşenler (Button, Card, etc.)

/lib
  /types.ts                    # TypeScript tipleri
  /utils.ts                    # Yardımcı fonksiyonlar

/public
  /images                      # Görseller
  /icons                       # İkonlar
```

## 🔍 SEO Özellikleri

✅ Her sayfada özel **metadata** (title, description)
✅ **Open Graph** tags (Facebook, Twitter, LinkedIn)
✅ Otomatik **sitemap.xml**
✅ **Robots.txt**
✅ **Image optimization** (next/image)
✅ **Server-Side Rendering** (SSR)
✅ **Static Site Generation** (SSG)
✅ Structured data hazırlığı (JSON-LD)

## 🎯 Teknoloji Stack

| Kategori | Teknoloji |
|----------|-----------|
| **Framework** | Next.js 14 |
| **UI Library** | React 18 |
| **Language** | TypeScript |
| **Styling** | TailwindCSS v4 |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form |
| **Icons** | Lucide React |
| **SEO** | next-seo |

## 📋 Önerilen Geliştirmeler

- [ ] **Google Analytics 4** entegrasyonu
- [ ] **Resend.com** ile email gönderimi
- [ ] **Google Maps** entegrasyonu
- [ ] **Headless CMS** (Sanity.io veya Contentful)
- [ ] **Multilingual** support (i18n)
- [ ] **Admin paneli**
- [ ] **Öğrenci başvuru takip** sistemi
- [ ] **Ödeme sistemi** (Stripe/PayPal)
- [ ] **Chatbot/Live chat**
- [ ] **Push notifications**

## 🎨 Tasarım Renkleri

### Primary (Mavi)
- `primary-600`: #1E40AF (Ana mavi)
- `primary-700`: #1E3A8A (Koyu mavi)

### Secondary (Gri)
- `secondary-100`: #F3F4F6 (Açık gri)
- `secondary-200`: #E5E7EB (Orta gri)

## 📱 Responsive Breakpoints

```
sm: 640px   # Tablet
md: 768px   # Tablet landscape
lg: 1024px  # Desktop
xl: 1280px  # Large desktop
```

## 🚀 Deployment

### Vercel (Önerilen)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

### Docker
```bash
docker build -t egitim-danismanlik .
docker run -p 3000:3000 egitim-danismanlik
```

## 📄 Lisans

MIT

## 📧 İletişim

- **Website**: [yourdomain.com](https://yourdomain.com)
- **Email**: info@example.com
- **Telefon**: +90 5XX XXX XX XX

---

**Geliştirici Notları:**
- TailwindCSS v4 kullanılmıştır (@theme directive ile)
- Sanity.io bağımlılıkları kaldırılmıştır (isteğe bağlı eklenebilir)
- Mock data ile çalışmaktadır (blog için)
- Production'da gerçek CMS entegrasyonu önerilir
