const CACHE_NAME = 'adba-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/img/logo.png',
  '/img/dg.jpg',
  '/img/id.jpg',
  '/img/uv.jpg',
  '/img/dtft.jpg',
  '/img/var.jpg',
  '/img/ap.jpg',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Instalación: Guarda los archivos en el teléfono
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Estrategia: Carga desde la memoria si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});