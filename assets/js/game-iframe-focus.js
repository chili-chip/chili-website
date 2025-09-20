(function() {
  function initContainer(container) {
    const frame = container.querySelector('iframe[data-game-frame]');
    const btn = container.querySelector('[data-game-focus-btn]');
    if (!frame || !btn) return;

    let activatedOnce = false;

    function hideOverlay() { btn.style.display = 'none'; }
    function showOverlay(resume = false) {
      btn.textContent = 'click to focus';
      btn.style.display = 'flex';
      btn.focus();
    }
    function activate() {
      frame.focus();
      hideOverlay();
      activatedOnce = true;
    }

    btn.addEventListener('click', activate);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });

    document.addEventListener('mousedown', (e) => {
      if (!activatedOnce) return;
      if (!container.contains(e.target)) {
        setTimeout(() => { if (document.activeElement !== frame) showOverlay(true); }, 0);
      }
    });
  }

  function initAll() {
    document.querySelectorAll('[data-game-iframe]:not([data-game-init])').forEach(c => {
      c.setAttribute('data-game-init', '');
      initContainer(c);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll); else initAll();
})();
