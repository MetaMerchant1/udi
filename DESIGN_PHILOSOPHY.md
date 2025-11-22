# Tasarım Anlayışı ve Görsel Dil Rehberi
## EğitimDanışmanlık | Eğitim Danışmanlık Web Sitesi

**Versiyon:** 1.0
**Son Güncelleme:** 20 Kasım 2025
**Teknoloji:** Next.js 15.5 + React 19 + Tailwind CSS 4.1

---

## 📖 İçindekiler

1. [Tasarım Felsefesi](#tasarım-felsefesi)
2. [Renk Paleti](#renk-paleti)
3. [Tipografi Sistemi](#tipografi-sistemi)
4. [Spacing & Layout](#spacing--layout)
5. [Component Patterns](#component-patterns)
6. [Visual Effects](#visual-effects)
7. [Animasyon İlkeleri](#animasyon-ilkeleri)
8. [Design Tokens](#design-tokens)
9. [Best Practices](#best-practices)

---

## 🎨 Tasarım Felsefesi

### Marka Kimliği

**EğitimDanışmanlık**, öğrencilerin akademik ve kişisel gelişiminde 25+ yıllık deneyimiyle güvenilir bir rehberdir. Tasarım anlayışımız bu değerleri yansıtır:

#### Temel Değerler
- **Güven ve Profesyonellik**: Eğitim sektöründe güvenilirlik
- **Modern ve Erişilebilir**: Genç nesle hitap eden çağdaş tasarım
- **Heyecan ve Motivasyon**: Öğrencileri motive eden dinamik görsel dil
- **Şeffaflık ve Açıklık**: Net, anlaşılır bilgi sunumu

### Görsel Dil Özeti

```
🔵 Primary: Mavi (Güven, Eğitim, Profesyonellik)
⚪ Secondary: Neutral Gri (Sofistike, Temiz)
🌈 Accents: Renkli Gradientler (Enerji, Çeşitlilik)
✨ Effects: Glassmorphism, Smooth Animations
```

### Kullanıcı Deneyimi İlkeleri

1. **Mobile-First**: %60+ mobil kullanıcı için optimize tasarım
2. **Hızlı Yükleme**: Performans öncelikli, optimize edilmiş görseller
3. **Açık Hiyerarşi**: Bilgi akışı net ve mantıklı
4. **Erişilebilirlik**: WCAG 2.1 AA standartlarına uygun
5. **Progressive Enhancement**: Temel işlevsellik herkese, gelişmiş özellikler desteklenen tarayıcılarda

---

## 🎨 Renk Paleti

### Primary Colors (Ana Mavi Paleti)

Eğitim sektörünün güvenilirliğini ve profesyonelliğini temsil eden mavi tonları:

```css
--color-primary-50:  #eff6ff   /* Çok açık mavi - arka planlar */
--color-primary-100: #dbeafe   /* Açık mavi - badge, pill */
--color-primary-200: #bfdbfe   /* Hafif mavi - subtle accent */
--color-primary-600: #1e40af   /* Ana marka mavisi - CTA, linkler */
--color-primary-700: #1e3a8a   /* Koyu mavi - hover durumu */
--color-primary-800: #1e3a8a   /* Daha koyu - gradient */
```

**Kullanım Alanları:**
- `primary-600`: Ana butonlar, linkler, marka rengi
- `primary-700`: Hover durumları, vurgu
- `primary-100`: Badge, pill, hafif arka planlar
- `primary-50`: Çok hafif section arka planları

### Secondary Colors (Neutral Gri)

Temiz, profesyonel görünüm için nötr tonlar:

```css
--color-gray-50:  #f9fafb   /* Off-white arka plan */
--color-gray-100: #f3f4f6   /* Çok açık gri section */
--color-gray-200: #e5e7eb   /* Border, divider */
--color-gray-600: #4b5563   /* Body text */
--color-gray-700: #374151   /* Vurgu metni */
--color-gray-900: #111827   /* Başlıklar, footer */
```

**Kullanım Alanları:**
- `gray-900`: H1, H2 başlıklar, footer arka plan
- `gray-700`: Önemli body text
- `gray-600`: Standart body text
- `gray-500`: İkincil bilgi, caption
- `gray-100`: Alternatif section arka planı
- `gray-50`: Hafif section arka planı

### Accent Colors (Vurgu Renkleri)

Farklı hizmetleri ve kategorileri ayırt etmek için kullanılan canlı renkler:

```css
/* Her hizmet için özel renk */
Mavi (blue):      Akademik, Üniversite
Yeşil (green):    Başarı, Onay, Doğruluk
Sarı (yellow):    Yetenek, Ödül, Dikkat
Kırmızı (red):    Hata, Önemli uyarı
Mor (purple):     Yaratıcılık, Liderlik
Turuncu (orange): Enerji, Sınav
Pembe (pink):     Motivasyon, Koçluk
Cyan (cyan):      İletişim, Teknoloji
```

**Icon Container Renkleri:**
```tsx
bg-blue-100 text-blue-600      // Akademik konular
bg-green-100 text-green-600    // Başarı, ilerleme
bg-yellow-100 text-yellow-600  // Yetenek, ödül
bg-purple-100 text-purple-600  // Liderlik, yaratıcılık
bg-pink-100 text-pink-600      // Motivasyon, koçluk
bg-cyan-100 text-cyan-600      // İletişim, dil
```

### Gradient Sistemi

Dinamik ve çekici görsel efektler için gradient kullanımı:

#### Ana Marka Gradientleri
```tsx
// Hero section gradient overlay
bg-gradient-to-br from-primary-600 to-primary-800

// Transparent overlay (resim üzerinde)
bg-gradient-to-br from-primary-600/95 to-primary-800/95
bg-gradient-to-r from-gray-900/80 to-gray-900/60

// CTA section
bg-gradient-to-br from-primary-600 to-primary-800
```

#### Icon/Decorative Gradientler
```tsx
from-blue-500 to-cyan-500          // Teknoloji, iletişim
from-purple-500 to-pink-500        // Yaratıcılık, liderlik
from-yellow-500 to-orange-500      // Enerji, başarı
from-green-500 to-emerald-500      // Doğa, büyüme
from-indigo-500 to-blue-500        // Bilgi, akademik
```

### Renk Kullanım Kuralları

✅ **DO (Yapılması Gerekenler)**
- Primary blue'yu CTA ve önemli aksiyonlarda kullan
- Gri tonları hiyerarşi oluşturmak için kullan
- Accent renkleri farklı kategorileri ayırt etmek için kullan
- Gradient overlays ile text readability sağla

❌ **DON'T (Yapılmaması Gerekenler)**
- Çok fazla accent rengi aynı anda kullanma (max 3)
- Primary blue'yu decorative amaçla gereksiz kullanma
- Düşük contrast kombinasyonları kullanma
- Gradient'leri body text üzerinde kullanma

---

## ✍️ Tipografi Sistemi

### Font Ailesi

```tsx
Font: Inter (Google Fonts)
Fallback: system-ui, sans-serif
```

**Inter** modern, okunabilir ve profesyonel bir sans-serif font. Eğitim içerikleri için ideal.

**Özellikleri:**
- Yüksek x-height (küçük harfler büyük)
- Açık letterform'lar (okunabilirlik)
- Mükemmel hinting (ekran renderı)
- Geniş karakter desteği (Türkçe dahil)

### Başlık Hiyerarşisi

#### H1 - Ana Başlık (Hero)
```tsx
className="heading-1"
// Responsive scale:
text-4xl sm:text-5xl lg:text-6xl
font-bold
leading-tight
mb-6
```
**Kullanım:** Hero section, sayfa ana başlıkları
**Boyut:** 36px → 48px → 60px

#### H2 - Section Başlığı
```tsx
className="heading-2"
// Responsive scale:
text-3xl sm:text-4xl
font-bold
text-gray-900
mb-4
```
**Kullanım:** Bölüm başlıkları
**Boyut:** 30px → 36px

#### H3 - Alt Bölüm Başlığı
```tsx
text-2xl font-bold text-gray-900 mb-3
```
**Kullanım:** Card başlıkları, alt başlıklar
**Boyut:** 24px

#### H4 - Küçük Başlık
```tsx
text-xl font-bold text-gray-900 mb-2
```
**Kullanım:** Liste başlıkları, küçük card başlıkları
**Boyut:** 20px

### Body Text Stilleri

#### Lead Paragraph (Giriş metni)
```tsx
text-xl text-gray-100 mb-8              // Hero'da
text-lg text-gray-600 max-w-2xl mx-auto // Section'da
```
**Kullanım:** Hero alt metni, section intro
**Boyut:** 18-20px

#### Standard Body
```tsx
text-base text-gray-700
prose prose-lg         // Long-form content için
```
**Kullanım:** Ana içerik metni
**Boyut:** 16px (base)

#### Small Text
```tsx
text-sm text-gray-600
```
**Kullanım:** İkincil bilgi, meta data
**Boyut:** 14px

#### Caption / Label
```tsx
text-xs text-gray-500
```
**Kullanım:** Küçük notlar, tarih, etiket
**Boyut:** 12px

### Font Weights

```tsx
font-bold      // 700 - Başlıklar, CTA
font-semibold  // 600 - Alt başlıklar, button
font-medium    // 500 - Navigation, label
font-normal    // 400 - Body text (default)
```

### Text Shadows (Okunabilirlik için)

```tsx
// Hero section - resim üzerinde text
style={{
  textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)'
}}

// Daha güçlü shadow (çok açık resimler için)
style={{
  textShadow: '0 2px 30px rgba(0,0,0,0.9), 0 4px 60px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.8)'
}}
```

### Tipografi Kuralları

✅ **DO**
- Hero başlıklarında bold kullan (font-bold)
- Body text için gray-700 veya gray-600 kullan
- Lead paragraph için daha büyük font (text-lg veya text-xl)
- Responsive font boyutları kullan (text-4xl sm:text-5xl)

❌ **DON'T**
- Çok fazla font weight varyasyonu kullanma
- ALL CAPS başlıkları body text boyutunda kullanma
- Resim üzerinde shadow olmadan text kullanma
- 3'ten fazla font size kullanma (bir component'te)

---

## 📐 Spacing & Layout

### Container Sistemi

#### Primary Container
```tsx
// components/shared/Container.tsx
mx-auto max-w-7xl px-4 sm:px-6 lg:px-8

Max Width: 1280px (7xl)
Padding:   16px (mobile) → 24px (tablet) → 32px (desktop)
```

#### Narrow Container (İçerik sayfaları için)
```tsx
max-w-4xl mx-auto  // 896px - Long-form content
max-w-3xl mx-auto  // 768px - Centered sections
max-w-2xl mx-auto  // 672px - Dar content
```

### Section Structure

#### Standard Section
```tsx
// components/shared/Section.tsx
py-16 sm:py-20 lg:py-24

Vertical Padding: 64px → 80px → 96px
```

#### Section Backgrounds
```tsx
bg-white           // Beyaz arka plan
bg-gray-50         // Hafif gri (alternating)
bg-gradient-to-br from-primary-600 to-primary-800  // Gradient
```

### Grid Sistemi

#### Responsive Grid Patterns
```tsx
// 1 column → 2 columns → 3 columns
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

// 2 column responsive
grid lg:grid-cols-2 gap-8 lg:gap-12

// 4 column stats
grid grid-cols-2 md:grid-cols-4 gap-8
```

### Spacing Scale

#### Vertical Spacing
```tsx
// Margins (mb - margin bottom)
mb-2   // 8px  - Tight spacing
mb-3   // 12px - Small spacing
mb-4   // 16px - Default spacing
mb-6   // 24px - Medium spacing
mb-8   // 32px - Large spacing
mb-12  // 48px - Extra large
mb-16  // 64px - Section spacing

// Padding (py - vertical padding)
py-2   // 8px  - Small
py-4   // 16px - Medium
py-6   // 24px - Large
py-16  // 64px - Section padding (mobile)
py-20  // 80px - Section padding (tablet)
py-24  // 96px - Section padding (desktop)
```

#### Horizontal Spacing
```tsx
px-4   // 16px - Mobile container padding
px-6   // 24px - Tablet container padding
px-8   // 32px - Desktop container padding

gap-4  // 16px - Tight grid/flex gap
gap-6  // 24px - Medium gap
gap-8  // 32px - Large gap (default)
gap-12 // 48px - Extra large gap
```

#### Stack Spacing (Between children)
```tsx
space-y-2  // 8px  - Tight vertical stack
space-y-4  // 16px - Medium stack
space-y-6  // 24px - Large stack
space-y-8  // 32px - Extra large stack
```

### Responsive Breakpoints

```tsx
base   // 0px    - Mobile (default)
sm:    // 640px  - Large mobile/small tablet
md:    // 768px  - Tablet
lg:    // 1024px - Laptop
xl:    // 1280px - Desktop
2xl:   // 1536px - Large desktop
```

**Mobile-First Approach:**
```tsx
// ✅ DOĞRU: Mobile-first (base → up)
text-4xl sm:text-5xl lg:text-6xl

// ❌ YANLIŞ: Desktop-first
lg:text-6xl md:text-5xl text-4xl
```

### Layout Patterns

#### 2-Column Layout (Text + Image)
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>{/* Text content */}</div>
  <div>{/* Image */}</div>
</div>
```

#### 3-Column Service Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map(service => (
    <Card key={service.id}>...</Card>
  ))}
</div>
```

#### Stats Display (4-Column)
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map(stat => (
    <div className="text-center">...</div>
  ))}
</div>
```

---

## 🧩 Component Patterns

### Button Component

**Dosya:** `components/shared/Button.tsx`

#### Primary Button
```tsx
<Button size="lg">
  Ücretsiz Danışmanlık Alın
</Button>

// Styles:
bg-white/30 backdrop-blur-md
border-2 border-white/60
text-white
hover:bg-white/40
shadow-[0_4px_20px_rgba(0,0,0,0.4)]
hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
transform hover:scale-105 active:scale-95
```

#### Solid Button (Alternative)
```tsx
<button className="
  bg-primary-600 text-white
  hover:bg-primary-700
  px-8 py-4 rounded-lg
  transition-all duration-300
  transform hover:scale-105 active:scale-95
  shadow-lg hover:shadow-xl
">
  İletişime Geç
</button>
```

#### Button Sizes
```tsx
size="sm"  // px-4 py-2 text-sm
size="md"  // px-6 py-3 text-base (default)
size="lg"  // px-8 py-4 text-lg
```

#### Button with Icons
```tsx
<Button size="lg">
  <Phone className="mr-2 h-5 w-5" />
  Ara
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

### Card Component

**Dosya:** `components/shared/Card.tsx`

#### Standard Card
```tsx
<Card className="h-full">
  {/* Content */}
</Card>

// Styles:
rounded-xl bg-white p-6
shadow-lg
transition-all duration-300
hover:shadow-xl hover:-translate-y-1
```

#### Card without Hover
```tsx
<Card hover={false}>
  {/* Content */}
</Card>
```

#### Service Card Pattern
```tsx
<Card className="text-center">
  {/* Icon */}
  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
    <Icon className="h-8 w-8" />
  </div>

  {/* Title */}
  <h3 className="text-lg font-bold text-gray-900 mb-3">
    Service Title
  </h3>

  {/* Description */}
  <p className="text-gray-600 text-sm">
    Description text
  </p>
</Card>
```

### Badge/Pill Component

#### Small Badge (Hero section)
```tsx
<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/40">
  <Icon className="h-5 w-5" />
  <span className="text-sm font-medium">Label</span>
</div>
```

#### Section Badge
```tsx
<span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
  Section Label
</span>
```

#### Category Badge
```tsx
<span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
  Category
</span>
```

### Icon Containers

#### Small Circular Icon
```tsx
<div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
  <Icon className="h-6 w-6" />
</div>
```

#### Large Icon with Gradient
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
  <Icon className="h-8 w-8 text-white" />
</div>
```

#### Glassmorphism Icon Container
```tsx
<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] rounded-2xl shadow-xl">
  <div className="bg-white rounded-xl h-full flex items-center justify-center">
    <Icon className="h-12 w-12 text-blue-600" />
  </div>
</div>
```

### Form Elements

#### Input Field
```tsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  placeholder="Adınız Soyadınız"
/>
```

#### Textarea
```tsx
<textarea
  rows={4}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
  placeholder="Mesajınız"
/>
```

#### Label
```tsx
<label className="block text-sm font-medium text-gray-700 mb-2">
  İsim
</label>
```

---

## ✨ Visual Effects

### Glassmorphism (Frosted Glass Effect)

Modern ve sofistike görünüm için cam efekti:

```tsx
// Standard Glassmorphism
bg-white/30 backdrop-blur-md
border border-white/40

// Strong Glassmorphism
bg-white/20 backdrop-blur-lg
border-2 border-white/60

// Subtle Glassmorphism
bg-white/10 backdrop-blur-sm
border border-white/30
```

**Kullanım Alanları:**
- Hero section badge'leri
- Overlay card'lar
- Navigation dropdown
- Modal'lar

### Gradient Overlays

Resim üzerinde text okunabilirliği için:

```tsx
// Hero Section Overlay
<div className="absolute inset-0">
  <Image src="/hero.jpg" fill className="object-cover" />
</div>
<div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>

// Dark Overlay (Neutral)
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>

// Bottom Fade
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
```

### Shadow System

#### Card Shadows
```tsx
shadow-sm   // Subtle shadow
shadow-md   // Medium shadow
shadow-lg   // Standard card shadow
shadow-xl   // Hover shadow
shadow-2xl  // Emphasized elements
```

#### Custom Button Shadows
```tsx
shadow-[0_4px_20px_rgba(0,0,0,0.4)]          // Default
hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]    // Hover
```

#### Drop Shadow (Icons)
```tsx
drop-shadow-lg    // Icon shadows
drop-shadow-xl    // Strong icon shadows
```

### Border Radius

```tsx
rounded-sm    // 2px  - Subtle
rounded       // 4px  - Default
rounded-md    // 6px  - Small elements
rounded-lg    // 8px  - Buttons, inputs
rounded-xl    // 12px - Cards
rounded-2xl   // 16px - Large cards
rounded-3xl   // 24px - Hero sections
rounded-full  // 9999px - Circles, pills
```

### Decorative Elements

#### Blur Orbs (Background decoration)
```tsx
<div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>
```

#### Gradient Border Card
```tsx
<div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] rounded-2xl">
  <div className="bg-white rounded-xl p-6">
    {/* Content */}
  </div>
</div>
```

#### Timeline/Process Line
```tsx
<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 -translate-x-1/2"></div>
```

---

## 🎬 Animasyon İlkeleri

### Framer Motion Patterns

#### Fade In from Bottom (En yaygın)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

#### Fade In from Left
```tsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### Fade In from Right
```tsx
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### Staggered Animation (Liste için)
```tsx
transition={{ duration: 0.5, delay: index * 0.1 }}
// Her item 0.1s gecikmeli başlar
```

#### Scale Animation
```tsx
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

### CSS Transition Rules

#### Standard Transitions
```tsx
transition-all duration-300        // Genel transition
transition-colors duration-300     // Sadece renkler
transition-transform duration-300  // Sadece transform
transition-shadow duration-300     // Sadece shadow
```

#### Long Transitions (Smooth effects)
```tsx
transition-all duration-500
transition-transform duration-700  // Image zoom için
```

### Hover Effects

#### Button Hover
```tsx
hover:scale-105 active:scale-95          // Subtle scale
hover:-translate-y-0.5                   // Yukarı kayma
hover:shadow-xl                          // Shadow artışı
hover:bg-primary-700                     // Renk değişimi
```

#### Card Hover
```tsx
hover:shadow-xl hover:-translate-y-1     // Kart yükselme
hover:scale-110                          // Icon içinde scale
```

#### Link Hover
```tsx
hover:text-primary-600                   // Renk değişimi
hover:underline                          // Alt çizgi
group-hover:translate-x-1                // Arrow kayma
```

### Custom Keyframe Animations

**Dosya:** `app/globals.css`

```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(30px, -50px) scale(1.1); }
  66%      { transform: translate(-20px, 20px) scale(0.9); }
}

.animate-blob {
  animation: blob 7s infinite;
}
```

### Animation Best Practices

✅ **DO**
- `viewport={{ once: true }}` kullan (performans için)
- Subtle animasyonlar tercih et (scale: 1.05, translateY: -1)
- Stagger animasyonları liste itemlerde kullan
- Hover'da feedback ver (scale, shadow, color)

❌ **DON'T**
- Çok hızlı animasyon yapma (min 300ms)
- Aşırı scale yapma (max 1.1)
- Her elemana animasyon ekleme (dikkat dağıtır)
- Long duration fade-in kullanma (800ms+)

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 🎯 Design Tokens (Quick Reference)

### Spacing Tokens
```tsx
gap-2   = 8px      mb-2   = 8px      p-2   = 8px
gap-4   = 16px     mb-4   = 16px     p-4   = 16px
gap-6   = 24px     mb-6   = 24px     p-6   = 24px
gap-8   = 32px     mb-8   = 32px     p-8   = 32px
gap-12  = 48px     mb-12  = 48px     p-12  = 48px
```

### Font Size Tokens
```tsx
text-xs   = 12px    font-normal    = 400
text-sm   = 14px    font-medium    = 500
text-base = 16px    font-semibold  = 600
text-lg   = 18px    font-bold      = 700
text-xl   = 20px
text-2xl  = 24px
text-3xl  = 30px
text-4xl  = 36px
text-5xl  = 48px
text-6xl  = 60px
```

### Border Radius Tokens
```tsx
rounded      = 4px
rounded-md   = 6px
rounded-lg   = 8px
rounded-xl   = 12px
rounded-2xl  = 16px
rounded-3xl  = 24px
rounded-full = 9999px
```

### Shadow Tokens
```tsx
shadow-sm  = 0 1px 2px rgba(0,0,0,0.05)
shadow     = 0 1px 3px rgba(0,0,0,0.1)
shadow-md  = 0 4px 6px rgba(0,0,0,0.1)
shadow-lg  = 0 10px 15px rgba(0,0,0,0.1)
shadow-xl  = 0 20px 25px rgba(0,0,0,0.1)
shadow-2xl = 0 25px 50px rgba(0,0,0,0.25)
```

---

## ✅ Best Practices & Guidelines

### Genel Kurallar

#### ✅ DO (Yapılması Gerekenler)

1. **Tutarlılık**
   - Mevcut component'leri kullan (Button, Card, Section)
   - Tasarım sistemindeki renkleri kullan
   - Spacing scale'e uy (4px grid sistemi)

2. **Responsive Design**
   - Mobile-first yaklaşım
   - 3 breakpoint yeterli (sm, md, lg)
   - Touch target minimum 44x44px

3. **Performance**
   - Image'lerde Next.js Image component kullan
   - Lazy load uygula (viewport={{ once: true }})
   - Critical CSS inline yükle

4. **Accessibility**
   - Semantic HTML kullan (header, nav, main, section)
   - Alt text ekle tüm görsellere
   - Focus state'leri belirgin yap
   - Minimum contrast 4.5:1

5. **Content Hierarchy**
   - Tek H1 per page
   - Mantıklı heading sırası (H1 → H2 → H3)
   - Lead paragraph'ları daha büyük yap
   - Whitespace kullan (breathing room)

#### ❌ DON'T (Yapılmaması Gerekenler)

1. **Renk Kullanımı**
   - ❌ Çok fazla accent rengi (max 3 per section)
   - ❌ Primary blue'yu decorative kullanma
   - ❌ Düşük contrast text
   - ❌ Gradient'leri body text üzerinde

2. **Typography**
   - ❌ 3'ten fazla font size aynı component'te
   - ❌ ALL CAPS uzun metinlerde
   - ❌ Çok ince font weight (300 ve altı)
   - ❌ Justify alignment (Türkçe'de kötü görünür)

3. **Layout**
   - ❌ Fixed width container (responsive olmalı)
   - ❌ Çok dar container (<600px body text için)
   - ❌ Tutarsız spacing
   - ❌ Horizontal scroll (mobilde)

4. **Animation**
   - ❌ Aşırı animasyon (dikkat dağıtır)
   - ❌ Çok hızlı transition (<200ms)
   - ❌ Sürekli animasyon (loop)
   - ❌ Parallax (motion sickness risk)

### Component-Specific Guidelines

#### Hero Section
```tsx
✅ Full-bleed image with overlay
✅ Text shadow for readability
✅ Clear CTA button
✅ Stats/trust indicators at bottom
✅ Mobile: Stack content, reduce text size

❌ Video background (performance)
❌ Auto-playing animations
❌ Çok fazla text (max 2 paragraf)
```

#### Card Grid
```tsx
✅ Consistent card heights
✅ Hover effect for interactivity
✅ Icon + Title + Description pattern
✅ 3-column on desktop (lg:grid-cols-3)

❌ Farklı boyutlarda card'lar
❌ Çok fazla bilgi (overload)
❌ Shadow animation (subtle olmalı)
```

#### Button Usage
```tsx
✅ Primary action: Primary blue button
✅ Secondary action: Outline or ghost
✅ Destructive: Red color
✅ Icon + Text for clarity

❌ Çok fazla button (max 2 per section)
❌ Belirsiz text ("Click here")
❌ Çok büyük button (overwhelming)
```

### Code Organization

```tsx
// ✅ DOĞRU: Component dosya yapısı
components/
  shared/          // Reusable components
  layout/          // Layout components (Header, Footer)
  home/            // Page-specific sections

// ✅ DOĞRU: Import sırası
import { motion } from 'framer-motion';  // 3rd party
import Section from '@/components/shared/Section';  // Internal
import { cn } from '@/lib/utils';  // Utils

// ✅ DOĞRU: Tailwind sınıf sırası
className="
  /* Layout */
  flex items-center justify-between
  /* Spacing */
  px-4 py-6 gap-4
  /* Size */
  w-full max-w-7xl
  /* Colors */
  bg-white text-gray-900
  /* Effects */
  rounded-lg shadow-lg
  /* States */
  hover:shadow-xl
  /* Transitions */
  transition-all duration-300
"
```

---

## 📝 Revision History

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| 1.0 | 20 Kasım 2025 | İlk tasarım felsefesi dokümanı oluşturuldu |

---

## 🔗 İlgili Kaynaklar

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Framer Motion Docs:** https://www.framer.com/motion/
- **Next.js Image Optimization:** https://nextjs.org/docs/app/building-your-application/optimizing/images
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

## 💡 Notlar

Bu doküman **living document** olarak tasarlanmıştır. Yeni component'ler ekledikçe, tasarım kararları aldıkça güncellenmelidir.

**Sorumlu:** Frontend Development Team
**Son Güncelleme:** Claude (AI Assistant)
**Geri Bildirim:** Lütfen tasarım sistemiyle ilgili önerileri ekiple paylaşın.

---

**EğitimDanışmanlık** © 2025 | Tüm hakları saklıdır.
