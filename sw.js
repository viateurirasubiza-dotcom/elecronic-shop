// Service Worker yoroshe ituma PWA yemezwa
const CACHE_NAME = 'ebenezer-shop-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Ibi bituma browser ibona ko hari ikintu gikorwa mu gihe cyo gukura amakuru
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
