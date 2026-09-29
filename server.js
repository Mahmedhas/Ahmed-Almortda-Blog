/**
 * خادم مدونة فضيلة الشيخ أحمد مرتضى حامد الرسمية
 * Node.js Native HTTP Server, Security Engine & YouTube Auto-Sync
 * محصن أمنياً بالكامل بدون أي مكتبات خارجية - يعمل فوراً بأمر: node server.js
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const VIDEOS_FILE = path.join(DATA_DIR, 'videos.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const AUTH_FILE = path.join(DATA_DIR, 'auth.json');

// التأكد من وجود المجلدات الضرورية
[DATA_DIR, UPLOADS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// دالة مساعدة لقراءة ملفات JSON
function readJSON(filePath, fallback = []) {
    try {
        if (!fs.existsSync(filePath)) return fallback;
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
        return fallback;
    }
}

// دالة مساعدة لكتابة ملفات JSON
function writeJSON(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        return true;
    } catch (err) {
        console.error(`Error writing ${filePath}:`, err.message);
        return false;
    }
}

// دالة مزامنة صورة الهيرو مباشرة في ملف index.html لمنع أي وميض للصورة القديمة
function syncHeroImageInIndexHtml(settings) {
    try {
        const indexPath = path.join(__dirname, 'index.html');
        if (!fs.existsSync(indexPath)) return;
        const heroImg = (settings && settings.heroMedia && (settings.heroMedia.customImageUrl || settings.heroMedia.imageUrl)) || '';
        if (!heroImg) return;

        let html = fs.readFileSync(indexPath, 'utf-8');

        // تحديث src في وسم heroCustomImage
        const imgRegex = /(<img\s+[^>]*id=["']heroCustomImage["'][^>]*src=["'])([^"']+)(["'][^>]*>)/i;
        if (imgRegex.test(html)) {
            html = html.replace(imgRegex, `$1${heroImg}$3`);
        } else {
            const imgRegexAlt = /(<img\s+[^>]*src=["'])([^"']+)(["'][^>]*id=["']heroCustomImage["'][^>]*>)/i;
            if (imgRegexAlt.test(html)) {
                html = html.replace(imgRegexAlt, `$1${heroImg}$3`);
            }
        }

        const toFullUrl = (u) => {
            if (!u) return '';
            if (u.startsWith('http://') || u.startsWith('https://')) return u;
            return `https://sheikh-ahmed-mortada.com/${u.replace(/^\/+/, '')}`;
        };
        const fullHeroImg = toFullUrl(heroImg);

        // تحديث وسوم المشاركة og:image و twitter:image و schema.org
        html = html.replace(/(<meta\s+property=["']og:image["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
        html = html.replace(/(<meta\s+property=["']og:image:secure_url["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
        html = html.replace(/(<meta\s+name=["']twitter:image["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
        html = html.replace(/("url":\s*")([^"]+uploads\/hero_[^"]+)(")/i, `$1${fullHeroImg}$3`);

        fs.writeFileSync(indexPath, html, 'utf-8');
        console.log(`[HeroSync] تم تحديث صورة الهيرو في index.html بنجاح: ${heroImg}`);
    } catch (err) {
        console.error('[HeroSync] خطأ أثناء مزامنة index.html:', err.message);
    }
}

// ==========================================================================
// 1. نظام التشفير وإدارة الأمان (Cryptography & Auth Engine)
// ==========================================================================

function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

// تهيئة ملف بيانات الدخول المشفر إذا لم يكن موجوداً
function initAuthCredentials() {
    if (!fs.existsSync(AUTH_FILE)) {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = hashPassword('sheikh2026', salt);
        const defaultAuth = {
            username: 'admin',
            salt: salt,
            hash: hash,
            updatedAt: new Date().toISOString()
        };
        writeJSON(AUTH_FILE, defaultAuth);
        console.log('[Security] تم إنشاء حساب المشرف المشفر بنجاح (المستخدم: admin / كلمة المرور الافتراضية: sheikh2026)');
    }
}
initAuthCredentials();

// تخزين الجلسات ومحاولات تسجيل الدخول في الذاكرة
const activeSessions = new Map(); // token -> { username, expiresAt }
const loginAttempts = new Map();  // ip -> { count, blockedUntil }
let lastPublicSyncTime = 0;

function getClientIp(req) {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
    const attempt = loginAttempts.get(ip);
    if (!attempt) return false;
    if (Date.now() < attempt.blockedUntil) return true;
    if (Date.now() >= attempt.blockedUntil) {
        loginAttempts.delete(ip);
        return false;
    }
    return false;
}

function recordFailedLogin(ip) {
    const now = Date.now();
    let attempt = loginAttempts.get(ip) || { count: 0, blockedUntil: 0 };
    attempt.count += 1;
    if (attempt.count >= 5) {
        attempt.blockedUntil = now + (15 * 60 * 1000); // حظر 15 دقيقة
        console.warn(`[Security Alert] تم حظر محاولات الدخول لـ IP: ${ip} لمدة 15 دقيقة.`);
    }
    loginAttempts.set(ip, attempt);
}

function resetLoginAttempts(ip) {
    loginAttempts.delete(ip);
}

function createSessionToken(username) {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 ساعة
    activeSessions.set(token, { username, expiresAt });
    return token;
}

function verifySession(req) {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (!token) return null;
    const session = activeSessions.get(token);
    if (!session) return null;
    if (Date.now() > session.expiresAt) {
        activeSessions.delete(token);
        return null;
    }
    return session;
}

// ترويسات الأمان الصارمة لحماية المدونة
function setSecurityHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.removeHeader('X-Powered-By');
}

// إرسال استجابة JSON
function sendJSON(res, statusCode, data) {
    setSecurityHeaders(res);
    res.writeHead(statusCode, { 
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0'
    });
    res.end(JSON.stringify(data));
}

// ==========================================================================
// 2. محرك المزامنة التلقائية مع يوتيوب عبر RSS Feed الرسمي
// ==========================================================================
function syncYouTubeFeed() {
    return new Promise((resolve) => {
        const settings = readJSON(SETTINGS_FILE, {});
        const channelId = settings.channelId || 'UCB_Glq0cZ2TQtGiWfqUotJw';
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

        console.log(`[YouTube Sync] جاري فحص تغذية القناة الرسمية (${channelId})...`);

        const req = https.get(rssUrl, { rejectUnauthorized: false }, (resp) => {
            if (resp.statusCode !== 200) {
                console.error(`[YouTube Sync] فشل جلب التغذية (كود ${resp.statusCode})`);
                return resolve({ success: false, error: `HTTP ${resp.statusCode}` });
            }

            let xml = '';
            resp.on('data', chunk => xml += chunk);
            resp.on('end', () => {
                try {
                    const entryBlocks = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
                    
                    const existingVideos = readJSON(VIDEOS_FILE, []);
                    const existingIds = new Set(existingVideos.map(v => v.id));
                    let addedCount = 0;
                    let updatedViewsCount = 0;

                    const newVideos = [];
                    for (const match of entryBlocks) {
                        const block = match[1];
                        const idMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
                        const titleMatch = block.match(/<title>([^<]+)<\/title>/);
                        const publishedMatch = block.match(/<published>([^<]+)<\/published>/);
                        const descMatch = block.match(/<media:description>([\s\S]*?)<\/media:description>/);
                        const viewsMatch = block.match(/views=["'](\d+)["']/);

                        if (!idMatch || !titleMatch) continue;
                        const vidId = idMatch[1].trim();
                        const realViews = viewsMatch ? parseInt(viewsMatch[1], 10) : 0;

                        let title = titleMatch[1].trim()
                            .replace(/&quot;/g, '"')
                            .replace(/&amp;/g, '&')
                            .replace(/&#39;/g, "'")
                            .replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>');
                        const published = publishedMatch ? publishedMatch[1].trim().split('T')[0] : new Date().toISOString().split('T')[0];
                        let descText = descMatch ? descMatch[1].trim().replace(/\n+/g, ' ').substring(0, 180) : '';
                        if (!descText) {
                            descText = `درس ومجلس علمي منشور حديثاً على القناة الرسمية لفضيلة الشيخ أحمد مرتضى حامد.`;
                        }

                        if (!existingIds.has(vidId)) {
                            let category = 'ساحة_الأقصر';
                            if (title.includes('مولد') || title.includes('المولد') || title.includes('رمضان') || title.includes('ليلة القدر') || title.includes('الإسراء')) {
                                category = 'مناسبات_وأمسيات';
                            } else if (title.includes('السيرة') || title.includes('الشمائل') || title.includes('الأربعاء')) {
                                category = 'السيرة_النبوية';
                            } else if (title.includes('تزكية') || title.includes('السلوك') || title.includes('الأخلاق') || title.includes('القلب')) {
                                category = 'تزكية_النفوس';
                            } else if (title.includes('قرآن') || title.includes('القرآن') || title.includes('سورة') || title.includes('تفسير')) {
                                category = 'علوم_القرآن';
                            }

                            const newVid = {
                                id: vidId,
                                title: title,
                                category: category,
                                date: published,
                                duration: 'درس مرئي حديث',
                                views: realViews,
                                desc: descText
                            };

                            newVideos.push(newVid);
                            existingIds.add(vidId);
                            addedCount++;
                        } else if (realViews > 0) {
                            const existingVid = existingVideos.find(v => v.id === vidId);
                            if (existingVid && existingVid.views !== realViews) {
                                existingVid.views = realViews;
                                updatedViewsCount++;
                            }
                        }
                    }

                    if (addedCount > 0 || updatedViewsCount > 0) {
                        const updated = [...newVideos, ...existingVideos];
                        writeJSON(VIDEOS_FILE, updated);
                        console.log(`[YouTube Sync] تم تحديث الأرشيف (فيديوهات جديدة: ${addedCount}، تحديث مشاهدات: ${updatedViewsCount}) 🎉`);
                    } else {
                        console.log(`[YouTube Sync] لا توجد فيديوهات جديدة غير مسجلة. الأرشيف محدث بالكامل.`);
                    }

                    settings.lastSyncTime = new Date().toISOString();
                    writeJSON(SETTINGS_FILE, settings);

                    resolve({ success: true, addedCount, totalVideos: existingVideos.length + addedCount, lastSyncTime: settings.lastSyncTime });
                } catch (parseErr) {
                    console.error('[YouTube Sync] خطأ في معالجة التغذية:', parseErr.message);
                    resolve({ success: false, error: parseErr.message });
                }
            });
        });

        req.on('error', (e) => {
            console.error('[YouTube Sync] خطأ في الاتصال بالإنترنت:', e.message);
            resolve({ success: false, error: e.message });
        });

        req.setTimeout(12000, () => {
            req.destroy();
            resolve({ success: false, error: 'Timeout' });
        });
    });
}

// تشغيل المزامنة التلقائية فور تشغيل الخادم ثم كل 3 دقائق
syncYouTubeFeed();
setInterval(syncYouTubeFeed, 3 * 60 * 1000);

// ==========================================================================
// 3. معالجة وتوجيه طلبات الـ HTTP
// ==========================================================================
const server = http.createServer((req, res) => {
    setSecurityHeaders(res);

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const clientIp = getClientIp(req);
    const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = reqUrl.pathname;

    // --------------------------------------------------------------------------
    // A. مسارات المصادقة والأمان (Authentication Endpoints)
    // --------------------------------------------------------------------------

    // 1. تسجيل الدخول (POST /api/auth/login)
    if (pathname === '/api/auth/login' && req.method === 'POST') {
        if (isRateLimited(clientIp)) {
            return sendJSON(res, 429, { 
                success: false, 
                message: 'تم حظر محاولات الدخول مؤقتاً لمدة 15 دقيقة بعد 5 محاولات خاطئة لحماية النظام.' 
            });
        }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { username, password } = JSON.parse(body);
                const authData = readJSON(AUTH_FILE, null);

                if (!authData || !authData.hash || !authData.salt) {
                    return sendJSON(res, 500, { success: false, message: 'خطأ في ملف المصادقة بالخادم' });
                }

                const testHash = hashPassword(password || '', authData.salt);
                const isUsernameValid = (username || '').trim().toLowerCase() === (authData.username || '').trim().toLowerCase();
                const isPasswordValid = crypto.timingSafeEqual(Buffer.from(testHash, 'hex'), Buffer.from(authData.hash, 'hex'));

                if (isUsernameValid && isPasswordValid) {
                    resetLoginAttempts(clientIp);
                    const token = createSessionToken(authData.username);
                    return sendJSON(res, 200, {
                        success: true,
                        message: 'تم تسجيل الدخول بنجاح! مرحباً بكم في لوحة التحكم.',
                        token: token,
                        username: authData.username
                    });
                } else {
                    recordFailedLogin(clientIp);
                    return sendJSON(res, 401, {
                        success: false,
                        message: 'اسم المستخدم أو كلمة المرور غير صحيحة.'
                    });
                }
            } catch (e) {
                sendJSON(res, 400, { success: false, message: 'طلب غير صالح' });
            }
        });
        return;
    }

    // 2. التحقق من صحة الجلسة الحالية (GET /api/auth/verify)
    if (pathname === '/api/auth/verify' && req.method === 'GET') {
        const session = verifySession(req);
        if (session) {
            return sendJSON(res, 200, { success: true, authenticated: true, username: session.username });
        } else {
            return sendJSON(res, 401, { success: false, authenticated: false, message: 'الجلسة منتهية أو غير صالحة' });
        }
    }

    // 3. تسجيل الخروج (POST /api/auth/logout)
    if (pathname === '/api/auth/logout' && req.method === 'POST') {
        const authHeader = req.headers['authorization'] || '';
        const token = authHeader.replace(/^Bearer\s+/i, '').trim();
        if (token) activeSessions.delete(token);
        return sendJSON(res, 200, { success: true, message: 'تم تسجيل الخروج بأمان' });
    }

    // 4. تغيير اسم المستخدم وكلمة المرور (POST /api/auth/change-credentials)
    if (pathname === '/api/auth/change-credentials' && req.method === 'POST') {
        const session = verifySession(req);
        if (!session) {
            return sendJSON(res, 401, { success: false, message: 'جلسة غير مصرح بها. يرجى تسجيل الدخول أولاً.' });
        }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { currentPassword, newUsername, newPassword } = JSON.parse(body);
                const authData = readJSON(AUTH_FILE, null);

                if (!authData) {
                    return sendJSON(res, 500, { success: false, message: 'خطأ في الوصول لبيانات المصادقة' });
                }

                // التحقق من كلمة المرور الحالية
                const currentHash = hashPassword(currentPassword || '', authData.salt);
                const isCurrentPasswordCorrect = crypto.timingSafeEqual(Buffer.from(currentHash, 'hex'), Buffer.from(authData.hash, 'hex'));
                if (!isCurrentPasswordCorrect) {
                    return sendJSON(res, 403, { success: false, message: 'كلمة المرور الحالية غير صحيحة!' });
                }

                if (!newUsername || newUsername.trim().length < 3) {
                    return sendJSON(res, 400, { success: false, message: 'اسم المستخدم الجديد يجب أن يتكون من 3 أحرف على الأقل.' });
                }

                if (!newPassword || newPassword.trim().length < 6) {
                    return sendJSON(res, 400, { success: false, message: 'كلمة المرور الجديدة يجب ألا تقل عن 6 أحرف أو أرقام.' });
                }

                // توليد Salt جديد وتشفير كلمة المرور الجديدة
                const newSalt = crypto.randomBytes(16).toString('hex');
                const newHash = hashPassword(newPassword.trim(), newSalt);

                authData.username = newUsername.trim();
                authData.salt = newSalt;
                authData.hash = newHash;
                authData.updatedAt = new Date().toISOString();

                writeJSON(AUTH_FILE, authData);

                // إنشاء توكن جلسة جديد وتحديث الجلسات
                const newToken = createSessionToken(authData.username);
                console.log(`[Security] تم بنجاح تحديث بيانات الدخول بواسطة المشرف: ${authData.username}`);

                sendJSON(res, 200, {
                    success: true,
                    message: 'تم تحديث بيانات الدخول بنجاح! يرجى حفظ البيانات الجديدة بأمان.',
                    token: newToken,
                    username: authData.username
                });
            } catch (err) {
                sendJSON(res, 400, { success: false, message: 'بيانات غير صالحة' });
            }
        });
        return;
    }

    // --------------------------------------------------------------------------
    // B. مسارات الرفع ووسائط الهيرو (Upload Endpoint)
    // --------------------------------------------------------------------------

    // 5. رفع صورة مخصصة من الجهاز للهيرو أو المدونة (POST /api/upload)
    if (pathname === '/api/upload' && req.method === 'POST') {
        const session = verifySession(req);
        if (!session) {
            return sendJSON(res, 401, { success: false, message: 'يتطلب رفع الصور تسجيل الدخول بحساب المشرف.' });
        }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { image, filename } = JSON.parse(body);
                if (!image || typeof image !== 'string') {
                    return sendJSON(res, 400, { success: false, message: 'ملف الصورة مطلوب' });
                }

                const matches = image.match(/^data:image\/(png|jpe?g|webp|gif);base64,(.+)$/i);
                if (!matches) {
                    return sendJSON(res, 400, { success: false, message: 'صيغة الصورة غير مدعومة. الصيغ المسموحة: JPG, PNG, WEBP, GIF' });
                }

                const ext = matches[1].toLowerCase() === 'jpeg' ? 'jpg' : matches[1].toLowerCase();
                const buffer = Buffer.from(matches[2], 'base64');

                // أقصى حجم مسموح به: 8 ميجابايت
                if (buffer.length > 8 * 1024 * 1024) {
                    return sendJSON(res, 400, { success: false, message: 'حجم الصورة كبير جداً. الحد الأقصى 8 ميجابايت.' });
                }

                // اسم ملف عشوائي آمن ومحصن
                const safeName = `hero_${Date.now()}_${crypto.randomBytes(4).toString('hex')}.${ext}`;
                const savePath = path.join(UPLOADS_DIR, safeName);

                fs.writeFileSync(savePath, buffer);
                console.log(`[Upload] تم حفظ صورة جديدة بنجاح: ${safeName} (${(buffer.length / 1024).toFixed(1)} KB)`);

                sendJSON(res, 201, {
                    success: true,
                    message: 'تم رفع الصورة بنجاح!',
                    url: `uploads/${safeName}`,
                    filename: safeName
                });
            } catch (err) {
                sendJSON(res, 500, { success: false, message: 'فشل معالجة وحفظ الصورة' });
            }
        });
        return;
    }

    // --------------------------------------------------------------------------
    // C. مسار تتبع المشاهدات الحقيقية للفيديوهات داخل المدونة
    // --------------------------------------------------------------------------

    // 6. تسجيل واحتساب مشاهدة حقيقية للدرس (POST /api/videos/:id/view)
    if (pathname.startsWith('/api/videos/') && pathname.endsWith('/view') && req.method === 'POST') {
        const vidId = pathname.replace('/api/videos/', '').replace('/view', '').trim();
        let videos = readJSON(VIDEOS_FILE, []);
        const video = videos.find(v => v.id === vidId);

        let newViews = 1;
        if (video) {
            video.views = (parseInt(video.views, 10) || 0) + 1;
            newViews = video.views;
            writeJSON(VIDEOS_FILE, videos);
        }

        return sendJSON(res, 200, {
            success: true,
            message: 'تم تسجيل المشاهدة بنجاح',
            videoId: vidId,
            views: newViews
        });
    }

    // --------------------------------------------------------------------------
    // D. مسارات الدروس والمكتبة (Videos Endpoints)
    // --------------------------------------------------------------------------

    // 7. قائمة الفيديوهات (GET /api/videos - عام للجميع)
    if (pathname === '/api/videos' && req.method === 'GET') {
        const videos = readJSON(VIDEOS_FILE, []);
        sendJSON(res, 200, { success: true, count: videos.length, videos });
        return;
    }

    // 7.1 خدمة صور الفيديوهات المصغرة محلياً بدون كوكيز أو تتبع خارجي (GET /api/thumb/:id)
    if (pathname.startsWith('/api/thumb/') && req.method === 'GET') {
        const vidId = pathname.replace('/api/thumb/', '').trim();
        if (!vidId || !/^[\w-]{6,15}$/.test(vidId)) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Invalid Video ID');
        }

        const thumbCacheDir = path.join(DATA_DIR, 'thumbs');
        if (!fs.existsSync(thumbCacheDir)) {
            try { fs.mkdirSync(thumbCacheDir, { recursive: true }); } catch(e) {}
        }
        const cachedThumbPath = path.join(thumbCacheDir, `${vidId}.jpg`);

        if (fs.existsSync(cachedThumbPath)) {
            res.writeHead(200, {
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, max-age=604800, immutable'
            });
            return fs.createReadStream(cachedThumbPath).pipe(res);
        }

        const ytThumbUrl = `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`;
        https.get(ytThumbUrl, (ytRes) => {
            if (ytRes.statusCode === 200) {
                res.writeHead(200, {
                    'Content-Type': 'image/jpeg',
                    'Cache-Control': 'public, max-age=604800, immutable'
                });
                const fileStream = fs.createWriteStream(cachedThumbPath);
                ytRes.pipe(fileStream);
                ytRes.pipe(res);
            } else {
                const fbUrl = `https://img.youtube.com/vi/${vidId}/mqdefault.jpg`;
                https.get(fbUrl, (fbRes) => {
                    if (fbRes.statusCode === 200) {
                        res.writeHead(200, {
                            'Content-Type': 'image/jpeg',
                            'Cache-Control': 'public, max-age=604800, immutable'
                        });
                        const fileStream = fs.createWriteStream(cachedThumbPath);
                        fbRes.pipe(fileStream);
                        fbRes.pipe(res);
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('Thumbnail Not Found');
                    }
                }).on('error', () => {
                    res.writeHead(502, { 'Content-Type': 'text/plain' });
                    res.end('Error fetching fallback thumbnail');
                });
            }
        }).on('error', () => {
            res.writeHead(502, { 'Content-Type': 'text/plain' });
            res.end('Error fetching thumbnail');
        });
        return;
    }

    // 8. المزامنة مع يوتيوب (POST /api/sync)
    if (pathname === '/api/sync' && (req.method === 'POST' || req.method === 'GET')) {
        const session = verifySession(req);
        // للمشرف المسجل: تنفيذ فوري
        if (session) {
            syncYouTubeFeed().then((result) => {
                sendJSON(res, 200, result);
            });
            return;
        }

        // للزوار والواجهة العامة: معدل آمن (مرة كل 60 ثانية كحد أقصى) لتجنب استهلاك موارد القناة
        const now = Date.now();
        if (now - lastPublicSyncTime < 60 * 1000) {
            const currentVideos = readJSON(VIDEOS_FILE, []);
            return sendJSON(res, 200, { 
                success: true, 
                message: 'الأرشيف محدث مؤخراً.', 
                addedCount: 0, 
                totalVideos: currentVideos.length 
            });
        }

        lastPublicSyncTime = now;
        syncYouTubeFeed().then((result) => {
            sendJSON(res, 200, result);
        });
        return;
    }

    // 9. إضافة فيديو يدوياً (POST /api/videos - محمي)
    if (pathname === '/api/videos' && req.method === 'POST') {
        const session = verifySession(req);
        if (!session) {
            return sendJSON(res, 401, { success: false, message: 'يتطلب حفظ الدروس تسجيل الدخول بحساب المشرف.' });
        }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const videoData = JSON.parse(body);
                if (!videoData.id || !videoData.title) {
                    return sendJSON(res, 400, { success: false, message: 'معرف الفيديو والعنوان مطلوبان' });
                }

                const videos = readJSON(VIDEOS_FILE, []);
                if (videos.some(v => v.id === videoData.id)) {
                    return sendJSON(res, 409, { success: false, message: 'هذا الدرس مسجل مسبقاً' });
                }

                videos.unshift(videoData);
                writeJSON(VIDEOS_FILE, videos);
                sendJSON(res, 201, { success: true, message: 'تم حفظ الدرس بنجاح', video: videoData });
            } catch (err) {
                sendJSON(res, 400, { success: false, message: 'بيانات غير صالحة' });
            }
        });
        return;
    }

    // 10. تعديل درس (PUT /api/videos/:id - محمي)
    if (pathname.startsWith('/api/videos/') && req.method === 'PUT') {
        const session = verifySession(req);
        if (!session) {
            return sendJSON(res, 401, { success: false, message: 'يتطلب تعديل الدروس تسجيل الدخول بحساب المشرف.' });
        }

        const vidId = pathname.replace('/api/videos/', '').trim();
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const updateData = JSON.parse(body);
                const videos = readJSON(VIDEOS_FILE, []);
                const idx = videos.findIndex(v => v.id === vidId);
                if (idx === -1) {
                    return sendJSON(res, 404, { success: false, message: 'الدرس غير موجود' });
                }

                videos[idx] = { ...videos[idx], ...updateData, id: vidId };
                writeJSON(VIDEOS_FILE, videos);
                sendJSON(res, 200, { success: true, message: 'تم تحديث الدرس بنجاح', video: videos[idx] });
            } catch (err) {
                sendJSON(res, 400, { success: false, message: 'بيانات غير صالحة' });
            }
        });
        return;
    }

    // 11. حذف درس (DELETE /api/videos/:id - محمي)
    if (pathname.startsWith('/api/videos/') && req.method === 'DELETE') {
        const session = verifySession(req);
        if (!session) {
            return sendJSON(res, 401, { success: false, message: 'يتطلب حذف الدروس تسجيل الدخول بحساب المشرف.' });
        }

        const vidId = pathname.replace('/api/videos/', '').trim();
        let videos = readJSON(VIDEOS_FILE, []);
        const initialLen = videos.length;
        videos = videos.filter(v => v.id !== vidId);

        if (videos.length === initialLen) {
            return sendJSON(res, 404, { success: false, message: 'الدرس غير موجود' });
        }

        writeJSON(VIDEOS_FILE, videos);
        sendJSON(res, 200, { success: true, message: 'تم حذف الدرس من الأرشيف بنجاح' });
        return;
    }

    // --------------------------------------------------------------------------
    // E. الإحصائيات والإعدادات (Stats & Settings)
    // --------------------------------------------------------------------------

    // 12. الإحصائيات وفحص صحة الخادم (GET /api/stats | /api/status | /health - عام للجميع)
    if ((pathname === '/api/stats' || pathname === '/api/status' || pathname === '/api/health' || pathname === '/health') && req.method === 'GET') {
        const videos = readJSON(VIDEOS_FILE, []);
        const settings = readJSON(SETTINGS_FILE, {});
        const totalViews = videos.reduce((acc, v) => acc + (parseInt(v.views, 10) || 0), 0);

        sendJSON(res, 200, {
            success: true,
            totalVideos: videos.length,
            totalViews,
            lastSyncTime: settings.lastSyncTime || new Date().toISOString(),
            channelId: settings.channelId
        });
        return;
    }

    // 13. الإعدادات (GET & POST /api/settings)
    if (pathname === '/api/settings') {
        if (req.method === 'GET') {
            const settings = readJSON(SETTINGS_FILE, {});
            sendJSON(res, 200, { success: true, settings });
            return;
        }
        if (req.method === 'POST') {
            const session = verifySession(req);
            if (!session) {
                return sendJSON(res, 401, { success: false, message: 'يتطلب تعديل الإعدادات تسجيل الدخول بحساب المشرف.' });
            }

            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                try {
                    const newSettings = JSON.parse(body);
                    const current = readJSON(SETTINGS_FILE, {});
                    const merged = { ...current, ...newSettings };
                    writeJSON(SETTINGS_FILE, merged);
                    syncHeroImageInIndexHtml(merged);
                    sendJSON(res, 200, { success: true, message: 'تم حفظ الإعدادات بنجاح', settings: merged });
                } catch (e) {
                    sendJSON(res, 400, { success: false, message: 'بيانات غير صالحة' });
                }
            });
            return;
        }
    }

    // ==========================================================================
    // 4. تقديم الملفات الثابتة المحصن ضد الاختراق (Hardened Static Server)
    // ==========================================================================
    let cleanPath = pathname;
    try {
        cleanPath = decodeURIComponent(pathname);
    } catch (e) {
        cleanPath = pathname;
    }

    // حماية أمنية صارمة: منع استعراض الكود المصدري أو ملفات التكوين الحساسة
    const lowerClean = cleanPath.toLowerCase();
    if (cleanPath.includes('..') || cleanPath.includes('\\..') || cleanPath.includes('/..')) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden: Path traversal attempt blocked.');
        return;
    }

    const isSensitive = 
        lowerClean === '/server.js' || lowerClean.endsWith('/server.js') ||
        lowerClean.includes('auth.json') || lowerClean.startsWith('/data/auth.json') ||
        lowerClean.includes('package.json') || lowerClean.includes('package-lock.json') ||
        lowerClean.includes('ecosystem.config.js') || lowerClean.includes('.env') ||
        lowerClean.includes('.git') || lowerClean.endsWith('.md') ||
        lowerClean.split('/').some(segment => segment.startsWith('.') && segment.length > 1);

    if (isSensitive) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden: Access to sensitive system and configuration files is strictly blocked.');
        return;
    }

    const safeBaseDir = path.resolve(__dirname);
    let filePath = path.resolve(safeBaseDir, '.' + (cleanPath === '/' ? '/index.html' : (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath)));
    
    // التحقق الصارم من عدم الخروج عن مجلد المشروع (Path Traversal Prevention)
    if (!filePath.startsWith(safeBaseDir)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden: Path traversal attempt blocked.');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            if (fs.existsSync(filePath + '.html')) {
                filePath = filePath + '.html';
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1 style="font-family:sans-serif;text-align:center;margin-top:50px;">404 - الصفحة غير موجودة</h1>');
                return;
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.mp3': 'audio/mpeg',
            '.wav': 'audio/wav',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.xml': 'application/xml; charset=utf-8',
            '.txt': 'text/plain; charset=utf-8'
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';
        const headers = { 'Content-Type': contentType };

        if (ext === '.html' || ext === '.js' || ext === '.css' || ext === '.json') {
            headers['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0';
            headers['Pragma'] = 'no-cache';
            headers['Expires'] = '0';
        } else {
            headers['Cache-Control'] = 'public, max-age=86400';
        }

        setSecurityHeaders(res);

        // المعالجة الفورية لصفحة index.html لضمان إرسال صورة الهيرو الحالية دائماً بدون وميض
        if (filePath.endsWith('index.html')) {
            try {
                let html = fs.readFileSync(filePath, 'utf-8');
                const settings = readJSON(SETTINGS_FILE, {});
                const heroImg = (settings && settings.heroMedia && (settings.heroMedia.customImageUrl || settings.heroMedia.imageUrl)) || '';
                if (heroImg) {
                    const imgRegex = /(<img\s+[^>]*id=["']heroCustomImage["'][^>]*src=["'])([^"']+)(["'][^>]*>)/i;
                    if (imgRegex.test(html)) {
                        html = html.replace(imgRegex, `$1${heroImg}$3`);
                    } else {
                        const imgRegexAlt = /(<img\s+[^>]*src=["'])([^"']+)(["'][^>]*id=["']heroCustomImage["'][^>]*>)/i;
                        if (imgRegexAlt.test(html)) {
                            html = html.replace(imgRegexAlt, `$1${heroImg}$3`);
                        }
                    }
                    const toFullUrl = (u) => {
                        if (!u) return '';
                        if (u.startsWith('http://') || u.startsWith('https://')) return u;
                        return `https://sheikh-ahmed-mortada.com/${u.replace(/^\/+/, '')}`;
                    };
                    const fullHeroImg = toFullUrl(heroImg);
                    html = html.replace(/(<meta\s+property=["']og:image["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
                    html = html.replace(/(<meta\s+property=["']og:image:secure_url["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
                    html = html.replace(/(<meta\s+name=["']twitter:image["']\s+content=["'])([^"']+)(["']>)/i, `$1${fullHeroImg}$3`);
                    html = html.replace(/("url":\s*")([^"]+uploads\/hero_[^"]+)(")/i, `$1${fullHeroImg}$3`);
                }

                const acceptEncoding = req.headers['accept-encoding'] || '';
                if (acceptEncoding.includes('gzip')) {
                    headers['Content-Encoding'] = 'gzip';
                    res.writeHead(200, headers);
                    zlib.gzip(Buffer.from(html, 'utf-8'), (gzErr, buf) => {
                        if (gzErr) {
                            res.end(html);
                        } else {
                            res.end(buf);
                        }
                    });
                } else {
                    res.writeHead(200, headers);
                    res.end(html);
                }
                return;
            } catch (htmlErr) {
                console.error('[Server] خطأ أثناء تقديم index.html:', htmlErr.message);
            }
        }

        // ضغط المحتوى الثابت تلقائياً لتحسين سرعة وأداء الموقع (Gzip Compression)
        const acceptEncoding = req.headers['accept-encoding'] || '';
        const canGzip = acceptEncoding.includes('gzip') && 
            (ext === '.html' || ext === '.css' || ext === '.js' || ext === '.json' || ext === '.svg' || ext === '.xml' || ext === '.txt');

        if (canGzip) {
            headers['Content-Encoding'] = 'gzip';
            res.writeHead(200, headers);
            const rawStream = fs.createReadStream(filePath);
            const gzip = zlib.createGzip();
            rawStream.on('error', () => { if (!res.headersSent) res.writeHead(500); res.end(); });
            gzip.on('error', () => res.end());
            rawStream.pipe(gzip).pipe(res);
        } else {
            res.writeHead(200, headers);
            const rawStream = fs.createReadStream(filePath);
            rawStream.on('error', () => { if (!res.headersSent) res.writeHead(500); res.end(); });
            rawStream.pipe(res);
        }
    });
});

// معالجة الأخطاء غير المتوقعة لضمان استقرار الخادم 24/7 دون توقف
process.on('uncaughtException', (err) => {
    console.error('⚠️ [Server Error] استثناء غير متوقع:', err.message);
});
process.on('unhandledRejection', (reason) => {
    console.error('⚠️ [Server Error] وعد مرفوض غير معالج:', reason);
});

// إغلاق الخادم بأمان عند استلام إشارات الإيقاف (Graceful Shutdown)
function gracefulShutdown(signal) {
    console.log(`\n🛑 تم تلقي إشارة (${signal})، إغلاق الخادم بأمان...`);
    server.close(() => {
        console.log('✅ تم إغلاق خادم HTTP بنجاح.');
        process.exit(0);
    });
    setTimeout(() => {
        console.error('⚠️ انتهاء مهلة الإغلاق الآمن، إيقاف إجباري.');
        process.exit(1);
    }, 5000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n⚠️ تنبيه: المنفذ ${PORT} مستخدم بالفعل حالياً!`);
        console.error(`يبدو أن الخادم يعمل مسبقاً في خلفية جهازك أو عبر نافذة أخرى.`);
        console.error(`يمكنك فتح الموقع مباشرة عبر المتصفح: http://localhost:${PORT}`);
        console.error(`أو لإعادة تشغيله، يمكنك إغلاق التطبيق الذي يشغل المنفذ أولاً.\n`);
        process.exit(0);
    } else {
        console.error('حدث خطأ غير متوقع في الخادم:', err);
        process.exit(1);
    }
});

server.listen(PORT, () => {
    try {
        syncHeroImageInIndexHtml(readJSON(SETTINGS_FILE, {}));
    } catch (e) {}
    console.log(`=======================================================`);
    console.log(`🕋 خادم مدونة فضيلة الشيخ أحمد مرتضى حامد يعمل الآن!`);
    console.log(`🛡️  نظام الحماية والمصادقة والتشفير: نشط بنجاح`);
    console.log(`⚡ محرك الضغط التلقائي Gzip والأداء: نشط بنجاح`);
    console.log(`🌐 الموقع العام:  http://localhost:${PORT}`);
    console.log(`⚙️  لوحة التحكم:   http://localhost:${PORT}/admin.html`);
    console.log(`📡 واجهة المزامنة: http://localhost:${PORT}/api/sync`);
    console.log(`=======================================================`);
});
