// Database of AI tools and resources
const toolsData = [
    // Programming AIs
    {
        id: 1,
        name: "GitHub Copilot",
        category: "programming",
        description: "IA que ajuda a escrever código em tempo real para C, C++, Python, C# e outras linguagens",
        icon: "fab fa-github",
        link: "https://github.com/features/copilot",
        tutorial: "https://www.youtube.com/watch?v=Fw8LQQcGXQo",
        textTutorial: "copilot-tutorial",
        features: ["Autocompletar código", "Sugestões inteligentes", "Múltiplas linguagens", "Integração IDE"],
        languages: ["C", "C++", "Python", "C#", "JavaScript", "Java"]
    },
    {
        id: 2,
        name: "ChatGPT",
        category: "programming",
        description: "IA conversacional para ajuda em programação, debugging e explicação de código",
        icon: "fas fa-robot",
        link: "https://chat.openai.com",
        tutorial: "https://www.youtube.com/watch?v=Natq4Vd7CrI",
        textTutorial: "chatgpt-tutorial",
        features: ["Explicação de código", "Debugging", "Geração de código", "Tutoriais"],
        languages: ["Todas as linguagens"]
    },
    {
        id: 3,
        name: "Tabnine",
        category: "programming",
        description: "Assistente de código IA para autocompletar e sugestões inteligentes",
        icon: "fas fa-code",
        link: "https://www.tabnine.com",
        tutorial: "https://www.youtube.com/watch?v=QcZKDSk4wP4",
        textTutorial: "tabnine-tutorial",
        features: ["Autocompletar", "Suporte offline", "Privacidade", "Múltiplas IDEs"],
        languages: ["C", "C++", "Python", "C#", "JavaScript"]
    },
    {
        id: 4,
        name: "Replit AI",
        category: "programming",
        description: "IA integrada ao Replit para programação colaborativa e aprendizado",
        icon: "fas fa-laptop-code",
        link: "https://replit.com",
        tutorial: "https://www.youtube.com/watch?v=U_8F_5rCNYs",
        textTutorial: "replit-tutorial",
        features: ["IDE online", "Colaboração", "Execução instantânea", "Tutoriais integrados"],
        languages: ["Python", "C++", "C", "JavaScript", "Java"]
    },

    // Arduino AIs and Tools
    {
        id: 5,
        name: "Arduino IDE",
        category: "arduino",
        description: "Ambiente oficial de desenvolvimento para Arduino com exemplos e bibliotecas",
        icon: "fas fa-microchip",
        link: "https://www.arduino.cc/en/software",
        tutorial: "Arduino IDE.pdf",
        textTutorial: "arduino-ide-tutorial",
        pdfTutorial: "Arduino IDE.pdf",
        features: ["Editor de código", "Compilador", "Monitor serial", "Bibliotecas"],
        languages: ["C++", "Arduino"]
    },
    {
        id: 6,
        name: "Tinkercad Circuits",
        category: "simulation",
        description: "Simulador online gratuito para circuitos Arduino e eletrônica básica",
        icon: "fas fa-circuit-board",
        link: "https://www.tinkercad.com/circuits",
        tutorial: "Arduino Project Hub.pdf",
        textTutorial: "tinkercad-tutorial",
        pdfTutorial: "Arduino Project Hub.pdf",
        features: ["Simulação 3D", "Componentes virtuais", "Código Arduino", "Projetos prontos"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 7,
        name: "Wokwi",
        category: "simulation",
        description: "Simulador avançado de Arduino e ESP32 com componentes eletrônicos",
        icon: "fas fa-play-circle",
        link: "https://wokwi.com",
        tutorial: "https://www.youtube.com/watch?v=VGlwa5JjNjE",
        textTutorial: "wokwi-tutorial",
        features: ["ESP32/Arduino", "Sensores virtuais", "Debugging", "Compartilhamento"],
        languages: ["C++", "Arduino", "MicroPython"]
    },

    // Electronics Components and Tutorials
    {
        id: 8,
        name: "Arduino Project Hub",
        category: "arduino",
        description: "Repositório oficial de projetos Arduino com tutoriais passo a passo",
        icon: "fas fa-project-diagram",
        link: "https://create.arduino.cc/projecthub",
        tutorial: "https://www.youtube.com/watch?v=ZnBF2GeAKbo",
        textTutorial: "arduino-projects-tutorial",
        features: ["Projetos completos", "Esquemas", "Código fonte", "Lista de materiais"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 9,
        name: "Fritzing",
        category: "electronics",
        description: "Software para design de circuitos eletrônicos e protoboards",
        icon: "fas fa-drafting-compass",
        link: "https://fritzing.org",
        tutorial: "https://www.youtube.com/watch?v=CCTs0mNXY24",
        textTutorial: "fritzing-tutorial",
        features: ["Design de PCB", "Protoboard virtual", "Esquemas", "Lista de componentes"],
        languages: ["Esquemático"]
    },
    {
        id: 10,
        name: "CircuitJS",
        category: "simulation",
        description: "Simulador de circuitos eletrônicos online gratuito",
        icon: "fas fa-bolt",
        link: "https://www.falstad.com/circuit/circuitjs.html",
        tutorial: "https://www.youtube.com/watch?v=pnf5S8sUJDA",
        textTutorial: "circuitjs-tutorial",
        features: ["Simulação em tempo real", "Componentes básicos", "Osciloscópio", "Análise AC/DC"],
        languages: ["Eletrônica"]
    },

    // Component Tutorials and Resources
    {
        id: 11,
        name: "Arduino Docs",
        category: "electronics",
        description: "Documentação oficial com tutoriais de componentes eletrônicos",
        icon: "fas fa-book",
        link: "https://docs.arduino.cc",
        tutorial: "https://www.youtube.com/watch?v=E4XBcKCXmNs",
        textTutorial: "arduino-docs-tutorial",
        features: ["LEDs", "Sensores", "Servo motores", "Comunicação"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 12,
        name: "SparkFun Learn",
        category: "electronics",
        description: "Tutoriais detalhados sobre componentes eletrônicos e projetos",
        icon: "fas fa-graduation-cap",
        link: "https://learn.sparkfun.com",
        tutorial: "https://www.youtube.com/watch?v=YL2lp8VGZYM",
        textTutorial: "sparkfun-tutorial",
        features: ["Sensores de temperatura", "Acelerômetros", "Sensores de distância", "Projetos práticos"],
        languages: ["Arduino", "Python", "C++"]
    },
    {
        id: 13,
        name: "Adafruit Learning",
        category: "electronics",
        description: "Guias completos para componentes eletrônicos e programação",
        icon: "fas fa-lightbulb",
        link: "https://learn.adafruit.com",
        tutorial: "https://www.youtube.com/watch?v=xAqvS6ePLyc",
        textTutorial: "adafruit-tutorial",
        features: ["Sensores de luz", "Servo motores", "Displays", "IoT"],
        languages: ["Arduino", "Python", "CircuitPython"]
    },
    {
        id: 14,
        name: "ElectronicsTutorials",
        category: "electronics",
        description: "Tutoriais fundamentais sobre componentes eletrônicos básicos",
        icon: "fas fa-atom",
        link: "https://www.electronics-tutorials.ws",
        tutorial: "https://www.youtube.com/watch?v=Wa0LozeUfNE",
        textTutorial: "electronics-basics",
        features: ["Resistores", "Capacitores", "LEDs", "Transistores"],
        languages: ["Teoria eletrônica"]
    },

    // Educational Robotics
    {
        id: 15,
        name: "Scratch for Arduino (S4A)",
        category: "robotics",
        description: "Programação visual para Arduino usando blocos do Scratch",
        icon: "fas fa-robot",
        link: "http://s4a.cat",
        tutorial: "Sobre S4A.docx",
        textTutorial: "s4a-tutorial",
        pdfTutorial: "Sobre S4A.docx",
        features: ["Programação visual", "Interface drag-drop", "Tempo real", "Sensores"],
        languages: ["Scratch", "Visual"]
    },
    {
        id: 16,
        name: "mBlock",
        category: "robotics",
        description: "Ambiente de programação visual para robótica educacional",
        icon: "fas fa-cubes",
        link: "https://www.mblock.cc",
        tutorial: "https://www.youtube.com/watch?v=QR1Xo9rn95I",
        textTutorial: "mblock-tutorial",
        features: ["Blocos visuais", "Python/C++", "mBot", "IA integrada"],
        languages: ["Scratch", "Python", "C++"]
    },
    {
        id: 17,
        name: "LEGO Mindstorms",
        category: "robotics",
        description: "Plataforma de robótica educacional com programação visual",
        icon: "fas fa-cog",
        link: "https://www.lego.com/en-us/mindstorms",
        tutorial: "https://www.youtube.com/watch?v=H4t7iuJSjpk",
        textTutorial: "lego-mindstorms",
        features: ["Robôs físicos", "Sensores", "Motores", "Programação visual"],
        languages: ["Visual", "Python"]
    },
    {
        id: 18,
        name: "Scratch",
        category: "education",
        description: "Linguagem de programação visual para iniciantes",
        icon: "fas fa-puzzle-piece",
        link: "https://scratch.mit.edu",
        tutorial: "https://www.youtube.com/watch?v=OK4JCtMrg28",
        textTutorial: "scratch-tutorial",
        features: ["Programação visual", "Animações", "Jogos", "Comunidade"],
        languages: ["Visual"]
    },
    {
        id: 19,
        name: "Code.org",
        category: "education",
        description: "Plataforma gratuita para ensino de programação",
        icon: "fas fa-graduation-cap",
        link: "https://code.org",
        tutorial: "https://www.youtube.com/watch?v=FCMxA3m_Imc",
        textTutorial: "codeorg-tutorial",
        features: ["Cursos estruturados", "Jogos educativos", "Certificados", "Todas as idades"],
        languages: ["JavaScript", "Python", "Blocos"]
    },

    // CAD and Design Tools
    {
        id: 20,
        name: "Tinkercad 3D Design",
        category: "simulation",
        description: "Ferramenta de design 3D online gratuita para criar modelos e peças",
        icon: "fas fa-cube",
        link: "https://www.tinkercad.com",
        tutorial: "https://www.youtube.com/watch?v=gOs6Mdj7y_4",
        textTutorial: "tinkercad-3d-tutorial",
        features: ["Design 3D", "Impressão 3D", "Formas básicas", "Export STL"],
        languages: ["Visual"]
    },
    {
        id: 21,
        name: "Fusion 360",
        category: "simulation",
        description: "Software CAD profissional gratuito para estudantes e hobbistas",
        icon: "fas fa-drafting-compass",
        link: "https://www.autodesk.com/products/fusion-360",
        tutorial: "https://www.youtube.com/watch?v=qvrHuaHhqHI",
        textTutorial: "fusion360-tutorial",
        features: ["CAD profissional", "Simulação", "CAM", "Colaboração"],
        languages: ["Visual"]
    },
    {
        id: 22,
        name: "OnShape",
        category: "simulation",
        description: "CAD online profissional gratuito para uso educacional",
        icon: "fas fa-cloud",
        link: "https://www.onshape.com/en/education",
        tutorial: "https://www.youtube.com/watch?v=76SkMODzNBM",
        textTutorial: "onshape-tutorial",
        features: ["CAD na nuvem", "Colaborativo", "Versionamento", "Mobile"],
        languages: ["Visual"]
    },
    {
        id: 23,
        name: "FreeCAD",
        category: "simulation",
        description: "Software CAD 3D open source para design paramétrico",
        icon: "fas fa-tools",
        link: "https://www.freecadweb.org",
        tutorial: "https://www.youtube.com/watch?v=2_DbFzFV9D4",
        textTutorial: "freecad-tutorial",
        features: ["Open source", "Paramétrico", "Módulos", "Python scripting"],
        languages: ["Python", "Visual"]
    },
    {
        id: 24,
        name: "SketchUp Free",
        category: "simulation",
        description: "Ferramenta de modelagem 3D intuitiva baseada na web",
        icon: "fas fa-home",
        link: "https://www.sketchup.com/plans-and-pricing/sketchup-free",
        tutorial: "https://www.youtube.com/watch?v=dD2-T3QJZSE",
        textTutorial: "sketchup-tutorial",
        features: ["Interface intuitiva", "Arquitetura", "3D Warehouse", "Web-based"],
        languages: ["Visual"]
    },

    // Additional Simulation Tools
    {
        id: 25,
        name: "Proteus",
        category: "simulation",
        description: "Simulador de circuitos eletrônicos com microcontroladores",
        icon: "fas fa-microchip",
        link: "https://www.labcenter.com",
        tutorial: "https://www.youtube.com/watch?v=1xGRF6Aklog",
        textTutorial: "proteus-tutorial",
        features: ["Simulação MCU", "PCB Design", "SPICE", "3D Visualization"],
        languages: ["C", "Assembly"]
    },
    {
        id: 26,
        name: "LTspice",
        category: "simulation",
        description: "Simulador SPICE gratuito para análise de circuitos analógicos",
        icon: "fas fa-wave-square",
        link: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
        tutorial: "https://www.youtube.com/watch?v=ziMHaGQJuSU",
        textTutorial: "ltspice-tutorial",
        features: ["Análise SPICE", "Modelos precisos", "Monte Carlo", "Worst case"],
        languages: ["SPICE"]
    },
    {
        id: 27,
        name: "KiCad",
        category: "electronics",
        description: "Suíte completa open source para design de PCB",
        icon: "fas fa-microchip",
        link: "https://www.kicad.org",
        tutorial: "https://www.youtube.com/watch?v=35YuILUlfGs",
        textTutorial: "kicad-tutorial",
        features: ["Esquemático", "Layout PCB", "3D Viewer", "Bibliotecas"],
        languages: ["Visual"]
    },

    // Complete Projects
    {
        id: 28,
        name: "Carro Segue Linha",
        category: "projects",
        description: "Projeto completo de robô que segue linha preta usando sensores infravermelhos",
        icon: "fas fa-car",
        link: "https://create.arduino.cc/projecthub/Aritro/line-follower-robot-arduino-3654ea",
        tutorial: "Projeto Robô Evita Obstáculos.pdf",
        textTutorial: "line-follower-tutorial",
        pdfTutorial: "Projeto Robô Evita Obstáculos.pdf",
        features: ["Sensores IR", "Motores DC", "L298N", "Arduino Uno"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 29,
        name: "Semáforo Inteligente",
        category: "projects",
        description: "Sistema de semáforo com sensor de movimento e controle por tempo",
        icon: "fas fa-traffic-light",
        link: "https://create.arduino.cc/projecthub/TheCircuit/traffic-light-controller-using-arduino-25d9e9",
        tutorial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        textTutorial: "smart-traffic-tutorial",
        features: ["LEDs RGB", "Sensor PIR", "Display LCD", "Buzzer"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 30,
        name: "Automação de Luzes",
        category: "projects",
        description: "Sistema de iluminação automática com sensor de luz e movimento",
        icon: "fas fa-lightbulb",
        link: "https://create.arduino.cc/projecthub/electropeak/home-automation-using-arduino-and-bluetooth-7bcd43",
        tutorial: "Projeto de Automação de luzes.pdf",
        textTutorial: "light-automation-tutorial",
        pdfTutorial: "Projeto de Automação de luzes.pdf",
        features: ["LDR", "PIR", "Relé", "RTC"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 31,
        name: "Luz Reativa ao Som",
        category: "projects",
        description: "Sistema de luzes que reage à intensidade e frequência do som ambiente",
        icon: "fas fa-music",
        link: "https://create.arduino.cc/projecthub/mircemk/diy-arduino-music-reactive-led-strip-33fecb",
        tutorial: "Projeto Luz Reativa ao Som.pdf",
        textTutorial: "sound-reactive-tutorial",
        pdfTutorial: "Projeto Luz Reativa ao Som.pdf",
        features: ["Microfone", "FFT", "LEDs RGB", "Amplificador"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 32,
        name: "Robô Evita Obstáculos",
        category: "projects",
        description: "Robô autônomo que navega evitando obstáculos usando ultrassom",
        icon: "fas fa-robot",
        link: "https://create.arduino.cc/projecthub/Aritro/obstacle-avoiding-robot-1-0-7c9c24",
        tutorial: "https://www.youtube.com/watch?v=CCTs0mNXY24",
        textTutorial: "obstacle-avoidance-tutorial",
        features: ["HC-SR04", "Servo motor", "Chassi robô", "Rodas"],
        languages: ["Arduino", "C++"]
    },
    {
        id: 33,
        name: "Estação Meteorológica",
        category: "projects",
        description: "Sistema completo de monitoramento climático com WiFi e app",
        icon: "fas fa-cloud-sun",
        link: "https://create.arduino.cc/projecthub/ThothLoki/arduino-weather-station-3c4539",
        tutorial: "https://www.youtube.com/watch?v=pnf5S8sUJDA",
        textTutorial: "weather-station-tutorial",
        features: ["DHT22", "BMP180", "ESP32", "Blynk"],
        languages: ["Arduino", "C++"]
    }
];

// Text tutorials database
const textTutorials = {
    "copilot-tutorial": {
        title: "GitHub Copilot - Tutorial Completo",
        steps: [
            {
                title: "1. Instalação e Configuração",
                content: "Instale a extensão GitHub Copilot no VS Code:\n- Abra VS Code\n- Vá em Extensions (Ctrl+Shift+X)\n- Procure por 'GitHub Copilot'\n- Clique em Install\n- Faça login com sua conta GitHub",
                code: "// Exemplo de uso do Copilot\n// Digite um comentário descrevendo o que quer:\n// Função para calcular fatorial\nfunction factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}"
            },
            {
                title: "2. Comandos Essenciais",
                content: "Comandos básicos:\n- Tab: Aceitar sugestão\n- Esc: Rejeitar sugestão\n- Alt+]: Próxima sugestão\n- Alt+[: Sugestão anterior\n- Ctrl+Enter: Abrir painel de sugestões",
                code: "// Exemplo em C++\n// Função para ordenar array\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        for (int j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                swap(arr[j], arr[j+1]);\n            }\n        }\n    }\n}"
            }
        ]
    },
    "chatgpt-tutorial": {
        title: "ChatGPT para Programação",
        steps: [
            {
                title: "1. Comandos Básicos",
                content: "Prompts eficazes:\n- 'Explique este código: [código]'\n- 'Encontre o erro neste código'\n- 'Otimize esta função'\n- 'Converta de Python para C++'\n- 'Crie uma função que...'\n- 'Documente este código'",
                code: "// Exemplo de prompt:\n// 'Crie uma função C++ para ordenar array'\n\n#include <algorithm>\nvoid sortArray(int arr[], int size) {\n    std::sort(arr, arr + size);\n}"
            }
        ]
    },
    "tabnine-tutorial": {
        title: "Tabnine - Assistente IA",
        steps: [
            {
                title: "1. Instalação",
                content: "Instalar Tabnine:\n1. Acesse tabnine.com\n2. Baixe para sua IDE\n3. Instale a extensão\n4. Configure preferências\n5. Escolha modelo (local/cloud)",
                code: "// Tabnine sugere automaticamente\nfunction calculateSum(numbers) {\n    // Tabnine completa automaticamente:\n    return numbers.reduce((sum, num) => sum + num, 0);\n}"
            }
        ]
    },
    "replit-tutorial": {
        title: "Replit AI - IDE Online",
        steps: [
            {
                title: "1. Primeiros Passos",
                content: "Usando Replit:\n1. Acesse replit.com\n2. Crie conta gratuita\n3. Clique 'Create Repl'\n4. Escolha linguagem\n5. Use Ghostwriter (IA)\n6. Execute código instantaneamente",
                code: "# Python no Replit\n# Use Ctrl+K para ativar IA\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))"
            }
        ]
    },
    "wokwi-tutorial": {
        title: "Wokwi - Simulador Avançado",
        steps: [
            {
                title: "1. Criando Projeto",
                content: "Passos no Wokwi:\n1. Acesse wokwi.com\n2. Clique 'New Project'\n3. Escolha Arduino/ESP32\n4. Adicione componentes\n5. Conecte fios\n6. Escreva código\n7. Clique 'Start Simulation'",
                code: "// Exemplo ESP32 com WiFi\n#include <WiFi.h>\n\nconst char* ssid = \"Wokwi-GUEST\";\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(ssid);\n  \n  while (WiFi.status() != WL_CONNECTED) {\n    delay(1000);\n    Serial.println(\"Conectando...\");\n  }\n  Serial.println(\"WiFi conectado!\");\n}"
            }
        ]
    },
    "arduino-projects-tutorial": {
        title: "Arduino Project Hub",
        steps: [
            {
                title: "1. Navegando Projetos",
                content: "Como usar o Hub:\n1. Acesse create.arduino.cc/projecthub\n2. Filtre por dificuldade\n3. Escolha categoria\n4. Veja lista de materiais\n5. Siga instruções passo a passo\n6. Baixe código fonte\n7. Adapte para suas necessidades",
                code: "// Projeto típico do Hub\n// Sistema de alarme com sensor PIR\nint pirPin = 2;\nint buzzerPin = 8;\nint ledPin = 13;\n\nvoid setup() {\n  pinMode(pirPin, INPUT);\n  pinMode(buzzerPin, OUTPUT);\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  if (digitalRead(pirPin) == HIGH) {\n    digitalWrite(ledPin, HIGH);\n    tone(buzzerPin, 1000);\n    delay(1000);\n    noTone(buzzerPin);\n    digitalWrite(ledPin, LOW);\n  }\n}"
            }
        ]
    },
    "fritzing-tutorial": {
        title: "Fritzing - Design de Circuitos",
        steps: [
            {
                title: "1. Interface Básica",
                content: "Usando Fritzing:\n1. Baixe em fritzing.org\n2. Abra programa\n3. Use aba 'Breadboard' para prototipagem\n4. Aba 'Schematic' para esquemas\n5. Aba 'PCB' para placa impressa\n6. Arraste componentes da biblioteca\n7. Conecte com fios",
                code: "// Lista de materiais gerada pelo Fritzing:\n// 1x Arduino Uno\n// 1x LED 5mm\n// 1x Resistor 220Ω\n// 1x Protoboard\n// Fios jumper"
            }
        ]
    },
    "circuitjs-tutorial": {
        title: "CircuitJS - Simulador Online",
        steps: [
            {
                title: "1. Simulação Básica",
                content: "Usando CircuitJS:\n1. Acesse falstad.com/circuit\n2. Clique direito para adicionar componentes\n3. Arraste para conectar\n4. Clique em 'Run/Stop' para simular\n5. Use osciloscópio integrado\n6. Veja corrente e tensão em tempo real\n7. Salve circuito como link",
                code: "// Circuitos básicos para testar:\n// - Divisor de tensão\n// - Filtro RC\n// - Amplificador operacional\n// - Oscilador\n// - Fonte de alimentação"
            }
        ]
    },
    "arduino-docs-tutorial": {
        title: "Arduino Docs - Referência Oficial",
        steps: [
            {
                title: "1. Navegando a Documentação",
                content: "Usando Arduino Docs:\n1. Acesse docs.arduino.cc\n2. Seção 'Reference' para funções\n3. 'Tutorials' para projetos\n4. 'Hardware' para especificações\n5. Use busca para encontrar funções\n6. Veja exemplos de código\n7. Baixe bibliotecas recomendadas",
                code: "// Funções essenciais da documentação:\npinMode(pin, mode);     // Configura pino\ndigitalWrite(pin, val); // Escreve digital\ndigitalRead(pin);       // Lê digital\nanalogWrite(pin, val);  // PWM (0-255)\nanalogRead(pin);        // Lê analógico (0-1023)\ndelay(ms);              // Pausa em ms\nSerial.begin(baud);     // Inicia comunicação"
            }
        ]
    },
    "sparkfun-tutorial": {
        title: "SparkFun Learn",
        steps: [
            {
                title: "1. Tutoriais de Componentes",
                content: "Navegando SparkFun:\n1. Acesse learn.sparkfun.com\n2. Procure por componente específico\n3. Leia 'Hookup Guide'\n4. Veja diagramas de conexão\n5. Baixe código exemplo\n6. Siga troubleshooting\n7. Explore projetos relacionados",
                code: "// Exemplo sensor temperatura DS18B20\n#include <OneWire.h>\n#include <DallasTemperature.h>\n\nOneWire oneWire(2);\nDallasTemperature sensors(&oneWire);\n\nvoid setup() {\n  Serial.begin(9600);\n  sensors.begin();\n}\n\nvoid loop() {\n  sensors.requestTemperatures();\n  float temp = sensors.getTempCByIndex(0);\n  Serial.println(temp);\n  delay(1000);\n}"
            }
        ]
    },
    "adafruit-tutorial": {
        title: "Adafruit Learning System",
        steps: [
            {
                title: "1. Guias Detalhados",
                content: "Usando Adafruit Learn:\n1. Acesse learn.adafruit.com\n2. Filtre por categoria\n3. Escolha nível de dificuldade\n4. Siga guia passo a passo\n5. Use CircuitPython quando disponível\n6. Baixe bibliotecas específicas\n7. Participe do fórum",
                code: "# CircuitPython para NeoPixel\nimport board\nimport neopixel\n\npixels = neopixel.NeoPixel(board.D6, 10)\n\n# Acende todos de vermelho\nfor i in range(10):\n    pixels[i] = (255, 0, 0)\n    \npixels.show()"
            }
        ]
    },
    "mblock-tutorial": {
        title: "mBlock - Programação Visual",
        steps: [
            {
                title: "1. Primeiros Passos",
                content: "Usando mBlock:\n1. Baixe em mblock.cc\n2. Conecte mBot ou Arduino\n3. Use blocos visuais\n4. Alterne para Python/C++\n5. Upload para dispositivo\n6. Use IA integrada\n7. Compartilhe projetos",
                code: "# Código Python gerado pelo mBlock\nimport time\nfrom mbot2 import *\n\n# Mover robô para frente\nmbot2.forward(50)\ntime.sleep(2)\nmbot2.stop()\n\n# Ler sensor ultrassônico\ndistance = mbot2.ultrasonic_sensor_distance()\nprint(f\"Distância: {distance} cm\")"
            }
        ]
    },
    "lego-mindstorms": {
        title: "LEGO Mindstorms",
        steps: [
            {
                title: "1. Programação Visual",
                content: "Usando Mindstorms:\n1. Baixe LEGO Mindstorms app\n2. Conecte hub via Bluetooth\n3. Use blocos de programação\n4. Configure sensores\n5. Programe motores\n6. Teste comportamentos\n7. Salve na nuvem",
                code: "# Python para Mindstorms\nfrom mindstorms import MSHub, Motor, MotorPair\nfrom mindstorms.control import wait_for_seconds\n\nhub = MSHub()\nmotor_pair = MotorPair('A', 'B')\n\n# Mover em quadrado\nfor i in range(4):\n    motor_pair.move(10, 'cm')\n    motor_pair.turn(90, 'degrees')\n    \nhub.speaker.beep()"
            }
        ]
    },
    "scratch-tutorial": {
        title: "Scratch - Programação Visual",
        steps: [
            {
                title: "1. Interface Básica",
                content: "Primeiros passos no Scratch:\n1. Acesse scratch.mit.edu\n2. Clique 'Create'\n3. Arraste blocos da paleta\n4. Conecte blocos como quebra-cabeça\n5. Clique bandeira verde para executar\n6. Use sprites e cenários\n7. Compartilhe projetos",
                code: "// Blocos básicos do Scratch:\n// Movimento: mover, girar, ir para\n// Aparência: dizer, mostrar, esconder\n// Som: tocar som, tocar nota\n// Eventos: quando clicar, quando tecla\n// Controle: repetir, se, esperar\n// Sensores: tocando, distância, timer"
            }
        ]
    },
    "codeorg-tutorial": {
        title: "Code.org - Ensino Estruturado",
        steps: [
            {
                title: "1. Cursos Disponíveis",
                content: "Navegando Code.org:\n1. Acesse code.org\n2. Escolha faixa etária\n3. Comece com 'Hour of Code'\n4. Siga cursos CS Fundamentals\n5. Use App Lab para JavaScript\n6. Experimente Game Lab\n7. Obtenha certificado",
                code: "// JavaScript no App Lab\n// Criar botão interativo\nbutton(\"myButton\", \"Clique aqui\");\nonEvent(\"myButton\", \"click\", function() {\n  setText(\"label1\", \"Botão clicado!\");\n  playSound(\"sound://default.mp3\");\n});"
            }
        ]
    },
    "tinkercad-3d-tutorial": {
        title: "Tinkercad 3D Design",
        steps: [
            {
                title: "1. Primeiros Passos",
                content: "Iniciando no Tinkercad 3D:\n1. Acesse tinkercad.com\n2. Crie conta gratuita\n3. Clique 'Create new design'\n4. Arraste formas básicas\n5. Use ferramentas de edição\n6. Combine formas\n7. Exporte para impressão 3D",
                code: "// Formas básicas disponíveis:\n// - Cubo, Cilindro, Esfera\n// - Cone, Torus, Prisma\n// - Texto 3D\n// - Formas complexas da galeria\n\n// Operações:\n// - Agrupar (Ctrl+G)\n// - Desagrupar (Ctrl+Shift+G)\n// - Duplicar (Ctrl+D)\n// - Alinhar objetos"
            },
            {
                title: "2. Ferramentas Avançadas",
                content: "Recursos avançados:\n- Workplane: Muda plano de trabalho\n- Hole: Cria furos e subtrações\n- Ruler: Mede distâncias\n- Align: Alinha objetos\n- Mirror: Espelha formas\n- Pattern: Cria padrões\n- Import: Importa arquivos SVG/STL",
                code: "// Atalhos úteis:\n// Ctrl+Z: Desfazer\n// Ctrl+Y: Refazer\n// Ctrl+A: Selecionar tudo\n// Delete: Excluir selecionado\n// Ctrl+C/V: Copiar/Colar\n// Mouse scroll: Zoom\n// Shift+drag: Pan\n// Right-click+drag: Rotate"
            }
        ]
    },
    "fusion360-tutorial": {
        title: "Fusion 360 - CAD Profissional",
        steps: [
            {
                title: "1. Interface e Workspaces",
                content: "Navegando no Fusion 360:\n1. Design: Modelagem 3D\n2. Render: Visualização\n3. Animation: Animações\n4. Simulation: Análises\n5. Manufacture: CAM\n6. Drawing: Desenhos técnicos\n\nFerramentas básicas:\n- Sketch: Desenho 2D\n- Extrude: Extrusão\n- Revolve: Revolução",
                code: "// Fluxo de trabalho típico:\n// 1. Create Sketch (cria esboço 2D)\n// 2. Draw geometry (desenha formas)\n// 3. Add constraints (adiciona restrições)\n// 4. Finish sketch\n// 5. Create 3D feature (extrude, revolve, etc)\n// 6. Add more features\n// 7. Apply materials and render"
            }
        ]
    },
    "onshape-tutorial": {
        title: "OnShape - CAD na Nuvem",
        steps: [
            {
                title: "1. Primeiros Passos",
                content: "Usando OnShape:\n1. Acesse onshape.com/education\n2. Crie conta educacional\n3. Create Document\n4. Insert > Part Studio\n5. Create Sketch\n6. Use Feature tools\n7. Collaborate em tempo real",
                code: "// Vantagens do OnShape:\n// - Acesso via browser\n// - Colaboração em tempo real\n// - Versionamento automático\n// - Sincronização na nuvem\n// - Apps mobile disponíveis\n// - Integração com manufatura"
            }
        ]
    },
    "freecad-tutorial": {
        title: "FreeCAD - Open Source CAD",
        steps: [
            {
                title: "1. Workbenches Principais",
                content: "Módulos do FreeCAD:\n- Part Design: Modelagem paramétrica\n- Sketcher: Desenho 2D restrito\n- Draft: Desenho técnico\n- Arch: Arquitetura\n- FEM: Análise elementos finitos\n- Path: CAM/CNC\n- TechDraw: Desenhos técnicos",
                code: "# Python scripting no FreeCAD\nimport FreeCAD\nimport Part\n\n# Criar cubo\nbox = Part.makeBox(10, 10, 10)\nPart.show(box)\n\n# Criar cilindro\ncyl = Part.makeCylinder(5, 20)\nPart.show(cyl)"
            }
        ]
    },
    "sketchup-tutorial": {
        title: "SketchUp Free",
        steps: [
            {
                title: "1. Ferramentas Básicas",
                content: "Ferramentas essenciais:\n- Line: Desenhar linhas\n- Rectangle: Retângulos\n- Circle: Círculos\n- Push/Pull: Extrudir faces\n- Move: Mover objetos\n- Rotate: Rotacionar\n- Scale: Redimensionar\n- Offset: Deslocar bordas",
                code: "// Atalhos SketchUp:\n// L: Line tool\n// R: Rectangle\n// C: Circle\n// P: Push/Pull\n// M: Move\n// Q: Rotate\n// S: Scale\n// F: Offset\n// Space: Select"
            }
        ]
    },
    "proteus-tutorial": {
        title: "Proteus - Simulação MCU",
        steps: [
            {
                title: "1. Simulação Arduino",
                content: "Simulando Arduino no Proteus:\n1. Abra ISIS (esquemático)\n2. Adicione Arduino da biblioteca\n3. Conecte componentes\n4. Carregue arquivo .hex\n5. Configure clock\n6. Execute simulação\n7. Use instrumentos virtuais",
                code: "// Componentes disponíveis:\n// - Arduino Uno, Mega, Nano\n// - ESP32, ESP8266\n// - PIC, AVR, ARM\n// - Sensores virtuais\n// - Displays LCD, LED\n// - Motores, servos\n// - Instrumentos de medição"
            }
        ]
    },
    "ltspice-tutorial": {
        title: "LTspice - Simulação SPICE",
        steps: [
            {
                title: "1. Análise de Circuitos",
                content: "Usando LTspice:\n1. Desenhe esquemático\n2. Adicione componentes\n3. Configure fontes\n4. Defina análise (.tran, .ac, .dc)\n5. Execute simulação\n6. Visualize formas de onda\n7. Meça parâmetros",
                code: "; Comandos SPICE básicos:\n.tran 0 10m     ; Análise transitória\n.ac dec 100 1 1meg  ; Análise AC\n.dc V1 0 5 0.1      ; Varredura DC\n.step param R 1k 10k 1k  ; Variação paramétrica\n.meas tran Vmax MAX V(out)  ; Medição"
            }
        ]
    },
    "kicad-tutorial": {
        title: "KiCad - Design PCB",
        steps: [
            {
                title: "1. Fluxo Completo",
                content: "Processo KiCad:\n1. Eeschema: Desenho esquemático\n2. Assign Footprints: Associar encapsulamentos\n3. Pcbnew: Layout da PCB\n4. 3D Viewer: Visualização 3D\n5. Plot: Gerar Gerbers\n6. BOM: Lista de materiais",
                code: "// Bibliotecas importantes:\n// - Device: Componentes genéricos\n// - Connector: Conectores\n// - MCU_Module: Módulos microcontroladores\n// - Sensor: Sensores diversos\n// - RF_Module: Módulos RF\n// - Power: Fontes e reguladores"
            }
        ]
    },
    "arduino-ide-tutorial": {
        title: "Arduino IDE - Guia Completo",
        steps: [
            {
                title: "1. Instalação e Configuração",
                content: "Baixe e instale o Arduino IDE:\n1. Acesse arduino.cc/software\n2. Baixe a versão para seu sistema\n3. Instale seguindo o assistente\n4. Conecte o Arduino via USB\n5. Selecione a placa em Tools > Board\n6. Selecione a porta em Tools > Port",
                code: "// Primeiro programa - Blink\nvoid setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(1000);\n}"
            },
            {
                title: "2. Interface e Ferramentas",
                content: "Principais elementos da IDE:\n- Editor de código (área principal)\n- Barra de ferramentas (verificar, upload, novo, abrir, salvar)\n- Monitor Serial (Tools > Serial Monitor)\n- Plotter Serial (Tools > Serial Plotter)\n- Gerenciador de bibliotecas (Tools > Manage Libraries)",
                code: "// Usando Serial Monitor\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"Arduino iniciado!\");\n}\n\nvoid loop() {\n  Serial.println(\"Loop executando...\");\n  delay(2000);\n}"
            },
            {
                title: "3. Estrutura do Código Arduino",
                content: "Funções obrigatórias:\n- setup(): Executada uma vez no início\n- loop(): Executada continuamente\n\nFunções principais:\n- pinMode(pino, modo): Configura pino como INPUT/OUTPUT\n- digitalWrite(pino, valor): Escreve HIGH/LOW\n- digitalRead(pino): Lê estado digital\n- analogRead(pino): Lê valor analógico (0-1023)\n- analogWrite(pino, valor): PWM (0-255)",
                code: "// Exemplo completo - LED com botão\nint ledPin = 13;\nint buttonPin = 2;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  pinMode(buttonPin, INPUT_PULLUP);\n}\n\nvoid loop() {\n  if (digitalRead(buttonPin) == LOW) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n}"
            },
            {
                title: "4. Bibliotecas e Exemplos",
                content: "Usando bibliotecas:\n1. Sketch > Include Library > Manage Libraries\n2. Procure pela biblioteca desejada\n3. Clique em Install\n4. Use #include no código\n\nExemplos prontos:\n- File > Examples\n- Categorias por funcionalidade\n- Código comentado para aprendizado",
                code: "// Usando biblioteca Servo\n#include <Servo.h>\n\nServo meuServo;\n\nvoid setup() {\n  meuServo.attach(9);\n}\n\nvoid loop() {\n  meuServo.write(90);\n  delay(1000);\n  meuServo.write(0);\n  delay(1000);\n}"
            }
        ]
    },
    "tinkercad-tutorial": {
        title: "Tinkercad Circuits - Simulação Arduino",
        steps: [
            {
                title: "1. Criando Primeiro Circuito",
                content: "Passos iniciais:\n1. Acesse tinkercad.com/circuits\n2. Clique em 'Create new Circuit'\n3. Arraste Arduino Uno da barra lateral\n4. Adicione componentes (LED, resistor, etc.)\n5. Conecte usando fios virtuais\n6. Clique em 'Start Simulation'",
                code: "// Código para LED piscante no Tinkercad\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}"
            },
            {
                title: "2. Componentes Disponíveis",
                content: "Principais componentes:\n- LEDs (várias cores)\n- Resistores (valores configuráveis)\n- Botões e chaves\n- Sensores (temperatura, luz, distância)\n- Displays (7 segmentos, LCD)\n- Motores (servo, DC, stepper)\n- Protoboard virtual",
                code: "// Exemplo com sensor de temperatura\nint sensorPin = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int reading = analogRead(sensorPin);\n  float voltage = reading * (5.0 / 1023.0);\n  float temperature = (voltage - 0.5) * 100;\n  Serial.print(\"Temperatura: \");\n  Serial.println(temperature);\n  delay(1000);\n}"
            },
            {
                title: "3. Simulação e Debug",
                content: "Recursos de simulação:\n- Monitor Serial integrado\n- Visualização em tempo real\n- Controle de velocidade da simulação\n- Medidor de corrente e tensão\n- Osciloscópio virtual\n- Multímetro integrado",
                code: "// Debug com Serial Monitor\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(13, OUTPUT);\n  Serial.println(\"Iniciando programa...\");\n}\n\nvoid loop() {\n  Serial.println(\"LED ligado\");\n  digitalWrite(13, HIGH);\n  delay(1000);\n  Serial.println(\"LED desligado\");\n  digitalWrite(13, LOW);\n  delay(1000);\n}"
            }
        ]
    },
    "electronics-basics": {
        title: "Componentes Eletrônicos Básicos",
        steps: [
            {
                title: "1. LED (Diodo Emissor de Luz)",
                content: "Características técnicas:\n- Tensão direta: 1.8V-3.3V (depende da cor)\n- Corrente máxima: 20mA\n- Polaridade: Ânodo (+) perna longa, Cátodo (-) perna curta\n- Sempre usar resistor limitador\n- Cálculo resistor: R = (Vcc - Vled) / I",
                code: "// Controle de LED com PWM\nint ledPin = 9;\nint brightness = 0;\nint fadeAmount = 5;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  analogWrite(ledPin, brightness);\n  brightness = brightness + fadeAmount;\n  if (brightness <= 0 || brightness >= 255) {\n    fadeAmount = -fadeAmount;\n  }\n  delay(30);\n}"
            },
            {
                title: "2. Sensor de Temperatura (LM35)",
                content: "Especificações LM35:\n- Tensão de alimentação: 4V-30V\n- Precisão: ±0.5°C\n- Saída linear: 10mV/°C\n- Faixa de temperatura: -55°C a 150°C\n- Não necessita calibração\n- Conexões: VCC, GND, Vout",
                code: "// Leitura precisa de temperatura\nfloat getTemperature() {\n  int reading = analogRead(A0);\n  float voltage = reading * (5.0 / 1023.0);\n  float temperature = voltage * 100.0;\n  return temperature;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  float temp = getTemperature();\n  Serial.print(\"Temperatura: \");\n  Serial.print(temp);\n  Serial.println(\"°C\");\n  delay(1000);\n}"
            },
            {
                title: "3. Servo Motor (SG90)",
                content: "Características do servo:\n- Tensão: 4.8V-6V\n- Torque: 1.8kg/cm\n- Velocidade: 0.1s/60°\n- Controle por PWM (50Hz)\n- Pulso 1ms = 0°, 1.5ms = 90°, 2ms = 180°\n- Fios: Marrom (GND), Vermelho (VCC), Laranja (Sinal)",
                code: "#include <Servo.h>\n\nServo meuServo;\nint pos = 0;\n\nvoid setup() {\n  meuServo.attach(9);\n}\n\nvoid loop() {\n  // Vai de 0 a 180 graus\n  for (pos = 0; pos <= 180; pos += 1) {\n    meuServo.write(pos);\n    delay(15);\n  }\n  // Volta de 180 a 0 graus\n  for (pos = 180; pos >= 0; pos -= 1) {\n    meuServo.write(pos);\n    delay(15);\n  }\n}"
            },
            {
                title: "4. Sensor Ultrassônico (HC-SR04)",
                content: "Especificações HC-SR04:\n- Alcance: 2cm a 400cm\n- Precisão: 3mm\n- Tensão: 5V\n- Frequência: 40kHz\n- Pinos: VCC, Trig, Echo, GND\n- Princípio: Tempo de eco do ultrassom",
                code: "// Medição de distância precisa\nint trigPin = 9;\nint echoPin = 10;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(trigPin, OUTPUT);\n  pinMode(echoPin, INPUT);\n}\n\nfloat getDistance() {\n  digitalWrite(trigPin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigPin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigPin, LOW);\n  \n  long duration = pulseIn(echoPin, HIGH);\n  float distance = duration * 0.034 / 2;\n  return distance;\n}\n\nvoid loop() {\n  float dist = getDistance();\n  Serial.print(\"Distância: \");\n  Serial.print(dist);\n  Serial.println(\" cm\");\n  delay(100);\n}"
            },
            {
                title: "5. Sensor de Luz (LDR)",
                content: "Fotoresistor (LDR):\n- Resistência varia com a luz\n- Escuro: 1MΩ ou mais\n- Claro: 1kΩ ou menos\n- Usar divisor de tensão\n- Resposta não linear\n- Tempo de resposta: ms a segundos",
                code: "// Sistema de iluminação automática\nint ldrPin = A0;\nint ledPin = 13;\nint threshold = 500;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  int lightLevel = analogRead(ldrPin);\n  Serial.print(\"Luz: \");\n  Serial.println(lightLevel);\n  \n  if (lightLevel < threshold) {\n    digitalWrite(ledPin, HIGH);\n    Serial.println(\"LED ligado - Escuro\");\n  } else {\n    digitalWrite(ledPin, LOW);\n    Serial.println(\"LED desligado - Claro\");\n  }\n  delay(500);\n}"
            },
            {
                title: "6. Acelerômetro (MPU6050)",
                content: "Características MPU6050:\n- 3 eixos acelerômetro + 3 eixos giroscópio\n- Comunicação I2C\n- Tensão: 3.3V-5V\n- Resolução: 16 bits\n- Faixas configuráveis\n- DMP (Digital Motion Processor) integrado",
                code: "#include <Wire.h>\n#include <MPU6050.h>\n\nMPU6050 mpu;\n\nvoid setup() {\n  Serial.begin(9600);\n  Wire.begin();\n  mpu.initialize();\n  \n  if (mpu.testConnection()) {\n    Serial.println(\"MPU6050 conectado!\");\n  }\n}\n\nvoid loop() {\n  int16_t ax, ay, az;\n  mpu.getAcceleration(&ax, &ay, &az);\n  \n  Serial.print(\"X: \"); Serial.print(ax);\n  Serial.print(\" Y: \"); Serial.print(ay);\n  Serial.print(\" Z: \"); Serial.println(az);\n  \n  delay(100);\n}"
            }
        ]
    },
    "s4a-tutorial": {
        title: "Scratch for Arduino (S4A) - Guia Completo",
        steps: [
            {
                title: "1. Configuração Inicial",
                content: "Preparando o Arduino:\n1. Baixe o S4A em http://s4a.cat\n2. Carregue o firmware S4A no Arduino\n3. Conecte o Arduino via USB\n4. Abra o S4A e verifique a conexão\n5. O sprite do Arduino deve aparecer verde",
                code: "// Firmware S4A já vem pré-programado\n// Pinos digitais: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13\n// Pinos analógicos: A0, A1, A2, A3, A4, A5\n// PWM: 3, 5, 6, 9, 10, 11\n// Servo: pinos 4, 7, 8, 12"
            },
            {
                title: "2. Blocos Básicos do S4A",
                content: "Principais blocos disponíveis:\n- digital on/off: Liga/desliga pino digital\n- analog value: Lê valor analógico (0-1023)\n- sensor value: Lê sensores conectados\n- motor direction/speed: Controla motores\n- servo position: Posição do servo motor",
                code: "Conexões básicas:\nLED -> Pino 13 + Resistor 220Ω\nBotão -> Pino 2 + Pull-up\nPotenciômetro -> A0\nServo -> Pino 4"
            },
            {
                title: "3. Projeto: Semáforo Inteligente",
                content: "Criando um semáforo:\n1. Conecte LEDs nos pinos 10, 11, 12\n2. Use blocos 'digital on/off'\n3. Adicione blocos 'wait'\n4. Crie sequência: Verde→Amarelo→Vermelho\n5. Use 'forever' para repetir",
                code: "Materiais:\n- 3 LEDs (verde, amarelo, vermelho)\n- 3 Resistores 220Ω\n- Protoboard\n- Fios jumper\n\nConexões:\nLED Verde -> Pino 10\nLED Amarelo -> Pino 11\nLED Vermelho -> Pino 12"
            }
        ]
    },
    "line-follower-tutorial": {
        title: "Carro Segue Linha - Projeto Completo",
        steps: [
            {
                title: "1. Lista de Materiais",
                content: "Componentes necessários:\n- 1x Arduino Uno\n- 1x Driver L298N\n- 2x Motores DC com rodas\n- 2x Sensores IR (TCRT5000)\n- 1x Chassi de acrílico\n- 1x Bateria 9V\n- 1x Roda boba\n- Fios jumper\n- Parafusos e porcas",
                code: "// Pinos de conexão\n#define MOTOR_A_IN1 2\n#define MOTOR_A_IN2 3\n#define MOTOR_B_IN3 4\n#define MOTOR_B_IN4 5\n#define MOTOR_A_EN 9\n#define MOTOR_B_EN 10\n#define SENSOR_LEFT A0\n#define SENSOR_RIGHT A1"
            },
            {
                title: "2. Código Completo",
                content: "Algoritmo de controle:\n- Lê sensores IR continuamente\n- Se ambos detectam linha: segue em frente\n- Se só esquerdo detecta: vira à esquerda\n- Se só direito detecta: vira à direita\n- Se nenhum detecta: procura linha",
                code: "void loop() {\n  int leftSensor = digitalRead(SENSOR_LEFT);\n  int rightSensor = digitalRead(SENSOR_RIGHT);\n  \n  if (leftSensor == 0 && rightSensor == 0) {\n    moveForward();\n  } else if (leftSensor == 0 && rightSensor == 1) {\n    turnLeft();\n  } else if (leftSensor == 1 && rightSensor == 0) {\n    turnRight();\n  } else {\n    stopMotors();\n  }\n}\n\nvoid moveForward() {\n  digitalWrite(MOTOR_A_IN1, HIGH);\n  digitalWrite(MOTOR_A_IN2, LOW);\n  digitalWrite(MOTOR_B_IN3, HIGH);\n  digitalWrite(MOTOR_B_IN4, LOW);\n  analogWrite(MOTOR_A_EN, 150);\n  analogWrite(MOTOR_B_EN, 150);\n}"
            }
        ]
    },
    "smart-traffic-tutorial": {
        title: "Semáforo Inteligente",
        steps: [
            {
                title: "1. Componentes",
                content: "Materiais:\n- Arduino Uno\n- 6x LEDs (2 vermelhos, 2 amarelos, 2 verdes)\n- 6x Resistores 220Ω\n- 1x Sensor PIR\n- 1x Buzzer\n- Protoboard e fios",
                code: "#define LED_RED_1 2\n#define LED_YELLOW_1 3\n#define LED_GREEN_1 4\n#define LED_RED_2 5\n#define LED_YELLOW_2 6\n#define LED_GREEN_2 7\n#define PIR_SENSOR 8\n#define BUZZER 9"
            },
            {
                title: "2. Lógica do Semáforo",
                content: "Funcionamento:\n- Ciclo normal: Verde 10s, Amarelo 3s, Vermelho 10s\n- Com movimento: Estende verde por 5s\n- Buzzer para deficientes visuais",
                code: "void trafficCycle() {\n  setLights(0, 0, 1, 1, 0, 0);\n  int greenTime = 10000;\n  \n  if (digitalRead(PIR_SENSOR)) {\n    greenTime += 5000;\n  }\n  \n  delay(greenTime);\n  setLights(0, 1, 0, 1, 0, 0);\n  tone(BUZZER, 1000, 500);\n  delay(3000);\n  setLights(1, 0, 0, 0, 0, 1);\n  delay(10000);\n}"
            }
        ]
    },
    "light-automation-tutorial": {
        title: "Automação de Luzes",
        steps: [
            {
                title: "1. Sistema Completo",
                content: "Funcionalidades:\n- Acende luz no escuro\n- Detecta movimento\n- Timer programável\n- Economia de energia",
                code: "#define LDR_PIN A0\n#define PIR_PIN 2\n#define RELAY_PIN 3\n#define LIGHT_THRESHOLD 300\n\nbool lightOn = false;\nunsigned long motionTime = 0;"
            },
            {
                title: "2. Lógica de Controle",
                content: "Algoritmo:\n1. Lê sensor de luz\n2. Se escuro E movimento: liga luz\n3. Mantém ligada por 5 minutos\n4. Desliga automaticamente",
                code: "void loop() {\n  int lightLevel = analogRead(LDR_PIN);\n  bool motion = digitalRead(PIR_PIN);\n  \n  if (lightLevel < LIGHT_THRESHOLD && motion) {\n    digitalWrite(RELAY_PIN, HIGH);\n    lightOn = true;\n    motionTime = millis();\n  }\n  \n  if (lightOn && (millis() - motionTime > 300000)) {\n    digitalWrite(RELAY_PIN, LOW);\n    lightOn = false;\n  }\n}"
            }
        ]
    },
    "sound-reactive-tutorial": {
        title: "Luz Reativa ao Som",
        steps: [
            {
                title: "1. Captura de Áudio",
                content: "Sistema:\n- Microfone com amplificador\n- LEDs RGB WS2812B\n- Diferentes cores para frequências",
                code: "#include <FastLED.h>\n\n#define MIC_PIN A0\n#define LED_PIN 6\n#define NUM_LEDS 60\n\nCRGB leds[NUM_LEDS];"
            },
            {
                title: "2. Análise de Som",
                content: "Processamento:\n- Amostra áudio\n- Graves = Vermelho\n- Médios = Verde\n- Agudos = Azul",
                code: "void analyzeSound() {\n  int soundLevel = analogRead(MIC_PIN);\n  int brightness = map(soundLevel, 0, 1023, 0, 255);\n  \n  for (int i = 0; i < NUM_LEDS; i++) {\n    leds[i] = CRGB(brightness, brightness/2, brightness/3);\n  }\n  FastLED.show();\n}"
            }
        ]
    },
    "obstacle-avoidance-tutorial": {
        title: "Robô Evita Obstáculos",
        steps: [
            {
                title: "1. Navegação Autônoma",
                content: "Comportamento:\n- Anda até detectar obstáculo\n- Para e escaneia ambiente\n- Escolhe melhor direção\n- Vira e continua",
                code: "#include <Servo.h>\n\n#define TRIG_PIN 7\n#define ECHO_PIN 8\n#define SERVO_PIN 9\n\nServo scanner;\n\nint getDistance() {\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  \n  long duration = pulseIn(ECHO_PIN, HIGH);\n  return duration * 0.034 / 2;\n}"
            }
        ]
    },
    "weather-station-tutorial": {
        title: "Estação Meteorológica IoT",
        steps: [
            {
                title: "1. Sensores e WiFi",
                content: "Sistema:\n- DHT22: Temperatura e umidade\n- BMP180: Pressão\n- ESP32: WiFi\n- App Blynk",
                code: "#include <WiFi.h>\n#include <BlynkSimpleEsp32.h>\n#include <DHT.h>\n\n#define DHT_PIN 4\n#define DHT_TYPE DHT22\n\nDHT dht(DHT_PIN, DHT_TYPE);\n\nchar auth[] = \"TOKEN_BLYNK\";\nchar ssid[] = \"WIFI_REDE\";\nchar pass[] = \"WIFI_SENHA\";"
            },
            {
                title: "2. Coleta de Dados",
                content: "Funcionalidades:\n- Lê sensores a cada 30s\n- Envia para app\n- Alertas automáticos",
                code: "void readSensors() {\n  float temp = dht.readTemperature();\n  float humidity = dht.readHumidity();\n  \n  Blynk.virtualWrite(V1, temp);\n  Blynk.virtualWrite(V2, humidity);\n  \n  if (temp > 35) {\n    Blynk.notify(\"Temperatura alta!\");\n  }\n}"
            }
        ]
    }
};

// Translation system
const translations = {
    pt: {
        "hero.title": "Plataforma Completa de IAs para Programação e Eletrônica",
        "hero.subtitle": "Todas as ferramentas de IA gratuitas para programação, Arduino e eletrônica em um só lugar",
        "filters.all": "Todas",
        "filters.programming": "Programação",
        "filters.arduino": "Arduino",
        "filters.electronics": "Eletrônica",
        "filters.simulation": "Simulação",
        "filters.robotics": "Robótica",
        "filters.education": "Ensino",
        "filters.projects": "Projetos",
        "translate": "Traduzir",
        "translation.title": "Tradução",
        "translation.original": "Texto Original:",
        "translation.translated": "Traduzido:",
        "footer.text": "© 2024 CodeIA Hub - Democratizando o acesso à programação e eletrônica com IA",
        "access": "Acessar",
        "tutorial": "Tutorial",
        "features": "Recursos:",
        "languages": "Linguagens:"
    },
    en: {
        "hero.title": "Complete Platform of AIs for Programming and Electronics",
        "hero.subtitle": "All free AI tools for programming, Arduino and electronics in one place",
        "filters.all": "All",
        "filters.programming": "Programming",
        "filters.arduino": "Arduino",
        "filters.electronics": "Electronics",
        "filters.simulation": "Simulation",
        "filters.robotics": "Robotics",
        "filters.education": "Education",
        "filters.projects": "Projects",
        "translate": "Translate",
        "translation.title": "Translation",
        "translation.original": "Original Text:",
        "translation.translated": "Translated:",
        "footer.text": "© 2024 CodeIA Hub - Democratizing access to programming and electronics with AI",
        "access": "Access",
        "tutorial": "Tutorial",
        "features": "Features:",
        "languages": "Languages:"
    },
    es: {
        "hero.title": "Plataforma Completa de IAs para Programación y Electrónica",
        "hero.subtitle": "Todas las herramientas de IA gratuitas para programación, Arduino y electrónica en un solo lugar",
        "filters.all": "Todas",
        "filters.programming": "Programación",
        "filters.arduino": "Arduino",
        "filters.electronics": "Electrónica",
        "filters.simulation": "Simulación",
        "filters.robotics": "Robótica",
        "filters.education": "Educación",
        "filters.projects": "Proyectos",
        "translate": "Traducir",
        "translation.title": "Traducción",
        "translation.original": "Texto Original:",
        "translation.translated": "Traducido:",
        "footer.text": "© 2024 CodeIA Hub - Democratizando el acceso a la programación y electrónica con IA",
        "access": "Acceder",
        "tutorial": "Tutorial",
        "features": "Características:",
        "languages": "Lenguajes:"
    }
};

let currentLanguage = 'pt';
let selectedText = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    setupEventListeners();
    setupTranslation();
});

// Render tools based on filter
function renderTools(filter = 'all') {
    const container = document.getElementById('toolsContainer');
    const filteredTools = filter === 'all' ? toolsData : toolsData.filter(tool => tool.category === filter);
    
    container.innerHTML = filteredTools.map(tool => `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-header">
                <div class="tool-icon ${tool.category}">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tool-category">${getCategoryName(tool.category)}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                <h4 data-translate="features">${translations[currentLanguage]['features']}</h4>
                <div class="features-list">
                    ${tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
            ${tool.languages ? `
                <div class="tool-features">
                    <h4 data-translate="languages">${translations[currentLanguage]['languages']}</h4>
                    <div class="features-list">
                        ${tool.languages.map(lang => `<span class="feature-tag">${lang}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            <div class="tool-actions">
                <a href="${tool.link}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    <span data-translate="access">${translations[currentLanguage]['access']}</span>
                </a>
                <a href="${tool.tutorial}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-file-pdf"></i>
                    <span>PDF</span>
                </a>
                ${tool.textTutorial ? `
                <button class="btn btn-secondary" onclick="showTextTutorial('${tool.textTutorial}')">
                    <i class="fas fa-book"></i>
                    <span>Guia</span>
                </button>
                ` : ''}
                ${tool.pdfTutorial ? `
                <a href="${tool.pdfTutorial}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-file-pdf"></i>
                    <span>PDF</span>
                </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Get category name in current language
function getCategoryName(category) {
    const categoryNames = {
        programming: { pt: 'Programação', en: 'Programming', es: 'Programación' },
        arduino: { pt: 'Arduino', en: 'Arduino', es: 'Arduino' },
        electronics: { pt: 'Eletrônica', en: 'Electronics', es: 'Electrónica' },
        simulation: { pt: 'Simulação', en: 'Simulation', es: 'Simulación' },
        robotics: { pt: 'Robótica', en: 'Robotics', es: 'Robótica' },
        education: { pt: 'Ensino', en: 'Education', es: 'Educación' },
        projects: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' }
    };
    return categoryNames[category][currentLanguage];
}

// Show text tutorial
function showTextTutorial(tutorialId) {
    const tutorial = textTutorials[tutorialId];
    if (!tutorial) {
        // Se não tem tutorial em textTutorials, tenta abrir HTML
        const htmlMap = {
            "arduino-ide-tutorial": "Tutorial de Arduino IDE.html",
            "chatgpt-tutorial": "Tutorial de ChatGPT.html",
            "copilot-tutorial": "Tutorial de GitHub Copilot.html",
            "replit-tutorial": "Tutorial de Replit AI.html",
            "tabnine-tutorial": "Tutorial de Tabnine.html",
            "tinkercad-tutorial": "Tutorial de Tinkercad Circuits.html",
            "wokwi-tutorial": "Tutorial de Wokwi.html"
        };
        
        if (htmlMap[tutorialId]) {
            window.open(htmlMap[tutorialId], '_blank');
            return;
        }
        return;
    }
    
    const modal = document.getElementById('textTutorialModal');
    const content = document.getElementById('tutorialContent');
    
    content.innerHTML = `
        <h2>${tutorial.title}</h2>
        ${tutorial.steps.map(step => `
            <div class="tutorial-step">
                <h4>${step.title}</h4>
                <div class="tutorial-content">${step.content}</div>
                ${step.code ? `<div class="tutorial-code">${step.code}</div>` : ''}
            </div>
        `).join('')}
    `;
    
    modal.style.display = 'block';
}

// Close text tutorial
function closeTextTutorial() {
    document.getElementById('textTutorialModal').style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderTools(this.dataset.filter);
        });
    });

    // Language selector
    document.getElementById('languageSelect').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
        renderTools(document.querySelector('.filter-btn.active').dataset.filter);
    });
}

// Setup translation system
function setupTranslation() {
    let contextMenu = document.getElementById('contextMenu');
    let translationModal = document.getElementById('translationModal');

    // Text selection and context menu
    document.addEventListener('mouseup', function(e) {
        selectedText = window.getSelection().toString().trim();
        if (selectedText.length > 0) {
            contextMenu.style.display = 'block';
            contextMenu.style.left = e.pageX + 'px';
            contextMenu.style.top = e.pageY + 'px';
        } else {
            contextMenu.style.display = 'none';
        }
    });

    // Hide context menu on click elsewhere
    document.addEventListener('click', function(e) {
        if (!contextMenu.contains(e.target)) {
            contextMenu.style.display = 'none';
        }
    });

    // Translation action
    document.getElementById('translateText').addEventListener('click', function() {
        if (selectedText) {
            showTranslation(selectedText);
            contextMenu.style.display = 'none';
        }
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', function() {
        translationModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === translationModal) {
            translationModal.style.display = 'none';
        }
    });
}

// Show translation modal
function showTranslation(text) {
    document.getElementById('originalText').textContent = text;
    document.getElementById('translatedText').textContent = 'Traduzindo...';
    document.getElementById('translationModal').style.display = 'block';
    
    // Simulate translation (in real app, use Google Translate API)
    setTimeout(() => {
        const translations = {
            pt: {
                'Hello': 'Olá',
                'Programming': 'Programação',
                'Arduino': 'Arduino',
                'Electronics': 'Eletrônica',
                'Tutorial': 'Tutorial',
                'Access': 'Acessar'
            },
            en: {
                'Olá': 'Hello',
                'Programação': 'Programming',
                'Eletrônica': 'Electronics',
                'Tutorial': 'Tutorial',
                'Acessar': 'Access'
            },
            es: {
                'Hello': 'Hola',
                'Programming': 'Programación',
                'Electronics': 'Electrónica',
                'Tutorial': 'Tutorial',
                'Access': 'Acceder'
            }
        };
        
        const translated = translations[currentLanguage][text] || `[${text} traduzido para ${currentLanguage}]`;
        document.getElementById('translatedText').textContent = translated;
    }, 1000);
}

// Update language
function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}