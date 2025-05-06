#!/bin/bash

# Jalankan vite build untuk menghasilkan file statis
npm run build

# Salin folder mrexpresgmbar ke dist untuk memastikan gambar tersedia
cp -r mrexpresgmbar dist/

# Buat file netlify.toml kosong untuk menghindari pengaturan routing default
touch dist/_redirects
echo "/* /index.html 200" > dist/_redirects