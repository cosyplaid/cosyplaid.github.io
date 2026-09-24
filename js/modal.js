// ========================================
// МОДУЛЬ: Модальные окна
// ========================================
window.App = window.App || {};

window.App.modal = (function() {
    'use strict';

    const FOCUSABLE_SELECTOR = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    let lastFocusedElement = null;
    let activeModal = null;

    // ----------------------------------------
    // Скролл
    // ----------------------------------------
    function lockScroll() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
        document.body.classList.add('modal-open');
    }

    function unlockScroll() {
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('--scrollbar-width');
    }

    // ----------------------------------------
    // Фокус
    // ----------------------------------------
    function getFocusable(modal) {
        return Array.from(modal.querySelectorAll(FOCUSABLE_SELECTOR))
            .filter(el => el.offsetParent !== null || el === document.activeElement);
    }

    // ----------------------------------------
    // Открытие / закрытие
    // ----------------------------------------
    function openModal(modal) {
        if (!modal) return;

        lastFocusedElement = document.activeElement;
        activeModal = modal;

        const scrollContainer = modal.querySelector('.modal__scroll');
        if (scrollContainer) scrollContainer.scrollTop = 0;

        modal.classList.add('active');
        lockScroll();

        const focusables = getFocusable(modal);
        const closeBtn = modal.querySelector('.modal__close');
        (closeBtn || focusables[0] || modal).focus();
    }

    function closeModal(modal) {
        if (!modal) return;

        modal.classList.remove('active');
        activeModal = null;
        unlockScroll();

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }

    // ----------------------------------------
    // Обработчики
    // ----------------------------------------
    function initOpeners() {
        document.querySelectorAll('[data-modal]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const modalId = this.dataset.modal;
                const modal = document.getElementById(`modal-${modalId}`);

                if (modal) {
                    openModal(modal);
                } else {
                    console.warn(`Модалка с id "modal-${modalId}" не найдена`);
                }
            });
        });
    }

    function initClosers() {
        // Крестик
        document.addEventListener('click', function(e) {
            const closeBtn = e.target.closest('.modal__close');
            if (closeBtn) {
                closeModal(closeBtn.closest('.modal-overlay'));
            }
        });

        // Клик по оверлею
        document.addEventListener('click', function(e) {
            const overlay = e.target.closest('.modal-overlay');
            if (overlay && e.target === overlay) {
                closeModal(overlay);
            }
        });
    }
    
    // Обработка клавиш
    function initKeyboard() {
        document.addEventListener('keydown', function(e) {
            if (!activeModal) return;

            // Escape — закрыть
            if (e.key === 'Escape') {
                e.preventDefault();
                closeModal(activeModal);
                return;
            }

            // Focus trap
            if (e.key === 'Tab') {
                const focusables = getFocusable(activeModal);
                if (focusables.length === 0) {
                    e.preventDefault();
                    return;
                }

                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const current = document.activeElement;

                if (e.shiftKey) {
                    if (current === first || !activeModal.contains(current)) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (current === last || !activeModal.contains(current)) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        });
    }

    // Копирование значения в буфер обмена
    function initCopyButtons() {
        document.querySelectorAll('[data-copy]').forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.dataset.copy;
                const message = btn.closest('.modal__body')?.querySelector('.email-copy__message');
                const messageText = window.I18n?.current === 'en'
                    ? 'Copied to clipboard'
                    : 'Скопировано в буфер';

                const showSuccess = () => {
                    btn.classList.add('is-copied');

                    if (message) {
                        message.textContent = messageText;
                        message.classList.add('is-visible');
                    }

                    setTimeout(() => {
                        btn.classList.remove('is-copied');
                        if (message) message.classList.remove('is-visible');
                    }, 2000);
                };

                const fallbackCopy = () => {
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        showSuccess();
                    } catch (err) {
                        console.warn('Copy failed:', err);
                    }
                    document.body.removeChild(textarea);
                };

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text)
                        .then(showSuccess)
                        .catch(fallbackCopy);
                } else {
                    fallbackCopy();
                }
            });
        });
    }
    
    // ----------------------------------------
    // Точка входа
    // ----------------------------------------
    function init() {
        // Если на странице нет ни одной модалки — не инициализируемся
        if (!document.querySelector('.modal-overlay')) return;

        initOpeners();
        initClosers();
        initKeyboard();
        initCopyButtons();
    }
    
    return { init, open: openModal, close: closeModal };
})();