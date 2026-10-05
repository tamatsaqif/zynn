# Zynn — Elegant Simple Hyperlink Hub

Portal tautan Zynn dengan konsep desain *elegant simple aksen putih lembayung gold*, tidak padat/sesak, berestetika bersih, modern, dan bernuansa mewah.

## Profil & Tautan
- **Tagline**: *"Don't follow your dream, follow my instagram"*
- **4 Tautan**:
  1. **Instagram**: `@nath.isme`
  2. **Discord**: `Tinggi Badan`
  3. **TikTok**: `@z.zayyant`
  4. **Web Kelas**: `S2Hub` (`science2hub.vercel.app`)

## Struktur Direktori
```
/
├── docs/                      # Dokumentasi & Spesifikasi Proyek
│   ├── ACCEPTANCE.md          # Kriteria pengujian
│   ├── AGENTS.md              # Konvensi AI Agent
│   ├── CONTENT.md             # Data 4 tautan & profil
│   ├── DESIGN.md              # Design system putih lembayung & gold
│   ├── GEMINI.md              # Brief & template awal
│   ├── PRD.md                 # Product Requirements Document
│   └── TASKS.md               # Tracking pengerjaan task
├── public/                    # Aset Publik / Static Assets
│   └── favicon.svg            # Favicon Zynn Gold
├── src/                       # Source Code Aplikasi
│   ├── app/                   # Next.js App Router (layout, page, css)
│   ├── components/            # Komponen UI
│   │   ├── hub/               # Header, LinkCard, Footer, BackgroundGlow
│   │   ├── icons/             # Platform SVG Icons
│   │   └── ui/                # Toast feedback
│   ├── content/               # Data link & profil (single source of truth)
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript interfaces
├── .gitignore
├── index.html                 # Standalone Single-File HTML Preview
├── next.config.mjs
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack
- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS
- Lucide React & Framer Motion

## Cara Menjalankan
```bash
npm install
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.
