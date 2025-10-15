// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize all functionality after loading
    setTimeout(() => {
        initCustomCursor();
        initParallaxScrolling();
        initLanguageSwitch();
        initScrollAnimations();
        initNumberCounters();
        initParticles();
        initMobileMenu();
        initSmoothScroll();
        initNavbarScroll();
        initPartnersCarousel();
        initWelcomePopup();
        initRippleEffects();
        initEnhancedButtons();
        initTeamInteractions();
        initScrollReveal();
        initAccessibilityFeatures();
        initLottieAnimations();
        initHeroFloatingElements();
        initStaticMission();
        initValuesHover();
        initResultsTiltEffect();
        initProjectsEnhancedHover();
        initTeamFasterReveal();
        initSupportEnhancedHover();
        initNavigationHighlighting();
    }, 1000);
});

// Custom Cursor Management
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile || !cursor) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add('active');
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
    
    // Animate cursor with smooth following
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .ripple-card, .nav-link, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
        
        element.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });
        
        element.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });
    });
}

// Static Mission with Fade-in Animation
function initStaticMission() {
    const missionSection = document.querySelector('.static-mission');
    const animatedMission = document.querySelector('.animated-mission');
    
    if (!missionSection || !animatedMission) return;
    
    // Trigger fade-in animation immediately when page loads
    setTimeout(() => {
        animatedMission.style.animation = 'missionFadeIn 1s ease-out forwards';
    }, 500);
}

// Values Section with Purple Hover Effect and Centered Emojis
function initValuesHover() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        // Remove any existing animations from emojis
        const emoji = card.querySelector('.value-emoji');
        if (emoji) {
            emoji.style.animation = 'none';
            emoji.style.transform = 'none';
        }
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.border = '2px solid var(--brand-primary)';
            this.style.boxShadow = '0 0 30px rgba(86, 39, 151, 0.4)';
            this.style.transition = 'all 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });
}

// Results Section with Tilt Effect and Centered Emojis
function initResultsTiltEffect() {
    const resultCards = document.querySelectorAll('.tilt-card');

    resultCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8; // нахил по X
            const rotateY = ((x - centerX) / centerX) * -8; // нахил по Y

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
        });
    });
}

// Projects Section with Enhanced Hover (Instant Purple Border and Move Up)
function initProjectsEnhancedHover() {
    const projectCards = document.querySelectorAll('.project-hover-enhanced');
    
    projectCards.forEach(card => {
        // Remove any animations from emojis
        const emoji = card.querySelector('.emoji');
        if (emoji) {
            emoji.style.animation = 'none';
            emoji.style.transform = 'none';
        }
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.border = '2px solid #562797';
            this.style.boxShadow = '0 15px 30px rgba(86, 39, 151, 0.2)';
            this.style.transition = 'all 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });
}

// Team Section Faster Reveal with Lime Border
function initTeamFasterReveal() {
    const teamGrid = document.querySelector('.team-grid');
    const teamMembers = document.querySelectorAll('.team-member--lime-enhanced');
    
    if (!teamGrid) return;
    
    // Add faster reveal animation
    teamGrid.style.animation = 'teamRevealFaster 0.6s ease-out';
    
    // Enhanced hover with lime border and avatar zoom
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.05)';
            this.style.border = '2px solid #C1E12D';
            this.style.boxShadow = '0 25px 50px rgba(193, 225, 45, 0.3)';
            this.style.transition = 'all 0.2s ease';
            
            // Zoom avatar
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1)';
                avatar.style.boxShadow = '0 8px 25px rgba(193, 225, 45, 0.4)';
            }
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
            
            // Reset avatar
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = '';
                avatar.style.boxShadow = '';
            }
        });
    });
}

// Support Section with Enhanced Hover and Button Pulse
function initSupportEnhancedHover() {
    const supportCards = document.querySelectorAll('.support-hover-enhanced');
    const supportButtons = document.querySelectorAll('.support-btn');
    const thankYouPopup = document.getElementById('thankYouPopup');
    
    // Enhanced hover effect with purple border
    supportCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.border = '2px solid var(--brand-primary)';
            this.style.boxShadow = '0 0 30px rgba(86, 39, 151, 0.4)';
            this.style.transition = 'all 0.1s ease';
            
            // Pulse the button
            const button = this.querySelector('.support-btn');
            if (button) {
                button.style.animation = 'btnPulse 0.6s ease-in-out infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
            
            // Stop button pulse
            const button = this.querySelector('.support-btn');
            if (button) {
                button.style.animation = '';
            }
        });
    });
    
    // Thank you popup on button click
    supportButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const supportType = this.closest('.support-card').dataset.supportType;
            showThankYouPopup(supportType);
            
            // Still open email after showing popup
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 2000);
        });
    });
    
    function showThankYouPopup(type) {
        if (!thankYouPopup) return;
        
        const emoji = thankYouPopup.querySelector('.thank-you-emoji');
        const message = thankYouPopup.querySelector('.thank-you-message');
        
        // Customize message based on support type
        switch(type) {
            case 'volunteer':
                emoji.textContent = '🙋‍♀️';
                message.textContent = 'Дякуємо за бажання долучитися!';
                break;
            case 'partnership':
                emoji.textContent = '🤝';
                message.textContent = 'Дякуємо за інтерес до партнерства!';
                break;
            case 'financial':
                emoji.textContent = '💚';
                message.textContent = 'Дякуємо за підтримку!';
                break;
            default:
                emoji.textContent = '💚';
                message.textContent = 'Дякуємо за підтримку!';
        }
        
        // Show popup
        thankYouPopup.classList.remove('hidden');
        
        // Hide popup after 2 seconds
        setTimeout(() => {
            thankYouPopup.classList.add('hidden');
        }, 2000);
    }
}

// Hero Floating Elements Animation
function initHeroFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-circle, .floating-logo');
    
    if (window.innerWidth <= 768) {
        // Hide floating elements on mobile
        floatingElements.forEach(element => {
            element.style.display = 'none';
        });
        return;
    }
    
    // Add mouse interaction to floating elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            element.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.2;
            element.style.transform = `translateY(${parallax * speed}px)`;
        });
    }, { passive: true });
}

// Parallax Scrolling for Hero Section
function initParallaxScrolling() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollTop < windowHeight) {
            parallaxLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.5;
                const yPos = scrollTop * speed;
                layer.style.transform = `translateY(${yPos}px)`;
            });
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Language Switch Functionality
function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translations = {
        uk: {
            title: 'Ліга змін',
            subtitle: 'Громадська організація, заснована в 2020 році групою ініціативної молоді',
            description: 'Ми працюємо над розвитком спільнот громадян та підвищенням рівня їхньої участі в суспільно-політичному житті громад Сумської області',
            mission: 'Місія',
            missionText: 'Розвиток молоді задля формування свідомого і демократичного суспільства',
            joinBtn: 'Долучитися',
            projectsBtn: 'Наші проєкти',
            navigation: {
                about: 'Про нас',
                results: 'Результати',
                projects: 'Проєкти',
                reports: 'Звітність',
                media: 'Медіа',
                team: 'Команда',
                partners: 'Партнери',
                support: 'Підтримка',
                contact: 'Контакти'
            }
        },
        en: {
            title: 'League of Changes',
            subtitle: 'Non-governmental organization founded in 2020 by a group of initiative youth',
            description: 'We work on developing citizen communities and increasing their level of participation in the socio-political life of Sumy region communities',
            mission: 'Mission',
            missionText: 'Youth development for the formation of a conscious and democratic society',
            joinBtn: 'Join Us',
            projectsBtn: 'Our Projects',
            navigation: {
                about: 'About Us',
                results: 'Results',
                projects: 'Projects',
                reports: 'Reports',
                media: 'Media',
                team: 'Team',
                partners: 'Partners',
                support: 'Support',
                contact: 'Contacts'
            }
        }
    };
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            
            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update content
            if (translations[lang]) {
                updateContent(translations[lang]);
            }
        });
    });
    
    function updateContent(content) {
        // Update main content
        const elements = {
            '.hero-title': content.title,
            '.hero-subtitle': content.subtitle,
            '.hero-description': content.description,
            '.mission-title': content.mission,
            '.mission-text': content.missionText
        };
        
        Object.entries(elements).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });
        
        // Update navigation
        Object.entries(content.navigation).forEach(([key, text]) => {
            const navLink = document.querySelector(`.nav-link[href="#${key}"]`) || 
                           document.querySelector(`.nav-link[href="#${key === 'about' ? 'about' : key}"]`);
            if (navLink) {
                navLink.textContent = text;
            }
            
            // Also update footer navigation
            const footerLink = document.querySelector(`.footer-link[href="#${key}"]`) ||
                              document.querySelector(`.footer-link[href="#${key === 'about' ? 'about' : key}"]`);
            if (footerLink) {
                footerLink.textContent = text;
            }
        });
        
        // Update hero buttons
        const joinBtn = document.querySelector('.hero-actions .btn--primary');
        const projectsBtn = document.querySelector('.hero-actions .btn--outline');
        
        if (joinBtn) joinBtn.textContent = content.joinBtn;
        if (projectsBtn) projectsBtn.textContent = content.projectsBtn;
    }
}

// Loading Screen Management
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const body = document.body;
    
    // Hide loading screen after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            body.style.overflow = 'visible';
            
            // Remove loading screen from DOM after animation
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 500);
        }, 800);
    });
    
    // Initial body state
    body.style.overflow = 'hidden';
}

// Welcome Popup Management
function initWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const closeBtn = popup.querySelector('.popup-close');
    
    if (!popup) return;
    
    // Show popup after delay
    setTimeout(() => {
        popup.classList.remove('hidden');
        popup.style.animation = 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }, 4000);
    
    // Hide popup automatically after 8 seconds
    setTimeout(() => {
        hidePopup();
    }, 12000);
    
    // Close button functionality
    closeBtn.addEventListener('click', hidePopup);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
            hidePopup();
        }
    });
    
    function hidePopup() {
        popup.style.animation = 'slideOutRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 400);
    }
    
    // Add keyframe animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Ripple Effects
function initRippleEffects() {
    const rippleCards = document.querySelectorAll('.ripple-card');
    
    rippleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    function createRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Create ripple element
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(86, 39, 151, 0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: rippleAnimation 0.6s ease-out;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleAnimation {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Button Interactions
function initEnhancedButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add hover bounce effect
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn--bounce')) {
                this.style.animation = 'buttonBounce 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }
        });
        
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
        
        // Loading state simulation for email buttons (except support buttons which are handled separately)
        if (button.getAttribute('href') && 
            button.getAttribute('href').startsWith('mailto:') && 
            !button.classList.contains('support-btn')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showLoadingState(this);
                
                // Simulate processing time
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                    hideLoadingState(this);
                }, 1000);
            });
        }
    });
    
    function showLoadingState(button) {
        const loadingSpinner = button.querySelector('.btn-loading');
        const buttonText = button.querySelector('.btn-text');
        
        if (loadingSpinner && buttonText) {
            loadingSpinner.classList.remove('hidden');
            buttonText.textContent = 'Обробка...';
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        }
    }
    
    function hideLoadingState(button) {
        const loadingSpinner = button.querySelector('.btn-loading');
        const buttonText = button.querySelector('.btn-text');
        
        if (loadingSpinner && buttonText) {
            loadingSpinner.classList.add('hidden');
            
            // Reset text based on button context
            if (button.textContent.includes('Написати')) {
                buttonText.textContent = '✉️ Написати нам';
            } else if (button.textContent.includes('Обговорити')) {
                buttonText.textContent = '💬 Обговорити';
            } else if (button.textContent.includes('Підтримати')) {
                buttonText.textContent = '💚 Підтримати';
            }
            
            button.disabled = false;
            button.style.cursor = 'pointer';
        }
    }
    
    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes buttonBounce {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-3px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Team Member Interactions
function initTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member--lime-enhanced');
    
    teamMembers.forEach((member, index) => {
        // Add staggered entrance animation
        member.style.animationDelay = `${index * 0.05}s`; // Faster reveal - 20ms spacing
        
        // Enhanced hover effects with 3D tilt
        member.addEventListener('mousemove', function(e) {
            if (window.innerWidth <= 768) return; // Skip on mobile
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
        });
    });
}

// Scroll Reveal Animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 50); // Faster stagger
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const revealElements = document.querySelectorAll('.value-card, .project-card, .result-card, .support-card, .team-member--lime-enhanced, .report-card, .media-card');
    revealElements.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });
}

// Enhanced scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.value-card, .project-card, .team-member, .support-card, .partner-item, .report-card, .media-card');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`; // Faster stagger
        observer.observe(element);
    });

    // Add CSS for animate-in class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Fixed number counters for results section
function initNumberCounters() {
    const counterElements = document.querySelectorAll('.result-number[data-target]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.getAttribute('data-target'));
                
                // Only animate if not already animated
                if (!target.hasAttribute('data-animated')) {
                    animateCounter(target, finalNumber);
                    target.setAttribute('data-animated', 'true');
                }
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(element => {
        counterObserver.observe(element);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            
            // Add celebration effect
            element.style.animation = 'counterCelebrate 0.5s ease-out';
        }
        element.textContent = Math.floor(current);
    }, stepTime);

    // Add entry animation
    element.style.animation = 'countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    
    // Add celebration animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes counterCelebrate {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced partners carousel functionality
function initPartnersCarousel() {
    const carousel = document.querySelector('.partners-carousel');
    const track = document.querySelector('.partners-track');
    
    if (!carousel || !track) return;

    let isPaused = false;
    
    // Pause carousel on hover
    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
        track.style.animationPlayState = 'paused';
    });

    // Resume carousel when mouse leaves
    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
        track.style.animationPlayState = 'running';
    });

    // Enhanced touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragThreshold = 50;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        track.style.animationPlayState = 'paused';
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        
        // Provide visual feedback during drag
        const deltaX = currentX - startX;
        track.style.transform = `translateX(${deltaX * 0.3}px)`;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = currentX - startX;
        
        // Reset transform
        track.style.transform = '';
        
        // Resume animation with potential speed adjustment
        if (Math.abs(deltaX) > dragThreshold) {
            const currentDuration = parseFloat(getComputedStyle(track).animationDuration);
            const newDuration = deltaX > 0 ? currentDuration * 1.2 : currentDuration * 0.8;
            
            track.style.animationDuration = `${newDuration}s`;
            
            // Reset duration after a delay
            setTimeout(() => {
                track.style.animationDuration = '';
            }, 3000);
        }
        
        if (!isPaused) {
            track.style.animationPlayState = 'running';
        }
    });

    // Handle visibility change to pause/resume animation
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            track.style.animationPlayState = 'paused';
        } else if (!isPaused) {
            track.style.animationPlayState = 'running';
        }
    });

    // Performance optimization: pause when out of view
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isPaused) track.style.animationPlayState = 'running';
            } else {
                track.style.animationPlayState = 'paused';
            }
        });
    }, { threshold: 0.1 });

    carouselObserver.observe(carousel);
}

// Enhanced particle animation for results section
function initParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    const particleCount = window.innerWidth > 768 ? 60 : 30;
    const particles = [];

    // Create particles with different types
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const type = Math.random() < 0.7 ? 'dot' : 'ring';
        
        particle.className = `particle particle--${type}`;
        
        if (type === 'dot') {
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(193, 225, 45, ${Math.random() * 0.6 + 0.3});
                border-radius: 50%;
                pointer-events: none;
            `;
        } else {
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                border: 1px solid rgba(86, 39, 151, ${Math.random() * 0.4 + 0.2});
                border-radius: 50%;
                pointer-events: none;
                background: transparent;
            `;
        }
        
        // Random initial position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particlesContainer.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * particlesContainer.offsetHeight,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            opacity: Math.random() * 0.5 + 0.3,
            opacityDirection: Math.random() < 0.5 ? 1 : -1
        });
    }

    let animationFrame;
    
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around screen
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = particlesContainer.offsetHeight;
            if (particle.y > particlesContainer.offsetHeight) particle.y = 0;

            // Update position
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';

            // Animate opacity with breathing effect
            particle.opacity += particle.opacityDirection * 0.005;
            if (particle.opacity >= 0.8) particle.opacityDirection = -1;
            if (particle.opacity <= 0.1) particle.opacityDirection = 1;
            
            particle.element.style.opacity = particle.opacity;
        });

        animationFrame = requestAnimationFrame(animateParticles);
    }

    // Start animation when section is visible
    const resultsSection = document.querySelector('.results');
    const particleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateParticles();
            } else {
                cancelAnimationFrame(animationFrame);
            }
        });
    }, { threshold: 0.1 });

    if (resultsSection) {
        particleObserver.observe(resultsSection);
    }
}

// Enhanced mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });

    function openMobileMenu() {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.backdropFilter = 'blur(15px)';
        navLinks.style.padding = '24px';
        navLinks.style.borderTop = '1px solid rgba(86, 39, 151, 0.1)';
        navLinks.style.boxShadow = '0 10px 25px rgba(86, 39, 151, 0.1)';
        navLinks.style.animation = 'mobileMenuSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

        // Animate hamburger to X
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[1].style.transform = 'scale(0)';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';

        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-menu-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 998;
            animation: fadeIn 0.3s ease-out;
        `;
        backdrop.addEventListener('click', closeMobileMenu);
        document.body.appendChild(backdrop);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        isMenuOpen = false;
        navLinks.style.animation = 'mobileMenuSlideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 300);
        
        // Reset hamburger
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[1].style.transform = 'scale(1)';
        spans[2].style.transform = 'none';

        // Remove backdrop
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            backdrop.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => backdrop.remove(), 300);
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    // Close menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
    });

    // Add mobile menu animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes mobileMenuSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes mobileMenuSlideOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);
            
            if (!targetSection) {
                targetSection = document.querySelector(`[id="${targetId}"]`);
            }
            
            if (targetSection) {
                const navbarHeight = 70;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                
                // Enhanced smooth scroll with easing
                smoothScrollTo(Math.max(0, offsetTop), 1000);
                
                // Update URL hash
                if (history.pushState) {
                    history.pushState(null, null, `#${targetId}`);
                }
                
                // Add visual feedback
                targetSection.style.animation = 'sectionHighlight 1s ease-out';
            }
        });
    });

    function smoothScrollTo(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function
            const ease = progress * (2 - progress);
            
            window.scrollTo(0, start + distance * ease);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Add section highlight animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sectionHighlight {
            0% { background-color: rgba(193, 225, 45, 0.1); }
            100% { background-color: transparent; }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced navbar scroll effects
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollTop = window.pageYOffset;
        
        // Enhanced background blur effect
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 20px rgba(86, 39, 151, 0.15)';
            navbar.style.borderBottom = '1px solid rgba(86, 39, 151, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(86, 39, 151, 0.1)';
        }
        
        // Auto-hide navbar on scroll down (desktop only)
        if (window.innerWidth > 768 && Math.abs(scrollTop - lastScrollY) > 10) {
            if (scrollTop > lastScrollY && scrollTop > 200) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = scrollTop;
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Lottie Animations Initialization
function initLottieAnimations() {
    const lottieElements = document.querySelectorAll('lottie-player');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '50px'
    };
    
    const lottieObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, observerOptions);
    
    lottieElements.forEach(element => {
        lottieObserver.observe(element);
        
        // Pause initially for performance
        element.addEventListener('ready', () => {
            element.pause();
        });
    });
}

// Enhanced navigation highlighting
function initNavigationHighlighting() {
    const sections = document.querySelectorAll('section[id], .mission[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-70px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Accessibility enhancements
function initAccessibilityFeatures() {
    // Enhanced focus management
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid var(--brand-accent)';
            element.style.outlineOffset = '2px';
            element.style.borderRadius = 'var(--radius-sm)';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });

    // Keyboard navigation for carousel
    const carousel = document.querySelector('.partners-carousel');
    if (carousel) {
        carousel.setAttribute('tabindex', '0');
        carousel.setAttribute('role', 'region');
        carousel.setAttribute('aria-label', 'Партнери організації');
    }

    // Enhanced screen reader support
    const resultNumbers = document.querySelectorAll('.result-number');
    resultNumbers.forEach(number => {
        const label = number.nextElementSibling?.textContent || '';
        const description = number.parentElement.querySelector('.result-description')?.textContent || '';
        number.setAttribute('aria-label', `${number.textContent} ${label}. ${description}`);
    });

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#mission';
    skipLink.textContent = 'Перейти до основного контенту';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -100px;
        left: 20px;
        background: var(--brand-primary);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        transition: top 0.3s;
        z-index: 9999;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '20px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-100px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Page visibility handling
document.addEventListener('visibilitychange', () => {
    const track = document.querySelector('.partners-track');
    if (track) {
        if (document.hidden) {
            track.style.animationPlayState = 'paused';
        } else {
            track.style.animationPlayState = 'running';
        }
    }
});

// Error handling for better UX
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Graceful degradation - ensure basic functionality still works
});

// Performance optimization
function optimizePerformance() {
    // Optimize animations based on user preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
            .partners-track {
                animation: none !important;
            }
            .btn--pulse {
                animation: none !important;
            }
            .parallax-back {
                animation: none !important;
            }
            .hero-floating-elements {
                display: none !important;
            }
            .animated-mission {
                opacity: 1 !important;
                transform: translateY(0) !important;
                animation: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);