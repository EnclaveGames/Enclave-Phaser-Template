var cacheName = 'EPT-v3';
var appShellFiles = [
  './',
  './index.html',
  './favicon.ico',
  './fonts/BRLNSDB.css',
  './fonts/BRLNSDB.eot',
  './fonts/BRLNSDB.otf',
  './fonts/BRLNSDB.svg',
  './fonts/BRLNSDB.ttf',
  './fonts/BRLNSDB.woff',
  './sfx/audio-button.m4a',
  './sfx/audio-button.mp3',
  './sfx/audio-button.ogg',
  './sfx/music-bitsnbites-liver.m4a',
  './sfx/music-bitsnbites-liver.mp3',
  './sfx/music-bitsnbites-liver.ogg',
  './img/icons/icon-32.png',
  './img/icons/icon-64.png',
  './img/icons/icon-96.png',
  './img/icons/icon-128.png',
  './img/icons/icon-168.png',
  './img/icons/icon-192.png',
  './img/icons/icon-256.png',
  './img/icons/icon-512.png',
  './js/phaser.3.18.1.min.js',
  './js/plugins/webfont.js',
  './js/start.js',
  './js/Boot.js',
  './js/Preloader.js',
  './js/MainMenu.js',
  './js/Settings.js',
  './js/Story.js',
  './js/Game.js',
  './img/background.png',
  './img/banner-beer.png',
  './img/button-achievements.png',
  './img/button-back.png',
  './img/button-beer.png',
  './img/button-continue.png',
  './img/button-credits.png',
  './img/button-home.png',
  './img/button-mainmenu.png',
  './img/button-music-off.png',
  './img/button-music-on.png',
  './img/button-pause.png',
  './img/button-settings.png',
  './img/button-sound-off.png',
  './img/button-sound-on.png',
  './img/button-start.png',
  './img/button-tryagain.png',
  './img/clickme.png',
  './img/enclave-phaser-template.png',
  './img/fork.png',
  './img/loading-background.png',
  './img/logo-enclave.png',
  './img/overlay.png',
  './img/particle.png',
  './img/pattern.png',
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