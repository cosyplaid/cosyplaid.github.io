// ========================================
// Точка входа: запуск модулей
// ========================================
(function() {
    'use strict';
    
    let initialized = false;

    document.addEventListener('DOMContentLoaded', function() {
        
        if (initialized) return;      
        initialized = true;
        
        // Тема — на всех страницах, где есть тумблер
        if (window.App?.theme) window.App.theme.init();

        // Навигация — бургер + активный раздел
        if (window.App?.nav) window.App.nav.init();

        // Модалки — на страницах, где они есть
        if (window.App?.modal) window.App.modal.init();
        
        // Switch для резюме
        if (window.App?.resume) window.App.resume.init(); 
        
        // Switch для прайса
        if (window.App?.price) window.App.price.init(); 
    });
})();