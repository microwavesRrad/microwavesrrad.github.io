const starterArtist = {name:"Limner studio", tag:'One artist to begin'};
const dialog = document.querySelector('#commission');
const form = document.querySelector('#brief-form');
let active = starterArtist;

const works = [
  {title:'Frankenstein; or, The Modern Prometheus',author:'Mary Shelley · Original 1818 text',category:'FEATURED COMMISSION IDEA',id:'41445',edition:'1818 text — Project Gutenberg edition #41445, transcribed from a photo-reprint of the 1818 edition',hook:'Your own handmade Frankenstein.',idea:'Commission a complete physical book of Shelley’s novel. It could be handwritten in pencil, interwoven with anatomical drawings, traced like a laboratory record, or freely interpreted by the artist. A chapter or selected passages can become a smaller commission.',scope:'The complete 1818 novel, copied by hand; discuss selected chapters as an alternative',format:'A handmade bound physical book'},
  {title:'Pangur Bán',author:'Anonymous Irish poet · Kuno Meyer translation',category:'ONE PAGE · A SMALLER COMMISSION',id:'32030',edition:'The Monk and His Pet Cat, translated by Kuno Meyer in Selections from Ancient Irish Poetry — Project Gutenberg edition #32030',hook:'A monk, a cat, and a page to keep.',idea:'Commission the complete poem on one physical page. Pencil handwriting, a little cat drawing, traced details, or a free-flowing mix: let the artist make it their own. A smaller scope for a more modest budget, with the price set by the artist and open to negotiation.',scope:'The complete poem The Monk and His Pet Cat (Pangur Bán), on one page',format:'One handmade physical page'},
  {title:'The Quantum Theory of the Electron',author:'P. A. M. Dirac · 1928',category:'SCIENTIFIC PAPER · EQUATIONS BY HAND',id:'dirac-1928',url:'https://royalsocietypublishing.org/rspa/article/117/778/610/2242/The-quantum-theory-of-the-electron',rights:'Original 1928 publication; US public-domain basis: publication before 1931. Publication: https://royalsocietypublishing.org/rspa/article/117/778/610/2242/The-quantum-theory-of-the-electron ; US term reference: https://web.law.duke.edu/cspd/publicdomainday/2026/ . Applies to the original paper, not new editorial additions; check other countries separately.',edition:'Proceedings of the Royal Society A, volume 117, issue 778 (1928), pages 610–624; original paper',hook:'A landmark paper, worked through by hand.',idea:'Commission a physical transcription of Dirac’s paper, including its equations. Imagine a pencil notebook or precise drafting sheets, with any artistic additions kept distinct from the original notation. Choose the full paper or a few meaningful pages.',scope:'The complete 1928 paper, including equations; selected pages can be agreed instead',format:'A handmade notebook or loose drafting sheets'},
  {title:'Alice’s Adventures in Wonderland',author:'Lewis Carroll',category:'STRANGE LITTLE WORLDS',id:'11',edition:'Lewis Carroll — Project Gutenberg edition #11',hook:'A rabbit hole you can hold.',idea:'Commission the opening chapter as a small handmade book, with pencil text that wanders around the artist’s drawings.',scope:'Chapter I: Down the Rabbit-Hole',format:'A small handmade book'},
  {title:'The Notebooks of Leonardo da Vinci',author:'Leonardo da Vinci · Jean Paul Richter translation',category:'ART MEETS ENGINEERING',id:'5000',edition:'Jean Paul Richter translation — Project Gutenberg edition #5000',hook:'A notebook for an endlessly curious mind.',idea:'Choose notes on perspective or mechanics. Ask for a foldout of copied passages and hand-drawn diagrams, like a working draft.',scope:'Selected notes on perspective or mechanics; exact passages to be agreed',format:'Foldout manuscript sheets'},
  {title:'Micrographia',author:'Robert Hooke · 1665',category:'THE ALMOST INVISIBLE',id:'15491',edition:'Robert Hooke — Project Gutenberg edition #15491',hook:'An entire world in a tiny detail.',idea:'Pair a copied observation with a hand-drawn insect or plant detail. Imagine pencil studies, traced plates, or an oversized scientific notebook page.',scope:'One observation and its associated illustration; selection to be agreed',format:'A large physical study sheet'},
  {title:'The Kalevala',author:'Compiled by Elias Lönnrot · John Martin Crawford translation',category:'FOLKLORE & IMPOSSIBLE THINGS',id:'5186',edition:'John Martin Crawford translation — Project Gutenberg edition #5186',hook:'A piece of an epic, made by hand.',idea:'Choose a passage about the forging of the Sampo. Commission a manuscript that mixes copied verse with imagined workshop drawings.',scope:'Selected passages about the forging of the Sampo; exact verses to be agreed',format:'Loose manuscript pages or a small bound volume'}
];

const ideasGrid = document.querySelector('#ideas-grid');
ideasGrid.innerHTML = works.map((w,i)=>`<article class="idea-card ${i===0?'featured-work':''}"><div class="eyebrow">${w.category}</div><h3>${w.title}</h3><p class="work-author">${w.author}</p><h4>${w.hook}</h4><p class="work-idea">${w.idea}</p><div class="idea-actions"><button class="button" data-work="${i}">Commission this work ↗</button><a href="${w.url||`https://www.gutenberg.org/ebooks/${w.id}`}" target="_blank" rel="noopener noreferrer">Read the source ↗</a></div></article>`).join('');

function syncDirection(){
  const specified = form.elements.direction.value === 'customer';
  form.elements.style.required = specified;
  document.querySelector('#style-label').firstChild.textContent = specified ? 'Your artistic direction (required)' : 'Artistic preferences (optional)';
}

function openCommission(work){
  active = starterArtist;
  form.reset();
  syncDirection();
  if(work){
    form.elements.title.value = work.title;
    form.elements.edition.value = work.edition;
    form.elements.evidence.value = work.rights || `Project Gutenberg lists this edition as public domain in the USA: https://www.gutenberg.org/ebooks/${work.id}`;
    form.elements.source.value = work.url || `https://www.gutenberg.org/ebooks/${work.id}`;
    form.elements.scope.value = work.scope;
    if(work.format) form.elements.format.value = work.format;
    form.elements.notes.value = `Starting point, open to reinterpretation: ${work.idea}`;
    document.querySelector('#dialog-title').textContent = 'Make this work your own';
    document.querySelector('#artist-detail').textContent = 'A commission made in the founding studio. The creative approach remains open.';
  } else {
    document.querySelector('#dialog-title').textContent = 'Start with a work';
    document.querySelector('#artist-detail').textContent = "Limner studio · one artist to begin";
  }
  document.querySelector('#brief-status').textContent = '';
  dialog.showModal();
}

document.querySelector('#open-request').addEventListener('click',()=>openCommission());
ideasGrid.addEventListener('click',e=>{const button=e.target.closest('[data-work]');if(button)openCommission(works[Number(button.dataset.work)]);});
form.elements.direction.addEventListener('change',syncDirection);
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
document.querySelector('#join').addEventListener('click',()=>document.querySelector('#info').showModal());
document.querySelector('#how').addEventListener('click',()=>document.querySelector('#process').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));

form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const f=form.elements;
  const content=`SCRIPTORIUM — COMMISSION BRIEF\nPrototype draft — not sent, booked, or paid.\n\nArtist: ${active.name}\nStudio stage: One artist to begin; future artists may join later.\nCreative approach: ${f.direction.options[f.direction.selectedIndex].text}\nArtistic preferences: ${f.style.value||'Open to the artist'}\nPhysical format: ${f.format.value||'Open to the artist'}\nWork: ${f.title.value}\nEdition / translation: ${f.edition.value}\nPublic-domain source / evidence: ${f.evidence.value}\nSource / text:\n${f.source.value}\n\nScope: ${f.scope.value}\nMaterials and process: ${f.materials.value||'Open to the artist'}\nCustomer budget or offer: ${f.budget.value||'Not specified'}\nPricing: The artist sets their own price. The customer and artist may negotiate the scope or price before mutually agreeing, including materials and delivery.\n\nNotes:\n${f.notes.value||'None'}\n\nText rights: User requests a public-domain work and has supplied a source for the exact edition or translation. Public-domain status has not been independently verified.\n\nBefore commissioning a real artist: agree on the exact source and scope, a proposed approach or sample, physical format, artistic direction, paper, dimensions, delivery date, full price, and payment terms.\n`;
  const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='limner-commission-brief.txt';link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.querySelector('#brief-status').textContent='Your brief is ready to download. No request has been sent.';
});
