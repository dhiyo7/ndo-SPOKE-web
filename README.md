# ⚡ ndo-SPOKE Landing Page ⚡

Situs pendaratan (_landing page_) resmi bertema **Brutalist Modern** untuk **ndo-SPOKE** — Aplikasi Asisten Rapat Asinkron Native berbasis AI dengan pemrosesan audio dual-stream lokal dan pembuatan Minutes of Meeting (MoM) otomatis yang aman dan privat.

[Official Release](https://github.com/dhiyo7/ndo-SPOKE/releases/tag/ndo-spoke-v1.0.0)

---

## 🚀 Fitur Unggulan Situs

Situs ini dikembangkan dengan fokus penuh pada estetika visual brutalist yang memukau (_WOW factor_), interaktivitas dinamis, serta kinerja performa statis yang cepat (siap dideploy ke layanan seperti Netlify):

- **🎨 Desain Brutalist Premium**: Menggunakan tipografi modern, garis pembatas tebal yang tegas, bayangan solid, warna merah jambu aksen kontras (`#FFC0CB`), dan tekstur grain (_noise overlay_) bergaya Risograph.
- **🤖 Integrasi GitHub Issue Client-Side**: Pengiriman umpan balik (feedback) atau laporan bug langsung dari form kontak situs ke repositori GitHub via **Axios**. Tanpa memerlukan proxy server backend terpisah, mempermudah deployment statis.
- **📥 Pusat Unduhan Cerdas (Download Hub)**:
  - Mendeteksi sistem operasi pengunjung secara otomatis (Windows, macOS, Linux) dan memberikan penanda khusus "Recommended".
  - Mendukung semua format rilis: Windows (`.exe` installer), macOS (Universal DMG untuk Apple Silicon M1/M2/M3 & Intel), serta Linux (paket Debian `.deb`, RedHat `.rpm`, dan `.AppImage` portabel).
- **📖 Panduan Instalasi Interaktif**: Menyediakan instruksi instalasi langkah demi langkah per platform yang responsif dengan tombol salin perintah terminal (_Copy-to-Clipboard_) sekali klik.
- **🔝 Tombol Layang "Back to Top"**: Tombol apung dinamis bertema brutalist yang otomatis muncul saat halaman digulirkan ke bawah dan memiliki animasi perpindahan halus.

---

## 🛠️ Teknologi & Pustaka (_Tech Stack_)

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (Sangat ringan dan modern)
- **Animations**: Framer Motion (Menghadirkan micro-interactions dan perpindahan tab yang mulus)
- **Icons**: Lucide React
- **HTTP Client**: Axios (Untuk integrasi API GitHub)

---

## 💻 Menjalankan Secara Lokal

### Prasyarat:

- [Node.js](https://nodejs.org/) (Versi 18 ke atas direkomendasikan)
- NPM (Bawaan Node.js)

### Langkah-langkah:

1.  **Clone Repositori**:

    ```bash
    git clone https://github.com/dhiyo7/ndo-SPOKE.git
    cd ndo-spoke
    ```

2.  **Instalasi Dependensi**:

    ```bash
    npm install
    ```

3.  **Jalankan Server Lokal**:
    ```bash
    npm run dev
    ```
    Buka peramban (browser) Anda dan akses alamat: `http://localhost:3000`

---

## 📦 Kompilasi & Verifikasi Kode

- **Pengecekan Tipe Data (Linting)**:
  ```bash
  npm run lint
  ```
- **Kompilasi Bundle Produksi (Build)**:
  ```bash
  npm run build
  ```

---

## 🔒 Kebijakan Privasi & Keamanan

Aplikasi **ndo-SPOKE** sepenuhnya mengutamakan privasi Anda. Semua data rekaman audio dan Minutes of Meeting (MoM) disimpan secara lokal di dalam database komputer pengguna tanpa diunggah ke server pihak ketiga mana pun. Pengguna memegang kendali penuh atas penggunaan kunci API AI mereka sendiri.

---

<div align="center">
Dibuat dengan 💖 untuk mendukung efisiensi rapat profesional Anda.
</div>
