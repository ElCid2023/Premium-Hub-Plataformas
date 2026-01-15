// Dados das IAs de Marketing
const iasData = [
    {
        id: 1,
        name: "ChatGPT",
        category: "content",
        description: "IA conversacional para criação de conteúdo, copy, e-mails e estratégias de marketing",
        icon: "fas fa-comments",
        link: "https://chat.openai.com?ref=marketiahub",
        tutorial: "https://www.youtube.com/watch?v=JTxsNm9IdYU",
        campaignTutorial: "https://www.youtube.com/watch?v=Osv7WNs-H8Y",
        features: ["Copywriting", "E-mail Marketing", "Brainstorming", "Roteiros"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 2,
        name: "Canva AI",
        category: "design",
        description: "Criação de designs profissionais para redes sociais e marketing com IA",
        icon: "fas fa-palette",
        link: "https://www.canva.com",
        tutorial: "https://www.youtube.com/watch?v=8KsTZzR9RbE",
        campaignTutorial: "https://www.youtube.com/watch?v=X3bDPPjWQP4",
        features: ["Posts Sociais", "Banners", "Logos", "Apresentações"],
        categoryName: "Design"
    },
    {
        id: 3,
        name: "Copy.ai",
        category: "content",
        description: "Gerador de copy e conteúdo para anúncios, e-mails e redes sociais",
        icon: "fas fa-pen-fancy",
        link: "https://www.copy.ai",
        tutorial: "https://www.youtube.com/watch?v=mBYu5NoXBcs",
        campaignTutorial: "https://www.youtube.com/watch?v=4IYIO6g2OjU",
        features: ["Headlines", "Anúncios", "E-mails", "Descrições"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 4,
        name: "Hootsuite Insights",
        category: "social",
        description: "Análise e agendamento inteligente para redes sociais",
        icon: "fas fa-chart-line",
        link: "https://www.hootsuite.com",
        tutorial: "https://www.youtube.com/watch?v=wckzxLEG_5s",
        campaignTutorial: "https://www.youtube.com/watch?v=lnJvQXHKNkg",
        features: ["Agendamento", "Analytics", "Monitoramento", "Relatórios"],
        categoryName: "Redes Sociais"
    },
    {
        id: 5,
        name: "Google Analytics Intelligence",
        category: "traffic",
        description: "Insights automáticos sobre tráfego e comportamento do usuário",
        icon: "fas fa-chart-bar",
        link: "https://analytics.google.com",
        tutorial: "https://www.youtube.com/watch?v=gBeMELnxdIg",
        campaignTutorial: "https://www.youtube.com/watch?v=8aCCGGBIZOw",
        features: ["Insights Automáticos", "Previsões", "Anomalias", "Relatórios"],
        categoryName: "Tráfego"
    },
    {
        id: 6,
        name: "HubSpot AI",
        category: "sales",
        description: "Automação de vendas e marketing com inteligência artificial",
        icon: "fas fa-handshake",
        link: "https://www.hubspot.com",
        tutorial: "https://www.youtube.com/watch?v=xNQ2ru7-Qys",
        campaignTutorial: "https://www.youtube.com/watch?v=INU7dfbqJws",
        features: ["Lead Scoring", "Chatbots", "E-mail Automation", "CRM"],
        categoryName: "Vendas"
    },
    {
        id: 7,
        name: "Jasper AI",
        category: "content",
        description: "Assistente de escrita para blogs, anúncios e conteúdo de marketing",
        icon: "fas fa-robot",
        link: "https://www.jasper.ai",
        tutorial: "https://www.youtube.com/watch?v=OnuJWo4dFuE",
        campaignTutorial: "https://www.youtube.com/watch?v=VjNjZ4kzAzM",
        features: ["Blog Posts", "Anúncios", "E-mails", "SEO Content"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 8,
        name: "Buffer AI",
        category: "social",
        description: "Otimização automática de posts para redes sociais",
        icon: "fas fa-share-alt",
        link: "https://buffer.com",
        tutorial: "https://www.youtube.com/watch?v=2jbqI9-jKQE",
        campaignTutorial: "https://www.youtube.com/watch?v=hVlGKvMwelu",
        features: ["Agendamento Inteligente", "Hashtags", "Analytics", "Engagement"],
        categoryName: "Redes Sociais"
    },
    {
        id: 9,
        name: "Mailchimp AI",
        category: "sales",
        description: "E-mail marketing inteligente com segmentação automática",
        icon: "fas fa-envelope",
        link: "https://mailchimp.com",
        tutorial: "https://www.youtube.com/watch?v=o_NdVSIrEHs",
        campaignTutorial: "https://www.youtube.com/watch?v=KQVQJBhHBEE",
        features: ["Segmentação", "A/B Testing", "Automação", "Personalização"],
        categoryName: "Vendas"
    },
    {
        id: 10,
        name: "Semrush AI",
        category: "traffic",
        description: "SEO e análise de concorrência com insights de IA",
        icon: "fas fa-search",
        link: "https://www.semrush.com",
        tutorial: "https://www.youtube.com/watch?v=4B7dqKJQ7QE",
        campaignTutorial: "https://www.youtube.com/watch?v=MYE6T_gd7H0",
        features: ["Keyword Research", "Competitor Analysis", "SEO Audit", "Content Ideas"],
        categoryName: "Tráfego"
    },
    {
        id: 11,
        name: "Loom AI",
        category: "content",
        description: "Criação de vídeos explicativos e tutoriais com IA",
        icon: "fas fa-video",
        link: "https://www.loom.com",
        tutorial: "https://www.youtube.com/watch?v=Hso8yLzkqj8",
        campaignTutorial: "https://www.youtube.com/watch?v=BQ6aLXCBVVE",
        features: ["Screen Recording", "Video Editing", "Transcription", "Analytics"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 12,
        name: "Drift AI",
        category: "sales",
        description: "Chatbots inteligentes para conversão e atendimento",
        icon: "fas fa-comment-dots",
        link: "https://www.drift.com",
        tutorial: "https://www.youtube.com/watch?v=QnvLkawNBzQ",
        campaignTutorial: "https://www.youtube.com/watch?v=7XvmP8p1wvs",
        features: ["Chatbots", "Lead Qualification", "Live Chat", "Conversational Marketing"],
        categoryName: "Vendas"
    },
    {
        id: 13,
        name: "Meta Pixel",
        category: "traffic",
        description: "Rastreamento e otimização de campanhas no Facebook e Instagram",
        icon: "fab fa-facebook",
        link: "https://business.facebook.com/events_manager2/overview",
        tutorial: "https://www.youtube.com/watch?v=gfkQVfP_Dys",
        campaignTutorial: "https://www.youtube.com/watch?v=ne_UYfDmDpc",
        features: ["Pixel Tracking", "Conversões", "Remarketing", "Otimização"],
        categoryName: "Tráfego"
    },
    {
        id: 14,
        name: "Google Tag Manager",
        category: "traffic",
        description: "Gerenciamento de tags e rastreamento sem código",
        icon: "fab fa-google",
        link: "https://tagmanager.google.com",
        tutorial: "https://www.youtube.com/watch?v=9M4orKMwzgE",
        campaignTutorial: "https://www.youtube.com/watch?v=hBBOjkzVWuM",
        features: ["Tag Management", "Analytics", "Conversões", "E-commerce"],
        categoryName: "Tráfego"
    },
    {
        id: 15,
        name: "Hotjar",
        category: "traffic",
        description: "Análise de comportamento do usuário com heatmaps e gravações",
        icon: "fas fa-fire",
        link: "https://www.hotjar.com",
        tutorial: "https://www.youtube.com/watch?v=wH4fBDkBQs0",
        campaignTutorial: "https://www.youtube.com/watch?v=xNQ2ru7-Qys",
        features: ["Heatmaps", "Session Recordings", "Surveys", "Funnels"],
        categoryName: "Tráfego"
    },
    {
        id: 16,
        name: "Writesonic",
        category: "content",
        description: "IA para criação de artigos, anúncios e conteúdo SEO",
        icon: "fas fa-feather-alt",
        link: "https://writesonic.com",
        tutorial: "https://www.youtube.com/watch?v=8vU3IdE8rR0",
        campaignTutorial: "https://www.youtube.com/watch?v=VjNjZ4kzAzM",
        features: ["Article Writer", "Ad Copy", "SEO Content", "Product Descriptions"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 17,
        name: "Later AI",
        category: "social",
        description: "Agendamento inteligente e criação de conteúdo para redes sociais",
        icon: "fas fa-calendar-alt",
        link: "https://later.com",
        tutorial: "https://www.youtube.com/watch?v=7XvmP8p1wvs",
        campaignTutorial: "https://www.youtube.com/watch?v=hVlGKvMwelu",
        features: ["Auto Scheduling", "Visual Planner", "Hashtag Suggestions", "Analytics"],
        categoryName: "Redes Sociais"
    },
    {
        id: 18,
        name: "Typeform AI",
        category: "sales",
        description: "Formulários inteligentes para captura e qualificação de leads",
        icon: "fas fa-wpforms",
        link: "https://www.typeform.com",
        tutorial: "https://www.youtube.com/watch?v=yGn_17Xs-2s",
        campaignTutorial: "https://www.youtube.com/watch?v=INU7dfbqJws",
        features: ["Smart Forms", "Lead Scoring", "Conditional Logic", "Integrations"],
        categoryName: "Vendas"
    },
    {
        id: 19,
        name: "Figma AI",
        category: "design",
        description: "Design colaborativo com recursos de IA para prototipagem",
        icon: "fab fa-figma",
        link: "https://www.figma.com",
        tutorial: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
        campaignTutorial: "https://www.youtube.com/watch?v=X3bDPPjWQP4",
        features: ["Prototyping", "Design Systems", "Collaboration", "Auto Layout"],
        categoryName: "Design"
    },
    {
        id: 20,
        name: "Zapier AI",
        category: "sales",
        description: "Automação de processos e integração entre ferramentas de marketing",
        icon: "fas fa-bolt",
        link: "https://zapier.com",
        tutorial: "https://www.youtube.com/watch?v=sIkLcjMfjDc",
        campaignTutorial: "https://www.youtube.com/watch?v=INU7dfbqJws",
        features: ["Workflow Automation", "App Integration", "Lead Management", "Data Sync"],
        categoryName: "Vendas"
    },
    {
        id: 21,
        name: "Unsplash AI",
        category: "design",
        description: "Banco de imagens gratuitas com busca inteligente por IA",
        icon: "fas fa-camera",
        link: "https://unsplash.com",
        tutorial: "https://www.youtube.com/watch?v=F2JCjVSZlG0",
        campaignTutorial: "https://www.youtube.com/watch?v=X3bDPPjWQP4",
        features: ["AI Search", "Free Photos", "High Quality", "Commercial Use"],
        categoryName: "Design"
    },
    {
        id: 22,
        name: "Calendly AI",
        category: "sales",
        description: "Agendamento inteligente de reuniões e qualificação automática",
        icon: "fas fa-calendar-check",
        link: "https://calendly.com",
        tutorial: "https://www.youtube.com/watch?v=p2LgT3GHPMI",
        campaignTutorial: "https://www.youtube.com/watch?v=INU7dfbqJws",
        features: ["Smart Scheduling", "Lead Qualification", "Meeting Analytics", "Integrations"],
        categoryName: "Vendas"
    },
    {
        id: 23,
        name: "Notion AI",
        category: "content",
        description: "Workspace inteligente para planejamento e criação de conteúdo",
        icon: "fas fa-sticky-note",
        link: "https://www.notion.so",
        tutorial: "https://www.youtube.com/watch?v=aA7si7AmPkY",
        campaignTutorial: "https://www.youtube.com/watch?v=4IYIO6g2OjU",
        features: ["Content Planning", "AI Writing", "Templates", "Collaboration"],
        categoryName: "Criação de Conteúdo"
    },
    {
        id: 24,
        name: "Sprout Social AI",
        category: "social",
        description: "Gerenciamento completo de redes sociais com insights de IA",
        icon: "fas fa-seedling",
        link: "https://sproutsocial.com",
        tutorial: "https://www.youtube.com/watch?v=kQvf7rfkShE",
        campaignTutorial: "https://www.youtube.com/watch?v=lnJvQXHKNkg",
        features: ["Social Listening", "Content Optimization", "Audience Insights", "Reporting"],
        categoryName: "Redes Sociais"
    }
];

// Traduções
const translations = {
    pt: {
        "hero-title": "Todas as IAs de Marketing Gratuitas em um Só Lugar",
        "hero-subtitle": "Descubra e aprenda a usar as melhores ferramentas de IA para marketing digital, vendas e redes sociais",
        "filter-all": "Todas",
        "filter-content": "Criação de Conteúdo",
        "filter-social": "Redes Sociais",
        "filter-traffic": "Tráfego",
        "filter-sales": "Vendas",
        "filter-design": "Design",
        "translate": "Traduzir",
        "translation-title": "Tradução",
        "original": "Original:",
        "translated": "Traduzido:",
        "footer-text": "© 2024 MarketIA Hub - Democratizando o acesso às IAs de Marketing",
        "access": "Acessar",
        "tutorial": "Tutorial",
        "campaign": "Campanhas",
        "features": "Recursos:"
    },
    en: {
        "hero-title": "All Free Marketing AIs in One Place",
        "hero-subtitle": "Discover and learn to use the best AI tools for digital marketing, sales and social media",
        "filter-all": "All",
        "filter-content": "Content Creation",
        "filter-social": "Social Media",
        "filter-traffic": "Traffic",
        "filter-sales": "Sales",
        "filter-design": "Design",
        "translate": "Translate",
        "translation-title": "Translation",
        "original": "Original:",
        "translated": "Translated:",
        "footer-text": "© 2024 MarketIA Hub - Democratizing access to Marketing AIs",
        "access": "Access",
        "tutorial": "Tutorial",
        "campaign": "Campaigns",
        "features": "Features:"
    },
    es: {
        "hero-title": "Todas las IAs de Marketing Gratuitas en un Solo Lugar",
        "hero-subtitle": "Descubre y aprende a usar las mejores herramientas de IA para marketing digital, ventas y redes sociales",
        "filter-all": "Todas",
        "filter-content": "Creación de Contenido",
        "filter-social": "Redes Sociales",
        "filter-traffic": "Tráfico",
        "filter-sales": "Ventas",
        "filter-design": "Diseño",
        "translate": "Traducir",
        "translation-title": "Traducción",
        "original": "Original:",
        "translated": "Traducido:",
        "footer-text": "© 2024 MarketIA Hub - Democratizando el acceso a las IAs de Marketing",
        "access": "Acceder",
        "tutorial": "Tutorial",
        "campaign": "Campañas",
        "features": "Características:"
    }
};

// Variáveis globais
let currentLanguage = 'pt';
let selectedText = '';
let contextMenu = null;
let translationModal = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    contextMenu = document.getElementById('contextMenu');
    translationModal = document.getElementById('translationModal');
    
    renderIAs('all');
    setupEventListeners();
    updateLanguage();
}

function setupEventListeners() {
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderIAs(e.target.dataset.filter);
        });
    });

    // Seletor de idioma
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
    });

    // Menu contextual
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', hideContextMenu);
    document.getElementById('translateOption').addEventListener('click', translateSelectedText);

    // Modal de tradução
    document.querySelector('.close').addEventListener('click', closeTranslationModal);
    window.addEventListener('click', (e) => {
        if (e.target === translationModal) {
            closeTranslationModal();
        }
        if (e.target === document.getElementById('campaignModal')) {
            closeCampaignModal();
        }
        if (e.target === document.getElementById('tutorialModal')) {
            closeTutorialModal();
        }
    });
    
    // Modal de campanhas
    document.getElementById('closeCampaign').addEventListener('click', closeCampaignModal);
    
    // Modal de tutoriais
    document.getElementById('closeTutorial').addEventListener('click', closeTutorialModal);
    
    // Botões de campanhas e tutoriais
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('campaign-btn')) {
            const iaId = parseInt(e.target.dataset.id);
            showCampaignModal(iaId);
        }
        if (e.target.classList.contains('tutorial-btn')) {
            const iaId = parseInt(e.target.dataset.id);
            showTutorialPDF(iaId);
        }
    });

    // Seleção de texto
    document.addEventListener('mouseup', handleTextSelection);
}

function renderIAs(filter) {
    const container = document.getElementById('iasContainer');
    const filteredIAs = filter === 'all' ? iasData : iasData.filter(ia => ia.category === filter);
    
    container.innerHTML = filteredIAs.map(ia => `
        <div class="ia-card" data-category="${ia.category}">
            <div class="ia-card-header">
                <div class="ia-icon">
                    <i class="${ia.icon}"></i>
                </div>
                <div>
                    <h3 class="ia-title">${ia.name}</h3>
                    <span class="ia-category">${ia.categoryName}</span>
                </div>
            </div>
            <p class="ia-description">${ia.description}</p>
            <div class="ia-features">
                <h4 data-translate="features">${translations[currentLanguage]['features']}</h4>
                <div class="features-list">
                    ${ia.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
            <div class="ia-actions">
                <a href="${ia.link}" target="_blank" class="btn btn-primary" data-translate="access">${translations[currentLanguage]['access']}</a>
                <button class="btn btn-secondary tutorial-btn" data-id="${ia.id}" data-translate="tutorial">${translations[currentLanguage]['tutorial']}</button>
                <button class="btn btn-tertiary campaign-btn" data-id="${ia.id}" data-translate="campaign">${translations[currentLanguage]['campaign']}</button>
                <button class="btn btn-premium-cta" onclick="showPremiumModal()">
                    <i class="fas fa-crown"></i> Premium
                </button>
            </div>
        </div>
    `).join('');
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Atualizar botões nos cards
    document.querySelectorAll('.btn[data-translate="access"]').forEach(btn => {
        btn.textContent = translations[currentLanguage]['access'];
    });
    
    document.querySelectorAll('.btn[data-translate="tutorial"]').forEach(btn => {
        btn.textContent = translations[currentLanguage]['tutorial'];
    });
    
    document.querySelectorAll('.btn[data-translate="campaign"]').forEach(btn => {
        btn.textContent = translations[currentLanguage]['campaign'];
    });
    
    document.querySelectorAll('h4[data-translate="features"]').forEach(h4 => {
        h4.textContent = translations[currentLanguage]['features'];
    });
}

function handleTextSelection() {
    const selection = window.getSelection();
    selectedText = selection.toString().trim();
}

function handleContextMenu(e) {
    if (selectedText) {
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY);
    }
}

function showContextMenu(x, y) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}

function translateSelectedText() {
    if (!selectedText) return;
    
    hideContextMenu();
    
    // Simulação de tradução (em produção, usar API real)
    const translations = {
        pt: {
            'Marketing': 'Marketing',
            'Sales': 'Vendas',
            'Content': 'Conteúdo',
            'Social Media': 'Redes Sociais',
            'Traffic': 'Tráfego',
            'Design': 'Design'
        },
        en: {
            'Marketing': 'Marketing',
            'Vendas': 'Sales',
            'Conteúdo': 'Content',
            'Redes Sociais': 'Social Media',
            'Tráfego': 'Traffic',
            'Design': 'Design'
        },
        es: {
            'Marketing': 'Marketing',
            'Vendas': 'Ventas',
            'Conteúdo': 'Contenido',
            'Redes Sociais': 'Redes Sociales',
            'Tráfego': 'Tráfico',
            'Design': 'Diseño'
        }
    };
    
    const targetLang = currentLanguage === 'pt' ? 'en' : 'pt';
    const translatedText = translations[targetLang][selectedText] || `[Tradução de "${selectedText}" para ${targetLang}]`;
    
    showTranslationModal(selectedText, translatedText);
}

function showTranslationModal(original, translated) {
    document.getElementById('originalText').textContent = original;
    document.getElementById('translatedText').textContent = translated;
    translationModal.style.display = 'block';
}

function closeTranslationModal() {
    translationModal.style.display = 'none';
}

function showCampaignModal(iaId) {
    const ia = iasData.find(item => item.id === iaId);
    if (!ia) return;
    
    document.getElementById('campaignTitle').textContent = `Tutorial de Campanha: ${ia.name}`;
    document.getElementById('campaignContent').innerHTML = getCampaignTutorial(ia);
    document.getElementById('campaignModal').style.display = 'block';
}

function closeCampaignModal() {
    document.getElementById('campaignModal').style.display = 'none';
}

function showTutorialModal(iaId) {
    const ia = iasData.find(item => item.id === iaId);
    if (!ia) return;
    
    document.getElementById('tutorialTitle').textContent = `Como Usar: ${ia.name}`;
    document.getElementById('tutorialContent').innerHTML = getTutorialContent(ia);
    document.getElementById('tutorialModal').style.display = 'block';
}

function closeTutorialModal() {
    document.getElementById('tutorialModal').style.display = 'none';
}

// Mostrar tutorial PDF
function showTutorialPDF(iaId) {
    const ia = iasData.find(item => item.id === iaId);
    if (ia) {
        const pdfUrl = `Tutorial de ${ia.name}.pdf`;
        window.open(pdfUrl, '_blank');
    }
}

function getTutorialContent(ia) {
    const tutorials = {
        1: { // ChatGPT
            steps: [
                {
                    title: "Acesso e Cadastro",
                    description: "Acesse chat.openai.com e crie sua conta gratuita com email ou Google.",
                    example: "Clique em 'Sign up' → Digite seu email → Confirme no email → Faça login"
                },
                {
                    title: "Interface Principal",
                    description: "Familiarize-se com a interface: campo de texto na parte inferior e histórico de conversas à esquerda.",
                    example: "Barra lateral: 'New Chat' (nova conversa), histórico de chats anteriores"
                },
                {
                    title: "Comandos Básicos",
                    description: "Use prompts claros e específicos. Comece com 'Atue como...' para definir o papel da IA.",
                    example: "'Atue como especialista em marketing e crie 5 títulos para um curso de Excel'"
                },
                {
                    title: "Refinamento de Respostas",
                    description: "Use 'Regenerate' para nova resposta ou continue a conversa para refinar o resultado.",
                    example: "'Torne os títulos mais persuasivos' ou 'Foque no público iniciante'"
                },
                {
                    title: "Organização",
                    description: "Renomeie conversas clicando no ícone de lápis ao lado do título da conversa.",
                    example: "Renomear para: 'Copy para Curso Excel - Abril 2024'"
                }
            ]
        },
        2: { // Canva AI
            steps: [
                {
                    title: "Cadastro e Acesso",
                    description: "Acesse canva.com, crie conta gratuita e escolha 'Uso pessoal' ou 'Equipe pequena'.",
                    example: "Cadastro com Google → Escolher 'Para que você usará o Canva?' → Pular tutorial"
                },
                {
                    title: "Criando Novo Design",
                    description: "Clique em 'Criar design' e escolha o formato desejado ou digite dimensões personalizadas.",
                    example: "'Post do Instagram' (1080x1080) ou 'Dimensões personalizadas' (1200x600)"
                },
                {
                    title: "Usando Templates",
                    description: "Navegue pelos templates na barra lateral esquerda, clique para aplicar e personalize.",
                    example: "Buscar 'marketing digital' → Escolher template → Clicar para editar textos"
                },
                {
                    title: "Elementos e Ferramentas",
                    description: "Use a barra lateral: Elementos (formas, ícones), Texto, Uploads (suas imagens), Fotos.",
                    example: "Elementos → Formas → Retângulo → Arrastar para o design → Mudar cor"
                },
                {
                    title: "Exportar e Compartilhar",
                    description: "Clique em 'Compartilhar' no canto superior direito, escolha 'Baixar' e selecione o formato.",
                    example: "Compartilhar → Baixar → PNG (melhor qualidade) → Baixar"
                }
            ]
        },
        13: { // Meta Pixel
            steps: [
                {
                    title: "Acesso ao Gerenciador de Eventos",
                    description: "Acesse business.facebook.com, vá em 'Gerenciador de Eventos' no menu lateral.",
                    example: "Menu → 'Todas as ferramentas' → 'Gerenciador de Eventos' → 'Conectar fonte de dados'"
                },
                {
                    title: "Criar Novo Pixel",
                    description: "Clique em 'Conectar fonte de dados' → 'Web' → 'Meta Pixel' → 'Conectar'.",
                    example: "Nome do pixel: 'Meu Site 2024' → URL do site: 'www.meusite.com' → Continuar"
                },
                {
                    title: "Instalação do Código",
                    description: "Escolha 'Instalar código manualmente' e copie o código base do pixel.",
                    example: "Copiar código → Colar entre as tags <head></head> do seu site"
                },
                {
                    title: "Configurar Eventos",
                    description: "Vá em 'Eventos' → 'Configurar eventos' para rastrear ações específicas.",
                    example: "'Compra' na página de obrigado → 'Visualizar conteúdo' nas páginas de produto"
                },
                {
                    title: "Testar Pixel",
                    description: "Use a extensão 'Meta Pixel Helper' do Chrome para verificar se o pixel está funcionando.",
                    example: "Instalar extensão → Visitar seu site → Ícone verde = pixel funcionando"
                }
            ]
        },
        5: { // Google Analytics
            steps: [
                {
                    title: "Criar Conta",
                    description: "Acesse analytics.google.com, faça login com Google e clique em 'Começar a medir'.",
                    example: "Nome da conta: 'Minha Empresa' → Nome da propriedade: 'Site Principal'"
                },
                {
                    title: "Configurar Propriedade",
                    description: "Escolha 'Web', insira URL do site, selecione fuso horário e moeda.",
                    example: "URL: https://www.meusite.com → Fuso: Brasil/São Paulo → Moeda: Real (BRL)"
                },
                {
                    title: "Instalar Código de Acompanhamento",
                    description: "Copie o código GA4 e instale no <head> de todas as páginas do seu site.",
                    example: "Código: <!-- Google tag (gtag.js) --> <script async src=\"...\"></script>"
                },
                {
                    title: "Navegar nos Relatórios",
                    description: "Use o menu lateral: Tempo real, Audiência, Aquisição, Comportamento, Conversões.",
                    example: "'Tempo real' mostra visitantes agora → 'Audiência' mostra dados demográficos"
                },
                {
                    title: "Configurar Metas",
                    description: "Vá em 'Administrador' → 'Metas' para rastrear conversões importantes.",
                    example: "Meta: 'Compra concluída' → Tipo: 'Destino' → URL: '/obrigado'"
                }
            ]
        }
    };
    
    // Tutorial genérico para ferramentas sem tutorial específico
    const genericTutorial = {
        steps: [
            {
                title: "Cadastro e Acesso",
                description: "Acesse o site oficial da ferramenta e crie sua conta gratuita.",
                example: "Clique em 'Sign Up' ou 'Cadastrar' → Preencha dados → Confirme email"
            },
            {
                title: "Configuração Inicial",
                description: "Complete seu perfil e configure preferências básicas da ferramenta.",
                example: "Adicionar foto de perfil → Definir fuso horário → Escolher idioma"
            },
            {
                title: "Interface Principal",
                description: "Explore o painel principal e familiarize-se com os menus e opções disponíveis.",
                example: "Menu lateral com opções → Área de trabalho central → Configurações no canto superior"
            },
            {
                title: "Primeiro Projeto",
                description: "Crie seu primeiro projeto ou campanha seguindo o assistente da ferramenta.",
                example: "'Novo Projeto' → Escolher template → Personalizar conteúdo → Salvar"
            },
            {
                title: "Recursos Avançados",
                description: "Explore funcionalidades avançadas como integrações, automações e relatórios.",
                example: "Conectar outras ferramentas → Configurar automações → Gerar relatórios"
            }
        ]
    };
    
    const tutorial = tutorials[ia.id] || genericTutorial;
    
    return tutorial.steps.map((step, index) => `
        <div class="campaign-step">
            <div class="step-header">
                <span class="step-number">${index + 1}</span>
                <h4 class="step-title">${step.title}</h4>
            </div>
            <p class="step-description">${step.description}</p>
            <div class="step-example">
                <strong>Passo a passo:</strong> ${step.example}
            </div>
        </div>
    `).join('');
}

function getCampaignTutorial(ia) {
    const tutorials = {
        1: { // ChatGPT
            steps: [
                {
                    title: "Definação da Estratégia",
                    description: "Antes de usar o ChatGPT, defina claramente seus objetivos de marketing e público-alvo.",
                    example: "Objetivo: Aumentar vendas de curso online para empreendedores iniciantes (25-40 anos)"
                },
                {
                    title: "Criação de Personas",
                    description: "Use o ChatGPT para desenvolver personas detalhadas do seu público.",
                    example: "Prompt: 'Crie uma persona detalhada para um empreendedor iniciante de 30 anos interessado em marketing digital'"
                },
                {
                    title: "Geração de Headlines",
                    description: "Solicite várias opções de títulos persuasivos para seus anúncios e conteúdos.",
                    example: "Prompt: 'Crie 10 headlines persuasivas para um curso de marketing digital para iniciantes'"
                },
                {
                    title: "Desenvolvimento de Copy",
                    description: "Crie textos de vendas completos para landing pages, e-mails e anúncios.",
                    example: "Prompt: 'Escreva um copy de 200 palavras para vender um curso de marketing digital, focando em resultados rápidos'"
                },
                {
                    title: "Planejamento de Conteúdo",
                    description: "Gere um calendário editorial completo com temas e formatos variados.",
                    example: "Prompt: 'Crie um plano de conteúdo de 30 dias para Instagram sobre marketing digital'"
                }
            ]
        },
        2: { // Canva AI
            steps: [
                {
                    title: "Configuração da Marca",
                    description: "Configure sua paleta de cores, fontes e elementos visuais da marca no Canva.",
                    example: "Cores: #667eea (azul), #764ba2 (roxo), #ff6b6b (coral) - Fonte: Inter, Montserrat"
                },
                {
                    title: "Criação de Templates",
                    description: "Desenvolva templates padronizados para posts, stories e anúncios.",
                    example: "Template de post: Logo no canto, título em destaque, CTA no rodapé"
                },
                {
                    title: "Produção em Lote",
                    description: "Use o recurso de redimensionamento para criar conteúdo para múltiplas plataformas.",
                    example: "1 design → Post Instagram (1080x1080) → Story (1080x1920) → Facebook (1200x630)"
                },
                {
                    title: "Animações e Vídeos",
                    description: "Crie conteúdo animado para aumentar o engajamento nas redes sociais.",
                    example: "Vídeo de 15s com texto animado revelando benefícios do produto"
                },
                {
                    title: "Calendário Visual",
                    description: "Organize e agende suas criações usando o planejador de conteúdo do Canva.",
                    example: "Agendar 5 posts por semana: 2 educativos, 2 promocionais, 1 de engajamento"
                }
            ]
        },
        13: { // Meta Pixel
            steps: [
                {
                    title: "Instalação do Pixel",
                    description: "Instale o código do Meta Pixel no cabeçalho do seu site para rastrear visitantes.",
                    example: "Código: <!-- Meta Pixel Code --> <script>...fbq('init', 'SEU_PIXEL_ID')...</script>"
                },
                {
                    title: "Configuração de Eventos",
                    description: "Configure eventos personalizados para rastrear ações importantes dos usuários.",
                    example: "Eventos: ViewContent (visualização), AddToCart (carrinho), Purchase (compra)"
                },
                {
                    title: "Criação de Audiências",
                    description: "Crie audiências personalizadas baseadas no comportamento dos visitantes.",
                    example: "Audiência: Visitantes que viram produto mas não compraram nos últimos 7 dias"
                },
                {
                    title: "Campanhas de Remarketing",
                    description: "Lance campanhas direcionadas para pessoas que já interagiram com seu site.",
                    example: "Anúncio: 'Volte e ganhe 10% de desconto' para quem abandonou o carrinho"
                },
                {
                    title: "Otimização e Análise",
                    description: "Analise os dados do pixel para otimizar suas campanhas e melhorar o ROI.",
                    example: "Métrica: Taxa de conversão de 3.2% com CPA de R$ 25,00 por venda"
                }
            ]
        }
    };
    
    // Tutorial genérico para ferramentas sem tutorial específico
    const genericTutorial = {
        steps: [
            {
                title: "Planejamento Estratégico",
                description: "Defina objetivos claros, público-alvo e KPIs para sua campanha.",
                example: "Objetivo: Aumentar leads em 50% em 30 dias | Público: Empresas B2B 50-200 funcionários"
            },
            {
                title: "Configuração da Ferramenta",
                description: "Configure a ferramenta com suas informações de marca e preferências.",
                example: "Conecte suas contas de redes sociais, defina fusos horários e configurações de marca"
            },
            {
                title: "Criação de Conteúdo",
                description: "Desenvolva conteúdo relevante e envolvente para seu público-alvo.",
                example: "Crie 20 posts educativos, 10 promocionais e 5 de engajamento para o mês"
            },
            {
                title: "Execução e Monitoramento",
                description: "Lance sua campanha e monitore métricas importantes diariamente.",
                example: "Acompanhe: alcance, engajamento, cliques, conversões e ROI"
            },
            {
                title: "Otimização Contínua",
                description: "Analise resultados e ajuste estratégias para melhorar performance.",
                example: "Teste A/B em títulos, ajuste horários de publicação, refine segmentação"
            }
        ]
    };
    
    const tutorial = tutorials[ia.id] || genericTutorial;
    
    return tutorial.steps.map((step, index) => `
        <div class="campaign-step">
            <div class="step-header">
                <span class="step-number">${index + 1}</span>
                <h4 class="step-title">${step.title}</h4>
            </div>
            <p class="step-description">${step.description}</p>
            <div class="step-example">
                <strong>Exemplo prático:</strong> ${step.example}
            </div>
        </div>
    `).join('');
}

// Funções de Monetização
function showPremiumModal() {
    document.getElementById('premiumModal').style.display = 'block';
}

function closePremiumModal() {
    document.getElementById('premiumModal').style.display = 'none';
}

// Event listeners para Premium
document.addEventListener('DOMContentLoaded', function() {
    const premiumLink = document.querySelector('.premium-link');
    if (premiumLink) {
        premiumLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPremiumModal();
        });
    }
    
    const closePremiumBtn = document.getElementById('closePremium');
    if (closePremiumBtn) {
        closePremiumBtn.addEventListener('click', closePremiumModal);
    }
});