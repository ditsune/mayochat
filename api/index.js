require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');

const app = express();

// ==================== ENV CHECK ====================
const ROBLOX_COOKIE = process.env.ROBLOX_COOKIE || '';

if (!ROBLOX_COOKIE) {
  console.warn('⚠️  WARNING: ROBLOX_COOKIE tidak di-set! Set di Vercel → Settings → Environment Variables, lalu redeploy.');
} else {
  console.log('🔐 Cookie loaded: YES (length: ' + ROBLOX_COOKIE.length + ')');
}

const SERVER_STARTED_AT = Date.now();
const APP_VERSION = '1.1.0';

// ==================== MIDDLEWARE ====================
app.use(cors({ origin: ['https://mayochatnew.vercel.app'] })); // ganti sesuai domain lu
app.use(express.json());

// Rate limiter khusus buat /user-lookup — 20 request per menit per IP
const lookupLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, found: false, error: 'Terlalu banyak request, coba lagi sebentar.' }
});

// ==================== SIMPLE IN-MEMORY CACHE ====================
// Cache lookup selama 45 detik biar gak double-hit Roblox API
const lookupCache = new Map();
const CACHE_TTL_MS = 45 * 1000;

function getCached(key) {
  const entry = lookupCache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    lookupCache.delete(key);
    return null;
  }
  return entry.data;
}

function setCached(key, data) {
  lookupCache.set(key, { data, timestamp: Date.now() });
  // Bersihin cache lama biar gak numpuk terus di memory
  if (lookupCache.size > 200) {
    const oldestKey = lookupCache.keys().next().value;
    lookupCache.delete(oldestKey);
  }
}

// ==================== FETCH HELPER ====================
async function fetchRoblox(url, options = {}) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'application/json',
    ...options.headers
  };

  if (ROBLOX_COOKIE) {
    headers['Cookie'] = `.ROBLOSECURITY=${ROBLOX_COOKIE}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
    signal: AbortSignal.timeout(8000)
  });

  if (res.status === 429) {
    console.log('⚠️ Rate limited by Roblox, waiting...');
    await new Promise(r => setTimeout(r, 2000));
    return fetchRoblox(url, options);
  }

  return res;
}

// ==================== HEALTH CHECK ====================
app.get('/', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - SERVER_STARTED_AT) / 1000);
  res.json({
    status: 'ok',
    version: APP_VERSION,
    cookieLoaded: !!ROBLOX_COOKIE,
    uptimeSeconds,
    cacheSize: lookupCache.size,
    timestamp: new Date().toISOString()
  });
});

// ==================== USER LOOKUP ====================
app.post('/user-lookup', lookupLimiter, async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.trim().length < 3) {
      return res.json({ success: false, error: 'Min 3 karakter', found: false });
    }
    const clean = username.trim().toLowerCase();
    console.log('🔍 Looking up:', clean);

    // Cek cache dulu sebelum hit Roblox API
    const cached = getCached(clean);
    if (cached) {
      console.log('⚡ Cache hit:', clean);
      return res.json(cached);
    }

    const resolveRes = await fetchRoblox('https://users.roblox.com/v1/usernames/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernames: [clean], excludeBannedUsers: false })
    });
    const resolveData = await resolveRes.json();

    if (!resolveData.data || resolveData.data.length === 0) {
      const notFoundResult = { success: false, found: false, error: 'Tidak ditemukan' };
      setCached(clean, notFoundResult);
      return res.json(notFoundResult);
    }

    const user = resolveData.data[0];
    const userId = user.id;
    console.log('✅ ID:', userId);

    const [avatarJson, userDetailJson, premiumCheck] = await Promise.allSettled([
      fetchRoblox(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`),
      fetchRoblox(`https://users.roblox.com/v1/users/${userId}`),
      fetchRoblox(`https://premiumfeatures.roblox.com/v1/users/${userId}/validate-membership`)
    ]);

    let avatarUrl = null;
    if (avatarJson.status === 'fulfilled' && avatarJson.value.ok) {
      const avData = await avatarJson.value.json();
      avatarUrl = avData.data?.[0]?.imageUrl || null;
    }

    let userDetail = {};
    if (userDetailJson.status === 'fulfilled' && userDetailJson.value.ok) {
      userDetail = await userDetailJson.value.json();
    }

    let isPremium = false;
    if (premiumCheck.status === 'fulfilled' && premiumCheck.value.ok) {
      const text = await premiumCheck.value.text();
      isPremium = (text.toLowerCase() === 'true');
    }

    if (!isPremium && (userDetail.isPremium || userDetail.hasPremium)) {
      isPremium = true;
    }

    console.log('🖼️ Avatar:', avatarUrl ? 'OK' : 'NULL', '| 👑 Premium:', isPremium);

    const result = {
      success: true,
      found: true,
      id: userId,
      name: user.name,
      displayName: user.displayName,
      avatarUrl: avatarUrl,
      isPremium: isPremium,
      hasVerifiedBadge: userDetail.hasVerifiedBadge || false
    };

    setCached(clean, result);
    res.json(result);

  } catch (err) {
    console.error('❌ Error:', err.message);
    res.json({ success: false, found: false, error: err.message });
  }
});

// ==================== AVATAR PROXY ====================
app.get('/avatar/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const avRes = await fetchRoblox(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`);
    const avData = await avRes.json();
    const imageUrl = avData.data?.[0]?.imageUrl;

    if (imageUrl) {
      const imgRes = await fetch(imageUrl, { signal: AbortSignal.timeout(5000) });
      const buffer = await imgRes.buffer();
      res.set('Content-Type', 'image/png');
      res.set('Cache-Control', 'public, max-age=3600');
      res.send(buffer);
    } else {
      const emptyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
      res.set('Content-Type', 'image/png');
      res.send(emptyPng);
    }
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = app;