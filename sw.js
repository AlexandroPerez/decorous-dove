const staticCacheName = 'decorous-dove.glitch.me';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/style.css',
        '/script.js',
        'https://api.glitch.com/projects/decorous-dove',
        'https://cdn.glitch.com/3fd2e3a7-3145-4c1d-9480-32a2e6a6963a%2Flogo-day.svg?1490800908258',
        'https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/74bc3cdb-d504-412c-9cb4-b6ca0cface48-large.png',
      ]);
    })
  );
});


self.addEventListener('sync', event => {
  if (event.tag == 'sampleSync') {
    // see: https://wicg.github.io/BackgroundSync/spec/#dom-syncevent-lastchance
    event.waitUntil( doSomething() )
  }
});

function doSomething() {
  console.log("Background Sync Triggered! \nDoing Important stuff!");
}