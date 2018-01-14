self.addEventListener('fetch', event => {
    console.log('In fetch');
    event.respondWith(fetch(event.request));
});
//