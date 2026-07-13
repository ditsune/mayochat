import { renderApp } from './render.js';

// ==================== TEMPLATES DATA ====================
const templatesData = [
    { id: 1,  name: "Cara Order Simple",          category: "order",    content: `aloo kakk, gas order\n\nklik robux via login, nanti muncul list harga robux, pilih nominal yang mau kamu beli lalu klik\n\nisi data login kamu\nnanti otomatis muncul qr pembayaran\nqr nya bisa untuk semua metode pembayaran, tinggal scan aja\n\nkalo sudah bayar, pesanan kamu akan masuk antrian secara otomatis dan akan di proses sesuai antrian ^,^` },
    { id: 32, name: "Bc Simple",                  category: "keamanan", content: `Cara Buat Backup Code:\n1. Buka aplikasi Roblox di HP kamu.\n2. Login ke akun → tekan ikon tiga titik (≡ / More) di pojok kanan bawah.\n3. Scroll ke bawah → pilih Settings (Pengaturan).\n4. Masuk ke menu Security (Keamanan).\n5. Aktifkan dulu 2-Step Verification (2SV) pakai email atau authenticator.\n6. Setelah aktif, akan muncul pilihan Generate Backup Codes (Buat Kode Cadangan).\n7. Tekan itu → kode cadangan akan muncul.\n8. Simpan kode tersebut (catat, screenshot, atau copy ke password manager).\n\n⚠️ Penting: kode cadangan cuma bisa ditampilkan sekali saat dibuat. Jadi jangan sampai lupa ss ya.` },
    { id: 52, name: "Gabisa",                     category: "other",    content: `Untuk Robux via Login, tidak bisa beli sesuai budget ya kak.\nGak bisa: 50k pas dapet berapa, 100 robux pas berapa, dll.\n\nVia login cuma bisa pilih nominal yang ada di pricelist.\n\nKalau mau beli sesuai uang pas (misal 50k pas), itu lewat via Gamepass\nTapi via Gamepass pending 5–8 hari.` },
    { id: 14, name: "Terima Kasih",               category: "other",    content: `terimakacii kembali kakkk jangan lupa ganti pw dan reset kode backupnya yaahh       \n\nditunggu orderan berikutnya ^_^` },
    { id: 99, name: "Klik List",                  category: "other",    content: `aloo kak, gasss di klik nominal yang mau dibeli,\n\nisi data login akun kamu: usn, pw dan kode backup\n\nnanti otomatis muncul qr pembayaran.\nqr nya bisa untuk semua metode pembayaran, tinggal scan aja\n\nlalu mimin proses sesuai antrian ^,^` },
    { id: 15, name: "Order Web",                  category: "order",    content: `\n📌 Cara Order di Website\nBuka mayoblox.com/robux/checkout/via-login\nPakai Chrome atau Safari biar gak error.\n\n1. Klik Order via Website\n2. Isi: Usn, Pw, Kode Backup \nMasukkan nomor WhatsApp yang aktif (jangan asal)\n3. Ikuti tutorial di website\n4. Pilih nominal → bayar via QR` },
    { id: 8,  name: "Hardware Passkey",           category: "status",   content: `Akun menggunakan Enhanced Protection sehingga proses login tidak dapat dilanjutkan.\n\nCara Benerin:\n\n1. Login ke akun Roblox milik kamu.\n2. Pastikan akun masih dapat melewati seluruh proses verifikasi keamanan.\n3. Pastikan Backup Code masih valid dan dapat digunakan.\n4. Nonaktifkan Enhanced Protection.\n5. Hapus seluruh Passkey yang masih terhubung pada akun.\n6. Pastikan akun memiliki password yang aktif.\n7. Kirim ulang data login yang sudah diperbarui.\n\nJika Backup Code sudah tidak valid dan metode verifikasi lain tidak dapat digunakan, pemulihan akun mungkin perlu dilakukan terlebih dahulu melalui sistem keamanan Roblox.\n\nPastikan akun dapat login normal tanpa kendala sebelum mengirim ulang data login.` },
    { id: 20, name: "Acc Only",                   category: "other",    content: `Saat login tidak tersedia kolom untuk memasukkan backup code dan hanya muncul permintaan approve dari perangkat yang sudah login.\n\nCara Benerin:\n\n1. Login ke akun Roblox.\n2. Verifikasi email akun.\n3. Aktifkan 2-Step Verification.\n4. Generate Backup Codes.\n5. Kirim 5 backup code yang baru dibuat.\n\nSelama akun hanya memiliki metode approve login, proses login admin akan terkendala.` },
    { id: 6,  name: "PW Salah",                   category: "problem",  content: `Username dan password yang diberikan tidak valid sehingga admin tidak dapat login ke akun.\n\nCara Benerin:\n\n1. Login ke akun Roblox terlebih dahulu.\n2. Pastikan akun berhasil masuk tanpa kendala.\n3. Kirim kembali username dan password yang benar.\n4. Jika lupa password, lakukan reset password lalu kirim password terbaru.\n\nPastikan data login yang diberikan sama dengan data login yang berhasil digunakan saat login ke Roblox.` },
    { id: 4,  name: "Cara Buat Kode Backup",      category: "problem",  content: `📌 CARA BUAT KODE BACKUP (WAJIB BACA)\n\n⚠️ Email akun HARUS sudah terverifikasi.\nKalau belum, gak bisa bikin kode backup.\n\n⚠️ Tombol "Verifikasi" atau "Buat" cukup klik SATU KALI.\nKalau spam klik, bakal muncul error "Terlalu Banyak Percobaan".\n\n📧 CEK EMAIL SUDAH VERIFIED ATAU BELUM\n\n1. Buka Roblox → ikon tiga garis (≡) → Pengaturan → Info Akun\n2. Cek bagian Email\n\n✅ Kalau tertulis Terverifikasi → lanjut bikin kode backup\n❌ Kalau Tidak ada / Pending → verifikasi email dulu\n\n📩 CARA VERIFIKASI EMAIL (kalau belum verified)\n\n1. Masuk ke Info Akun\n2. Tambahkan email aktif kamu (kalau belum ada)\n3. Kalau statusnya "Pending", klik Verifikasi Email\n4. Buka email kamu → cari email dari Roblox\n5. Klik Verifikasi Email\n6. Balik ke Roblox, pastikan status jadi Terverifikasi\n\nKalau sudah verified, lanjut buat kode backup.\n\n🎏 CARA BUAT KODE BACKUP\n\n🔐 1. Aktifkan Verifikasi 2 Langkah\n\n1. Ke Pengaturan → Keamanan\n2. Aktifkan Verifikasi 2 Langkah via Email\n3. Buka email → ambil kode 6 digit\n4. Masukkan kodenya → Verifikasi\n\n⚠️ Klik sekali aja, jangan spam.\n\n🧩 2. Buat Kode Backup\n\n1. Masih di menu Keamanan\n2. Scroll ke Kode Pemulihan\n3. Klik Buat (SATU KALI AJA)\n4. Masukkan kode verifikasi email\n5. Nanti muncul 10 kode backup\n\n📌 Kirim 5 kode pertama ke mimin\n📌 5 kode sisanya simpan buat kamu\n\n❌ KALAU ERROR\n\n• Jangan spam klik tombol\n• Pastikan email sudah Terverifikasi\n• Kalau muncul "Terlalu Banyak Percobaan", tunggu 10–15 menit\n\nKalau masih error, screenshot dan kirim ke mimin.` },
    { id: 9,  name: "Bikin BC GK",                category: "order",    content: `Buat masuk ke akun kamu, admin butuh kode backup untuk verifikasi login.\nJadi kamu harus bikin kode backup dulu, baru admin bisa proses akun kamu.\n\nKenapa harus pake kode backup?\nKarena lebih simpel dan cepet.\nKamu gak perlu standby chat, dan admin juga gak perlu nunggu kode email atau approve login dari kamu.\nJadinya orderan kamu dan orderan yang lain bisa lebih cepet selesai.\n\nSekali bikin kode backup, kamu bakal dapet 10 kode.\n1 kode cuma bisa dipake buat 1 kali login.\nJadi total 10 kode bisa dipake buat 10 kali order tanpa harus bikin kode baru lagi.\n\nKalau semua kode udah kepake atau gak valid, kamu harus generate kode backup yang baru dan kirim kode barunya ke admin.` },
    { id: 29, name: "Hubungi CS",                 category: "status",   content: `kaka chat ke cs yaa biar di bantu @mayobloxcs` },
    { id: 2,  name: "Cek Login Tanpa BC",          category: "problem",  content: `Kak, cek dulu ya akunnya:\n\n1. Buka: roblox.com/login di browser\n2. Login pakai username & passwordmu, klik login\n\nKALO LANGSUNG MASUK:\n✅ Akun TIDAK pakai verifikasi\n• Tidak perlu kirim backup code\n• Cukup username & password\n\nKALAU MINTA KODE VERIFIKASI:\n❌ Akun PAKAI verifikasi\n• WAJIB kirim 5 kode backup\n• Tanpa backup code, mimin gabisa login\n• Kalo gabisa login, mimin jadi gabisa proses akun kaka\n\nKalo masih bingung bisa tanya mimin lagi yaa kak` },
    { id: 3,  name: "Cek Status Email",            category: "problem",  content: `📌 Cara Cek Status Akun\n1️⃣ Cek Status Email\n\nMasuk ke Settings → Account Info\nLihat bagian Email:\n\n✅ Verified = sudah diverifikasi\n❌ Not Verified = belum diverifikasi\n\n2️⃣ Kalau Belum Verified\n\n• Klik Verify Email\n• Buka email dari Roblox\n• Klik link verifikasi sampai status jadi Verified\n\n3️⃣ Kalau Sudah Verified Tapi Masih Error\n\n• Logout dari Roblox\n• Login lagi\n• Tunggu sebentar lalu coba ulang` },
    { id: 5,  name: "Kode Verif Gk Masuk",         category: "problem",  content: ` ❗️ Email Verifikasi Gak Masuk?\n\nCoba ini dulu:\n\n1. Klik Resend Code di Roblox\n2. Buka email kamu → refresh inbox\n3. Cari email dari Roblox → masukin kode verifikasinya ke Roblox\n4. Pastikan email yang kamu buka itu memang email yang terdaftar di akun Roblox kamu\n\n❓ Masih Gak Masuk?\n\n1. Masuk ke Settings → Account Info\n2. Cek status email:\n\n   Verified = sudah diverifikasi\n   Not Verified = belum diverifikasi\n\nKalau masih Not Verified:\n• Klik Verify Email\n• Cek email dari Roblox\n• Klik link verifikasi di email (ini wajib supaya status jadi Verified)\n\nIkutin stepnya pelan-pelan, jangan loncat-loncat. Biasanya gagal karena salah email atau gak dicek inbox nya.` },
    { id: 7,  name: "Ke Logout Abis Topup",        category: "problem",  content: `\n❗️ Habis Top-Up Kok Ke-Logout?\n\nAman. Itu cuma bug top-up dari Roblox aja, bukan akun kamu kenapa-kenapa.\n\n🔐 Cara Login Lagi\n\n1. Buka roblox.com/login\n2. Login pakai password terbaru yang kamu kasih\n3. Kalau diminta kode verifikasi → pakai kode dari email atau backup code\n\n📌 Mimin TIDAK Pernah:\n\n• Ganti password kamu\n• Ganti email kamu\n\n🔄 Kalau Masih Gak Bisa Login\n\nReset password aja:\n\n1. Buka roblox.com → klik Forgot Username or Password\n2. Masukkan email / nomor yang terdaftar\n3. Cek email → klik link reset\n4. Buat password baru\n5. Login pakai password baru itu\n\nMasih bingung juga?\nScreenshot kendalanya, kirim ke mimin biar dicek.\n` },
    { id: 10, name: "Prem Explain",                category: "status",   content: `📌 Apa Itu Roblox Premium?\n\nRoblox Premium itu langganan 1 bulan yang kasih keuntungan tambahan ke akun Roblox kamu.\n\n🎁 Benefit Roblox Premium\n\nDapet Robux sesuai paket yang dibeli:\n\n• Premium 450 → dapet 450 Robux\n• Premium 1000 → dapet 1000 Robux\n• Premium 2200 → dapet 2200 Robux\n➜ Pas sesuai paket, gak kurang gak lebih\n\n• Dapet bonus 10% Robux setiap top up (selama Premium masih aktif)\n• Bisa trade item (fitur khusus akun Premium)\n\n⏳ Masa Aktif Premium\n\n• Aktif selama 1 bulan\n• Tidak otomatis perpanjang\n• Sekali beli → aktif 1 bulan → selesai\n\n🚫 Premium Tidak Bisa Di-Stack\n\n• Kalau Premium masih aktif, gak bisa beli Premium lagi\n\n📌 Ringkasan\n\n• Premium aktif 1 bulan\n• Gak otomatis perpanjang\n• Gak bisa di-stack\n• Bonus 10% cuma saat Premium aktif\n• Beli lagi cuma setelah masa aktif habis` },
    { id: 11, name: "Reset PW",                    category: "security", content: "Kak di reset dulu yah passwordnya.\n\nCara reset password:\n\n1. Buka roblox.com di browser\n2. Klik \"Forgot Username or Password\"\n3. Masukkan email/username yang terdaftar → Submit\n4. Buka email → cari email dari Roblox\n5. Klik link reset di email\n6. Buat password baru\n7. Konfirmasi password → Submit\n8. Login dengan password baru\n\nSETELAH RESET:\nKirim ulang usn dan password baru kamu" },
    { id: 16, name: "Order Gamepass",              category: "order",    content: `\n📌 CARA ORDER ROBUX VIA GAMEPASS (WEB)\n\nOrder lewat web ya.\nBuka: mayoblox.com/robux\nPakai Chrome atau Safari biar gak error.\n\n1. Pilih "Robux Gamepass PO"\n2. Masukkan username Roblox kamu\n3. Isi nominal Robux yang mau dibeli\n4. Masukkan nomor WhatsApp yang aktif (jangan asal)\n\n💳 Lanjut Pembayaran\n\n5. Pilih metode pembayaran\n6. Klik Beli Sekarang\n\n🎥 Tonton tutorial sampai selesai biar gak salah langkah.\n\n🎮 Buat Gamepass\n\n7. Atur harga gamepass sesuai ketentuan di web\n8. Kalau gamepass sudah dibuat, klik Bayar\n9. Selesaikan pembayaran\n\n⏳ Kalau Robux Belum Masuk\nChat ke CS @mayobloxcs` },
    { id: 17, name: "Hubungi CS Gamepass",         category: "other",    content: `untuk robux via gamepass \ncara order, cara buat gamepass, pertanyaan dan kendala, kaka bisa chat ke cs ya biar di bantu @mayobloxcs 💓 ini csnya yang di tag , kamu chat kesitu yahh` },
    { id: 21, name: "BC Ngasal",                   category: "problem",  content: `Backup code yang diberikan bukan backup code Roblox yang valid.\n\nCara Benerin:\n1. Login ke akun Roblox.\n2. Masuk ke Settings > Security.\n3. Buka menu Backup Codes.\n4. Kirim backup code asli yang dibuat oleh Roblox.\n\nBackup code Roblox berupa kode yang dibuat sistem Roblox dan bukan kode buatan sendiri.` },
    { id: 22, name: "Invalid BC",                  category: "security", content: `Tolong kirimkan 5 CODE BACK UP yang TERBARU ya kak. Karena yang kakak kirim sudah invalid semuanya.\n\nCara Benerin:\n\n1. Login ke akun Roblox.\n2. Masuk ke Settings > Security.\n3. Generate / buat Backup Codes baru.\n4. Kirim 5 backup code yang baru dibuat.\n\nPastikan kode yang di kirim belum pernah digunakan.` },
    { id: 23, name: "Error Generate Backup Code",  category: "problem",  content: `❌ ERROR SAAT GENERATE BACKUP CODE?\n\nBiasanya karena ini:\n\n🔎 PENYEBAB ERROR\n\n1. Klik Generate berkali-kali sampai kena limit\n2. Email belum diverifikasi\n3. Verifikasi 2 Langkah (2-Step) belum aktif\n\n✅ SOLUSI SESUAI ERROR\n\nKASUS 1: "Too many attempts"\nTunggu 10–15 menit, lalu coba lagi (klik 1x aja)\n\nKASUS 2: "Email not verified"\nSettings → Account Info → Klik Verify Email\n\nKASUS 3: "2-Step not enabled"\nSettings → Security → Aktifkan 2-Step Verification\n\n⚠️ TIPS BIAR GAK ERROR\n\n• Klik Generate cukup 1x, lalu tunggu popup muncul\n• Pastikan email sudah Verified\n• Gunakan Chrome atau Safari\n\nMasih error juga? Screenshot errornya, kirim ke mimin biar dicek.` },
    { id: 25, name: "Passkey Aktif",               category: "problem",  content: `Akun hanya dapat login menggunakan Passkey sehingga admin tidak dapat login menggunakan username dan password.\n\nCara Benerin:\n\n1. Buka Roblox.com melalui browser di HP.\n2. Pilih Forgot Username or Password.\n3. Buat password baru untuk akun Roblox.\n4. Login ke akun Roblox.\n5. Masuk ke Settings > Account Info.\n6. Pilih bagian Passkey.\n7. Tekan Remove Passkey / Hapus Passkey.\n8. Kirim username dan password terbaru.\n\nPastikan akun sudah memiliki password agar admin dapat login menggunakan metode biasa.` },
];

// ==================== CONSTANTS ====================
const INV_PRICELIST = [
    80,160,240,320,500,1000,1080,1160,1240,1320,1500,
    2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,
    7000,7500,8000,8500,9000,9500,10000,450,2200
];
const INV_WORD_BLOCK = new Set(["dimainkan","pemulihan","pengisian","prosesnya","transaksi"]);

// URL BACKEND LO
const ROBLOX_PROXY_URL = '';

// ==================== STATE ====================
let templatesHidden = true;
let activeCategory  = 'all';
let toastTimer = null;

// ==================== HELPERS ====================
function getCategoryName(cat) {
    return { order:'Order', problem:'Problem', status:'Status', security:'Security', other:'Lainnya', keamanan:'Keamanan' }[cat] || 'Lainnya';
}
function getCategoryIcon(cat) {
    return { order:'fa-shopping-cart', problem:'fa-exclamation-triangle', status:'fa-info-circle', security:'fa-shield-alt', keamanan:'fa-shield-alt', other:'fa-ellipsis-h' }[cat] || 'fa-tag';
}

// ==================== LOAD TEMPLATES ====================
function loadTemplates() {
    const grid = document.getElementById('templatesGrid');
    grid.innerHTML = '';
    document.getElementById('templateCount').textContent = templatesData.length;
    templatesData.forEach(t => {
        const used = localStorage.getItem(`template-${t.id}-used`) || 0;
        const card = document.createElement('div');
        card.className = 'template-card';
        card.setAttribute('data-id', t.id);
        card.setAttribute('data-category', t.category);
        card.setAttribute('data-name', t.name.toLowerCase());
        card.setAttribute('data-preview', t.content.slice(0, 100).toLowerCase());
        card.innerHTML = `
            <div class="tc-accent-bar"></div>
            <div class="tc-body">
                <div class="tc-header">
                    <div class="tc-category-badge"><i class="fas ${getCategoryIcon(t.category)}"></i>${getCategoryName(t.category)}</div>
                    <span class="tc-used-badge">${used}×</span>
                </div>
                <h4 class="tc-name">${t.name}</h4>
                <div class="tc-preview">${t.content.trim().substring(0, 120)}${t.content.length > 120 ? '...' : ''}</div>
                <div class="tc-content hidden">${t.content}</div>
            </div>
            <div class="tc-footer">
                <span class="tc-tap-hint"><i class="fas fa-hand-pointer"></i> Tap to copy</span>
                <button class="tc-copy-btn" data-id="${t.id}"><i class="fas fa-copy"></i> Copy</button>
            </div>`;
        grid.appendChild(card);
    });
    addTemplateEventListeners();
}

function addTemplateEventListeners() {
    document.querySelectorAll('.tc-copy-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            copyTemplate(this.getAttribute('data-id'));
        });
    });
    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('.tc-copy-btn')) copyTemplate(this.getAttribute('data-id'));
        });
    });
}

// ==================== QUICK ACTIONS ====================
function handleQuickAction(type) {
    const map = {
        'order':1, 'backup':4, 'list':99, 'error':7, '2step':23,
        'qr':8, 'queue':20, 'prem':10, 'thanks':14, 'weborder':15,
        'fix':25, 'wrongpw':6, 'estimation':9, 'checklogin':2,
        'checkemail':3, 'reset':11, 'webproblem':21, 'regencode':22,
        'gp':16, 'gkmsk':5, 'gabisa':52, 'cs':29
    };
    if (map[type]) copyTemplate(map[type]);
}

// ==================== COPY TEMPLATE ====================
function copyTemplate(id) {
    const t = templatesData.find(t => t.id == id);
    if (!t) return;
    if (templatesHidden) showTemplatesGrid();
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(t.content).then(() => handleCopySuccess(id, t.name)).catch(() => fallbackCopy(t.content, id, t.name));
    } else {
        fallbackCopy(t.content, id, t.name);
    }
}

function handleCopySuccess(id, name) {
    const n = parseInt(localStorage.getItem(`template-${id}-used`) || 0) + 1;
    localStorage.setItem(`template-${id}-used`, n);
    const card = document.querySelector(`.template-card[data-id="${id}"]`);
    if (card) {
        const badge = card.querySelector('.tc-used-badge');
        if (badge) badge.textContent = n + '×';
        card.classList.add('copied');
        setTimeout(() => card.classList.remove('copied'), 1200);
    }
    updateStats();
    showToast(`✅ "${name}" dicopy! 📋`);
}

function fallbackCopy(text, id, name) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy') ? handleCopySuccess(id, name) : showToast('❌ Gagal copy'); } catch { showToast('❌ Gagal copy'); }
    document.body.removeChild(ta);
}

// ==================== SEARCH (navbar) ====================
function initializeSearch() {
    document.getElementById('searchInput').addEventListener('input', function () {
        const q = this.value.toLowerCase().trim();
        if (q && templatesHidden) showTemplatesGrid();
        // sync inline search juga
        const inlineInput = document.getElementById('templateSearchInline');
        if (inlineInput) inlineInput.value = q;
        applyTemplateFilter(q);
    });
}

// ==================== INLINE FILTER ====================
function applyTemplateFilter(forceQ) {
    const q = forceQ !== undefined
        ? forceQ
        : (document.getElementById('templateSearchInline')?.value.toLowerCase().trim() || '');
    const activePill = document.querySelector('#tmplCatPills .tmpl-pill.active');
    const cat = activePill ? activePill.dataset.cat : 'all';

    const cards = document.querySelectorAll('#templatesGrid .template-card');
    let visible = 0;

    cards.forEach(card => {
        const name    = card.getAttribute('data-name') || '';
        const preview = card.getAttribute('data-preview') || '';
        const cardCat = card.getAttribute('data-category') || '';

        const matchCat = cat === 'all' || cardCat === cat;
        const matchQ   = q === '' || name.includes(q) || preview.includes(q);
        const show     = matchCat && matchQ;

        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    const emptyEl = document.getElementById('tmplEmpty');
    if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
}
window.applyTemplateFilter = applyTemplateFilter;

// ==================== CATEGORY FILTER (legacy .category-btn support removed) ====================
function filterTemplatesByCategory(cat) {
    activeCategory = cat;
    // sync pill
    document.querySelectorAll('#tmplCatPills .tmpl-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.cat === cat);
    });
    applyTemplateFilter();
}

// ==================== THEME ====================
function toggleTheme() {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.querySelector('#themeToggle i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
    showToast(`${dark ? '🌙 Dark' : '☀️ Light'} mode`);
}

function initializeTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-moon';
    } else {
        document.body.classList.add('dark');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
        if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
    }
}

// ==================== TOGGLE TEMPLATES ====================
function showTemplatesGrid() {
    if (!templatesHidden) return;
    templatesHidden = false;
    document.getElementById('templatesGrid').classList.remove('hidden');
    document.getElementById('toggleAllBtn').innerHTML = '<i class="fas fa-eye-slash"></i><span>Sembunyikan</span>';
    document.querySelectorAll('.tc-preview').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.tc-content').forEach(c => c.classList.remove('hidden'));
}

function hideTemplatesGrid() {
    if (templatesHidden) return;
    templatesHidden = true;
    document.getElementById('templatesGrid').classList.add('hidden');
    document.getElementById('toggleAllBtn').innerHTML = '<i class="fas fa-eye"></i><span>Tampilkan</span>';
    document.querySelectorAll('.tc-preview').forEach(c => c.classList.remove('hidden'));
    document.querySelectorAll('.tc-content').forEach(c => c.classList.add('hidden'));
}

function toggleAllTemplates() { templatesHidden ? showTemplatesGrid() : hideTemplatesGrid(); }
window.toggleAllTemplates = toggleAllTemplates;

// ==================== STATS ====================
function updateStats() {
    let total = 0;
    templatesData.forEach(t => { total += parseInt(localStorage.getItem(`template-${t.id}-used`) || 0); });
    const el = document.getElementById('totalUsed');
    if (el) el.textContent = total;
    const badge = document.querySelector('.stat-badge');
    if (badge) badge.textContent = total;
}

function showStats() {
    let total = 0;
    templatesData.forEach(t => { total += parseInt(localStorage.getItem(`template-${t.id}-used`) || 0); });
    alert(`📊 Total Template: ${templatesData.length}\nTotal Dipakai: ${total}`);
}

// ==================== TOAST ====================
function showToast(msg) {
    const t = document.getElementById('toast');
    if (toastTimer) clearTimeout(toastTimer);
    t.textContent = msg;
    t.classList.add('show');
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ==================== TOOLS TABS ====================
function switchToolTab(tab) {
    const pB = document.getElementById('paneBackup');
    const pI = document.getElementById('paneInvoice');
    const tB = document.getElementById('tabBackup');
    const tI = document.getElementById('tabInvoice');
    if (tab === 'invoice') {
        pI.style.display = 'block'; pB.style.display = 'none';
        tI.classList.add('active'); tB.classList.remove('active');
    } else {
        pB.style.display = 'block'; pI.style.display = 'none';
        tB.classList.add('active'); tI.classList.remove('active');
    }
}

// ==================== SCROLL BUTTONS ====================
function initializeScrollButtons() {
    const scrollTo = sel => { const el = document.querySelector(sel); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' }); };
    document.getElementById('scrollToResellerFab').addEventListener('click', () => scrollTo('.reseller-section'));
    document.getElementById('scrollToToolsFab').addEventListener('click',    () => scrollTo('.tools-section'));
    document.getElementById('scrollToTopFab').addEventListener('click',      () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

// ==================== BACKUP CODE FORMATTER ====================
function initializeBackupFormatter() {
    const input = document.getElementById('backupInput');
    document.getElementById('clearBackupBtn').addEventListener('click', clearBackupFields);
    document.getElementById('copyBackupBtn').addEventListener('click', copyBackupResult);
    document.getElementById('autoPasteBtn').addEventListener('click', pasteFromClipboard);
    let timer;
    input.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(() => { if (this.value.trim()) generateBackupFormat(); }, 300);
    });
}

function extractBackupCodes(text) {
    if (!text) return [];
    const codes = [], lines = text.split(/\n/);
    const isCode = s => { const t = s.toLowerCase().trim().replace(/[`'"]/g, ''); return t.length === 9 && /^[a-z0-9]+$/.test(t) && !/^\d+$/.test(t) && !INV_WORD_BLOCK.has(t); };
    const addCode = s => { const t = s.toLowerCase().trim().replace(/[`'"]/g, ''); if (isCode(t) && !codes.includes(t)) codes.push(t); return codes.length >= 5; };
    const lp = /(?:code\s*back\s*up|backup\s*kode|kode\s*(?:backup|pemulihan|cadangan)|bc)\s*\d*\s*[:\-=]?\s*/i;
    for (const l of lines) { if (!lp.test(l)) continue; const v = l.replace(lp, '').replace(/[-•\s`'"]/g, '').trim(); if (addCode(v) && codes.length >= 5) return codes; }
    for (const l of lines) { const m = l.match(/^\s*\d+[.)]\s*([a-z0-9]{9})\s*$/i); if (m && addCode(m[1]) && codes.length >= 5) return codes; }
    for (const l of lines) { const t = l.trim().replace(/^[-•·*\s]+/, '').trim(); if (/^[a-z0-9]{9}$/i.test(t) && addCode(t) && codes.length >= 5) return codes; }
    for (const l of lines) { if (/(?:cara|klik|login|akses|pilih|salin|kirim|jangan|supaya|proses|wajib|minimal|backup|roblox|generate|settings|security|transaksi)\b/i.test(l)) continue; for (const tok of l.split(/[\s,;|]+/)) { if (addCode(tok) && codes.length >= 5) return codes; } }
    return codes.slice(0, 5);
}

function generateBackupFormat() {
    const input = document.getElementById('backupInput').value.trim();
    const out   = document.getElementById('backupOutput');
    const empty = '🔍 WAJIB DIISI 5 CODE BACKUP!!\n- code back up 1: \n- code back up 2: \n- code back up 3: \n- code back up 4: \n- code back up 5:';
    if (!input) { out.textContent = empty; return; }
    const codes = extractBackupCodes(input);
    if (!codes.length) { out.textContent = empty; showToast('❌ Kode tidak ditemukan'); return; }
    const final = [...codes]; while (final.length < 5) final.push(codes[codes.length - 1]);
    out.textContent = `🔍 WAJIB DIISI 5 CODE BACKUP!!\n${final.map((c, i) => `- code back up ${i + 1}: \`${c}\``).join('\n')}`;
    showToast(codes.length < 5 ? `⚠️ ${codes.length} kode ditemukan` : `✅ ${codes.length} kode diformat!`);
}

function clearBackupFields() {
    document.getElementById('backupInput').value = '';
    document.getElementById('backupOutput').textContent = '🔍 WAJIB DIISI 5 CODE BACKUP!!\n- code back up 1: \n- code back up 2: \n- code back up 3: \n- code back up 4: \n- code back up 5:';
    showToast('🧹 Field dibersihkan!');
}

async function pasteFromClipboard() {
    try { const text = await navigator.clipboard.readText(); document.getElementById('backupInput').value = text; generateBackupFormat(); showToast('📋 Paste berhasil!'); } catch { showToast('❌ Gagal baca clipboard'); }
}

function copyBackupResult() {
    const text = document.getElementById('backupOutput').textContent;
    const doCopy = t => { const ta = document.createElement('textarea'); ta.value = t; ta.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); showToast('✅ Format dicopy!'); } catch { showToast('❌ Gagal'); } document.body.removeChild(ta); };
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(() => showToast('✅ Format dicopy!')).catch(() => doCopy(text)); } else { doCopy(text); }
}

// ==================== INVOICE PARSER UTILS ====================
function invFormatRobux(raw) {
    if (!raw) return '';
    const s = raw.trim(), isPrem = /prem(?:ium)?/i.test(s);
    let work = s.replace(/r(?:ob(?:ux|ix)?|bx?)\b/gi, '').replace(/prem(?:ium)?\b/gi, '').replace(/[+&]/g, ' ').trim();
    work = work.replace(/(\d)[.,](\d{3})(?!\d)/g, '$1$2').replace(/\b(\d+)[kK]\b/g, (_, n) => String(parseInt(n) * 1000));
    const nums = (work.match(/\d+/g) || []).map(Number).filter(n => n > 0);
    if (!nums.length) return isPrem ? '1000R + Premium' : '';
    if (isPrem) { const P = [450,1000,2200]; for (const n of nums) if (P.includes(n)) return n + 'R + Premium'; if (nums.includes(2000)) return '2200R + Premium'; const b = nums.filter(n => n >= 100); if (b.length) { const c = P.reduce((a,v) => Math.abs(a - b[0]) <= Math.abs(v - b[0]) ? a : v); return c + 'R + Premium'; } return '1000R + Premium'; }
    for (const n of nums) if (INV_PRICELIST.includes(n)) return n + ' Robux';
    const best = nums.reduce((a,b) => { const da = Math.min(...INV_PRICELIST.map(p => Math.abs(a - p))); const db = Math.min(...INV_PRICELIST.map(p => Math.abs(b - p))); return da <= db ? a : b; });
    return best + ' Robux';
}

function invExtractUsername(text) {
    const lp = /(?:🫧\s*)?(?:username|user\s*name|roblox\s*(?:id|username|user)|nama\s*akun|akun|usn|usr|user|id)\s*(?:\(@\)\s*)?[:\-–=]\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/gi;
    const ep = /👤\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/;
    const tryX = m1 => { if (!m1) return ''; return m1.trim().replace(/^[🫧🌸✨👤🔑🛡\s@*_]+|[🫧🌸✨👤🔑🛡\s@*_]+$/g, '').split(/\s+/)[0].trim(); };
    const em = text.match(ep); if (em) { const v = tryX(em[1]); if (v && v.length >= 2) return v; }
    let m; lp.lastIndex = 0; while ((m = lp.exec(text)) !== null) { const v = tryX(m[1]); if (v && v.length >= 2) return v; }
    return '';
}

function invExtractPassword(text) {
    const lp = /(?:🫧\s*)?(?:password|pasword|pass\s*word|kata\s*sandi|kunci|sandi|pass|pw|pin)\s*[:\-–=]\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/gi;
    const ep = /🔑\s*([^\n\r🫧🌸✨👤🔑🛡❗️🔍⚠️📌]+)/;
    const tryX = m1 => { if (!m1) return ''; return m1.trim().replace(/^[🫧🌸✨👤🔑🛡\s]+|[🫧🌸✨👤🔑🛡\s]+$/g, '').trim(); };
    const em = text.match(ep); if (em) { const v = tryX(em[1]); if (v && v.length >= 1) return v; }
    let m; lp.lastIndex = 0; while ((m = lp.exec(text)) !== null) { const v = tryX(m[1]); if (v && v.length >= 1) return v; }
    return '';
}

function invExtractRobux(text) {
    const sl = text.split('\n').filter(l => !/(?:backup|code\s*back|kode\s*(?:backup|bc|bekap|pemulihan|cadangan)|sisa\s*rob)/i.test(l));
    const st = sl.join('\n');
    const isPrem = /prem(?:ium)?/i.test(sl.filter(l => /(?:order|beli|jumlah|nominal|topup|mau|pengen|butuh|request)/i.test(l) || /(?:\d\s*r?\s*(?:\+\s*)?prem|prem\b.*\d|\d+\s*prem)/i.test(l)).join('\n'));
    const norm = st.replace(/(\d+)\s*r(?:ob(?:ux|ix)?|bx?)?\b/gi,'$1').replace(/(\d)[.,](\d{3})(?!\d)/g,'$1$2').replace(/\b(\d+)[kK]\b/g,(_,n)=>String(parseInt(n)*1000));
    const op = /(?:order(?:\s*(?:brp|brap|berapa|robux|rbx|rb))?|top\s*up|topup|beli|jumlah|nominal|mau(?:\s*beli)?|pengen?(?:\s*beli)?|butuh|request)\s*[:\-–=]?\s*([^\n\r]+)/gi;
    let m; op.lastIndex = 0;
    while ((m = op.exec(norm)) !== null) {
        if (!/\d/.test(m[1])) continue;
        const nums = (m[1].match(/\d+/g) || []).map(Number).filter(n => n >= 80);
        if (isPrem) { const P = [450,1000,2200]; for (const n of nums) if (P.includes(n)) return n + 'prem'; if (nums.includes(2000)) return '2200prem'; if (nums.length) { const c = P.reduce((a,b) => Math.abs(a - nums[0]) <= Math.abs(b - nums[0]) ? a : b); return c + 'prem'; } return '1000prem'; }
        else { for (const n of nums) if (INV_PRICELIST.includes(n)) return String(n); }
    }
    const all = (norm.match(/\b\d+\b/g) || []).map(Number).filter(n => n >= 80);
    if (isPrem) { const P = [450,1000,2200]; for (const n of all) if (P.includes(n)) return n + 'prem'; if (all.includes(2000)) return '2200prem'; if (all.length) { const c = P.reduce((a,b) => Math.abs(a - all[0]) <= Math.abs(b - all[0]) ? a : b); return c + 'prem'; } return '1000prem'; }
    for (const n of all) if (INV_PRICELIST.includes(n)) return String(n);
    return '';
}

function invExtractCodes(text) {
    if (!text) return [];
    const codes = [], lines = text.split(/\n/);
    const addCode = tok => { const t = tok.toLowerCase().trim().replace(/[`'"]/g, ''); if (t.length === 9 && /^[a-z0-9]+$/.test(t) && !/^\d+$/.test(t) && !INV_WORD_BLOCK.has(t) && !codes.includes(t)) { codes.push(t); return codes.length >= 5; } return false; };
    const blp = /(?:code\s*back\s*up|backup\s*kode|kode\s*(?:backup|pemulihan|cadangan)|cadangan|bc)\s*\d*\s*[:\-–=]?\s*/i;
    for (let i = 0; i < lines.length; i++) {
        if (!blp.test(lines[i])) continue;
        const chunk = [lines[i]];
        for (let j = i+1; j <= i+2 && j < lines.length; j++) { const nx = lines[j].trim(); if (blp.test(nx) && !/^[a-z0-9]{9}$/i.test(nx.replace(/\W/g,''))) break; if (/(?:username|password|order|bukti|payment|foto)/i.test(nx) && !/^[a-z0-9]{9}$/i.test(nx.replace(/\W/g,''))) break; chunk.push(nx); }
        for (const tok of chunk.join(' ').replace(blp,' ').split(/[\s,;|`'\-]+/)) { if (addCode(tok) && codes.length >= 5) return codes; }
    }
    for (const l of lines) { const m = l.match(/^\s*\d+[.)]\s*([a-z0-9]{9})\s*$/i); if (m && addCode(m[1]) && codes.length >= 5) return codes; }
    for (const l of lines) { const m = l.match(/^\s*[-•·*]\s*([a-z0-9]{9})\s*$/i); if (m && addCode(m[1]) && codes.length >= 5) return codes; }
    const fl = lines.filter(l => !/(?:username|usn|usr|user|password|pasword|pw|pass|order|nominal|jumlah|sisa|bukti|payment|format|topup|harap|wajib|tuliskan|minimal|roblox|mimin|admin|cara|klik|login|akses|pilih|salin|kirim|jangan|supaya|proses|biar)\b/i.test(l) && !/^[A-Z\s!?,.-]+$/.test(l.trim()));
    for (const tok of fl.join('\n').replace(/[^\w\s\n]/g,' ').split(/[\s\n\r]+/)) { if (addCode(tok) && codes.length >= 5) return codes; }
    return codes.slice(0,5);
}

// ==================== INVOICE STATE ====================
let inv4State = { robux: '', user: '', pass: '', codes: [], lookupTimer: null, lookupAbort: null };
let inv4LookupCache = {};
let inv4RawTimer = null;

// ==================== INV4: AUTO PASTE ====================
async function inv4DoPaste() {
    try { const text = await navigator.clipboard.readText(); if (!text.trim()) { showToast('❌ Clipboard kosong!'); return; } document.getElementById('inv4RawPaste').value = text; inv4Parse(text); showToast('📋 Paste & parse berhasil!'); } catch { showToast('❌ Gagal baca clipboard.'); }
}

function inv4OnRawPaste(event) {
    clearTimeout(inv4RawTimer);
    const pasted = event?.clipboardData?.getData('text');
    inv4RawTimer = setTimeout(() => { const val = document.getElementById('inv4RawPaste').value.trim(); if (val.length > 15) inv4Parse(val); }, pasted ? 80 : 200);
}

function inv4OnRawInput() {
    clearTimeout(inv4RawTimer);
    inv4RawTimer = setTimeout(() => { const val = document.getElementById('inv4RawPaste').value.trim(); if (val.length > 20) inv4Parse(val); }, 600);
}

// ==================== INV4: CLEAR ====================
function inv4Clear() {
    if (inv4State.lookupAbort) { inv4State.lookupAbort(); inv4State.lookupAbort = null; }
    clearTimeout(inv4State.lookupTimer);
    clearTimeout(inv4RawTimer);
    inv4State = { robux: '', user: '', pass: '', codes: [], lookupTimer: null, lookupAbort: null };
    document.getElementById('inv4RawPaste').value = '';
    ['inv4Robux','inv4User','inv4Pass'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const raw = document.getElementById('inv4BackupRaw'); if (raw) { raw.value = ''; raw.style.display = 'none'; }
    ['inv4StatusRobux','inv4StatusUser','inv4StatusPass','inv4StatusBackup'].forEach(id => inv4SetStatus(id, '', ''));
    inv4RenderChips([]);
    inv4ResetAvatar();
    ['inv4CardRobux','inv4CardUser','inv4CardPass','inv4CardBackup'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('state-ok','state-err'); });
    document.getElementById('inv4EditBtn').innerHTML = '<i class="fas fa-edit"></i> Edit';
    document.getElementById('inv4ChipsWrap').style.display = 'flex';
    showToast('🧹 Cleared!');
}

// ==================== INV4: PARSE ====================
function inv4Parse(raw) {
    if (!raw?.trim()) return;
    let cleaned = raw.replace(/\[\d{1,2}\/\d{1,2}\/\d{2,4}[^\]]*\]\s*[^:\n]+:\s*/g, '').trim();
    cleaned = cleaned.split('\n').filter(l => !/harap\s+diisi|jika\s+prem\s+tulis|tulis\s+order\s+brp|wajib\s+diisi\s+dengan\s+lengkap/i.test(l)).join('\n');
    const username = invExtractUsername(cleaned);
    const password = invExtractPassword(cleaned);
    const robuxRaw = invExtractRobux(cleaned);
    const codes = invExtractCodes(cleaned);
    const robuxFormatted = robuxRaw ? (invFormatRobux(robuxRaw) || robuxRaw) : '';
    document.getElementById('inv4Robux').value = robuxFormatted;
    document.getElementById('inv4User').value = username;
    document.getElementById('inv4Pass').value = password;
    inv4State = { ...inv4State, robux: robuxFormatted, user: username, pass: password, codes };
    inv4RenderChips(codes);
    inv4UpdateStatuses();
    if (username) inv4TriggerLookup(username);
}

// ==================== INV4: FIELD CHANGED ====================
function inv4FieldChanged() {
    inv4State.robux = document.getElementById('inv4Robux').value.trim();
    inv4State.user = document.getElementById('inv4User').value.trim();
    inv4State.pass = document.getElementById('inv4Pass').value.trim();
    inv4UpdateStatuses();
}

function inv4FormatRobuxField() {
    const el = document.getElementById('inv4Robux');
    const formatted = invFormatRobux(el.value.trim());
    if (formatted) { el.value = formatted; inv4State.robux = formatted; }
    inv4UpdateStatuses();
}

function inv4BackupRawChanged() {
    inv4State.codes = invExtractCodes(document.getElementById('inv4BackupRaw').value);
    inv4UpdateStatuses();
}

function inv4ToggleBackupEdit() {
    const raw = document.getElementById('inv4BackupRaw');
    const chips = document.getElementById('inv4ChipsWrap');
    const btn = document.getElementById('inv4EditBtn');
    if (raw.style.display === 'none') {
        raw.value = inv4State.codes.join('\n');
        raw.style.display = 'block'; chips.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-check"></i> Simpan';
        raw.focus();
    } else {
        inv4State.codes = invExtractCodes(raw.value);
        inv4RenderChips(inv4State.codes);
        raw.style.display = 'none'; chips.style.display = 'flex';
        btn.innerHTML = '<i class="fas fa-edit"></i> Edit';
        inv4UpdateStatuses();
    }
}

// ==================== INV4: STATUS ====================
function inv4SetStatus(id, cls, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.className = 'inv4-card-status' + (cls ? ' ' + cls : '');
}

function inv4UpdateStatuses() {
    const r = document.getElementById('inv4Robux').value.trim();
    inv4SetStatus('inv4StatusRobux', r ? 'ok' : 'warn', r ? '✓' : '—');
    const cR = document.getElementById('inv4CardRobux'); if (cR) { cR.classList.toggle('state-ok', !!r); cR.classList.remove('state-err'); }

    const p = document.getElementById('inv4Pass').value.trim();
    inv4SetStatus('inv4StatusPass', p ? 'ok' : 'warn', p ? '✓' : '—');
    const cP = document.getElementById('inv4CardPass'); if (cP) { cP.classList.toggle('state-ok', !!p); cP.classList.remove('state-err'); }

    const n = inv4State.codes.length;
    inv4SetStatus('inv4StatusBackup', n >= 5 ? 'ok' : 'warn', n >= 5 ? '5/5 ✓' : n + '/5');
    const cB = document.getElementById('inv4CardBackup'); if (cB) { cB.classList.toggle('state-ok', n >= 5); cB.classList.remove('state-err'); }
}

// ==================== INV4: CHIPS ====================
function inv4RenderChips(codes) {
    inv4State.codes = codes;
    const wrap = document.getElementById('inv4ChipsWrap');
    if (!wrap) return;
    wrap.innerHTML = '';
    if (!codes.length) { wrap.innerHTML = '<span style="font-size:0.68rem;color:var(--muted);opacity:0.5;font-style:italic;">Belum ada kode…</span>'; return; }
    codes.forEach(c => { const chip = document.createElement('span'); chip.className = 'inv4-chip'; chip.textContent = c; wrap.appendChild(chip); });
    for (let i = codes.length; i < 5; i++) { const chip = document.createElement('span'); chip.className = 'inv4-chip miss'; chip.textContent = 'kode ' + (i+1); wrap.appendChild(chip); }
}

// ==================== INV4: COPY SINGLE FIELD ====================
function inv4CopySingleField(field) {
    let text = '', label = '';
    switch(field) {
        case 'user': text = document.getElementById('inv4User').value.trim(); label = 'Username'; break;
        case 'pass': text = document.getElementById('inv4Pass').value.trim(); label = 'Password'; break;
        case 'robux': text = document.getElementById('inv4Robux').value.trim(); label = 'Jumlah Robux'; break;
        case 'backup': text = inv4State.codes.join(', '); label = 'Backup Code'; break;
    }
    if (!text) { showToast('❌ ' + label + ' kosong!'); return; }
    const doCopy = () => {
        const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        const cardId = 'inv4Card' + (field==='user'?'User':field==='pass'?'Pass':field==='robux'?'Robux':'Backup');
        const card = document.getElementById(cardId); if (card) { card.classList.add('copied-flash'); setTimeout(() => card.classList.remove('copied-flash'), 800); }
        showToast('✅ ' + label + ' dicopy!');
    };
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(() => doCopy()).catch(doCopy); } else { doCopy(); }
}

// ==================== INV4: COPY ALL ====================
function inv4Copy() {
    const robux = inv4State.robux || document.getElementById('inv4Robux').value.trim();
    const user = inv4State.user || document.getElementById('inv4User').value.trim();
    const pass = inv4State.pass || document.getElementById('inv4Pass').value.trim();
    const codes = inv4State.codes;
    if (!robux && !user && !pass) { showToast('❌ Isi dulu data customernya!'); return; }
    const missing = [];
    if (!robux) missing.push('Robux');
    if (!user) missing.push('Username');
    if (!pass) missing.push('Password');
    if (codes.length < 5) missing.push(`Backup Code (${codes.length}/5)`);
    const cp = []; for (let i = 0; i < 5; i++) cp.push(codes[i] || '???');
    const text = 'DETAIL PESANAN KAMU\n\n✨ Jumlah Robux: `' + (robux||'???') + '`\n👤 Username: `' + (user||'???') + '`\n🔑 Password: `' + (pass||'???') + '`\n🛡 Backup Code: `' + cp.join(', ') + '`';
    const doCopy = () => { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast(missing.length ? `⚠️ Dicopy (kurang: ${missing.join(', ')})` : '✅ Invoice dicopy! 🎉'); };
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(() => showToast(missing.length ? `⚠️ Dicopy (kurang: ${missing.join(', ')})` : '✅ Invoice dicopy! 🎉')).catch(doCopy); } else { doCopy(); }
}

// ==================== INV4: AVATAR LOOKUP ====================
function inv4TriggerLookup(username) {
    if (inv4State.lookupAbort) { inv4State.lookupAbort(); inv4State.lookupAbort = null; }
    clearTimeout(inv4State.lookupTimer);
    if (!username || username.trim().length < 3) { inv4ResetAvatar(); return; }
    const clean = username.trim().replace(/\s+/g, '');
    inv4ResetAvatar();
    inv4ShowAvatarLoading('⏳ Mencari...');
    let cancelled = false;
    inv4State.lookupAbort = () => { cancelled = true; };
    inv4State.lookupTimer = setTimeout(async () => {
        if (cancelled) return;
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000);
            const res = await fetch(`${ROBLOX_PROXY_URL}/user-lookup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: clean }), signal: controller.signal });
            clearTimeout(timeout);
            if (cancelled) return;
            const data = await res.json();
            if (cancelled) return;
            console.log('📦 Lookup response:', data);
            if (!data.success || !data.found) { inv4ShowAvatarErr('"' + clean + '" tidak ditemukan'); return; }
            inv4ShowAvatarFoundSimple(data.avatarUrl, data.isPremium, data.id);
        } catch (e) { if (!cancelled) { console.error('❌ Lookup error:', e); inv4ShowAvatarErr('Gagal koneksi'); } }
    }, 200);
}

function inv4ShowAvatarFoundSimple(avatarUrl, isPremium, userId) {
    console.log('🖼️ Avatar URL:', avatarUrl, 'Premium:', isPremium, 'ID:', userId);
    ['inv4AvatarEmpty','inv4AvatarLoading','inv4AvatarErr','inv4UserX'].forEach(id => {
        const el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    ['inv4AvatarFound','inv4UserCheck'].forEach(id => {
        const el = document.getElementById(id); if (el) el.style.display = 'flex';
    });
    const img = document.getElementById('inv4AvatarImg');
    if (img) {
        img.onerror = null; img.onload = null;
        img.style.display = 'block';
        if (avatarUrl && userId) {
            img.src = `${ROBLOX_PROXY_URL}/avatar/${userId}`;
            img.onerror = function() {
                if (avatarUrl) {
                    img.onerror = function() {
                        img.style.display = 'none';
                        document.getElementById('inv4AvatarFound').style.display = 'none';
                        document.getElementById('inv4AvatarEmpty').style.display = 'flex';
                    };
                    img.src = avatarUrl;
                } else {
                    img.style.display = 'none';
                    document.getElementById('inv4AvatarFound').style.display = 'none';
                    document.getElementById('inv4AvatarEmpty').style.display = 'flex';
                }
            };
        } else {
            img.style.display = 'none';
            document.getElementById('inv4AvatarFound').style.display = 'none';
            document.getElementById('inv4AvatarEmpty').style.display = 'flex';
        }
    }
    const prem = document.getElementById('inv4AvatarPrem');
    if (prem) { prem.src = 'foto/prem.png'; prem.style.display = isPremium ? 'block' : 'none'; }
    const card = document.getElementById('inv4CardUser');
    if (card) { card.classList.add('state-ok'); card.classList.remove('state-err'); }
    inv4SetStatus('inv4StatusUser', 'ok', '✓');
}

function inv4ShowAvatarLoading(msg) {
    console.log('⏳ Loading:', msg);
    ['inv4AvatarEmpty','inv4AvatarFound','inv4AvatarErr','inv4UserCheck','inv4UserX'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    const loading = document.getElementById('inv4AvatarLoading'); if (loading) loading.style.display = 'flex';
    const card = document.getElementById('inv4CardUser'); if (card) { card.classList.remove('state-ok','state-err'); const dp = card.querySelector('.inv4-user-detail'); if (dp) dp.remove(); }
    inv4SetStatus('inv4StatusUser', 'warn', msg || '⏳ Mencari...');
}

function inv4ResetAvatar() {
    console.log('🔄 Reset avatar');
    ['inv4AvatarLoading','inv4AvatarFound','inv4AvatarErr','inv4UserCheck','inv4UserX'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    const empty = document.getElementById('inv4AvatarEmpty'); if (empty) empty.style.display = 'flex';
    const img = document.getElementById('inv4AvatarImg'); if (img) { img.src = ''; img.style.display = 'none'; img.onerror = null; img.onload = null; }
    const prem = document.getElementById('inv4AvatarPrem'); if (prem) prem.style.display = 'none';
    const wrap = document.getElementById('inv4UsernameWrap'); if (wrap) wrap.classList.remove('state-found','state-err');
    inv4SetStatus('inv4StatusUser', '', '');
    const card = document.getElementById('inv4CardUser'); if (card) { card.classList.remove('state-ok','state-err'); const dp = card.querySelector('.inv4-user-detail'); if (dp) dp.remove(); }
}

function inv4ShowAvatarErr(msg) {
    console.log('❌ Error:', msg);
    ['inv4AvatarEmpty','inv4AvatarLoading','inv4AvatarFound','inv4UserCheck'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    ['inv4AvatarErr','inv4UserX'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'flex'; });
    const card = document.getElementById('inv4CardUser'); if (card) { card.classList.remove('state-ok'); card.classList.add('state-err'); const dp = card.querySelector('.inv4-user-detail'); if (dp) dp.remove(); }
    inv4SetStatus('inv4StatusUser', 'err', msg || 'tidak ditemukan');
}

// ==================== WARMUP ====================
function warmUpWorker() { fetch(ROBLOX_PROXY_URL).catch(() => {}); }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') warmUpWorker(); });

// ==================== RESELLER DATA ====================
const nominalData = [
    { amount:"80robux",price:"Rp 14.700" },{ amount:"80robux 2",price:"Rp 29.400" },{ amount:"80robux 3",price:"Rp 44.100" },{ amount:"80robux 4",price:"Rp 58.800" },
    { amount:"450prem",price:"Rp 73.500" },{ amount:"500robux",price:"Rp 73.500" },{ amount:"1000prem",price:"Rp 147.000"},{ amount:"1000robux",price:"Rp 147.000"},
    { amount:"1500robux",price:"Rp 220.500"},{ amount:"2000robux",price:"Rp 294.000"},{ amount:"2200prem",price:"Rp 294.000"},{ amount:"2500robux",price:"Rp 367.500"},
    { amount:"3000robux",price:"Rp 441.000"},{ amount:"4000robux",price:"Rp 588.000"},{ amount:"4500robux",price:"Rp 661.500"},{ amount:"5000robux",price:"Rp 735.000"},
    { amount:"10000robux",price:"Rp 1.470.000"},{ amount:"22500robux",price:"Rp 3.013.500"},
];
const resellerData = [
    {displayName:"𝐴.",username:"@thelaxdy",color:"#F59E0B"},{displayName:".",username:"@rnachye",color:"#6B7280"},{displayName:"Adrian",username:"@adrianfpp",color:"#7C3AED"},
    {displayName:"Ayy",username:"@babiayy",color:"#F97316"},{displayName:"Bang Raf",username:"@M eowzstor_2",color:"#EAB308"},{displayName:"BiBi",username:"@antariixca",color:"#EC4899"},
    {displayName:"BW S",username:"@bws45",color:"#059669"},{displayName:"cainecha.",username:"@ceakecaine",color:"#84CC16"},{displayName:"celeste",username:"@sixiSiwhh",color:"#06B6D4"},
];

let rsState = { command:'proses', nominal:null, reseller:null };

function initializeResellerBot() { renderResellerUI(); }
function renderResellerUI() {
    const container = document.querySelector('.reseller-container'); if (!container) return;
    container.innerHTML = `<div class="rs-tabs"><button class="rs-tab ${rsState.command==='proses'?'active':''}" data-cmd="proses"><i class="fas fa-play-circle"></i> /proses</button><button class="rs-tab ${rsState.command==='addsaldo'?'active':''}" data-cmd="addsaldo"><i class="fas fa-plus-circle"></i> /addsaldo</button><button class="rs-tab ${rsState.command==='kurangsaldo'?'active':''}" data-cmd="kurangsaldo"><i class="fas fa-minus-circle"></i> /kurangsaldo</button></div><div class="rs-section ${rsState.command!=='proses'?'hidden':''}"><div class="rs-section-label"><i class="fas fa-coins"></i> Pilih Nominal</div><div class="rs-nominal-wrap">${nominalData.map(n=>`<button class="rs-nominal-chip ${rsState.nominal===n.amount?'selected':''}" data-amount="${n.amount}"><span class="rs-chip-amount">${n.amount}</span><span class="rs-chip-price">${n.price}</span></button>`).join('')}</div></div><div class="rs-section"><div class="rs-section-label"><i class="fas fa-users"></i> Pilih Reseller</div><div class="rs-search-wrap"><i class="fas fa-search rs-search-icon"></i><input type="text" class="rs-search-input" id="rsSearchInput" placeholder="Cari nama..."><button class="rs-clear-search" id="rsClearSearch" style="display:none"><i class="fas fa-times"></i></button></div><div class="rs-reseller-grid" id="rsResellerGrid">${resellerData.map((r,i)=>`<button class="rs-reseller-card ${rsState.reseller===r.username?'selected':''}" data-username="${r.username}" data-index="${i}"><div class="rs-avatar" style="background:${r.color}">${[...r.displayName.trim()][0]||'?'}</div><div class="rs-rinfo"><div class="rs-rname">${r.displayName}</div><div class="rs-rusername">${r.username}</div></div><i class="fas fa-check rs-check-icon"></i></button>`).join('')}</div></div><div class="rs-result-bar ${(rsState.reseller&&(rsState.command!=='proses'||rsState.nominal))?'active':''}" id="rsResultBar"><div class="rs-result-preview" id="rsResultPreview">—</div><button class="rs-copy-btn" id="rsCopyBtn"><i class="fas fa-copy"></i> Copy</button></div>`;
    container.querySelectorAll('.rs-tab').forEach(t=>t.addEventListener('click',function(){rsState.command=this.dataset.cmd;rsState.nominal=null;rsState.reseller=null;renderResellerUI();}));
    container.querySelectorAll('.rs-nominal-chip').forEach(c=>c.addEventListener('click',function(){rsState.nominal=this.dataset.amount;container.querySelectorAll('.rs-nominal-chip').forEach(x=>x.classList.remove('selected'));this.classList.add('selected');updateRsResult();}));
    container.querySelectorAll('.rs-reseller-card').forEach(c=>c.addEventListener('click',function(){rsState.reseller=this.dataset.username;container.querySelectorAll('.rs-reseller-card').forEach(x=>x.classList.remove('selected'));this.classList.add('selected');updateRsResult();}));
    const si=document.getElementById('rsSearchInput'),cb=document.getElementById('rsClearSearch');
    si.addEventListener('input',function(){const q=this.value.toLowerCase().trim();cb.style.display=q?'flex':'none';document.querySelectorAll('.rs-reseller-card').forEach(c=>{const r=resellerData[parseInt(c.dataset.index)];c.style.display=!q||r.displayName.toLowerCase().includes(q)||r.username.toLowerCase().includes(q)?'flex':'none';});});
    cb.addEventListener('click',function(){si.value='';this.style.display='none';document.querySelectorAll('.rs-reseller-card').forEach(c=>c.style.display='flex');});
    document.getElementById('rsCopyBtn').addEventListener('click',copyRsResult);
    updateRsResult();
}
function buildRsCommand(){if(!rsState.reseller)return null;if(rsState.command==='proses'){if(!rsState.nominal)return null;return `/proses ${rsState.nominal} ${rsState.reseller}`;}return `/${rsState.command} ${rsState.reseller}`;}
function updateRsResult(){const cmd=buildRsCommand(),bar=document.getElementById('rsResultBar'),preview=document.getElementById('rsResultPreview');if(!bar||!preview)return;if(cmd){preview.textContent=cmd;bar.classList.add('active');}else{preview.textContent=!rsState.reseller&&rsState.command==='proses'&&!rsState.nominal?'Pilih nominal & reseller':rsState.command==='proses'&&!rsState.nominal?'Pilih nominal dulu':!rsState.reseller?'Pilih reseller dulu':'—';bar.classList.remove('active');}}
function copyRsResult(){const cmd=buildRsCommand();if(!cmd){showToast('❌ Pilih nominal & reseller dulu!');return;}const dc=()=>{const ta=document.createElement('textarea');ta.value=cmd;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast(`✅ Command dicopy: ${cmd}`);};if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(cmd).then(()=>showToast(`✅ Command dicopy: ${cmd}`)).catch(dc);}else{dc();}}

// ==================== ADDRESS MODAL ====================
function addressModalOpen(){document.getElementById('addressModalOverlay').classList.add('open');document.getElementById('addressKeyInput').focus();}
function addressModalClose(){document.getElementById('addressModalOverlay').classList.remove('open');}
function addressToggleKey(btn){const inp=document.getElementById('addressKeyInput');inp.type=inp.type==='password'?'text':'password';btn.querySelector('.toggle-icon').textContent=inp.type==='password'?'👁️':'🙈';}
function addressCheckKey(){const val=document.getElementById('addressKeyInput').value.trim();if(val==='ambatukam'){document.getElementById('addressKeyScreen').style.display='none';document.getElementById('addressContent').style.display='block';}else{document.getElementById('addressKeyError').textContent='❌ Secret key salah!';}}
function addressCopy(text,el){const done=()=>{el.classList.add('copied');showToast('✅ Dicopy!');setTimeout(()=>el.classList.remove('copied'),1500);};if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(()=>{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();});}else{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();}}
document.addEventListener('keydown',e=>{if(e.key==='Escape')addressModalClose();});

// ==================== EXPOSE ====================
window.addressModalOpen=addressModalOpen;window.addressModalClose=addressModalClose;window.addressCheckKey=addressCheckKey;window.addressToggleKey=addressToggleKey;window.addressCopy=addressCopy;
window.switchToolTab=switchToolTab;window.inv4DoPaste=inv4DoPaste;window.inv4OnRawInput=inv4OnRawInput;window.inv4OnRawPaste=inv4OnRawPaste;window.inv4Clear=inv4Clear;
window.inv4FieldChanged=inv4FieldChanged;window.inv4FormatRobuxField=inv4FormatRobuxField;window.inv4TriggerLookup=inv4TriggerLookup;window.inv4BackupRawChanged=inv4BackupRawChanged;
window.inv4ToggleBackupEdit=inv4ToggleBackupEdit;window.inv4Copy=inv4Copy;window.inv4CopySingleField=inv4CopySingleField;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function () {
    renderApp();
    loadTemplates();
    initializeTheme();
    initializeSearch();
    initializeResellerBot();
    updateStats();
    initializeScrollButtons();
    initializeBackupFormatter();
    warmUpWorker();

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('showStats').addEventListener('click', showStats);

    // toggleAllBtn sekarang dihandle di render.js via event listener
    // tapi perlu fallback kalau dipanggil dari luar
    // => sudah di-expose window.toggleAllTemplates

    document.querySelectorAll('.quick-btn').forEach(b => b.addEventListener('click', function () {
        handleQuickAction(this.getAttribute('data-template'));
    }));
});
