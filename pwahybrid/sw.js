/** An empty service worker! */
self.addEventListener('fetch', function(event) {
  caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
  })
});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        './index.html',
        './codigo.js',
        './pwa-192x192.png',
        './sw.js',
        './manifest.json',
      ]);
    })
  );
});
