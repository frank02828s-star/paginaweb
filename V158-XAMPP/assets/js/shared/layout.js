// layout.js - Inyecta header/footer, auth y comportamiento compartido

async function injectHTML(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(url, { cache: 'no-cache', credentials: 'same-origin' });
    if (!res.ok) throw new Error(`No se pudo cargar ${url}: ${res.status}`);
    el.innerHTML = await res.text();
}

function setActiveNav() {
    let path = window.location.pathname.toLowerCase();
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);

    let key = 'index';
    if (path === '/' || path.endsWith('/index.html') || path.endsWith('/index.php')) key = 'index';
    else if (path.endsWith('/builder') || path.endsWith('/builder.html') || path.endsWith('/builder.php')) key = 'builder';
    else if (path.endsWith('/products') || path.endsWith('/products.html') || path.endsWith('/products.php')) key = 'products';
    else if (path.endsWith('/cart') || path.endsWith('/cart.html') || path.endsWith('/cart.php')) key = 'cart';

    document.querySelectorAll('[data-nav]').forEach(a => a.classList.remove('nav-active'));
    const active = document.querySelector(`[data-nav="${key}"]`);
    if (active) active.classList.add('nav-active');
}

async function fetchAuthState() {
    const res = await fetch('/auth/me.php', { credentials: 'same-origin' });
    return await res.json();
}

function loginModalTemplate() {
    return `
    <div class="header-login-modal" id="login-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
        <div class="header-login-modal__dialog">
            <button type="button" class="header-login-modal__close" id="loginModalCloseBtn" aria-label="Cerrar">
                <span aria-hidden="true">×</span>
            </button>

            <div class="header-login-modal__body">
                <div class="header-login-modal__view" data-auth-view="login">
                    <h2 id="login-modal-title" class="header-login-modal__title">Iniciar sesión</h2>
                    <div class="header-auth-feedback" id="authFeedback"></div>
                    <form class="header-login-form" id="login-form" novalidate>
                        <div class="header-login-form__group">
                            <label for="login-email">Correo electrónico</label>
                            <input type="email" id="login-email" name="email" placeholder="correo@ejemplo.com" autocomplete="email" required>
                        </div>
                        <div class="header-login-form__group">
                            <label for="login-password">Contraseña</label>
                            <div class="header-login-form__password-wrap">
                                <input type="password" id="login-password" name="password" placeholder="Ingresa tu contraseña" autocomplete="current-password" required>
                                <button type="button" class="header-login-form__toggle" id="loginPasswordToggle" aria-label="Mostrar contraseña">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div class="header-login-form__links">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" class="header-login-form__submit">Iniciar sesión</button>
                        <p class="header-login-form__signup">
                            ¿No tienes una cuenta? <a href="#" id="showRegisterLink">Crear cuenta</a>
                        </p>
                    </form>
                </div>

                <div class="header-login-modal__view is-hidden" data-auth-view="register">
                    <h2 class="header-login-modal__title">Crear cuenta</h2>
                    <div class="header-auth-feedback" id="registerFeedback"></div>
                    <form class="header-login-form" id="register-form" novalidate>
                        <div class="header-login-form__row">
                            <div class="header-login-form__group">
                                <label for="register-first-name">Nombre</label>
                                <input type="text" id="register-first-name" name="first_name" required>
                            </div>
                            <div class="header-login-form__group">
                                <label for="register-last-name">Apellido</label>
                                <input type="text" id="register-last-name" name="last_name" required>
                            </div>
                        </div>

                        <div class="header-login-form__group">
                            <label for="register-id-number">Cédula</label>
                            <div class="header-login-form__id-wrap">
                                <select id="register-id-type" name="id_type" required>
                                    <option value="">Tipo</option>
                                    <option value="V">V</option>
                                    <option value="E">E</option>
                                    <option value="J">J</option>
                                    <option value="P">P</option>
                                    <option value="G">G</option>
                                </select>
                                <input type="text" id="register-id-number" name="id_number" inputmode="numeric" required>
                            </div>
                        </div>

                        <div class="header-login-form__group">
                            <label for="register-email">Correo electrónico</label>
                            <input type="email" id="register-email" name="email" autocomplete="email" required>
                        </div>

                        <div class="header-login-form__group">
                            <label for="register-password">Contraseña</label>
                            <div class="header-login-form__password-wrap">
                                <input type="password" id="register-password" name="password" autocomplete="new-password" required>
                                <button type="button" class="header-login-form__toggle" id="registerPasswordToggle" aria-label="Mostrar contraseña">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                            <small class="header-login-form__hint">Mínimo 8 caracteres, mayúscula, minúscula, número y símbolo.</small>
                        </div>

                        <button type="submit" class="header-login-form__submit" id="registerSubmitBtn" disabled>Registrarme</button>
                        <p class="header-login-form__signup">
                            ¿Ya tienes una cuenta? <a href="#" id="showLoginLink">Iniciar sesión</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
}

function ensureAuthModal() {
    let modal = document.getElementById('login-modal');
    if (modal) return modal;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = loginModalTemplate().trim();
    modal = wrapper.firstElementChild;
    document.body.appendChild(modal);
    return modal;
}

function setAuthFeedback(targetId, message, ok) {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.textContent = message || '';
    el.className = 'header-auth-feedback' + (message ? (ok ? ' is-success' : ' is-error') : '');
}

function validateRegistrationForm() {
    const form = document.getElementById('register-form');
    const btn = document.getElementById('registerSubmitBtn');
    if (!form || !btn) return false;

    const data = Object.fromEntries(new FormData(form).entries());
    const password = String(data.password || '');
    const valid = !!data.first_name
        && !!data.last_name
        && !!data.id_type
        && /^[0-9]{5,20}$/.test(String(data.id_number || ''))
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ''))
        && password.length >= 8
        && /[A-Z]/.test(password)
        && /[a-z]/.test(password)
        && /[0-9]/.test(password)
        && /[^A-Za-z0-9]/.test(password);

    btn.disabled = !valid;
    return valid;
}

function togglePassword(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input || btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        }
    });
}

function wireAuthModal(authState) {
    const loginBtn = document.getElementById('loginBtn');
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userMenu = document.getElementById('headerUserMenu');
    const logoutBtn = document.getElementById('headerLogoutBtn');

    if (userMenuBtn && userMenu) {
        userMenuBtn.addEventListener('click', () => {
            const open = userMenu.classList.contains('is-open');
            userMenu.classList.toggle('is-open', !open);
            userMenuBtn.setAttribute('aria-expanded', String(!open));
        });
        document.addEventListener('click', (e) => {
            if (!userMenu.contains(e.target) && !userMenuBtn.contains(e.target)) {
                userMenu.classList.remove('is-open');
                userMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await fetch('/auth/logout.php', { method: 'POST', credentials: 'same-origin', headers: { 'Accept': 'application/json' } }).catch(() => null);
            window.location.reload();
        });
    }

    if (!loginBtn) return;

    const openModal = () => {
        const modal = ensureAuthModal();
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        requestAnimationFrame(() => modal.classList.add('is-open'));

        const close = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
            setTimeout(() => modal.remove(), 180);
        };

        const closeBtn = document.getElementById('loginModalCloseBtn');
        if (closeBtn && !closeBtn.dataset.bound) {
            closeBtn.dataset.bound = '1';
            closeBtn.addEventListener('click', close);
        }

        togglePassword('loginPasswordToggle', 'login-password');
        togglePassword('registerPasswordToggle', 'register-password');

        const loginView = modal.querySelector('[data-auth-view="login"]');
        const registerView = modal.querySelector('[data-auth-view="register"]');
        const showRegisterLink = document.getElementById('showRegisterLink');
        const showLoginLink = document.getElementById('showLoginLink');
        const switchView = (view) => {
            loginView.classList.toggle('is-hidden', view !== 'login');
            registerView.classList.toggle('is-hidden', view !== 'register');
        };

        if (showRegisterLink && !showRegisterLink.dataset.bound) {
            showRegisterLink.dataset.bound = '1';
            showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); switchView('register'); });
        }
        if (showLoginLink && !showLoginLink.dataset.bound) {
            showLoginLink.dataset.bound = '1';
            showLoginLink.addEventListener('click', (e) => { e.preventDefault(); switchView('login'); });
        }

        const registerForm = document.getElementById('register-form');
        if (registerForm && !registerForm.dataset.bound) {
            registerForm.dataset.bound = '1';
            registerForm.addEventListener('input', validateRegistrationForm);
            registerForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (!validateRegistrationForm()) return;
                setAuthFeedback('registerFeedback', '', false);
                const data = Object.fromEntries(new FormData(registerForm).entries());
                data.csrf = authState.csrf;
                const res = await fetch('/auth/register.php', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data),
                });
                const payload = await res.json();
                if (!payload.ok) {
                    setAuthFeedback('registerFeedback', payload.message || 'No se pudo crear la cuenta.', false);
                    return;
                }
                window.location.reload();
            });
        }

        const loginForm = document.getElementById('login-form');
        if (loginForm && !loginForm.dataset.bound) {
            loginForm.dataset.bound = '1';
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                setAuthFeedback('authFeedback', '', false);
                const data = Object.fromEntries(new FormData(loginForm).entries());
                data.csrf = authState.csrf;
                const res = await fetch('/auth/login.php', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data),
                });
                const payload = await res.json();
                if (!payload.ok) {
                    setAuthFeedback('authFeedback', payload.message || 'No se pudo iniciar sesión.', false);
                    return;
                }
                window.location.reload();
            });
        }
    };

    loginBtn.addEventListener('click', openModal);
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await injectHTML('#site-header', '/partials/header.php');
        await injectHTML('#site-footer', '/partials/footer.php');
        setActiveNav();

        const authState = await fetchAuthState().catch(() => ({ authenticated: false, csrf: '' }));
        wireAuthModal(authState);

        if (typeof updateCartCount === 'function') {
            updateCartCount();
        }
    } catch (err) {
        console.error(err);
    }
});
