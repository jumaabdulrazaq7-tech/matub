/**
 * MATUB Foodstuffs Trading Co LLC
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initForms();
});

/**
 * Header scroll effect
 */
function initHeader() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (!menuToggle || !mobileMenu) return;
    
    // Open menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close menu functions
    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Form handling
 */
function initForms() {
    // Quote form
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

/**
 * Handle quote form submission
 */
function handleQuoteSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(function() {
        // Reset button
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        // Reset form
        form.reset();
        
        // Show success modal
        showSuccessModal('quote');
    }, 1500);
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(function() {
        // Reset button
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        // Reset form
        form.reset();
        
        // Show success modal
        showSuccessModal('contact');
    }, 1500);
}

/**
 * Show success modal
 */
function showSuccessModal(type) {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close success modal
 */
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Product data for modals
 */
const productData = {
    vegetables: {
        title: 'Vegetables & Fruits',
        products: [
            { name: 'Fresh Onions', desc: 'Red and white onions, premium grade' },
            { name: 'Potatoes', desc: 'Washed and unwashed varieties' },
            { name: 'Tomatoes', desc: 'Cherry, Roma, and beefsteak' },
            { name: 'Citrus Fruits', desc: 'Oranges, lemons, limes' },
            { name: 'Bananas', desc: 'Cavendish and plantain' },
            { name: 'Seasonal Vegetables', desc: 'Peppers, cucumbers, leafy greens' }
        ]
    },
    grains: {
        title: 'Grains, Cereals & Legumes',
        products: [
            { name: 'Rice', desc: 'Basmati, jasmine, and long grain' },
            { name: 'Wheat', desc: 'Hard and soft wheat varieties' },
            { name: 'Maize', desc: 'Yellow and white maize' },
            { name: 'Lentils', desc: 'Red, green, and black lentils' },
            { name: 'Chickpeas', desc: 'Kabuli and desi chickpeas' },
            { name: 'Beans', desc: 'Kidney, black, and pinto beans' }
        ]
    },
    food: {
        title: 'Food & Beverages',
        products: [
            { name: 'Cooking Oil', desc: 'Sunflower, palm, and olive oil' },
            { name: 'Packaged Foods', desc: 'Pasta, noodles, and sauces' },
            { name: 'Canned Goods', desc: 'Vegetables, fruits, and fish' },
            { name: 'Beverages', desc: 'Juices, soft drinks, and water' },
            { name: 'Spices', desc: 'Whole and ground spices' },
            { name: 'Condiments', desc: 'Ketchup, mayonnaise, and dressings' }
        ]
    },
    dried: {
        title: 'Dried Vegetables & Fruits',
        products: [
            { name: 'Dried Onions', desc: 'Flakes, granules, and powder' },
            { name: 'Dried Garlic', desc: 'Flakes, granules, and powder' },
            { name: 'Raisins', desc: 'Golden, black, and sultana' },
            { name: 'Dates', desc: 'Medjool, Deglet Noor, and Ajwa' },
            { name: 'Dried Mango', desc: 'Slices and chunks' },
            { name: 'Dried Apricots', desc: 'Whole and halved' }
        ]
    }
};

/**
 * Show product modal
 */
function showProductModal(category) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalContent) return;
    
    const data = productData[category];
    if (!data) return;
    
    // Set title
    modalTitle.textContent = data.title;
    
    // Build product list
    let productsHtml = '<div class="modal-products">';
    data.products.forEach(function(product) {
        productsHtml += `
            <div class="modal-product">
                <h4>${product.name}</h4>
                <p>${product.desc}</p>
            </div>
        `;
    });
    productsHtml += '</div>';
    
    modalContent.innerHTML = productsHtml;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close product modal
 */
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modals on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSuccessModal();
        closeProductModal();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animate-in class
document.querySelectorAll('.animate-in').forEach(function(el) {
    observer.observe(el);
});
