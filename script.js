// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for sticky nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}

// Tab navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-item');
    const menuToggle = document.querySelector('.menu-toggle');
    const tabList = document.querySelector('.tab-list');
    const sections = ['about', 'infrastructure', 'investment', 'sustainability', 'contact'];

    // Handle mobile menu toggle
    menuToggle.addEventListener('click', function() {
        tabList.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', tabList.classList.contains('show'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.tab-nav')) {
            tabList.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu after clicking a tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                tabList.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Handle tab clicks
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            scrollToSection(targetSection);
        });
    });

    // Update active tab on scroll
    function updateActiveTab() {
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    tabs.forEach(tab => {
                        if (tab.getAttribute('data-tab') === section) {
                            tabs.forEach(t => t.classList.remove('active'));
                            tab.classList.add('active');
                        }
                    });
                    break;
                }
            }
        }
    }

    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveTab, 50);
    });

    // Initial check
    updateActiveTab();

    // Add fade-in animation on scroll for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and major elements
    const animatedElements = document.querySelectorAll('.info-card, .facility-item, .investment-card, .initiative-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effect to industry cards
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Sticky navigation show/hide on scroll
    let lastScrollTop = 0;
    const nav = document.getElementById('tab-navigation');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    }, false);
});

// Handle request proposal button
document.addEventListener('DOMContentLoaded', function() {
    const proposalBtn = document.querySelector('.investment-section .btn-primary');
    if (proposalBtn) {
        proposalBtn.addEventListener('click', function() {
            scrollToSection('contact');
        });
    }
});
