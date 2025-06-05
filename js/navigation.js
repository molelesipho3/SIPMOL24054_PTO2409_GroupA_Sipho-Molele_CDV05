/*
* Portfolio Website - Navigation JavaScript
* Author: Your Name
* Version: 1.0
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all navigation components
    initSmoothScroll();
    initMobileMenu();
    initActiveNavLinks();
    initScrollSpy();
});

// Smooth Scroll Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .footer-nav a, .hero-buttons a, a.btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is pointing to an anchor
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get header height for offset
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    
                    // Calculate target position with offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without scrolling
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (
            navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)
        ) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Prevent scrolling when mobile menu is open
    function toggleScrollLock() {
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    navToggle.addEventListener('click', toggleScrollLock);
    navLinks.forEach(link => {
        link.addEventListener('click', toggleScrollLock);
    });
}

// Active Navigation Links
function initActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set active link on page load
    setActiveLink();
    
    // Set active link on hash change
    window.addEventListener('hashchange', setActiveLink);
    
    function setActiveLink() {
        const currentHash = window.location.hash || '#home';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    }
}

// Scroll Spy
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Intersection Observer options
    const options = {
        root: null, // viewport
        rootMargin: '-100px 0px -70% 0px', // top, right, bottom, left
        threshold: 0 // trigger when 0% of the target is visible
    };
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the id of the section
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
                
                // Update URL hash without scrolling
                history.replaceState(null, null, `#${id}`);
            }
        });
    }, options);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Fallback for browsers that don't support Intersection Observer
    if (!('IntersectionObserver' in window)) {
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Scroll Progress Indicator
document.addEventListener('DOMContentLoaded', function() {
    const progressIndicator = document.querySelector('.scroll-progress');
    
    if (!progressIndicator) return;
    
    window.addEventListener('scroll', function() {
        const windowScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        
        progressIndicator.style.width = scrolled + '%';
    });
});

// Scroll Direction Detection
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Minimum scroll amount before triggering
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Check if we've scrolled more than the threshold
        if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scrolling down
                header.classList.add('header-hidden');
            } else {
                // Scrolling up
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        }
    });
});

