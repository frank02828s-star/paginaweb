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
                <form id="registerForm">
                    <div class="form-group">
                        <label for="reg-name">Nombre completo</label>
                        <input type="text" id="reg-name" required>
                    </div>
                    <div class="form-group">
                        <label for="reg-email">Email</label>
                        <input type="email" id="reg-email" required>
                    </div>
                    <div class="form-group">
                        <label for="reg-password">Contraseña</label>
                        <input type="password" id="reg-password" required minlength="6">
                    </div>
                    <div class="form-group">
                        <label for="reg-document">Documento</label>
                        <div class="form-row-inline">
                            <select id="reg-doctype" class="form-select-sm">
                                <option value="V">V</option>
                                <option value="E">E</option>
                                <option value="J">J</option>
                                <option value="P">P</option>
                            </select>
                            <input type="text" id="reg-document" required placeholder="Número de documento" pattern="[0-9]{6,10}">
                        </div>
                    </div>
                    <button type="submit" class="btn-primary">Registrarse</button>
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
    })();
    </script>
