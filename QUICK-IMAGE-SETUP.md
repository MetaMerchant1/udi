# 🚀 Hızlı Görsel Kurulum Rehberi

## 1️⃣ Resimlerinizi Yerleştirin

```bash
public/
  └── images/
      ├── hero-bg.jpg              # Ana sayfa arkaplan
      ├── student-success.jpg      # Öğrenci başarı
      ├── university-campus.jpg    # Kampüs
      ├── visa-process.jpg         # Vize
      ├── language-study.jpg       # Dil eğitimi
      └── about-us.jpg             # Hakkımızda
```

## 2️⃣ BackgroundImage Component Kullanımı

### Basit Kullanım
```tsx
import BackgroundImage from '@/components/shared/BackgroundImage';

<div className="relative h-96">
  <BackgroundImage src="/images/hero-bg.jpg" alt="Hero Background" />

  {/* İçerik */}
  <div className="relative z-10">
    <h1>Başlık</h1>
  </div>
</div>
```

### Tüm Özelliklerle
```tsx
<BackgroundImage
  src="/images/university-campus.jpg"
  alt="Üniversite Kampüsü"
  opacity={60}              // 0-100 arası
  overlay="gradient"        // 'gradient' | 'dark' | 'light' | 'none'
  overlayOpacity={80}       // Overlay opacity
  parallax={true}           // Parallax efekti
  zoom={true}               // Hover zoom efekti
/>
```

## 3️⃣ Manuel Kullanım (Inline Style)

### Temel Arka Plan
```tsx
<div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
>
  {/* İçerik */}
</div>
```

### Arka Plan + Gradient Overlay
```tsx
<section className="relative min-h-screen">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-900/90"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* İçeriğiniz */}
  </div>
</section>
```

## 4️⃣ Card İçinde Görsel

```tsx
<Card className="overflow-hidden">
  {/* Image */}
  <div className="relative h-48">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/service.jpg')" }}
    ></div>

    {/* Gradient Bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="p-6">
    <h3>Başlık</h3>
    <p>Açıklama</p>
  </div>
</Card>
```

## 5️⃣ Hover Efektleri

### Zoom on Hover
```tsx
<div className="relative h-96 overflow-hidden rounded-xl group">
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
    style={{ backgroundImage: "url('/images/photo.jpg')" }}
  ></div>
</div>
```

### Opacity Change on Hover
```tsx
<div className="relative h-96 group">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
    style={{ backgroundImage: "url('/images/photo.jpg')" }}
  ></div>
</div>
```

## 6️⃣ Çoklu Katman Örneği

```tsx
<section className="relative min-h-screen overflow-hidden">
  {/* Layer 1: Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
  ></div>

  {/* Layer 2: Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/60"></div>

  {/* Layer 3: Pattern Overlay (Optional) */}
  <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>

  {/* Layer 4: Animated Shapes */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-blob"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 py-20">
    <h1 className="text-5xl font-bold text-white">Başlık</h1>
  </div>
</section>
```

## 7️⃣ Next.js Image Component (En İyi Performans)

```tsx
import Image from 'next/image';

{/* Fill Container */}
<div className="relative h-96">
  <Image
    src="/images/hero-bg.jpg"
    alt="Hero Background"
    fill
    className="object-cover opacity-50"
    priority
  />
</div>

{/* Fixed Size */}
<Image
  src="/images/student.jpg"
  alt="Student"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

## 8️⃣ Blog Card Örneği

```tsx
<Link href="/blog/post-slug">
  <Card className="group overflow-hidden cursor-pointer">
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: "url('/images/blog-post.jpg')" }}
      ></div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
          Kategori
        </span>
      </div>

      {/* Gradient Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">
        Blog Başlığı
      </h3>
      <p className="text-gray-600 mt-2">Blog açıklaması...</p>
    </div>
  </Card>
</Link>
```

## 🎨 Hızlı Renk Overlay'leri

```tsx
{/* Mavi Ton */}
<div className="absolute inset-0 bg-blue-900/70"></div>

{/* Yeşil Ton */}
<div className="absolute inset-0 bg-green-900/70"></div>

{/* Mor Gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/80"></div>

{/* Siyah-Beyaz */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-white/10"></div>
```

## 📱 Responsive Görseller

```tsx
<div
  className="h-64 md:h-96 lg:h-screen bg-cover bg-center"
  style={{
    backgroundImage: window.innerWidth < 768
      ? "url('/images/hero-mobile.jpg')"
      : "url('/images/hero-desktop.jpg')"
  }}
></div>
```

## ⚡ Performans İpucu

1. **Optimize edin:** TinyPNG, Squoosh kullanın
2. **WebP kullanın:** JPG yerine WebP formatı tercih edin
3. **Lazy load:** `loading="lazy"` ekleyin
4. **Boyutlandırın:** Gereksiz büyük görseller kullanmayın

---

**Hızlı Test:**
```bash
# Resimlerinizi ekleyin
public/images/hero-bg.jpg

# Sayfayı açın
npm run dev
http://localhost:3000
```

Görselleriniz otomatik olarak yüklenecek! 🎉
