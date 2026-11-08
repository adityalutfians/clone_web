# Notion Web Clone


## Tools yang digunakan

- **Next.js** – Framework untuk pengembangan frontend dan API.
- **Tailwind CSS** – Framework CSS untuk styling.
- **Antigravity IDE (Gemini 3.8)** – Tools AI-assisted development untuk membantu proses pengembangan.
- **Figma** – Digunakan sebagai referensi desain dan visual.
- **Vercel** – Platform untuk deploy website.

## Pendekatan dan Keputusan Teknis

Pengembangan website dilakukan secara bertahap per bagian atau section, dimulai dari navigation bar, hero section, hingga section lainnya. Setiap bagian dibuat dengan memperhatikan struktur dan fungsi terlebih dahulu, kemudian dilakukan penyempurnaan tampilan secara menyeluruh setelah seluruh section selesai.

## Dokumentasi API

### 1. GET `/api/testimonials`

Digunakan untuk mengambil daftar testimonial yang ditampilkan pada website.

**Contoh Response (200 OK):**
```json
{
    "id": "cursor",
    "company": "Cursor",
    "logo": "/images/testimonials/logos/cursor-logo.svg",
    "image": "/images/testimonials/cursor-person.svg",
    "quote": "“Using the most AI-native tools like Notion is an important competitive advantage for us to stay small while doing a lot.”",
    "author": "Michael Truell",
    "role": "Co-founder & CEO",
    "colorTheme": {
        "baseColor": "bg-[#DC2108]/50 mix-blend-multiply",
        "colorGradient": "linear-gradient(180deg, rgba(227, 45, 20, 0.15) 0%, rgba(220, 33, 8, 0.35) 100%)",
        "blackGradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)"
    }
},
```

### 2. POST `/api/newsletter`

Digunakan untuk menerima menerima pendaftaran email pengguna untuk subscription.

**Contoh Response Berhasil (200 OK):**
```json
{
    "success": true,
    "message": "Thank you for subscribing to Notion updates!",
    "data": {
        "email": "abcd@example.com",
        "subscribedAt": "2026-11-08T13:20:12.964Z"
    }
}
```

## Panduan Menjalankan Project

### Persyaratan

- Node.js
- npm

### Instalasi

1. Clone repository:

```bash
git clone https://github.com/adityalutfians/clone_web.git
```

2. Masuk ke direktori project:

```bash
cd clone_web
```

3. Install dependencies:

```bash
npm install
```

4. Jalankan development server:

```bash
npm run dev
```

## Catatan Penyimpanan Data

Proyek ini menggunakan penyimpanan data sementara (*in-memory storage*) untuk implementasi API.

## Tautan

- **Website Referensi:** https://www.notion.com