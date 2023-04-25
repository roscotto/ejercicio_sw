console.log("SW: I'm a service worker");

self.addEventListener('fetch', event => {
    console.log("SW:", event.request.url);
    console.log(event);
});

