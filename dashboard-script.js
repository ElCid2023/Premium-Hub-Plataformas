// Verificar se o usuário está logado
window.addEventListener('load', function() {
    const savedPassword = localStorage.getItem('premiumAccess');
    const validPasswords = [
        'PREMIUM2024A1',
        'PREMIUM2024B2',
        'PREMIUM2024C3',
        'PREMIUM2024D4',
        'PREMIUM2024E5'
    ];
    
    if (!savedPassword || !validPasswords.includes(savedPassword)) {
        // Redirecionar para login se não estiver logado
        window.location.href = 'login.html';
        return;
    }
    
    // Mostrar senha do usuário
    document.getElementById('userPassword').textContent = `Senha: ${savedPassword}`;
});

// Função de logout
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('premiumAccess');
        window.location.href = 'login.html';
    }
}

// Adicionar animações aos cards
document.addEventListener('DOMContentLoaded', function() {
    const platformItems = document.querySelectorAll('.platform-item');
    
    platformItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Rastrear cliques nas plataformas
function trackPlatformAccess(platformName) {
    console.log(`Usuário acessou: ${platformName}`);
    // Aqui você pode adicionar analytics se quiser
}

// Adicionar event listeners aos botões das plataformas
document.addEventListener('DOMContentLoaded', function() {
    const platformButtons = document.querySelectorAll('.platform-btn');
    
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platformName = this.closest('.platform-item').querySelector('h3').textContent;
            trackPlatformAccess(platformName);
        });
    });
});