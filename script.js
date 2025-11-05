// Three.js background animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 1000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  );
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x00bbff, size: 2 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.x += 0.001;
  points.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Countdown timer
function updateCountdown() {
  const eventDate = new Date('2025-08-20T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('cd-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('cd-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('cd-mins').textContent = minutes.toString().padStart(2, '0');
  }
}
updateCountdown();
setInterval(updateCountdown, 60000);

// Language toggle
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.speakers': 'Speakers',
    'nav.schedule': 'Schedule',
    'nav.tickets': 'Tickets',
    'cta.register': 'Register',
    'hero.title': 'WebDev Revolution 2025 — Shape the Future of the Web',
    'hero.lead': 'Join developers, designers and leaders for a two-day deep dive into modern web technologies, tools and workflows.',
    'hero.dateLabel': 'Next Event',
    'count.days': 'Days',
    'count.hours': 'Hours',
    'count.minutes': 'Min',
    'cta.registerNow': 'Register Now',
    'cta.learnMore': 'Learn More',
    'spk1.name': 'A. Hassan',
    'spk1.title': 'Frontend Architect',
    'spk2.name': 'L. Nassar',
    'spk2.title': 'AI Engineer',
    'spk3.name': 'S. Karim',
    'spk3.title': 'UX Lead',
    'aside.sub': '2 Days • Cairo',
    'price.standard': 'Standard',
    'price.stdDesc': 'Access to talks & workshops',
    'price.vip': 'VIP',
    'price.vipDesc': 'VIP seating + Afterparty',
    'cta.getTicket': 'Get Ticket'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.speakers': 'المتحدثون',
    'nav.schedule': 'الجدول',
    'nav.tickets': 'التذاكر',
    'cta.register': 'التسجيل',
    'hero.title': 'ثورة تطوير الويب 2025 — شكل مستقبل الويب',
    'hero.lead': 'انضم إلى المطورين والمصممين والقادة في غوص عميق لمدة يومين في تقنيات الويب الحديثة والأدوات والعمليات.',
    'hero.dateLabel': 'الحدث التالي',
    'count.days': 'أيام',
    'count.hours': 'ساعات',
    'count.minutes': 'دقائق',
    'cta.registerNow': 'سجل الآن',
    'cta.learnMore': 'اعرف المزيد',
    'spk1.name': 'أ. حسن',
    'spk1.title': 'مهندس الواجهة الأمامية',
    'spk2.name': 'ل. نصار',
    'spk2.title': 'مهندس الذكاء الاصطناعي',
    'spk3.name': 'س. كريم',
    'spk3.title': 'قائد تجربة المستخدم',
    'aside.sub': 'يومان • القاهرة',
    'price.standard': 'قياسي',
    'price.stdDesc': 'الوصول إلى المحاضرات والورش',
    'price.vip': 'VIP',
    'price.vipDesc': 'مقاعد VIP + حفلة ما بعد',
    'cta.getTicket': 'احصل على التذكرة'
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('toggle-lang').textContent = lang === 'en' ? 'EN / ع' : 'ع / EN';

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById('toggle-lang').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// Button functionalities
document.getElementById('register-cta').addEventListener('click', () => {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-register').addEventListener('click', () => {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('learn-more').addEventListener('click', () => {
  document.getElementById('speakers').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('buy-ticket').addEventListener('click', () => {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

// Set current year
document.getElementById('yr').textContent = new Date().getFullYear();