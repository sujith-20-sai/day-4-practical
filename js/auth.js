/**
 * Sakith Harvan Technologies - Client-Side Session Authentication
 * Pure Frontend: Uses browser sessionStorage (No backend, No database)
 * Automatically enforces login guard: opens login.html first if not authenticated.
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
    window.location.replace('login.html');
  };

  window.loginSession = function (username, redirectUrl) {
    if (!username || !username.trim()) return false;
    setCurrentUser(username);
    window.location.replace(redirectUrl || 'index.html');
    return true;
  };

  // Immediate Session Route Guard
  const path = window.location.pathname.toLowerCase();
  const isLoginPage = path.endsWith('login.html') || path.endsWith('/login');
  const user = getCurrentUser();

  if (!user && !isLoginPage) {
    // If user has not logged in, redirect directly to login.html
    window.location.replace('login.html');
    return;
  } else if (user && isLoginPage) {
    // If already logged in and visiting login.html, redirect directly to index.html
    window.location.replace('index.html');
    return;
  }

  function renderAuthUI() {
    const authSlots = document.querySelectorAll('.auth-slot');
    const activeUser = getCurrentUser();

    authSlots.forEach((slot) => {
      if (activeUser) {
        const initial = activeUser.charAt(0).toUpperCase();
        slot.innerHTML = `
          <div class="user-session-pill" title="Active Session: ${escapeHtml(activeUser)}">
            <span class="user-avatar" aria-hidden="true">${initial}</span>
            <span class="user-name">${escapeHtml(activeUser)}</span>
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

    // Welcome banner on home page
    const welcomeBanner = document.getElementById('session-welcome-banner');
    if (welcomeBanner) {
      if (activeUser) {
        welcomeBanner.style.display = 'block';
        const userEl = document.getElementById('banner-user-name');
        if (userEl) userEl.textContent = activeUser;
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

  // Render on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAuthUI);
  } else {
    renderAuthUI();
  }
})();
