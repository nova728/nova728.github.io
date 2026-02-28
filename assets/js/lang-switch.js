/**
 * lang-switch.js
 * Bilingual (EN / ZH) toggle for nova728.github.io
 * Uses data-en / data-zh attributes on elements.
 * Language preference is persisted in localStorage.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'preferred-lang';
  const DEFAULT_LANG = 'en';

  /* ── Apply language to all tagged elements ── */
  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      const text = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
      if (text !== null) el.innerHTML = text;
    });

    /* Toggle visibility blocks (data-lang-only="en" or "zh") */
    document.querySelectorAll('[data-lang-only]').forEach(function (el) {
      el.style.display = el.getAttribute('data-lang-only') === lang ? '' : 'none';
    });

    /* Update button label */
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    });

    /* Update <html lang=""> */
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── Insert the toggle button into the masthead ── */
  function insertButton(lang) {
    /* Avoid duplicates */
    if (document.querySelector('.lang-toggle-btn')) return;

    var btn = document.createElement('button');
    btn.className = 'lang-toggle-btn';
    btn.textContent = lang === 'zh' ? 'EN' : '中文';
    btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    btn.addEventListener('click', function () {
      var current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      applyLang(current === 'zh' ? 'en' : 'zh');
    });

    /* Try to append next to the site nav */
    var nav = document.querySelector('.greedy-nav, .masthead__menu, nav.site-nav');
    if (nav) {
      nav.appendChild(btn);
    } else {
      /* Fallback: fixed position */
      btn.style.cssText = 'position:fixed;top:12px;right:16px;z-index:9999;';
      document.body.appendChild(btn);
    }
  }

  /* ── Boot ── */
  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    insertButton(saved);
    applyLang(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
