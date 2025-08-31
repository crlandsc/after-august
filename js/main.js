// After August - Site JS

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScrolling();
  setupFadeInObserver();
  setupMobileNavCloseOnLink();
  setupContactMailto();
});

function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const rect = target.getBoundingClientRect();
          const offset = rect.top + window.pageYOffset - 64; // exact header height offset
          window.scrollTo({ top: offset, behavior: 'smooth' });
          history.pushState(null, '', id);
        }
      }
    });
  });
}

function setupFadeInObserver() {
  const els = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  els.forEach(el => obs.observe(el));
}

function setupMobileNavCloseOnLink() {
  const details = document.querySelector('details.mobile-nav');
  if (!details) return;
  details.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      details.removeAttribute('open');
      a.blur();
    });
  });
}

function setupContactMailto() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(form.elements.name.value.trim());
    const email = encodeURIComponent(form.elements.email.value.trim());
    const subjectText = form.elements.subject.value.trim() || `Message from ${form.elements.name.value.trim()}`;
    const subject = encodeURIComponent(subjectText);
    const message = encodeURIComponent(form.elements.message.value.trim());
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:afteraugustmusic@gmail.com?subject=${subject}&body=${body}`;
  });
}


