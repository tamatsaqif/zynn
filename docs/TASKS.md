# TASKS.md — Rencana Pengerjaan Proyek Zynn (Clean & Elegant)

- [x] **Task 1: Inisialisasi Proyek Next.js + Tailwind + Dependencies**
  - Setup Next.js App Router (TypeScript + Tailwind CSS).
  - Install dependensi UI esensial: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.
  - Verifikasi script build dan dev.

- [x] **Task 2: Setup Design System & Background (Putih Lembayung & Aksen Emas)**
  - Konfigurasi `tailwind.config.ts` (warna gold palette, twilight white, typography).
  - Setup `src/app/globals.css` dengan ambient soft twilight aura dan gold frosted accents.
  - Setup metadata SEO di `src/app/layout.tsx`.

- [x] **Task 3: Data Layer 4 Tautan & Profil (Clean Data)**
  - Buat `src/types/index.ts`.
  - Buat `src/content/links.data.ts` berisi 4 tautan murni (tanpa deskripsi berlebih, dengan URL & custom SVG icon):
    1. Instagram (`@nath.isme` -> `https://instagram.com/nath.isme`)
    2. Discord (`Tinggi Badan` -> `https://dsc.gg/tinggi-badan`)
    3. TikTok (`@z.zayyant` -> `https://tiktok.com/@z.zayyant`)
    4. S2Hub (`science2hub.vercel.app` -> `https://science2hub.vercel.app`)
    dan tagline *"Don't follow your dream, follow my instagram"*.

- [x] **Task 4: Implementasi UI Header Profil & Monogram**
  - Komponen Avatar / Monogram Zynn dengan halo emas tipis & SVG verified badge.
  - Tagline satu baris bersih dan tombol salin link dengan feedback toast halus.

- [x] **Task 5: Implementasi 4 Kartu Tautan Berbasis SVG Vektor**
  - Kartu lapang bergaya frosted glass dengan icon SVG asli tiap platform.
  - Animasi hover & tap yang lembut dan responsif.

- [x] **Task 6: Polish, Responsive Check & Final Build Verification**
  - Verifikasi di breakpoint mobile (375px), tablet (768px), dan desktop (1280px).
  - Jalankan `npm run lint` dan `npm run build` untuk memastikan 0 error.
