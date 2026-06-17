// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navAs.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ===== TYPING EFFECT =====
const roles = ['Software Developer', 'Backend Developer', 'Java Full Stack Developer', 'Frontend Developer', 'Web Designer'];
let ri = 0;
let ci = 0;
let deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const word = roles[ri];
  typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

  if (!deleting && ci > word.length) {
    deleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (deleting && ci < 0) {
    deleting = false;
    ri = (ri + 1) % roles.length;
    ci = 0;
  }
  setTimeout(type, deleting ? 50 : 90);
}
type();

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#28a745';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    this.reset();
  }, 3000);
});


// ===== DARK / LIGHT MODE TOGGLE =====
const themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navLinks.classList.remove("open");
  }
});
