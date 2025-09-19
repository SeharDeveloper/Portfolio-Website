// ---------------- Header scroll behavior ----------------
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink'); // shrink header
  } else {
    header.classList.remove('shrink');
  }
});

// ---------------- Hamburger mobile menu ----------------
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return; // safety check

  // Function to open menu
  function openMenu() {
    navLinks.classList.add('show');
    hamburger.classList.add('open'); // for CSS animation if needed
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  // Function to close menu
  function closeMenu() {
    navLinks.classList.remove('show');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent document click from closing immediately
    if (navLinks.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      if (navLinks.classList.contains('show')) closeMenu();
    }
  });

  // Close menu on pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) {
      closeMenu();
    }
  });

  // Close menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
});
