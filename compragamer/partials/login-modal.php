    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <button class="modal-close" id="closeLogin">
                <span class="material-icons">close</span>
            </button>
            <!-- Login Form -->
            <div id="loginView">
                <h2>Iniciá sesión</h2>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" required>
                    </div>
                    <button type="submit" class="btn-primary">Ingresar</button>
                </form>
                <p class="register-link">¿No tenés cuenta? <a href="#" id="showRegister">Registrate</a></p>
            </div>
            <!-- Register Form -->
            <div id="registerView" style="display:none;">
                <h2>Crear cuenta</h2>
                <form id="registerForm" novalidate>
                    <div class="form-row-inline">
                        <div class="form-group" style="flex:1">
                            <label for="reg-firstname">Nombre</label>
                            <input type="text" id="reg-firstname" required maxlength="20" pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}" title="Solo letras (máx. 20 caracteres)" inputmode="text" placeholder="Tu nombre">
                        </div>
                        <div class="form-group" style="flex:1">
                            <label for="reg-lastname">Apellido</label>
                            <input type="text" id="reg-lastname" required maxlength="20" pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}" title="Solo letras (máx. 20 caracteres)" inputmode="text" placeholder="Tu apellido">
                        </div>
                    </div>
                    <div class="form-row-inline">
                        <div class="form-group" style="max-width:90px">
                            <label for="reg-doctype">Tipo</label>
                            <select id="reg-doctype" class="form-select-sm" required>
                                <option value="V">V</option>
                                <option value="E">E</option>
                                <option value="J">J</option>
                                <option value="G">G</option>
                                <option value="P">P</option>
                            </select>
                        </div>
                        <div class="form-group" style="flex:1">
                            <label for="reg-document">Documento</label>
                            <input type="text" id="reg-document" required inputmode="numeric" maxlength="8" minlength="8" pattern="\d{8}" title="Solo números (8 dígitos)" placeholder="Nro. de documento">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="reg-email">Correo electrónico</label>
                        <input type="email" id="reg-email" required maxlength="50" inputmode="email" placeholder="tucorreo@ejemplo.com" title="Ingresa un correo válido">
                    </div>
                    <div class="form-group">
                        <label for="reg-password">Contraseña</label>
                        <input type="password" id="reg-password" required minlength="6" maxlength="30" placeholder="Mínimo 6 caracteres" title="Mínimo 6 caracteres">
                    </div>
                    <button type="submit" class="btn-primary" id="registerBtn" disabled>Registrarse</button>
                </form>
                <p class="register-link">¿Ya tenés cuenta? <a href="#" id="showLogin">Iniciá sesión</a></p>
            </div>
        </div>
    </div>
    <div class="modal-overlay" id="modalOverlay"></div>

    <script>
    (function(){
        var loginBtn = document.getElementById('loginBtn');
        var loginModal = document.getElementById('loginModal');
        var modalOverlay = document.getElementById('modalOverlay');
        var closeLogin = document.getElementById('closeLogin');
        var loginForm = document.getElementById('loginForm');
        var registerForm = document.getElementById('registerForm');
        var showRegister = document.getElementById('showRegister');
        var showLogin = document.getElementById('showLogin');
        var loginView = document.getElementById('loginView');
        var registerView = document.getElementById('registerView');

        if (!loginBtn || !loginModal) return;

        function openModal() {
            loginModal.classList.add('open');
            modalOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            loginModal.classList.remove('open');
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });

        if (closeLogin) closeLogin.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && loginModal.classList.contains('open')) closeModal();
        });

        if (showRegister) {
            showRegister.addEventListener('click', function(e) {
                e.preventDefault();
                loginView.style.display = 'none';
                registerView.style.display = 'block';
            });
        }

        if (showLogin) {
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                registerView.style.display = 'none';
                loginView.style.display = 'block';
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (typeof showNotification === 'function') showNotification('Funcionalidad de login simulada');
                closeModal();
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (typeof showNotification === 'function') showNotification('Registro simulado exitosamente');
                closeModal();
            });
        }

        /* ── Real-time validation for register form ── */
        var regFields = {
            firstname: document.getElementById('reg-firstname'),
            lastname:  document.getElementById('reg-lastname'),
            document:  document.getElementById('reg-document'),
            email:     document.getElementById('reg-email'),
            password:  document.getElementById('reg-password')
        };
        var regBtn = document.getElementById('registerBtn');

        function sanitizeLettersOnly(el) {
            el.value = el.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        }
        function sanitizeDigitsOnly(el) {
            el.value = el.value.replace(/\D/g, '');
        }
        function isFieldValid(el) {
            if (!el || !el.value.trim()) return false;
            if (el.pattern && !new RegExp('^' + el.pattern + '$').test(el.value)) return false;
            if (el.minLength > 0 && el.value.length < el.minLength) return false;
            if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) return false;
            return true;
        }
        function toggleRegisterBtn() {
            if (!regBtn) return;
            var allValid = Object.keys(regFields).every(function(k) { return isFieldValid(regFields[k]); });
            regBtn.disabled = !allValid;
            regBtn.style.opacity = allValid ? '1' : '0.5';
            regBtn.style.cursor = allValid ? 'pointer' : 'not-allowed';
        }

        if (regFields.firstname) {
            regFields.firstname.addEventListener('input', function() { sanitizeLettersOnly(this); toggleRegisterBtn(); });
        }
        if (regFields.lastname) {
            regFields.lastname.addEventListener('input', function() { sanitizeLettersOnly(this); toggleRegisterBtn(); });
        }
        if (regFields.document) {
            regFields.document.addEventListener('input', function() { sanitizeDigitsOnly(this); toggleRegisterBtn(); });
        }
        if (regFields.email) {
            regFields.email.addEventListener('input', function() { toggleRegisterBtn(); });
        }
        if (regFields.password) {
            regFields.password.addEventListener('input', function() { toggleRegisterBtn(); });
        }
        toggleRegisterBtn();
    })();
    </script>
