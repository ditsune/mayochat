# 🛠️ Take Order

Dashboard internal untuk manajemen order, invoice, template, dan tools reseller Roblox top-up.

**Live:** [mayochat.vercel.app](https://mayochat.vercel.app)

---

## Fitur

- **Take Order** — Form pembuatan order dengan lookup username Roblox otomatis
- **Invoice Generator** — Generate invoice per transaksi dengan format yang konsisten
- **Template Manager** — Kelola template pesan untuk customer service
- **Reseller Tools** — Tools khusus untuk manajemen reseller
- **Address Modal** — Simpan alamat billing dengan proteksi secret key
- **Toast Notification** — Feedback real-time untuk setiap aksi
- **FAB Navigation** — Floating action buttons untuk navigasi cepat antar section
- **Dark/Light Mode** — Dukungan tema gelap dan terang

---

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (ES Modules)
- **Rendering:** Custom `render.js` — DOM renderer tanpa framework
- **Fonts:** Poppins, Plus Jakarta Sans (Google Fonts)
- **Icons:** Font Awesome 6
- **Deployment:** Vercel

---

## Struktur File

```
mayo-tools/
├── index.html      # Entry point — markup shell + modal overlay
├── script.js       # Logic utama: order, invoice, template, reseller
├── render.js       # DOM renderer & komponen UI
├── style.css       # Styling lengkap (dark/light mode, komponen)
├── vercel.json     # Konfigurasi deployment Vercel
└── foto/           # Assets gambar & ikon
```

---

## Cara Pakai

Karena ini pure static site (tanpa build tool), langsung buka aja:

```bash
# Clone repo
git clone https://github.com/cuakproject/mayo-tools.git
cd mayo-tools

# Buka di browser (pakai live server supaya ES Modules jalan)
# VS Code: klik kanan index.html → Open with Live Server
```

Atau akses langsung via [mayo-tools.vercel.app](https://mayo-tools.vercel.app).

---

## Deployment

Project ini auto-deploy ke Vercel setiap push ke branch `main`.

```bash
git add .
git commit -m "update"
git push origin main
```

---

## Lisensi

Internal use only — [cuakproject](https://github.com/cuakproject)
