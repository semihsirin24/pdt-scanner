self.addEventListener('install', e => {
e.waitUntil(
caches.open('pdt-cache').then(cache => {
return cache.addAll([
'/',
'index.html',
'manifest.json'
]);
})
);
});

