/* Service worker tối giản: giúp Chrome Android cho phép CÀI app. Không lưu cache nên luôn lấy bản mới nhất. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
