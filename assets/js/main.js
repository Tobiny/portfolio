/* ===================================
   Portfolio Website - Main JavaScript
   Author: Luis Fernando Chavez
   ===================================*/

// Enhanced CV Download Functionality
function downloadCV() {
    // Create the download link
    const link = document.createElement('a');
    link.href = 'assets/cv/Luis_Fernando_Chavez_CV.pdf'; // Path to your CV
    link.download = 'Luis_Fernando_Chavez_CV.pdf';
    link.target = '_blank';
    
    // Try to download the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Create a beautiful notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--gradient-1);
        color: white;
        padding: 20px 30px;
        border-radius: 16px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s ease;
        box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    notification.innerHTML = `
        <i class="fas fa-download"></i>
        <span>CV download started!</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer; margin-left: 10px;">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 400);
    }, 3000);
}

// Add event listeners for CV download buttons
document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('#downloadCV, #downloadCVHero');
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            downloadCV();
        });
    });
});

window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loadingOverlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 1000);
});

// Enhanced Rotating Text Animation
const phrases = [
    "passionate about AI",
    "building ML solutions",
    "solving complex problems",
    "creating intelligent systems",
    "exploring new technologies",
    "innovating with Python",
    "crafting scalable solutions"
];

let currentPhrase = 0;
const rotatingElement = document.getElementById('rotatingText');

function typeWriter(text, element, callback) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent = text.slice(0, i + 1);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(callback, 2000);
        }
    }, 100);
}

function eraseText(element, callback) {
    const text = element.textContent;
    let i = text.length;
    const timer = setInterval(() => {
        if (i > 0) {
            element.textContent = text.slice(0, i - 1);
            i--;
        } else {
            clearInterval(timer);
            callback();
        }
    }, 50);
}

function rotateText() {
    eraseText(rotatingElement, () => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeWriter(phrases[currentPhrase], rotatingElement, rotateText);
    });
}

// Start animation after initial load
setTimeout(() => {
    typeWriter(phrases[0], rotatingElement, rotateText);
}, 2000);

// Enhanced Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Navigation State Management
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // Navbar background change
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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

// Enhanced Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add special animation for timeline items
            if (entry.target.classList.contains('timeline-item')) {
                const techIcons = entry.target.querySelectorAll('.tech-icon');
                techIcons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.animation = 'fadeInUp 0.6s ease forwards';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all fade-up elements
document.querySelectorAll('.fade-up, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Enhanced Skill Item Interactions
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const proficiency = this.getAttribute('title');
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = proficiency;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--dark-color);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            z-index: 1000;
            white-space: nowrap;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        `;
        
        this.appendChild(tooltip);
        
        // Position tooltip
        const rect = this.getBoundingClientRect();
        tooltip.style.left = '50%';
        tooltip.style.top = '-40px';
        
        // Fade in tooltip
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
    });
    
    item.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.skill-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Enhanced Tech Icon Hover Effects
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const title = this.getAttribute('title');
        this.style.transform = 'translateY(-4px) scale(1.1) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Enhanced Button Click Effects
document.querySelectorAll('.btn, .project-link, .contact-card').forEach(element => {
    element.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;
function updateOnScroll() {
    // All scroll-based updates here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Update copyright year dynamically
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.innerHTML = `© ${year} Luis Fernando Chavez. All rights reserved. Built with passion and lots of coffee ☕`;
    }
});

// Console Easter Egg
console.log(`
🚀 Hey there, fellow developer! 

Impressed by this portfolio? It's built with:
• Vanilla JavaScript (no frameworks needed!)
• CSS3 with advanced animations
• Intersection Observer API
• Modern ES6+ features

Want to collaborate or chat about code?
📧 contact@lfchavez.com
💼 linkedin.com/in/luis-fernando-chavez-jimenez-ba850317a

Happy coding! ✨
`);