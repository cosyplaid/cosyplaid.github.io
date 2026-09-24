// ========================================
// МОДУЛЬ: Навигация
// ========================================
window.App = window.App || {};

window.App.nav = (function() {
    'use strict';

    // ----------------------------------------
    // Бургер-меню
    // ----------------------------------------
    function initBurger() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');

        if (!burger || !nav) return;

        burger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('nav--open');
            burger.classList.toggle('burger--active', isOpen);
            burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Закрытие меню при клике на ссылку (на мобилке)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--open');
                burger.classList.remove('burger--active');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----------------------------------------
    // Активный раздел в навигации
    // ----------------------------------------
    function initActiveSection() {
        const sectionIds = ['about', 'projects', 'contacts'];
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
        if (!sections.length || !navLinks.length) return;

        let currentId = null;

        function setActive(id) {
            if (currentId === id) return;
            currentId = id;

            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('nav__link--active', isActive);
                if (isActive) {
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => {
                    const aDist = Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2 - window.innerHeight / 2);
                    const bDist = Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2 - window.innerHeight / 2);
                    return aDist - bDist;
                });

            if (visible.length > 0) {
                setActive(visible[0].target.id);
            } else {
                setActive(null);
            }
        }, {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        });

        sections.forEach(s => observer.observe(s));
    }

    // ----------------------------------------
    // Точка входа
    // ----------------------------------------
    function init() {
        initBurger();
        initActiveSection();
    }

    return { init };
})();