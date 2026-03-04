// Authentication State Management
class AuthManager {
    constructor() {
        this.storageKey = 'portfolioUser';
        this.init();
    }

    init() {
        // Check if user is logged in on page load
        this.updateUIState();
    }

    // Get current user from localStorage
    getCurrentUser() {
        const userStr = localStorage.getItem(this.storageKey);
        return userStr ? JSON.parse(userStr) : null;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    // Login user
    login(email, password, role = 'user') {
        // Simple validation
        if (!email || !password) {
            return { success: false, message: 'Email and password are required' };
        }

        // Check for admin credentials
        if (email === 'admin@gmail.com' && password === 'admin123') {
            role = 'admin';
        }

        const user = {
            email,
            role,
            loginTime: new Date().toISOString()
        };

        localStorage.setItem(this.storageKey, JSON.stringify(user));
        return { success: true, user, role };
    }

    // Register user
    register(email, password, name) {
        if (!email || !password || !name) {
            return { success: false, message: 'All fields are required' };
        }

        // Check if user already exists
        const existingUsers = this.getAllUsers();
        if (existingUsers.some(u => u.email === email)) {
            return { success: false, message: 'User already exists' };
        }

        const user = {
            email,
            name,
            role: 'user',
            registeredAt: new Date().toISOString()
        };

        // Store in users list
        existingUsers.push(user);
        localStorage.setItem('portfolioUsers', JSON.stringify(existingUsers));

        // Auto-login after registration
        localStorage.setItem(this.storageKey, JSON.stringify(user));
        return { success: true, user };
    }

    // Logout user
    logout() {
        localStorage.removeItem(this.storageKey);
        window.location.href = '/index.html';
    }

    // Get all registered users (for admin dashboard)
    getAllUsers() {
        const usersStr = localStorage.getItem('portfolioUsers');
        return usersStr ? JSON.parse(usersStr) : [];
    }

    // Update UI based on auth state
    updateUIState() {
        const user = this.getCurrentUser();
        const profileDropdown = document.getElementById('profileDropdown');

        if (!profileDropdown) return;

        if (user) {
            // User is logged in
            profileDropdown.innerHTML = `
                <a href="#" class="profile-trigger">
                    <i class="fas fa-user-circle"></i>
                    <span>${user.email.split('@')[0]}</span>
                </a>
                <div class="dropdown-menu">
                    <a href="${user.role === 'admin' ? '/dashboards/admin-dashboard.html' : '/dashboards/user-dashboard.html'}">
                        <i class="fas fa-tachometer-alt"></i> Dashboard
                    </a>
                    <a href="#" id="logoutBtn">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </div>
            `;

            // Add logout handler
            document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        } else {
            // User is not logged in
            profileDropdown.innerHTML = `
                <a href="#" class="profile-trigger">
                    <i class="fas fa-user"></i>
                    <span>Account</span>
                </a>
                <div class="dropdown-menu">
                    <a href="/auth/user/login.html">
                        <i class="fas fa-sign-in-alt"></i> Login
                    </a>
                    <a href="/auth/user/signup.html">
                        <i class="fas fa-user-plus"></i> Sign Up
                    </a>
                </div>
            `;
        }

        // Add dropdown toggle functionality
        this.initDropdown();
    }

    // Initialize dropdown toggle
    initDropdown() {
        const trigger = document.querySelector('.profile-trigger');
        const dropdown = document.querySelector('.dropdown-menu');

        if (trigger && dropdown) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('#profileDropdown')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    }

    // Protect dashboard pages
    protectPage(requiredRole = null) {
        const user = this.getCurrentUser();

        if (!user) {
            // Not logged in, redirect to login
            window.location.href = '/auth/user/login.html';
            return false;
        }

        if (requiredRole && user.role !== requiredRole) {
            // Wrong role, redirect to appropriate dashboard
            if (user.role === 'admin') {
                window.location.href = '/dashboards/admin-dashboard.html';
            } else {
                window.location.href = '/dashboards/user-dashboard.html';
            }
            return false;
        }

        return true;
    }

    // Initialize password toggle visibility
    initPasswordToggle() {
        const toggleButtons = document.querySelectorAll('.toggle-password');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const passwordInput = button.previousElementSibling;
                if (!passwordInput) return;

                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                // Toggle icon
                button.classList.toggle('fa-eye');
                button.classList.toggle('fa-eye-slash');
            });
        });
    }
}

// Initialize auth manager
const authManager = new AuthManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}
