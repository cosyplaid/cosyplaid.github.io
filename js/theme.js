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

        // Синхронизируем чекбокс с текущей темой.
        // Сама тема уже установлена инлайн-скриптом в <head>.
        toggle.checked = htmlElement.getAttribute('data-theme') === 'light';

        toggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    return { init };
})();

