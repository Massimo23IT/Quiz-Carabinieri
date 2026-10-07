const CACHE='quiz-carabinieri-v3.2.0';
const CORE=['./','./index.html','./app.css','./app.js','./questions.json','./catalog.json','./manifest.webmanifest','./assets/carabiniere-hero-v3.png','./assets/carabiniere-hero.png','./dispense/patenti-testo-recuperato.html','./dispense/centrale-web-storia.html','./dispense/centrale-web-nue.html','./dispense/centrale-web-tetra.html','./assets/quesiti/cn2.png','./assets/quesiti/dmo.png','./assets/quesiti/fpg1.png','./assets/quesiti/gp380.png','./assets/quesiti/hf175.png','./assets/quesiti/hf2005.png','./assets/quesiti/hf647.png','./assets/quesiti/mtm5400.png','./assets/quesiti/sc2020.png','./assets/quesiti/tc4.png','./assets/quesiti/tmo.png','./dispense/centrale-testo-allegato.html','./icon.svg','./icon-192.png','./icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(CORE))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith('quiz-carabinieri-')&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

async function networkFirst(request){
  const cache=await caches.open(CACHE);
  try{
    const response=await fetch(request,{cache:'no-cache'});
    if(response&&response.ok) await cache.put(request,response.clone());
    return response;
  }catch(err){
    const cached=await cache.match(request,{ignoreSearch:true});
    if(cached) return cached;
    throw err;
  }
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin) return;

  if(request.mode==='navigate'){
    event.respondWith(
      networkFirst(request).catch(()=>caches.match('./index.html',{ignoreSearch:true}))
    );
    return;
  }

  const isAppAsset=
    ['script','style','image','manifest'].includes(request.destination) ||
    url.pathname.includes('/dispense/') || url.pathname.endsWith('/catalog.json') || url.pathname.endsWith('/questions.json') ||
    url.pathname.endsWith('/manifest.webmanifest');

  if(isAppAsset){
    event.respondWith(networkFirst(request));
  }
});
