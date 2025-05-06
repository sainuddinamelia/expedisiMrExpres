# MR EXPRESS Website

Website perusahaan untuk CV MR EXPRESS, perusahaan ekspedisi pengiriman via kapal cepat PELNI.

## Teknologi
- React.js
- TailwindCSS
- Vite
- Shadcn/UI

## Cara Deploy ke Vercel

1. Buat akun di [Vercel](https://vercel.com)
2. Hubungkan repository GitHub Anda dengan Vercel
3. Pilih repository yang berisi kode website
4. Di bagian pengaturan, pastikan:
   - Build Command: `chmod +x ./vercel-build.sh && ./vercel-build.sh`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Klik "Deploy"

Vercel akan otomatis men-deploy website dan memberikan URL untuk website Anda.

## Pengembangan Lokal

```bash
# Install dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

## Struktur Folder
- `/client`: Kode frontend React
- `/mrexpresgmbar`: Gambar-gambar yang digunakan dalam website