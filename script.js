// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile menu toggle ----
const menuToggle = document.getElementById('menuToggle');
const pillnav = document.getElementById('pillnav');

menuToggle.addEventListener('click', () => {
  const isOpen = pillnav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// close mobile menu after tapping a link
document.querySelectorAll('.pill').forEach(link => {
  link.addEventListener('click', () => {
    pillnav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- active nav link on scroll ----
const sections = document.querySelectorAll('main section[id]');
const pills = document.querySelectorAll('.pill');

const setActive = (id) => {
  pills.forEach(p => {
    p.classList.toggle('active', p.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
