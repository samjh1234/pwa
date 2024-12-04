const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = ['index.html', 'photos/backgroundfo.png', 'aggiungi.html', 'photos/favicon.png', 'manifest.json', 'photos/icon-192x192.png','photos/icon-512x512.png', 'db-admin.html', 'photos/logo.png', 'record.html', 'modifica.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
