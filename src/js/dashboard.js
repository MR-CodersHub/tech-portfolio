// Dashboard Data Manager - Uses ONLY Real Data from localStorage
class DashboardManager {
    constructor() {
        // No initialization of mock data
    }

    // Get real contacts from localStorage
    getContacts() {
        const contacts = localStorage.getItem('contactSubmissions');
        return contacts ? JSON.parse(contacts) : [];
    }

    // Get real newsletter subscribers
    getNewsletterSubscribers() {
        const subscribers = localStorage.getItem('newsletterSubscribers');
        return subscribers ? JSON.parse(subscribers) : [];
    }

    // Get real bookings (if exists)
    getBookings() {
        const bookings = localStorage.getItem('bookings');
        return bookings ? JSON.parse(bookings) : [];
    }

    // Get all users
    getAllUsers() {
        return authManager.getAllUsers();
    }

    // Get real statistics from actual data
    getStats() {
        const contacts = this.getContacts();
        const users = this.getAllUsers();
        const subscribers = this.getNewsletterSubscribers();
        const bookings = this.getBookings();

        return {
            totalUsers: users.length,
            totalContacts: contacts.length,
            totalSubscribers: subscribers.length,
            totalBookings: bookings.length,
            totalActivities: contacts.length + users.length + subscribers.length
        };
    }

    // Get recent activities from real data
    getRecentActivities(limit = 10) {
        const activities = [];
        const contacts = this.getContacts();
        const users = this.getAllUsers();
        const subscribers = this.getNewsletterSubscribers();

        // Add contact submissions
        contacts.forEach(contact => {
            activities.push({
                type: 'contact',
                description: `New contact message from ${contact.name}`,
                timestamp: contact.timestamp || contact.date || new Date().toISOString(),
                icon: 'envelope',
                details: contact
            });
        });

        // Add user registrations
        users.forEach(user => {
            if (user.registeredAt) {
                activities.push({
                    type: 'user',
                    description: `New user registered: ${user.email}`,
                    timestamp: user.registeredAt,
                    icon: 'user-plus',
                    details: user
                });
            }
        });

        // Add newsletter subscriptions
        subscribers.forEach(sub => {
            activities.push({
                type: 'newsletter',
                description: `New newsletter subscription: ${sub.email}`,
                timestamp: sub.timestamp || new Date().toISOString(),
                icon: 'newspaper',
                details: sub
            });
        });

        // Sort by timestamp (newest first)
        activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        return activities.slice(0, limit);
    }

    // Get recent contacts
    getRecentContacts(limit = 10) {
        const contacts = this.getContacts();
        // Sort by date (newest first)
        return contacts
            .sort((a, b) => {
                const dateA = new Date(a.timestamp || a.date || 0);
                const dateB = new Date(b.timestamp || b.date || 0);
                return dateB - dateA;
            })
            .slice(0, limit);
    }

    // Format date
    formatDate(dateStr) {
        if (!dateStr) return 'N/A';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return 'N/A';

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    // Format timestamp to relative time
    formatTimestamp(timestamp) {
        if (!timestamp) return 'Recently';

        const date = new Date(timestamp);
        if (isNaN(date.getTime())) return 'Recently';

        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

        return this.formatDate(timestamp);
    }

    // Render Admin Dashboard with REAL data only
    renderAdminDashboard() {
        const stats = this.getStats();
        const activities = this.getRecentActivities(10);
        const contacts = this.getRecentContacts(10);
        const users = this.getAllUsers();

        // Render stats
        document.getElementById('totalUsers').textContent = stats.totalUsers;
        document.getElementById('totalContacts').textContent = stats.totalContacts;
        document.getElementById('portfolioViews').textContent = stats.totalSubscribers; // Using subscribers as views metric
        document.getElementById('totalActivities').textContent = stats.totalActivities;

        // Render users table
        const usersTableBody = document.getElementById('usersTableBody');
        if (usersTableBody) {
            if (users.length === 0) {
                usersTableBody.innerHTML = `
                    <tr>
                        <td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                            <i class="fas fa-users" style="font-size: 2rem; opacity: 0.3; margin-bottom: 1rem; display: block;"></i>
                            No registered users yet
                        </td>
                    </tr>
                `;
            } else {
                usersTableBody.innerHTML = users.map(user => `
                    <tr>
                        <td>${user.name || user.email.split('@')[0]}</td>
                        <td>${user.email}</td>
                        <td><span class="badge" style="background: ${user.role === 'admin' ? 'var(--accent-purple)' : 'var(--accent-blue)'}; color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">${user.role || 'user'}</span></td>
                        <td>${this.formatDate(user.registeredAt)}</td>
                    </tr>
                `).join('');
            }
        }

        // Render activities
        const activitiesList = document.getElementById('activitiesList');
        if (activitiesList) {
            if (activities.length === 0) {
                activitiesList.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        <i class="fas fa-history" style="font-size: 2rem; opacity: 0.3; margin-bottom: 1rem; display: block;"></i>
                        No recent activities
                    </div>
                `;
            } else {
                activitiesList.innerHTML = activities.map(activity => `
                    <div class="activity-item" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--border-color);">
                        <div class="activity-icon" style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-${activity.icon}" style="color: var(--accent-purple);"></i>
                        </div>
                        <div class="activity-details" style="flex: 1;">
                            <p style="margin: 0 0 0.25rem 0; color: var(--text-primary);">${activity.description}</p>
                            <span style="font-size: 0.875rem; color: var(--text-secondary);">${this.formatTimestamp(activity.timestamp)}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Render contacts table
        const contactsTableBody = document.getElementById('contactsTableBody');
        if (contactsTableBody) {
            if (contacts.length === 0) {
                contactsTableBody.innerHTML = `
                    <tr>
                        <td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                            <i class="fas fa-envelope-open" style="font-size: 2rem; opacity: 0.3; margin-bottom: 1rem; display: block;"></i>
                            No contact messages yet
                        </td>
                    </tr>
                `;
            } else {
                contactsTableBody.innerHTML = contacts.map(contact => `
                    <tr>
                        <td>${contact.name || 'Anonymous'}</td>
                        <td>${contact.email || 'N/A'}</td>
                        <td>${contact.subject || contact.message?.substring(0, 30) + '...' || 'No subject'}</td>
                        <td>${this.formatDate(contact.timestamp || contact.date)}</td>
                    </tr>
                `).join('');
            }
        }
    }

    // Render User Dashboard with REAL data only
    renderUserDashboard() {
        const user = authManager.getCurrentUser();
        if (!user) {
            window.location.href = '../auth/user/login.html';
            return;
        }

        const activities = this.getRecentActivities(5);

        // Render user info
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        const memberSince = document.getElementById('memberSince');

        if (userName) userName.textContent = user.name || user.email.split('@')[0];
        if (userEmail) userEmail.textContent = user.email;
        if (memberSince) memberSince.textContent = this.formatDate(user.registeredAt || user.loginTime);

        // Render activities
        const activitiesList = document.getElementById('userActivitiesList');
        if (activitiesList) {
            if (activities.length === 0) {
                activitiesList.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        <i class="fas fa-history" style="font-size: 2rem; opacity: 0.3; margin-bottom: 1rem; display: block;"></i>
                        <p>No recent portfolio activities</p>
                        <p style="font-size: 0.875rem; margin-top: 0.5rem;">Check back later for updates!</p>
                    </div>
                `;
            } else {
                activitiesList.innerHTML = activities.map(activity => `
                    <div class="activity-item" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--border-color);">
                        <div class="activity-icon" style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-${activity.icon}" style="color: var(--accent-purple);"></i>
                        </div>
                        <div class="activity-details" style="flex: 1;">
                            <p style="margin: 0 0 0.25rem 0; color: var(--text-primary);">${activity.description}</p>
                            <span style="font-size: 0.875rem; color: var(--text-secondary);">${this.formatTimestamp(activity.timestamp)}</span>
                        </div>
                    </div>
                `).join('');
            }
        }
    }
}

// Initialize dashboard manager
const dashboardManager = new DashboardManager();
