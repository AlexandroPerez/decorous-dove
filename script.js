/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const button = document.getElementById('button');

button.onclick = function() {
  navigator.serviceWorker.ready.then(function(reg) {
    return reg.sync.register('sampleSync');
  });
};

function registerServiceWorker () {
  if (!navigator.serviceWorker) return;
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log("Service Worker has been registered successfully!");
  }).catch((e) => {
    console.log("Coudn't register service worker... \n", e);
  });
}

registerServiceWorker();