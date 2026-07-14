export function renderApp() {
    document.getElementById('app').innerHTML = `

<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-brand">
            <div class="logo">
                <a href="#" class="logo-link" title="Alamat Bill Gates" id="logoLink">
                    <img src="./foto/fas.png" alt="Logo" width="40" height="40">
                </a>
                <h1>Take Order</h1>
            </div>
            <p class="tagline">Created by Dits ^.^</p>
        </div>
        <div class="nav-controls">
            <div class="search-box">
                <i class="fa fa-search"></i>
                <input type="text" id="searchInput" placeholder="Cari template...">
            </div>
            <button id="themeToggle" class="theme-btn"><i class="fas fa-moon"></i></button>
            <button id="showStats" class="stats-btn">
                <i class="fas fa-chart-bar"></i>
                <span class="stat-badge">0</span>
            </button>
        </div>
    </div>
</nav>

<main class="main-container">

    <!-- Hero -->
    <section class="hero">
        <div class="container-main">
            <div class="container-banner">
                <div class="image-banner-hero">
                    <img src="foto/bocilmayo.png" alt="Banner Mayoblox">
                </div>
                <div class="title-banner-hero">
                    <div>
                        <h1><i class="fas fa-fire"></i> Template Chat</h1>
                        <p>Click to Copy 📋</p>
                        <div class="hero-stats">
                            <div class="stat">
                                <i class="fas fa-copy"></i>
                                <span><strong id="totalUsed">0</strong> template dipakai hari ini</span>
                            </div>
                            <div class="stat">
                                <i class="fas fa-clock"></i>
                                <span>Online: <strong>24 jam</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Actions -->
    <section class="quick-actions-section">
        <h3><i class="fas fa-bolt"></i> Quick Actions</h3>

        <div class="quick-group">
            <div class="quick-group-label quick-group-order">Order</div>
            <div class="quick-actions">
                <button class="quick-btn" data-template="order"><i class="fas fa-shopping-cart"></i><span>Cara Order</span></button>
                <button class="quick-btn" data-template="weborder"><i class="fas fa-globe"></i><span>Order ke Web</span></button>
                <button class="quick-btn" data-template="gp"><i class="fas fa-ticket-alt"></i><span>Via Gamepass</span></button>
                <button class="quick-btn" data-template="list"><i class="fas fa-list-ol"></i><span>Klik List</span></button>
                <button class="quick-btn" data-template="thanks"><i class="fas fa-heart"></i><span>Terima Kasih</span></button>
            </div>
        </div>

        <div class="quick-group">
            <div class="quick-group-label quick-group-problem">Problem</div>
            <div class="quick-actions">
                <button class="quick-btn" data-template="wrongpw"><i class="fas fa-lock"></i><span>PW Salah</span></button>
                <button class="quick-btn" data-template="reset"><i class="fas fa-redo"></i><span>Reset PW</span></button>
                <button class="quick-btn" data-template="regencode"><i class="fas fa-shield-alt"></i><span>Invalid BC</span></button>
                <button class="quick-btn" data-template="webproblem"><i class="fas fa-times-circle"></i><span>BC Ngasal</span></button>
                <button class="quick-btn" data-template="queue"><i class="fas fa-user-slash"></i><span>Acc Only</span></button>
                <button class="quick-btn" data-template="fix"><i class="fas fa-fingerprint"></i><span>Passkey Aktif</span></button>
                <button class="quick-btn" data-template="qr"><i class="fas fa-shield-virus"></i><span>Hardware Passkey</span></button>
                <button class="quick-btn" data-template="howinvalid"><i class="fas fa-key"></i><span>How Invalid</span></button>
                <button class="quick-btn" data-template="how2step"><i class="fas fa-toggle-off"></i><span>How 2step</span></button>
            </div>
        </div>

        <div class="quick-group">
            <div class="quick-group-label quick-group-other">Lainnya</div>
            <div class="quick-actions">
                <button class="quick-btn" data-template="backup"><i class="fas fa-key"></i><span>Tutor BC Full</span></button>
                <button class="quick-btn" data-template="estimation"><i class="fas fa-plus-circle"></i><span>Bikin BC GK</span></button>
                <button class="quick-btn" data-template="checklogin"><i class="fas fa-sign-in-alt"></i><span>Cek Login</span></button>
                <button class="quick-btn" data-template="checkemail"><i class="fas fa-envelope"></i><span>Cek Email</span></button>
                <button class="quick-btn" data-template="error"><i class="fas fa-sign-out-alt"></i><span>Ke Logout</span></button>
                <button class="quick-btn" data-template="2step"><i class="fas fa-exclamation-triangle"></i><span>2-Step Error</span></button>
                <button class="quick-btn" data-template="prem"><i class="fas fa-crown"></i><span>Prem Explain</span></button>
                <button class="quick-btn" data-template="gkmsk"><i class="fas fa-envelope-open-text"></i><span>Kode Gk Msk</span></button>
                <button class="quick-btn" data-template="gabisa"><i class="fas fa-ban"></i><span>Gabisa</span></button>
                <button class="quick-btn" data-template="cs"><i class="fas fa-headset"></i><span>Hubungi CS</span></button>
            </div>
        </div>
    </section>

    <!-- Tools Section -->
    <section class="tools-section">
        <h3><i class="fas fa-tools"></i> Tools</h3>
        <div class="backup-formatter">
            <div class="tools-tabs">
                <button class="tools-tab active" id="tabInvoice">
                    <i class="fas fa-file-invoice"></i> Invoice Maker
                </button>
                <button class="tools-tab" id="tabBackup">
                    <i class="fas fa-code"></i> Backup Code
                </button>
            </div>
            <div id="paneInvoice" class="tools-pane">
                <div class="inv4-top">
                    <textarea
                        class="inv4-textarea"
                        id="inv4RawPaste"
                        placeholder="Paste chat customer di sini — username, password, nominal robux, kode backup, berantakan pun oke…"
                        rows="4"
                    ></textarea>
                    <div class="inv4-top-btns">
                        <button class="inv4-btn-paste" id="inv4BtnPaste">
                            <i class="fas fa-paste"></i> Auto Paste
                        </button>
                        <button class="inv4-btn-clear" id="inv4BtnClear">
                            <i class="fas fa-trash-alt"></i> Clear
                        </button>
                    </div>
                </div>
                <div class="inv4-grid">
                    <div class="inv4-card inv4-card-user inv4-card-clickable" id="inv4CardUser" data-field="username">
                        <div class="inv4-card-header">
                            <div class="inv4-card-label">👤 Username</div>
                            <button class="inv4-card-copy-icon" id="inv4CopyUserBtn" title="Copy username">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="inv4-user-row" id="inv4UsernameWrap">
                            <div class="inv4-avatar-slot">
                                <div class="inv4-av-state" id="inv4AvatarEmpty"><i class="fas fa-user-circle inv4-av-empty-icon"></i></div>
                                <div class="inv4-av-state" id="inv4AvatarLoading" style="display:none;"><div class="inv4-skel-circle"></div><div class="inv4-av-spinner"></div></div>
                                <div class="inv4-av-state" id="inv4AvatarFound" style="display:none;"><img id="inv4AvatarImg" src="" alt="" class="inv4-av-img"><img id="inv4AvatarPrem" src="foto/prem.png" class="inv4-prem-badge" style="display:none;"></div>
                                <div class="inv4-av-state" id="inv4AvatarErr" style="display:none;"><i class="fas fa-user-circle inv4-av-err-icon"></i></div>
                            </div>
                            <input class="inv4-card-input inv4-user-input" id="inv4User" placeholder="username Roblox">
                            <span class="inv4-check-icon" id="inv4UserCheck" style="display:none;"><i class="fas fa-check-circle"></i></span>
                            <span class="inv4-x-icon" id="inv4UserX" style="display:none;"><i class="fas fa-times-circle"></i></span>
                        </div>
                        <div class="inv4-card-status" id="inv4StatusUser"></div>
                    </div>
                    <div class="inv4-card inv4-card-clickable" id="inv4CardPass" data-field="password">
                        <div class="inv4-card-header">
                            <div class="inv4-card-label">🔑 Password</div>
                            <button class="inv4-card-copy-icon" id="inv4CopyPassBtn" title="Copy password">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <input class="inv4-card-input" id="inv4Pass" placeholder="password akun">
                        <div class="inv4-card-status" id="inv4StatusPass"></div>
                    </div>
                    <div class="inv4-card inv4-card-clickable" id="inv4CardRobux" data-field="robux">
                        <div class="inv4-card-header">
                            <div class="inv4-card-label">✨ Jumlah Robux</div>
                            <button class="inv4-card-copy-icon" id="inv4CopyRobuxBtn" title="Copy jumlah robux">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <input class="inv4-card-input" id="inv4Robux" placeholder="1000, 500, 2200prem…">
                        <div class="inv4-card-status" id="inv4StatusRobux"></div>
                    </div>
                    <div class="inv4-card inv4-card-backup inv4-card-clickable" id="inv4CardBackup" data-field="backup">
                        <div class="inv4-card-header">
                            <div class="inv4-card-label">🔐 Backup Code</div>
                            <button class="inv4-card-copy-icon" id="inv4CopyBackupBtn" title="Copy kode backup">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="inv4-chips-wrap" id="inv4ChipsWrap"></div>
                        <textarea class="inv4-card-input inv4-backup-raw" id="inv4BackupRaw" placeholder="Paste 5 kode backup…" rows="2" style="display:none;"></textarea>
                        <div class="inv4-backup-footer">
                            <div class="inv4-card-status" id="inv4StatusBackup"></div>
                            <button class="inv4-edit-btn" id="inv4EditBtn"><i class="fas fa-edit"></i> Edit</button>
                        </div>
                    </div>
                </div>
                <button class="inv4-copy-btn" id="inv4CopyBtn"><i class="fas fa-copy"></i> Copy ke Telegram</button>
            </div>
            <div id="paneBackup" class="tools-pane" style="display:none;">
                <div class="formatter-header">
                    <div class="formatter-header-buttons">
                        <button class="auto-paste-btn" id="autoPasteBtn"><i class="fas fa-paste"></i> Auto Paste</button>
                        <button class="btn-clear" id="clearBackupBtn"><i class="fas fa-trash-alt"></i> Clear</button>
                    </div>
                </div>
                <div class="formatter-container">
                    <div class="formatter-input">
                        <div class="formatter-label"><i class="fas fa-keyboard"></i><span>Masukkan 5 Kode Backup (format apa saja)</span></div>
                        <textarea class="code-input" id="backupInput" placeholder="Masukkan 5 kode backup" rows="8"></textarea>
                        <div class="input-info"><i class="fas fa-info-circle"></i><span>Bot hanya membaca format yang benar. Fitur ini mengubah semua format menjadi format yang benar.</span></div>
                    </div>
                    <div class="formatter-output">
                        <div class="formatter-label"><i class="fas fa-clipboard-check"></i><span>Hasil Format untuk Bot</span></div>
                        <div class="code-output" id="backupOutput">🔍 WAJIB DIISI 5 CODE BACKUP!!
- code back up 1: 
- code back up 2: 
- code back up 3: 
- code back up 4: 
- code back up 5: </div>
                        <button class="copy-btn" id="copyBackupBtn"><i class="fas fa-copy"></i> Copy Format</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Template Categories — DIHAPUS, digabung ke templates-section -->

    <!-- Templates Section -->
    <section class="templates-section">
        <div class="templates-header">
            <h3><i class="fas fa-copy"></i> Semua Template</h3>
            <div class="templates-controls">
                <div class="templates-count"><span id="templateCount">0</span> template tersedia</div>
                <button class="toggle-all-btn" id="toggleAllBtn"><i class="fas fa-eye"></i><span>Tampilkan</span></button>
            </div>
        </div>

        <!-- Filter bar: muncul saat grid dibuka -->
        <div class="template-filter-bar" id="templateFilterBar" style="display:none;">
            <div class="tmpl-search-wrap">
                <i class="fas fa-search tmpl-search-icon"></i>
                <input
                    type="text"
                    id="templateSearchInline"
                    class="tmpl-search-input"
                    placeholder="Cari template..."
                >
            </div>
            <div class="tmpl-cat-pills" id="tmplCatPills">
                <button class="tmpl-pill active" data-cat="all">Semua</button>
                <button class="tmpl-pill" data-cat="order">Order</button>
                <button class="tmpl-pill" data-cat="problem">Masalah</button>
                <button class="tmpl-pill" data-cat="status">Status</button>
                <button class="tmpl-pill" data-cat="security">Keamanan</button>
                <button class="tmpl-pill" data-cat="keamanan">Keamanan 2</button>
                <button class="tmpl-pill" data-cat="other">Lainnya</button>
            </div>
        </div>

        <div class="templates-grid hidden" id="templatesGrid"></div>
        <div class="tmpl-empty" id="tmplEmpty" style="display:none;">
            <i class="fas fa-search"></i>
            <p>Gak ada template yang cocok.</p>
        </div>
    </section>

    <!-- Reseller Section -->
    <section class="reseller-section">
        <h3><i class="fas fa-robot"></i> Reseller Proses</h3>
        <br>
        <div class="reseller-container"></div>
    </section>

</main>
    `;

    // Attach event listeners
    document.getElementById('logoLink').addEventListener('click', (e) => {
        e.preventDefault();
        window.addressModalOpen();
    });

    document.getElementById('addressModalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('addressModalOverlay')) {
            window.addressModalClose();
        }
    });

    document.getElementById('addressModalCloseBtn').addEventListener('click', () => {
        window.addressModalClose();
    });

    document.getElementById('addressToggleBtn').addEventListener('click', function () {
        window.addressToggleKey(this);
    });

    document.getElementById('addressUnlockBtn').addEventListener('click', () => {
        window.addressCheckKey();
    });

    document.getElementById('addressKeyInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') window.addressCheckKey();
    });

    const addrMap = {
        addrStreet: '475 S Imperial Ave',
        addrCity: 'Burns',
        addrState: 'Oregon',
        addrZip: '97720-2349'
    };
    Object.entries(addrMap).forEach(([id, val]) => {
        document.getElementById(id).addEventListener('click', function () {
            window.addressCopy(val, this);
        });
    });

    document.getElementById('tabInvoice').addEventListener('click', () => window.switchToolTab('invoice'));
    document.getElementById('tabBackup').addEventListener('click', () => window.switchToolTab('backup'));

    // Invoice Maker buttons
    document.getElementById('inv4BtnPaste').addEventListener('click', () => window.inv4DoPaste());
    document.getElementById('inv4BtnClear').addEventListener('click', () => window.inv4Clear());
    document.getElementById('inv4CopyBtn').addEventListener('click', () => window.inv4Copy());
    document.getElementById('inv4EditBtn').addEventListener('click', () => window.inv4ToggleBackupEdit());

    // Invoice field inputs
    document.getElementById('inv4Robux').addEventListener('input', () => window.inv4FieldChanged());
    document.getElementById('inv4Robux').addEventListener('blur', () => window.inv4FormatRobuxField());
    document.getElementById('inv4User').addEventListener('input', function () {
        window.inv4FieldChanged();
        window.inv4TriggerLookup(this.value.trim());
    });
    document.getElementById('inv4Pass').addEventListener('input', () => window.inv4FieldChanged());

    // Raw paste textarea
    document.getElementById('inv4RawPaste').addEventListener('paste', (e) => window.inv4OnRawPaste(e));
    document.getElementById('inv4RawPaste').addEventListener('input', () => window.inv4OnRawInput());

    // Backup raw textarea
    document.getElementById('inv4BackupRaw').addEventListener('input', () => window.inv4BackupRawChanged());

    // CLICK TO COPY - Card clicks and icon copy buttons
    document.getElementById('inv4CardUser').addEventListener('click', function (e) {
        if (!e.target.closest('input') && !e.target.closest('button')) {
            window.inv4CopySingleField('user');
        }
    });
    document.getElementById('inv4CopyUserBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.inv4CopySingleField('user');
    });

    document.getElementById('inv4CardPass').addEventListener('click', function (e) {
        if (!e.target.closest('input') && !e.target.closest('button')) {
            window.inv4CopySingleField('pass');
        }
    });
    document.getElementById('inv4CopyPassBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.inv4CopySingleField('pass');
    });

    document.getElementById('inv4CardRobux').addEventListener('click', function (e) {
        if (!e.target.closest('input') && !e.target.closest('button')) {
            window.inv4CopySingleField('robux');
        }
    });
    document.getElementById('inv4CopyRobuxBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.inv4CopySingleField('robux');
    });

    document.getElementById('inv4CardBackup').addEventListener('click', function (e) {
        if (!e.target.closest('textarea') && !e.target.closest('button') && !e.target.closest('.inv4-edit-btn')) {
            window.inv4CopySingleField('backup');
        }
    });
    document.getElementById('inv4CopyBackupBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.inv4CopySingleField('backup');
    });

    // ── TEMPLATE FILTER BAR ──────────────────────────────────────────

    // Toggle Tampilkan: munculkan/sembunyikan filter bar sekalian
    document.getElementById('toggleAllBtn').addEventListener('click', function () {
        window.toggleAllTemplates();
        const grid = document.getElementById('templatesGrid');
        const filterBar = document.getElementById('templateFilterBar');
        const isNowVisible = !grid.classList.contains('hidden');
        filterBar.style.display = isNowVisible ? 'flex' : 'none';
        if (isNowVisible) window.applyTemplateFilter();
    });

    // Inline search
    document.getElementById('templateSearchInline').addEventListener('input', () => window.applyTemplateFilter());

    // Inline category pills
    document.getElementById('tmplCatPills').addEventListener('click', function (e) {
        const pill = e.target.closest('.tmpl-pill');
        if (!pill) return;
        this.querySelectorAll('.tmpl-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        window.applyTemplateFilter();
    });
}
