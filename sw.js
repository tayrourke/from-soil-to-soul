// From Soil to Soul — Service Worker
// Stale-while-revalidate for instant load + background update
// Bump this on every release so users get fresh assets.
// Format: fsts-YYYY-MM-DD (or any monotonically increasing version).
const CACHE_NAME = 'fsts-2026-05-08-8';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './planner.png',
        './logo.png',
        './manifest.webmanifest',
        './app-icon-192.png',
        './app-icon-512.png',
        './apple-touch-icon.png',
        './favicon-32.png',
        './favicon-16.png',
        './data-packaged-learn.js'
      ]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const isNavigate = event.request.mode === 'navigate';

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        // Always fetch fresh from network in background
        const fetchPromise = fetch(event.request).then(response => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            cache.put(event.request, clone);
            // If this is the main page and we had a cached version,
            // tell all clients to reload so they get the fresh content
            if (isNavigate && cached) {
              response.clone().text().then(newText => {
                cache.match(event.request).then(nowCached => {
                  if (nowCached) {
                    nowCached.text().then(oldText => {
                      if (newText !== oldText) {
                        self.clients.matchAll().then(clients => {
                          clients.forEach(client => client.postMessage({ type: 'NEW_VERSION' }));
                        });
                      }
                    });
                  }
                });
              });
            }
          }
          return response;
        }).catch(() => cached);

        // Return cached version immediately if available, otherwise wait for network
        return cached || fetchPromise;
      })
    )
  );
});
