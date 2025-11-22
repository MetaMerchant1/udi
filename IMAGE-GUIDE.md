# 📸 Görsel Kullanım Rehberi

Bu dosya, projedeki JPG resimlerini nasıl kullanacağınızı gösterir.

## 📁 Görsel Klasör Yapısı

Resimlerinizi şu klasöre yerleştirin:
```
/public/images/
  ├── hero-bg.jpg              # Ana sayfa arka plan (1920x1080)
  ├── student-success.jpg      # Öğrenci başarı görseli (800x800)
  ├── university-campus.jpg    # Üniversite kampüsü (1200x800)
  ├── visa-process.jpg         # Vize süreci (1200x800)
  ├── language-study.jpg       # Dil eğitimi (1200x800)
  ├── about-us.jpg             # Hakkımızda sayfa görseli (1200x600)
  ├── contact-bg.jpg           # İletişim sayfa arka planı (1920x600)
  └── blog/
      ├── blog-1.jpg           # Blog görselleri
      ├── blog-2.jpg
      └── ...
```

## 🎨 Kullanım Örnekleri

### 1. Hero Section (Ana Sayfa)

**Dosya:** `components/home/HeroSection.tsx`

```tsx
{/* Arka Plan Görseli */}
<div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-primary-900/90"></div>
```

**Sağ Tarafta Görsel:**
```tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-80"
  style={{ backgroundImage: "url('/images/student-success.jpg')" }}
></div>
```

### 2. Services Section (Hizmetler Kartları)

**Dosya:** `components/home/ServicesSection.tsx`

Her hizmet kartına arka plan eklemek için:

```tsx
<Card className="h-full group cursor-pointer relative overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-300"
    style={{ backgroundImage: "url('/images/service-bg.jpg')" }}
  ></div>

  {/* Content */}
  <div className="relative z-10">
    {/* Mevcut içerik */}
  </div>
</Card>
```

### 3. Hizmet Sayfaları

#### Üniversite Başvurusu
**Dosya:** `app/universite-basvurusu/page.tsx`

```tsx
<div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-96 relative overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: "url('/images/university-campus.jpg')" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-blue-900/70"></div>

  {/* Content */}
  <div className="relative h-full flex items-center justify-center">
    {/* İçerik */}
  </div>
</div>
```

#### Vize Danışmanlığı
```tsx
style={{ backgroundImage: "url('/images/visa-process.jpg')" }}
```

#### Dil Eğitimi
```tsx
style={{ backgroundImage: "url('/images/language-study.jpg')" }}
```

### 4. Hakkımızda Sayfası

**Dosya:** `app/hakkimizda/page.tsx`

Hero bölümüne arka plan:

```tsx
<Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{ backgroundImage: "url('/images/about-us.jpg')" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <h1 className="heading-1 mb-6">Hakkımızda</h1>
    <p className="text-xl text-primary-100">...</p>
  </div>
</Section>
```

### 5. Blog Kartları

**Dosya:** `app/blog/page.tsx`

```tsx
<Card className="h-full group cursor-pointer overflow-hidden">
  {/* Blog Image */}
  <div className="relative h-48 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
      style={{ backgroundImage: `url('/images/blog/${post.slug.current}.jpg')` }}
    ></div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

    {/* Category Badge */}
    <div className="absolute top-4 left-4">
      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
        {post.category}
      </span>
    </div>
  </div>

  {/* Blog Content */}
  <div className="p-6">
    <h3 className="text-xl font-bold">{post.title}</h3>
    {/* ... */}
  </div>
</Card>
```

### 6. Testimonials (Başarı Hikayeleri)

**Dosya:** `components/home/TestimonialsSection.tsx`

Öğrenci fotoğrafları eklemek için:

```tsx
<Card className="h-full relative">
  {/* Student Photo */}
  <div className="flex items-center gap-4 mb-4">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/images/students/${testimonial.id}.jpg')` }}
      ></div>
    </div>
    <div>
      <div className="font-semibold text-gray-900">{testimonial.name}</div>
      <div className="text-sm text-primary-600">{testimonial.university}</div>
    </div>
  </div>

  {/* Testimonial Content */}
  <p className="text-gray-700 italic">"{testimonial.content}"</p>
</Card>
```

### 7. Partner Üniversiteler

**Dosya:** `components/home/UniversitiesSection.tsx`

Üniversite logoları için:

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {universities.map((university, index) => (
    <div key={university.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-20 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/universities/${university.name.toLowerCase()}.jpg')` }}
      ></div>
    </div>
  ))}
</div>
```

### 8. Next.js Image Component Kullanımı (Önerilen)

Daha iyi performans için Next.js Image component kullanın:

```tsx
import Image from 'next/image';

// 1. Statik Import
import heroImage from '@/public/images/hero-bg.jpg';

<Image
  src={heroImage}
  alt="Yurtdışı Eğitim"
  fill
  className="object-cover opacity-20"
  priority
/>

// 2. Dinamik Path
<Image
  src="/images/student-success.jpg"
  alt="Başarılı Öğrenci"
  width={800}
  height={800}
  className="rounded-2xl"
/>
```

## 🎨 CSS Stilleri

### Parallax Efekti
```tsx
<div
  className="fixed inset-0 bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
></div>
```

### Hover Zoom Efekti
```tsx
<div className="relative overflow-hidden rounded-xl">
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
    style={{ backgroundImage: "url('/images/service.jpg')" }}
  ></div>
</div>
```

### Blur Arka Plan
```tsx
<div
  className="absolute inset-0 bg-cover bg-center blur-sm"
  style={{ backgroundImage: "url('/images/background.jpg')" }}
></div>
```

### Gradient Overlay (Metni Okunabilir Yapmak İçin)
```tsx
{/* Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero.jpg')" }}
></div>

{/* Dark Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

{/* Content */}
<div className="relative z-10 text-white">
  <h1>Metin Buraya</h1>
</div>
```

## 📊 Önerilen Görsel Boyutları

| Kullanım Yeri | Boyut | Oran |
|---------------|-------|------|
| Hero Background | 1920x1080 | 16:9 |
| Card Background | 800x600 | 4:3 |
| Blog Thumbnail | 600x400 | 3:2 |
| Square Image | 800x800 | 1:1 |
| Wide Banner | 1200x400 | 3:1 |
| Avatar/Profile | 200x200 | 1:1 |
| Logo | 300x100 | 3:1 |

## 🚀 Performans İpuçları

1. **WebP/AVIF Format:** JPG'leri WebP/AVIF'e dönüştürün (daha küçük dosya boyutu)
2. **Sıkıştırma:** TinyPNG, Squoosh gibi araçlarla optimize edin
3. **Lazy Loading:** `loading="lazy"` attribute kullanın
4. **Responsive Images:** Farklı ekran boyutları için farklı çözünürlükler
5. **CDN:** Cloudinary, ImgIX gibi image CDN kullanın

## 📝 Örnek Kod Bloğu (Tüm Özellikler)

```tsx
<div className="relative h-96 overflow-hidden rounded-2xl group">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
    style={{ backgroundImage: "url('/images/example.jpg')" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* Blur Effect on Hover */}
  <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
    <h3 className="text-3xl font-bold mb-2">Başlık</h3>
    <p className="text-gray-200">Açıklama metni buraya gelir.</p>
  </div>
</div>
```

## 🎯 Hızlı Başlangıç

1. JPG resimlerinizi `/public/images/` klasörüne yerleştirin
2. Yukarıdaki örnekleri kopyalayın
3. Dosya yollarını kendi resimlerinize göre güncelleyin
4. `npm run dev` ile test edin

---

**Not:** Tüm görsel yolları `/images/` ile başlar çünkü `public` klasörü Next.js'de root directory'dir.
