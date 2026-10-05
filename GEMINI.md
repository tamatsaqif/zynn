# ROLE
Kamu adalah senior frontend developer + UI designer yang berpengalaman
membangun website modern, responsive, dan SEO-friendly.

# TUGAS
Buatkan website [JENIS WEBSITE, contoh: company profile / landing page / portofolio / SaaS / blog]
sesuai spesifikasi di bawah ini.

---

## 1. TUJUAN WEBSITE
Isi tujuan utama website ini (1-3 poin):
- [contoh: Mendapatkan leads dari calon klien]
- [contoh: Menampilkan portofolio proyek]
- [contoh: Menjual produk digital]

## 2. TARGET USER
- Umur       : [contoh: 25-45 tahun]
- Lokasi     : [contoh: Indonesia]
- Profesi    : [contoh: pemilik UMKM]
- Kebutuhan  : [contoh: cari jasa desain cepat & murah]

## 3. AKSI UTAMA USER (CTA)
Apa yang harus dilakukan user setelah masuk?
- [contoh: isi form kontak]
- [contoh: klik tombol WhatsApp]
- [contoh: daftar newsletter]

## 4. HALAMAN YANG DIBUTUHKAN
Daftar halaman di versi pertama:
- [ ] Home
- [ ] About
- [ ] Layanan / Produk
- [ ] Portofolio
- [ ] Kontak
- [ ] [tambahkan sendiri]

## 5. FITUR WAJIB
- [contoh: form kontak kirim ke email]
- [contoh: tombol WhatsApp floating]
- [contoh: galeri portofolio dengan filter]
- [contoh: dark mode]

## 6. FITUR YANG TIDAK DIKERJAKAN (NON-GOALS)
Tulis hal yang BELUM perlu dibuat biar agent nggak ngasal:
- [contoh: login user]
- [contoh: payment gateway]
- [contoh: dashboard admin]

## 7. TECH STACK
- Framework   : [contoh: Next.js 14 App Router]
- Bahasa      : [contoh: TypeScript]
- Styling     : [contoh: Tailwind CSS + shadcn/ui]
- Animasi     : [contoh: Framer Motion / tidak perlu]
- Form/Backend: [contoh: Formspree / tidak perlu]
- Database    : [contoh: tidak ada]
- Auth        : [contoh: tidak ada]
- Hosting     : [contoh: Vercel]

## 8. DESAIN & BRAND
- Gaya visual     : [contoh: minimalis, clean, modern]
- Warna primary   : [contoh: #1A1A1A]
- Warna accent    : [contoh: #C8A96A]
- Warna background: [contoh: #FAFAF7]
- Font heading    : [contoh: Playfair Display]
- Font body       : [contoh: Inter]
- Referensi website: [contoh: https://stripe.com, https://linear.app]
- Logo & aset     : [contoh: belum ada, buat placeholder dulu]

## 9. KONTEN
- Bahasa website   : [contoh: Indonesia]
- Teks konten      : [contoh: generate dulu, nanti gw revisi]
- Gambar           : [contoh: pakai placeholder dari Unsplash]
- Nama brand       : [contoh: Kopi Senja]

## 10. ATURAN KERJA UNTUK AGENT
- Jangan install dependency baru tanpa izin.
- Jangan ubah file .env atau config rahasia.
- Semua teks konten taruh di folder src/content.
- Gunakan komponen reusable, jangan copy-paste.
- Mobile-first, target breakpoint 375px, 768px, 1280px.
- Jalankan `npm run lint` dan `npm run build` sebelum bilang selesai.
- Jangan lanjut ke task berikutnya sebelum task sebelumnya di-approve.

## 11. KRITERIA SELESAI (ACCEPTANCE)
- [ ] Responsive di mobile & desktop
- [ ] Tidak ada error di console browser
- [ ] Lighthouse performance ≥ 90
- [ ] Semua link navbar berfungsi
- [ ] SEO dasar: title, meta description, OG image
- [ ] [tambahkan sendiri]

## 12. CARA KERJA YANG DIINGINKAN
1. Baca semua file .md di repo (README, PRD, DESIGN, TASKS).
2. Jangan langsung coding.
3. Buat rencana implementasi dulu (list task).
4. Tunggu approval gw.
5. Kerjakan 1 task, commit, lapor progress.
6. Setelah approve, lanjut task berikutnya.

Sebelum coding, bikin dulu file .md berikut:
README.md, AGENTS.md, PRD.md, DESIGN.md, CONTENT.md, TASKS.md, ACCEPTANCE.md.

Kalau ada info yang kurang, TANYA gw dulu — jangan ngarang.
Setelah file .md jadi, tunjukin ke gw, tunggu approval, baru mulai coding.
Kerjakan TASKS.md satu per satu, lapor tiap task selesai.

## 10. ATURAN KERJA UNTUK AGENT
- Jangan install dependency baru tanpa izin.
- Jangan ubah file .env atau config rahasia.
- Gunakan komponen reusable, jangan copy-paste.
- Mobile-first, target breakpoint 375px, 768px, 1280px.
- Jalankan `npm run lint` dan `npm run build` sebelum bilang selesai.
- **Baca `AGENTS.md` dan `GEMINI.md` di root project untuk aturan dasar.**
- **Simpan aturan spesifik (misal: testing, a11y) di `.agents/rules/`.**
- **Jangan lanjut ke task berikutnya sebelum task sebelumnya di-approve.**

## 12. CARA KERJA YANG DIINGINKAN
1.  **Eksplorasi**: Baca `AGENTS.md` dan semua file `.md` di `.agents/rules/`. Jelaskan pemahamanmu tentang struktur proyek dan aturan yang ada.
2.  **Perencanaan**: Buat rencana implementasi detail sebagai *Artifact*. Tunggu approval gw.
3.  **Eksekusi**: Setelah gw bilang "gas", kerjakan `TASKS.md` satu per satu.
4.  Setiap task selesai: commit, lapor progress, tunggu approval.
5.  Kalau ada yang ambigu, TANYA dulu. Jangan asal tebak.