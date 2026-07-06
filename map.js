/* ============================================
   BATTICALOA TOURISM — ROUTE MAP
   ============================================ */
const mapLocations = [
  { name:'Dutch Fort', type:'Heritage Site', desc:'Built 1628 by the Portuguese, later expanded by the Dutch. Four bastions, VOC gate, panoramic lagoon views.', time:'1-2 hours', color:'#2DD4BF', x:'38%', y:'32%' },
  { name:'Pasikudah Beach', type:'Beach Resort', desc:'Crystal-clear turquoise waters, shallow and safe. Swimming, snorkeling, jet skiing. 35km from town.', time:'Full day', color:'#FBBF24', x:'55%', y:'42%' },
  { name:'Kallady Beach', type:'Beach & Town', desc:'Golden sand, lagoon views from the famous bridge, seafood restaurants, evening strolls. 2km from center.', time:'Half day', color:'#2DD4BF', x:'25%', y:'55%' },
  { name:'Gal Oya National Park', type:'Wildlife', desc:'Only Sri Lankan park with boat safaris — elephants swimming between islands, crocodiles, 150+ bird species. 50km away.', time:'Full day', color:'#4ADE80', x:'70%', y:'60%' },
  { name:'Town & Markets', type:'Cultural Hub', desc:'Main market, Hindu temples, mosques, street food, vibrant commercial streets.', time:'2-3 hours', color:'#FB923C', x:'45%', y:'70%' },
  { name:'Lagoon Islands', type:'Island Communities', desc:'Fishing villages, mangrove forests, "singing fish" legend, birdwatching.', time:'Half to full day', color:'#FB7185', x:'15%', y:'40%' }
];

function initMap() {
  const container = document.getElementById('mapPins');
  if (!container) return;
  mapLocations.forEach((loc, i) => {
    const pin = document.createElement('div');
    pin.className = 'map-pin';
    pin.style.left = loc.x;
    pin.style.top = loc.y;
    pin.onclick = () => showMapInfo(i);
    pin.innerHTML = `<div class="map-pin-pulse"></div><div class="map-pin-dot" style="background:${loc.color}"></div>`;
    container.appendChild(pin);
  });
}

function showMapInfo(i) {
  const d = mapLocations[i];
  const panel = document.getElementById('mapInfoPanel');
  const content = document.getElementById('mapInfoContent');
  if (!panel || !content) return;
  content.innerHTML = `
    <button onclick="document.getElementById('mapInfoPanel').classList.remove('show')" style="position:absolute;top:.5rem;right:.5rem;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;border:none;color:rgba(255,255,255,.5);cursor:pointer"><span class="iconify" data-icon="lucide:x" style="font-size:.8rem"></span></button>
    <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.5rem"><span style="width:10px;height:10px;border-radius:50%;background:${d.color}"></span><span style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.08em">${d.type}</span></div>
    <h3 style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;margin-bottom:.4rem">${d.name}</h3>
    <p style="font-size:.85rem;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:.6rem">${d.desc}</p>
    <div style="display:flex;align-items:center;gap:1rem">
      <span style="display:flex;align-items:center;gap:.35rem;font-size:.75rem;color:#2DD4BF"><span class="iconify" data-icon="lucide:clock"></span>${d.time}</span>
      <button onclick="sendAI('Tell me about ${d.name}')" style="display:flex;align-items:center;gap:.3rem;font-size:.75rem;color:#FBBF24;font-weight:600;background:none;border:none;cursor:pointer"><span class="iconify" data-icon="lucide:bot"></span>Ask AI</button>
    </div>`;
  panel.classList.add('show');
}

function generateTrip() {
  const result = document.getElementById('tripResult');
  const content = document.getElementById('tripContent');
  if (!result || !content) return;
  result.classList.remove('hidden');
  content.innerHTML = '<div class="skeleton" style="height:16px;width:75%;margin-bottom:.5rem"></div><div class="skeleton" style="height:16px;width:100%;margin-bottom:.5rem"></div><div class="skeleton" style="height:16px;width:60%"></div>';
  setTimeout(() => {
    content.innerHTML = `
      <div style="display:flex;gap:.75rem;align-items:flex-start"><div style="width:30px;height:30px;border-radius:8px;background:rgba(14,139,139,.2);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#2DD4BF;flex-shrink:0">1</div><div><p style="font-weight:600;font-size:.875rem">Morning: Dutch Fort</p><p style="font-size:.75rem;color:rgba(255,255,255,.4)">Explore 400 years of history</p></div></div>
      <div style="display:flex;gap:.75rem;align-items:flex-start"><div style="width:30px;height:30px;border-radius:8px;background:rgba(14,139,139,.2);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#2DD4BF;flex-shrink:0">2</div><div><p style="font-weight:600;font-size:.875rem">Midday: Kallady Beach Lunch</p><p style="font-size:.75rem;color:rgba(255,255,255,.4)">Fresh seafood feast</p></div></div>
      <div style="display:flex;gap:.75rem;align-items:flex-start"><div style="width:30px;height:30px;border-radius:8px;background:rgba(14,139,139,.2);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#2DD4BF;flex-shrink:0">3</div><div><p style="font-weight:600;font-size:.875rem">Afternoon: Lagoon Cruise</p><p style="font-size:.75rem;color:rgba(255,255,255,.4)">Island hopping & singing fish</p></div></div>
      <div style="display:flex;gap:.75rem;align-items:flex-start"><div style="width:30px;height:30px;border-radius:8px;background:rgba(14,139,139,.2);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#2DD4BF;flex-shrink:0">4</div><div><p style="font-weight:600;font-size:.875rem">Evening: Town & Markets</p><p style="font-size:.75rem;color:rgba(255,255,255,.4)">Street food, temples, sunset</p></div></div>
      <div style="display:flex;gap:.75rem;align-items:flex-start"><div style="width:30px;height:30px;border-radius:8px;background:rgba(251,191,36,.15);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#FBBF24;flex-shrink:0">⭐</div><div><p style="font-weight:600;font-size:.875rem;color:#FBBF24">Next Day: Pasikudah</p><p style="font-size:.75rem;color:rgba(255,255,255,.4)">Water sports & beach relaxation</p></div></div>`;
    content.style.animation = 'msgIn .4s ease-out';
  }, 1200);
}