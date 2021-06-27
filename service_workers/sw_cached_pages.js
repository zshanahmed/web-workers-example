const cacheName = 'v1'

const cacheAssets = [
    'index.html',
    'index1.html',
    'main.js',
    'square.js',
    'worker.js',
    'style.css'
]

// Installing service worker
self.addEventListener('install', (e) => {
    console.log('Service Worker Installed!');

    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files')
                cache.addAll(cacheAssets)
                }   
            )
            .then(() => self.skipWaiting())
    )
});

// Activating service worker
self.addEventListener('activate', (e) => {
    console.log('Service Worker Activated!');

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== cacheName) {
                            console.log('Service Worker: Deleting Old Caches');
                            caches.delete(cache);
                        }
                    })
                )
            }
        )
    )
});

// Fetching assets from cache based on request
self.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})