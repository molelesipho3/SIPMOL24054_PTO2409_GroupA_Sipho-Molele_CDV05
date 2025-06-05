/*
* Portfolio Website - Main JavaScript
* Author: Sipho Molele
* Version: 1.0
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Initialize all components
    initNavigation();
    initCustomCursor();
    initScrollReveal();
    initSkillBars();
    initProjectFilter();
    initProjectModal();
    initContactForm();
    initBackToTop();
});

// Initialize Navigation
function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active Navigation Link on Scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize Custom Cursor
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
        
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
    });
    
    window.addEventListener('mouseout', function() {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
    });
    
    // Add hover effect to links and buttons
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .social-icon');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            cursorOutline.classList.add('hover');
        });
        
        element.addEventListener('mouseout', function() {
            cursorOutline.classList.remove('hover');
        });
    });
}

// Initialize Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
}

// Initialize Skill Bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress', progress);
        });
    }
    
    // Animate skill bars when they come into view
    function checkSkillBars() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        const skillsSection = document.querySelector('.skills-section');
        
        if (!skillsSection) return;
        
        const sectionTop = skillsSection.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight - revealPoint) {
            animateSkillBars();
            // Remove event listener once animation is triggered
            window.removeEventListener('scroll', checkSkillBars);
        }
    }
    
    window.addEventListener('scroll', checkSkillBars);
    window.addEventListener('load', checkSkillBars);
}

// Initialize Project Filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize Project Modal
function initProjectModal() {
    const projectLinks = document.querySelectorAll('.project-link');
    const projectModal = document.querySelector('.project-modal');
    const modalContent = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    
    if (!projectModal || !modalContent || !closeModal) return;
    
    projectLinks.forEach(link => {
        if (link.getAttribute('title') === 'View Project') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get project details
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('.project-title').textContent;
                const projectDescription = projectCard.querySelector('.project-description').textContent;
                const projectImage = projectCard.querySelector('.project-image img').src;
                const projectTech = projectCard.querySelector('.project-tech').innerHTML;
                
                // Populate modal content
                modalContent.innerHTML = `
                    <div class="modal-header">
                        <h2>${projectTitle}</h2>
                    </div>
                    <div class="modal-image">
                        <img src="${projectImage}" alt="${projectTitle}">
                    </div>
                    <div class="modal-details">
                        <h3>Overview</h3>
                        <p>${projectDescription}</p>
                        <h3>Technologies Used</h3>
                        <div class="project-tech">
                            ${projectTech}
                        </div>
                        <div class="modal-buttons">
                            <a href="#" class="btn btn-secondary">View Code</a>
                        </div>
                    </div>
                `;
                
                // Show modal
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the modal content
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate API call with timeout
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Your message has been sent successfully!');
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 1500);
    });
}

// Initialize Back to Top Button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

