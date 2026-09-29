// js/i18n.js
const translations = {
    ru: {
        // Titles
        'resume.docTitle': 'Резюме — Валентин Сенин',
        'resume.docDescription': 'Резюме Unity и Fullstack-разработчика',
        'index.docTitle': 'Валентин Сенин — Unity / Fullstack-разработчик',
        'index.docDescription': 'Личный сайт-визитка разработчика игр и веб-приложений. Unity, C#, PHP, React.',
        
        // Header
        'nav.about': 'Обо мне',
        'nav.projects': 'Проекты',
        'nav.contacts': 'Контакты',
        'nav.resume': 'Резюме',
        'logo.name': 'Cosyplaid',

        // Hero
        'hero.title': 'Привет, я <span class="hero__title-accent">Валентин</span>',
        'hero.role': 'Unity / Fullstack Developer',
        'hero.subtitle': 'Создаю сайты, игры, ботов и веб-приложения — от задумки до результата',

        // About
        'about.title': 'Обо мне',
        'about.p1': '<strong>Unity и C# разработчик, fullstack.</strong>',
        'about.p2': 'Разрабатываю сайты и веб-приложения (лендинги, корпоративные сайты, CRM), кроссплатформенные игры (ПК, мобильные, WebGL, XR) и ботов. Есть опыт работы в веб-студии, в команде и соло. Победа в гейм-джеме среди 81 проекта.',
        'about.p3': 'Разберёмся в задаче вместе. В работе для меня важно, чтобы обе стороны были услышаны: ваши цели, потребности и ограничения — мои предложения, решения задачи и аргументы.',
        'about.p4': 'Если вижу слабое место — скажу заранее. Если вижу более удачное решение — предложу. В конечном итоге мы вместе придём к ожидаемому результату.',
        'about.location': 'Тюмень, Россия',
        'about.resume': 'Моё резюме',

        // Skills
        'skills.web': 'Веб-разработка',
        'skills.game': 'Разработка игр',
        'skills.learning': 'Сейчас в изучении',

        // Capabilities
        'cap.title': 'Что я умею',
        'cap.subtitle': 'Кроме кода',
        'cap.clients.title': 'Работа с заказчиками',
        'cap.clients.desc': 'Общаюсь напрямую с заказчиками (включая иностранных), обсуждаю детали проектов, зоны риска и перспективы.',
        'cap.clients.tag1': 'Иностранные заказчики',
        'cap.process.title': 'Влияние на процессы',
        'cap.process.desc': 'Предлагаю и внедряю способы оптимизации работы: новые технологии, инструменты, подходы.',
        'cap.process.tag1': 'Тех. внедрения',
        'cap.process.tag2': 'Оптимизация',
        'cap.team.title': 'Командная работа',
        'cap.team.desc': 'Работаю в связке с дизайнерами, 3D-специалистами и разработчиками. Общаюсь с нетехническими специалистами.',
        'cap.team.tag1': 'Кросс-функциональность',
        'cap.team.tag2': 'Коммуникация',

        // Services
        'services.title': 'Что я могу предложить',
        'services.subtitle': 'Услуги, которые я предоставляю',
        'services.sites.title': 'Разработка сайтов',
        'services.sites.desc': 'Лендинги, сайты-визитки, корпоративные сайты, CRM-системы',
        'services.games.title': 'Разработка игр',
        'services.games.desc': '2D/3D игры на Unity, WebGL-игры, прототипы, портирование',
        'services.apps.title': 'Разработка приложений',
        'services.apps.desc': 'Десктопные приложения, утилиты, инструменты автоматизации',
        'services.bots.title': 'Разработка ботов',
        'services.bots.desc': 'Telegram-боты, Discord-боты, чат-боты с AI-интеграцией',
        'services.cta': 'Обсудить проект',
        'services.visual': 'От идеи до релиза',

        // Projects
        'projects.title': 'Мои проекты',
        'projects.subtitle': 'Несколько работ, которыми я горжусь',
        'projects.status.completed': 'Завершён',
        'projects.status.pet': 'Пет-проект',
        'projects.readmore': 'Подробнее',
        'projects.epic.desc': 'Кроссплатформенный 2D аркадный футбол с забавной физикой.',
        'projects.pm.title': 'Сайт-визитка PM',
        'projects.pm.desc': 'Landing page для проджект-менеджера.',
        'projects.skinup.desc': '2D редактор для проверки скинов без Unity.',

        // Contacts
        'contacts.title': 'Связаться со мной',
        'contacts.subtitle': 'Всегда рад новым знакомствам и предложениям',

        // Footer
        'footer.copy': '© 2026 Валентин Сенин. Ваш проводник в мир технологий...',

        'modal.contribution': 'Мой вклад:',
        
        // Modals — Epic Football
        'modal.epic.title': 'Epic Football',
        'modal.epic.desc': '<strong>Epic Football</strong> — кроссплатформенный 2D аркадный футбол с забавной физикой и множеством экшена.',
        'modal.features': 'Особенности:',
        'modal.epic.f1': 'Интегрированный магазин скинов',
        'modal.epic.f2': 'Различные игровые режимы',
        'modal.epic.f3': 'Кроссплатформенность (WebGL + ПК)',
        'modal.epic.contribution': 'полный цикл разработки.',
        'modal.yaGames': 'Яндекс Игры',
        'modal.vkGames': 'VK Games — скоро',
        'modal.crazyGames': 'Crazy Games — скоро',

        // Modals — PM Website
        'modal.pm.title': 'Сайт-визитка PM',
        'modal.pm.desc': '<strong>Сайт-визитка для проджект-менеджера</strong> — минималистичный лендинг.',
        'modal.pm.f1': 'Адаптивная вёрстка',
        'modal.pm.f2': 'Интеграция с Telegram и LinkedIn',
        'modal.pm.f3': 'SEO-дружественная структура',
        'modal.pm.contribution': 'полный цикл разработки.',
        'modal.pm.responsive': 'Адаптив',
        'modal.pm.view': 'Посмотреть сайт',

        // Modals — SkinUp 2D
        'modal.skinup.desc': '<strong>SkinUp 2D</strong> — легковесный 2D редактор-визуализатор на Windows Forms для проверки скинов без Unity.',
        'modal.result': 'Результат:',
        'modal.skinup.result': 'экономия ≈50% времени',
        
        // ====================
        // RESUME PAGE
        // ====================
        'resume.back': 'На главную',
        'resume.pageTitle': 'Резюме',
        'resume.name': 'Валентин Сенин',
        'resume.role': 'Unity / Fullstack-разработчик',
        'resume.downloadPdf': 'Скачать PDF',

        // Summary
        'resume.summary.p1': '<strong>Unity и C# разработчик с опытом более трёх лет.</strong> Специализируюсь на создании игр и интерактивных приложений, а также на fullstack-разработке веб-проектов.',
        'resume.summary.p2': 'В работе придерживаюсь принципов ООП, SOLID и паттернов проектирования. Стремлюсь писать не просто работающий, а жизнеспособный код, который легко поддерживать и развивать. Умею быстро разбираться в чужом коде и эффективно взаимодействовать с командой.',
        'resume.summary.p3': '<strong>Сейчас активно развиваюсь как Fullstack-разработчик</strong> (PHP, JavaScript, React, Node.js), но остаюсь открытым для интересных проектов в Unity. Ценю конструктивные отношения на основе взаимного уважения и верю, что навыки решения технических и творческих задач одинаково важны для качественного продукта.',

        // Contacts block
        'resume.contacts.title': 'Контакты',
        'resume.contacts.location': 'Тюмень, Россия',

        // Skills block
        'resume.skills.title': 'Технические навыки',
        'resume.skills.langs': 'Языки и технологии',
        'resume.skills.frameworks': 'Фреймворки и библиотеки',
        'resume.skills.tools': 'Инструменты и подходы',
        'resume.skills.platforms': 'Платформы',

        // Languages block
        'resume.langs.title': 'Языки',
        'resume.langs.russianLabel': 'Русский',
        'resume.langs.russianLevel': '— Родной',
        'resume.langs.englishLevel': '— B1 / B2',

        // Experience block
        'resume.exp.title': 'Опыт работы',

        // Job 1
        'resume.exp.job1.title': 'Fullstack разработчик',
        'resume.exp.job1.date': 'Сентябрь 2025 — настоящее',
        'resume.exp.job1.company': 'Студия WEB-разработки «Айти Сфера» · гибрид',
        'resume.exp.job1.f1': 'Реализовал и сопровождал CRM-системы и корпоративные сайты на PHP, SQL, jQuery',
        'resume.exp.job1.f2': 'Провёл рефакторинг legacy-кода для повышения производительности и поддерживаемости',
        'resume.exp.job1.f3': 'Разработал систему ролей и прав доступа, модуль PUSH-уведомлений через внешние API',
        'resume.exp.job1.f4': 'Оптимизировал SQL-запросы, снизив нагрузку на базы данных',

        // Job 2
        'resume.exp.job2.title': 'Game Developer',
        'resume.exp.job2.date': 'Май 2021 — Декабрь 2023',
        'resume.exp.job2.company': 'Студия разработки игр «Hustla Games» · удалённо',
        'resume.exp.job2.f1': 'Разработал и опубликовал 15+ игр под WebGL, Android и PC',
        'resume.exp.job2.f2': 'Победитель гейм-джема среди 81 проекта',
        'resume.exp.job2.f3': 'Внедрял самописные инструменты и инспекторы для ускорения разработки',
        'resume.exp.job2.f4': 'Интегрировал SDK и API игровых площадок (Яндекс Игры, VK Games, Y8, RuStore)',

        // Job 3
        'resume.exp.job3.title': 'Unity Developer',
        'resume.exp.job3.date': 'Сентябрь 2021 — Ноябрь 2022',
        'resume.exp.job3.company': 'ООО «Инфотех» · Тюмень / удалённо',
        'resume.exp.job3.f1': 'Внедрил Unity как основной инструмент, перенёс существующие проекты',
        'resume.exp.job3.f2': 'Разработал 11 тренажеров и виртуальных лабораторных работ с VR-поддержкой (HTC Vive Pro, SteamVR)',
        'resume.exp.job3.f3': 'Наладил сотрудничество с заказчиками из России, Белоруссии и Казахстана',

        // Education block
        'resume.edu.title': 'Образование',
        'resume.edu.degreeIncomplete': 'неполное высшее',
        'resume.edu.uni1.name': 'Тюменский Индустриальный Университет',
        'resume.edu.uni1.details': 'Институт Транспорта · Наземные транспортно-технологические средства (специалитет)',
        'resume.edu.uni2.name': 'Томский Государственный Университет',
        'resume.edu.uni2.details': 'Механико-математический факультет · Математика и компьютерные науки (бакалавриат)',

        // Footer
        'resume.footer.copy': '© 2026 Валентин Сенин. Все права защищены.',   
    },

    en: {
        // Titles
        'resume.docTitle': 'Resume — Valentin Senin',
        'resume.docDescription': 'Resume of Unity and Fullstack developer',
        'index.docTitle': 'Valentin Senin — Unity / Fullstack Developer',
        'index.docDescription': 'Personal website of a game and web developer. Unity, C#, PHP, React.',
        
        // Header
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contacts': 'Contacts',
        'nav.resume': 'Resume',
        'logo.name': 'Cosyplaid',

        // Hero
        'hero.title': 'Hi, I\'m <span class="hero__title-accent">Valentin</span>',
        'hero.role': 'Unity / Fullstack Developer',
        'hero.subtitle': 'Building websites, games, bots &amp; web apps — from concept to result',

        // About
        'about.title': 'About Me',
        'about.p1': '<strong>Unity &amp; C# developer, fullstack.</strong>',
        'about.p2': 'I develop websites and web apps (landing pages, corporate sites, CRM), cross-platform games (PC, mobile, WebGL, XR) and bots. I have experience in a web studio, in teams and solo. Winner of a game jam among 81 projects.',
        'about.p3': 'Let\'s figure out the task together. In my work it matters that both sides are heard: your goals, needs and constraints — my proposals, solutions and reasoning.',
        'about.p4': 'If I see a weak spot, I\'ll say it upfront. If I see a better solution, I\'ll suggest it. In the end, we\'ll reach the result you expect.',
        'about.location': 'Tyumen, Russia',
        'about.resume': 'My Resume',

        // Skills
        'skills.web': 'Web Development',
        'skills.game': 'Game Development',
        'skills.learning': 'Currently Learning',

        // Capabilities
        'cap.title': 'What I Do',
        'cap.subtitle': 'Beyond Code',
        'cap.clients.title': 'Client Communication',
        'cap.clients.desc': 'Direct communication with clients (including international), discussing project details, risks, and growth opportunities.',
        'cap.clients.tag1': 'International Clients',
        'cap.process.title': 'Process Improvement',
        'cap.process.desc': 'Proposing and implementing optimization methods: new technologies, tools, and approaches.',
        'cap.process.tag1': 'Tech Adoption',
        'cap.process.tag2': 'Optimization',
        'cap.team.title': 'Teamwork',
        'cap.team.desc': 'Collaborating with designers, 3D artists, and developers. Communicating with non-technical stakeholders.',
        'cap.team.tag1': 'Cross-functional',
        'cap.team.tag2': 'Communication',

        // Services
        'services.title': 'What I Can Offer',
        'services.subtitle': 'Services I provide',
        'services.sites.title': 'Website Development',
        'services.sites.desc': 'Landing pages, business cards, corporate sites, CRM systems',
        'services.games.title': 'Game Development',
        'services.games.desc': '2D/3D Unity games, WebGL games, prototypes, porting',
        'services.apps.title': 'App Development',
        'services.apps.desc': 'Desktop apps, utilities, automation tools',
        'services.bots.title': 'Bot Development',
        'services.bots.desc': 'Telegram bots, Discord bots, AI-powered chatbots',
        'services.cta': 'Discuss Project',
        'services.visual': 'From idea to release',

        // Projects
        'projects.title': 'My Projects',
        'projects.subtitle': 'Some works I\'m proud of',
        'projects.status.completed': 'Completed',
        'projects.status.pet': 'Pet Project',
        'projects.readmore': 'Read More',
        'projects.epic.desc': 'Cross-platform 2D arcade football with fun physics.',
        'projects.pm.title': 'PM Landing Page',
        'projects.pm.desc': 'Landing page for a Project Manager.',
        'projects.skinup.desc': '2D editor for skin preview without Unity.',

        // Contacts
        'contacts.title': 'Contact Me',
        'contacts.subtitle': 'Always open to new connections and opportunities',

        // Footer
        'footer.copy': '© 2026 Valentin Senin. Your guide to technology...',

        'modal.contribution': 'My contribution:',
        
        // Modals — Epic Football
        'modal.epic.title': 'Epic Football',
        'modal.epic.desc': '<strong>Epic Football</strong> — cross-platform 2D arcade football with fun physics and plenty of action.',
        'modal.features': 'Features:',
        'modal.epic.f1': 'Integrated skin shop',
        'modal.epic.f2': 'Multiple game modes',
        'modal.epic.f3': 'Cross-platform (WebGL + PC)',  
        'modal.epic.contribution': 'full development cycle.',
        'modal.yaGames': 'Yandex Games',
        'modal.vkGames': 'VK Games — coming soon',
        'modal.crazyGames': 'Crazy Games — coming soon',

        // Modals — PM Website
        'modal.pm.title': 'PM Landing Page',
        'modal.pm.desc': '<strong>Landing page for a Project Manager</strong> — a minimalist one-page site.',
        'modal.pm.f1': 'Responsive layout',
        'modal.pm.f2': 'Telegram &amp; LinkedIn integration',
        'modal.pm.f3': 'SEO-friendly structure',
        'modal.pm.contribution': 'full development cycle.',
        'modal.pm.responsive': 'Responsive',
        'modal.pm.view': 'View Site',

        // Modals — SkinUp 2D
        'modal.skinup.desc': '<strong>SkinUp 2D</strong> — lightweight 2D visualization editor for Windows Forms to preview skins without Unity.',
        'modal.result': 'Result:',
        'modal.skinup.result': '~50% time saved',
        
        // ====================
        // RESUME PAGE
        // ====================
        'resume.back': 'Home',
        'resume.pageTitle': 'Resume',
        'resume.name': 'Valentin Senin',
        'resume.role': 'Unity / Fullstack Developer',
        'resume.downloadPdf': 'Download PDF',

        // Summary
        'resume.summary.p1': '<strong>Unity &amp; C# developer with 3+ years of experience.</strong> Specializing in games, interactive applications, and fullstack web development.',
        'resume.summary.p2': 'I follow OOP, SOLID, and design patterns. Writing maintainable, sustainable code and quickly understanding others\' work are my priorities.',
        'resume.summary.p3': '<strong>Currently growing as a Fullstack developer</strong> (PHP, JavaScript, React, Node.js), while remaining open to Unity projects.',

        // Contacts block
        'resume.contacts.title': 'Contacts',
        'resume.contacts.location': 'Tyumen, Russia',

        // Skills block
        'resume.skills.title': 'Technical Skills',
        'resume.skills.langs': 'Languages &amp; Technologies',
        'resume.skills.frameworks': 'Frameworks &amp; Libraries',
        'resume.skills.tools': 'Tools &amp; Approaches',
        'resume.skills.platforms': 'Platforms',

        // Languages block
        'resume.langs.title': 'Languages',
        'resume.langs.russianLabel': 'Russian',
        'resume.langs.russianLevel': '— Native',
        'resume.langs.englishLevel': '— B1 / B2',

        // Experience block
        'resume.exp.title': 'Work Experience',

        // Job 1
        'resume.exp.job1.title': 'Fullstack Developer',
        'resume.exp.job1.date': 'September 2025 — Present',
        'resume.exp.job1.company': 'IT-Sfera Web Studio · hybrid',
        'resume.exp.job1.f1': 'Developed and maintained CRM systems and corporate websites using PHP, SQL, jQuery',
        'resume.exp.job1.f2': 'Refactored legacy code to improve performance and maintainability',
        'resume.exp.job1.f3': 'Built role-based access control and push notification module via external APIs',
        'resume.exp.job1.f4': 'Optimized SQL queries to reduce database load',

        // Job 2
        'resume.exp.job2.title': 'Game Developer',
        'resume.exp.job2.date': 'May 2021 — December 2023',
        'resume.exp.job2.company': 'Hustla Games Studio · remote',
        'resume.exp.job2.f1': 'Developed and published 15+ games for WebGL, Android, and PC',
        'resume.exp.job2.f2': 'Winner of a game jam among 81 projects',
        'resume.exp.job2.f3': 'Built custom tools and inspectors to speed up development',
        'resume.exp.job2.f4': 'Integrated SDKs and APIs for game platforms (Yandex Games, VK Games, Y8, RuStore)',

        // Job 3
        'resume.exp.job3.title': 'Unity Developer',
        'resume.exp.job3.date': 'September 2021 — November 2022',
        'resume.exp.job3.company': 'Infotech LLC · Tyumen / remote',
        'resume.exp.job3.f1': 'Introduced Unity as the primary tool, migrated existing projects',
        'resume.exp.job3.f2': 'Developed 11 simulators and virtual labs with VR support (HTC Vive Pro, SteamVR)',
        'resume.exp.job3.f3': 'Established cooperation with clients from Russia, Belarus, and Kazakhstan',

        // Education block
        'resume.edu.title': 'Education',
        'resume.edu.degreeIncomplete': 'incomplete higher education',
        'resume.edu.uni1.name': 'Tyumen Industrial University',
        'resume.edu.uni1.details': 'Institute of Transport · Ground Transport and Technological Systems (Specialist degree)',
        'resume.edu.uni2.name': 'Tomsk State University',
        'resume.edu.uni2.details': 'Mechanics and Mathematics Faculty · Mathematics and Computer Science (Bachelor\'s degree)',

        // Footer
        'resume.footer.copy': '© 2026 Valentin Senin. All rights reserved.',
    }
};

const I18n = {
    current: 'ru',

    init() {
        const saved = localStorage.getItem('lang');
        if (saved === 'ru' || saved === 'en') {
            this.current = saved;
        } else {
            const browserLang = (navigator.language || 'ru').toLowerCase();
            this.current = browserLang.startsWith('en') ? 'en' : 'ru';
            localStorage.setItem('lang', this.current);
        }
        this.apply(this.current);
        this.bindSwitcher();
    },

    apply(lang) {
        this.current = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = translations[lang]?.[key];
            if (text !== undefined) el.innerHTML = text;
        });

        const titleKey = document.documentElement.getAttribute('data-title-key');
        if (titleKey && translations[lang]?.[titleKey]) {
            document.title = translations[lang][titleKey];
        }

        const descKey = document.documentElement.getAttribute('data-description-key');
        if (descKey && translations[lang]?.[descKey]) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', translations[lang][descKey]);
        }

        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    },

    set(lang) {
        if (lang !== 'ru' && lang !== 'en') return;
        this.apply(lang);
        localStorage.setItem('lang', lang);
    },

    bindSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => this.set(btn.dataset.lang));
        });
    }
};

// Автозапуск при загрузке DOM
document.addEventListener('DOMContentLoaded', () => I18n.init());

window.I18n = I18n;