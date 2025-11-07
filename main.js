// Eco Vista Industrial Zone - Main JavaScript

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const icon = mobileMenuToggle.querySelector('svg use');
  if (mobileMenu.classList.contains('active')) {
    icon.setAttribute('href', '#icon-x');
  } else {
    icon.setAttribute('href', '#icon-menu');
  }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
    const icon = mobileMenuToggle.querySelector('svg use');
    icon.setAttribute('href', '#icon-menu');
  }
}

// Attach click handlers to all navigation links
document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-scroll');
    scrollToSection(targetId);
  });
});

// Scroll animations observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
