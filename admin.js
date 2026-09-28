/**
 * لوحة تحكم مدونة ومكتبة فضيلة الشيخ أحمد مرتضى حامد
 * Admin Dashboard Controller - Vanilla JS & RESTful API Integration
 */

const API_BASE = (window.location.origin && window.location.origin.startsWith('http')) 
    ? window.location.origin 
    : 'http://localhost:3000';
let isServerOnline = false;
let allVideos = [];
let filteredVideos = [];
let allQuotes = [];
let activeSocialLinks = [];

// ==========================================================================
// إدارة جلسة المشرف والمصادقة (Auth & Session Helpers)
// ==========================================================================
function getAuthToken() {
    return sessionStorage.getItem('sheikh_admin_token') || localStorage.getItem('sheikh_admin_token') || '';
}

function setAuthToken(token) {
    if (token) {
        sessionStorage.setItem('sheikh_admin_token', token);
        localStorage.setItem('sheikh_admin_token', token);
    } else {
        sessionStorage.removeItem('sheikh_admin_token');
        localStorage.removeItem('sheikh_admin_token');
    }
}

function getAuthHeaders(includeContentType = true) {
    const token = getAuthToken();
    const headers = {};
    if (includeContentType) headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = 'Bearer ' + token;
    return headers;
}


// المنصات الأساسية الثابتة والمعتمدة للموقع
const DEFAULT_CORE_SOCIAL_PLATFORMS = [
    {
        id: 'core_youtube',
        key: 'youtube',
        name: 'يوتيوب',
        url: 'https://www.youtube.com/@%D9%81%D8%B6%D9%8A%D9%84%D8%A9%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%D8%A7%D8%AD%D9%85%D8%AF%D9%85%D8%B1%D8%AA%D8%B6%D9%89',
        icon: 'fa-brands fa-youtube',
        cssClass: 'yt',
        color: '#FF0000',
        desc: 'البث المباشر وأرشيف الدروس والمحاضرات الكاملة بجودة عالية',
        isCore: true
    },
    {
        id: 'core_facebook',
        key: 'facebook',
        name: 'فيسبوك',
        url: 'https://facebook.com/sheikh.ahmed.mortada',
        icon: 'fa-brands fa-facebook-f',
        cssClass: 'fb',
        color: '#1877F2',
        desc: 'الصفحة الرسمية لمتابعة المواعظ والدروس والتحديثات اليومية ومجالس الساحة',
        isCore: true
    },
    {
        id: 'core_whatsapp',
        key: 'whatsapp',
        name: 'واتساب',
        url: 'https://wa.me/201000000000',
        icon: 'fa-brands fa-whatsapp',
        cssClass: 'wa',
        color: '#25D366',
        desc: 'الاستفسارات والتواصل المباشر مع إدارة ساحة الشيخ بالأقصر',
        isCore: true
    },
    {
        id: 'core_telegram',
        key: 'telegram',
        name: 'تيليجرام',
        url: 'https://t.me/sheikh_ahmed_mortada',
        icon: 'fa-brands fa-telegram',
        cssClass: 'tg',
        color: '#229ED9',
        desc: 'الدروس والمواعظ الصوتية والمنشورات المكتوبة',
        isCore: true
    },
    {
        id: 'core_instagram',
        key: 'instagram',
        name: 'إنستغرام',
        url: 'https://instagram.com/sheikh.ahmed.mortada',
        icon: 'fa-brands fa-instagram',
        cssClass: 'ig',
        color: '#E1306C',
        desc: 'الصور الرسمية ومجالس الساحة والدرر والمقتطفات المصممة عبر إنستغرام',
        isCore: true
    },
    {
        id: 'core_twitter',
        key: 'twitter',
        name: 'منصة X',
        url: 'https://x.com/ahmed_mortada',
        icon: 'fa-brands fa-x-twitter',
        cssClass: 'x',
        color: '#000000',
        desc: 'التغريدات الوعظية المباشرة، إعلانات الدروس، ودرر الكلمات',
        isCore: true
    },
    {
        id: 'core_maps',
        key: 'maps',
        name: 'موقع الساحة (الأقصر)',
        url: 'https://maps.google.com/?q=ساحة+الشيخ+أحمد+مرتضى+بالأقصر',
        icon: 'fa-solid fa-location-dot',
        cssClass: 'map',
        color: '#34A853',
        desc: 'الموقع الجغرافي لساحة فضيلة الشيخ بالأقصر على خرائط Google',
        isCore: true
    }
];

// ==========================================================================
// 1. التهيئة عند تحميل الصفحة
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initTabs();
    initModals();
    initForms();
    initSearchAndFilter();
    initSocialManager();
    initAuthAndSecurity();
    initHeroMediaManager();

    await checkServerStatus();
    await checkAuthSession();
});

// ==========================================================================
// 2. إدارة الثيم (الوضع الليلي والنهاري)
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('sheikh_theme') || 'light';
    setTheme(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(nextTheme);
            localStorage.setItem('sheikh_theme', nextTheme);
            showToast(nextTheme === 'dark' ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️');
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.className = (theme === 'dark') ? 'fa-solid fa-sun theme-icon' : 'fa-solid fa-moon theme-icon';
    }
}

// ==========================================================================
// 3. التحقق من حالة الخادم (Server Status Check)
// ==========================================================================
async function checkServerStatus() {
    const badge = document.getElementById('serverStatusBadge');
    const text = document.getElementById('serverStatusText');

    try {
        const res = await fetch(`${API_BASE}/api/stats`, { method: 'GET', cache: 'no-cache' });
        if (res.ok) {
            isServerOnline = true;
            if (badge) badge.className = 'server-status-pill online';
            if (text) text.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i> الخادم متصل والمزامنة نشطة';
            return true;
        }
    } catch (e) {
        // الخادم غير متاح (يعمل بدون node server.js أو كـ file://)
    }

    isServerOnline = false;
    if (badge) badge.className = 'server-status-pill offline';
    if (text) text.innerHTML = '<i class="fa-solid fa-database"></i> وضع التخزين المحلي (Standalone)';
    return false;
}

// ==========================================================================
// 4. جلب البيانات الأولية (Videos, Settings, Stats)
// ==========================================================================
async function loadInitialData() {
    await fetchVideos();
    await fetchSettings();
    await updateStats();
}

async function fetchVideos() {
    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/videos`);
            const data = await res.json();
            if (data.success && Array.isArray(data.videos)) {
                allVideos = data.videos;
                applyAdminFilters();
                return;
            }
        } catch (e) {
            console.error('Error fetching videos from server:', e);
        }
    }

    // وضع التراجع: جلب من videos.json ثم localStorage
    if (window.location.protocol !== 'file:') {
        try {
            const res = await fetch('data/videos.json');
            allVideos = await res.json();
        } catch (e) {
            allVideos = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
        }
    } else {
        allVideos = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
    }

    // دمج الإضافات المحلية
    try {
        const localCustom = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
        if (localCustom.length > 0) {
            const ids = new Set(allVideos.map(v => v.id));
            localCustom.forEach(v => {
                if (!ids.has(v.id)) allVideos.unshift(v);
            });
        }
    } catch (e) {}

    applyAdminFilters();
}

async function fetchSettings() {
    let settings = null;
    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/settings`);
            const data = await res.json();
            if (data.success && data.settings) {
                settings = data.settings;
            }
        } catch (e) {
            console.error('Error fetching settings:', e);
        }
    }

    if (!settings && window.location.protocol !== 'file:') {
        try {
            const res = await fetch('data/settings.json');
            settings = await res.json();
        } catch (e) {
            settings = JSON.parse(localStorage.getItem('sheikh_settings') || '{}');
        }
    } else if (!settings) {
        settings = JSON.parse(localStorage.getItem('sheikh_settings') || '{}');
    }

    if (settings) {
        // ملء حقول الإعدادات الأساسية
        const cfgChannelId = document.getElementById('cfgChannelId');
        const cfgAnnouncement = document.getElementById('cfgAnnouncement');

        if (cfgChannelId && settings.channelId) cfgChannelId.value = settings.channelId;
        if (cfgAnnouncement && settings.announcement) cfgAnnouncement.value = settings.announcement;

        // تحميل قائمة منصات التواصل الاجتماعي المعتمدة
        activeSocialLinks = [];
        if (Array.isArray(settings.socialLinks)) {
            activeSocialLinks = [...settings.socialLinks];
        } else if (settings.socialLinks && typeof settings.socialLinks === 'object') {
            const keys = ['facebook', 'instagram', 'youtube', 'twitter', 'whatsapp', 'tiktok', 'telegram', 'maps'];
            keys.forEach(k => {
                const u = settings.socialLinks[k];
                if (u && typeof u === 'string' && u.trim()) {
                    const d = detectPlatform(u);
                    activeSocialLinks.push({
                        id: 'soc_' + k,
                        url: u.trim(),
                        name: d.name,
                        icon: d.icon,
                        cssClass: d.cssClass,
                        color: d.color,
                        key: d.key,
                        desc: d.desc,
                        isCore: ['facebook', 'instagram', 'youtube', 'twitter', 'whatsapp'].includes(d.key)
                    });
                }
            });
        } else {
            // أول تشغيل فقط إذا لم تكن هناك إعدادات مسبقة
            activeSocialLinks = DEFAULT_CORE_SOCIAL_PLATFORMS.map(c => ({ ...c }));
        }

        renderActiveSocialLinks();

        // مواعيد الساحة
        if (settings.schedule) {
            const sSunT = document.getElementById('schedSundayTime');
            const sSunD = document.getElementById('schedSundayDesc');
            const sWedT = document.getElementById('schedWedTime');
            const sWedD = document.getElementById('schedWedDesc');
            const sFriT = document.getElementById('schedFridayTime');
            const sFriD = document.getElementById('schedFridayDesc');

            if (sSunT && settings.schedule.sundayTime) sSunT.value = settings.schedule.sundayTime;
            if (sSunD && settings.schedule.sundayDesc) sSunD.value = settings.schedule.sundayDesc;
            if (sWedT && settings.schedule.wedTime) sWedT.value = settings.schedule.wedTime;
            if (sWedD && settings.schedule.wedDesc) sWedD.value = settings.schedule.wedDesc;
            if (sFriT && settings.schedule.fridayTime) sFriT.value = settings.schedule.fridayTime;
            if (sFriD && settings.schedule.fridayDesc) sFriD.value = settings.schedule.fridayDesc;
        }

        // المواعظ
        if (Array.isArray(settings.quotes)) {
            allQuotes = settings.quotes;
        } else {
            allQuotes = JSON.parse(localStorage.getItem('sheikh_quotes') || '[]');
            if (allQuotes.length === 0) {
                allQuotes = [
                    {
                        id: 1,
                        category: "تزكية النفس",
                        quote: "إذا أردت أن يُصلح الله لك دنياك وآخرتك، فاجعل همّك الأول رضا الله ورسوله، وطهّر سريرتك من كل غلٍّ وحسد.",
                        source: "من درس لقاء الأحد بساحة الأقصر"
                    },
                    {
                        id: 2,
                        category: "محبة النبي ﷺ",
                        quote: "الصلاة على سيدنا رسول الله ﷺ هي مفتاح كل خير، وبها تُكفى الهموم وتُغفر الذنوب ويُفتح باب المعرفة والسكينة.",
                        source: "من مجلس الصلاة على الحبيب"
                    },
                    {
                        id: 3,
                        category: "أخلاق المسلم",
                        quote: "ليس الشأن أن يُحبك الناس بالكلام، بل الشأن أن تعامل خلق الله بالرحمة واللين كما كان يفعل سيد الخلق ﷺ.",
                        source: "من دروس الشمائل المحمدية"
                    },
                    {
                        id: 4,
                        category: "الرضا واليقين",
                        quote: "اطمئن، فما من بلاء ينزل إلا وفيه لطف خفي من رب العالمين، فسلّم أمرك لله تجد قلباً مطمئناً راضياً.",
                        source: "من موعظة السكينة واليقين"
                    }
                ];
            }
        }
        renderQuotesList();

        // إعدادات وسائط الهيرو
        if (settings.heroMedia) {
            const radioVideo = document.getElementById('heroModeVideo');
            const radioImage = document.getElementById('heroModeImage');
            const uploadSection = document.getElementById('heroImageUploadSection');
            const previewBox = document.getElementById('heroImagePreviewBox');
            const previewImg = document.getElementById('heroImagePreview');
            const dropzone = document.getElementById('heroImageDropzone');
            const titleInput = document.getElementById('heroImageTitleInput');
            const subtitleInput = document.getElementById('heroImageSubtitleInput');

            if (settings.heroMedia.mode === 'image') {
                if (radioImage) radioImage.checked = true;
                if (uploadSection) uploadSection.style.display = 'block';
            } else {
                if (radioVideo) radioVideo.checked = true;
                if (uploadSection) uploadSection.style.display = 'none';
            }

            const heroImg = settings.heroMedia.customImageUrl || settings.heroMedia.imageUrl;
            if (heroImg) {
                if (previewImg) previewImg.src = heroImg;
                if (previewBox) previewBox.style.display = 'grid';
                if (dropzone) dropzone.style.display = 'none';
            }

            if (titleInput) {
                titleInput.value = settings.heroMedia.imageTitle || settings.heroMedia.title || '';
            }
            if (subtitleInput) {
                subtitleInput.value = settings.heroMedia.imageSubtitle || settings.heroMedia.desc || '';
            }
        }

    }
}

async function updateStats() {
    const statTotalVideos = document.getElementById('statTotalVideos');
    const statTotalViews = document.getElementById('statTotalViews');
    const statLastSyncTime = document.getElementById('statLastSyncTime');
    const statSyncStatus = document.getElementById('statSyncStatus');
    const tabVideosCount = document.getElementById('tabVideosCount');

    if (statTotalVideos) statTotalVideos.textContent = allVideos.length;
    if (tabVideosCount) tabVideosCount.textContent = allVideos.length;

    const totalViews = allVideos.reduce((acc, v) => acc + (parseInt(v.views, 10) || 0), 0);
    if (statTotalViews) statTotalViews.textContent = totalViews.toLocaleString('ar-EG');

    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/stats`);
            const data = await res.json();
            if (data.success) {
                if (statLastSyncTime && data.lastSyncTime) {
                    const d = new Date(data.lastSyncTime);
                    statLastSyncTime.textContent = `آخر فحص: ${d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`;
                }
                if (statSyncStatus) statSyncStatus.textContent = 'متزامن مع يوتيوب';
                return;
            }
        } catch (e) {}
    }

    if (statLastSyncTime) statLastSyncTime.textContent = 'آخر فحص: محلي';
    if (statSyncStatus) statSyncStatus.textContent = 'جاهز';
}

// ==========================================================================
// 5. محرك المزامنة الفورية من يوتيوب (YouTube Sync)
// ==========================================================================
async function triggerSync(buttonEl) {
    if (!isServerOnline) {
        showToast('المزامنة التلقائية تتطلب تشغيل الخادم المحلي عبر: node server.js', 'error');
        return;
    }

    let originalHtml = '';
    if (buttonEl) {
        originalHtml = buttonEl.innerHTML;
        buttonEl.disabled = true;
        buttonEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري فحص يوتيوب...';
    }

    try {
        showToast('جاري الاتصال بقناة الشيخ الرسمية على يوتيوب...', 'info');
        const res = await fetch(`${API_BASE}/api/sync`, { method: 'POST', headers: getAuthHeaders(false) });
        const result = await res.json();

        if (result.success) {
            if (result.addedCount > 0) {
                showToast(`تم بنجاح جلب (${result.addedCount}) فيديو جديد من قناة الشيخ! 🎉`, 'success');
            } else {
                showToast('الأرشيف محدث بالكامل، لا توجد فيديوهات جديدة لم تسجل بعد.', 'success');
            }
            await fetchVideos();
            await updateStats();
        } else {
            showToast(`تعذر إتمام المزامنة: ${result.error || 'خطأ في الاتصال'}`, 'error');
        }
    } catch (err) {
        showToast('حدث خطأ أثناء الاتصال بالخادم لجلب التحديثات.', 'error');
    } finally {
        if (buttonEl) {
            buttonEl.disabled = false;
            buttonEl.innerHTML = originalHtml;
        }
    }
}

// ==========================================================================
// 6. إدارة جدول الفيديوهات وعمليات الفلترة والبحث
// ==========================================================================
const CATEGORY_LABELS = {
    'all': 'جميع التصنيفات',
    'ساحة_الأقصر': 'لقاءات الساحة بالأقصر',
    'السيرة_النبوية': 'السيرة والشمائل المحمدية',
    'تزكية_النفوس': 'تزكية القلوب والأخلاق',
    'علوم_القرآن': 'تدبر القرآن الكريم',
    'مناسبات_وأمسيات': 'مناسبات وأمسيات دينية',
    'رقائق_وقصائر': 'رقائق ومواعظ قصيرة'
};

function initSearchAndFilter() {
    const searchInput = document.getElementById('adminSearchInput');
    const catFilter = document.getElementById('adminCategoryFilter');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            applyAdminFilters();
        });
    }

    if (catFilter) {
        catFilter.addEventListener('change', () => {
            applyAdminFilters();
        });
    }
}

function applyAdminFilters() {
    const searchInput = document.getElementById('adminSearchInput');
    const catFilter = document.getElementById('adminCategoryFilter');

    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const cat = catFilter ? catFilter.value : 'all';

    filteredVideos = allVideos.filter(v => {
        const matchesCategory = (cat === 'all') || (v.category === cat);
        const matchesQuery = !query || 
            (v.title && v.title.toLowerCase().includes(query)) ||
            (v.desc && v.desc.toLowerCase().includes(query)) ||
            (v.date && v.date.includes(query)) ||
            (v.id && v.id.toLowerCase().includes(query));

        return matchesCategory && matchesQuery;
    });

    renderAdminTable();
}

function renderAdminTable() {
    const tbody = document.getElementById('adminVideosTbody');
    if (!tbody) return;

    if (filteredVideos.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-table-cell">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>لا توجد نتائج مطابقة لبحثك في أرشيف الفيديوهات.</p>
                </td>
            </tr>
        `;
        return;
    }

    let rowsHtml = '';
    filteredVideos.forEach((v) => {
        const catLabel = CATEGORY_LABELS[v.category] || v.category || 'عام';
        const formattedDate = formatDateArabic(v.date);
        const viewsCount = (parseInt(v.views, 10) || 0).toLocaleString('ar-EG');
        const thumbUrl = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

        rowsHtml += `
            <tr data-id="${v.id}">
                <td class="thumb-cell">
                    <img src="${thumbUrl}" alt="${escapeHtml(v.title)}" class="admin-table-thumb" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${v.id}/mqdefault.jpg'">
                </td>
                <td class="title-cell">
                    <div class="video-table-title">${escapeHtml(v.title)}</div>
                    <div class="video-table-meta">
                        <span class="vid-code"><i class="fa-brands fa-youtube gold-icon"></i> ${v.id}</span>
                        <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" class="preview-yt-link">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> مشاهدة على يوتيوب
                        </a>
                    </div>
                </td>
                <td>
                    <span class="admin-badge-cat">${catLabel}</span>
                </td>
                <td class="date-cell">${formattedDate}</td>
                <td>${escapeHtml(v.duration || '--')}</td>
                <td><i class="fa-solid fa-eye view-icon"></i> ${viewsCount}</td>
                <td class="actions-cell">
                    <div class="action-btn-group">
                        <button class="btn-action edit" onclick="openEditModal('${v.id}')" title="تعديل بيانات الدرس">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-action delete" onclick="confirmDeleteVideo('${v.id}')" title="حذف من الأرشيف">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = rowsHtml;
}

// ==========================================================================
// 7. إدارة التبويبات (Tabs Navigation)
// ==========================================================================
function initTabs() {
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    const tabContents = document.querySelectorAll('.admin-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) targetContent.classList.add('active');
        });
    });
}

// ==========================================================================
// 8. إدارة النوافذ المنبثقة (Modals)
// ==========================================================================
function initModals() {
    // مودال إضافة وتعديل فيديو
    const openAddBtn = document.getElementById('openAddModalBtn');
    const videoModal = document.getElementById('adminVideoModal');
    const closeVideoBtn = document.getElementById('closeAdminModalBtn');

    if (openAddBtn) {
        openAddBtn.addEventListener('click', () => {
            openAddModal();
        });
    }

    if (closeVideoBtn && videoModal) {
        closeVideoBtn.addEventListener('click', () => {
            closeModal(videoModal);
        });
    }

    // إغلاق عند النقر بالخارج
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closeModal(e.target);
        }
    });

    // إغلاق بزر Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-backdrop.active').forEach(m => closeModal(m));
        }
    });

    // أزرار المزامنة
    const syncHeaderBtn = document.getElementById('syncNowHeaderBtn');
    const triggerSyncBtn = document.getElementById('triggerSyncBtn');

    if (syncHeaderBtn) {
        syncHeaderBtn.addEventListener('click', () => triggerSync(syncHeaderBtn));
    }
    if (triggerSyncBtn) {
        triggerSyncBtn.addEventListener('click', () => triggerSync(triggerSyncBtn));
    }

    // مودال المواعظ
    const openQuoteBtn = document.getElementById('openAddQuoteBtn');
    const quoteModal = document.getElementById('adminQuoteModal');
    const closeQuoteBtn = document.getElementById('closeQuoteModalBtn');

    if (openQuoteBtn) {
        openQuoteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openAddQuoteModal();
        });
    }

    if (closeQuoteBtn && quoteModal) {
        closeQuoteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(quoteModal);
        });
    }
}

function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open', 'active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open', 'active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;

function openAddQuoteModal() {
    const quoteModal = document.getElementById('adminQuoteModal');
    const form = document.getElementById('adminQuoteForm');
    if (form) form.reset();
    openModal(quoteModal);
}
window.openAddQuoteModal = openAddQuoteModal;

function openAddModal() {
    const modal = document.getElementById('adminVideoModal');
    const form = document.getElementById('adminVideoForm');
    const title = document.getElementById('adminModalTitle');
    const badge = document.getElementById('adminModalModeBadge');
    const hiddenId = document.getElementById('editVideoOriginalId');
    const submitBtn = document.getElementById('admSubmitBtn');

    if (form) form.reset();
    if (hiddenId) hiddenId.value = '';
    if (title) title.textContent = 'إضافة فيديو جديد للأرشيف';
    if (badge) badge.textContent = 'إضافة درس جديد';
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> إضافة الدرس';

    const dateInput = document.getElementById('admVideoDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    openModal(modal);
}
window.openAddModal = openAddModal;

window.openEditModal = function(videoId) {
    const video = allVideos.find(v => v.id === videoId);
    if (!video) {
        showToast('الدرس المطلوب غير موجود!', 'error');
        return;
    }

    const modal = document.getElementById('adminVideoModal');
    const title = document.getElementById('adminModalTitle');
    const badge = document.getElementById('adminModalModeBadge');
    const hiddenId = document.getElementById('editVideoOriginalId');
    const submitBtn = document.getElementById('admSubmitBtn');

    const urlInput = document.getElementById('admVideoUrl');
    const titleInput = document.getElementById('admVideoTitle');
    const catInput = document.getElementById('admVideoCategory');
    const dateInput = document.getElementById('admVideoDate');
    const durationInput = document.getElementById('admVideoDuration');
    const viewsInput = document.getElementById('admVideoViews');
    const descInput = document.getElementById('admVideoDesc');

    if (hiddenId) hiddenId.value = video.id;
    if (urlInput) urlInput.value = `https://www.youtube.com/watch?v=${video.id}`;
    if (titleInput) titleInput.value = video.title || '';
    if (catInput) catInput.value = video.category || 'ساحة_الأقصر';
    if (dateInput) dateInput.value = video.date || '';
    if (durationInput) durationInput.value = video.duration || '';
    if (viewsInput) viewsInput.value = video.views || '';
    if (descInput) descInput.value = video.desc || '';

    if (title) title.textContent = 'تعديل بيانات الدرس والمحاضرة';
    if (badge) badge.textContent = 'تعديل درس حالي';
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> حفظ التعديلات';

    openModal(modal);
};

// ==========================================================================
// 9. معالجة النماذج (Forms: Video, Schedule, Quotes, Settings)
// ==========================================================================
function initForms() {
    // 1. نموذج إضافة / تعديل الفيديو
    const videoForm = document.getElementById('adminVideoForm');
    if (videoForm) {
        videoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await handleVideoFormSubmit();
        });
    }

    // 2. نموذج مواعيد الساحة
    const scheduleForm = document.getElementById('scheduleForm');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await handleScheduleSubmit();
        });
    }

    // 3. نموذج إضافة موعظة
    const quoteForm = document.getElementById('adminQuoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await handleQuoteSubmit();
        });
    }

    // 4. نموذج الإعدادات
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await handleSettingsSubmit();
        });
    }
}

async function handleVideoFormSubmit() {
    const hiddenId = document.getElementById('editVideoOriginalId').value.trim();
    const urlVal = document.getElementById('admVideoUrl').value.trim();
    const titleVal = document.getElementById('admVideoTitle').value.trim();
    const catVal = document.getElementById('admVideoCategory').value;
    const dateVal = document.getElementById('admVideoDate').value;
    const durationVal = document.getElementById('admVideoDuration').value.trim() || 'درس مرئي';
    const viewsVal = parseInt(document.getElementById('admVideoViews').value, 10) || 0;
    const descVal = document.getElementById('admVideoDesc').value.trim() || 'درس ومجلس علمي لفضيلة الشيخ أحمد مرتضى حامد بساحة الأقصر.';

    const vidId = extractYouTubeId(urlVal);
    if (!vidId) {
        showToast('يرجى إدخال رابط يوتيوب صحيح أو معرف الفيديو المكون من 11 حرفاً', 'error');
        return;
    }

    const payload = {
        id: vidId,
        title: titleVal,
        category: catVal,
        date: dateVal,
        duration: durationVal,
        views: viewsVal,
        desc: descVal
    };

    const isEdit = Boolean(hiddenId);

    if (isServerOnline) {
        try {
            const url = isEdit ? `${API_BASE}/api/videos/${hiddenId}` : `${API_BASE}/api/videos`;
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await res.json();
            if (result.success) {
                showToast(isEdit ? 'تم تحديث الدرس بنجاح! 🌿' : 'تم حفظ الدرس وإضافته إلى الأرشيف! 🎉', 'success');
                closeModal(document.getElementById('adminVideoModal'));
                await fetchVideos();
                await updateStats();
                return;
            } else {
                showToast(result.message || 'تعذر حفظ البيانات في الخادم', 'error');
                return;
            }
        } catch (e) {
            console.error('Server error saving video:', e);
        }
    }

    // حفظ في التخزين المحلي كبديل
    if (isEdit) {
        const idx = allVideos.findIndex(v => v.id === hiddenId);
        if (idx !== -1) {
            allVideos[idx] = payload;
        }
    } else {
        if (allVideos.some(v => v.id === vidId)) {
            showToast('هذا الفيديو مسجل مسبقاً في الأرشيف!', 'error');
            return;
        }
        allVideos.unshift(payload);
    }

    try {
        localStorage.setItem('sheikh_custom_videos', JSON.stringify(allVideos));
    } catch (e) {}

    showToast(isEdit ? 'تم تحديث الدرس بنجاح!' : 'تم حفظ الدرس محلياً!', 'success');
    closeModal(document.getElementById('adminVideoModal'));
    applyAdminFilters();
    updateStats();
}


// ==========================================================================
// فحص الجلسة وتسجيل الدخول وتغيير بيانات الدخول (Auth & Security Module)
// ==========================================================================
async function checkAuthSession() {
    const token = getAuthToken();

    if (!token) {
        showLoginGate();
        return false;
    }

    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/auth/verify`, {
                headers: getAuthHeaders(false)
            });
            const data = await res.json();
            if (data.success && data.authenticated) {
                hideLoginGate();
                await loadInitialData();
                return true;
            }
        } catch (e) {}
    } else {
        hideLoginGate();
        await loadInitialData();
        return true;
    }

    showLoginGate();
    return false;
}

function showLoginGate(errorMsg = '') {
    const gate = document.getElementById('adminLoginGate');
    const alertBox = document.getElementById('loginGateAlert');
    if (gate) gate.style.display = 'flex';
    if (alertBox) {
        if (errorMsg) {
            alertBox.textContent = errorMsg;
            alertBox.style.display = 'block';
        } else {
            alertBox.style.display = 'none';
        }
    }
}

function hideLoginGate() {
    const gate = document.getElementById('adminLoginGate');
    if (gate) gate.style.display = 'none';
}

function initAuthAndSecurity() {
    const loginForm = document.getElementById('adminLoginForm');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    const changeCredsForm = document.getElementById('changeCredentialsForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('loginGateUsername');
            const passwordInput = document.getElementById('loginGatePassword');
            const submitBtn = document.getElementById('loginGateSubmitBtn');
            const alertBox = document.getElementById('loginGateAlert');

            const username = usernameInput ? usernameInput.value.trim() : '';
            const password = passwordInput ? passwordInput.value : '';

            if (!username || !password) {
                if (alertBox) {
                    alertBox.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
                    alertBox.style.display = 'block';
                }
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التحقق...';
            }

            try {
                const res = await fetch(`${API_BASE}/api/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await res.json();

                if (data.success && data.token) {
                    setAuthToken(data.token);
                    hideLoginGate();
                    if (loginForm) loginForm.reset();
                    showToast(data.message || 'تم تسجيل الدخول بنجاح! مرحباً بكم 🌿', 'success');
                    await loadInitialData();
                } else {
                    if (alertBox) {
                        alertBox.textContent = data.message || 'بيانات الدخول غير صحيحة';
                        alertBox.style.display = 'block';
                    }
                    showToast(data.message || 'بيانات الدخول غير صحيحة', 'error');
                }
            } catch (err) {
                if (alertBox) {
                    alertBox.textContent = 'تعذر الاتصال بالخادم. تأكد من تشغيل الخادم.';
                    alertBox.style.display = 'block';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> دخول إلى لوحة التحكم';
                }
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            if (!confirm('هل تريد بالتأكيد تسجيل الخروج من لوحة التحكم؟')) return;

            try {
                await fetch(`${API_BASE}/api/auth/logout`, {
                    method: 'POST',
                    headers: getAuthHeaders()
                });
            } catch (e) {}

            setAuthToken(null);
            showLoginGate('تم تسجيل الخروج بأمان.');
            showToast('تم تسجيل الخروج بنجاح 👋', 'info');
        });
    }

    if (changeCredsForm) {
        changeCredsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const curPass = document.getElementById('curPassword').value;
            const newUname = document.getElementById('newUsername').value.trim();
            const newPass = document.getElementById('newPassword').value;
            const confPass = document.getElementById('confirmNewPassword').value;
            const submitBtn = document.getElementById('changeCredsSubmitBtn');

            if (newPass !== confPass) {
                showToast('كلمة المرور الجديدة وتأكيدها غير متطابقين!', 'error');
                return;
            }

            if (newPass.length < 6) {
                showToast('كلمة المرور الجديدة يجب ألا تقل عن 6 أحرف أو أرقام', 'error');
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري تحديث البيانات...';
            }

            try {
                const res = await fetch(`${API_BASE}/api/auth/change-credentials`, {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({
                        currentPassword: curPass,
                        newUsername: newUname,
                        newPassword: newPass
                    })
                });
                const data = await res.json();

                if (data.success) {
                    if (data.token) setAuthToken(data.token);
                    changeCredsForm.reset();
                    showToast(data.message || 'تم تحديث بيانات الدخول بنجاح! 🔒', 'success');
                } else {
                    showToast(data.message || 'فشل تحديث بيانات الدخول', 'error');
                }
            } catch (err) {
                showToast('حدث خطأ أثناء الاتصال بالخادم لتحديث البيانات', 'error');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-shield-check"></i> تحديث وحفظ بيانات الدخول الجديدة';
                }
            }
        });
    }
}

// ==========================================================================
// إدارة وسائط الهيرو ورفع الصور المخصصة (Hero Media Manager)
// ==========================================================================
let currentHeroImageDataUrl = null;

function initHeroMediaManager() {
    const radioVideo = document.getElementById('heroModeVideo');
    const radioImage = document.getElementById('heroModeImage');
    const uploadSection = document.getElementById('heroImageUploadSection');
    const fileInput = document.getElementById('heroImageFileInput');
    const dropzone = document.getElementById('heroImageDropzone');
    const previewBox = document.getElementById('heroImagePreviewBox');
    const previewImg = document.getElementById('heroImagePreview');
    const removeBtn = document.getElementById('removeHeroImageBtn');
    const saveBtn = document.getElementById('saveHeroMediaBtn');

    const updateModeView = () => {
        if (radioImage && radioImage.checked) {
            if (uploadSection) uploadSection.style.display = 'block';
        } else {
            if (uploadSection) uploadSection.style.display = 'none';
        }
    };

    if (radioVideo) radioVideo.addEventListener('change', updateModeView);
    if (radioImage) radioImage.addEventListener('change', updateModeView);

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files && e.target.files[0];
            if (file) handleSelectedHeroFile(file);
        });
    }

    if (dropzone) {
        ['dragenter', 'dragover'].forEach(ev => {
            dropzone.addEventListener(ev, (e) => {
                e.preventDefault();
                dropzone.classList.add('drag-over');
            });
        });
        ['dragleave', 'drop'].forEach(ev => {
            dropzone.addEventListener(ev, (e) => {
                e.preventDefault();
                dropzone.classList.remove('drag-over');
            });
        });
        dropzone.addEventListener('drop', (e) => {
            const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
            if (file) handleSelectedHeroFile(file);
        });
    }

    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            currentHeroImageDataUrl = null;
            if (fileInput) fileInput.value = '';
            if (previewImg) previewImg.src = '';
            if (previewBox) previewBox.style.display = 'none';
            if (dropzone) dropzone.style.display = 'block';
            showToast('تمت إزالة الصورة المحددة', 'info');
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', saveHeroMediaSettings);
    }
}

function handleSelectedHeroFile(file) {
    if (!file.type.startsWith('image/')) {
        showToast('يرجى اختيار ملف صورة صالح (JPG, PNG, WEBP)', 'error');
        return;
    }
    if (file.size > 8 * 1024 * 1024) {
        showToast('حجم الصورة كبير جداً، الحد الأقصى 8 ميجابايت', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        currentHeroImageDataUrl = e.target.result;
        const previewImg = document.getElementById('heroImagePreview');
        const previewBox = document.getElementById('heroImagePreviewBox');
        const dropzone = document.getElementById('heroImageDropzone');

        if (previewImg) previewImg.src = currentHeroImageDataUrl;
        if (previewBox) previewBox.style.display = 'grid';
        if (dropzone) dropzone.style.display = 'none';
        showToast('تم تحميل الصورة بنجاح! يمكنك الآن كتابة العنوان والضغط على حفظ.', 'success');
    };
    reader.readAsDataURL(file);
}

async function saveHeroMediaSettings() {
    const radioImage = document.getElementById('heroModeImage');
    const isImageMode = radioImage && radioImage.checked;
    const titleInput = document.getElementById('heroImageTitleInput');
    const subtitleInput = document.getElementById('heroImageSubtitleInput');
    const saveBtn = document.getElementById('saveHeroMediaBtn');

    let currentSettings = {};
    try {
        currentSettings = JSON.parse(localStorage.getItem('sheikh_settings') || '{}');
    } catch(e) {}

    let customImageUrl = (currentSettings.heroMedia && (currentSettings.heroMedia.customImageUrl || currentSettings.heroMedia.imageUrl)) || 'uploads/hero_1789291588780_01d38d97.png';

    if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري حفظ إعدادات الهيرو...';
    }

    try {
        if (isImageMode && currentHeroImageDataUrl && currentHeroImageDataUrl.startsWith('data:image/')) {
            showToast('جاري رفع الصورة إلى الخادم...', 'info');
            const upRes = await fetch(`${API_BASE}/api/upload`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    image: currentHeroImageDataUrl,
                    filename: 'hero_custom.jpg'
                })
            });
            const upData = await upRes.json();
            if (upData.success && upData.url) {
                customImageUrl = upData.url;
            } else {
                showToast(`فشل رفع الصورة: ${upData.message || 'خطأ غير معروف'}`, 'error');
                return;
            }
        }

        const heroMedia = {
            mode: isImageMode ? 'image' : 'video',
            imageUrl: customImageUrl,
            customImageUrl: customImageUrl,
            title: titleInput ? titleInput.value.trim() : '',
            imageTitle: titleInput ? titleInput.value.trim() : '',
            desc: subtitleInput ? subtitleInput.value.trim() : '',
            imageSubtitle: subtitleInput ? subtitleInput.value.trim() : '',
            badge: ''
        };

        currentSettings.heroMedia = heroMedia;
        localStorage.setItem('sheikh_settings', JSON.stringify(currentSettings));

        if (isServerOnline) {
            const res = await fetch(`${API_BASE}/api/settings`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ heroMedia })
            });
            const data = await res.json();
            if (data.success) {
                showToast('تم حفظ إعدادات وسائط الهيرو بنجاح! تم تحديث الموقع فوراً. 🖼️', 'success');
                return;
            }
        }

        showToast('تم حفظ إعدادات وسائط الهيرو بنجاح!', 'success');
    } catch (e) {
        console.error('Error saving hero media:', e);
        showToast('حدث خطأ أثناء حفظ إعدادات وسائط الهيرو', 'error');
    } finally {
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> حفظ إعدادات وسائط الهيرو';
        }
    }
}

window.confirmDeleteVideo = async function(videoId) {
    const video = allVideos.find(v => v.id === videoId);
    const title = video ? video.title : videoId;

    if (!confirm(`هل أنت متأكد من حذف الدرس التالي من الأرشيف؟\n\n"${title}"`)) {
        return;
    }

    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/videos/${videoId}`, { method: 'DELETE', headers: getAuthHeaders(false) });
            const result = await res.json();
            if (result.success) {
                showToast('تم حذف الدرس من الأرشيف بنجاح 🗑️', 'success');
                await fetchVideos();
                await updateStats();
                return;
            }
        } catch (e) {
            console.error('Error deleting video:', e);
        }
    }

    // حذف محلي
    allVideos = allVideos.filter(v => v.id !== videoId);
    try {
        localStorage.setItem('sheikh_custom_videos', JSON.stringify(allVideos));
    } catch (e) {}

    showToast('تم حذف الدرس من الأرشيف', 'success');
    applyAdminFilters();
    updateStats();
};

// ==========================================================================
// 10. إدارة مواعيد لقاءات الساحة (Saaha Schedule)
// ==========================================================================
async function handleScheduleSubmit() {
    const schedule = {
        sundayTime: document.getElementById('schedSundayTime').value.trim(),
        sundayDesc: document.getElementById('schedSundayDesc').value.trim(),
        wedTime: document.getElementById('schedWedTime').value.trim(),
        wedDesc: document.getElementById('schedWedDesc').value.trim(),
        fridayTitle: 'المجالس الخارجية',
        fridayTime: document.getElementById('schedFridayTime').value.trim(),
        fridayDesc: document.getElementById('schedFridayDesc').value.trim()
    };

    if (isServerOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/settings`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ schedule })
            });
            const data = await res.json();
            if (data.success) {
                showToast('تم حفظ مواعيد لقاءات ساحة الأقصر بنجاح! 🌿', 'success');
                return;
            }
        } catch (e) {}
    }

    localStorage.setItem('sheikh_schedule', JSON.stringify(schedule));
    showToast('تم حفظ مواعيد الساحة بنجاح!', 'success');
}

// ==========================================================================
// 11. إدارة درر ومواعظ الشيخ (Quotes Manager)
// ==========================================================================
function renderQuotesList() {
    const container = document.getElementById('adminQuotesList');
    if (!container) return;

    if (allQuotes.length === 0) {
        container.innerHTML = `<p class="text-muted">لا توجد مواعيد مضافة حالياً.</p>`;
        return;
    }

    let html = '';
    allQuotes.forEach((q, idx) => {
        html += `
            <div class="admin-quote-card" data-index="${idx}">
                <div class="quote-card-header">
                    <span class="quote-cat-tag"><i class="fa-solid fa-feather gold-icon"></i> ${escapeHtml(q.category || 'موعظة')}</span>
                    <button class="btn-delete-quote" onclick="deleteQuote(${idx})" title="حذف الموعظة">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <p class="quote-body-text">«${escapeHtml(q.quote)}»</p>
                <div class="quote-source-label"><i class="fa-solid fa-mosque"></i> ${escapeHtml(q.source || 'ساحة الأقصر')}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

window.deleteQuote = async function(idx) {
    if (!confirm('هل تريد بالتأكيد حذف هذه الموعظة؟')) return;

    allQuotes.splice(idx, 1);
    await persistQuotes();
    renderQuotesList();
    showToast('تم حذف الموعظة', 'info');
};

async function handleQuoteSubmit() {
    const cat = document.getElementById('newQuoteCategory').value.trim();
    const text = document.getElementById('newQuoteText').value.trim();
    const source = document.getElementById('newQuoteSource').value.trim();

    if (!cat || !text) {
        showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    const newQ = {
        id: Date.now(),
        category: cat,
        quote: text,
        source: source || 'من دروس الساحة بالأقصر'
    };

    allQuotes.unshift(newQ);
    await persistQuotes();
    renderQuotesList();
    closeModal(document.getElementById('adminQuoteModal'));
    showToast('تم نشر الموعظة الجديدة بنجاح! 🌿', 'success');
}

async function persistQuotes() {
    if (isServerOnline) {
        try {
            await fetch(`${API_BASE}/api/settings`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ quotes: allQuotes })
            });
            return;
        } catch (e) {}
    }
    localStorage.setItem('sheikh_quotes', JSON.stringify(allQuotes));
}

// ==========================================================================
// 12. محرك كشف منصات التواصل الاجتماعي والأيقونات الذكية (Smart Platform Engine)
// ==========================================================================
function detectPlatform(url) {
    if (!url || typeof url !== 'string') {
        return {
            key: 'web',
            name: 'رابط خارجي',
            icon: 'fa-solid fa-globe',
            cssClass: 'web',
            color: '#C59B27'
        };
    }

    const clean = url.toLowerCase().trim();

    if (clean.includes('youtube.com') || clean.includes('youtu.be')) {
        return {
            key: 'youtube',
            name: 'يوتيوب',
            icon: 'fa-brands fa-youtube',
            cssClass: 'yt',
            color: '#FF0000'
        };
    }
    if (clean.includes('facebook.com') || clean.includes('fb.com') || clean.includes('fb.me') || clean.includes('fb.watch')) {
        return {
            key: 'facebook',
            name: 'فيسبوك',
            icon: 'fa-brands fa-facebook-f',
            cssClass: 'fb',
            color: '#1877F2'
        };
    }
    if (clean.includes('t.me') || clean.includes('telegram.me') || clean.includes('telegram.org')) {
        return {
            key: 'telegram',
            name: 'تيليجرام',
            icon: 'fa-brands fa-telegram',
            cssClass: 'tg',
            color: '#229ED9'
        };
    }
    if (clean.includes('wa.me') || clean.includes('whatsapp.com')) {
        return {
            key: 'whatsapp',
            name: 'واتساب',
            icon: 'fa-brands fa-whatsapp',
            cssClass: 'wa',
            color: '#25D366'
        };
    }
    if (clean.includes('tiktok.com')) {
        return {
            key: 'tiktok',
            name: 'تيك توك',
            icon: 'fa-brands fa-tiktok',
            cssClass: 'tt',
            color: '#000000'
        };
    }
    if (clean.includes('instagram.com') || clean.includes('instagr.am')) {
        return {
            key: 'instagram',
            name: 'إنستغرام',
            icon: 'fa-brands fa-instagram',
            cssClass: 'ig',
            color: '#E1306C'
        };
    }
    if (clean.includes('twitter.com') || clean.includes('x.com')) {
        return {
            key: 'twitter',
            name: 'منصة X',
            icon: 'fa-brands fa-x-twitter',
            cssClass: 'x',
            color: '#000000'
        };
    }
    if (clean.includes('maps.google.') || clean.includes('goo.gl/maps') || clean.includes('maps.app.goo.gl') || clean.includes('google.com/maps')) {
        return {
            key: 'maps',
            name: 'موقع الساحة (خرائط)',
            icon: 'fa-solid fa-location-dot',
            cssClass: 'map',
            color: '#34A853'
        };
    }
    if (clean.includes('soundcloud.com')) {
        return {
            key: 'soundcloud',
            name: 'ساوند كلاود',
            icon: 'fa-brands fa-soundcloud',
            cssClass: 'sc',
            color: '#FF5500'
        };
    }
    if (clean.includes('threads.net')) {
        return {
            key: 'threads',
            name: 'ثريدز',
            icon: 'fa-brands fa-threads',
            cssClass: 'th',
            color: '#000000'
        };
    }
    if (clean.includes('snapchat.com')) {
        return {
            key: 'snapchat',
            name: 'سناب شات',
            icon: 'fa-brands fa-snapchat',
            cssClass: 'snap',
            color: '#FFFC00'
        };
    }
    if (clean.includes('linkedin.com')) {
        return {
            key: 'linkedin',
            name: 'لينكد إن',
            icon: 'fa-brands fa-linkedin-in',
            cssClass: 'in',
            color: '#0A66C2'
        };
    }
    if (clean.includes('pinterest.com')) {
        return {
            key: 'pinterest',
            name: 'بينتريست',
            icon: 'fa-brands fa-pinterest',
            cssClass: 'pin',
            color: '#BD081C'
        };
    }

    return {
        key: 'web',
        name: 'رابط موقع',
        icon: 'fa-solid fa-globe',
        cssClass: 'web',
        color: '#C59B27'
    };
}

/**
 * تهيئة مدير روابط التواصل الاجتماعي الذكي
 * الكشف التلقائي الفوري عن الأيقونة واللون واسم المنصة عند كتابة أو لصق أي رابط
 */
// إعدادات وبيانات المنصات المدعومة في القائمة المنسدلة
const SOCIAL_PLATFORM_CONFIGS = {
    youtube: {
        key: 'youtube',
        name: 'يوتيوب',
        icon: 'fa-brands fa-youtube',
        cssClass: 'yt',
        color: '#FF0000',
        placeholder: 'https://www.youtube.com/@...',
        desc: 'البث المباشر وأرشيف الدروس والمحاضرات الكاملة بجودة عالية'
    },
    facebook: {
        key: 'facebook',
        name: 'فيسبوك',
        icon: 'fa-brands fa-facebook-f',
        cssClass: 'fb',
        color: '#1877F2',
        placeholder: 'https://facebook.com/...',
        desc: 'الصفحة الرسمية لمتابعة المواعظ والدروس والتحديثات اليومية ومجالس الساحة'
    },
    whatsapp: {
        key: 'whatsapp',
        name: 'واتساب',
        icon: 'fa-brands fa-whatsapp',
        cssClass: 'wa',
        color: '#25D366',
        placeholder: 'https://wa.me/...',
        desc: 'التواصل المباشر والاستفسارات مع إدارة ساحة الشيخ بالأقصر'
    },
    telegram: {
        key: 'telegram',
        name: 'تيليجرام',
        icon: 'fa-brands fa-telegram',
        cssClass: 'tg',
        color: '#229ED9',
        placeholder: 'https://t.me/...',
        desc: 'الدروس الصوتية، المقاطع القصيرة، والمواعظ المكتوبة والمنشورات'
    },
    instagram: {
        key: 'instagram',
        name: 'إنستغرام',
        icon: 'fa-brands fa-instagram',
        cssClass: 'ig',
        color: '#E1306C',
        placeholder: 'https://instagram.com/...',
        desc: 'الصور الرسمية ومجالس الساحة والدرر والمقتطفات المصممة عبر إنستغرام'
    },
    twitter: {
        key: 'twitter',
        name: 'منصة X',
        icon: 'fa-brands fa-x-twitter',
        cssClass: 'x',
        color: '#000000',
        placeholder: 'https://x.com/...',
        desc: 'التغريدات الوعظية المباشرة، إعلانات الدروس، ودرر الكلمات'
    },
    tiktok: {
        key: 'tiktok',
        name: 'تيك توك',
        icon: 'fa-brands fa-tiktok',
        cssClass: 'tt',
        color: '#000000',
        placeholder: 'https://www.tiktok.com/@...',
        desc: 'مقاطع دعوية قصيرة، رقائق إيمانية، وخلاصات مجالس العلم'
    },
    maps: {
        key: 'maps',
        name: 'موقع الساحة (خرائط Google)',
        icon: 'fa-solid fa-location-dot',
        cssClass: 'map',
        color: '#34A853',
        placeholder: 'https://maps.google.com/?q=...',
        desc: 'الموقع الجغرافي الدقيق لساحة الشيخ بالأقصر'
    },
    soundcloud: {
        key: 'soundcloud',
        name: 'ساوند كلاود',
        icon: 'fa-brands fa-soundcloud',
        cssClass: 'sc',
        color: '#FF5500',
        placeholder: 'https://soundcloud.com/...',
        desc: 'تسجيلات الدروس الصوتية الكاملة والابتهالات النبوية'
    },
    threads: {
        key: 'threads',
        name: 'ثريدز',
        icon: 'fa-brands fa-threads',
        cssClass: 'th',
        color: '#000000',
        placeholder: 'https://threads.net/@...',
        desc: 'الدرر الإيمانية والخواطر التربوية'
    },
    snapchat: {
        key: 'snapchat',
        name: 'سناب شات',
        icon: 'fa-brands fa-snapchat',
        cssClass: 'snap',
        color: '#FFFC00',
        placeholder: 'https://snapchat.com/add/...',
        desc: 'يوميات وبث فعاليات الساحة المباركة بالأقصر'
    },
    linkedin: {
        key: 'linkedin',
        name: 'لينكد إن',
        icon: 'fa-brands fa-linkedin-in',
        cssClass: 'in',
        color: '#0A66C2',
        placeholder: 'https://linkedin.com/in/...',
        desc: 'الصفحة الرسمية المعتمدة في شبكة الأعمال'
    },
    pinterest: {
        key: 'pinterest',
        name: 'بينتريست',
        icon: 'fa-brands fa-pinterest',
        cssClass: 'pin',
        color: '#BD081C',
        placeholder: 'https://pinterest.com/...',
        desc: 'لوحات تصاميم الأحاديث الشريفة والحكم النبوية'
    },
    web: {
        key: 'web',
        name: 'موقع رسمي',
        icon: 'fa-solid fa-globe',
        cssClass: 'web',
        color: '#C59B27',
        placeholder: 'https://...',
        desc: 'المنصة الرقمية المعتمدة لفضيلة الشيخ أحمد مرتضى حامد'
    }
};

/**
 * تهيئة مدير روابط التواصل مع دعم القائمة المنسدلة الشاملة
 */
function initSocialManager() {
    const platformSelect = document.getElementById('newSocialPlatformSelect');
    const urlInput = document.getElementById('newSocialUrlInput');
    const titleInput = document.getElementById('newSocialTitleInput');
    const badge = document.getElementById('newSocialIconBadge');
    const feedback = document.getElementById('newSocialDetectFeedback');
    const addBtn = document.getElementById('addNewSocialLinkBtn');
    const restoreBtn = document.getElementById('restoreDefaultSocialLinksBtn');

    if (!platformSelect || !urlInput) return;

    // تحديث الأيقونة والحقول تلقائياً عند تغيير الاختيار من القائمة المنسدلة
    const updateUiFromSelect = (keepCustomTitle = false) => {
        const key = platformSelect.value;
        const conf = SOCIAL_PLATFORM_CONFIGS[key] || SOCIAL_PLATFORM_CONFIGS.web;

        if (badge) {
            badge.style.background = conf.color;
            badge.style.color = (key === 'snapchat') ? '#000000' : '#ffffff';
            badge.innerHTML = `<i class="${conf.icon}"></i>`;
        }

        if (titleInput && !keepCustomTitle) {
            titleInput.value = conf.name;
        }

        if (urlInput) {
            urlInput.placeholder = conf.placeholder;
        }

        if (feedback) {
            feedback.className = 'link-detect-feedback detected';
            feedback.innerHTML = `<span class="feedback-text"><i class="${conf.icon}"></i> منصة مختارة: <strong>${escapeHtml(conf.name)}</strong> - ضع رابط الحساب ثم اضغط «إضافة المنصة»</span>`;
        }
    };

    platformSelect.addEventListener('change', () => updateUiFromSelect(false));

    // كشف تلقائي ذكي إذا قام المستخدم بلصق أو كتابة رابط معروف
    const onUrlInput = () => {
        const val = urlInput.value.trim();
        if (val) {
            const detected = detectPlatform(val);
            // لا نغيّر المنصة إلا إذا تم التعرف الفعلي على منصة محددة (ليست web عامة)
            if (detected && detected.key && detected.key !== 'web' && SOCIAL_PLATFORM_CONFIGS[detected.key]) {
                if (platformSelect.value !== detected.key) {
                    platformSelect.value = detected.key;
                    // نحافظ على مسمى المستخدم إذا كان مخصصاً
                    const currentTitle = titleInput ? titleInput.value.trim() : '';
                    const isDefaultPreviousTitle = Object.values(SOCIAL_PLATFORM_CONFIGS).some(c => c.name === currentTitle);
                    updateUiFromSelect(!isDefaultPreviousTitle && currentTitle.length > 0);
                }
            }
        }
    };

    urlInput.addEventListener('input', onUrlInput);
    urlInput.addEventListener('paste', () => setTimeout(onUrlInput, 50));

    if (addBtn) {
        addBtn.addEventListener('click', () => addNewSocialLink(true));
    }

    if (restoreBtn) {
        restoreBtn.addEventListener('click', restoreDefaultSocialLinks);
    }

    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNewSocialLink(true);
        }
    });

    if (titleInput) {
        titleInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNewSocialLink(true);
            }
        });
    }

    // تشغيل التحديث الأولي لتطابق الأيقونة والاسم
    updateUiFromSelect(false);
}

/**
 * استعادة منصات الساحة الرسمية الافتراضية بنقرة واحدة
 */
async function restoreDefaultSocialLinks() {
    if (activeSocialLinks.length > 0) {
        if (!confirm('هل تريد استعادة المنصات الرسمية الافتراضية (يوتيوب، فيسبوك، واتساب، تيليجرام، إنستغرام، منصة X، خرائط الساحة)؟')) {
            return;
        }
    }

    activeSocialLinks = DEFAULT_CORE_SOCIAL_PLATFORMS.map(c => ({ ...c }));
    renderActiveSocialLinks();
    await persistActiveSocialLinks();
    showToast('تمت استعادة المنصات الرسمية المعتمدة لساحة الشيخ بالأقصر بنجاح! 🌿', 'success');
}

/**
 * إضافة رابط منصة جديد من القائمة المنسدلة وحقل الرابط
 */
function addNewSocialLink(showSuccessToast = true) {
    const platformSelect = document.getElementById('newSocialPlatformSelect');
    const urlInput = document.getElementById('newSocialUrlInput');
    const titleInput = document.getElementById('newSocialTitleInput');

    if (!urlInput) return;

    let urlVal = urlInput.value.trim();
    if (!urlVal) {
        if (showSuccessToast) {
            showToast('يرجى كتابة أو لصق رابط المنصة أولاً', 'error');
            urlInput.focus();
        }
        return;
    }

    // إضافة البروتوكول تلقائياً إذا نسيه المستخدم
    if (!/^https?:\/\//i.test(urlVal) && !/^mailto:/i.test(urlVal) && !/^tel:/i.test(urlVal)) {
        urlVal = 'https://' + urlVal;
    }

    try {
        new URL(urlVal);
    } catch (e) {
        if (showSuccessToast) {
            showToast('يرجى إدخال رابط صحيح (مثال: https://...)', 'error');
        }
        return;
    }

    const selectedKey = platformSelect ? platformSelect.value : 'web';
    const conf = SOCIAL_PLATFORM_CONFIGS[selectedKey] || detectPlatform(urlVal);
    const customTitle = titleInput ? titleInput.value.trim() : '';
    const finalName = customTitle || conf.name;

    // التحقق من عدم التكرار
    const alreadyExists = activeSocialLinks.some(item => item.url.toLowerCase() === urlVal.toLowerCase());
    if (alreadyExists) {
        if (showSuccessToast) {
            showToast('هذا الرابط مضاف مسبقاً في القائمة!', 'error');
        }
        return;
    }

    const newLink = {
        id: 'soc_' + Date.now(),
        url: urlVal,
        name: finalName,
        icon: conf.icon,
        cssClass: conf.cssClass,
        color: conf.color,
        key: conf.key,
        desc: conf.desc || 'المنصة الرسمية المعتمدة لفضيلة الشيخ أحمد مرتضى حامد'
    };

    activeSocialLinks.push(newLink);
    renderActiveSocialLinks();
    persistActiveSocialLinks();

    // تفريغ حقل الرابط
    urlInput.value = '';
    if (showSuccessToast) {
        showToast(`تمت إضافة منصة «${finalName}» وظهورها فوراً في الموقع! ✨`, 'success');
    }
}

/**
 * عرض قائمة الروابط النشطة المعتمدة في لوحة التحكم مع حقول قابلة للمسح والتعديل المباشر
 */
function renderActiveSocialLinks() {
    const list = document.getElementById('activeSocialLinksList');
    const countEl = document.getElementById('activeSocialCount');

    if (countEl) {
        countEl.textContent = activeSocialLinks.length;
    }

    if (!list) return;

    if (activeSocialLinks.length === 0) {
        list.innerHTML = `
            <div class="empty-links-state">
                <i class="fa-solid fa-share-nodes"></i>
                <p>لا توجد أي روابط أو أيقونات مضافة للموقع حالياً.<br>
                <small>يمكنك اختيار منصة من القائمة أعلاه وإضافتها، أو الضغط على زر استعادة المنصات الافتراضية بالأسفل.</small></p>
                <button type="button" class="btn btn-outline-gold btn-sm" onclick="restoreDefaultSocialLinks()" style="margin-top: 1rem;">
                    <i class="fa-solid fa-rotate-left"></i> استعادة المنصات الرسمية للساحة
                </button>
            </div>
        `;
        return;
    }

    let html = '';
    activeSocialLinks.forEach(item => {
        html += `
            <div class="active-social-item" style="--item-color: ${item.color};">
                <div class="active-item-left" style="width: 100%;">
                    <div class="active-item-icon" style="background: ${item.color};">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="active-item-info" style="width: 100%;">
                        <div class="active-item-header">
                            <div class="active-item-title-badge">
                                <span>${escapeHtml(item.name)}</span>
                            </div>
                            <div class="active-item-actions">
                                <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="btn-visit-social" title="فتح واختبار الرابط في تبويب جديد">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                <button type="button" class="btn-remove-social" onclick="removeSocialLink('${item.id}')" title="مسح وحذف هذه المنصة فوراً من الموقع">
                                    <i class="fa-solid fa-trash-can"></i> مسح
                                </button>
                            </div>
                        </div>
                        <div class="active-item-inputs-row" style="display: grid; grid-template-columns: 120px 1fr; gap: 8px;">
                            <input type="text" class="form-control" id="social_title_${item.id}" value="${escapeHtml(item.name)}" placeholder="اسم المنصة" style="font-size: 0.82rem; padding: 0.35rem 0.6rem; height: 36px;" onchange="handleSocialTitleChange('${item.id}', this.value)" title="تعديل اسم المنصة">
                            <input type="text" class="form-control active-social-url-input" id="social_url_${item.id}" data-id="${item.id}" value="${escapeHtml(item.url)}" placeholder="الرابط: https://..." style="direction: ltr; font-size: 0.82rem; padding: 0.35rem 0.65rem; height: 36px;" onchange="handleSocialUrlChange('${item.id}', this.value)" title="تعديل الرابط">
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    list.innerHTML = html;
}

/**
 * معالجة تعديل اسم المنصة
 */
window.handleSocialTitleChange = async function(id, val) {
    const clean = (val || '').trim();
    const item = activeSocialLinks.find(x => String(x.id) === String(id));
    if (item && clean) {
        item.name = clean;
        renderActiveSocialLinks();
        await persistActiveSocialLinks();
        showToast(`تم تحديث اسم «${item.name}» ومزامنته فوراً! ✨`, 'success');
    }
};

/**
 * معالجة تعديل رابط المنصة أو مسحه (إفراغه) لحذفها تلقائياً
 */
window.handleSocialUrlChange = async function(id, val) {
    let clean = (val || '').trim();
    if (!clean) {
        // إذا قام المستخدم بمسح الرابط وتركه فارغاً، يتم حذف المنصة فوراً
        await removeSocialLink(id);
    } else {
        if (!/^https?:\/\//i.test(clean) && !/^mailto:/i.test(clean) && !/^tel:/i.test(clean)) {
            clean = 'https://' + clean;
        }

        const item = activeSocialLinks.find(x => String(x.id) === String(id));
        if (item) {
            item.url = clean;
            // إذا تغير الرابط إلى منصة معروفة أخرى، نحدّث الأيقونة تلقائياً
            const detected = detectPlatform(clean);
            if (detected.key !== 'web') {
                item.icon = detected.icon;
                item.cssClass = detected.cssClass;
                item.color = detected.color;
                item.key = detected.key;
            }
            renderActiveSocialLinks();
            await persistActiveSocialLinks();
            showToast(`تم تحديث رابط «${item.name}» ومزامنته فوراً! ✨`, 'success');
        }
    }
};

/**
 * حفظ قائمة الروابط النشطة في المتصفح والخادم فوراً
 */
async function persistActiveSocialLinks() {
    let currentSettings = {};
    try {
        currentSettings = JSON.parse(localStorage.getItem('sheikh_settings') || '{}');
    } catch (e) {
        currentSettings = {};
    }
    currentSettings.socialLinks = [...activeSocialLinks];
    localStorage.setItem('sheikh_settings', JSON.stringify(currentSettings));

    try {
        await fetch(`${API_BASE}/api/settings`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ socialLinks: activeSocialLinks })
        });
    } catch (e) {
        console.error('Error auto-saving social links:', e);
    }
}

/**
 * حذف رابط منصة من القائمة وحذفها فورياً من الموقع والخادم
 */
window.removeSocialLink = async function(id) {
    const targetIdx = activeSocialLinks.findIndex(item => String(item.id) === String(id));
    if (targetIdx === -1) return;

    const platformName = activeSocialLinks[targetIdx].name || 'المنصة';
    activeSocialLinks.splice(targetIdx, 1);
    renderActiveSocialLinks();

    await persistActiveSocialLinks();
    showToast(`تم مسح «${platformName}» وحذفها فوراً من الموقع! 🗑️`, 'success');
};

// ==========================================================================
// 13. حفظ الإعدادات العامة والمنصات (Settings & Platforms)
// ==========================================================================
async function handleSettingsSubmit() {
    const channelId = document.getElementById('cfgChannelId') ? document.getElementById('cfgChannelId').value.trim() : '';
    const announcement = document.getElementById('cfgAnnouncement') ? document.getElementById('cfgAnnouncement').value.trim() : '';

    // إذا كان المستخدم قد كتب رابطاً في حقل الإضافة ولم يضغط زر الإضافة، نضيفه تلقائياً
    const pendingUrlInput = document.getElementById('newSocialUrlInput');
    if (pendingUrlInput && pendingUrlInput.value.trim()) {
        addNewSocialLink(false);
    }

    // جمع أحدث الروابط والأسماء من الحقول واستبعاد أي رابط تم مسحه وتركه فارغاً
    const finalLinks = [];
    activeSocialLinks.forEach(item => {
        const urlInputEl = document.getElementById(`social_url_${item.id}`);
        const titleInputEl = document.getElementById(`social_title_${item.id}`);

        let val = urlInputEl ? urlInputEl.value.trim() : (item.url || '').trim();
        const customTitle = titleInputEl ? titleInputEl.value.trim() : item.name;

        if (val) {
            if (!/^https?:\/\//i.test(val) && !/^mailto:/i.test(val) && !/^tel:/i.test(val)) {
                val = 'https://' + val;
            }
            finalLinks.push({
                ...item,
                url: val,
                name: customTitle || item.name
            });
        }
    });

    let currentStored = {};
    try {
        currentStored = JSON.parse(localStorage.getItem('sheikh_settings') || '{}');
    } catch(e) {}

    // قراءة حالة وسائط الهيرو لعدم فقدانها عند حفظ الإعدادات العامة
    const radioImage = document.getElementById('heroModeImage');
    const isImageMode = radioImage && radioImage.checked;
    const heroTitleInput = document.getElementById('heroImageTitleInput');
    const heroSubtitleInput = document.getElementById('heroImageSubtitleInput');

    let existingHeroMedia = currentStored.heroMedia || {};
    let customImg = existingHeroMedia.customImageUrl || existingHeroMedia.imageUrl || 'uploads/hero_1789291588780_01d38d97.png';

    if (isImageMode && currentHeroImageDataUrl && currentHeroImageDataUrl.startsWith('data:image/')) {
        try {
            const upRes = await fetch(`${API_BASE}/api/upload`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    image: currentHeroImageDataUrl,
                    filename: 'hero_custom.jpg'
                })
            });
            const upData = await upRes.json();
            if (upData.success && upData.url) {
                customImg = upData.url;
            }
        } catch (e) {}
    }

    const heroMedia = {
        mode: isImageMode ? 'image' : 'video',
        imageUrl: customImg,
        customImageUrl: customImg,
        title: heroTitleInput ? heroTitleInput.value.trim() : (existingHeroMedia.title || ''),
        imageTitle: heroTitleInput ? heroTitleInput.value.trim() : (existingHeroMedia.imageTitle || ''),
        desc: heroSubtitleInput ? heroSubtitleInput.value.trim() : (existingHeroMedia.desc || ''),
        imageSubtitle: heroSubtitleInput ? heroSubtitleInput.value.trim() : (existingHeroMedia.imageSubtitle || ''),
        badge: ''
    };

    const payload = {
        ...currentStored,
        channelId,
        announcement,
        socialLinks: activeSocialLinks,
        heroMedia
    };

    localStorage.setItem('sheikh_settings', JSON.stringify(payload));

    try {
        const res = await fetch(`${API_BASE}/api/settings`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
            showToast('تم حفظ كافة الإعدادات والروابط بنجاح! تم تحديث واجهة الموقع فوراً. ⚙️', 'success');
            return;
        }
    } catch (e) {
        console.error('Error saving settings to server:', e);
    }

    showToast('تم حفظ الإعدادات والروابط بنجاح!', 'success');
}

// ==========================================================================
// 13. دوال مساعدة (Helpers)
// ==========================================================================
function extractYouTubeId(input) {
    if (!input) return null;
    input = input.trim();

    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
    }

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = input.match(regExp);
    if (match && match[2] && match[2].length === 11) {
        return match[2];
    }

    const shortsMatch = input.match(/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch && shortsMatch[1]) {
        return shortsMatch[1];
    }

    return null;
}

function formatDateArabic(dateString) {
    if (!dateString) return 'تاريخ غير محدد';
    try {
        const d = new Date(dateString);
        if (isNaN(d.getTime())) return dateString;
        return d.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (e) {
        return dateString;
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
