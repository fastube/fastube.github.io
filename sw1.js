const $versi = "1.0.1c";
const $caches = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
  "https://fonts.googleapis.com/css2?family=Freeman&family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  "https://fonts.gstatic.com/s/freeman/v1/S6u9w4NGQiLN8nh-SwiPGQ3q5d0.woff2",
  "https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4jQmfxI.woff2",
  "https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73ord4jQmfxIC7w.woff2",
  "https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2",
  "https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
  //"//acscdn.com/script/aclib.js",
  "https://www.youtube.com/player_api",
  "https://www.youtube.com/s/player/c9168c90/www-widgetapi.vflset/www-widgetapi.js",
  "./",
  "./index.html",
  "./manifest.json",
  "./bell.svg",
  "./chevron.svg",
  "./dl-white.svg",
  "./download.svg",
  "./info.svg",
  "./lightbulb-white.svg",
  "./addlist.svg",
  "./lightbulb.svg",
  "./remove.svg",
  "./reply.svg",
  "./xbell.svg",
  "./favicon.png",
  "./youtube.png",
  "./ig.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open($versi).then(cache => {
      return cache.addAll($caches);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => key !== $versi).map(key => caches.delete(key)));
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
