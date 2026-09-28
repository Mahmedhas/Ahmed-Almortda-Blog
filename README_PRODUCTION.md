# دليل نشر وتشغيل مدونة فضيلة الشيخ أحمد مرتضى حامد في بيئة الإنتاج (Production Deployment Guide)

تم تجهيز وبرمجة المدونة بأعلى معايير الأمان والأداء بدون أي اعتمادية على حزم خارجية معقدة (`Zero-Dependency Architecture`). يعمل الخادم فوراً بنظام Node.js الأصلي.

---

## 1. المتطلبات الأساسية
- تثبيت [Node.js](https://nodejs.org) (الإصدار 18 أو أحدث).
- لا حاجة لتشغيل `npm install` لأن الخادم لا يعتمد على أي مكتبات خارجية إضافية!

---

## 2. خيارات التشغيل

### أ) التشغيل المباشر السريع (Quick Run):
```bash
node server.js
```
سيبدأ الخادم فوراً على المنفذ `3000`.

---

### ب) التشغيل الاحترافي عبر PM2 (موصى به للاستضافات و VPS):
لضمان عمل الموقع 24/7 وإعادة تشغيله تلقائياً في حال حدوث أي انقطاع:

1. تثبيت PM2 عالمياً (إذا لم يكن مثبتاً):
```bash
npm install -g pm2
```

2. تشغيل الموقع باستخدام ملف الإعدادات الجاهز:
```bash
pm2 start ecosystem.config.js
```

3. لحفظ حالة التشغيل لتعمل تلقائياً عند إعادة تشغيل السيرفر:
```bash
pm2 save
pm2 startup
```

4. لمتابعة السجلات (Logs) وحالة الخادم:
```bash
pm2 status
pm2 logs sheikh-ahmed-mortada-blog
```

---

## 3. إعداد خادم الويب العكسي (Nginx Reverse Proxy) وشهادة SSL (HTTPS)

إذا كنت تنشر الموقع على سيرفر Linux (مثل Ubuntu VPS):

### إعداد Nginx:
قم بإنشاء ملف `/etc/nginx/sites-available/sheikh-blog`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;

        client_max_body_size 50M;
    }
}
```

تفعيل الرابط واختبار Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/sheikh-blog /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### تفعيل شهادة الأمان المجانية (Let\'s Encrypt SSL):
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 4. إعداد المزامنة التلقائية مع YouTube (YouTube Auto-Sync)
يمكنك وضع مفتاح YouTube Data API v3 ومعرف القناة في:
- لوحة التحكم: `http://yourdomain.com/admin.html` (قسم إعدادات المزامنة).
- أو عبر التعديل المباشر لملف `data/settings.json`.

---

## 5. النسخ الاحتياطي للبيانات (Backup)
كل بيانات الموقع (المحاضرات، الإعدادات، كلمات المرور، المرفقات) محفوظة بأمان داخل مجلدين فقط:
- `data/` : يحتوي على `videos.json` و `settings.json` و `auth.json`.
- `uploads/` : يحتوي على الصور المرفوعة وصور الواجهة المخصصة.

يكفي أخذ نسخة احتياطية دورية من هذين المجلدين.
