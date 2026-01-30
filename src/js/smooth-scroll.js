// Smooth Scroll Navigation for One-Page Portfolio

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.onepage-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Only prevent default and smooth scroll if it's a local anchor link
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // Otherwise, let the browser handle the regular page redirection
        });
    });

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        if (sections.length === 0) return;

        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        link.classList.remove('active');
                        if (href === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        highlightNavLink();
        updateTimelineProgress();
    });

    // Timeline Progress Calculation
    const timeline = document.querySelector('.learning-timeline');
    const progressLine = document.querySelector('.timeline-progress');

    function updateTimelineProgress() {
        if (timeline && progressLine) {
            const timelineRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress: 0 when top is at 80% of screen, 100 when bottom reaches same point
            const startPoint = windowHeight * 0.8;
            const totalDist = timelineRect.height;
            const currentPos = startPoint - timelineRect.top;

            let percentage = (currentPos / totalDist) * 100;
            percentage = Math.min(100, Math.max(0, percentage));

            progressLine.style.height = `${percentage}%`;
        }
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initial highlight
    highlightNavLink();
    // Initial timeline progress update
    updateTimelineProgress();

    // Scroll animations for sections and milestones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all milestones and project cards
    document.querySelectorAll('.timeline-milestone, .project-card, .skill-group').forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
});
