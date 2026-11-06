// ========================================
// МОДУЛЬ: Прайс (табы + скролл наверх + калькулятор цен)
// ========================================
window.App = window.App || {};

window.App.price = (function() {
    'use strict';

    const VALID = ['sites', 'bots', 'games', 'apps', 'marketing'];
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

    // ========================================
    // Ставка и цены
    // ========================================
    function getRate() {
        // Читаем ставку из data-rate на body (по умолчанию 1500)
        const bodyRate = document.body.dataset.rate;
        return bodyRate ? parseInt(bodyRate, 10) : 1500;
    }

    function updateRateUI() {
        const rate = getRate();
        const formattedRate = new Intl.NumberFormat('ru-RU').format(rate);

        // 1. Обновляем текст в HERO
        const rateDisplays = document.querySelectorAll('[data-rate-display]');
        rateDisplays.forEach(el => {
            el.textContent = formattedRate;
        });

        // 2. Обновляем meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            // Заменяем "Средняя ставка x ₽/час" на актуальную
            metaDesc.setAttribute('content', 
                `Прайс-лист: сайты, боты, игры, приложения. Средняя ставка ${formattedRate} ₽/час. Ориентировочные цены, детальная смета по запросу.`
            );
        }
    }

    function calcPrices() {
        const rate = getRate();
        const cards = document.querySelectorAll('[data-price-card]');

        cards.forEach(card => {
            let totalHours = 0;

            // Проходимся по каждому этапу в карточке
            const stages = card.querySelectorAll('.price-stage[data-hours]');
            
            stages.forEach(stage => {
                const hours = parseFloat(stage.dataset.hours);
                if (isNaN(hours)) return;

                // Считаем сумму для конкретного этапа
                const cost = hours * rate;
                const costElement = stage.querySelector('[data-price-cost]');

                if (costElement) {
                    if (hours === 0) {
                        costElement.textContent = 'бесплатно';
                    } else {
                        const formattedCost = new Intl.NumberFormat('ru-RU').format(cost);
                        const formattedHours = hours % 1 === 0 ? hours : hours.toFixed(1).replace('.', ',');
                        costElement.textContent = `${formattedHours} ч / ${formattedCost} ₽`;
                    }
                }

                totalHours += hours;
            });

            // Обновляем Итог
            if (totalHours === 0) return;

            const totalPrice = totalHours * rate;
            const totalElement = card.querySelector('[data-price-total]');
            
            if (totalElement) {
                const formattedPrice = new Intl.NumberFormat('ru-RU').format(totalPrice);
                const formattedHours = totalHours % 1 === 0 ? totalHours : totalHours.toFixed(1).replace('.', ',');
                totalElement.textContent = `${formattedHours} ч / ${formattedPrice} ₽`;
            }
        });
    }

    function init() {
        // Обновляем UI (ставку и meta) при загрузке
        updateRateUI();
        
        // Считаем цены
        calcPrices();

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
        initAccordionClose();
    }

    // ========================================
    // Закрытие аккордеона по клику на контент
    // ========================================
    function initAccordionClose() {
        document.querySelectorAll('.price-card__body').forEach(body => {
            body.addEventListener('click', (e) => {
                // Находим родительский <details>
                const details = body.closest('details');
                if (!details) return;

                // Проверяем, что клик был не по ссылке (чтобы не мешать переходам)
                if (e.target.closest('a')) return;

                // Закрываем аккордеон
                details.removeAttribute('open');
            });
        });
    }

    return { init };
})();