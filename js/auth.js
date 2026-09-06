/**
 * Sakith Harvan Technologies - Client-Side Session Authentication
 * Pure Frontend: Uses browser sessionStorage (No backend, No database)
 * Persists for the active browser session tab.
 */

(function () {
  const STORAGE_KEY = 'vibe_user';

  function getCurrentUser() {
    try {
      return sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setCurrentUser(username) {
    try {
      sessionStorage.setItem(STORAGE_KEY, username.trim());
    } catch (e) {
      console.warn('SessionStorage unavailable', e);
    }
  }

  function clearCurrentUser() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('SessionStorage unavailable', e);
    }
  }

  window.logoutSession = function () {
    clearCurrentUser();
    window.location.reload();
  };

  window.loginSession = function (username, redirectUrl) {
    if (!username || !username.trim()) return false;
    setCurrentUser(username);
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
    return true;
  };

  function renderAuthUI() {
    const authSlots = document.querySelectorAll('.auth-slot');
    const user = getCurrentUser();

    authSlots.forEach((slot) => {
      if (user) {
        const initial = user.charAt(0).toUpperCase();
        slot.innerHTML = `
          <div class="user-session-pill" title="Active Session: ${escapeHtml(user)}">
            <span class="user-avatar" aria-hidden="true">${initial}</span>
            <span class="user-name">${escapeHtml(user)}</span>
            <button type="button" class="btn-logout" onclick="logoutSession()" aria-label="Log out of session">Logout</button>
          </div>
        `;
      } else {
        slot.innerHTML = `
          <a href="login.html" class="btn-nav-login" aria-label="Sign in">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>Login</span>
          </a>
        `;
      }
    });

    // Check if on home page with welcome banner
    const welcomeBanner = document.getElementById('session-welcome-banner');
    if (welcomeBanner) {
      if (user) {
        welcomeBanner.style.display = 'block';
        const userEl = document.getElementById('banner-user-name');
        if (userEl) userEl.textContent = user;
      } else {
        welcomeBanner.style.display = 'none';
      }
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Render on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAuthUI);
  } else {
    renderAuthUI();
  }
})();
