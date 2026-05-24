const tema = document.getElementById('tema');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '' : '';
  localStorage.setItem('portfolio-theme', theme);
}
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);
tema.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 30px rgba(0,0,0,0.10)'
    : 'none';
});
const stripTechs = [
  { icon: 'devicon-flutter-plain colored', label: 'Flutter' },
  { icon: 'devicon-dart-plain colored', label: 'Dart' },
  { icon: 'devicon-python-plain colored', label: 'Python' },
  { icon: 'devicon-html5-plain colored', label: 'HTML5' },
  { icon: 'devicon-css3-plain colored', label: 'CSS3' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
  { icon: 'devicon-mysql-plain colored', label: 'MySQL' },
  { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
  { icon: 'devicon-git-plain colored', label: 'Git' },
  { icon: 'devicon-github-original', label: 'GitHub' },
  { icon: 'devicon-linux-plain', label: 'Linux' },
  { icon: 'devicon-vscode-plain colored', label: 'VS Code' },
];

function buildStrip() {
  const track = document.getElementById('techTrack');
  if (!track) return;
  const allTechs = [...stripTechs, ...stripTechs];
  allTechs.forEach((tech, i) => {
    const item = document.createElement('div');
    item.className = 'estrellitabarra';
    const iconEl = document.createElement('i');
    iconEl.className = tech.icon;
    const labelEl = document.createElement('span');
    labelEl.textContent = tech.label;
    item.appendChild(iconEl);
    item.appendChild(labelEl);
    track.appendChild(item);
    if (i < allTechs.length - 1) {
      const sep = document.createElement('span');
      sep.className = 'barritaquesemuevesep';
      sep.textContent = '✦';
      track.appendChild(sep);
    }
  });
}
buildStrip();

const SKILLS = [
  { icon: 'devicon-html5-plain colored', name: 'HTML5', cat: 'frontend' },
  { icon: 'devicon-css3-plain colored', name: 'CSS3', cat: 'frontend' },
  { icon: 'devicon-javascript-plain colored', name: 'JavaScript', cat: 'frontend' },
  { icon: 'devicon-flutter-plain colored', name: 'Flutter', cat: 'mobile'   },
  { icon: 'devicon-dart-plain colored', name: 'Dart', cat: 'mobile'   },
  { icon: 'devicon-python-plain colored', name: 'Python', cat: 'backend'  },
  { icon: 'devicon-mysql-plain colored', name: 'MySQL', cat: 'backend'  },
  { icon: 'devicon-mongodb-plain colored', name: 'MongoDB', cat: 'backend'  },
  { icon: 'devicon-git-plain colored', name: 'Git', cat: 'systems'  },
  { icon: 'devicon-github-original', name: 'GitHub', cat: 'systems'  },
  { icon: 'devicon-linux-plain', name: 'Linux', cat: 'systems'  },
  { icon: 'devicon-vscode-plain colored', name: 'VS Code', cat: 'systems'  },
];

function renderSkills() {
  const grid = document.getElementById('habilidadesss');
  if (!grid) return;
  SKILLS.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'scca';
    card.dataset.cat = skill.cat;
    card.innerHTML = `
      <i class="${skill.icon}"></i>
      <div class="scca__name">${skill.name}</div>
      <div class="scca__cat">${skill.cat}</div>
    `;
    grid.appendChild(card);
  });
}
renderSkills();

function initSkillsFilter() {
  const filterContainer = document.getElementById('skillsFilter');
  if (!filterContainer) return;
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filtro');
    if (!btn) return;
    filterContainer.querySelectorAll('.filtro').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.scca').forEach(card => {
      const matches = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
}
initSkillsFilter();


function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start    = performance.now();
  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const numObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      numObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.contador').forEach(el => numObserver.observe(el));

function initHeroCanvas() {
  const canvas = document.getElementById('fondodeestrellitas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  const COLORS = {
    r1: '#C63E4E',
    r2: '#E19184',
    r3: '#475B35',
    r4: '#c586c0',
    r5: '#dcdcaa',
    r6: '#9cdcfe',
    r7: '#d570cb',
    r8: '#4ec9b0',
  };

  const CODE_LINES = [
    { text: 'if (!model) return; htmlEl.setAttribute theme); themeIcon.textContent = theme === localStorage.setItem, theme); window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r1   },
    { text: 'const current = htmlEl.getAttribute ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r7  },
    { text: 'let codeLinesRenderPipe = initModelViewer buildStrip renderSkills applyTheme animateCounter requestAnimationFrame scrollY delta cameraOrbit 75deg 25m transform scale viewport renderNoise floatingSyntax  // rotación orbital al scroll', color: COLORS.r3   },
    { text: 'const mockupTransformDelta9191 = rotate minus8deg translateY scale 088 progress runtime viewportNoise floatingLayer renderDepth alpha entropy beta gamma delta modulo 918291  window.addEventListener("scroll",', color: COLORS.r6  },
    { text: '  filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active));  () => { display: grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: auto; gap: 1.25rem; margin: 0 auto; ', color: COLORS.r7  },
    { text: '  querySelectorAll contador numObserver observe transitionDelay reveal translateY opacity floatingLayer visualNoise runtime viewport kernel renderState  const pct = scrollY / total;', color: COLORS.r4    },
    { text: '    const rotY = pct * 300;  const current = htmlEl.getAttribute  const allTechs = [...stripTechs, ...stripTechs];', color: COLORS.r4    },
    { text: 'colorsRuntimeSyntax = keyword r3 function r6 r8 operator r4 visualNoise rgba opacity matrix renderSignal syntaxDepth entropy alpha delta theta lambda kernel;    model.setAttribute(', color: COLORS.r5  },
    { text: ' const navbarShadowObserver99991 = window addEventListener scroll navbar style boxShadow rgba 0 0 0 010 scrollVelocity 9182 opacityKernel renderDepth visualNoise matrixSignal floatingIndex modulo 9912 viewport dynamic runtime    "camera-orbit",', color: COLORS.r2    },
    { text: '  document querySelectorAll contador numObserver observe transitionDelay reveal translateY opacity floatingLayer visualNoise runtime viewport kernel renderState alpha entropy beta gamma delta    `${rotY}deg ${rotX}deg`', color: COLORS.r2    },
    { text: '  }, { passive: true }); ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r7  },
    { text: ' skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r7  },
    { text: '  display: grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: auto; gap: 1.25rem; margin: 0 auto; ', color: COLORS.r3   },
    { text: '  let t = 0; window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r1   },
    { text: ' filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active)); function breatheLoop() {', color: COLORS.r5  },
    { text: '    t += 0.010;   const allTechs = [...stripTechs, ...stripTechs]; ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r4    },
    { text: '    model.style.marginTop = ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r8  },
    { text: '      `${Math.sin(t) * 6}px`; skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r2    },
    { text: '    requestAnimationFrame( window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r5  },
    { text: '      const allTechs = [...stripTechs, ...stripTechs]; window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r6  },
    { text: ' let codeLinesRenderPipe = initModelViewer buildStrip renderSkills applyTheme animateCounter requestAnimationFrame scrollY delta cameraOrbit 75deg 25m transform scale viewport renderNoise floatingSyntax }',color: COLORS.r7  },
    { text: ' querySelectorAll contador numObserver observe transitionDelay reveal translateY opacity floatingLayer visualNoise runtime viewport kernel renderState breatheLoop();', color: COLORS.r5  },
    { text: 'colorsRuntimeSyntax = keyword r3 function r6 r8 operator r4 visualNoise rgba opacity matrix renderSignal syntaxDepth entropy alpha delta theta lambda kernel;}', color: COLORS.r7  },
    { text: 'let codeLinesRenderPipe = initModelViewer buildStrip renderSkills applyTheme animateCounter requestAnimationFrame scrollY delta cameraOrbit 75deg 25m transform scale viewport renderNoise floatingSyntax', color: COLORS.r7  },
    { text: 'const SKILLS = [ const current = htmlEl.getAttribute ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r1   },
    { text: '  { name: "Flutter", skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r2    },
    { text: 'const mockupTransformDelta9191 = rotate minus8deg translateY scale 088 progress runtime viewportNoise floatingLayer renderDepth alpha entropy beta gamma delta modulo 918291 const allTechs = [...stripTechs, ...stripTechs]; },', color: COLORS.r2    },
    { text: '  { name: "Python", const navbarShadowObserver99991 = window addEventListener scroll navbar style boxShadow rgba 0 0 0 010 scrollVelocity 9182 opacityKernel renderDepth visualNoise matrixSignal floatingIndex modulo 9912 viewport dynamic runtime', color: COLORS.r2    },
    { text: '{ font-size: 0.8rem; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.08em; },', color: COLORS.r2    },
    { text: ' const navbarShadowObserver99991 = window addEventListener scroll navbar style boxShadow rgba 0 0 0 010 scrollVelocity 9182 opacityKernel renderDepth visualNoise matrixSignal floatingIndex modulo 9912 viewport dynamic runtime { name: "MongoDB",', color: COLORS.r2    },
    { text: ' const mockupTransformDelta9191 = rotate minus8deg translateY scale 088 progress runtime viewportNoise floatingLayer renderDepth alpha entropy beta gamma delta modulo 918291   cat: "backend" },', color: COLORS.r2    },
    { text: 'filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active));]; window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r7  },
    { text: 'colorsRuntimeSyntax = keyword r3 function r6 r8 operator r4 visualNoise rgba opacity matrix renderSignal syntaxDepth entropy alpha delta theta lambda kernel;', color: COLORS.r7  },
    { text: 'function buildStrip() { skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r5  },
    { text: '  const mockupTransformDelta9191 = rotate minus8deg translateY scale 088 progress runtime viewportNoise floatingLayer renderDepth alpha entropy beta gamma delta modulo 918291 const track = document', color: COLORS.r1   },
    { text: '{ font-size: 0.8rem; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.08em; } .getElementById("techTrack");', color: COLORS.r6  },
    { text: '  if (!track) return; skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r1   },
    { text: '  stripTechs.forEach((tech, i) => { ameraOrbit rotY rotX plantModel scrollY totalScroll transform translateY scale modelViewerKernel viewport renderNoise floatingDepth alpha beta gamma entropy', color: COLORS.r5  },
    { text: '    const item = document querySelectorAll contador numObserver observe transitionDelay reveal translateY opacity floatingLayer visualNoise runtime viewport kernel renderState', color: COLORS.r1   },
    { text: '      .createElement("div"); const current = htmlEl.getAttribute window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r2    },
    { text: '    item.className = let codeLinesRenderPipe = initModelViewer buildStrip renderSkills applyTheme animateCounter requestAnimationFrame scrollY delta cameraOrbit 75deg 25m transform scale viewport renderNoise floatingSyntax', color: COLORS.r8  },
    { text: ' const navbarShadowObserver99991 = window addEventListener scroll navbar style boxShadow rgba 0 0 0 010 scrollVelocity 9182 opacityKernel renderDepth visualNoise matrixSignal floatingIndex modulo 9912 viewport dynamic runtime "estrellitabarra";', color: COLORS.r2    },
    { text: ' filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active)); });', color: COLORS.r7  },
    { text: 'colorsRuntimeSyntax = keyword r3 function r6 r8 operator r4 visualNoise rgba opacity matrix renderSignal syntaxDepth entropy alpha delta theta lambda kernel;}', color: COLORS.r7  },
    { text: ' skillCardDatasetRuntime = createElement div dataset cat innerHTML skill name category appendChild renderSignal viewport runtime alpha beta gamma entropy', color: COLORS.r7  },
    { text: 'applyTheme(savedTheme); querySelectorAll contador numObserver observe transitionDelay reveal translateY opacity floatingLayer visualNoise runtime viewport kernel renderState', color: COLORS.r5  },
    { text: 'const navbarShadowObserver99991 = window addEventListener scroll navbar style boxShadow rgba 0 0 0 010 scrollVelocity 9182 opacityKernel renderDepth visualNoise matrixSignal floatingIndex modulo 9912 viewport dynamic runtim', color: COLORS.r3   },
    { text: 'const mockupTransformDelta9191 = rotate minus8deg translateY scale 088 progress runtime viewportNoise floatingLayer renderDepth alpha entropy beta gamma delta modulo 918291tema.addEventListener("click",', color: COLORS.r6  },
    { text: '  () => { font-size: 0.8rem; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.08em; } window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r7  },
    { text: '  const current = htmlEl colorsRuntimeSyntax = keyword r3 function r6 r8 operator r4 visualNoise rgba opacity matrix renderSignal syntaxDepth entropy alpha delta theta lambda kernel;', color: COLORS.r1   },
    { text: 'filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active));    .getAttribute("data-theme");', color: COLORS.r8  },
    { text: 'let codeLinesRenderPipe = initModelViewer buildStrip renderSkills applyTheme animateCounter requestAnimationFrame scrollY delta cameraOrbit 75deg 25m transform scale viewport renderNoise floatingSyntax  applyTheme(current === "dark"', color: COLORS.r5   },
    { text: '    ? "light" : "dark"); filterContainer.querySelectorAll(.filtro).forEach(b => b.classList.remove(active)); window scrollY navbar runtime boxShadow rgba opacity passive true observer viewport matrix alpha beta gamma entropy floatingLayer renderNoise', color: COLORS.r2    },
    { text: '});', color: COLORS.operator  },
  ];

  const FONT_SIZE = 13;
  const LINE_H    = 22;
  const FONT      = `${FONT_SIZE}px 'Space Mono', monospace`;

  function buildRows() {
    const rows = [];
    const count = Math.ceil(canvas.height / LINE_H) + 6;

    for (let i = 0; i < count; i++) {
      const lineIdx = i % CODE_LINES.length;
      const goRight = i % 2 === 0;
      const speed   = 0.3 + (i % 5) * 0.15;

      // x inicio aleatorio de las letras que se mueven
      const startX = Math.random() * canvas.width;

      rows.push({
        text:    CODE_LINES[lineIdx].text,
        color:   CODE_LINES[lineIdx].color,
        y:       i * LINE_H,
        x:       startX,
        speed:   goRight ? speed : -speed,
        goRight,
      });
    }
    return rows;
  }

  let rows = [];

  window.addEventListener('resize', () => {
    resize();
    rows = buildRows();
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = FONT;

    // rows.forEach(row => {
    //   row.x += row.speed;

    //   if (row.goRight && row.x > canvas.width + 300) {
    //     row.x = -300;
    //   } else if (!row.goRight && row.x < -300) {
    //     row.x = canvas.width + 300;
    //   }

    //   if (!row.text) return;

    //   ctx.globalAlpha = 0.55;
    //   ctx.fillStyle   = row.color;
    //   ctx.fillText(row.text, row.x, row.y);
    // });
    rows.forEach(row => {
      if (!row.text) return;

      row.x += row.speed;

      const textWidth = ctx.measureText(row.text).width;
      const gap = textWidth + 80; // 80px de espacio entre repeticiones
      if (row.goRight && row.x > gap) {// que no dejen de salir las letras
        row.x -= gap;
      } else if (!row.goRight && row.x < -gap) {
        row.x += gap;
      }
      ctx.globalAlpha = 0.55;
      ctx.fillStyle   = row.color;
      let drawX = row.x % gap;
      if (drawX > 0) drawX -= gap;
      while (drawX < canvas.width + gap) {
        ctx.fillText(row.text, drawX, row.y);
        drawX += gap;
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  // ── FIX PRINCIPAL: esperar a que el navegador pinte el canvas
  //    para que offsetWidth/offsetHeight ya tengan valores reales
  requestAnimationFrame(() => {
    resize();
    rows = buildRows();
    draw();
  });
}

initHeroCanvas();

// function initMainThree() {
//   const canvas = document.getElementById('mainfondodeestrellitas');
//   if (!canvas || !window.THREE) return;

//   const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//   const W = canvas.offsetWidth  || 600;
//   const H = canvas.offsetHeight || 500;
//   renderer.setSize(W, H);

//   const scene  = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 200);
//   camera.position.set(0, 0, 14);

//   const ambient = new THREE.AmbientLight(0xffffff, 0.8);
//   scene.add(ambient);
//   const pointLight = new THREE.PointLight(0xE19184, 2.5, 40);
//   pointLight.position.set(5, 5, 5);
//   scene.add(pointLight);
//   const pointLight2 = new THREE.PointLight(0x475B35, 1.5, 40);
//   pointLight2.position.set(-6, -4, 3);
//   scene.add(pointLight2);

//   function makePetal(size, color) {
//     const shape = new THREE.Shape();
//     const arms  = 4;
//     for (let i = 0; i < arms * 2; i++) {
//       const angle = (i / (arms * 2)) * Math.PI * 2 - Math.PI / 4;
//       const r = i % 2 === 0 ? size : size * 0.4;
//       const x = Math.cos(angle) * r;
//       const y = Math.sin(angle) * r;
//       i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
//     }
//     shape.closePath();
//     const geo = new THREE.ShapeGeometry(shape, 6);
//     const mat = new THREE.MeshPhongMaterial({
//       color,
//       side: THREE.DoubleSide,
//       shininess: 80,
//       transparent: true,
//       opacity: 0.92,
//     });
//     return new THREE.Mesh(geo, mat);
//   }

//   function makeFlowerCluster(cx, cy, cz, baseColor, count = 18, spread = 2.2) {
//     const group = new THREE.Group();
//     const colors = [baseColor, baseColor + 0x111111, baseColor - 0x111111];
//     for (let i = 0; i < count; i++) {
//       const petal = makePetal(0.18 + Math.random() * 0.14, colors[i % colors.length]);
//       petal.position.set(
//         cx + (Math.random() - 0.5) * spread,
//         cy + (Math.random() - 0.5) * spread,
//         cz + (Math.random() - 0.5) * spread * 0.5
//       );
//       petal.rotation.set(
//         Math.random() * Math.PI,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI
//       );
//       petal.userData.phase    = Math.random() * Math.PI * 2;
//       petal.userData.rotSpeed = (Math.random() - 0.5) * 0.008;
//       group.add(petal);
//     }
//     return group;
//   }

//   const clusters = [
//     makeFlowerCluster(-3.5,  2,    0,   0xC63E4E, 22, 2.5),
//     makeFlowerCluster( 3.5, -1.5,  1,   0x475B35, 18, 2.2),
//     makeFlowerCluster( 0.5,  3,   -1,   0xE19184, 20, 2.4),
//     makeFlowerCluster(-1,   -3,    0.5, 0x620607, 16, 2.0),
//   ];
//   clusters.forEach(c => scene.add(c));

//   function makeStar(size, color) {
//     const shape = new THREE.Shape();
//     const arms  = 4;
//     for (let i = 0; i < arms * 2; i++) {
//       const angle = (i / (arms * 2)) * Math.PI * 2 - Math.PI / 2;
//       const r = i % 2 === 0 ? size : size * 0.3;
//       i === 0 ? shape.moveTo(Math.cos(angle)*r, Math.sin(angle)*r)
//               : shape.lineTo(Math.cos(angle)*r, Math.sin(angle)*r);
//     }
//     shape.closePath();
//     const geo = new THREE.ShapeGeometry(shape, 4);
//     const mat = new THREE.MeshPhongMaterial({ color, side: THREE.DoubleSide, shininess: 120 });
//     return new THREE.Mesh(geo, mat);
//   }

//   const starPositions = [
//     [ 5.5,  3.5, -2, 0xF5F9E5, 0.55],
//     [-5.0,  1.0, -1, 0xC63E4E, 0.38],
//     [ 2.0, -4.0,  1, 0xE19184, 0.45],
//     [-2.5,  4.5,  0, 0x475B35, 0.32],
//     [ 6.0, -2.5, -1, 0xF5F9E5, 0.28],
//   ];
//   const starMeshes = starPositions.map(([x, y, z, c, s]) => {
//     const m = makeStar(s, c);
//     m.position.set(x, y, z);
//     m.userData.rotSpeed = (Math.random() - 0.5) * 0.015;
//     m.userData.phase    = Math.random() * Math.PI * 2;
//     scene.add(m);
//     return m;
//   });

//   const trailMat = new THREE.LineBasicMaterial({ color: 0xF5F9E5, transparent: true, opacity: 0.6 });
//   const trails   = [];
//   for (let i = 0; i < 12; i++) {
//     const pts = [
//       new THREE.Vector3((Math.random()-0.5)*18, (Math.random()-0.5)*10, (Math.random()-0.5)*4),
//       new THREE.Vector3(0, 0, 0)
//     ];
//     const dir = new THREE.Vector3((Math.random()-0.5), -Math.random()*0.5, 0).normalize().multiplyScalar(0.8 + Math.random()*1.5);
//     pts[1].copy(pts[0]).add(dir);
//     const geo  = new THREE.BufferGeometry().setFromPoints(pts);
//     const line = new THREE.Line(geo, trailMat.clone());
//     line.userData.speed = 0.04 + Math.random() * 0.06;
//     line.userData.life  = Math.random();
//     trails.push(line);
//     scene.add(line);
//   }

//   let isDragging = false;
//   let prevMouse  = { x: 0, y: 0 };
//   let rotX = 0, rotY = 0;

//   canvas.addEventListener('mousedown',  e => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; });
//   window.addEventListener('mouseup',    () => { isDragging = false; });
//   window.addEventListener('mousemove',  e => {
//     if (!isDragging) return;
//     const dx = e.clientX - prevMouse.x;
//     const dy = e.clientY - prevMouse.y;
//     rotY += dx * 0.008;
//     rotX += dy * 0.008;
//     prevMouse = { x: e.clientX, y: e.clientY };
//   });

//   canvas.addEventListener('touchstart', e => {
//     isDragging = true;
//     prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
//   }, { passive: true });
//   window.addEventListener('touchend',   () => { isDragging = false; });
//   window.addEventListener('touchmove',  e => {
//     if (!isDragging) return;
//     const dx = e.touches[0].clientX - prevMouse.x;
//     const dy = e.touches[0].clientY - prevMouse.y;
//     rotY += dx * 0.008;
//     rotX += dy * 0.008;
//     prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
//   }, { passive: true });

//   function resizeMain() {
//     const w = canvas.offsetWidth, h = canvas.offsetHeight || 500;
//     renderer.setSize(w, h);
//     camera.aspect = w / h;
//     camera.updateProjectionMatrix();
//   }
//   window.addEventListener('resize', resizeMain);

//   function animateMain() {
//     requestAnimationFrame(animateMain);
//     const t = performance.now() * 0.001;

//     if (!isDragging) {
//       rotY += 0.003;
//     }

//     clusters.forEach((cluster, ci) => {
//       cluster.rotation.y = rotY + ci * 0.3;
//       cluster.rotation.x = rotX * 0.5;
//       cluster.children.forEach(petal => {
//         petal.rotation.z += petal.userData.rotSpeed;
//         petal.position.y += Math.sin(t * 0.5 + petal.userData.phase) * 0.001;
//       });
//     });

//     starMeshes.forEach(m => {
//       m.rotation.z += m.userData.rotSpeed;
//       m.position.y += Math.sin(t * 0.6 + m.userData.phase) * 0.003;
//     });

//     trails.forEach(trail => {
//       trail.userData.life += trail.userData.speed * 0.016;
//       if (trail.userData.life > 1) {
//         trail.userData.life = 0;
//         const x = (Math.random()-0.5)*18;
//         const y = (Math.random()-0.5)*10;
//         const z = (Math.random()-0.5)*4;
//         const positions = trail.geometry.attributes.position;
//         positions.setXYZ(0, x, y, z);
//         const dir = new THREE.Vector3((Math.random()-0.5), -Math.random()*0.5, 0).normalize().multiplyScalar(1.2);
//         positions.setXYZ(1, x + dir.x, y + dir.y, z + dir.z);
//         positions.needsUpdate = true;
//       }
//       trail.material.opacity = Math.sin(trail.userData.life * Math.PI) * 0.6;
//     });

//     pointLight.intensity = 2 + Math.sin(t * 0.8) * 0.5;

//     renderer.render(scene, camera);
//   }
//   animateMain();
// }
// initMainThree();


const sendBtn         = document.getElementById('sendBtn');
const contactFeedback = document.getElementById('contactFeedback');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name  = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const msg   = document.getElementById('contactMsg')?.value.trim();

    if (!name || !email || !msg) {
      contactFeedback.textContent = 'Please fill in all fields.';
      contactFeedback.style.color = 'var(--rosafuerte)';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      contactFeedback.textContent = 'Please enter a valid email address.';
      contactFeedback.style.color = 'var(--rosafuerte)';
      return;
    }

    sendBtn.textContent = 'Sending…';
    sendBtn.disabled    = true;
    setTimeout(() => {
      contactFeedback.textContent = `Thanks, ${name}! I'll be in touch soon... maybe...`;
      contactFeedback.style.color = 'var(--verdeopaco)';
      sendBtn.textContent = 'Send Message';
      sendBtn.disabled    = false;

      document.getElementById('contactName').value  = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMsg').value   = '';
    }, 1200);
  });
}


const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(revealStyle);

function prepareReveal() {
  const targets = [
    '.cuadritos',
    '.tarj',
    '.scca',
    '.yanosecomoponerles',
    '.continfo',
    '.recuadrosdetexto',
  ];
  targets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 6) * 80}ms`;
    });
  });
}
prepareReveal();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


(function initMockupsParallax() {
  const stage  = document.querySelector('.espacioparamockups');
  const phoneL = document.querySelector('.tizq');
  const phoneR = document.querySelector('.tder');
  const phoneC = document.querySelector('.tmed');

  if (!stage || !phoneL || !phoneR) return;

  function onScroll() {
    const rect = stage.getBoundingClientRect();
    const winH = window.innerHeight;

    if (rect.bottom < 0 || rect.top > winH) return;

    const progress = 1 - rect.bottom / (winH + rect.height);
    const offset   = progress * 40;

    phoneL.style.transform = `rotate(-8deg) translateY(${40 - offset}px) scale(0.88)`;
    phoneR.style.transform = `rotate(8deg)  translateY(${40 - offset}px) scale(0.88)`;
    phoneC.style.transform = `translateY(${-offset * 0.4}px)`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

function initModelViewer() {
  const model = document.getElementById('plantModel');
  if (!model) return;

  // rotación al hacer scroll
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = window.scrollY / totalScroll;
    const rotY = pct * 280;
    const rotX = 75 - pct * 20;
    model.cameraOrbit = `${rotY}deg ${rotX}deg 2.5m`;
  }, { passive: true });

  // que se mueva con el scroll
  window.addEventListener('scroll', () => {
    const section = document.getElementById('threeSection');
    if (!section) return;

    const rect    = section.getBoundingClientRect();
    const winH    = window.innerHeight;
    if (rect.bottom < 0 || rect.top > winH) return;
    const progress = 1 - rect.bottom / (winH + rect.height);
    const floatY   = Math.sin(progress * Math.PI) * -18; // sube al centro
    const scale    = 0.92 + progress * 0.08;// crece poquito
    model.style.transform = `translateY(${floatY}px) scale(${scale})`;
  }, { passive: true });

  // animación flotante continua
  let t = 0;
  function floatLoop() {
    t += 0.012;
    const breathe = Math.sin(t) * 5;
    model.style.marginTop = `${breathe}px`;
    requestAnimationFrame(floatLoop);
  }
  floatLoop();
}

initModelViewer();