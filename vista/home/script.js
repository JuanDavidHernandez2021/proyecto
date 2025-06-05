import confetti from 'canvas-confetti';

const products = [
    { id: "prod1", name: "Zapatillas Runner Pro", category: "caballeros", price: 90.000, description: "Zapatillas ultraligeras para corredores serios, con amortiguación reactiva.", image: "male_shoe.png", stock: 10 },
    { id: "prod2", name: "Camiseta Técnica DryFit", category: "caballeros", price: 34.000, description: "Camiseta transpirable que expulsa el sudor, ideal para entrenamientos intensos.", image: "male_shirt.png", stock: 15 },
    { id: "prod3", name: "Pantalón Corto Deportivo", category: "caballeros", price: 29.000, description: "Pantalón corto ligero y flexible para máxima movilidad.", image: "male_shorts.png", stock: 20 },
    { id: "prod4", name: "Conjunto Deportivo", category: "caballeros", price: 50.000, description: "Conjunto deportivo unisex, con capucha y pantalón tipo jogger con cintura elástica y cordón ajustable. ", image: "caballero1.png", stock: 20 },
    { id: "prod5", name: "Uniforme de Millanarios", category: "caballeros", price: 160.000, description: "Uniforme oficial de Millonarios F.C., firmado por Radamel Falcao Garcia.", image: "caballero2.png", stock: 20 },
    { id: "prod6", name: "Uniforme de Nacional", category: "caballeros", price: 160.000, description: "Uniforme oficial de Atlético Nacional, con camiseta cuello en V.", image: "caballero3.jpg", stock: 20 },
    

    { id: "prod7", name: "Leggings Alto Rendimiento", category: "damas", price: 54.000, description: "Leggings de compresión que moldean y ofrecen soporte.", image: "female_leggings.png", stock: 20 },
    { id: "prod8", name: "Top Deportivo ImpactFlex", category: "damas", price: 29.000, description: "Top deportivo con sujeción media, perfecto para yoga o gym.", image: "female_top.png", stock: 12 },
    { id: "prod9", name: "", category: "damas", price: 55.000, description: "Conjunto deportivo dos piezas en color rojo, ofrece ajuste ceñido, comodidad y estilo ideal para entrenamientos o uso casual.", image: "dama11.png", stock: 18 },
    { id: "prod10", name: "", category: "damas", price: 189.999, description: "Zapatillas New Balance 530 blancas con detalles plateados y negros, de estilo retro y suela robusta.", image: "dama3.png", stock: 18 },
    { id: "prod11", name: "", category: "damas", price: 89.999, description: "Conjunto deportivo negro para dama, con top de manga larga y cuello alto.", image: "dama4.png", stock: 18 },
    { id: "prod12", name: "", category: "damas", price: 99.999, description: "Enterizo deportivo para dama en color azul petróleo, de corte ajustado y pantalón acampanado.", image: "dama5.jpg", stock: 18 },

    { id: "prod13", name: "Conjunto Deportivo Infantil", category: "ninos", price: 45.000, description: "Chándal cómodo y divertido para los más pequeños aventureros.", image: "kids_tracksuit.png", stock: 8 },
    { id: "prod14", name: "Zapatillas Junior Sport", category: "ninos", price: 39.000, description: "Zapatillas resistentes con cierre de velcro para mayor facilidad.", image: "kids_shoe.png", stock: 10 },
    { id: "prod15", name: "Mochila Escolar Deportiva", category: "ninos", price: 25.000, description: "Mochila espaciosa y ergonómica para libros y equipación.", image: "kids_backpack.png", stock: 15 },
    { id: "prod16", name: "", category: "ninos", price: 149.999, description: "Guayos Nike de fútbol con tacos, diseño ligero y materiales que optimizan tracción y control del balón.", image: "niño1.jpg", stock: 15 },
    { id: "prod17", name: "", category: "ninos", price: 95.000, description: "Conjunto deportivo infantil en algodón azul marino con capucha y pantalón.", image: "niño33.png", stock: 15 },
    { id: "prod18", name: "", category: "ninos", price: 99.999, description: "Panther azul turquesa Licra de patinaje natacion gimnasio pesas running nomadas", image: "niño4.png", stock: 15 },

    { id: "prod19", name: "Balón Fútbol Champions", category: "implementos", price: 22.000, description: "Balón de fútbol tamaño 5, calidad profesional para partidos y entrenamiento.", image: "football.png", stock: 30 },
    { id: "prod20", name: "Set Mancuernas Ajustables", category: "implementos", price: 119.000, description: "Set de mancuernas versátil, peso ajustable hasta 20kg.", image: "dumbbells.png", stock: 5 },
    { id: "prod21", name: "Cuerda Saltar Velocidad", category: "implementos", price: 12.000, description: "Cuerda para saltar ligera y rápida, ideal para cardio y fitness.", image: "skipping_rope.png", stock: 25 },
    { id: "prod22", name: "Balón Fútbol Champions", category: "implementos", price: 125.000, description: "Kit de tenis Wilson con raqueta junior, bolso deportivo y pelotas de entrenamiento incluidas.", image: "imp1.jpg", stock: 30 },
    { id: "prod23", name: "", category: "implementos", price: 99.999, description: "Balón de baloncesto Molten GG7X oficial FIBA approved, cuero sintético naranja y crema con textura profesional.", image: "imp2.jpg", stock: 30 },
    { id: "prod24", name: "", category: "implementos", price: 169.000, description: "Kit completo de snorkel con aletas ajustables, máscara panorámica, tubo de respiración y bolsa de transporte en colores negro y azul turquesa.", image: "imp3.jpg", stock: 30 },
    
];

let cart = JSON.parse(localStorage.getItem('sportStyleCart')) || [];
let currentCategory = 'inicio';
let users = JSON.parse(localStorage.getItem('sportStyleUsers')) || [];
let currentUser = JSON.parse(localStorage.getItem('sportStyleCurrentUser')) || null;

const productGrid = document.getElementById('product-grid');
const cartIconContainer = document.getElementById('cartIconContainer');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('closeCartButton');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const cartCountBadge = document.getElementById('cartCountBadge');
const navLinks = document.querySelectorAll('.nav-link');
const currentCategoryTitle = document.getElementById('current-category-title');
const checkoutButton = document.getElementById('checkoutButton');
const userActionContainer = document.getElementById('userActionContainer');
const loggedInUserDisplay = document.getElementById('loggedInUser');

// Product Detail Modal Elements
const productDetailModal = document.getElementById('product-detail-modal');
const closeProductDetailButton = document.getElementById('closeProductDetailButton');
const productDetailImage = document.getElementById('productDetailImage');
const productDetailName = document.getElementById('productDetailName');
const productDetailDescription = document.getElementById('productDetailDescription');
const productDetailPrice = document.getElementById('productDetailPrice');
const addToCartFromDetailButton = document.getElementById('addToCartFromDetail');
let currentDetailProductId = null;

// Auth Modal Elements
const registerModal = document.getElementById('register-modal');
const loginModal = document.getElementById('login-modal');
const closeRegisterModalButton = document.getElementById('closeRegisterModalButton');
const closeLoginModalButton = document.getElementById('closeLoginModalButton');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const switchToLoginLink = document.getElementById('switchToLoginLink');
const switchToRegisterLink = document.getElementById('switchToRegisterLink');
const registerErrorMessage = document.getElementById('registerErrorMessage');
const loginErrorMessage = document.getElementById('loginErrorMessage');

// Checkout Modal Elements
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModalButton = document.getElementById('closeCheckoutModalButton');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutNameInput = document.getElementById('checkoutName');
const checkoutAddressInput = document.getElementById('checkoutAddress');
const checkoutEmailInput = document.getElementById('checkoutEmail');
const checkoutErrorMessage = document.getElementById('checkoutErrorMessage');

// Audio Context for sound effects
let audioContext;
const soundBuffers = {};

async function loadSound(name, path) {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    try {
        const response = await fetch(path);
        const arrayBuffer = await response.arrayBuffer();
        soundBuffers[name] = await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
        console.error(`Error loading sound ${name}:`, error);
    }
}

function playSound(name) {
    if (audioContext && soundBuffers[name]) {
        const source = audioContext.createBufferSource();
        source.buffer = soundBuffers[name];
        source.connect(audioContext.destination);
        source.start(0);
    }
}

function renderProducts(category) {
    currentCategory = category; // Ensure currentCategory is updated
    productGrid.innerHTML = '';
    
    let filteredProducts;
    if (category === 'inicio') {
        // For 'inicio', show all products.
        // You might want to curate this list or add pagination later for better performance/UX.
        filteredProducts = [...products]; 
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" data-id="${product.id}">
            <h3 class="product-name" data-id="${product.id}">${product.name}</h3>
            <p class="product-description">${product.description.substring(0,70)}...</p>
            <p class="product-price">$${product.price.toFixed(3)}</p>
            <button class="add-to-cart-button" data-id="${product.id}">Añadir al Carrito</button>
        `;
        productGrid.appendChild(card);

        card.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
        card.querySelector('.product-image').addEventListener('click', () => showProductDetail(product.id));
        card.querySelector('.product-name').addEventListener('click', () => showProductDetail(product.id));
    });
    updateCategoryTitle(category);
}

function updateCategoryTitle(category) {
    const categoryNames = {
        inicio: "Página Principal", // Title for the new 'inicio' category
        caballeros: "Caballeros",
        damas: "Damas",
        ninos: "Niños",
        implementos: "Implementos Deportivos"
    };
    currentCategoryTitle.textContent = categoryNames[category] || "Productos";
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProductId = productId;
    productDetailImage.src = product.image;
    productDetailImage.alt = product.name;
    productDetailName.textContent = product.name;
    productDetailDescription.textContent = product.description;
    productDetailPrice.textContent = `$${product.price.toFixed(2)}`;
    
    productDetailModal.classList.add('show');
}

function closeProductDetail() {
    productDetailModal.classList.remove('show');
    currentDetailProductId = null;
}

addToCartFromDetailButton.addEventListener('click', () => {
    if (currentDetailProductId) {
        addToCart(currentDetailProductId);
        showFeedback(`"${products.find(p => p.id === currentDetailProductId).name}" añadido desde detalle.`, 'info');
    }
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartDisplay();
    showFeedback(`"${product.name}" añadido al carrito!`);
}

function showFeedback(message, type = 'info') { // type can be 'info', 'success', 'error'
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback-toast');
    if (type === 'success') {
        feedbackDiv.style.backgroundColor = 'var(--success-color)';
    } else if (type === 'error') {
        feedbackDiv.style.backgroundColor = 'var(--danger-color)';
    } else {
        feedbackDiv.style.backgroundColor = 'var(--accent-color)'; // Default info
    }
    feedbackDiv.textContent = message;
    document.body.appendChild(feedbackDiv);

    setTimeout(() => {
        feedbackDiv.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        feedbackDiv.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(feedbackDiv);
        }, 300);
    }, 3000);

    if (!document.getElementById('feedback-toast-styles')) {
        const style = document.createElement('style');
        style.id = 'feedback-toast-styles';
        style.innerHTML = `
            .feedback-toast {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(100px); /* Start off-screen */
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 2000;
                opacity: 0;
                transition: transform 0.3s ease-out, opacity 0.3s ease-out;
                font-size: 0.9rem;
                text-align: center;
            }
            .feedback-toast.show {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
}

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío.</p>';
        checkoutButton.disabled = true;
    } else {
        checkoutButton.disabled = false;
        cart.forEach(item => {
            const listItem = document.createElement('div');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-quantity">
                    <button data-id="${item.id}" class="quantity-change decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input" readonly>
                    <button data-id="${item.id}" class="quantity-change increase">+</button>
                </div>
                <p class="cart-item-subtotal">$${(item.price * item.quantity).toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button data-id="${item.id}" class="remove-item"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            cartItemsList.appendChild(listItem);
        });
    }
    updateCartTotal();
    updateCartCountBadge();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPriceElement.textContent = `$${total.toFixed(2)}`;
}

function updateCartCountBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalItems;
    cartCountBadge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function changeQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function saveCart() {
    localStorage.setItem('sportStyleCart', JSON.stringify(cart));
}

function toggleCartModal() {
    if (cartModal.classList.contains('show')) {
        cartModal.classList.remove('show');
    } else {
        updateCartDisplay();
        cartModal.classList.add('show');
    }
}

// Auth functions
function updateLoginStatusUI() {
    const icon = userActionContainer.querySelector('i');
    if (currentUser) {
        icon.className = 'fas fa-sign-out-alt';
        icon.title = 'Cerrar Sesión';
        loggedInUserDisplay.textContent = `Hola, ${currentUser.username}`;
        loggedInUserDisplay.style.display = 'inline';
        // Pre-fill checkout email if user logs in *after* checkout modal was potentially opened as guest
        if (checkoutModal.classList.contains('show') && checkoutEmailInput.value === '') {
             checkoutEmailInput.value = currentUser.email;
        }
    } else {
        icon.className = 'fas fa-user-plus';
        icon.title = 'Registro/Login';
        loggedInUserDisplay.textContent = '';
        loggedInUserDisplay.style.display = 'none';
    }
}

function openRegisterModal() {
    registerModal.classList.add('show');
    loginModal.classList.remove('show'); // Ensure login is closed
    registerErrorMessage.textContent = '';
}

function closeRegisterModal() {
    registerModal.classList.remove('show');
}

function openLoginModal() {
    loginModal.classList.add('show');
    registerModal.classList.remove('show'); // Ensure register is closed
    loginErrorMessage.textContent = '';
}

function closeLoginModal() {
    loginModal.classList.remove('show');
}

function handleRegistration(event) {
   // event.preventDefault();
    const username = registerForm.regUsername.value.trim();
    const email = registerForm.regEmail.value.trim().toLowerCase();
    const password = registerForm.regPassword.value;
    const confirmPassword = registerForm.regConfirmPassword.value;

    registerErrorMessage.textContent = '';

    if (password !== confirmPassword) {
        registerErrorMessage.textContent = 'Las contraseñas no coinciden.';
        playSound('action_failed');
        return;
    }
    if (password.length < 6) {
        registerErrorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        playSound('action_failed');
        return;
    }

    const existingUser = users.find(u => u.username === username || u.email === email);
    if (existingUser) {
        registerErrorMessage.textContent = 'El nombre de usuario o email ya existe.';
        playSound('action_failed');
        return;
    }

    const newUser = { username, email, password }; // Store password plaintext for demo
    users.push(newUser);
    localStorage.setItem('sportStyleUsers', JSON.stringify(users));
    
    playSound('registration_success');
    showFeedback(`¡Bienvenido, ${username}! Cuenta creada. Por favor, inicia sesión.`, 'success');
    registerForm.reset();
    closeRegisterModal();
    openLoginModal(); // Switch to login modal after successful registration
}

function handleLogin(event) {
    event.preventDefault();
    const emailOrUsername = loginForm.loginEmailOrUsername.value.trim();
    const password = loginForm.loginPassword.value;
    loginErrorMessage.textContent = '';

    const user = users.find(u => 
        (u.email === emailOrUsername.toLowerCase() || u.username === emailOrUsername) && 
        u.password === password
    );

    if (user) {
        currentUser = { username: user.username, email: user.email }; // Don't store password in currentUser
        localStorage.setItem('sportStyleCurrentUser', JSON.stringify(currentUser));
        updateLoginStatusUI();
        playSound('login_success');
        showFeedback(`¡Hola de nuevo, ${user.username}!`, 'success');
        loginForm.reset();
        closeLoginModal();
        
        // If checkout modal is open and email field was blank (guest attempt), pre-fill it.
        if (checkoutModal.classList.contains('show') && checkoutEmailInput.value === '') {
            checkoutEmailInput.value = currentUser.email;
        }

    } else {
        loginErrorMessage.textContent = 'Email/Usuario o contraseña incorrectos.';
        playSound('action_failed');
    }
}

function handleLogout() {
    playSound('logout_success');
    showFeedback(`Hasta pronto, ${currentUser.username}.`, 'info');
    currentUser = null;
    localStorage.removeItem('sportStyleCurrentUser');
    updateLoginStatusUI();
}

// Event Listeners
cartIconContainer.addEventListener('click', toggleCartModal);
closeCartButton.addEventListener('click', toggleCartModal);
closeProductDetailButton.addEventListener('click', closeProductDetail);

// Auth Modal Listeners
closeRegisterModalButton.addEventListener('click', closeRegisterModal);
closeLoginModalButton.addEventListener('click', closeLoginModal);
registerForm.addEventListener('submit', handleRegistration);
loginForm.addEventListener('submit', handleLogin);

switchToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeRegisterModal();
    openLoginModal();
});

switchToRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeLoginModal();
    openRegisterModal();
});

userActionContainer.addEventListener('click', () => {
    if (currentUser) {
        handleLogout();
    } else {
        openRegisterModal(); // Default to register, or could be login
    }
});

// Close modal if clicked outside content
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        toggleCartModal();
    }
    if (event.target === productDetailModal) {
        closeProductDetail();
    }
    if (event.target === registerModal) {
        closeRegisterModal();
    }
    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === checkoutModal) {
        closeCheckoutModal();
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const category = link.getAttribute('data-category');
        renderProducts(category);
    });
});

cartItemsList.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    const productId = target.dataset.id;
    if (target.classList.contains('increase')) {
        changeQuantity(productId, 1);
    } else if (target.classList.contains('decrease')) {
        changeQuantity(productId, -1);
    } else if (target.classList.contains('remove-item')) {
        removeFromCart(productId);
    }
});

// Checkout Modal Functions
function openCheckoutModal() {
    if (currentUser && currentUser.email) {
        checkoutEmailInput.value = currentUser.email;
    } else {
        checkoutEmailInput.value = ''; // Clear if no current user or email
    }
    checkoutNameInput.value = ''; // Clear previous entries
    checkoutAddressInput.value = ''; // Clear previous entries
    checkoutErrorMessage.textContent = '';
    checkoutModal.classList.add('show');
    // It's often good practice to hide the cart modal when checkout modal is open
    // cartModal.classList.remove('show'); // Optional: Hide cart modal
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
    // If cart modal was hidden, you might want to show it again if checkout is cancelled
    // if (cart.length > 0) cartModal.classList.add('show'); // Optional: Re-show cart
}

function handleCheckoutSubmit(event) {
    //event.preventDefault();
    const name = checkoutNameInput.value.trim();
    const address = checkoutAddressInput.value.trim();
    const email = checkoutEmailInput.value.trim();

    checkoutErrorMessage.textContent = '';

    if (!name || !address || !email) {
        checkoutErrorMessage.textContent = 'Todos los campos son obligatorios.';
        playSound('action_failed');
        return;
    }
    // Basic email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        checkoutErrorMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
        playSound('action_failed');
        return;
    }

    // Simulate order placement
    confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 }
    });
    
    playSound('order_success');
    showFeedback(`¡Gracias por tu pedido, ${name}! Recibirás una confirmación en ${email}.`, 'success');
    
    cart = [];
    saveCart();
    updateCartDisplay();
    
    closeCheckoutModal();
    if (cartModal.classList.contains('show')) { // Close cart modal if it's open
        toggleCartModal();
    }
}

checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        showFeedback("Tu carrito está vacío.", 'warning');
        return;
    }

    // OLD LOGIC (requiring login):
    // if (!currentUser) {
    //     showFeedback("Por favor, inicia sesión para proceder al pago.", 'warning');
    //     if (cartModal.classList.contains('show')) {
    //         toggleCartModal(); // Close cart modal before opening login
    //     }
    //     openLoginModal();
    //     return;
    // }
    
    // NEW LOGIC: Always open checkout modal if cart is not empty.
    // Login is no longer a prerequisite to *seeing* the checkout form.
    // The checkout form itself will gather necessary contact info.
    // If the user *is* logged in, their email will be pre-filled by openCheckoutModal.
    // If not, they can proceed as a guest.
    
    if (cartModal.classList.contains('show')) { 
        toggleCartModal(); // Close cart modal before opening checkout
    }
    openCheckoutModal(); 
});

// Checkout Modal Event Listeners
closeCheckoutModalButton.addEventListener('click', closeCheckoutModal);
checkoutForm.addEventListener('submit', handleCheckoutSubmit);

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentCategory); 
    updateCartDisplay(); 
    updateLoginStatusUI();

    // Load sounds
    loadSound('login_success', 'login_success.mp3');
    loadSound('registration_success', 'registration_success.mp3');
    loadSound('logout_success', 'logout_success.mp3');
    loadSound('action_failed', 'action_failed.mp3');
    loadSound('order_success', 'order_success.mp3');

    // Remove old registerIcon event listener if it exists from previous setup
    const oldRegisterIcon = document.getElementById('registerIcon'); // If ID was 'registerIcon'
    if (oldRegisterIcon) {
        // To be safe, clone and replace if complex listeners were attached
        // For simple cases, just ensure no duplicate listeners are added
        // Here, we are using userActionContainer so previous listeners on a different ID are fine.
    }
});
