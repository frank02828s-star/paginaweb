/* AYUDA PAGE JAVASCRIPT */

document.addEventListener('DOMContentLoaded', function() {
    loadFAQs();
    initHelpLogin();
});

function loadFAQs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    container.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <button class="faq-question">
                <span>${faq.title}</span>
                <span class="material-icons">expand_more</span>
            </button>
            <div class="faq-answer">
                <p>${faq.content}</p>
            </div>
        </div>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const wasOpen = item.classList.contains('open');

            // Close all items
            container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

            // Toggle current item
            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });
}

function initHelpLogin() {
    const helpLoginBtn = document.getElementById('helpLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const modalOverlay = document.getElementById('modalOverlay');

    if (helpLoginBtn && loginModal) {
        helpLoginBtn.addEventListener('click', function() {
            loginModal.classList.add('open');
            modalOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
}
