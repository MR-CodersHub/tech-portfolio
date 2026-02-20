/**
 * Responsive Navigation Manager
 * Handles mobile menu toggle and responsive adjustments
 */

class ResponsiveNav {
    constructor() {
        this.menuToggle = null;
        this.navLinks = null;
        this.body = document.body;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');

        if (!this.menuToggle || !this.navLinks) return;

        // Initialize aria-expanded
        this.menuToggle.setAttribute('aria-expanded', 'false');

        // Toggle menu on click
        this.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Close menu when clicking on a link
        const links = this.navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navLinks.classList.contains('active') &&
                !this.navLinks.contains(e.target) &&
                !this.menuToggle.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navLinks.classList.toggle('active');
        const icon = this.menuToggle.querySelector('i');
        const isOpen = this.navLinks.classList.contains('active');

        // Update aria-expanded for accessibility and CSS animation
        this.menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        if (isOpen) {
            icon.classList.replace('fa-bars', 'fa-times');
            this.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            this.body.style.overflow = '';
        }
    }

    closeMenu() {
        this.navLinks.classList.remove('active');
        const icon = this.menuToggle.querySelector('i');
        if (icon) icon.classList.replace('fa-times', 'fa-bars');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.body.style.overflow = '';
    }
}

// Initialize responsive navigation
const responsiveNav = new ResponsiveNav();
