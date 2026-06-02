// === Sitezet - Shared JavaScript ===

document.addEventListener('DOMContentLoaded', function () {

    // 1. Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. AOS Init
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, offset: 100 });
    }

    // 3. Smart Navbar (Hide on scroll down, show on scroll up)
    var navbar = document.getElementById('navbar');
    var lastScrollTop = 0;
    if (navbar) {
        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 80) {
                // Scroll Down: Hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll Up: Show navbar
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
    }

    // 4. Mobile Menu Toggle with Staggered Animation
    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileOverlay = document.getElementById('mobile-menu-overlay');
    var mobileDrawer = document.getElementById('mobile-menu-drawer');

    function staggerNavLinks(direction) {
        var links = mobileDrawer ? mobileDrawer.querySelectorAll('.mobile-nav-link') : [];
        if (direction === 'in') {
            links.forEach(function (link, i) {
                link.classList.remove('animate-in');
                link.style.animationDelay = (i * 0.06) + 's';
                setTimeout(function () {
                    link.classList.add('animate-in');
                }, 50);
            });
        } else {
            links.forEach(function (link) {
                link.classList.remove('animate-in');
                link.style.animationDelay = '0s';
            });
        }
    }

    function closeMobileMenu() {
        if (mobileOverlay) mobileOverlay.classList.remove('open');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        document.body.classList.remove('menu-open');
        if (menuBtn) {
            var icon = menuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        }
        staggerNavLinks('out');
    }

    function openMobileMenu() {
        if (mobileOverlay) mobileOverlay.classList.add('open');
        if (mobileDrawer) mobileDrawer.classList.add('open');
        document.body.classList.add('menu-open');
        if (menuBtn) {
            var icon = menuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'x');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        }
        staggerNavLinks('in');
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            var isOpen = mobileOverlay && mobileOverlay.classList.contains('open');
            if (isOpen) closeMobileMenu();
            else openMobileMenu();
        });
    }

    // Close on overlay click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMobileMenu();
    });

    // Close on drawer link click (with staggered exit)
    if (mobileDrawer) {
        mobileDrawer.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Active page detection
    function setActiveNavLink() {
        var path = window.location.pathname.split('/').pop() || 'index.html';
        var links = document.querySelectorAll('.mobile-nav-link, .desktop-nav-link');
        links.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    setActiveNavLink();

    // 5. Animated Counters
    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.dataset.target);
                var current = 0;
                var step = Math.ceil(target / 40);
                var timer = setInterval(function () {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(function (c) {
        counterObserver.observe(c);
    });

    // 6. Language System
    window.currentLang = 'id';

    window.setLang = function (lang, instant) {
        if (instant === undefined) instant = false;
        if (typeof translations === 'undefined') return;

        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!translations[lang] || !translations[lang][key]) return;
            if (instant) {
                el.innerHTML = translations[lang][key];
            } else {
                el.classList.add('fade-out');
                setTimeout(function () {
                    el.innerHTML = translations[lang][key];
                    el.classList.remove('fade-out');
                }, 300);
            }
        });

        setTimeout(function () {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, instant ? 0 : 350);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var langVal = btn.getAttribute('data-lang');
            if (langVal === lang) {
                btn.classList.add('text-teal-600');
                btn.classList.remove('text-gray-400');
            } else {
                btn.classList.remove('text-teal-600');
                btn.classList.add('text-gray-400');
            }
        });

        window.currentLang = lang;
    };

    window.toggleLang = function () {
        var newLang = window.currentLang === 'id' ? 'en' : 'id';
        setLang(newLang);
    };

    // Set initial language
    if (typeof translations !== 'undefined') {
        setLang('id', true);
    }

    // 7. Accordion Toggle (Vertical)
    window.toggleAccordion = function (element, contentClass) {
        var content = element.querySelector('.' + contentClass);
        if (!content) return;
        var iconWrapper = element.querySelector('.icon-wrapper');
        var isOpen = content.classList.contains('max-h-[500px]');

        if (!isOpen) {
            content.classList.remove('max-h-0', 'opacity-0');
            content.classList.add('max-h-[500px]', 'opacity-100');
            if (iconWrapper) {
                if (contentClass === 'faq-content') {
                    iconWrapper.style.transform = 'rotate(180deg)';
                } else {
                    iconWrapper.style.transform = 'rotate(45deg)';
                }
            }
        } else {
            content.classList.remove('max-h-[500px]', 'opacity-100');
            content.classList.add('max-h-0', 'opacity-0');
            if (iconWrapper) iconWrapper.style.transform = 'rotate(0deg)';
        }
    };

    // 8. Horizontal Flex Accordion Toggle
    window.toggleHorizontalAccordion = function (element) {
        // If already active, do nothing or collapse (usually in flex accordion, one must always be active or we can toggle it)
        // Let's make it so clicking an active one doesn't collapse it, because one needs to be expanded
        if (element.classList.contains('active')) return;

        // Find parent row
        var parentRow = element.parentElement;
        if (!parentRow) return;

        // Find all cards in this row
        var cards = parentRow.querySelectorAll('.flex-card');
        
        // Remove active from all
        cards.forEach(function(card) {
            card.classList.remove('active');
            var iconWrapper = card.querySelector('.icon-wrapper');
            if (iconWrapper) iconWrapper.style.transform = 'rotate(0deg)';
        });

        // Add active to clicked
        element.classList.add('active');
        var clickedIconWrapper = element.querySelector('.icon-wrapper');
        if (clickedIconWrapper) clickedIconWrapper.style.transform = 'rotate(45deg)';
    };

});

