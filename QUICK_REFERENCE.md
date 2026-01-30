# Quick Reference Guide

## 🔗 Page URLs (from root)

### Main Pages
- Home (Original): `/index.html`
- Home Variant 1: `/public/pages/home-1.html`
- Home Variant 2: `/public/pages/home-2.html`
- About: `/public/pages/about.html`
- Skills: `/public/pages/skills.html`
- Projects: `/public/pages/projects.html`
- Journey: `/public/pages/journey.html`
- Services: `/public/pages/services.html`
- Service Details: `/public/pages/service-details.html`
- Blog: `/public/pages/blog.html`
- Blog Details: `/public/pages/blog-details.html`
- Contact: `/public/pages/contact.html`
- Pricing: `/public/pages/pricing.html`

### Utility Pages
- 404 Error: `/public/pages/404.html`
- Coming Soon: `/public/pages/coming-soon.html`

### Authentication
- User Login: `/auth/user/login.html`
- User Signup: `/auth/user/signup.html`
- Admin Login: `/auth/admin/admin-login.html`

### Dashboards
- Admin Dashboard: `/dashboards/admin-dashboard.html`
- User Dashboard: `/dashboards/user-dashboard.html`

## 🔑 Admin Credentials

```
Email: admin@gmail.com
Password: admin123
```

## 📂 File Organization

### CSS Files
- **Main Styles**: `/src/css/style.css`
- **Extended Styles**: `/src/css/extended-styles.css` (auth, dashboards, blog)

### JavaScript Files
- **Smooth Scroll**: `/src/js/smooth-scroll.js`
- **Authentication**: `/src/js/auth.js`
- **Form Validation**: `/src/js/form-validation.js`
- **Blog Manager**: `/src/js/blog.js`
- **Dashboard Manager**: `/src/js/dashboard.js`

### Assets
- **Images**: `/assets/img/`
- **Icons**: `/assets/icon/`

## 🎨 CSS Classes Reference

### Layout
- `.section-container` - Max-width container
- `.page-header` - Page title section
- `.hero-onepage` - Full-screen hero section

### Cards
- `.card` - Basic card component
- `.service-card` - Service listing card
- `.blog-card` - Blog post card
- `.project-card` - Project showcase card
- `.pricing-card` - Pricing tier card

### Buttons
- `.btn-primary` - Primary action button (gradient)
- `.btn-secondary` - Secondary action button (outline)

### Forms
- `.form-group` - Form field wrapper
- `.error-message` - Validation error display
- `.success-message` - Success feedback

### Navigation
- `.onepage-nav` - Sticky navigation bar
- `.footer-onepage` - Footer component
- `.back-to-top` - Scroll to top button

### Dashboard
- `.dashboard-container` - Dashboard wrapper
- `.dashboard-grid` - Stats cards grid
- `.stat-card-dashboard` - Individual stat card
- `.data-table` - Data table component
- `.activity-list` - Activity feed

## 🔧 JavaScript API

### AuthManager
```javascript
// Check if logged in
authManager.isLoggedIn()

// Get current user
authManager.getCurrentUser()

// Login
authManager.login(email, password, role)

// Register
authManager.register(email, password, name)

// Logout
authManager.logout()

// Protect page
authManager.protectPage(requiredRole)
```

### FormValidator
```javascript
// Create validator
const validator = new FormValidator('formId')

// Validate contact form
validator.validateContactForm(formData)

// Validate login form
validator.validateLoginForm(formData)

// Validate signup form
validator.validateSignupForm(formData)

// Show error
validator.showError(fieldId, message)

// Show success
validator.showSuccess(message)
```

### BlogManager
```javascript
// Filter by category
blogManager.filterByCategory('architecture')

// Search posts
blogManager.search('microservices')

// Get post by ID
blogManager.getPostById(1)

// Initialize blog page
blogManager.init()
```

### DashboardManager
```javascript
// Render admin dashboard
dashboardManager.renderAdminDashboard()

// Render user dashboard
dashboardManager.renderUserDashboard()

// Get statistics
dashboardManager.getStats()
```

## 🎯 Common Tasks

### Adding a New Blog Post
1. Open `/src/js/blog.js`
2. Add to `loadPosts()` array:
```javascript
{
    id: 7,
    title: 'New Post Title',
    excerpt: 'Brief description',
    category: 'development', // or 'architecture', 'career'
    date: '2026-02-01',
    author: 'Harish Ragav Kumar S',
    readTime: '5 min read',
    tags: ['tag1', 'tag2']
}
```

### Adding a New Service
1. Open `/public/pages/services.html`
2. Copy a `.service-card` div
3. Update icon, title, description, and features

### Changing Brand Colors
1. Open `/src/css/style.css`
2. Modify CSS variables in `:root`:
```css
--accent-primary: #your-color;
--accent-secondary: #your-color;
```

### Adding a New Page
1. Create HTML file in `/public/pages/`
2. Copy structure from existing page
3. Include CSS: `../../src/css/style.css` and `../../src/css/extended-styles.css`
4. Include JS as needed
5. Update navigation links

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 968px) { }

/* Desktop */
@media (min-width: 969px) { }
```

## 🔍 Testing Checklist

- [ ] All navigation links work
- [ ] Forms validate correctly
- [ ] Login/logout flow works
- [ ] Admin dashboard accessible with correct credentials
- [ ] User dashboard accessible after login
- [ ] Blog search and filter work
- [ ] Contact form submits successfully
- [ ] Responsive on mobile, tablet, desktop
- [ ] All images load
- [ ] Smooth scrolling works
- [ ] Back to top button appears on scroll

## 🐛 Troubleshooting

### Forms not validating
- Check if `form-validation.js` is loaded
- Verify form has correct ID
- Check browser console for errors

### Authentication not working
- Clear localStorage: `localStorage.clear()`
- Check if `auth.js` is loaded
- Verify credentials for admin login

### Styles not applying
- Check CSS file paths are correct
- Verify both `style.css` and `extended-styles.css` are loaded
- Clear browser cache

### Dashboard not loading data
- Check if `dashboard.js` is loaded
- Verify `auth.js` is loaded first
- Check browser console for errors

## 📊 LocalStorage Keys

- `portfolioUser` - Current logged-in user
- `portfolioUsers` - All registered users
- `dashboardData` - Dashboard mock data (contacts, activities)

## 🎨 Icon Classes (Font Awesome)

Common icons used:
- `fas fa-code` - Code/development
- `fas fa-server` - Backend/server
- `fas fa-cloud` - Cloud/DevOps
- `fas fa-project-diagram` - Architecture
- `fas fa-user` - User profile
- `fas fa-envelope` - Email/contact
- `fas fa-tachometer-alt` - Dashboard
- `fas fa-sign-out-alt` - Logout

---

**Quick Start**: Open `index.html` in your browser and explore!
