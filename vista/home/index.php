<?php
require_once '../../modelo/conexion.php';
?>

<html lang="es">
<head>
    <meta charset="UTF-8">


    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Deportiva Moderna</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <h1 class="logo"></h1>
             <img id="productDetailImage" src="logojj.png" alt="Producto" width="80px" class="product-detail-image">
               <nav>
                <ul style=  "list-style-type: none; display: flex; gap: 60px; margin: 0; padding: 0">

                    <li><a href="#" class="nav-link active" data-category="inicio">Inicio</a></li>
                    <li><a href="#" class="nav-link" data-category="caballeros">Caballeros</a></li>
                    <li><a href="#" class="nav-link" data-category="damas">Damas</a></li>
                    <li><a href="#" class="nav-link" data-category="ninos">Niños</a></li>
                    <li><a href="#" class="nav-link" data-category="implementos">Implementos</a></li>
                </ul>
            </nav>

            <div class="header-actions">
                <div class="cart-icon-container" id="cartIconContainer">
                    <i class="fas fa-shopping-cart" title="Carrito"></i>
                    <span id="cartCountBadge">0</span>
                </div>
                <div id="userActionContainer" class="icon-action">
                    <!-- Icon will be set by JS: fa-user-plus for register/login, fa-user-check or fa-sign-out-alt for logout -->
                    <i class="fas fa-user-plus" title="Registro/Login"></i> 
                </div>
                <span id="loggedInUser" style="margin-left: 10px; font-size: 0.9rem;"></span>
            </div>
        </div>
    </header>
   <main>
    <section class="hero">
            <h2>Descubre lo Último en Moda Deportiva</h2>
            <p>Equípate con las mejores marcas y diseños innovadores.</p>
        </section>

            <div class="container">
            <h2 id="current-category-title">Caballeros</h2>
            <div id="product-grid" class="product-grid">
                <!-- Los productos se cargarán aquí por JavaScript -->
            </div>
        </div>
    </main>

    <div id="cart-modal" class="cart-modal">
        <div class="cart-modal-content">
            <div class="cart-modal-header">
                <h2>Tu Carrito</h2>
                <button id="closeCartButton" class="close-cart-button">&times;</button>
            </div>
            <div id="cart-items-list">
                <p class="empty-cart-message">Tu carrito está vacío.</p>
                <!-- Los artículos del carrito se cargarán aquí -->
            </div>
            <div class="cart-modal-footer">
                <p>Total: <strong id="cart-total-price">$0.00</strong></p>
                <button id="checkoutButton" class="checkout-button">Proceder al Pago</button>
            </div>
        </div>
    </div>
    
    <div id="product-detail-modal" class="product-detail-modal">
        <div class="product-detail-modal-content">
            <button id="closeProductDetailButton" class="close-product-detail-button">&times;</button>
            <img id="productDetailImage" src="" alt="Producto" class="product-detail-image">
            <h3 id="productDetailName">Nombre del Producto</h3>
            <p id="productDetailDescription">Descripción detallada del producto.</p>
            <p class="product-detail-price">Precio: <span id="productDetailPrice">$0.00</span></p>
            <button id="addToCartFromDetail" class="add-to-cart-button">Añadir al Carrito</button>
        </div>
    </div>
    <!-- Registration Modal -->
    <div id="register-modal" class="auth-modal">
        <div class="auth-modal-content">
            <div class="auth-modal-header">
                <h2>Crear Cuenta</h2>
                <button id="closeRegisterModalButton" class="close-auth-modal-button">&times;</button>
            </div>
            <form id="registerForm" method="POST" action="../../controlador/registro.php">
                <div class="form-group">
                    <label for="regUsername">Nombre de Usuario:</label>
                    <input type="text" id="regUsername" name="nombre" required>
                </div>
                <div class="form-group">
                    <label for="regEmail">Correo Electrónico:</label>
                    <input type="email" id="regEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="regPassword">Contraseña:</label>
                    <input type="password" id="regPassword" name="password" required minlength="6">
                </div>
                <div class="form-group">
                    <label for="regConfirmPassword">Confirmar Contraseña:</label>
                    <input type="password" id="regConfirmPassword" name="password" required minlength="6">
                </div>
                <p id="registerErrorMessage" class="error-message"></p>
                <button type="submit" class="auth-button">Registrarse</button>
            </form>
            <p class="auth-switch">¿Ya tienes cuenta? <a href="#" id="switchToLoginLink">Inicia Sesión</a></p>
        </div>
    </div>

    <!-- Login Modal -->
    <div id="login-modal" class="auth-modal">
        <div class="auth-modal-content">
            <div class="auth-modal-header">
                <h2>Iniciar Sesión</h2>
                <button id="closeLoginModalButton" class="close-auth-modal-button">&times;</button>
            </div>
            <form id="loginForm">
                <div class="form-group">
                    <label for="loginEmailOrUsername">Email o Nombre de Usuario:</label>
                    <input type="text" id="loginEmailOrUsername" name="loginEmailOrUsername" required>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Contraseña:</label>
                    <input type="password" id="loginPassword" name="loginPassword" required>
                </div>
                <p id="loginErrorMessage" class="error-message"></p>
                <button type="submit" class="auth-button">Ingresar</button>
            </form>
            <p class="auth-switch">¿No tienes cuenta? <a href="#" id="switchToRegisterLink">Regístrate</a></p>
        </div>
    </div>

    <!-- Checkout Modal -->
    <div id="checkout-modal" class="checkout-flow-modal">
        <div class="auth-modal-content">
            <div class="auth-modal-header">
                <h2>Información de Envío y Pago</h2>
                <button id="closeCheckoutModalButton" class="close-auth-modal-button">&times;</button>
            </div>
            <form id="checkoutForm" method ="POST" action ="../../controlador/carrito.php">
                <div class="form-group">
                    <label for="checkoutName">Nombre Completo:</label>
                    <input type="text" id="checkoutName" name="nombre" required>
                </div>
                <div class="form-group">
                    <label for="checkoutAddress">Dirección de Envío:</label>
                    <input type="text" id="checkoutAddress" name="direccion" required>
                </div>
                <div class="form-group">
                    <label for="checkoutEmail">Correo Electrónico de Contacto:</label>
                    <input type="email" id="checkoutEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="checkoutAddress">Nombre del producto:</label>
                    <input type="text" id="checkoutAddress" name="nombreproducto" required>
                </div>
                <p id="checkoutErrorMessage" class="error-message"></p>
                <button type="submit" class="auth-button">Confirmar Pedido</button>
            </form>
        </div>
    </div>

    <footer>
    <span class="facebook-icon" style="display: inline-flex; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M8.94 6.5H10.5V5H9C7.9 5 7 5.9 7 7v1H5v2h2v5h2v-5h1.6l.4-2H9V7c0-.3.2-.5.5-.5z"/>
    </svg>
    <br>
    <span style="margin-left: 8px; font-size: 18px;">Facebook</span>
</span>

    <span class="twitter-icon" style="display: inline-flex; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg>
  
    <span style="margin-left: 8px; font-size: 18px;">Twitter</span>
    </span>
    
    <span class="bi bi-youtube" style="display: inline-flex; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>
    
    <span style="margin-left: 8px; font-size: 18px;">Youtube</span>
    
</span>
    </div>
</footer>

    <script type="importmap">
        {
            "imports": {
                "canvas-confetti": "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.module.mjs"
            }
        }
    </script>
    <script type="module" src="script.js"></script>
</body>
</html>
