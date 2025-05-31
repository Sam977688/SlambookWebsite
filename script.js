const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

function activateLinkOnScroll() {
  let current = '';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
  });
}

window.addEventListener('scroll', activateLinkOnScroll);
window.addEventListener('load', activateLinkOnScroll);
