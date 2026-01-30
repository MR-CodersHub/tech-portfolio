// Blog Management Utility
class BlogManager {
    constructor() {
        this.posts = this.loadPosts();
        this.currentFilter = 'all';
        this.searchTerm = '';
    }

    // Load blog posts (mock data for now)
    loadPosts() {
        return [
            {
                id: 1,
                title: 'Building Scalable Microservices Architecture',
                excerpt: 'Learn how to design and implement microservices that can handle millions of requests with high availability and fault tolerance.',
                category: 'architecture',
                date: '2026-01-15',
                author: 'Harish Ragav Kumar S',
                readTime: '8 min read',
                tags: ['microservices', 'architecture', 'scalability']
            },
            {
                id: 2,
                title: 'Modern JavaScript Best Practices in 2026',
                excerpt: 'Explore the latest JavaScript patterns, ES2026 features, and best practices for writing clean, maintainable code.',
                category: 'development',
                date: '2026-01-10',
                author: 'Harish Ragav Kumar S',
                readTime: '6 min read',
                tags: ['javascript', 'best-practices', 'es2026']
            },
            {
                id: 3,
                title: 'My Journey from Junior to Senior Engineer',
                excerpt: 'Reflections on 10+ years in software development, lessons learned, and advice for aspiring developers.',
                category: 'career',
                date: '2026-01-05',
                author: 'Harish Ragav Kumar S',
                readTime: '10 min read',
                tags: ['career', 'learning', 'experience']
            },
            {
                id: 4,
                title: 'Optimizing React Performance at Scale',
                excerpt: 'Practical techniques for improving React application performance, from code splitting to memoization.',
                category: 'development',
                date: '2025-12-28',
                author: 'Harish Ragav Kumar S',
                readTime: '7 min read',
                tags: ['react', 'performance', 'optimization']
            },
            {
                id: 5,
                title: 'Database Design Patterns for High Traffic Systems',
                excerpt: 'Understand sharding, replication, and caching strategies for databases handling massive scale.',
                category: 'architecture',
                date: '2025-12-20',
                author: 'Harish Ragav Kumar S',
                readTime: '9 min read',
                tags: ['database', 'architecture', 'performance']
            },
            {
                id: 6,
                title: 'Continuous Learning: Staying Relevant in Tech',
                excerpt: 'How to keep your skills sharp and stay ahead in the rapidly evolving tech landscape.',
                category: 'career',
                date: '2025-12-15',
                author: 'Harish Ragav Kumar S',
                readTime: '5 min read',
                tags: ['learning', 'career', 'growth']
            }
        ];
    }

    // Filter posts by category
    filterByCategory(category) {
        this.currentFilter = category;
        this.renderPosts();
    }

    // Search posts
    search(term) {
        this.searchTerm = term.toLowerCase();
        this.renderPosts();
    }

    // Get filtered posts
    getFilteredPosts() {
        let filtered = this.posts;

        // Apply category filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(post => post.category === this.currentFilter);
        }

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(this.searchTerm) ||
                post.excerpt.toLowerCase().includes(this.searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm))
            );
        }

        return filtered;
    }

    // Render posts to DOM
    renderPosts() {
        const container = document.getElementById('blogPostsContainer');
        if (!container) return;

        const filtered = this.getFilteredPosts();

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No posts found matching your criteria.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(post => `
            <article class="blog-card">
                <div class="blog-card-header">
                    <span class="blog-category">${this.formatCategory(post.category)}</span>
                    <span class="blog-date">${this.formatDate(post.date)}</span>
                </div>
                <h3 class="blog-title">
                    <a href="blog-details.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="blog-read-time">
                        <i class="far fa-clock"></i> ${post.readTime}
                    </span>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <a href="blog-details.html?id=${post.id}" class="btn-read-more">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </article>
        `).join('');
    }

    // Format category for display
    formatCategory(category) {
        const categories = {
            'architecture': 'Architecture',
            'development': 'Development',
            'career': 'Career'
        };
        return categories[category] || category;
    }

    // Format date
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    // Get post by ID
    getPostById(id) {
        return this.posts.find(post => post.id === parseInt(id));
    }

    // Initialize blog page
    init() {
        // Setup search
        const searchInput = document.getElementById('blogSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.search(e.target.value);
            });
        }

        // Setup category filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.dataset.category;

                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter posts
                this.filterByCategory(category);
            });
        });

        // Initial render
        this.renderPosts();
    }
}

// Initialize blog manager
const blogManager = new BlogManager();
