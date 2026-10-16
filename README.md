# Sistem Manajemen Absensi (Express.js MVC)

Proyek ini adalah aplikasi web Sistem Manajemen Absensi berbasis Express.js yang dibangun menggunakan pola arsitektur Model-View-Controller (MVC) untuk memenuhi tugas praktikum.

## Fitur Utama
- **Beranda (Home)**: Menampilkan informasi umum sistem secara dinamis.
- **Tentang Kami (About)**: Halaman informasi statis.
- **Katalog Absensi**: Menampilkan daftar absensi dinamis menggunakan array of objects dan EJS looping.
- **Form Tambah Data**: Mendukung input teks, angka, dan dropdown dengan alur POST-Redirect-Get (PRG).

## Arsitektur Proyek
```text
├── controllers/
│   └── page.controller.js
├── public/
│   └── css/
│       └── style.css
├── routes/
│   └── page.routes.js
├── views/
│   ├── pages/
│   │   ├── about.ejs
│   │   ├── home.ejs
│   │   └── katalog.ejs
│   └── partials/
├── app.js
├── package.json
└── README.md

Dokumentasi & Pengujian Error
Seluruh bukti tangkapan layar pengujian dan debugging error telah disimpan di folder proyek:

03-ejs-partials.png - Tampilan Beranda & integrasi CSS.

05-post-payload.png - Pengujian alur POST & payload form.

06-error-undefined.png - Penanganan error saat middleware parser mati.

07-error-lookup.png - Penanganan error typo/salah path EJS view engine.

08-error-port.png - Penanganan error bentrok port TCP (EADDRINUSE).

Cara Menjalankan
Clone repositori ini.

Jalankan npm install untuk memasang dependensi.

Jalankan npx nodemon app.js atau node app.js.

Buka browser di http://localhost:3000
