# Navbar & Footer Standardization Summary

## ✅ Current Status

**Reference Page:** `blog.html` - Has the complete, standardized navbar and footer

## 📋 Pages That Need Updating

Based on the project structure, the following 16 pages need to have their navbar and footer updated to match `blog.html`:

### Public Pages (16 total)
1. ✅ `blog.html` - **REFERENCE** (already correct)
2. ⚠️ `home-1.html` - Needs navbar + footer update
3. ⚠️ `home-2.html` - Needs navbar + footer update
4. ⚠️ `about.html` - Needs navbar + footer update
5. ⚠️ `skills.html` - Needs navbar + footer update
6. ⚠️ `projects.html` - Needs navbar + footer update
7. ⚠️ `journey.html` - Needs navbar + footer update
8. ⚠️ `contact.html` - Needs navbar + footer update
9. ⚠️ `services.html` - Needs navbar + footer update
10. ⚠️ `service-details.html` - Needs navbar + footer update
11. ⚠️ `pricing.html` - Needs navbar + footer update
12. ⚠️ `blog-details.html` - Needs navbar + footer update
13. ⚠️ `404.html` - Needs navbar + footer update
14. ⚠️ `coming-soon.html` - Needs navbar + footer update
15. ⚠️ `faq.html` - Needs navbar + footer update
16. ⚠️ `privacy-policy.html` - Needs navbar + footer update
17. ⚠️ `terms-of-service.html` - Needs navbar + footer update

## 🎯 What Needs to Be Updated

### Navbar Changes:
1. Add HRK. logo on the left
2. Wrap navigation links in `.nav-links` div
3. Add profile dropdown icon on the right
4. Update active class based on current page
5. Ensure all links are correct

### Footer Changes:
1. Replace simple footer with enhanced 4-column footer
2. Add About, Quick Links, Support, and Contact columns
3. Add social media icons
4. Add legal links (FAQ, Privacy, Terms)
5. Update copyright text

### Script Changes:
1. Add `profile-dropdown.js` script
2. Ensure `smooth-scroll.js` is included
3. Ensure both CSS files are loaded

## 🚀 Recommended Approach

Since there are 17 pages to update, I recommend:

**Option 1: Manual Update (Most Reliable)**
- Copy navbar from `blog.html` lines 18-48
- Copy footer from `blog.html` lines 82-155
- Paste into each page, adjusting the active class

**Option 2: Automated Script (Faster)**
- I can create individual updates for each page
- This will take multiple file edits

**Option 3: Batch Update**
- Update 3-5 critical pages first (home-1, home-2, about, contact, services)
- Then update remaining pages

## 📝 Key Elements to Copy

### Navbar Structure:
```
<nav class="onepage-nav">
    <a href="home-1.html" class="navbar-logo">HRK.</a>
    <div class="nav-links">
        [navigation links - update active class per page]
    </div>
    <div class="nav-profile" id="profileDropdown">
        [profile dropdown]
    </div>
</nav>
```

### Footer Structure:
```
<footer class="footer-enhanced">
    <div class="footer-grid">
        [4 columns: About, Quick Links, Support, Contact]
    </div>
    <div class="footer-bottom">
        [copyright]
    </div>
    <a href="#" class="back-to-top">...</a>
</footer>
```

### Scripts to Add:
```html
<script src="../../src/js/smooth-scroll.js"></script>
<script src="../../src/js/profile-dropdown.js"></script>
```

## ⚡ Priority Pages

Update these first for maximum impact:
1. **home-1.html** - Main homepage
2. **home-2.html** - Digital homepage
3. **about.html** - About page
4. **contact.html** - Contact page
5. **services.html** - Services page

---

**Status:** Ready for implementation
**Estimated Time:** 5-10 minutes per page (manual) or automated batch update
