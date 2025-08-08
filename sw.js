const CACHE_NAME = "food-planner-v1";
const urlsToCache = [
	"index.html",
	"manifest.json",
	"assets/index-Dqeq_dmm.css",
	"assets/index-Dxda77dh.js",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
