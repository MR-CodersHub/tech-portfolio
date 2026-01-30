/**
 * Profile Dropdown Manager
 * Handles profile dropdown toggle and authentication state
 */

class ProfileDropdown {
    constructor() {
        this.dropdown = null;
        this.profileIcon = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.dropdown = document.getElementById('profileDropdown');
        this.profileIcon = document.getElementById('profileIcon');

        if (!this.dropdown || !this.profileIcon) return;

        // Toggle dropdown on click
        this.profileIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.dropdown.contains(e.target) && e.target !== this.profileIcon) {
                this.closeDropdown();
            }
        });

        // Update dropdown content based on auth state
        this.updateDropdownContent();

        // Setup logout button if it exists
        this.setupLogout();
    }

    toggleDropdown() {
        const dropdownMenu = this.dropdown.querySelector('.profile-dropdown');
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('show');
        }
    }

    closeDropdown() {
        const dropdownMenu = this.dropdown.querySelector('.profile-dropdown');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    }

    updateDropdownContent() {
        const user = this.getCurrentUser();
        const dropdownMenu = this.dropdown.querySelector('.profile-dropdown');

        if (!dropdownMenu) return;

        if (user) {
            // User is logged in - show dashboard and logout
            dropdownMenu.innerHTML = `
                <div class="dropdown-header">
                    <p>${user.name || 'User'}</p>
                    <span>${user.email}</span>
                </div>
                <a href="${user.role === 'admin' ? '../../dashboards/admin-dashboard.html' : '../../dashboards/user-dashboard.html'}">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </a>
                <div class="dropdown-divider"></div>
                <button id="logoutBtn">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            `;

            // Update profile icon to show first letter of name
            const initial = (user.name || user.email || 'U').charAt(0).toUpperCase();
            this.profileIcon.innerHTML = `<i class="fas fa-user"></i>`;
            this.profileIcon.setAttribute('title', user.name || user.email);

            // Re-setup logout after updating content
            this.setupLogout();
        } else {
            // User is not logged in - show login and signup
            dropdownMenu.innerHTML = `
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
            `;

            this.profileIcon.innerHTML = `<i class="fas fa-user"></i>`;
            this.profileIcon.setAttribute('title', 'Account');
        }
    }

    setupLogout() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('portfolioUser');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    logout() {
        localStorage.removeItem('portfolioUser');

        // Show success message
        alert('Logged out successfully!');

        // Redirect to home page
        window.location.href = 'home-1.html';
    }
}

// Initialize profile dropdown
const profileDropdown = new ProfileDropdown();
