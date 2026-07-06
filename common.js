/* ============================================
   BATTICALOA TOURISM — COMMON JS
   Navigation, Footer, Scroll, Cookie, Reveal
   ============================================ */

// ---------- Inject Navigation ----------
function injectNav() {
  const nav = document.getElementById('nav-placeholder');
  if (!nav) return;
  const page = window.location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = `
  <nav class="nav-glass" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon"><span class="iconify text-white text-xl" data-icon="lucide:palmtree"></span></div>
        <div><span class="nav-logo-text">Batticaloa</span><span class="nav-logo-sub">Tourism</span></div>
      </a>
      <div class="nav-links">
        <a href="index.html" class="nav-link ${page==='index.html'?'active':''}">Home</a>
        <div class="nav-item">
          <button class="nav-link ${['explore.html','neighborhoods.html'].includes(page)?'active':''}">Explore <span class="iconify text-xs" data-icon="lucide:chevron-down"></span></button>
          <div class="mega-menu">
            <div class="mega-grid">
              <a href="explore.html" class="mega-link"><span class="iconify" data-icon="lucide:compass"></span>Things to Do</a>
              <a href="neighborhoods.html" class="mega-link"><span class="iconify" data-icon="lucide:map-pin"></span>Neighborhoods</a>
              <a href="explore.html#heritage" class="mega-link"><span class="iconify" data-icon="lucide:landmark"></span>Heritage Sites</a>
              <a href="explore.html#beaches" class="mega-link"><span class="iconify" data-icon="lucide:waves"></span>Beaches & Lagoon</a>
              <a href="explore.html#nature" class="mega-link"><span class="iconify" data-icon="lucide:trees"></span>Nature & Wildlife</a>
              <a href="explore.html#food" class="mega-link"><span class="iconify" data-icon="lucide:utensils"></span>Food & Drink</a>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <button class="nav-link ${['plan.html','book.html'].includes(page)?'active':''}">Plan Trip <span class="iconify text-xs" data-icon="lucide:chevron-down"></span></button>
          <div class="mega-menu">
            <div class="mega-grid">
              <a href="plan.html" class="mega-link"><span class="iconify" data-icon="lucide:route"></span>Route Map</a>
              <a href="book.html" class="mega-link"><span class="iconify" data-icon="lucide:calendar-check"></span>Book Your Trip</a>
              <a href="plan.html#accommodation" class="mega-link"><span class="iconify" data-icon="lucide:bed-double"></span>Accommodation</a>
              <a href="plan.html#transport" class="mega-link"><span class="iconify" data-icon="lucide:bus"></span>Getting Around</a>
              <a href="plan.html#guides" class="mega-link"><span class="iconify" data-icon="lucide:map"></span>Maps & Guides</a>
              <a href="plan.html#weather" class="mega-link"><span class="iconify" data-icon="lucide:cloud-sun"></span>Best Time to Visit</a>
            </div>
          </div>
        </div>
        <a href="events.html" class="nav-link ${page==='events.html'?'active':''}">Events</a>
        <a href="social.html" class="nav-link ${page==='social.html'?'active':''}">Social</a>
        <a href="about.html" class="nav-link ${page==='about.html'?'active':''}">About</a>
      </div>
      <a href="book.html" class="nav-cta"><span class="iconify" data-icon="lucide:calendar-check"></span> Book Your Trip</a>
      <button class="hamburger" id="hamburgerBtn" aria-label="Open menu"><span class="iconify" data-icon="lucide:menu"></span></button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-close" id="mobileClose"><span class="iconify" data-icon="lucide:x"></span></button>
    <a href="index.html" class="mobile-link">Home</a>
    <div class="mobile-accordion">
      <button class="mobile-acc-btn">Explore <span class="iconify" data-icon="lucide:chevron-down"></span></button>
      <div class="mobile-acc-body">
        <a href="explore.html" class="mobile-sub">Things to Do</a>
        <a href="neighborhoods.html" class="mobile-sub">Neighborhoods</a>
        <a href="explore.html#heritage" class="mobile-sub">Heritage Sites</a>
        <a href="explore.html#beaches" class="mobile-sub">Beaches & Lagoon</a>
        <a href="explore.html#nature" class="mobile-sub">Nature & Wildlife</a>
        <a href="explore.html#food" class="mobile-sub">Food & Drink</a>
      </div>
    </div>
    <div class="mobile-accordion">
      <button class="mobile-acc-btn">Plan Trip <span class="iconify" data-icon="lucide:chevron-down"></span></button>
      <div class="mobile-acc-body">
        <a href="plan.html" class="mobile-sub">Route Map</a>
        <a href="book.html" class="mobile-sub">Book Your Trip</a>
        <a href="plan.html#accommodation" class="mobile-sub">Accommodation</a>
        <a href="plan.html#transport" class="mobile-sub">Getting Around</a>
      </div>
    </div>
    <a href="events.html" class="mobile-link">Events</a>
    <a href="social.html" class="mobile-link">Social</a>
    <a href="about.html" class="mobile-link">About</a>
    <a href="book.html" class="mobile-cta"><span class="iconify" data-icon="lucide:calendar-check"></span> Book Your Trip</a>
  </div>`;
}

// ---------- Inject Footer ----------
function injectFooter() {
  const f = document.getElementById('footer-placeholder');
  if (!f) return;
  f.innerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="nav-logo">
            <div class="nav-logo-icon"><span class="iconify text-white text-xl" data-icon="lucide:palmtree"></span></div>
            <div><span class="nav-logo-text">Batticaloa</span><span class="nav-logo-sub">Tourism</span></div>
          </a>
          <p class="footer-brand-text">Official tourism platform of the Batticaloa Municipal Council. Discover, plan, and experience Eastern Sri Lanka's lagoon city.</p>
          <div class="footer-socials">
            <a href="https://facebook.com/mcbatticaloa" target="_blank" class="footer-social"><span class="iconify" data-icon="lucide:facebook"></span></a>
            <a href="https://instagram.com/batticaloatourism" target="_blank" class="footer-social"><span class="iconify" data-icon="lucide:instagram"></span></a>
            <a href="https://tiktok.com/@batticaloatourism" target="_blank" class="footer-social"><span class="iconify" data-icon="lucide:music-2"></span></a>
            <a href="#" class="footer-social"><span class="iconify" data-icon="lucide:youtube"></span></a>
            <a href="#" class="footer-social"><span class="iconify" data-icon="lucide:twitter"></span></a>
          </div>
        </div>
        <div>
          <h4 class="footer-heading">Explore</h4>
          <ul class="footer-links">
            <li><a href="explore.html">Things to Do</a></li>
            <li><a href="neighborhoods.html">Neighborhoods</a></li>
            <li><a href="explore.html#heritage">Heritage Sites</a></li>
            <li><a href="explore.html#beaches">Beaches</a></li>
            <li><a href="explore.html#nature">Nature & Wildlife</a></li>
            <li><a href="explore.html#food">Food & Drink</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Plan Your Trip</h4>
          <ul class="footer-links">
            <li><a href="plan.html">Route Map</a></li>
            <li><a href="book.html">Book Your Trip</a></li>
            <li><a href="plan.html#accommodation">Accommodation</a></li>
            <li><a href="plan.html#transport">Getting Around</a></li>
            <li><a href="plan.html#guides">Maps & Guides</a></li>
            <li><a href="plan.html#weather">Best Time to Visit</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Information</h4>
          <ul class="footer-links">
            <li><a href="events.html">Events</a></li>
            <li><a href="social.html">Social Media</a></li>
            <li><a href="about.html">About BMC</a></li>
            <li><a href="about.html#contact">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-contact">
            <li><span class="iconify" data-icon="lucide:map-pin"></span>No.11, Braiyan Drive, Batticaloa, 30000</li>
            <li><span class="iconify" data-icon="lucide:phone"></span><a href="tel:+94652222275" style="color:inherit">+94 65 222 2275</a></li>
            <li><span class="iconify" data-icon="lucide:mail"></span><a href="mailto:battimc@gmail.com" style="color:inherit">battimc@gmail.com</a></li>
            <li><span class="iconify" data-icon="lucide:clock"></span>Mon-Fri 8:30AM – 4:30PM</li>
          </ul>
        </div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:1.25rem;margin-bottom:1.25rem">
        <p style="text-align:center;font-size:.7rem;color:var(--text-30);max-width:50rem;margin:0 auto;line-height:1.6">Batticaloa Tourism acknowledges the traditional custodians of this land — the Tamil and Muslim communities who have shaped this region for centuries. We honor their enduring connection to the lagoon, the land, and the cultural heritage that makes Batticaloa extraordinary.</p>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Batticaloa Municipal Council. All Rights Reserved.</p>
        <div style="display:flex;gap:1rem">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ---------- Init Common ----------
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();

  // Loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    setTimeout(() => {
      const cb = document.getElementById('cookieBar');
      if (cb) cb.classList.add('show');
    }, 1500);
  }, 600);

  // Scroll effects
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    if (backTop) backTop.classList.toggle('show', window.scrollY > 500);
  });

  // Mobile menu
  document.addEventListener('click', (e) => {
    if (e.target.closest('#hamburgerBtn')) {
      document.getElementById('mobileMenu').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    if (e.target.closest('#mobileClose')) closeMobile();
    if (e.target.closest('.mobile-link')) closeMobile();
  });
  document.querySelectorAll('.mobile-acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = body.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
    });
  });
  function closeMobile() {
    const m = document.getElementById('mobileMenu');
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  }

  // Back to top
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Reveal on scroll
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    }
  });

  // Cookie bar
  const cookieBtn = document.querySelector('#cookieBar button');
  if (cookieBtn) cookieBtn.addEventListener('click', () => {
    document.getElementById('cookieBar').classList.remove('show');
  });

  // Subscribe forms
  document.querySelectorAll('.subscribe-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.subscribe-msg');
      if (msg) { msg.classList.remove('hidden'); msg.style.color = '#4ADE80'; msg.textContent = '✅ Thank you for subscribing!'; }
      form.reset();
      setTimeout(() => { if (msg) msg.classList.add('hidden'); }, 4000);
    });
  });
});