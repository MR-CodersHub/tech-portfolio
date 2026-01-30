# Personal Portfolio Website - Harish Ragav Kumar S

A complete, modern personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. This project showcases professional work, skills, and services with a clean, dark-themed design.

## 📁 Project Structure

```
D:.
├── assets/
│   ├── icon/          # Icons and favicons
│   └── img/           # Images and photos
├── auth/
│   ├── admin/         # Admin authentication
│   │   └── admin-login.html
│   └── user/          # User authentication
│       ├── login.html
│       └── signup.html
├── dashboards/
│   ├── admin-dashboard.html    # Admin dashboard
│   └── user-dashboard.html     # User dashboard
├── public/
│   └── pages/         # All public-facing pages
│       ├── home-1.html
│       ├── home-2.html
│       ├── about.html
│       ├── services.html
│       ├── service-details.html
│       ├── blog.html
│       ├── blog-details.html
│       ├── contact.html
│       ├── pricing.html
│       ├── coming-soon.html
│       ├── 404.html
│       ├── skills.html
│       ├── projects.html
│       └── journey.html
├── src/
│   ├── css/
│   │   ├── style.css           # Main stylesheet
│   │   └── extended-styles.css # Additional styles for auth, dashboards, etc.
│   └── js/
│       ├── smooth-scroll.js    # Smooth scrolling functionality
│       ├── auth.js             # Authentication management
│       ├── form-validation.js  # Form validation utility
│       ├── blog.js             # Blog search and filter
│       └── dashboard.js        # Dashboard data management
└── index.html         # Main entry point
```

## 🎨 Design System

### Color Palette
- **Background Primary**: `#0a0a0a`
- **Background Secondary**: `#1a1a1a`
- **Background Card**: `#151515`
- **Accent Primary**: `#6366f1` (Indigo)
- **Accent Secondary**: `#8b5cf6` (Purple)
- **Text Primary**: `#f5f5f5`
- **Text Secondary**: `#a0a0a0`
- **Border Color**: `#2a2a2a`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Spacing System
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem
- 2XL: 4rem

## 🚀 Features

### Authentication System
- **User Login/Signup**: Full authentication flow with localStorage
- **Admin Login**: Separate admin portal (credentials: admin@gmail.com / admin123)
- **Role-Based Access**: Different dashboards for users and admins
- **Route Protection**: Automatic redirection for unauthorized access

### Dashboards
- **Admin Dashboard**:
  - User statistics
  - Contact messages table
  - Recent activity feed
  - Portfolio analytics
  
- **User Dashboard**:
  - Profile summary
  - Quick actions
  - Activity history
  - Saved items (placeholder)

### Blog System
- **Client-Side Search**: Real-time article search
- **Category Filtering**: Filter by Architecture, Development, Career
- **Dynamic Rendering**: Posts loaded from JavaScript
- **Individual Post Pages**: Detailed article view

### Contact Form
- **Client-Side Validation**: Email, required fields, min length
- **Error Handling**: Clear error messages
- **Success Feedback**: User-friendly confirmation
- **Subject Field**: Categorize inquiries

### Services Pages
- **Service Listings**: Six professional service offerings
- **Service Details**: In-depth information with FAQs
- **Pricing Page**: Three pricing tiers + custom quotes

## 🛠️ Technical Implementation

### Vanilla JavaScript Features
1. **Authentication Manager** (`auth.js`)
   - Login/logout functionality
   - User session management
   - Role-based access control
   - LocalStorage integration

2. **Form Validator** (`form-validation.js`)
   - Email validation
   - Required field checks
   - Minimum length validation
   - Dynamic error display

3. **Blog Manager** (`blog.js`)
   - Search functionality
   - Category filtering
   - Post rendering
   - Date formatting

4. **Dashboard Manager** (`dashboard.js`)
   - Mock data initialization
   - Statistics calculation
   - Dynamic table rendering
   - Activity feed

### CSS Architecture
- **Custom Properties**: CSS variables for theming
- **Responsive Design**: Mobile-first approach
- **Smooth Transitions**: Consistent animations
- **Card-Based Layout**: Modular component design
- **Gradient Accents**: Modern visual effects

## 📄 Page Descriptions

### Public Pages

#### Home Pages
- **home-1.html**: Developer-focused with skills and projects
- **home-2.html**: Consultant-focused with case studies and testimonials

#### About
- Personal story and mission
- Experience metrics
- Professional background

#### Services
- Full-stack development
- System architecture
- Technical consulting
- DevOps & CI/CD
- Code review
- Mentorship

#### Blog
- Technical articles
- Career insights
- Learning resources

#### Contact
- Contact form with validation
- Email and social links

#### Pricing
- Hourly consulting
- Project-based pricing
- Monthly retainer
- Custom quotations

### Authentication Pages
- **login.html**: User login
- **signup.html**: User registration
- **admin-login.html**: Admin access

### Dashboard Pages
- **admin-dashboard.html**: Admin control panel
- **user-dashboard.html**: User profile and activity

### Utility Pages
- **404.html**: Error page
- **coming-soon.html**: Placeholder for future features

## 🔐 Authentication Flow

### User Flow
1. User visits site → sees Login/Signup in nav
2. User signs up → auto-logged in → redirected to user dashboard
3. User logs in → redirected to user dashboard
4. User can access all public pages + user dashboard

### Admin Flow
1. Admin visits admin login page
2. Enters credentials (admin@gmail.com / admin123)
3. Redirected to admin dashboard
4. Can view all users, contacts, and analytics

### Route Protection
- Dashboard pages check for authentication on load
- Redirect to login if not authenticated
- Redirect to appropriate dashboard based on role

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🎯 Key Design Principles

1. **Consistency**: Unified navbar and footer across all pages
2. **Accessibility**: Semantic HTML and proper ARIA labels
3. **Performance**: Minimal dependencies, optimized assets
4. **Maintainability**: Modular CSS and JavaScript
5. **User Experience**: Smooth transitions and clear feedback

## 🚦 Getting Started

1. **Clone or download** the project
2. **Open** `index.html` in a modern browser
3. **Navigate** using the navbar
4. **Test authentication**:
   - Sign up as a new user
   - Login with user credentials
   - Login as admin (admin@gmail.com / admin123)

## 📝 Customization Guide

### Changing Colors
Edit CSS variables in `src/css/style.css`:
```css
:root {
    --accent-primary: #6366f1;  /* Change to your brand color */
    --accent-secondary: #8b5cf6;
}
```

### Adding Blog Posts
Edit the `loadPosts()` method in `src/js/blog.js`:
```javascript
loadPosts() {
    return [
        {
            id: 1,
            title: 'Your Post Title',
            excerpt: 'Post description',
            category: 'development',
            date: '2026-01-15',
            // ... more fields
        }
    ];
}
```

### Modifying Services
Edit `public/pages/services.html` to add/remove service cards.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **Font Awesome 6.0.0**: Icons
- **Google Fonts (Inter)**: Typography
- **No frameworks**: Pure HTML, CSS, JavaScript

## 🎓 Learning Resources

This project demonstrates:
- Vanilla JavaScript state management
- Client-side routing and protection
- Form validation patterns
- LocalStorage usage
- CSS custom properties
- Responsive design techniques
- Component-based architecture

## 📞 Support

For questions or issues:
- Email: workharishragav@gmail.com
- Review the code comments for implementation details

## 📄 License

This is a personal portfolio project. Feel free to use as inspiration for your own portfolio.

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**
