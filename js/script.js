// ===================================
// COMPONENT LOADER
// ===================================
async function loadComponent(containerId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load all components
document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadComponent('navbar-container', '/components/navbar.html'),
        loadComponent('service-areas-container', '/components/service-areas.html'),
        loadComponent('contact-info-container', '/components/contact-info.html'),
        loadComponent('footer-container', '/components/footer.html'),
        loadComponent('whatsapp-button-container', '/components/whatsapp-button.html'),
    ]);
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});

// ===================================
// MOBILE MENU
// ===================================
function toggleMobileMenu() {
    const menu = document.getElementById('navbarMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu && hamburger) {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// ===================================
// TRACKING FUNCTIONS
// ===================================
function trackWhatsAppClick(source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': source
        });
    }
}

function trackCatalogOpen(source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'catalog_open', {
            'event_category': 'engagement',
            'event_label': source
        });
    }
}
