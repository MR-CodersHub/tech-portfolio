# Navbar and Footer Standardization Script

This document contains the standard navbar and footer HTML that should be used across all pages.

## Standard Navbar HTML

```html
<!-- NAVIGATION -->
<nav class="onepage-nav">
    <a href="home-1.html" class="navbar-logo">HRK.</a>
    <div class="nav-links">
        <a href="home-1.html">Home</a>
        <a href="home-2.html">Digital</a>
        <a href="about.html">About Me</a>
        <a href="skills.html">Skills</a>
        <a href="projects.html">Projects</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact Me</a>
    </div>
    <div class="nav-profile" id="profileDropdown">
        <div class="profile-icon" id="profileIcon">
            <i class="fas fa-user"></i>
        </div>
        <div class="profile-dropdown">
            <!-- Content will be dynamically loaded by JavaScript -->
            <a href="../../auth/user/login.html">
                <i class="fas fa-sign-in-alt"></i> Login
            </a>
            <a href="../../auth/user/signup.html">
                <i class="fas fa-user-plus"></i> Sign Up
            </a>
            <div class="dropdown-divider"></div>
            <a href="../../auth/admin/admin-login.html">
                <i class="fas fa-shield-alt"></i> Admin Login
            </a>
        </div>
    </div>
</nav>
```

## Standard Footer HTML

```html
<!-- ENHANCED FOOTER -->
<footer class="footer-enhanced">
    <div class="footer-grid">
        <!-- About Column -->
        <div class="footer-column">
            <h3>Harish Ragav Kumar S</h3>
            <p>
                Senior Software Engineer specializing in scalable systems, full-stack development,
                and technical architecture.
            </p>
            <div class="footer-socials">
                <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            </div>
        </div>

        <!-- Quick Links Column -->
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="home-1.html"><i class="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="home-2.html"><i class="fas fa-chevron-right"></i> Digital</a></li>
                <li><a href="about.html"><i class="fas fa-chevron-right"></i> About Me</a></li>
                <li><a href="services.html"><i class="fas fa-chevron-right"></i> Work</a></li>
                <li><a href="projects.html"><i class="fas fa-chevron-right"></i> Projects</a></li>
                <li><a href="blog.html"><i class="fas fa-chevron-right"></i> Blog</a></li>
            </ul>
        </div>

        <!-- Support Column -->
        <div class="footer-column">
            <h3>Support</h3>
            <ul class="footer-links">
                <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                <li><a href="faq.html"><i class="fas fa-chevron-right"></i> FAQ</a></li>
                <li><a href="privacy-policy.html"><i class="fas fa-chevron-right"></i> Privacy Policy</a></li>
                <li><a href="terms-of-service.html"><i class="fas fa-chevron-right"></i> Terms of Service</a></li>
            </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-column">
            <h3>Get In Touch</h3>
            <ul class="footer-links">
                <li>
                    <a href="mailto:workharishragav@gmail.com">
                        <i class="fas fa-envelope"></i> workharishragav@gmail.com
                    </a>
                </li>
                <li>
                    <a href="tel:+1234567890">
                        <i class="fas fa-phone"></i> +1 (234) 567-890
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-map-marker-alt"></i> Available Remotely
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <p style="color: var(--text-secondary); margin: 0; text-align: center; justify-content: center;">
            © 2026 Developed by MR CodersHub. All rights reserved.
        </p>
    </div>

    <a href="#" class="back-to-top" id="backToTop"><i class="fas fa-arrow-up"></i></a>
</footer>
```

## Required Scripts

All pages should include:
```html
<script src="../../src/js/smooth-scroll.js"></script>
<script src="../../src/js/profile-dropdown.js"></script>
```

## Required CSS

All pages should include:
```html
<link rel="stylesheet" href="../../src/css/style.css">
<link rel="stylesheet" href="../../src/css/extended-styles.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

## Pages to Update

1. home-1.html ✓ (reference)
2. home-2.html
3. about.html
4. skills.html
5. projects.html
6. journey.html
7. contact.html
8. services.html
9. service-details.html
10. pricing.html
11. blog-details.html
12. 404.html
13. coming-soon.html
14. faq.html
15. privacy-policy.html
16. terms-of-service.html
