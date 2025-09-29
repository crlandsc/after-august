// After August - Site JS

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScrolling();
  setupFadeInObserver();
  setupMobileNavCloseOnLink();
  setupContactMailto();
  setupLazyVideoLoading();
  setupTwilightParticles();
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

function setupLazyVideoLoading() {
  let currentlyLoadedVideo = null;

  const videoWrappers = document.querySelectorAll('.video-wrapper');
  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('.video');
    const videoMeta = wrapper.querySelector('.video-meta');
    
    // Click handler function
    const handleClick = () => {
      // If this video is already loaded, do nothing
      if (video.classList.contains('loaded')) return;

      // Unload any currently playing video
      if (currentlyLoadedVideo && currentlyLoadedVideo !== video) {
        unloadVideo(currentlyLoadedVideo);
      }

      // Load this video
      loadVideo(video);
      currentlyLoadedVideo = video;
    };
    
    // Add click listener to video
    video.addEventListener('click', handleClick);
    
    // Add click listener to title/subtitle if they exist
    if (videoMeta) {
      videoMeta.addEventListener('click', handleClick);
    }
  });

  function loadVideo(videoContainer) {
    const videoId = videoContainer.dataset.videoId;
    const videoTitle = videoContainer.dataset.videoTitle || 'Video';
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.title = videoTitle;
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.style.display = 'block';

    // Replace thumbnail with iframe
    const thumbnail = videoContainer.querySelector('.video-thumbnail');
    if (thumbnail) thumbnail.remove();
    
    videoContainer.appendChild(iframe);
    videoContainer.classList.add('loaded');
  }

  function unloadVideo(videoContainer) {
    const videoId = videoContainer.dataset.videoId;
    const videoTitle = videoContainer.dataset.videoTitle || 'Video';
    
    // Remove iframe
    const iframe = videoContainer.querySelector('iframe');
    if (iframe) iframe.remove();

    // Restore thumbnail
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnail.alt = videoTitle;
    thumbnail.className = 'video-thumbnail';
    
    videoContainer.insertBefore(thumbnail, videoContainer.firstChild);
    videoContainer.classList.remove('loaded');
  }
}

// tsParticles background init
function setupTwilightParticles() {
  const targetId = 'aa-tsparticles';
  if (!document.getElementById(targetId) || !window.tsParticles) return;

  const cs = getComputedStyle(document.documentElement);
  const v = (name) => cs.getPropertyValue(name).trim();
  const palette = {
    bgPrimary: v('--bg-primary') || '#0a0a0a',
    bgSecondary: v('--bg-secondary') || '#1a1a1a',
    textPrimary: v('--text-primary') || '#e0e0e0',
    textSecondary: v('--text-secondary') || '#a0a0a0',
    accentPrimary: v('--accent-primary') || '#d4a574',
    accentSecondary: v('--accent-secondary') || '#b8935f',
    border: v('--border') || '#333333'
  };

  const isFinePointer = matchMedia('(pointer: fine)').matches && !matchMedia('(pointer: coarse)').matches;
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const options = {
    background: { color: { value: palette.bgPrimary } },
    detectRetina: true,
    fpsLimit: 60,
    pauseOnBlur: true,
    motion: { reduce: { value: true, factor: 3 } },
    interactivity: {
      events: {
        onHover: { enable: isFinePointer, mode: 'grab', parallax: { enable: isFinePointer, force: 35, smooth: 12 } },
        onMove: { enable: isFinePointer, parallax: { enable: isFinePointer, force: 35, smooth: 12 } },
        onClick: { enable: true, mode: isFinePointer ? 'push' : 'bubble' },
        resize: true
      },
      modes: { grab: { distance: 160, links: { opacity: 0.4 } }, push: { quantity: 3 }, bubble: { distance: 120, size: 3, duration: 0.5, opacity: 0.6 } }
    },
    particles: {
      number: { value: 110, density: { enable: true, area: 800 } },
      color: { value: [palette.textSecondary, palette.accentPrimary, palette.accentSecondary] },
      links: { enable: true, distance: 150, color: palette.border, opacity: 0.16, width: 1 },
      move: { enable: true, direction: 'none', outModes: { default: 'out' }, speed: 0.6 },
      opacity: { value: 0.35, animation: { enable: true, speed: 0.4, minimumValue: 0.15 } },
      size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, minimumValue: 0.6 } },
      twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 }, lines: { enable: true, frequency: 0.003, opacity: 0.18 } }
    },
    responsive: [
      { maxWidth: 1024, options: { particles: { number: { value: 100 } } } },
      { maxWidth: 768, options: { particles: { number: { value: 90 }, density: { enable: false }, links: { color: palette.textSecondary, distance: 150, opacity: 0.22, width: 1.2 } } } }
    ]
  };

  const reduced = JSON.parse(JSON.stringify(options));
  reduced.fpsLimit = 45;
  reduced.motion.reduce = { value: true, factor: 4 };
  reduced.particles.number.value = Math.round(reduced.particles.number.value * 0.65);
  reduced.particles.move.speed = 0.35;
  reduced.interactivity.events.onHover.parallax.enable = false;
  reduced.particles.twinkle.lines.enable = false;
  reduced.interactivity.modes.push.quantity = 2;

  tsParticles.load(targetId, prefersReduced ? reduced : options);
}


