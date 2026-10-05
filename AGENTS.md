# AGENTS.md — Aturan & Konvensi Pengembangan Zynn

Dokumen ini mendefinisikan aturan operasional untuk AI Agent dalam mengerjakan proyek Zynn.

## 1. Prinsip Utama
- **No Guessing**: Selalu ikuti spesifikasi yang tertera di `PRD.md`, `DESIGN.md`, dan `CONTENT.md`.
- **Sequential Execution**: Kerjakan task sesuai urutan di `TASKS.md`. Jangan lompat task sebelum task aktif selesai dan diuji.
- **Code Quality**: Gunakan komponen reusable, clean TypeScript types, dan pastikan tidak ada `any` liar atau dead code.
- **Strict Verification**: Jalankan `npm run lint` dan `npm run build` sebelum menyatakan task/proyek selesai.

## 2. Struktur Proyek Next.js
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/             # Reusable primitives (buttons, cards, badges)
│   │   ├── hub/            # Link card, profile header, category filter, QR modal
│   │   └── shared/         # Footer, theme accents, particle/glow effects
│   ├── content/
│   │   └── links.data.ts   # Single source of truth untuk daftar link & profil
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces & types
│   └── lib/
│       └── utils.ts        # Helper functions (cn, analytics mock, share)
├── public/                 # Assets, icons, og-image
├── AGENTS.md
├── PRD.md
├── DESIGN.md
├── CONTENT.md
├── TASKS.md
└── ACCEPTANCE.md
```

## 3. Konvensi Styling
- Gunakan Tailwind CSS dengan custom theme tokens yang didefinisikan di `DESIGN.md`.
- Mobile-first approach: breakpoint 375px (mobile), 768px (tablet), 1024px/1280px (desktop).
- Background dasar: Putih lembayung (soft twilight pearl / iridescent white) dengan aksen emas (metallic/shimmering gold).

## 4. Keamanan & Dependensi
- Jangan install package eksternal tanpa verifikasi kegunaan esensial.
- Simpan konfigurasi publik di tempat yang tepat, hindari hardcoding data langsung di komponen UI (gunakan `src/content/`).
