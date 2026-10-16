/* ═══════════════════════════════════════════════════════════
   مشوارك أدمن - Service Worker
   يشتغل offline + يسرّع التحميل
   ═══════════════════════════════════════════════════════════ */

const CACHE_NAME = 'mishwarak-admin-v1';
const CACHE_FILES = [
    './',
    './index.html',
    './logo.png',
    './manifest.json'
];

/* ─── INSTALL: تخزين الملفات الأساسية ─── */
self.addEventListener('install', (event) => {
    console.log('🔧 SW: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_FILES).catch((err) => {
                console.log('⚠️ Cache addAll error:', err);
            });
        }).then(() => {
            console.log('✅ SW: Installed');
            return self.skipWaiting();
        })
    );
});

/* ─── ACTIVATE: تنظيف الكاش القديم ─── */
self.addEventListener('activate', (event) => {
    console.log('✅ SW: Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ SW: Activated');
            return self.clients.claim();
        })
    );
});

/* ─── FETCH: التعامل مع الطلبات ─── */
self.addEventListener('fetch', (event) => {
    // تجاهل الطلبات اللي مش GET
    if (event.request.method !== 'GET') return;

    const url = event.request.url;

    // تجاهل Firebase و Google APIs (لازم online دايماً)
    if (url.includes('firebaseio.com') ||
        url.includes('firebase') ||
        url.includes('googleapis.com') ||
        url.includes('gstatic.com') ||
        url.includes('cdnjs.cloudflare.com') ||
        url.includes('fonts.googleapis.com') ||
        url.includes('fonts.gstatic.com')) {
        return;
    }

    // تجاهل طلبات chrome-extension
    if (url.startsWith('chrome-extension://')) return;

    // استراتيجية: Cache First مع تحديث في الخلفية
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // لو موجود في الكاش، رجّعه + حدّث في الخلفية
            if (cachedResponse) {
                // حدّث الكاش في الخلفية
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                }).catch(() => {
                    // offline - تمام، استخدم الكاش
                });
                return cachedResponse;
            }

            // لو مش موجود، حمّل من الشبكة
            return fetch(event.request).then((networkResponse) => {
                // تخزين الملفات الثابتة بس
                if (!networkResponse ||
                    networkResponse.status !== 200 ||
                    networkResponse.type === 'opaque') {
                    return networkResponse;
                }

                // تخزين في الكاش
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                // لو الشبكة فشلت ومفيش كاش، رجّع index.html
                if (event.request.mode === 'navigate' ||
                    (event.request.method === 'GET' &&
                     event.request.headers.get('accept')?.includes('text/html'))) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});

/* ─── MESSAGE: التواصل مع الصفحة ─── */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            console.log('🗑️ Cache cleared');
        });
    }
});

/* ─── PUSH NOTIFICATIONS (اختياري - لو عايز تستخدمه مستقبلاً) ─── */
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'مشوارك أدمن';
    const options = {
        body: data.body || 'طلب جديد وصل!',
        icon: './logo.png',
        badge: './logo.png',
        vibrate: [200, 100, 200],
        data: data.data || {},
        actions: [
            { action: 'open', title: 'فتح اللوحة' },
            { action: 'close', title: 'إغلاق' }
        ]
    };
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

/* ─── CLICK على الإشعار ─── */
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'close') return;
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // لو اللوحة مفتوحة، ركّز عليها
            for (const client of clientList) {
                if (client.url.includes(self.registration.scope) && 'focus' in client) {
                    return client.focus();
                }
            }
            // لو مش مفتوحة، افتحها
            if (clients.openWindow) {
                return clients.openWindow('./index.html');
            }
        })
    );
});

console.log('🚀 SW: Loaded successfully');
