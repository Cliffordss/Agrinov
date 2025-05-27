// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    if (!burger || !nav) {
        console.error('Mobile menu elements not found');
        return;
    }

    function toggleNav() {
        // Toggle Nav
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('menu-open');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    // Event Listeners
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleNav();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleNav();
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                toggleNav();
            }
        });
    });

    // Prevent body scroll when menu is open
    function preventScroll(e) {
        if (body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }

    document.addEventListener('touchmove', preventScroll, { passive: false });
}); 