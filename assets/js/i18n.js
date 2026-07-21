/**
 * Local i18n engine — no external services.
 * Language resolution order:
 *   1. Saved preference (localStorage)
 *   2. Browser language (navigator.language): pt* -> Portuguese, anything else -> English
 * The PT/EN buttons in the navbar switch languages and persist the choice.
 */
(function () {
    'use strict';

    var translations = {
        en: {
            'meta.title': 'Erick Garcia | QA Automation Engineer & SDET',
            'meta.description': 'Erick Garcia - QA Automation Engineer (SDET) | Cypress, Playwright & TestComplete',

            'nav.home': 'Home',
            'nav.impact': 'Impact',
            'nav.skills': 'Skills',
            'nav.career': 'Career',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            'hero.title': 'Hi, I\'m <span class="text-teal-700">Erick Garcia</span>',
            'hero.role': 'QA Automation Engineer (SDET)',
            'hero.available': 'Available for Remote Work',
            'hero.intro': 'Specialist in test automation at <span class="text-teal-600 font-semibold">TOTVS</span>.',
            'hero.downloadCv': 'Download CV',

            'impact.title': 'Key Impact &amp; Results',
            'impact.coverage.title': '99% Coverage',
            'impact.coverage.desc': 'Automated regression suite for the Web Cost Table Import module.',
            'impact.efficiency.title': 'Efficiency',
            'impact.efficiency.desc': 'Regression testing reduced from ~3 days to ~15 minutes per release.',
            'impact.fullstack.title': 'Full-Stack Testing',
            'impact.fullstack.desc': 'Database validation with PL/SQL integrated into E2E tests.',

            'skills.title': 'Technical Skills',
            'skills.automation.title': 'Test Automation',
            'skills.languages.title': 'Programming Languages',
            'skills.languages.js': 'JavaScript/TypeScript <span class="text-emerald-600 text-xs font-semibold">(Proficient)</span>',
            'skills.languages.sql': 'SQL/PL-SQL <span class="text-emerald-600 text-xs font-semibold">(Advanced)</span>',
            'skills.db.title': 'Databases &amp; Backend',
            'skills.db.validation': 'Data validation &amp; query optimization',
            'skills.method.title': 'Methodologies',
            'skills.method.scrum': 'Scrum/Agile',
            'skills.method.strategy': 'Test Strategy Design',
            'skills.method.exploratory': 'Exploratory Testing',
            'skills.spec.title': 'Specializations',
            'skills.spec.db': 'Database Test Automation (PL/SQL + Cypress)',
            'skills.spec.e2e': 'High-Coverage E2E Testing',
            'skills.spec.legacy': 'Legacy System Stabilization',

            'career.title': 'Career Journey',
            'career.tools': 'Tools &amp; Technologies',
            'career.tools2': 'Tools &amp; Technologies',
            'career.results': 'Key Results',
            'career.results2': 'Key Results',

            'career.totvs.role': 'QA Engineer',
            'career.totvs.badge': 'CURRENT ROLE',
            'career.totvs.context': 'Retail &amp; Supermarket ERP – Consinco product line',
            'career.totvs.period': 'July 2022 - Present',
            'career.totvs.i1.title': 'Delivery Management &amp; Manual Testing',
            'career.totvs.i1.desc': 'Run manual testing and write validation scenarios in Jira (Zephyr), executing the full regression suite in the validation cycle before each release.',
            'career.totvs.i2.title': 'BDD &amp; Scenario Tracking',
            'career.totvs.i2.desc': 'Use BDD to model scenarios in Gherkin within Jira, inserting complete tracking for each automation scenario and managing automation improvements in the backlog for current and future releases.',
            'career.totvs.i3.title': 'E2E Automation with Cypress',
            'career.totvs.i3.desc': 'Built the Cypress regression suite for the Web Cost Table Import module (Page Object Model), with PL/SQL queries validating data directly in Oracle rather than only on the UI. Reduced the module\'s release regression from ~3 days of manual testing to ~15 minutes.',
            'career.totvs.i4.title': 'Mobile Testing on BrowserStack',
            'career.totvs.i4.desc': 'Performed 100% of manual tests on the \'Minhas Compras\' app via BrowserStack, validating critical flows across multiple devices and browsers.',
            'career.totvs.i5.title': 'Data Validation with Firebase &amp; PL/SQL',
            'career.totvs.i5.desc': 'Validated the \'Minhas Compras\' app against NoSQL (Firebase) and Oracle PL/SQL databases to ensure data consistency, creating query scripts and validating purchase flows.',
            'career.totvs.i6.title': 'Legacy System Stabilization',
            'career.totvs.i6.desc': 'Wrote test scenarios that surfaced existing bugs and prevented regressions, which over time stabilized the legacy product.',
            'career.totvs.r1': 'Over 99% automated validation cases with PL/SQL integration (180+ test scenarios)',
            'career.totvs.r2': 'Reduced release testing cycle from 3 days to 15 minutes',
            'career.totvs.r3': '100% regression coverage in Table Import',
            'career.totvs.r4': 'Firebase+PL/SQL information validation',
            'career.totvs.r5': 'Legacy product stabilized, enabling new implementations',

            'career.prema.role': 'QA Intern',
            'career.prema.period': 'Dec 2021 - Jun 2022',
            'career.prema.i1.title': 'Test Strategy &amp; Execution',
            'career.prema.i1.desc': 'Ran several testing types, system, exploratory, regression, unit, integration and beta, applying techniques such as combinatorial analysis and boundary-value testing.',
            'career.prema.i2.title': 'Documentation &amp; Metrics',
            'career.prema.i2.desc': 'Created detailed documentation for test scenarios and established quality metrics to track bug density per screen, improving visibility into application stability.',
            'career.prema.i3.title': 'Web &amp; API Automation',
            'career.prema.i3.desc': 'Developed backend automated tests using Mocha and Chai for API assertions, and frontend automation using Cypress. Performed manual API testing using Postman and Insomnia.',
            'career.prema.i4.title': 'Technical Analysis',
            'career.prema.i4.desc': 'Utilized Browser DevTools for deep-dive debugging and fault isolation in web applications.',
            'career.prema.r1': 'Implemented automated testing for Frontend (Cypress) and Backend (Mocha/Chai)',
            'career.prema.r2': 'Established quality metrics and bug density tracking per screen',
            'career.prema.r3': 'Covered edge cases through combinatorial and boundary-value analysis',

            'projects.title': 'Featured Projects',
            'projects.jtm.desc': 'A test automation framework for UI and API testing, built with Java, Selenium, TestNG and RestAssured. It uses the Page Object Model pattern, Allure for reporting, and GitHub Actions for CI.',
            'projects.jtm.features': 'Key Features:',
            'projects.jtm.f1': 'Automated UI testing with Selenium WebDriver and Page Object Model',
            'projects.jtm.f2': 'API testing with RestAssured for contract validation',
            'projects.jtm.f3': 'Comprehensive test reports with Allure integration',
            'projects.jtm.f4': 'CI/CD pipeline with GitHub Actions for continuous testing',
            'projects.jtm.f5': 'Data-driven testing with TestNG parameters',
            'projects.jtm.allure': 'View Allure Report',
            'projects.jtm.source': 'View Source Code on GitHub',
            'projects.more': 'More projects available on my GitHub <i class="fab fa-github"></i>',

            'certs.title': 'Certifications',
            'certs.istqb': 'Foundation Level Certified | Valid Since 2025',
            'certs.isq': 'Introduction to Software Quality',
            'certs.jmeter': 'Performance Testing',

            'edu.title': 'Education',
            'edu.degree': 'Bachelor\'s Degree in Information Systems',
            'edu.school': 'FATEC Franca – College of Technology "Dr. Thomaz Novelino"',

            'languages.title': 'Languages',
            'languages.en.name': 'English',
            'languages.en.level': 'Advanced',
            'languages.en.detail': 'Professional Working Proficiency',
            'languages.pt.name': 'Portuguese',
            'languages.pt.level': 'Native',
            'languages.pt.detail': 'First Language',

            'contact.title': 'Get In Touch',
            'contact.text': 'I\'m open to remote QA / SDET roles, including international. Feel free to reach out about test automation, API and database testing, or CI-integrated quality work.',
            'contact.linkedin': 'Connect on LinkedIn',
            'contact.email': 'Send Email',
            'contact.github': 'View GitHub',
            'contact.location': 'Based in Brazil (UTC-3)',
            'contact.tz': 'Flexible with timezones',
            'contact.available': 'Available for Remote Work',

            'footer.text': '&copy; 2026 Erick Garcia | Quality Engineer'
        },

        pt: {
            'meta.title': 'Erick Garcia | Engenheiro de Automação de Testes (SDET)',
            'meta.description': 'Erick Garcia - Engenheiro de Automação de Testes (SDET) | Cypress, Playwright & TestComplete',

            'nav.home': 'Início',
            'nav.impact': 'Impacto',
            'nav.skills': 'Habilidades',
            'nav.career': 'Carreira',
            'nav.projects': 'Projetos',
            'nav.contact': 'Contato',

            'hero.title': 'Olá, eu sou <span class="text-teal-700">Erick Garcia</span>',
            'hero.role': 'Engenheiro de Automação de Testes (SDET)',
            'hero.intro': 'Especialista em automação de testes na <span class="text-teal-700 font-semibold">TOTVS</span>.',
            'hero.downloadCv': 'Baixar CV',

            'impact.title': 'Impacto &amp; Resultados',
            'impact.coverage.title': '99% de Cobertura',
            'impact.coverage.desc': 'Suíte de regressão automatizada para o módulo de Importação de Tabela de Custos.',
            'impact.efficiency.title': 'Eficiência',
            'impact.efficiency.desc': 'Testes de regressão reduzidos de ~3 dias para ~15 minutos por release.',
            'impact.fullstack.title': 'Testes Full-Stack',
            'impact.fullstack.desc': 'Validação de banco de dados com PL/SQL integrada aos testes E2E.',

            'skills.title': 'Habilidades Técnicas',
            'skills.automation.title': 'Automação de Testes',
            'skills.languages.title': 'Linguagens de Programação',
            'skills.languages.js': 'JavaScript/TypeScript <span class="text-emerald-600 text-xs font-semibold">(Proficiente)</span>',
            'skills.languages.sql': 'SQL/PL-SQL <span class="text-emerald-600 text-xs font-semibold">(Avançado)</span>',
            'skills.db.title': 'Bancos de Dados &amp; Backend',
            'skills.db.validation': 'Validação de dados &amp; otimização de queries',
            'skills.method.title': 'Metodologias',
            'skills.method.scrum': 'Scrum/Ágil',
            'skills.method.strategy': 'Design de Estratégia de Testes',
            'skills.method.exploratory': 'Testes Exploratórios',
            'skills.spec.title': 'Especializações',
            'skills.spec.db': 'Automação de Testes de Banco de Dados (PL/SQL + Cypress)',
            'skills.spec.legacy': 'Estabilização de Sistemas Legados',

            'career.title': 'Trajetória Profissional',
            'career.tools': 'Ferramentas &amp; Tecnologias',
            'career.tools2': 'Ferramentas &amp; Tecnologias',
            'career.results': 'Principais Resultados',
            'career.results2': 'Principais Resultados',

            'career.totvs.role': 'Engenheiro de QA',
            'career.totvs.badge': 'CARGO ATUAL',
            'career.totvs.context': 'TOTVS linha Consinco',
            'career.totvs.period': 'Julho de 2022 - Atual',
            'career.totvs.i1.title': 'Gestão de Entregas &amp; Testes Manuais',
            'career.totvs.i1.desc': 'Realizo testes manuais e escrevo cenários de validação no Jira (Zephyr), executando a suíte completa de regressão no ciclo de validação antes de cada release.',
            'career.totvs.i2.title': 'BDD &amp; Rastreabilidade de Cenários',
            'career.totvs.i2.desc': 'Utilizo BDD para modelar cenários em Gherkin no Jira, com rastreabilidade completa para cada cenário de automação, gerenciando melhorias de automação no backlog para releases atuais e futuras.',
            'career.totvs.i3.title': 'Automação E2E com Cypress',
            'career.totvs.i3.desc': 'Construí a suíte de regressão em Cypress do módulo de Importação de Tabela de Custos (Page Object Model), com queries PL/SQL validando os dados direto no Oracle, não só na tela. Reduzi a regressão de release do módulo de ~3 dias de teste manual para ~15 minutos.',
            'career.totvs.i4.title': 'Testes Mobile no BrowserStack',
            'career.totvs.i4.desc': 'Realizei 100% dos testes manuais do app \'Minhas Compras\' via BrowserStack, validando fluxos críticos em múltiplos dispositivos e navegadores.',
            'career.totvs.i5.title': 'Validação de Dados com Firebase &amp; PL/SQL',
            'career.totvs.i5.desc': 'Validei o app \'Minhas Compras\' contra bancos NoSQL (Firebase) e Oracle PL/SQL para garantir consistência de dados, criando scripts de consulta e validando fluxos de compra.',
            'career.totvs.i6.title': 'Estabilização de Sistema Legado',
            'career.totvs.i6.desc': 'Escrevi cenários de teste que revelaram bugs existentes e evitaram regressões, o que ao longo do tempo estabilizou o produto legado.',
            'career.totvs.r1': 'Mais de 99% dos casos de validação automatizados com integração PL/SQL (180+ cenários de teste)',
            'career.totvs.r2': 'Ciclo de testes de release reduzido de 3 dias para 15 minutos',
            'career.totvs.r3': '100% de cobertura de regressão na Importação de Tabelas',
            'career.totvs.r4': 'Validação de informações com Firebase + PL/SQL',
            'career.totvs.r5': 'Produto legado estabilizado, viabilizando novas implementações',

            'career.prema.role': 'Estagiário de QA',
            'career.prema.period': 'Dez 2021 - Jun 2022',
            'career.prema.i1.title': 'Estratégia &amp; Execução de Testes',
            'career.prema.i1.desc': 'Executei vários tipos de teste, sistema, exploratório, regressão, unitário, integração e beta, aplicando técnicas como análise combinatória e valores-limite.',
            'career.prema.i2.title': 'Documentação &amp; Métricas',
            'career.prema.i2.desc': 'Criei documentação detalhada de cenários de teste e estabeleci métricas de qualidade para acompanhar a densidade de bugs por tela, melhorando a visibilidade sobre a estabilidade da aplicação.',
            'career.prema.i3.title': 'Automação Web &amp; API',
            'career.prema.i3.desc': 'Desenvolvi testes automatizados de backend usando Mocha e Chai para asserções de API, e automação de frontend com Cypress. Realizei testes manuais de API com Postman e Insomnia.',
            'career.prema.i4.title': 'Análise Técnica',
            'career.prema.i4.desc': 'Utilizei o DevTools do navegador para depuração aprofundada e isolamento de falhas em aplicações web.',
            'career.prema.r1': 'Implementei testes automatizados de Frontend (Cypress) e Backend (Mocha/Chai)',
            'career.prema.r2': 'Estabeleci métricas de qualidade e acompanhamento de densidade de bugs por tela',
            'career.prema.r3': 'Cobri casos de borda com análise combinatória e de valores-limite',

            'projects.title': 'Projetos em Destaque',
            'projects.jtm.desc': 'Um framework de automação de testes para UI e API, construído com Java, Selenium, TestNG e RestAssured. Usa o padrão Page Object Model, Allure para relatórios e GitHub Actions para CI.',
            'projects.jtm.features': 'Principais Funcionalidades:',
            'projects.jtm.f1': 'Testes de UI automatizados com Selenium WebDriver e Page Object Model',
            'projects.jtm.f2': 'Testes de API com RestAssured para validação de contrato',
            'projects.jtm.f3': 'Relatórios de teste completos com integração Allure',
            'projects.jtm.f4': 'Pipeline de CI/CD com GitHub Actions para testes contínuos',
            'projects.jtm.f5': 'Testes data-driven com parâmetros do TestNG',
            'projects.jtm.allure': 'Ver Relatório Allure',
            'projects.jtm.source': 'Ver Código-Fonte no GitHub',
            'projects.more': 'Mais projetos disponíveis no meu GitHub <i class="fab fa-github"></i>',

            'certs.title': 'Certificações',
            'certs.istqb': 'Certificado Foundation Level | Válido desde 2025',
            'certs.isq': 'Introdução à Qualidade de Software',
            'certs.jmeter': 'Testes de Performance',

            'edu.title': 'Formação Acadêmica',
            'edu.degree': 'Bacharelado em Sistemas de Informação',
            'edu.school': 'FATEC Franca – Faculdade de Tecnologia "Dr. Thomaz Novelino"',

            'languages.title': 'Idiomas',
            'languages.en.name': 'Inglês',
            'languages.en.level': 'Avançado',
            'languages.en.detail': 'Proficiência Profissional',
            'languages.pt.name': 'Português',
            'languages.pt.level': 'Nativo',
            'languages.pt.detail': 'Língua Materna',

            'contact.title': 'Entre em Contato',
            'contact.text': 'Estou aberto a vagas remotas de QA / SDET, inclusive internacionais. Fique à vontade para falar sobre automação de testes, testes de API e banco de dados, ou qualidade integrada ao CI.',
            'contact.linkedin': 'Conectar no LinkedIn',
            'contact.email': 'Enviar E-mail',
            'contact.github': 'Ver GitHub',
            'contact.location': 'Baseado no Brasil (UTC-3)',
            'contact.tz': 'Flexível com fusos horários',
            'contact.available': 'Disponível para Trabalho Remoto',

            'footer.text': '&copy; 2026 Erick Garcia | Engenheiro de Qualidade'
        }
    };

    var EXPERIENCE_START = new Date(2021, 11, 1); // Dec 2021 — start of QA career (Prema)

    function detectLanguage() {
        try {
            var saved = localStorage.getItem('site-lang');
            if (saved === 'pt' || saved === 'en') return saved;
        } catch (e) { /* localStorage unavailable (private mode etc.) */ }
        var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        return nav.indexOf('pt') === 0 ? 'pt' : 'en';
    }

    function experienceText(lang) {
        var now = new Date();
        var years = now.getFullYear() - EXPERIENCE_START.getFullYear();
        var months = now.getMonth() - EXPERIENCE_START.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }
        if (lang === 'pt') {
            return years + (years === 1 ? ' ano' : ' anos') + ' e ' +
                   months + (months === 1 ? ' mês' : ' meses') + ' de experiência';
        }
        return years + (years === 1 ? ' Year ' : ' Years ') +
               months + (months === 1 ? ' Month' : ' Months') + ' of Experience';
    }

    function applyLanguage(lang) {
        var dict = translations[lang] || translations.en;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.innerHTML = dict[key];
            }
        });

        // aria-label + title attributes (icon-only links)
        document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-label');
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute('aria-label', dict[key]);
                el.setAttribute('title', dict[key]);
            }
        });

        document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
        document.title = dict['meta.title'];
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', dict['meta.description']);

        var counter = document.getElementById('experience-counter');
        if (counter) counter.textContent = experienceText(lang);

        var ptBtn = document.getElementById('lang-pt');
        var enBtn = document.getElementById('lang-en');
        if (ptBtn && enBtn) {
            var activeClasses = ['bg-teal-600', 'text-white'];
            var inactiveClasses = ['text-gray-600', 'hover:text-teal-600'];
            var active = lang === 'pt' ? ptBtn : enBtn;
            var inactive = lang === 'pt' ? enBtn : ptBtn;
            activeClasses.forEach(function (c) { active.classList.add(c); inactive.classList.remove(c); });
            inactiveClasses.forEach(function (c) { inactive.classList.add(c); active.classList.remove(c); });
            active.setAttribute('aria-pressed', 'true');
            inactive.setAttribute('aria-pressed', 'false');
        }
    }

    function setLanguage(lang) {
        try {
            localStorage.setItem('site-lang', lang);
        } catch (e) { /* ignore */ }
        applyLanguage(lang);
    }

    function init() {
        var ptBtn = document.getElementById('lang-pt');
        var enBtn = document.getElementById('lang-en');
        if (ptBtn) ptBtn.addEventListener('click', function () { setLanguage('pt'); });
        if (enBtn) enBtn.addEventListener('click', function () { setLanguage('en'); });
        applyLanguage(detectLanguage());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
