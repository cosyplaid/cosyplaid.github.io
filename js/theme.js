// ========================================
// МОДУЛЬ: Тема
// ========================================
window.App = window.App || {};

window.App.theme = (function() {
    'use strict';

    function init() {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;

        const htmlElement = document.documentElement;

        // Синхронизируем чекбокс с текущей темой
        toggle.checked = htmlElement.getAttribute('data-theme') === 'light';

        // Ручное переключение
        toggle.addEventListener('change', function() {
            const theme = this.checked ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });

        // Реакция на смену системной темы (если пользователь не выбирал)
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        mediaQuery.addEventListener('change', (e) => {
            // Если пользователь уже сделал выбор — не трогаем
            if (localStorage.getItem('theme')) return;

            const theme = e.matches ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', theme);
            toggle.checked = theme === 'light';
        });
    }

    return { init };
})();
