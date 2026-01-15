const toolsData = [
    {
        id: 1,
        name: "Real-Time Voice Cloning",
        category: "voice",
        description: "Ferramenta para clonagem de voz em tempo real usando poucos segundos de áudio",
        icon: "fas fa-microphone",
        link: "https://github.com/CorentinJ/Real-Time-Voice-Cloning",
        tutorial: "https://www.youtube.com/watch?v=0Q9oHNuankI",
        features: ["Clonagem com 5s de áudio", "Processamento em tempo real", "Múltiplas vozes", "Interface Python"],
        ethicalUse: "Demonstração de vulnerabilidades em autenticação por voz"
    },
    {
        id: 2,
        name: "FakeYou",
        category: "voice",
        description: "Plataforma online para síntese de voz com múltiplas personalidades",
        icon: "fas fa-robot",
        link: "https://fakeyou.com/",
        tutorial: "https://www.youtube.com/watch?v=example",
        features: ["1000+ vozes disponíveis", "Interface web", "API disponível", "Qualidade profissional"],
        ethicalUse: "Teste de sistemas de detecção de voz sintética"
    },
    {
        id: 3,
        name: "DeepFaceLab",
        category: "deepfake",
        description: "Framework completo para criação de deepfakes com controle total do processo",
        icon: "fas fa-face-grin-beam",
        link: "https://github.com/iperov/DeepFaceLab",
        tutorial: "https://www.youtube.com/watch?v=JXgnNM_LuVQ",
        features: ["Controle total do processo", "Múltiplos modelos", "GPU acelerado", "Pré-processamento avançado"],
        ethicalUse: "Pesquisa em detecção de mídia manipulada"
    },
    {
        id: 4,
        name: "First Order Motion Model",
        category: "deepfake",
        description: "Animação facial usando apenas uma imagem de referência",
        icon: "fas fa-video",
        link: "https://github.com/AliaksandrSiarohin/first-order-model",
        tutorial: "https://www.youtube.com/watch?v=mUfJOQKdtAk",
        features: ["Uma imagem + vídeo guia", "Tempo real", "Sem treinamento", "Código aberto"],
        ethicalUse: "Análise de vulnerabilidades em sistemas biométricos"
    },
    {
        id: 5,
        name: "DFDNet",
        category: "detection",
        description: "Rede neural para detecção de deepfakes em vídeos",
        icon: "fas fa-search",
        link: "https://github.com/EndlessSora/DFDNet",
        tutorial: "https://www.youtube.com/watch?v=detection",
        features: ["Detecção automática", "Alta precisão", "Análise frame-by-frame", "Relatórios detalhados"],
        ethicalUse: "Desenvolvimento de sistemas de proteção contra deepfakes"
    },
    {
        id: 6,
        name: "Wav2Lip",
        category: "deepfake",
        description: "Sincronização labial precisa para qualquer vídeo",
        icon: "fas fa-lips",
        link: "https://github.com/Rudrabha/Wav2Lip",
        tutorial: "https://www.youtube.com/watch?v=wav2lip",
        features: ["Sincronização perfeita", "Qualquer identidade", "Áudio + vídeo", "Resultados realistas"],
        ethicalUse: "Teste de robustez em sistemas de verificação facial"
    },
    {
        id: 7,
        name: "FaceSwapper",
        category: "deepfake",
        description: "Troca de rostos em tempo real usando webcam",
        icon: "fas fa-exchange-alt",
        link: "https://github.com/deepfakes/faceswap",
        tutorial: "https://www.youtube.com/watch?v=faceswap",
        features: ["Tempo real", "Webcam support", "Múltiplos rostos", "Interface gráfica"],
        ethicalUse: "Demonstração de riscos em videoconferências"
    },
    {
        id: 8,
        name: "Deepware Scanner",
        category: "detection",
        description: "Scanner online para detecção de deepfakes",
        icon: "fas fa-shield-virus",
        link: "https://scanner.deepware.ai/",
        tutorial: "https://www.youtube.com/watch?v=scanner",
        features: ["Análise online", "Múltiplos formatos", "Relatório detalhado", "API disponível"],
        ethicalUse: "Verificação de autenticidade de mídia digital"
    },
    {
        id: 9,
        name: "Voice Activity Detection",
        category: "analysis",
        description: "Análise avançada de padrões vocais para detecção de anomalias",
        icon: "fas fa-waveform-lines",
        link: "https://github.com/wiseman/py-webrtcvad",
        tutorial: "https://www.youtube.com/watch?v=vad",
        features: ["Detecção de atividade", "Análise espectral", "Padrões anômalos", "Métricas detalhadas"],
        ethicalUse: "Forense digital em investigações de áudio"
    },
    {
        id: 10,
        name: "FSGAN",
        category: "deepfake",
        description: "Geração e reenactment facial de alta qualidade",
        icon: "fas fa-magic",
        link: "https://github.com/YuvalNirkin/fsgan",
        tutorial: "https://www.youtube.com/watch?v=fsgan",
        features: ["Alta resolução", "Expressões naturais", "Controle fino", "Múltiplas técnicas"],
        ethicalUse: "Pesquisa em autenticação biométrica avançada"
    }
];

class CyberSecTools {
    constructor() {
        this.tools = toolsData;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderTools();
        this.setupEventListeners();
        this.showEthicalWarning();
    }

    renderTools() {
        const grid = document.getElementById('toolsGrid');
        const filteredTools = this.currentFilter === 'all' 
            ? this.tools 
            : this.tools.filter(tool => tool.category === this.currentFilter);

        grid.innerHTML = filteredTools.map(tool => `
            <div class="tool-card" data-category="${tool.category}">
                <div class="tool-header">
                    <i class="${tool.icon} tool-icon"></i>
                    <h3 class="tool-title">${tool.name}</h3>
                    <span class="tool-category">${this.getCategoryName(tool.category)}</span>
                </div>
                <p class="tool-description">${tool.description}</p>
                <ul class="tool-features">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="ethical-note">
                    <strong>Uso Ético:</strong> ${tool.ethicalUse}
                </div>
                <div class="tool-actions">
                    <a href="${tool.link}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Acessar
                    </a>
                    <button class="btn btn-secondary tutorial-btn" data-id="${tool.id}">
                        <i class="fas fa-play"></i> Tutorial
                    </button>
                    <button class="btn btn-tertiary implementation-btn" data-id="${tool.id}">
                        <i class="fas fa-shield-alt"></i> Uso Ético
                    </button>
                    <button class="btn btn-premium-cta" onclick="showPremiumModal()">
                        <i class="fas fa-crown"></i> Premium
                    </button>
                </div>
            </div>
        `).join('');
    }

    getCategoryName(category) {
        const categories = {
            'voice': 'Voz',
            'deepfake': 'Deepfake',
            'detection': 'Detecção',
            'analysis': 'Análise'
        };
        return categories[category] || category;
    }

    setupEventListeners() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                this.renderTools();
            });
        });

        // Event listeners para os modais
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tutorial-btn')) {
                const toolId = parseInt(e.target.dataset.id);
                this.showTutorialPDF(toolId);
            }
            if (e.target.classList.contains('implementation-btn')) {
                const toolId = parseInt(e.target.dataset.id);
                this.showImplementationModal(toolId);
            }
        });

        // Fechar modais
        document.getElementById('closeTutorial').addEventListener('click', this.closeTutorialModal);
        document.getElementById('closeImplementation').addEventListener('click', this.closeImplementationModal);
        
        // Fechar modal clicando fora
        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('tutorialModal')) {
                this.closeTutorialModal();
            }
            if (e.target === document.getElementById('implementationModal')) {
                this.closeImplementationModal();
            }
        });
    }

    showEthicalWarning() {
        setTimeout(() => {
            if (confirm('AVISO ÉTICO: Você confirma que utilizará essas ferramentas apenas para fins educacionais e de pesquisa em cybersegurança?')) {
                console.log('Uso ético confirmado pelo usuário');
            } else {
                alert('Acesso negado. Esta plataforma é destinada apenas para uso ético.');
                window.location.href = 'about:blank';
            }
        }, 2000);
    }

    showTutorialModal(toolId) {
        const tool = this.tools.find(item => item.id === toolId);
        if (!tool) return;
        
        document.getElementById('tutorialTitle').textContent = `Como Usar: ${tool.name}`;
        document.getElementById('tutorialContent').innerHTML = this.getTutorialContent(tool);
        document.getElementById('tutorialModal').style.display = 'block';
    }

    closeTutorialModal() {
        document.getElementById('tutorialModal').style.display = 'none';
    }

    showTutorialPDF(toolId) {
        const tool = this.tools.find(item => item.id === toolId);
        if (tool) {
            const pdfUrl = `Tutorial de ${tool.name}.pdf`;
            window.open(pdfUrl, '_blank');
        }
    }

    showImplementationModal(toolId) {
        const tool = this.tools.find(item => item.id === toolId);
        if (!tool) return;
        
        document.getElementById('implementationTitle').textContent = `Implementação Ética: ${tool.name}`;
        document.getElementById('implementationContent').innerHTML = this.getImplementationContent(tool);
        document.getElementById('implementationModal').style.display = 'block';
    }

    closeImplementationModal() {
        document.getElementById('implementationModal').style.display = 'none';
    }

    getTutorialContent(tool) {
        const tutorials = {
            1: { // Real-Time Voice Cloning
                steps: [
                    {
                        title: "Preparação do Ambiente",
                        description: "Configure o ambiente Python com as dependências necessárias.",
                        example: "pip install torch torchvision torchaudio → pip install -r requirements.txt"
                    },
                    {
                        title: "Coleta de Dados de Áudio",
                        description: "Grave ou obtenha amostras de áudio de 5-10 segundos da voz alvo.",
                        example: "Formato: WAV, 22kHz, mono → Qualidade: sem ruído de fundo"
                    },
                    {
                        title: "Treinamento do Modelo",
                        description: "Execute o script de treinamento com os parâmetros adequados.",
                        example: "python demo_cli.py → Selecionar arquivo de áudio → Aguardar processamento"
                    },
                    {
                        title: "Geração de Voz",
                        description: "Use o modelo treinado para gerar nova fala com o texto desejado.",
                        example: "Inserir texto → Ajustar parâmetros de velocidade → Gerar áudio final"
                    },
                    {
                        title: "Análise de Qualidade",
                        description: "Avalie a qualidade do áudio gerado e identifique possíveis falhas.",
                        example: "Verificar naturalidade → Detectar artefatos → Comparar com original"
                    }
                ]
            },
            3: { // DeepFaceLab
                steps: [
                    {
                        title: "Instalação e Configuração",
                        description: "Baixe e configure o DeepFaceLab com drivers GPU adequados.",
                        example: "Download do GitHub → Instalar CUDA → Configurar cuDNN"
                    },
                    {
                        title: "Preparação dos Vídeos",
                        description: "Extraia frames dos vídeos fonte e destino para treinamento.",
                        example: "2) extract images from video data_src → 3) extract images from video data_dst"
                    },
                    {
                        title: "Detecção Facial",
                        description: "Execute a detecção automática de faces nos frames extraídos.",
                        example: "4) data_src faceset extract → 5) data_dst faceset extract"
                    },
                    {
                        title: "Treinamento do Modelo",
                        description: "Inicie o treinamento com configurações apropriadas para seu hardware.",
                        example: "6) train SAEHD → Configurar batch size → Monitorar loss"
                    },
                    {
                        title: "Conversão Final",
                        description: "Aplique o modelo treinado para gerar o vídeo final.",
                        example: "7) convert SAEHD → 8) converted to mp4 → Verificar resultado"
                    }
                ]
            }
        };
        
        const genericTutorial = {
            steps: [
                {
                    title: "Acesso e Configuração",
                    description: "Acesse a ferramenta e configure o ambiente necessário.",
                    example: "Clonar repositório → Instalar dependências → Configurar ambiente"
                },
                {
                    title: "Preparação dos Dados",
                    description: "Prepare os dados de entrada conforme especificações da ferramenta.",
                    example: "Formato correto → Qualidade adequada → Organização de arquivos"
                },
                {
                    title: "Execução do Processo",
                    description: "Execute a ferramenta seguindo os parâmetros recomendados.",
                    example: "Comando de execução → Monitorar progresso → Verificar logs"
                },
                {
                    title: "Análise dos Resultados",
                    description: "Analise os resultados obtidos e identifique características importantes.",
                    example: "Verificar qualidade → Identificar limitações → Documentar achados"
                },
                {
                    title: "Aplicação Ética",
                    description: "Utilize os resultados apenas para fins educacionais e de pesquisa.",
                    example: "Documentar vulnerabilidades → Propor contramedidas → Compartilhar conhecimento"
                }
            ]
        };
        
        const tutorial = tutorials[tool.id] || genericTutorial;
        
        return tutorial.steps.map((step, index) => `
            <div class="tutorial-step">
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

    getImplementationContent(tool) {
        const implementations = {
            1: { // Real-Time Voice Cloning
                steps: [
                    {
                        title: "Cenário de Teste",
                        description: "Configure um ambiente controlado para testar vulnerabilidades de autenticação por voz.",
                        example: "Laboratório isolado → Sistema de teste → Dados sintéticos"
                    },
                    {
                        title: "Coleta Ética de Dados",
                        description: "Use apenas vozes com consentimento explícito ou dados públicos.",
                        example: "Consentimento por escrito → Dados próprios → Vozes de domínio público"
                    },
                    {
                        title: "Teste de Vulnerabilidades",
                        description: "Identifique falhas em sistemas de autenticação biométrica por voz.",
                        example: "Testar bypass → Documentar falhas → Medir taxa de sucesso"
                    },
                    {
                        title: "Desenvolvimento de Contramedidas",
                        description: "Proponha soluções para mitigar as vulnerabilidades encontradas.",
                        example: "Detecção de voz sintética → Autenticação multifator → Análise comportamental"
                    },
                    {
                        title: "Documentação e Divulgação",
                        description: "Documente os achados e compartilhe com a comunidade de segurança.",
                        example: "Relatório técnico → Apresentação em conferências → Publicação responsável"
                    }
                ]
            },
            3: { // DeepFaceLab
                steps: [
                    {
                        title: "Ambiente de Pesquisa",
                        description: "Estabeleça um laboratório seguro para pesquisa em deepfakes.",
                        example: "Rede isolada → Dados controlados → Acesso restrito"
                    },
                    {
                        title: "Consentimento e Legalidade",
                        description: "Garanta que todos os dados utilizados tenham consentimento apropriado.",
                        example: "Termos de uso → Consentimento informado → Compliance legal"
                    },
                    {
                        title: "Análise de Detectabilidade",
                        description: "Estude como identificar conteúdo gerado artificialmente.",
                        example: "Artefatos visuais → Inconsistências temporais → Análise forense"
                    },
                    {
                        title: "Desenvolvimento de Detectores",
                        description: "Crie ferramentas para identificar deepfakes automaticamente.",
                        example: "Redes neurais de detecção → Análise espectral → Métricas de confiança"
                    },
                    {
                        title: "Educação e Conscientização",
                        description: "Use os resultados para educar sobre os riscos dos deepfakes.",
                        example: "Workshops educativos → Material didático → Demonstrações controladas"
                    }
                ]
            }
        };
        
        const genericImplementation = {
            steps: [
                {
                    title: "Definição do Escopo Ético",
                    description: "Estabeleça claramente os objetivos educacionais e de pesquisa.",
                    example: "Objetivos definidos → Limitações claras → Aprovação institucional"
                },
                {
                    title: "Ambiente Controlado",
                    description: "Configure um ambiente seguro e isolado para os testes.",
                    example: "Rede isolada → Dados de teste → Monitoramento de acesso"
                },
                {
                    title: "Coleta Responsável de Dados",
                    description: "Utilize apenas dados com consentimento ou de domínio público.",
                    example: "Consentimento explícito → Dados anonimizados → Fontes legítimas"
                },
                {
                    title: "Análise de Vulnerabilidades",
                    description: "Identifique e documente vulnerabilidades de segurança.",
                    example: "Testes sistemáticos → Documentação detalhada → Análise de impacto"
                },
                {
                    title: "Divulgação Responsável",
                    description: "Compartilhe os achados de forma responsável com a comunidade.",
                    example: "Relatórios técnicos → Coordenação com fornecedores → Educação pública"
                }
            ]
        };
        
        const implementation = implementations[tool.id] || genericImplementation;
        
        return implementation.steps.map((step, index) => `
            <div class="tutorial-step">
                <div class="step-header">
                    <span class="step-number">${index + 1}</span>
                    <h4 class="step-title">${step.title}</h4>
                </div>
                <p class="step-description">${step.description}</p>
                <div class="step-example">
                    <strong>Implementação:</strong> ${step.example}
                </div>
            </div>
        `).join('');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new CyberSecTools();
});

// Add ethical note styling
const style = document.createElement('style');
style.textContent = `
    .ethical-note {
        background: rgba(255, 107, 53, 0.1);
        border-left: 4px solid var(--warning-color);
        padding: 0.8rem;
        margin: 1rem 0;
        border-radius: 5px;
        font-size: 0.9rem;
    }
    
    .ethical-note strong {
        color: var(--warning-color);
    }
    
    .btn-tertiary {
        background: transparent;
        color: var(--warning-color);
        border: 2px solid var(--warning-color);
    }
    
    .btn-tertiary:hover {
        background: var(--warning-color);
        color: white;
    }
`;
document.head.appendChild(style);

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