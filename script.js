// script.js
// i18n strings (en / ar)
const i18n = {
  en: {
    "nav.home":"Home","nav.speakers":"Speakers","nav.schedule":"Schedule","nav.tickets":"Tickets",
    "cta.register":"Register","cta.registerNow":"Register Now","cta.learnMore":"Learn More","cta.getTicket":"Get Ticket",
    "hero.title":"WebDev Revolution 2025 — Shape the Future of the Web",
    "hero.lead":"Join developers, designers and leaders for a two-day deep dive into modern web technologies, tools and workflows.",
    "hero.dateLabel":"Next Event","count.days":"Days","count.hours":"Hours","count.minutes":"Min",
    "spk1.name":"A. Hassan","spk1.title":"Frontend Architect","spk2.name":"L. Nassar","spk2.title":"AI Engineer","spk3.name":"S. Karim","spk3.title":"UX Lead",
    "aside.sub":"2 Days • Cairo","price.standard":"Standard","price.stdDesc":"Access to talks & workshops","price.vip":"VIP","price.vipDesc":"VIP seating + Afterparty",
    "speakers.title":"Speakers","speakers.lead":"Leading experts in 3D web, AI, UX and performance.",
    "schedule.title":"Schedule","schedule.lead":"Two days of talks, workshops and hands-on labs.","schedule.day1":"Day 1 — Talks","schedule.day2":"Day 2 — Workshops",
    "tickets.title":"Tickets","tickets.lead":"Choose your plan and secure your spot.",
    "about.title":"About","about.lead":"We bring together the web community to explore 3D, AI and modern frontend practices.","about.mission":"Mission","about.missionText":"Advance the web through immersive and accessible experiences.","about.vision":"Vision","about.visionText":"A web where creativity, performance and intelligence meet.",
    "contact.title":"Contact","contact.lead":"Questions? Sponsorship? Media inquiries? Reach out.",
    "form.name":"Name","form.email":"Email","form.message":"Message","form.send":"Send","form.reset":"Reset",
    "pricing.title":"Pricing","pricing.lead":"Choose a ticket that fits your needs.",
    "blog.title":"Blog","blog.lead":"Articles and deep dives about modern web technologies.","post1.title":"Speed up your site in 5 steps","post2.title":"Intro to Three.js",
    "faq.title":"FAQ","faq.lead":"Common questions about the event and logistics.","faq.q1":"How long to build a site?","faq.a1":"Typical projects range from 1–4 weeks depending on scope.",
    "privacy.title":"Privacy"
  },
  ar: {
    "nav.home":"الرئيسية","nav.speakers":"المتحدثون","nav.schedule":"الجدول","nav.tickets":"التذاكر",
    "cta.register":"سجل الآن","cta.registerNow":"سجل الآن","cta.learnMore":"المزيد","cta.getTicket":"احصل على تذكرة",
    "hero.title":"WebDev Revolution 2025 — شكل مستقبل الوب",
    "hero.lead":"انضم للمطورين والمصممين والقادة في مؤتمر لمدة يومين للتعمّق في تقنيات وممارسات الويب الحديثة.",
    "hero.dateLabel":"الحدث القادم","count.days":"أيام","count.hours":"ساعات","count.minutes":"دقائق",
    "spk1.name":"أ. حسن","spk1.title":"مهندس واجهات","spk2.name":"ل. ناصر","spk2.title":"مهندس ذكاء صناعي","spk3.name":"س. كريم","spk3.title":"مسؤول تجربة المستخدم",
    "aside.sub":"يومان • القاهرة","price.standard":"عادي","price.stdDesc":"الدخول للمحاضرات وورش العمل","price.vip":"VIP","price.vipDesc":"مقاعد VIP + بعد الحفل",
    "speakers.title":"المتحدثون","speakers.lead":"خبراء في 3D والذكاء الاصطناعي وتجربة المستخدم.",
    "schedule.title":"الجدول","schedule.lead":"يومان من المحاضرات وورش العمل والتطبيق العملي.","schedule.day1":"اليوم الأول — محاضرات","schedule.day2":"اليوم الثاني — ورش عمل",
    "tickets.title":"التذاكر","tickets.lead":"اختر الباقة المناسبة واحجز مكانك.",
    "about.title":"عن المؤتمر","about.lead":"نجمع مجتمع الويب لاستكشاف 3D والذكاء والفرونت إند الحديث.","about.mission":"المهمة","about.missionText":"تطوير الويب بتجارب غامرة ومتاحة.","about.vision":"الرؤية","about.visionText":"ويب يلتقي فيه الإبداع والأداء والذكاء.",
    "contact.title":"تواصل","contact.lead":"أسئلة؟ رعايات؟ تواصل معنا.",
    "form.name":"الاسم","form.email":"البريد","form.message":"الرسالة","form.send":"أرسل","form.reset":"مسح",
    "pricing.title":"الأسعار","pricing.lead":"اختر التذكرة المناسبة.",
    "blog.title":"المدونة","blog.lead":"مقالات حول تقنيات الويب الحديثة.","post1.title":"سرّع موقعك في 5 خطوات","post2.title":"مقدمة إلى Three.js",
    "faq.title":"الأسئلة","faq.lead":"أسئلة متكررة عن الحدث.","faq.q1":"كم يستغرق بناء الموقع؟","faq.a1":"عادة من أسبوع إلى 4 أسابيع حسب النطاق.",
    "privacy.title":"الخصوصية"
  }
};

// current language
let lang = 'en';

// apply translations on elements with data-i18n
function applyLang(to){
  lang = to;
  document.documentElement.lang = (to === 'ar') ? 'ar' : 'en';
  document.documentElement.dir = (to === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(node=>{
    const key = node.getAttribute('data-i18n');
    if(i18n[to] && i18n[to][key]) node.innerText = i18n[to][key];
  });
  // alignments tweak
  document.querySelectorAll('.lead, h1, .card, .muted').forEach(n=>{
    n.style.textAlign = (to === 'ar') ? 'right' : 'left';
  });
}

// toggle language button (single global id)
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'toggle-lang'){
    applyLang(lang === 'en' ? 'ar' : 'en');
  }
});

// set initial language (try browser)
const initial = (navigator.language && navigator.language.startsWith('ar')) ? 'ar' : 'en';
applyLang(initial);

// footer year
document.addEventListener('DOMContentLoaded', ()=> {
  const yr = document.getElementById('yr');
  if(yr) yr.innerText = new Date().getFullYear();
});

// Countdown (only used on index page but harmless elsewhere)
const eventDate = new Date('2025-08-20T09:00:00');
function updateCountdown(){
  const now = new Date();
  const diff = Math.max(0, eventDate - now);
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
  const d = document.getElementById('cd-days');
  const h = document.getElementById('cd-hours');
  const m = document.getElementById('cd-mins');
  if(d) d.innerText = String(days).padStart(2,'0');
  if(h) h.innerText = String(hours).padStart(2,'0');
  if(m) m.innerText = String(mins).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000*60);

// contact form (simple demo)
document.addEventListener('submit', async (e)=>{
  if(e.target && e.target.id === 'contact-form'){
    e.preventDefault();
    const form = e.target;
    const sendBtn = document.getElementById('send-btn');
    const status = document.getElementById('form-status');
    if(sendBtn){ sendBtn.disabled = true; sendBtn.innerText = (lang === 'ar') ? 'جاري الإرسال...' : 'Sending...'; }
    const data = new FormData(form);
    const payload = {};
    data.forEach((v,k)=> payload[k]=v);
    try{
      console.log('contact demo payload', payload);
      if(status) status.innerText = (lang === 'ar') ? 'تم إرسال رسالتك (تجريبي).' : 'Message sent (demo).';
      form.reset();
    }catch(err){
      console.error(err);
      if(status) status.innerText = (lang === 'ar') ? 'حصل خطأ أثناء الإرسال' : 'Error sending message.';
    }finally{
      if(sendBtn){ sendBtn.disabled = false; sendBtn.innerText = (lang === 'ar') ? 'أرسل' : 'Send'; }
    }
  }
});

// ------------- Three.js background (particles + knot) -------------
(function(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();

  // gradient background as texture
  const canvasBg = document.createElement('canvas');
  canvasBg.width = 1; canvasBg.height = 256;
  const ctx = canvasBg.getContext('2d');
  const grad = ctx.createLinearGradient(0,0,0,256);
  grad.addColorStop(0, '#ff5100ff');
  grad.addColorStop(1, '#a23709f8');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,1,256);
  const texture = new THREE.Texture(canvasBg);
  texture.needsUpdate = true;
  scene.background = texture;

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias:true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // particles
  const particlesCount = 1200;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  const top = new THREE.Color('#ff7700ff');
  const bottom = new THREE.Color('#df5a0eff');

  for(let i=0;i<particlesCount;i++){
    const x = (Math.random() - 0.5) * 12;
    const y = (Math.random() - 0.5) * 8;
    const z = (Math.random() - 0.5) * 12;
    positions[i*3] = x; positions[i*3+1] = y; positions[i*3+2] = z;
    const t = (y + 4) / 8;
    const col = bottom.clone().lerp(top, THREE.MathUtils.clamp(t, 0, 1));
    colors[i*3] = col.r; colors[i*3+1] = col.g; colors[i*3+2] = col.b;
  }

  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pg.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pmat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
  const particles = new THREE.Points(pg, pmat);
  scene.add(particles);

  // torus knot
  const tkGeo = new THREE.TorusKnotGeometry(1.1, 0.28, 120, 24);
  const tkMaterial = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `
      varying vec3 vPos;
      void main(){
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vPos;
      void main(){
        vec3 topColor = vec3(1.0, 0.27, 0.0);
        vec3 bottomColor = vec3(0.8, 0.14, 0.0);
        float t = (vPos.y + 1.2) / 2.4;
        vec3 c = mix(bottomColor, topColor, clamp(t,0.0,1.0));
        gl_FragColor = vec4(c, 0.8);
      }
    `,
    wireframe: true,
    transparent: true,
    depthWrite: false
  });
  const torusKnot = new THREE.Mesh(tkGeo, tkMaterial);
  torusKnot.scale.setScalar(1.1);
  scene.add(torusKnot);

  // mouse interaction
  let mouseX = 0, mouseY = 0;
  window.addEventListener('pointermove', (e)=>{
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate(){
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0004;
    torusKnot.rotation.x += 0.007;
    torusKnot.rotation.y += 0.01;
    camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.6 - camera.position.y) * 0.05;
    camera.lookAt(0,0,0);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
