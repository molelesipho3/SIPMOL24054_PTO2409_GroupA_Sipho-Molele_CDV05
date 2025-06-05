# Portfolio Website Documentation

This document provides detailed information about the structure, components, and customization options for the portfolio website.

## Table of Contents

1. [Code Structure](#code-structure)
2. [HTML Structure](#html-structure)
3. [CSS Organization](#css-organization)
4. [JavaScript Functionality](#javascript-functionality)
5. [Animations](#animations)
6. [Responsive Design](#responsive-design)
7. [Browser Compatibility](#browser-compatibility)
8. [Performance Optimization](#performance-optimization)
9. [Customization Guide](#customization-guide)
10. [Troubleshooting](#troubleshooting)

## Code Structure

The website follows a modular structure to keep the code organized and maintainable:

### HTML Files

- `index.html`: The main HTML file containing all sections of the portfolio

### CSS Files

- `style.css`: Main stylesheet with base styles, layout, and components
- `animations.css`: Contains all animation-related styles and keyframes
- `responsive.css`: Media queries for responsive design

### JavaScript Files

- `main.js`: Core functionality and initialization
- `animations.js`: Animation-specific scripts
- `navigation.js`: Navigation and scrolling functionality

### Assets

- `images/`: Contains all image files
- `icons/`: Contains favicon and other icon files
- `fonts/`: Contains any custom font files (if not using Google Fonts)

## HTML Structure

The HTML is structured using semantic elements for better accessibility and SEO:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, and stylesheets -->
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">...</div>
    
    <!-- Custom Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>
    
    <!-- Header & Navigation -->
    <header class="header">...</header>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="home" class="hero-section">...</section>
        
        <!-- About Section -->
        <section id="about" class="about-section">...</section>
        
        <!-- Projects Section -->
        <section id="projects" class="projects-section">...</section>
        
        <!-- Skills Section -->
        <section id="skills" class="skills-section">...</section>
        
        <!-- Experience Section -->
        <section id="experience" class="experience-section">...</section>
        
        <!-- Contact Section -->
        <section id="contact" class="contact-section">...</section>
    </main>
    
    <!-- Footer -->
    <footer class="footer">...</footer>
    
    <!-- Back to Top Button -->
    <a href="#home" class="back-to-top">...</a>
    
    <!-- Project Modal -->
    <div class="project-modal">...</div>
    
    <!-- JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/navigation.js"></script>
</body>
</html>
```

## CSS Organization

The CSS follows a modular approach using CSS variables for easy customization:

### Variables

```css
:root {
    /* Primary Colors */
    --primary-dark: #0A192F;
    --primary-light: #F8F9FA;
    --accent: #64FFDA;
    
    /* Secondary Colors */
    --secondary-dark: #112240;
    --secondary-light: #CCD6F6;
    --secondary-accent: #FF6B6B;
    
    /* Typography */
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --font-code: 'Fira Code', monospace;
    
    /* Spacing, Borders, Shadows, etc. */
    ...
}
```

### Component-Based Structure

The CSS is organized by components:

1. Base styles (typography, containers, etc.)
2. Layout components (header, footer, sections)
3. UI components (buttons, forms, cards)
4. Utilities (helpers, animations)

## JavaScript Functionality

The JavaScript is organized into several modules:

### Main.js

- Initializes all components
- Handles preloader
- Manages custom cursor
- Controls project filtering
- Handles modal functionality
- Manages form validation
- Controls back-to-top button

### Animations.js

- Handles typewriter effect
- Manages parallax effects
- Controls counter animations
- Handles tilt effect
- Manages scroll progress indicator
- Controls text scramble effect
- Handles particle background

### Navigation.js

- Manages smooth scrolling
- Controls mobile menu
- Handles active navigation links
- Manages scroll spy functionality
- Controls scroll progress indicator
- Detects scroll direction

## Animations

The website includes various animations to enhance user experience:

### CSS Animations

- Fade in/out
- Slide in/out
- Zoom in/out
- Bounce
- Pulse
- Rotate
- Typewriter
- Float
- Wave
- Gradient background

### JavaScript Animations

- Scroll reveal
- Typewriter effect
- Parallax scrolling
- Tilt effect
- Counter animation
- Text scramble
- Particle background

## Responsive Design

The website is fully responsive and adapts to different screen sizes:

### Breakpoints

- Extra small devices: < 576px
- Small devices: ≥ 576px
- Medium devices: ≥ 768px
- Large devices: ≥ 992px
- Extra large devices: ≥ 1200px

### Mobile-First Approach

The CSS is written using a mobile-first approach, with media queries for larger screens.

### Mobile Navigation

On smaller screens, the navigation menu transforms into a hamburger menu with a slide-in panel.

## Browser Compatibility

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

Several techniques are used to optimize performance:

- Minified CSS and JavaScript (in production)
- Optimized images
- Lazy loading for images
- Efficient animations using CSS transforms and opacity
- Debounced scroll events
- Intersection Observer for scroll animations

## Customization Guide

### Changing Colors

To change the color scheme, edit the CSS variables in the `:root` section of `style.css`:

```css
:root {
    --primary-dark: #YOUR_COLOR;
    --primary-light: #YOUR_COLOR;
    --accent: #YOUR_COLOR;
    ...
}
```

### Updating Content

1. **Personal Information**: Edit the text content in the HTML file
2. **Projects**: Update the project cards in the projects section
3. **Skills**: Modify the skill items and percentages
4. **Experience**: Update the timeline items with your work history

### Adding New Sections

To add a new section:

1. Create a new section element in the HTML
2. Add corresponding styles in the CSS files
3. Update the navigation menu to include the new section
4. Add any necessary JavaScript functionality

### Customizing Animations

1. **CSS Animations**: Edit the keyframes and animation properties in `animations.css`
2. **JavaScript Animations**: Modify the animation parameters in `animations.js`

## Troubleshooting

### Common Issues

1. **Images Not Loading**: Check file paths and ensure images are in the correct directory
2. **Animations Not Working**: Verify that JavaScript is enabled and check for console errors
3. **Form Not Submitting**: The form is set up for demonstration only; connect it to a backend service for actual functionality
4. **Responsive Issues**: Check media queries and test on various devices

### Browser-Specific Issues

- **Safari**: Some CSS animations may need prefixes
- **Internet Explorer**: Not supported (use Edge instead)

### Performance Issues

If animations are sluggish:

1. Reduce the number of animated elements
2. Simplify complex animations
3. Use `will-change` property judiciously
4. Consider disabling some animations on mobile devices

