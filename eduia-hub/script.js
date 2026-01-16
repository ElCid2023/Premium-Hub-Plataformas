// Dados das IAs educacionais
const iasData = [
    // Ferramentas de Programação e IA
    {
        id: 1,
        name: "GitHub Copilot",
        category: "programacao",
        description: "Assistente de IA para programação que sugere código em tempo real.",
        icon: "fab fa-github",
        link: "https://github.com/features/copilot",
        features: ["Autocompletar código", "Sugestões inteligentes", "Múltiplas linguagens", "Integração IDE"],
        educationLevel: ["superior"]
    },
    {
        id: 2,
        name: "ChatGPT para Código",
        category: "programacao",
        description: "IA conversacional especializada em programação e debugging.",
        icon: "fas fa-code",
        link: "https://chat.openai.com",
        features: ["Explicação de código", "Debugging", "Otimização", "Documentação"],
        educationLevel: ["medio", "superior"]
    },
    {
        id: 3,
        name: "Replit AI",
        category: "programacao",
        description: "IDE online com IA integrada para programação colaborativa.",
        icon: "fas fa-laptop-code",
        link: "https://replit.com",
        features: ["IDE online", "IA integrada", "Colaboração", "Deploy automático"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 4,
        name: "CodeT5",
        category: "programacao",
        description: "IA para geração e compreensão de código em múltiplas linguagens.",
        icon: "fas fa-robot",
        link: "https://huggingface.co/Salesforce/codet5-base",
        features: ["Geração de código", "Tradução entre linguagens", "Resumo de código", "Refatoração"],
        educationLevel: ["superior"]
    },
    {
        id: 5,
        name: "Tabnine",
        category: "programacao",
        description: "Assistente de IA para autocompletar código com alta precisão.",
        icon: "fas fa-magic",
        link: "https://www.tabnine.com",
        features: ["Autocompletar avançado", "Suporte a 30+ linguagens", "Aprendizado local", "Integração universal"],
        educationLevel: ["medio", "superior"]
    },
    
    // Ferramentas Arduino e Eletrônica
    {
        id: 6,
        name: "Tinkercad Circuits",
        category: "arduino",
        description: "Simulador online de circuitos Arduino com IA para sugestões.",
        icon: "fas fa-microchip",
        link: "https://www.tinkercad.com/circuits",
        features: ["Simulação em tempo real", "Biblioteca de componentes", "Código automático", "Projetos prontos"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 7,
        name: "Fritzing AI",
        category: "eletronica",
        description: "Software para design de circuitos com assistência de IA.",
        icon: "fas fa-project-diagram",
        link: "https://fritzing.org",
        features: ["Design de PCB", "Esquemático automático", "Lista de componentes", "Simulação"],
        educationLevel: ["medio", "superior"]
    },
    {
        id: 8,
        name: "CircuitLab",
        category: "eletronica",
        description: "Simulador de circuitos online com análise inteligente.",
        icon: "fas fa-bolt",
        link: "https://www.circuitlab.com",
        features: ["Simulação SPICE", "Análise AC/DC", "Gráficos automáticos", "Otimização de circuitos"],
        educationLevel: ["superior"]
    },
    {
        id: 9,
        name: "Arduino IDE 2.0",
        category: "arduino",
        description: "IDE oficial do Arduino com recursos de IA para programação.",
        icon: "fas fa-cogs",
        link: "https://www.arduino.cc/en/software",
        features: ["Autocompletar código", "Debugging avançado", "Gerenciador de bibliotecas", "Monitor serial"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 10,
        name: "EasyEDA",
        category: "eletronica",
        description: "Ferramenta online para design de PCB com IA para roteamento.",
        icon: "fas fa-draw-polygon",
        link: "https://easyeda.com",
        features: ["Roteamento automático", "Biblioteca gigante", "Simulação integrada", "Fabricação direta"],
        educationLevel: ["medio", "superior"]
    },
    
    // Ferramentas Educacionais Gerais
    {
        id: 11,
        name: "Khan Academy Khanmigo",
        category: "geral",
        description: "Tutor de IA personalizado para matemática, ciências e programação.",
        icon: "fas fa-graduation-cap",
        link: "https://www.khanacademy.org/khan-labs",
        features: ["Tutoria personalizada", "Exercícios adaptativos", "Feedback instantâneo", "Múltiplas disciplinas"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 12,
        name: "Wolfram Alpha",
        category: "matematica",
        description: "Motor de conhecimento computacional para matemática e engenharia.",
        icon: "fas fa-calculator",
        link: "https://www.wolframalpha.com",
        features: ["Cálculos complexos", "Gráficos interativos", "Análise de dados", "Soluções passo a passo"],
        educationLevel: ["medio", "superior"]
    },
    {
        id: 13,
        name: "GeoGebra",
        category: "matematica",
        description: "Plataforma interativa para matemática, geometria e programação.",
        icon: "fas fa-shapes",
        link: "https://www.geogebra.org",
        features: ["Geometria dinâmica", "Gráficos 3D", "Calculadora gráfica", "Programação visual"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 14,
        name: "Scratch for Arduino",
        category: "arduino",
        description: "Programação visual para Arduino usando blocos Scratch.",
        icon: "fas fa-puzzle-piece",
        link: "https://scratch.mit.edu/arduino",
        features: ["Programação visual", "Blocos drag-and-drop", "Simulação virtual", "Projetos educativos"],
        educationLevel: ["fundamental", "medio"]
    },
    {
        id: 15,
        name: "Codecademy AI",
        category: "programacao",
        description: "Plataforma de ensino de programação com IA personalizada.",
        icon: "fas fa-laptop-code",
        link: "https://www.codecademy.com",
        features: ["Cursos interativos", "Projetos práticos", "Feedback IA", "Certificações"],
        educationLevel: ["medio", "superior"]
    },
    
    // Ferramentas de Simulação e Modelagem
    {
        id: 16,
        name: "Falstad Circuit Simulator",
        category: "eletronica",
        description: "Simulador de circuitos eletrônicos em tempo real.",
        icon: "fas fa-wave-square",
        link: "https://www.falstad.com/circuit/",
        features: ["Simulação em tempo real", "Visualização de sinais", "Componentes diversos", "Interface intuitiva"],
        educationLevel: ["medio", "superior"]
    },
    {
        id: 17,
        name: "LTspice",
        category: "eletronica",
        description: "Simulador SPICE gratuito para análise de circuitos.",
        icon: "fas fa-chart-line",
        link: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
        features: ["Simulação SPICE", "Análise AC/DC/Transiente", "Modelos precisos", "Otimização automática"],
        educationLevel: ["superior"]
    },
    {
        id: 18,
        name: "Wokwi Arduino Simulator",
        category: "arduino",
        description: "Simulador online de Arduino com componentes virtuais.",
        icon: "fas fa-microchip",
        link: "https://wokwi.com",
        features: ["Simulação completa", "Componentes virtuais", "Debugging visual", "Compartilhamento fácil"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 19,
        name: "Photomath",
        category: "matematica",
        description: "IA para resolver problemas matemáticos através de fotos.",
        icon: "fas fa-camera",
        link: "https://photomath.com",
        features: ["Reconhecimento de texto", "Soluções passo a passo", "Gráficos interativos", "Múltiplos métodos"],
        educationLevel: ["fundamental", "medio", "superior"]
    },
    {
        id: 21,
        name: "Onshape",
        category: "design",
        description: "CAD 3D online com IA para design de produtos eletrônicos.",
        icon: "fas fa-cube",
        link: "https://www.onshape.com",
        features: ["CAD 3D completo", "Colaboração em tempo real", "Versionamento automático", "Simulação integrada"],
        educationLevel: ["superior"]
    },
    {
        id: 22,
        name: "KiCad",
        category: "eletronica",
        description: "Suite completa para design de PCB com automação inteligente.",
        icon: "fas fa-microchip",
        link: "https://www.kicad.org",
        features: ["Design de PCB", "Esquemático", "Simulação SPICE", "Biblioteca extensa"],
        educationLevel: ["medio", "superior"]
    }
];

// Dados dos tutoriais
const tutoriaisData = [
    {
        id: 1,
        title: "GitHub Copilot para Iniciantes",
        description: "Guia completo para usar IA na programação",
        image: "https://via.placeholder.com/300x200/667eea/ffffff?text=GitHub+Copilot",
        category: "programacao"
    },
    {
        id: 2,
        title: "Arduino com Tinkercad",
        description: "Simulação de circuitos Arduino online",
        image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=Arduino+Tinkercad",
        category: "arduino"
    },
    {
        id: 3,
        title: "Eletrônica com IA",
        description: "Design de PCB com assistência inteligente",
        image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Eletrônica+IA",
        category: "eletronica"
    },
    {
        id: 4,
        title: "Programação Visual",
        description: "Scratch e blocos para Arduino",
        image: "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Programação+Visual",
        category: "programacao"
    }
];

// Variáveis globais
let selectedText = '';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadIAs();
    loadTutorials();
    setupEventListeners();
    setupContextMenu();
});

// Carregar IAs
function loadIAs(category = 'all') {
    const grid = document.getElementById('iasGrid');
    const filteredIAs = category === 'all' ? iasData : iasData.filter(ia => 
        ia.category === category || ia.educationLevel.includes(category)
    );

    grid.innerHTML = filteredIAs.map(ia => `
        <div class="ia-card" data-category="${ia.category}">
            <h3><i class="${ia.icon}"></i> ${ia.name}</h3>
            <div class="category">${getCategoryName(ia.category)}</div>
            <p>${ia.description}</p>
            <div class="features">
                ${ia.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="ia-actions">
                <a href="${ia.link}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> Acessar
                </a>
                <button class="btn btn-secondary tutorial-btn" data-id="${ia.id}">
                    <i class="fas fa-file-pdf"></i> Tutorial PDF
                </button>
                <button class="btn btn-secondary" onclick="showIADetails(${ia.id})">
                    <i class="fas fa-info-circle"></i> Detalhes
                </button>
            </div>
        </div>
    `).join('');
}

// Carregar tutoriais
function loadTutorials() {
    const grid = document.getElementById('tutoriaisGrid');
    grid.innerHTML = tutoriaisData.map(tutorial => `
        <div class="tutorial-card">
            <img src="${tutorial.image}" alt="${tutorial.title}">
            <div class="tutorial-content">
                <h4>${tutorial.title}</h4>
                <p>${tutorial.description}</p>
                <a href="Tutorial de ${tutorial.title}.pdf" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-pdf"></i> Baixar PDF
                </a>
            </div>
        </div>
    `).join('');
}

// Configurar event listeners
function setupEventListeners() {
    // Filtros de categoria
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            loadIAs(category);
        });
    });

    // Modal
    const modal = document.getElementById('iaModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Seletor de idioma
    document.getElementById('languageSelect').addEventListener('change', function() {
        translatePage(this.value);
    });

    // Botões de tutorial
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tutorial-btn')) {
            const iaId = parseInt(e.target.dataset.id);
            showTutorialPDF(iaId);
        }
    });
}

// Configurar menu de contexto
function setupContextMenu() {
    const contextMenu = document.getElementById('contextMenu');

    document.addEventListener('contextmenu', function(e) {
        const selection = window.getSelection().toString();
        if (selection.length > 0) {
            e.preventDefault();
            selectedText = selection;
            contextMenu.style.display = 'block';
            contextMenu.style.left = e.pageX + 'px';
            contextMenu.style.top = e.pageY + 'px';
        }
    });

    document.addEventListener('click', function() {
        contextMenu.style.display = 'none';
    });
}

// Traduzir seleção
function translateSelection() {
    if (selectedText) {
        const targetLang = document.getElementById('languageSelect').value;
        translateText(selectedText, targetLang);
    }
}

// Mostrar tutorial HTML
function showTutorialPDF(iaId) {
    const ia = iasData.find(i => i.id === iaId);
    if (ia) {
        // Mapear IDs para HTMLs
        const htmlMap = {
            1: "Tutorial de GitHub Copilot.html",
            2: "Tutorial de ChatGPT.html",
            3: "Tutorial de Replit AI.html",
            4: "Tutorial de CodeT5.html",
            6: "Tutorial de Tinkercad Circuits.html",
            7: "Tutorial de Fritzing AI.html",
            8: "Tutorial de CircuitLab.html",
            9: "Tutorial de Arduino IDE 2.0.html",
            10: "Tutorial de EasyEDA.html",
            11: "Tutorial de Khan Academy Khanmigo.html",
            12: "Tutorial de Wolfram Alpha.html",
            13: "Tutorial de GeoGebra.html",
            14: "Tutorial de Scratch for Arduino.html",
            15: "Tutorial de Codecademy AI.html",
            16: "Tutorial de Falstad Circuit Simulator.html",
            17: "Tutorial de LTspice.html",
            18: "Tutorial de Wokwi Arduino Simulator.html",
            19: "Tutorial de Photomath.html",
            21: "Tutorial de Onshape.html",
            22: "Tutorial de KiCad.html"
        };
        
        const htmlUrl = htmlMap[iaId] || `Tutorial de ${ia.name}.html`;
        window.open(htmlUrl, '_blank');
    }
}

// Mostrar detalhes da IA
function showIADetails(iaId) {
    const ia = iasData.find(i => i.id === iaId);
    const modal = document.getElementById('iaModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2><i class="${ia.icon}"></i> ${ia.name}</h2>
        <div class="category">${getCategoryName(ia.category)}</div>
        <p><strong>Descrição:</strong> ${ia.description}</p>
        <h3>Recursos Principais:</h3>
        <ul>
            ${ia.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <h3>Níveis Educacionais:</h3>
        <div class="education-levels">
            ${ia.educationLevel.map(level => `<span class="level-tag">${getEducationLevelName(level)}</span>`).join('')}
        </div>
        <div class="modal-actions">
            <a href="${ia.link}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Acessar Ferramenta
            </a>
            <button class="btn btn-secondary" onclick="showTutorialPDF(${ia.id})">
                <i class="fas fa-file-pdf"></i> PDF
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// Funções auxiliares
function getCategoryName(category) {
    const names = {
        'programacao': 'Programação',
        'arduino': 'Arduino',
        'eletronica': 'Eletrônica',
        'matematica': 'Matemática',
        'design': 'Design 3D',
        'geral': 'Uso Geral'
    };
    return names[category] || category;
}

function getEducationLevelName(level) {
    const names = {
        'fundamental': 'Fundamental',
        'medio': 'Médio',
        'superior': 'Superior'
    };
    return names[level] || level;
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Tradução de texto
async function translateText(text, targetLang) {
    try {
        const translatedText = await simulateTranslation(text, targetLang);
        showTranslationPopup(text, translatedText, targetLang);
    } catch (error) {
        console.error('Erro na tradução:', error);
        alert('Erro ao traduzir texto. Tente novamente.');
    }
}

// Simulação de tradução
async function simulateTranslation(text, targetLang) {
    const translations = {
        'en': 'Translation to English: ' + text,
        'es': 'Traducción al español: ' + text,
        'pt': text
    };
    
    return translations[targetLang] || `Translated to ${targetLang}: ${text}`;
}

// Mostrar popup de tradução
function showTranslationPopup(originalText, translatedText, targetLang) {
    const popup = document.createElement('div');
    popup.className = 'translation-popup';
    popup.innerHTML = `
        <div class="translation-content">
            <h4>Tradução</h4>
            <p><strong>Original:</strong> ${originalText}</p>
            <p><strong>Traduzido (${targetLang}):</strong> ${translatedText}</p>
            <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
    `;
    
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 4000;
        max-width: 400px;
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        if (popup.parentElement) {
            popup.remove();
        }
    }, 5000);
}

// Tradução da página
function translatePage(targetLang) {
    const translations = {
        'pt': {
            'title': 'EduIA Hub - Plataforma de IAs Educacionais',
            'hero_title': 'Todas as IAs Educacionais em um só lugar',
            'hero_subtitle': 'Descubra ferramentas de IA gratuitas para transformar sua experiência educacional'
        },
        'en': {
            'title': 'EduIA Hub - Educational AI Platform',
            'hero_title': 'All Educational AIs in one place',
            'hero_subtitle': 'Discover free AI tools to transform your educational experience'
        },
        'es': {
            'title': 'EduIA Hub - Plataforma de IAs Educativas',
            'hero_title': 'Todas las IAs Educativas en un solo lugar',
            'hero_subtitle': 'Descubre herramientas de IA gratuitas para transformar tu experiencia educativa'
        }
    };

    const lang = translations[targetLang];
    if (lang) {
        document.title = lang.title;
        document.querySelector('.hero-content h2').textContent = lang.hero_title;
        document.querySelector('.hero-content p').textContent = lang.hero_subtitle;
    }
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
    
    // Smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId !== 'premium') {
                scrollToSection(targetId);
            }
        });
    });
});