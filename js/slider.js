/* ============================================
   BATTICALOA TOURISM — VIDEO SLIDER
   ============================================ */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  const dotsBox = document.getElementById('sliderDots');
  let current = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
    dot.onclick = () => go(i);
    if (dotsBox) dotsBox.appendChild(dot);
  });

  function go(i) {
    slides[current].classList.remove('active');
    if (dotsBox) dotsBox.children[current]?.classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dotsBox) dotsBox.children[current]?.classList.add('active');
    // Re-trigger animations
    const ct = slides[current].querySelector('.slide-content');
    if (ct) { ct.style.animation = 'none'; ct.offsetHeight; ct.style.animation = ''; }
    reset();
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }
  function reset() { clearInterval(timer); timer = setInterval(next, 7000); }
  reset();

  window._sliderGo = go;
  window._sliderNext = next;
  window._sliderPrev = prev;
}