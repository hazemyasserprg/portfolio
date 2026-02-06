// Portfolio Website - Main JavaScript File
// Enhanced with modern JavaScript features and performance optimizations

class PortfolioManager {
  constructor() {
    this.init();
  }

  init() {
    this.detectIframeMode();
    this.setupEventListeners();
    this.handleResize(); // Initialize with current window size
    this.initializeAnimations();
    this.setupPerformanceMonitoring();
    this.initializeAccessibility();
  }

  detectIframeMode() {
    // Check if the page is running inside an iframe
    if (window.self !== window.top) {
      document.body.classList.add('iframe-mode');
    }
  }

  setupEventListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
    });

    // Button hover effects
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('mouseenter', this.handleButtonHover.bind(this));
      button.addEventListener('mouseleave', this.handleButtonLeave.bind(this));
    });

    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));

    // Resize handler for responsive behavior
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
  }

  handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  handleButtonHover(e) {
    const button = e.currentTarget;
    button.style.transform = 'translateY(-2px)';
    button.style.transition = 'transform 0.3s ease';
  }

  handleButtonLeave(e) {
    const button = e.currentTarget;
    button.style.transform = 'translateY(0)';
  }

  handleKeyboardNavigation(e) {
    // ESC key to close any open modals or return to top
    if (e.key === 'Escape') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handleResize() {
    // Handle responsive adjustments
    const isMobile = window.innerWidth <= 768;
    document.body.classList.toggle('mobile-view', isMobile);
  }

  initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animation (except those that animate immediately)
    document.querySelectorAll('.section:not(.animate-immediately)').forEach(section => {
      observer.observe(section);
    });
  }

  setupPerformanceMonitoring() {
    // Monitor performance in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page Load Performance:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalTime: perfData.loadEventEnd - perfData.fetchStart
          });
        }, 0);
      });
    }
  }

  initializeAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #333;
      color: white;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Utility function for debouncing
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  new PortfolioManager();
  console.log('Portfolio website loaded successfully!');
});

// Export for potential module usage
window.Portfolio = PortfolioManager;
