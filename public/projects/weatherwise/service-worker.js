const CACHE_NAME = 'weatherwise-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Add all your static assets here.
  // In a Create React App setup, `npm run build` will generate optimized assets,
  // and you'd typically pre-cache them. For a manual setup, list them explicitly.
  '/assets/index-BTFsH0dG.js', // Example, adjust based on your build output
  '/assets/index-BN02SEwR.css', // Example, adjust based on your build output
  '/icon-192x192.png',
  '/icon-512x512.png',
  'https://api.openweathermap.org/img/wn/01d@4x.png', // Example weather icon, cache common ones
  // Add other static assets, fonts, etc.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache hit - fetch from network
        return fetch(event.request).catch(() => {
          // If network also fails, serve a fallback for HTML requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html'); // Fallback to index.html for navigation
          }
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
