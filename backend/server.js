require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Ambil cookie dari environment variable
const ROBLOX_COOKIE = process.env.ROBLOX_COOKIE || '';

console.log('🔐 Cookie loaded:', ROBLOX_COOKIE ? 'YES (length: ' + ROBLOX_COOKIE.length + ')' : 'NO');

// Fungsi fetch dengan autentikasi cookie
async function fetchRoblox(url, options = {}) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'application/json',
    ...options.headers
  };

  // Tambahkan cookie jika ada
  if (ROBLOX_COOKIE) {
    headers['Cookie'] = `.ROBLOSECURITY=${ROBLOX_COOKIE}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
    signal: AbortSignal.timeout(8000)
  });

  if (res.status === 429) {
    console.log('⚠️ Rate limited, waiting...');
    await new Promise(r => setTimeout(r, 2000));
    return fetchRoblox(url, options); // Retry sekali
  }

  return res;
}

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', cookieLoaded: !!ROBLOX_COOKIE });
});

// User lookup dengan cookie
app.post('/user-lookup', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.trim().length < 3) {
      return res.json({ success: false, error: 'Min 3 karakter', found: false });
    }
    const clean = username.trim();
    console.log('🔍 Looking up:', clean);

    // Step 1: Resolve username
    const resolveRes = await fetchRoblox('https://users.roblox.com/v1/usernames/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernames: [clean], excludeBannedUsers: false })
    });
    const resolveData = await resolveRes.json();

    if (!resolveData.data || resolveData.data.length === 0) {
      return res.json({ success: false, found: false, error: 'Tidak ditemukan' });
    }

    const user = resolveData.data[0];
    const userId = user.id;
    console.log('✅ ID:', userId);

    // Step 2: Ambil avatar, user detail, dan premium (dengan cookie)
    const [avatarJson, userDetailJson, premiumCheck] = await Promise.allSettled([
      fetchRoblox(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`),
      fetchRoblox(`https://users.roblox.com/v1/users/${userId}`),
      fetchRoblox(`https://premiumfeatures.roblox.com/v1/users/${userId}/validate-membership`)
    ]);

    // Avatar
    let avatarUrl = null;
    if (avatarJson.status === 'fulfilled' && avatarJson.value.ok) {
      const avData = await avatarJson.value.json();
      avatarUrl = avData.data?.[0]?.imageUrl || null;
    }

    // User detail
    let userDetail = {};
    if (userDetailJson.status === 'fulfilled' && userDetailJson.value.ok) {
      userDetail = await userDetailJson.value.json();
    }

    // Premium check
    let isPremium = false;
    if (premiumCheck.status === 'fulfilled' && premiumCheck.value.ok) {
      const text = await premiumCheck.value.text();
      isPremium = (text.toLowerCase() === 'true');
    }

    // Fallback: cek dari user detail
    if (!isPremium && (userDetail.isPremium || userDetail.hasPremium)) {
      isPremium = true;
    }

    console.log('🖼️ Avatar:', avatarUrl ? 'OK' : 'NULL', '| 👑 Premium:', isPremium);

    res.json({
      success: true,
      found: true,
      id: userId,
      name: user.name,
      displayName: user.displayName,
      avatarUrl: avatarUrl,
      isPremium: isPremium,
      hasVerifiedBadge: userDetail.hasVerifiedBadge || false
    });

  } catch (err) {
    console.error('❌ Error:', err.message);
    res.json({ success: false, found: false, error: err.message });
  }
});

// Avatar proxy (dengan cookie)
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
      // Return 1x1 transparent PNG instead of 404
      const emptyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
      res.set('Content-Type', 'image/png');
      res.send(emptyPng);
    }
  } catch (err) {
    res.status(500).end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('✅ Server running on port', PORT));
