// ========================================
// МОДУЛЬ: Прайс (табы + скролл наверх)
// ========================================
window.App = window.App || {};

window.App.price = (function() {
    'use strict';

    const VALID = ['sites', 'bots', 'games', 'apps'];
    const DEFAULT = 'sites';

    function readHash() {
        const hash = location.hash.replace('#', '');
        return VALID.includes(hash) ? hash : null;
    }

    function setActive(target) {
        if (!VALID.includes(target)) return;

        const tabs = document.querySelectorAll('[data-price-tab]');
        const contents = document.querySelectorAll('[data-price-content]');

        tabs.forEach(tab => {
            const isActive = tab.dataset.priceTab === target;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        contents.forEach(content => {
            const isActive = content.dataset.priceContent === target;
            content.classList.toggle('active', isActive);
        });
    }

    function initLogoScroll() {
        const logo = document.querySelector('.top-logo');
        if (!logo) return;

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
        });
    }

    function init() {
        const tabs = document.querySelectorAll('[data-price-tab]');
        if (!tabs.length) return;

        setActive(readHash() || DEFAULT);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.priceTab;
                if (!VALID.includes(target)) return;

                history.replaceState(null, '', '#' + target);
                setActive(target);
            });
        });

        window.addEventListener('hashchange', () => {
            setActive(readHash() || DEFAULT);
        });

        initLogoScroll();
    }

    return { init };
})();