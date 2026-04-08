(function () {
  function animateBackdropsAndModals() {
    document.querySelectorAll('.modal-backdrop').forEach(function (el) {
      el.classList.add('show');
    });

    document.querySelectorAll('.modal').forEach(function (modal) {
      if (modal.classList.contains('show')) return;
      if (modal.style.display === 'block' || modal.getAttribute('aria-modal') === 'true') {
        requestAnimationFrame(function () {
          modal.classList.add('show');
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const observer = new MutationObserver(function () {
      animateBackdropsAndModals();
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }

    animateBackdropsAndModals();
  });
})();