const CACHE_NAME = "abajad-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/whats.png",
  "/manifest.json",
  "/logo.png",
  // Ajoute ici tout autre fichier JS, CSS, image, etc.
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
