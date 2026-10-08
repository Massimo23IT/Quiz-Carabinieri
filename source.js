'use strict';
const params=new URLSearchParams(location.search),file=params.get('file');
const allowed=new Set(['centrale-operativa.pdf','informatica-arma.docx','storia-arma.docx']);
const statusEl=document.querySelector('#status'),download=document.querySelector('#download'),viewer=document.querySelector('#viewer'),retry=document.querySelector('#retry');
let blobURL;
async function openDocument(){
 retry.hidden=true;download.hidden=true;viewer.hidden=true;
 try{
  if(!allowed.has(file))throw new Error('Fonte non riconosciuta.');
  document.querySelector('#title').textContent=file.replace(/[-_]/g,' ');
  statusEl.textContent='Caricamento del documento originale…';
  const manifestResponse=await fetch('source-parts/manifest.json');
  if(!manifestResponse.ok)throw new Error('Indice delle fonti non disponibile.');
  const entry=(await manifestResponse.json()).find(e=>e.path==='dispense/'+file);
  if(!entry)throw new Error('Fonte non presente nell’indice.');
  let data;
  const original=await fetch(entry.path).catch(()=>null);
  if(original?.ok){data=await original.arrayBuffer();}
  else{
   const parts=[];
   for(let i=0;i<entry.parts.length;i++){
    statusEl.textContent='Caricamento del documento… '+Math.round(i/entry.parts.length*100)+'%';
    const response=await fetch(entry.parts[i]);
    if(!response.ok)throw new Error('Documento non disponibile. Controlla la connessione e riprova.');
    parts.push(await response.arrayBuffer());
   }
   data=await new Blob(parts).arrayBuffer();
  }
  const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',data))].map(n=>n.toString(16).padStart(2,'0')).join('');
  if(hash!==entry.sha256)throw new Error('Il documento è incompleto. Riprova il caricamento.');
  if(blobURL)URL.revokeObjectURL(blobURL);
  const pdf=file.endsWith('.pdf');
  const blob=new Blob([data],{type:pdf?'application/pdf':'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  blobURL=URL.createObjectURL(blob);download.href=blobURL;download.download=file;download.hidden=false;
  statusEl.textContent=pdf?'Documento pronto. Se l’anteprima non compare, scarica il PDF per aprirlo.':'Documento Word pronto: scaricalo per aprirlo.';
  if(pdf){const page=Math.max(1,Number.parseInt(params.get('page')||'1',10)||1);viewer.src=blobURL+'#page='+page;viewer.hidden=false;}
  document.documentElement.dataset.sourceReady='true';
 }catch(error){statusEl.textContent=error.message;retry.hidden=false;document.documentElement.dataset.sourceReady='error';}
}
retry.addEventListener('click',openDocument);
openDocument();
