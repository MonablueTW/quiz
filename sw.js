// 離線快取。更新題庫或新增科目時：把檔名加進 FILES，並把 VERSION 數字 +1
var VERSION = "v2";
var FILES = [
  "./",
  "index.html",
  "manifest.json",
  "icon-180.png",
  "icon-512.png",
  "data/history-115-1-2.js",
  "data/chinese-115-1-2.js",
  "img/q15.png",
  "img/q51.png"
];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== VERSION; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(function(hit){
    return hit || fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(VERSION).then(function(c){ c.put(e.request, copy); });
      return res;
    });
  }));
});
