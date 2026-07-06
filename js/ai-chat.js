/* ============================================
   BATTICALOA TOURISM — AI CHATBOT
   ============================================ */
let _aiOpen = false;

function toggleAI() {
  _aiOpen = !_aiOpen;
  const chat = document.getElementById('aiChat');
  const icon = document.getElementById('aiFabIcon');
  if (chat) chat.classList.toggle('open', _aiOpen);
  if (icon) icon.setAttribute('data-icon', _aiOpen ? 'lucide:x' : 'lucide:bot');
  if (_aiOpen) {
    const inp = document.getElementById('aiInput');
    if (inp) inp.focus();
  }
}

function sendAI(text) {
  if (!_aiOpen) toggleAI();
  const inp = document.getElementById('aiInput');
  if (inp) inp.value = text;
  handleAISend(new Event('submit'));
}

function handleAISend(e) {
  e.preventDefault();
  const inp = document.getElementById('aiInput');
  const msg = inp?.value.trim();
  if (!msg) return;
  inp.value = '';
  addMsg(msg, 'user');
  const sug = document.getElementById('aiSuggestions');
  if (sug) sug.style.display = 'none';

  const typing = document.createElement('div');
  typing.className = 'ai-typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  const box = document.getElementById('aiMessages');
  if (box) box.appendChild(typing);
  scrollAI();

  setTimeout(() => {
    typing.remove();
    addMsg(getResponse(msg), 'bot');
    scrollAI();
  }, 800 + Math.random() * 800);
}

function addMsg(html, type) {
  const box = document.getElementById('aiMessages');
  if (!box) return;
  const d = document.createElement('div');
  d.className = `ai-msg ${type}`;
  d.innerHTML = html;
  box.appendChild(d);
  scrollAI();
}

function scrollAI() {
  const c = document.getElementById('aiMessages');
  if (c) c.scrollTop = c.scrollHeight;
}

function getResponse(m) {
  const q = m.toLowerCase();
  if (q.match(/beach|swim|pasikudah|kallady|vakarai/))
    return `<p><strong>🏖️ Best Beaches:</strong></p><ul style="margin-top:.5rem"><li><strong>Pasikudah</strong> — Crystal turquoise, shallow & safe. 35km from town.</li><li><strong>Kallady</strong> — City beach, seafood, sunset bridge views.</li><li><strong>Vakarai</strong> — Untouched, 50km north, perfect for solitude.</li><li><strong>Kalkudah</strong> — Adjacent to Pasikudah, fewer crowds.</li></ul><p style="margin-top:.5rem;font-size:.8rem;color:rgba(255,255,255,.4)">Best: Apr–Oct for calm seas.</p>`;
  if (q.match(/fort|dutch|history|heritage/))
    return `<p><strong>🏛️ Dutch Fort:</strong> Built 1628 by Portuguese, expanded by Dutch in 1638. Features four bastions, VOC gate emblem, panoramic lagoon views. Open daily, free entry. Best in morning for photos.</p>`;
  if (q.match(/food|eat|restaurant|cuisine|crab|curry/))
    return `<p><strong>🍽️ Must-Try Foods:</strong></p><ul style="margin-top:.5rem"><li><strong>Crab Curry</strong> — Famous lagoon crabs in spicy gravy</li><li><strong>Kool</strong> — Unique seafood broth, a Batticaloa specialty</li><li><strong>Pittu & Kiri Hodi</strong> — Rice flour cylinders with coconut milk</li><li><strong>String Hoppers</strong> — Delicate noodle nests with curry</li><li><strong>Pani Varatti</strong> — Traditional palm sugar sweet</li></ul>`;
  if (q.match(/get|reach|transport|bus|train|how|fly/))
    return `<p><strong>🚗 Getting Here:</strong></p><ul style="margin-top:.5rem"><li><strong>Bus from Colombo:</strong> 7-8 hrs via A4</li><li><strong>Train:</strong> Night train 9-10 hrs — scenic!</li><li><strong>Car:</strong> 6-7 hrs via E01 + A4</li><li><strong>Airport transfer:</strong> Private available</li></ul>`;
  if (q.match(/plan|trip|itinerary|day|schedule/))
    return `<p><strong>✨ 3-Day Itinerary:</strong></p><p style="margin-top:.5rem"><strong>Day 1:</strong> Dutch Fort → Kallady lunch → Town walk → Sunset bridge</p><p><strong>Day 2:</strong> Pasikudah full day — swim, snorkel, jet ski</p><p><strong>Day 3:</strong> Gal Oya safari → Lagoon island hopping → Cultural evening</p><p style="margin-top:.5rem"><a href="book.html" style="color:#5EEAD4;text-decoration:underline">Book this trip →</a></p>`;
  if (q.match(/event|festival|celebration/))
    return `<p><strong>📅 Upcoming:</strong></p><ul style="margin-top:.5rem"><li>Aug 15 — Lagoon Festival</li><li>Sep 5 — Kallady Beach Carnival</li><li>Oct 20 — Dutch Fort Heritage Week</li><li>Nov 10 — Water Sports Championship</li><li>Dec 18 — Eastern Food Festival</li></ul><p style="margin-top:.5rem"><a href="events.html" style="color:#5EEAD4;text-decoration:underline">See all events →</a></p>`;
  if (q.match(/stay|hotel|accommodation|room|sleep/))
    return `<p><strong>🏨 Accommodation:</strong></p><ul style="margin-top:.5rem"><li><strong>Luxury:</strong> Pasikudah resorts ₹8K-25K/night</li><li><strong>Mid-range:</strong> City hotels ₹3K-8K</li><li><strong>Budget:</strong> Homestays ₹1K-3K</li></ul><p style="margin-top:.5rem"><a href="book.html" style="color:#5EEAD4;text-decoration:underline">Book now →</a></p>`;
  if (q.match(/lagoon|singing|fish|cruise|boat/))
    return `<p><strong>🌊 Lagoon:</strong> 56km long, dotted with islands. Sunset cruise ~₹2,500. Island hopping, birdwatching (100+ species), mangrove forests. "Singing fish" phenomenon Apr–Sep.</p>`;
  if (q.match(/weather|climate|rain|temperature|when/))
    return `<p><strong>🌤️ Weather:</strong></p><ul style="margin-top:.5rem"><li>Jan–Mar: Dry, 27-32°C — sightseeing</li><li>Apr–Sep: Dry, 28-35°C — beaches</li><li>Oct–Dec: Some rain, 25-30°C — lush green</li></ul>`;
  if (q.match(/hello|hi|hey|good/))
    return `<p>👋 Welcome! Ask me about beaches, heritage, food, transport, events, booking, or say "plan my trip"!</p>`;
  if (q.match(/thank/))
    return `<p>You're welcome! 😊 <a href="book.html" style="color:#5EEAD4;text-decoration:underline">Ready to book?</a></p>`;
  if (q.match(/book|reserve|price|cost|budget/))
    return `<p><strong>📋 Booking:</strong> I can help you plan! Visit our <a href="book.html" style="color:#5EEAD4;text-decoration:underline">Book Your Trip</a> page for packages, or tell me your dates and group size and I'll suggest options.</p>`;
  return `<p>Try asking about: beaches • heritage • food • transport • events • booking • "plan my trip"</p>`;
}

// Init AI listeners
document.addEventListener('DOMContentLoaded', () => {
  const fab = document.getElementById('aiFab');
  if (fab) fab.addEventListener('click', toggleAI);
  const form = document.querySelector('.ai-input-bar');
  if (form) form.addEventListener('submit', handleAISend);
  const inp = document.getElementById('aiInput');
  if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') handleAISend(e); });
  document.querySelectorAll('.ai-chip').forEach(c => {
    c.addEventListener('click', () => sendAI(c.textContent.trim()));
  });
});