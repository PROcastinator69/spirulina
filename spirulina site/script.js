// WhatsApp Order Function
function orderOnWhatsApp() {
    // Phone number (replace with your actual WhatsApp business number)
    const phoneNumber = "919876543210"; // Format: country code + number (no + sign)
    
    // Pre-filled message for the customer
    const message = encodeURIComponent(
        "Hi! I want to order Organic Spirulina Tablets (₹499 for 60 tablets). Please confirm availability and delivery details."
    );
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Track the order attempt (for analytics)
    console.log('WhatsApp order initiated');
}

// Smooth scrolling for any internal links (if added later)
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with href starting with #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation when page loads
window.addEventListener('load', function() {
    // Add a subtle fade-in effect to the main content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Optional: Add click tracking for the WhatsApp button
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You can add analytics tracking here if needed
            console.log('Order button clicked at:', new Date().toLocaleString());
        });
    }
});

// Mobile-specific optimizations
if (window.innerWidth <= 768) {
    // Optimize for mobile devices
    document.addEventListener('DOMContentLoaded', function() {
        // Prevent zoom on input focus (if you add forms later)
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
        }
    });
}

// Error handling for WhatsApp link
function orderOnWhatsApp() {
    try {
        const phoneNumber = "919876543210";
        const message = encodeURIComponent(
            "Hi! I want to order Organic Spirulina Tablets (₹499 for 60 tablets). Please confirm availability and delivery details."
        );
        
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Check if it's a mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // For mobile devices, try to open WhatsApp app directly
            window.location.href = whatsappURL;
        } else {
            // For desktop, open in new tab
            window.open(whatsappURL, '_blank');
        }
        
        console.log('WhatsApp order initiated successfully');
        
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        
        // Fallback: show alert with phone number
        alert('Please contact us on WhatsApp: +91 9876543210');
    }
}
// Global Variables
let isSignupMode = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFilters();
    initializeProfileTabs();
    initializeAnimations();
});

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// WhatsApp Order Functions
function orderOnWhatsApp() {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
        "Hi! I want to order Organic Spirulina Tablets (₹499 for 60 tablets). Please confirm availability and delivery details."
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    console.log('WhatsApp order initiated for Spirulina');
}

function orderProduct(productName, price) {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
        `Hi! I want to order ${productName} (${price}). Please confirm availability and delivery details.`
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    console.log(`WhatsApp order initiated for ${productName}`);
}

function subscribePlan(planName, price) {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
        `Hi! I want to subscribe to ${planName} (${price}). Please provide more details about the subscription.`
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    console.log(`WhatsApp subscription initiated for ${planName}`);
}

// Product Filter Functions
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const searchInput = document.getElementById('searchInput');
    
    // Category Filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Search Functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            searchProducts(searchTerm);
        });
    }
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategories = card.getAttribute('data-category') || '';
            if (cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function searchProducts(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDescription = card.querySelector('.product-subtitle').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Authentication Functions
function showMessage(message, type = "error") {
    const msg = document.getElementById("message");
    if (msg) {
        msg.innerText = message;
        msg.className = `message ${type}`;
        msg.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            msg.style.display = 'none';
        }, 5000);
    }
}

function clearMessage() {
    const msg = document.getElementById("message");
    if (msg) {
        msg.innerText = "";
        msg.style.display = 'none';
    }
}

function validateInputs(mobile, password) {
    if (!mobile || !password) {
        showMessage("Please enter both mobile number and password.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showMessage("Enter a valid 10-digit mobile number.");
        return false;
    }

    if (password.length < 4) {
        showMessage("Password must be at least 4 characters.");
        return false;
    }

    return true;
}

function login() {
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (!validateInputs(mobile, password)) return;
    
    // Simulate successful login (replace with actual API call)
    showMessage("Login successful!", "success");
    setTimeout(() => loadMain(mobile), 1000);
}

function signup() {
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (!validateInputs(mobile, password)) return;
    
    // Simulate successful signup (replace with actual API call)
    showMessage("Account created successfully! You can now login.", "success");
    setTimeout(() => {
        toggleAuthMode(); // Switch back to login mode
    }, 1500);
}

function toggleAuthMode() {
    const authTitle = document.getElementById("authTitle");
    const authSubtitle = document.getElementById("authSubtitle");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const toggleText = document.getElementById("toggleText");
    const toggleLink = document.getElementById("toggleLink");
    
    isSignupMode = !isSignupMode;
    
    if (isSignupMode) {
        authTitle.textContent = "Create Account";
        authSubtitle.textContent = "Join GreenTap Health today";
        loginBtn.style.display = "none";
        signupBtn.style.display = "block";
        toggleText.innerHTML = 'Already have an account? <span id="toggleLink" onclick="toggleAuthMode()">Sign in here</span>';
    } else {
        authTitle.textContent = "Welcome Back";
        authSubtitle.textContent = "Sign in to your GreenTap Health account";
        loginBtn.style.display = "block";
        signupBtn.style.display = "none";
        toggleText.innerHTML = 'Don\'t have an account? <span id="toggleLink" onclick="toggleAuthMode()">Sign up here</span>';
    }
    
    clearMessage();
    document.getElementById("mobile").value = "";
    document.getElementById("password").value = "";
}

function loadMain(mobile) {
    clearMessage();
    const authSection = document.getElementById("auth-section");
    const mainSection = document.getElementById("main-section");
    const welcomeText = document.getElementById("welcome-text");
    
    if (authSection) authSection.style.display = "none";
    if (mainSection) mainSection.style.display = "block";
    if (welcomeText) welcomeText.innerText = `Welcome, ${mobile}!`;
    
    // Load health tips
    loadHealthTips();
}

function logout() {
    const authSection = document.getElementById("auth-section");
    const mainSection = document.getElementById("main-section");
    
    if (authSection) authSection.style.display = "block";
    if (mainSection) mainSection.style.display = "none";
    
    document.getElementById("mobile").value = "";
    document.getElementById("password").value = "";
    clearMessage();
}

function loadHealthTips() {
    const tips = [
        "💡 Take supplements with meals for better absorption",
        "💧 Drink plenty of water throughout the day",
        "🏃‍♂️ Combine supplements with regular exercise",
        "😴 Get 7-8 hours of quality sleep",
        "🥗 Maintain a balanced diet rich in fruits and vegetables"
    ];
    
    const tipsContainer = document.getElementById("health-tips");
    if (tipsContainer) {
        tipsContainer.innerHTML = tips.map(tip => `<div class="tip-item">${tip}</div>`).join('');
    }
}

// Profile Tab Functions
function initializeProfileTabs() {
    const profileNavLinks = document.querySelectorAll('.profile-nav-link');
    const profileSections = document.querySelectorAll('.profile-section-content');
    
    profileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            profileNavLinks.forEach(l => l.classList.remove('active'));
            profileSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetSection = link.getAttribute('href').substring(1);
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
            }
        });
    });
}

// Newsletter Subscription
function subscribeNewsletter() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form
    const newsletterBtn = document.querySelector('.newsletter .btn-primary');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', subscribeNewsletter);
    }
    
    // Profile forms
    const profileForms = document.querySelectorAll('.profile-form, .health-form, .settings-form');
    profileForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Profile updated successfully!');
        });
    });
});

// Animation Functions
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .plan-card, .benefit-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile Optimizations
if (window.innerWidth <= 768) {
    // Prevent zoom on input focus
    document.addEventListener('DOMContentLoaded', function() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
        }
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Console Welcome Message
console.log('🌿 Welcome to GreenTap Health - Your Premium Health Supplement Store!');
console.log('Built with 💚 for your wellness journey');

