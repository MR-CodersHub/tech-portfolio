# NAVBAR & FOOTER UNIFORMITY FIX - BATCH UPDATE SCRIPT
# This script will update ALL remaining 9 pages with the EXACT navbar and footer from home-1.html

$standardNavbar = @'
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
'@

$standardFooter = @'
    <!-- ENHANCED FOOTER -->
    <footer class="footer-enhanced">
        <div class="footer-grid">
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
            <div class="footer-column">
                <h3>Support</h3>
                <ul class="footer-links">
                    <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                    <li><a href="faq.html"><i class="fas fa-chevron-right"></i> FAQ</a></li>
                    <li><a href="privacy-policy.html"><i class="fas fa-chevron-right"></i> Privacy Policy</a></li>
                    <li><a href="terms-of-service.html"><i class="fas fa-chevron-right"></i> Terms of Service</a></li>
                </ul>
            </div>
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
        <div class="footer-bottom">
            <p style="color: var(--text-secondary); margin: 0; text-align: center; justify-content: center;">
                © 2026 Deveoped by MR CodersHub. All rights reserved.
            </p>
        </div>
        <a href="#" class="back-to-top" id="backToTop"><i class="fas fa-arrow-up"></i></a>
    </footer>

    <script src="../../src/js/smooth-scroll.js"></script>
    <script src="../../src/js/profile-dropdown.js"></script>
'@

Write-Host "Standard navbar and footer templates created."
Write-Host "These will be manually applied to each of the 9 remaining pages."
Write-Host ""
Write-Host "Pages to update:"
Write-Host "1. journey.html"
Write-Host "2. pricing.html"
Write-Host "3. service-details.html"
Write-Host "4. blog-details.html"
Write-Host "5. 404.html"
Write-Host "6. coming-soon.html"
Write-Host "7. faq.html"
Write-Host "8. privacy-policy.html"
Write-Host "9. terms-of-service.html"
