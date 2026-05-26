// ============ NAVIGATION ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// ============ ACTIVE NAV LINK HIGHLIGHT ============
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
setActiveNavLink();

// ============ FLOATING PARTICLES ============
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 10 + 8 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.opacity = Math.random() * 0.6;
        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, parseFloat(particle.style.animationDuration) * 1000 + 5000);
    }

    setInterval(createParticle, 400);
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }
}

// ============ CONTACT FORM HANDLER ============
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Message Sent!';
        btn.style.background = '#00cc66';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            contactForm.reset();
        }, 2500);
    });
}

// ============ PROJECT FILTER (Projects page) ============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            btn.classList.add('active-filter');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

console.log('%c NEONEXUS %c Multi-Page Portfolio Ready ',
    'background:#00f0ff;color:#000;padding:8px 12px;border-radius:4px 0 0 4px;font-weight:bold;',
    'background:#12121a;color:#00f0ff;padding:8px 12px;border-radius:0 4px 4px 0;');
