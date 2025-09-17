document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('is-open');
    });

    navLinks.addEventListener('click', event => {
      if (event.target instanceof HTMLAnchorElement) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      }
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });
});
