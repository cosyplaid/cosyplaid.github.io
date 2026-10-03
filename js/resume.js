// ========================================
// МОДУЛЬ: Переключатель резюме
// ========================================
window.App = window.App || {};

window.App.resume = (function() {
    'use strict';

    const PDF_LINKS = {
        unity:     'resources/resume-unity.pdf',
        fullstack: 'resources/resume-fullstack.pdf',
    };

    const VALID = Object.keys(PDF_LINKS);
    const DEFAULT = 'unity';

    // Используется только для того, чтобы не анимировать первый рендер
    let currentTarget = null;

    function readHash() {
        const hash = location.hash.replace('#', '');
        return VALID.includes(hash) ? hash : null;
    }

    // Анимация появления для блока
    function animateIn(el) {
        if (!el || typeof el.animate !== 'function') return;
        el.animate(
            [
                { opacity: 0, transform: 'translateY(6px)' },
                { opacity: 1, transform: 'none' }
            ],
            { duration: 500, easing: 'ease-out' }
        );
    }

    function setActive(target) {
        if (!VALID.includes(target)) return;

        const tabs = document.querySelectorAll('[data-resume-tab]');
        const contents = document.querySelectorAll('[data-resume-content]');
        const downloadBtn = document.getElementById('resume-download');

        const changed = currentTarget !== target;
        currentTarget = target;

        // Табы
        tabs.forEach(tab => {
            const isActive = tab.dataset.resumeTab === target;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Контент + анимация
        contents.forEach(content => {
            const isActive = content.dataset.resumeContent === target;
            content.classList.toggle('active', isActive);
            if (changed && isActive) animateIn(content);
        });

        // Подсветка специальности
        document.querySelectorAll('[data-resume-role]').forEach(part => {
            part.classList.toggle('active', part.dataset.resumeRole === target);
        });

        // PDF
        if (downloadBtn && PDF_LINKS[target]) {
            downloadBtn.setAttribute('href', PDF_LINKS[target]);
        }
    }

    function init() {
        const tabs = document.querySelectorAll('[data-resume-tab]');
        if (!tabs.length) return;

        setActive(readHash() || DEFAULT);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.resumeTab;
                if (location.hash !== '#' + target) {
                    location.hash = target;   // → hashchange → setActive
                } else {
                    setActive(target);        // хэш уже такой — переключаем вручную
                }
            });
        });

        window.addEventListener('hashchange', () => {
            setActive(readHash() || DEFAULT);
        });
    }

    return { init };
})();