# 🎉 NAVBAR & FOOTER STANDARDIZATION - COMPLETE GUIDE

## ✅ COMPLETED PAGES (4/17 - 23.5%)

1. ✅ blog.html - Reference
2. ✅ home-1.html  
3. ✅ home-2.html
4. ✅ about.html

## 📋 EXACT TEMPLATE FOR REMAINING 13 PAGES

### NAVBAR TEMPLATE (Lines to replace in each page)
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

### FOOTER TEMPLATE (Lines to replace in each page)
```html
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
```

## 🎯 ACTIVE CLASS GUIDE

Add `class="active"` to the appropriate link in navbar:

- **skills.html**: `<a href="skills.html" class="active">Skills</a>`
- **projects.html**: `<a href="projects.html" class="active">Projects</a>`
- **contact.html**: `<a href="contact.html" class="active">Contact Me</a>`
- **All other pages**: No active class needed

## 📝 REMAINING PAGES TO UPDATE (13)

### Main Navigation (4):
1. ⏳ skills.html - Add active to "Skills"
2. ⏳ projects.html - Add active to "Projects"
3. ⏳ contact.html - Add active to "Contact Me"
4. ⏳ services.html - No active class

### Secondary (4):
5. ⏳ journey.html
6. ⏳ pricing.html
7. ⏳ service-details.html
8. ⏳ blog-details.html

### Utility (5):
9. ⏳ 404.html
10. ⏳ coming-soon.html
11. ⏳ faq.html
12. ⏳ privacy-policy.html
13. ⏳ terms-of-service.html

## ⚡ QUICK UPDATE STEPS

For each remaining page:

1. **Find the `<nav>` section** (usually around line 19-27)
2. **Replace entire nav** with navbar template above
3. **Add active class** if it's a main nav page (skills, projects, contact)
4. **Find the `<footer>` section** (usually near end of file)
5. **Replace entire footer** with footer template above
6. **Save the file**

## ✅ VERIFICATION

After updating each page, verify:
- [ ] HRK. logo appears on left
- [ ] Navigation links centered
- [ ] Profile icon on right
- [ ] Footer has 4 columns
- [ ] Social icons display
- [ ] Legal links work
- [ ] Back to top button appears
- [ ] Active class on correct link (if applicable)

---

**Status**: 4/17 complete (23.5%)
**Remaining**: 13 pages
**Estimated Time**: 30-45 minutes for manual updates

**I can continue updating the remaining 13 pages automatically if you'd like!**
