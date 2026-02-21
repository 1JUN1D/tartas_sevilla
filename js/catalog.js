// ===================================
// CATÁLOGO JS - Miami Cakes Sevilla
// ===================================

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initScrollTop();
});

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const counter = document.getElementById('resultsCounter');
    const emptyState = document.getElementById('emptyState');
    
    grid.innerHTML = '';
    
    const filtered = currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);
    
    if (filtered.length === 0) {
        emptyState.classList.add('active');
        counter.innerHTML = '';
        return;
    }
    
    emptyState.classList.remove('active');
    counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    
    // Añadir tarjeta de cotización personalizada al inicio (solo en "Todos")
    if (currentFilter === 'all') {
        const quoteCard = createQuoteCard();
        grid.appendChild(quoteCard);
    }

    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    const lightboxPrice = product.price ? `${product.priceDisplay}` : product.priceDisplay;

    card.innerHTML = `
        <div class="product-image-container" onclick="openLightbox('${product.image}', '${product.code} – ${product.name}', '${lightboxPrice}')">
            <img src="${product.image}" 
                 alt="${product.name} - Miami Cakes Sevilla" 
                 class="product-image" 
                 loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop'">
            <div class="zoom-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
            </div>
            <span class="product-badge">${product.badge}</span>
        </div>
        <div class="product-info">
            <div class="product-code">${product.code}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <span class="price-label">Precio</span>
                    <div class="product-price">${product.priceDisplay}</div>
                </div>
                <a href="#" class="btn-order" onclick="orderProduct('${product.code}', '${product.name}'); return false;">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Pedir Ahora
                </a>
            </div>
        </div>
    `;

    return card;
}

function createQuoteCard() {
    const card = document.createElement('div');
    card.className = 'product-card custom-quote-card';

    card.innerHTML = `
        <div class="product-image-container" style="cursor:default;">
            <img 
                src="/assets/personalizado.webp"
                alt="Tarta personalizada Miami Cakes Sevilla"
                class="product-image">
        </div>
        <div class="product-info">
            <div class="product-code">DISEÑO EXCLUSIVO</div>
            <h3 class="product-name">¿Cómo Hacemos Tu Tarta Personalizada?</h3>
            <p class="product-description">
                Cuéntanos la ocasión, el nombre, el sabor y cualquier idea de diseño que tengas en mente — 
                una foto de inspiración, unos colores, una temática. Nosotros lo convertimos en una tarta 
                artesanal única elaborada desde cero, sin conservantes, y hecha especialmente para ese momento.
            </p>
            <div class="product-footer">
                <div>
                    <span class="price-label">Tu presupuesto</span>
                    <div class="product-price">A medida</div>
                </div>
                <a href="https://wa.me/34622405802?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20una%20tarta%20personalizada.%20Os%20comparto%20mi%20idea%20o%20imagen%20de%20referencia%20para%20que%20me%20hagáis%20presupuesto."
                   class="btn-order" target="_blank">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Hacer Mi Cotización
                </a>
            </div>
        </div>
    `;

    return card;
}

function filterProducts(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderProducts();
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

function openLightbox(image, title, price) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImage').src = image;
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxPrice').textContent = price;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function orderProduct(code, name) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'product_name': name
        });
    }
    const message = `Hola, me interesa la tarta *${code} – ${name}*. ¿Podríais darme más información y cotización?`;
    window.open(`https://wa.me/34622405802?text=${encodeURIComponent(message)}`, '_blank');
}

function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('visible', window.pageYOffset > 300);
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});