# 🖼️ Görsel Eşleştirme Rehberi

## Mevcut Görseller ve Kullanım Yerleri

### 📁 public/images/ Klasöründeki Görseller:

1. **zhanhui-li-1iuxWsIZ6ko-unsplash.jpg** (7.3 MB)
   - ✅ **Kullanıldı:** Ana sayfa Hero Section arka planı
   - Kampüs/Üniversite binası görseli

2. **pexels-george-pak-7972980.jpg** (3.1 MB)
   - ✅ **Kullanıldı:** Ana sayfa Hero Section sağ taraf
   - Öğrenci başarı görseli

3. **richard-vance-cabusao-adQAb-L-YkE-unsplash.jpg** (5.9 MB)
   - 🔄 **Önerilen:** Üniversite Başvurusu sayfası
   - Dosya: `app/universite-basvurusu/page.tsx`

4. **emily-karakis-T-tVt4xsCdE-unsplash.jpg** (4.1 MB)
   - 🔄 **Önerilen:** Vize Danışmanlığı sayfası
   - Dosya: `app/vize-danismanligi/page.tsx`

5. **adrien-olichon-z8XO8BfqpYc-unsplash.jpg** (3.9 MB)
   - 🔄 **Önerilen:** Dil Eğitimi sayfası
   - Dosya: `app/dil-egitimi/page.tsx`

6. **camilo-botia-k4vFDPJoDZk-unsplash.jpg** (1.6 MB)
   - 🔄 **Önerilen:** Hakkımızda sayfası
   - Dosya: `app/hakkimizda/page.tsx`

7. **wonderlane-6zlgM-GUd6I-unsplash.jpg** (2.0 MB)
   - 🔄 **Önerilen:** Blog sayfası header
   - Dosya: `app/blog/page.tsx`

8. **pexels-shanerich5-34331045.jpg** (1.0 MB)
   - 🔄 **Önerilen:** İletişim sayfası
   - Dosya: `app/iletisim/page.tsx`

## 🔧 Hızlı Uygulama Kodları

### Ana Sayfa Hero (✅ Tamamlandı)
```tsx
// components/home/HeroSection.tsx
<div className="absolute inset-0 bg-[url('/images/zhanhui-li-1iuxWsIZ6ko-unsplash.jpg')] bg-cover bg-center opacity-20"></div>
```

### Üniversite Başvurusu Sayfası
```tsx
// app/universite-basvurusu/page.tsx
// Hero bölümündeki görsel konteynerinde:
<div
  className="absolute inset-0 bg-cover bg-center opacity-60"
  style={{ backgroundImage: "url('/images/richard-vance-cabusao-adQAb-L-YkE-unsplash.jpg')" }}
></div>
```

### Vize Danışmanlığı Sayfası
```tsx
// app/vize-danismanligi/page.tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-60"
  style={{ backgroundImage: "url('/images/emily-karakis-T-tVt4xsCdE-unsplash.jpg')" }}
></div>
```

### Dil Eğitimi Sayfası
```tsx
// app/dil-egitimi/page.tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-60"
  style={{ backgroundImage: "url('/images/adrien-olichon-z8XO8BfqpYc-unsplash.jpg')" }}
></div>
```

### Hakkımızda Sayfası
```tsx
// app/hakkimizda/page.tsx
// Hero bölümüne ekleyin:
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/images/camilo-botia-k4vFDPJoDZk-unsplash.jpg')" }}
></div>
```

### Blog Sayfası
```tsx
// app/blog/page.tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/images/wonderlane-6zlgM-GUd6I-unsplash.jpg')" }}
></div>
```

### İletişim Sayfası
```tsx
// app/iletisim/page.tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/images/pexels-shanerich5-34331045.jpg')" }}
></div>
```

## 📋 Uygulama Kontrol Listesi

- [x] Ana Sayfa Hero - zhanhui-li-1iuxWsIZ6ko-unsplash.jpg
- [x] Ana Sayfa Sağ - pexels-george-pak-7972980.jpg
- [ ] Üniversite Başvurusu - richard-vance-cabusao-adQAb-L-YkE-unsplash.jpg
- [ ] Vize Danışmanlığı - emily-karakis-T-tVt4xsCdE-unsplash.jpg
- [ ] Dil Eğitimi - adrien-olichon-z8XO8BfqpYc-unsplash.jpg
- [ ] Hakkımızda - camilo-botia-k4vFDPJoDZk-unsplash.jpg
- [ ] Blog - wonderlane-6zlgM-GUd6I-unsplash.jpg
- [ ] İletişim - pexels-shanerich5-34331045.jpg

## ⚡ Toplu Güncelleme Komutu

Tüm sayfaları güncellemek için yukarıdaki kod bloklarını ilgili dosyalara ekleyin.

---

**Not:** Tüm görseller optimize edilmiş olarak yüklenmiştir. WebP formatına dönüştürmek isterseniz:
```bash
npm install sharp
# Sonra bir conversion script çalıştırın
```
