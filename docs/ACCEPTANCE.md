# ACCEPTANCE.md — Kriteria Penyelesaian & Verifikasi (Zynn)

## 1. Responsivitas & Tampilan Visual
- [ ] Tampilan mobile-first (375px - 425px) nyaman dioperasikan dengan satu tangan.
- [ ] Tampilan tablet (768px) dan desktop (> 1024px) terpusat rapi dengan proporsi visual seimbang.
- [ ] Tema visual konsisten: Latar putih lembayung (pearl iridescent) dan aksen emas (radiant gold).

## 2. Fungsionalitas Interaktif
- [ ] Seluruh kartu tautan (link cards) dapat diklik dan mengarahkan ke URL tujuan dengan aman (`rel="noopener noreferrer"`).
- [ ] Fitur pencarian (search bar) menyaring daftar link secara real-time tanpa lag.
- [ ] Kategori tab memfilter list link sesuai kategori yang dipilih.
- [ ] Tombol Copy Link menyalin link ke clipboard dan menampilkan konfirmasi visual (toast).
- [ ] Modal QR Code memunculkan kode QR aktif yang bisa dipindai kamera HP.
- [ ] Tombol Share membuka dialog/menu berbagi ke media sosial.

## 3. Performa & Kualitas Kode
- [ ] Tidak ada error atau warning di console browser.
- [ ] Clean build: `npm run build` sukses tanpa error TypeScript maupun linting.
- [ ] Metadata SEO lengkap (Title, Description, Favicon, OpenGraph meta).
- [ ] Struktur kode modular, reusable, dan tipe data TypeScript lengkap.
