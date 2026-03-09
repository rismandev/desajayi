# Website Desa Jayi

Website statis modern untuk Desa/Kelurahan yang dibangun dengan TailwindCSS. Template ini menyediakan semua fitur essential yang dibutuhkan untuk website pemerintahan desa.

## 🚀 Fitur

### Halaman Utama (index.html)
- **Beranda** - Hero section dengan informasi desa
- **Profil Desa** - Visi, misi, dan sejarah desa
- **Struktur Organisasi** - Tabel struktur pemerintahan desa
- **Layanan** - Daftar layanan yang tersedia untuk warga
- **Berita & Pengumuman** - Preview berita terbaru dengan search
- **Agenda Kegiatan** - Jadwal acara dan kegiatan desa
- **Dokumen** - Dokumen-dokumen penting yang dapat diunduh
- **Kontak** - Informasi kontak dan peta lokasi kantor desa
- **Form Pengaduan** - Integrasi WhatsApp untuk pengaduan warga

### Halaman Berita (berita.html)
- **12 Artikel** - Berita, pengumuman, dan kegiatan lengkap
- **Filter Kategori** - Filter berdasarkan Semua, Pengumuman, Berita, Kegiatan
- **Search Bar** - Pencarian real-time berdasarkan judul dan konten
- **Counter Dinamis** - Menampilkan jumlah artikel yang sesuai filter

## 🛠️ Teknologi

- **TailwindCSS v3** - Framework CSS utility-first
- **AOS (Animate On Scroll)** - Library animasi scroll
- **Vanilla JavaScript** - Tanpa framework JS, pure ES6+
- **Google Maps Embed** - Integrasi peta lokasi
- **WhatsApp Integration** - Form pengaduan via WhatsApp

## 📁 Struktur File

```
desajayi/
├── index.html          # Halaman utama
├── berita.html         # Halaman berita & pengumuman
├── main.js            # Script untuk index.html
├── berita.js          # Script untuk berita.html
└── README.md          # Dokumentasi project
```

## 🎨 Desain

- **Mobile-First** - Dirancang untuk mobile terlebih dahulu
- **Responsive** - Tampilan optimal di semua ukuran layar
- **Accessible** - Mengikuti best practice accessibility
- **Modern UI** - Design clean dan profesional dengan brand color cyan/sky

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Cara Menggunakan

### 1. Download/Clone Project
```bash
git clone <repository-url>
cd desajayi
```

### 2. Buka di Browser
Cukup buka file `index.html` di browser:
```bash
open index.html
# atau
# Windows: start index.html
# Linux: xdg-open index.html
```

### 3. Live Server (Opsional)
Untuk development dengan live reload, gunakan:

**VS Code:**
- Install extension "Live Server"
- Klik kanan pada `index.html` → "Open with Live Server"

**Python:**
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

**Node.js:**
```bash
npx serve
# atau
npx http-server
```

## ⚙️ Customisasi

### 1. Mengubah Nama Desa
Cari dan ganti "Desa Jayi" dengan nama desa Anda di:
- `index.html`
- `berita.html`

### 2. Mengubah Warna Brand
Edit file JavaScript atau tambahkan custom CSS:
```css
:root {
  --brand-50: #f0f9ff;
  --brand-600: #0284c7;
  --brand-700: #0369a1;
  --brand-800: #075985;
}
```

Atau gunakan TailwindCSS config jika kompilasi dari source.

### 3. Mengganti Konten

#### Profil Desa
Edit section dengan `id="profil"` di `index.html`

#### Struktur Organisasi
Edit tabel di section `id="profil"` (scroll ke bagian struktur)

#### Layanan
Edit grid cards di section `id="layanan"`

#### Berita
- Index: Edit articles di section `id="berita"`
- Berita page: Edit articles di `berita.html` dengan attribute `data-category`

#### Agenda
Edit cards di section `id="agenda"`

#### Dokumen
Edit list items di section `id="dokumen"`

### 4. Mengubah Google Maps
Ganti URL embed di section kontak:
1. Buka [Google Maps](https://maps.google.com)
2. Cari lokasi kantor desa
3. Klik "Share" → "Embed a map"
4. Copy HTML code
5. Ganti URL di `<iframe src="...">`

### 5. Mengubah Nomor WhatsApp
Edit link WhatsApp di section kontak:
```html
<a href="https://wa.me/6281234567890?text=..." ...>
```
Ganti `6281234567890` dengan nomor WhatsApp kantor desa (format: kode negara + nomor tanpa 0 di depan)

## 📝 Menambah Konten

### Menambah Berita Baru (index.html)
```html
<article class="rounded-xl border border-slate-200 bg-white p-5">
  <span class="inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
    Berita
  </span>
  <p class="mt-3 text-xs text-slate-500">Tanggal</p>
  <h3 class="mt-2 text-base font-semibold text-slate-900">Judul Berita</h3>
  <p class="mt-2 text-sm text-slate-600">Ringkasan berita...</p>
  <a href="berita.html" class="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 hover:underline">
    Baca Selengkapnya
  </a>
</article>
```

### Menambah Berita di Halaman Berita (berita.html)
```html
<article class="berita-item rounded-xl border border-slate-200 bg-white p-5" data-category="berita">
  <!-- Konten sama seperti di atas -->
</article>
```

**Kategori yang tersedia:**
- `data-category="pengumuman"` - Badge orange
- `data-category="berita"` - Badge blue
- `data-category="kegiatan"` - Badge green

### Menambah Layanan
```html
<div class="rounded-xl border border-slate-200 bg-white p-5">
  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100">
    <svg><!-- Icon SVG --></svg>
  </div>
  <h3 class="mt-4 text-base font-semibold text-slate-900">Nama Layanan</h3>
  <p class="mt-2 text-sm text-slate-600">Deskripsi layanan...</p>
</div>
```

### Menambah Agenda
```html
<div class="rounded-xl border border-slate-200 bg-white p-5">
  <div class="flex items-start justify-between">
    <div class="flex-1">
      <h3 class="text-base font-semibold text-slate-900">Nama Kegiatan</h3>
      <p class="mt-1 text-sm text-slate-600">Deskripsi...</p>
    </div>
    <div class="ml-4 text-right">
      <div class="text-2xl font-bold text-brand-700">15</div>
      <div class="text-xs text-slate-500">Mar 2026</div>
    </div>
  </div>
</div>
```

## 🎯 Fitur JavaScript

### main.js (index.html)
- **Dynamic Offset Calculation** - Menghitung offset header secara dinamis
- **Smooth Scroll** - Scroll halus ke section dengan offset yang tepat
- **Mobile Menu** - Toggle menu mobile dengan auto-close
- **Search Filter** - Filter berita berdasarkan judul/konten
- **Hash Navigation** - Navigasi dengan URL hash (#beranda, #profil, dll)
- **Resize Observer** - Monitor perubahan tinggi header

### berita.js (berita.html)
- **Category Filter** - Filter berita berdasarkan kategori
- **Search Filter** - Pencarian real-time
- **Empty State** - Tampilan ketika tidak ada hasil
- **Counter** - Update jumlah artikel yang ditampilkan

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Tips Deployment

### GitHub Pages
1. Push code ke GitHub repository
2. Settings → Pages → Source: main branch
3. Website akan tersedia di `https://username.github.io/repository-name`

### Netlify
1. Drag & drop folder ke [Netlify Drop](https://app.netlify.com/drop)
2. Atau connect dengan Git repository

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting (cPanel, WHM, dll)
1. Zip semua file
2. Upload ke public_html atau www folder
3. Extract file
4. Akses via domain

## 📞 Support & Customization

Untuk customization lebih lanjut atau bantuan teknis, silakan hubungi developer atau buka issue di repository.

## 📄 License

Template ini dapat digunakan secara bebas untuk website desa/kelurahan. Tidak ada batasan penggunaan komersial maupun non-komersial.

## ✨ Credits

- **TailwindCSS** - https://tailwindcss.com
- **AOS** - https://michalsnik.github.io/aos/
- **Heroicons** - Icon set yang digunakan

---

**Dibuat untuk Pemerintah Desa Jayi** © 2026
