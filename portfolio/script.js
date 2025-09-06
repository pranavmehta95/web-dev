// Navigation Highlight Effect
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => link.classList.add('active-hover'));
    link.addEventListener('mouseleave', () => link.classList.remove('active-hover'));
  });
});

// Scroll Reveal Animations
const revealSections = document.querySelectorAll('section');
const revealOnScroll = () => {
  revealSections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 80) {
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Animated Counters (for Achievements or Stats)
function animateCounter(el, end, duration) {
  let start = 0;
  let step = Math.ceil(end / (duration / 15));
  const countIt = () => {
    start += step;
    if (start > end) start = end;
    el.textContent = start;
    if (start < end) requestAnimationFrame(countIt);
  };
  countIt();
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.counter').forEach(counter => {
    animateCounter(counter, parseInt(counter.dataset.target), 1200);
  });
});

// Copy-to-Clipboard Contact Email
document.addEventListener('DOMContentLoaded', () => {
  const contactMail = document.querySelector('#contact a[href^="mailto:"]');
  if (contactMail) {
    contactMail.addEventListener('click', e => {
      e.preventDefault();
      const email = contactMail.textContent.trim();
      navigator.clipboard.writeText(email);
      contactMail.textContent = "Copied!";
      setTimeout(() => contactMail.textContent = email, 1100);
    });
  }
});

// Theme Toggle (Light & Dark modes)
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.createElement('button');
  themeBtn.innerHTML = '🌗';
  themeBtn.id = 'themeSwitchBtn';
  document.body.appendChild(themeBtn);
  themeBtn.style.position = 'fixed';
  themeBtn.style.bottom = '25px';
  themeBtn.style.right = '25px';
  themeBtn.style.fontSize = '1.4em';
  themeBtn.style.padding = '0.5em 0.9em';
  themeBtn.style.borderRadius = '1.2em';
  themeBtn.style.border = 'none';
  themeBtn.style.zIndex = '9999';
  themeBtn.style.background = 'linear-gradient(90deg, #6049ea, #43e97b)';
  themeBtn.style.color = '#fff';
  themeBtn.style.cursor = 'pointer';
  themeBtn.style.boxShadow = '0 2px 8px #6049ea33';

  themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeBtn.innerHTML = '☀️';
    } else {
      themeBtn.innerHTML = '🌗';
    }
  };
});

// Dark mode styles (to go with above toggle, include these in your CSS)
/*
body.dark-mode {
  background: #16181b !important;
  color: #f5f8fa !important;
}
body.dark-mode section {
  background: #23243a !important;
  color: #fff !important;
}
body.dark-mode nav, body.dark-mode footer {
  background: #252642cc !important;
  color: #fff !important;
}
body.dark-mode h2, body.dark-mode h1 {
  color: #7f53ac !important;
  background: unset !important;
  -webkit-text-fill-color: unset !important;
}
body.dark-mode a, body.dark-mode button {
  color: #f8b400 !important;
}
*/

// Floating Colorful Particles Effect (Canvas)
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-bg';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  let particles = [];
  let colors = ['#6049ea', '#01c16a', '#e63946', '#f8b400', '#43e97b', '#7f53ac', '#f857a6'];

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.radius = Math.random() * 4 + 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.alpha = Math.random() * 0.7 + 0.2;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
  }
  for (let i = 0; i < 70; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > W) p.speedX *= -1;
      if (p.y < 0 || p.y > H) p.speedY *= -1;
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W; canvas.height = H;
  });
});

// Animated Project Cards on Hover
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#projects article').forEach(article => {
    article.addEventListener('mouseenter', () => {
      article.style.transform = 'scale(1.04) rotate(-1deg)';
      article.style.boxShadow = '0 8px 36px #6049ea65';
      article.style.transition = 'transform 0.19s, box-shadow 0.19s';
    });
    article.addEventListener('mouseleave', () => {
      article.style.transform = 'scale(1) rotate(0)';
      article.style.boxShadow = '';
    });
  });
});

// Smooth Scroll for Navigation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 40, behavior: 'smooth'});
      }
    });
  });
});
