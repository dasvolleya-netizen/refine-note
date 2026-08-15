// Refine Note v0.5
// 開発中は古い画面が残らないよう、キャッシュを使用しません。
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',()=>{});
