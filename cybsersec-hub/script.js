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
                        <i class="fas fa-file-pdf"></i> PDF
                    </button>
                    <button class="btn btn-tertiary implementation-btn" data-id="${tool.id}">
                        <i class="fas fa-shield-alt"></i> Uso Ético
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
            const htmlUrl = `Tutorial de ${tool.name}.html`;
            window.open(htmlUrl, '_blank');
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
                        title: "1. Preparação do Ambiente",
                        description: "Configure o ambiente Python com as dependências necessárias.",
                        example: "Instale Python 3.7+ → pip install torch torchvision torchaudio → git clone https://github.com/CorentinJ/Real-Time-Voice-Cloning → cd Real-Time-Voice-Cloning → pip install -r requirements.txt"
                    },
                    {
                        title: "2. Download dos Modelos Pré-Treinados",
                        description: "Baixe os modelos pré-treinados necessários para a clonagem.",
                        example: "Acesse a página de releases → Baixe pretrained.zip → Extraia na pasta saved_models/ → Verifique os 3 modelos: encoder, synthesizer, vocoder"
                    },
                    {
                        title: "3. Coleta de Dados de Áudio",
                        description: "Grave ou obtenha amostras de áudio de 5-10 segundos da voz alvo.",
                        example: "Formato: WAV, 16kHz ou 22kHz, mono → Duração: 5-10 segundos → Qualidade: sem ruído de fundo → Conteúdo: fala natural e clara"
                    },
                    {
                        title: "4. Execução da Interface",
                        description: "Inicie a interface gráfica para processar a voz.",
                        example: "python demo_toolbox.py → Aguarde carregar os modelos → Interface abrirá automaticamente → Pode demorar 1-2 minutos na primeira vez"
                    },
                    {
                        title: "5. Carregar Áudio de Referência",
                        description: "Carregue o áudio da voz que deseja clonar.",
                        example: "Clique em 'Browse' → Selecione seu arquivo WAV → Clique 'Load' → Aguarde processamento do encoder → Visualize o embedding gerado"
                    },
                    {
                        title: "6. Geração de Voz",
                        description: "Digite o texto e gere a voz clonada.",
                        example: "Digite o texto desejado (até 200 caracteres) → Clique 'Synthesize and vocode' → Aguarde 5-10 segundos → Ouvirá o resultado automaticamente"
                    },
                    {
                        title: "7. Ajustes e Exportação",
                        description: "Ajuste parâmetros e exporte o áudio final.",
                        example: "Ajuste velocidade (speed) → Modifique pitch se necessário → Clique 'Save' para exportar → Arquivo salvo em output/"
                    },
                    {
                        title: "8. Análise de Qualidade",
                        description: "Avalie a qualidade do áudio gerado.",
                        example: "Verificar naturalidade da voz → Detectar artefatos digitais ∂ Comparar com original → Testar com diferentes textos"
                    }
                ]
            },
            2: { // FakeYou
                steps: [
                    {
                        title: "1. Acesso à Plataforma",
                        description: "Acesse o site e crie uma conta gratuita.",
                        example: "Acesse fakeyou.com → Clique 'Sign Up' → Crie conta com email → Confirme email → Faça login"
                    },
                    {
                        title: "2. Escolha da Voz",
                        description: "Navegue pelo catálogo de vozes disponíveis.",
                        example: "Clique 'Text to Speech' → Use filtros por categoria → Teste prévias de vozes → Selecione a voz desejada"
                    },
                    {
                        title: "3. Inserção do Texto",
                        description: "Digite ou cole o texto que deseja sintetizar.",
                        example: "Digite até 500 caracteres (free) → Use pontuação para pausas → Evite caracteres especiais → Revise ortografia"
                    },
                    {
                        title: "4. Geração do Áudio",
                        description: "Processe e gere o áudio com a voz selecionada.",
                        example: "Clique 'Speak' → Aguarde na fila (1-5 minutos) → Receba notificação quando pronto → Ouvirá automaticamente"
                    },
                    {
                        title: "5. Download e Compartilhamento",
                        description: "Baixe o áudio ou compartilhe o link.",
                        example: "Clique no ícone de download → Formato MP3 ou WAV → Copie link para compartilhar → Salve em seus favoritos"
                    }
                ]
            },
            3: { // DeepFaceLab
                steps: [
                    {
                        title: "1. Instalação e Configuração",
                        description: "Baixe e configure o DeepFaceLab com drivers GPU adequados.",
                        example: "Download do GitHub (versão 2.0) → Extrair para C:\\DeepFaceLab → Instalar CUDA 11.x → Instalar cuDNN 8.x → Verificar GPU com nvidia-smi"
                    },
                    {
                        title: "2. Preparação dos Vídeos",
                        description: "Coloque os vídeos nas pastas corretas.",
                        example: "Vídeo fonte (rosto a copiar) em workspace\\data_src.mp4 → Vídeo destino em workspace\\data_dst.mp4 → Qualidade: 720p ou superior → Duração: 30s a 5min"
                    },
                    {
                        title: "3. Extração de Frames",
                        description: "Extraia frames dos vídeos fonte e destino.",
                        example: "Execute '2) extract images from video data_src.bat' → Escolha FPS (10-30) → Execute '3) extract images from video data_dst.bat' → Aguarde conclusão"
                    },
                    {
                        title: "4. Detecção Facial",
                        description: "Execute a detecção automática de faces.",
                        example: "Execute '4) data_src faceset extract.bat' → Escolha detector S3FD → Execute '5) data_dst faceset extract.bat' → Verifique faces em aligned/"
                    },
                    {
                        title: "5. Limpeza do Dataset",
                        description: "Remova faces mal detectadas ou indesejadas.",
                        example: "Execute '4.2) data_src view aligned result.bat' → Delete faces ruins → Execute '5.2) data_dst view aligned result.bat' → Mantenha apenas faces corretas"
                    },
                    {
                        title: "6. Treinamento do Modelo",
                        description: "Inicie o treinamento com configurações apropriadas.",
                        example: "Execute '6) train SAEHD.bat' → Escolha resolução 128 ou 256 → Batch size 4-8 → Treine por 100k-500k iterações → Monitore preview"
                    },
                    {
                        title: "7. Conversão dos Frames",
                        description: "Aplique o modelo treinado nos frames de destino.",
                        example: "Execute '7) merge SAEHD.bat' → Ajuste mask mode → Configure erode/blur → Processe todos os frames → Verifique resultado"
                    },
                    {
                        title: "8. Geração do Vídeo Final",
                        description: "Converta os frames processados em vídeo.",
                        example: "Execute '8) merged to mp4.bat' → Escolha bitrate (10-20 mbps) → Aguarde renderização → Vídeo final em workspace\\result.mp4"
                    }
                ]
            },
            6: { // Wav2Lip
                steps: [
                    {
                        title: "1. Instalação",
                        description: "Clone o repositório e instale dependências.",
                        example: "git clone https://github.com/Rudrabha/Wav2Lip → cd Wav2Lip → pip install -r requirements.txt → Download do modelo em checkpoints/"
                    },
                    {
                        title: "2. Preparação dos Arquivos",
                        description: "Prepare o vídeo e áudio de entrada.",
                        example: "Vídeo: MP4, rosto visível, boa iluminação → Áudio: WAV ou MP3, fala clara → Coloque em sample_data/"
                    },
                    {
                        title: "3. Execução da Sincronização",
                        description: "Execute o script de inferência.",
                        example: "python inference.py --checkpoint_path checkpoints/wav2lip.pth --face video.mp4 --audio audio.wav → Aguarde processamento"
                    },
                    {
                        title: "4. Ajustes de Qualidade",
                        description: "Use o modelo GAN para melhor qualidade.",
                        example: "Adicione --nosmooth para menos blur → Use wav2lip_gan.pth para melhor qualidade → Ajuste --pads para enquadramento"
                    },
                    {
                        title: "5. Resultado Final",
                        description: "Verifique e exporte o vídeo sincronizado.",
                        example: "Vídeo salvo em results/ → Verifique sincronização labial → Compare com original → Ajuste parâmetros se necessário"
                    }
                ]
            },
            8: { // Deepware Scanner
                steps: [
                    {
                        title: "1. Acesso ao Scanner",
                        description: "Acesse a plataforma online.",
                        example: "Acesse scanner.deepware.ai → Não precisa cadastro → Interface simples e direta"
                    },
                    {
                        title: "2. Upload do Vídeo",
                        description: "Faça upload do vídeo para análise.",
                        example: "Clique 'Upload Video' → Selecione arquivo (max 50MB) → Formatos: MP4, AVI, MOV → Aguarde upload"
                    },
                    {
                        title: "3. Análise Automática",
                        description: "O sistema analisa automaticamente o vídeo.",
                        example: "Aguarde 1-3 minutos → IA analisa cada frame → Detecta inconsistências → Calcula probabilidade"
                    },
                    {
                        title: "4. Interpretação dos Resultados",
                        description: "Entenda o relatório de detecção.",
                        example: "Score 0-30%: Provavelmente real → 30-70%: Inconclusivo → 70-100%: Provável deepfake → Veja áreas destacadas"
                    },
                    {
                        title: "5. Análise Detalhada",
                        description: "Examine os indicadores específicos.",
                        example: "Verifique artefatos visuais → Analise movimento dos olhos → Observe bordas do rosto → Confira iluminação"
                    }
                ]
            }
        };
        
        const genericTutorial = {
            steps: [
                {
                    title: "1. Acesso e Configuração",
                    description: "Acesse a ferramenta e configure o ambiente necessário.",
                    example: "Acesse o site ou repositório → Crie conta se necessário → Instale dependências → Configure ambiente Python/Node"
                },
                {
                    title: "2. Preparação dos Dados",
                    description: "Prepare os dados de entrada conforme especificações.",
                    example: "Formato correto (MP4, WAV, etc) → Qualidade adequada (HD, 16kHz) → Organização de arquivos → Backup dos originais"
                },
                {
                    title: "3. Execução do Processo",
                    description: "Execute a ferramenta seguindo os parâmetros recomendados.",
                    example: "Comando de execução ou interface gráfica → Monitorar progresso → Verificar logs de erro → Aguardar conclusão"
                },
                {
                    title: "4. Análise dos Resultados",
                    description: "Analise os resultados obtidos e identifique características.",
                    example: "Verificar qualidade do output → Identificar limitações → Comparar com original → Documentar achados"
                },
                {
                    title: "5. Aplicação Ética",
                    description: "Utilize os resultados apenas para fins educacionais.",
                    example: "Documentar vulnerabilidades → Propor contramedidas → Compartilhar conhecimento → Respeitar privacidade"
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