self.addEventListener('install', e => {
e.waitUntil(
caches.open('pdt-cache').then(cache => {
return cache.addAll([
'/',
'scanner.html',
'manifest.json'
]);
})
);
});
