self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("abjad-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./logo.jpg",
        "./service-worker.js",
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});