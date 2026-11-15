// Service Worker yoroshye ituma PWA yemezwa
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Ibi ni ngombwa kugira ngo PWA yemerewe kumanurwa (Installable)
});
