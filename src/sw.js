var cacheName = 'EPT-v1';
var appShellFiles = [
  './',
  './index.html',
  './favicon.ico',
  './icons/icon-32.png',
  './icons/icon-64.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-168.png',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-512.png',
  './sfx/audio-button.m4a',
  './sfx/audio-button.mp3',
  './sfx/audio-button.ogg',
  './sfx/music-bitsnbites-liver.m4a',
  './sfx/music-bitsnbites-liver.mp3',
  './sfx/music-bitsnbites-liver.ogg',
  './js/Achievements.js',
  './js/Boot.js',
  './js/Game.js',
  './js/MainMenu.js',
  './js/phaser-arcade-physics.2.6.2.min.js',
  './js/plugins/storage.js',
  './js/Preloader.js',
  './js/start.js',
  './js/Story.js',
  './img/background.png',
  './img/banner-beer.png',
  './img/button-achievements.png',
  './img/button-back.png',
  './img/button-beer.png',
  './img/button-continue.png',
  './img/button-mainmenu.png',
  './img/button-pause.png',
  './img/button-sound.png',
  './img/button-start.png',
  './img/button-tryagain.png',
  './img/clickme.png',
  './img/enclave-phaser-template.png',
  './img/loading-background.png',
  './img/loading-progress.png',
  './img/logo-enclave.png',
  './img/overlay.png',
  './img/particle.png',
  './img/title.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});