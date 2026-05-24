
function initModelViewer() {
  const model = document.getElementById('plantModel');
  if (!model) return;
  /* para que no se mire blanco, NO QUITAR */
  model.addEventListener('load', () => {
    model.style.backgroundColor = 'transparent';
  });

  /* rotacion con scroll*/
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) return;
    const pct  = Math.min(window.scrollY / totalScroll, 1);
    const rotY = pct * 300;
    const rotX = 75 - pct * 22;
    model.setAttribute('camera-orbit', `${rotY}deg ${rotX}deg 2.5m`);
  }, { passive: true });

  window.addEventListener('scroll', () => {
    const section = document.getElementById('threeSection');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const winH = window.innerHeight;
    if (rect.bottom < 0 || rect.top > winH) return;
    const progress = 1 - rect.bottom / (winH + rect.height);
    const floatY   = Math.sin(progress * Math.PI) * -20;
    const scale    = 0.90 + progress * 0.10;
    model.style.transform = `translateY(${floatY}px) scale(${scale})`;
  }, { passive: true });

  /* que se mueva poquito y suavecito*/
  let t = 0;
  function suavee() {
    t += 0.010;
    model.style.marginTop = `${Math.sin(t) * 6}px`;
    requestAnimationFrame(breatheLoop);
  }
  suavee();
}

initModelViewer();
