// Senhas válidas (você pode adicionar mais conforme vende)
const validPasswords = [
    'PREMIUM2024A1',
    'PREMIUM2024B2',
    'PREMIUM2024C3',
    'PREMIUM2024D4',
    'PREMIUM2024E5'
];

// Função de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value.trim();
    
    if (validPasswords.includes(password)) {
        // Salvar senha no localStorage para manter logado
        localStorage.setItem('premiumAccess', password);
        
        // Mostrar mensagem de sucesso
        showMessage('✅ Acesso liberado! Redirecionando...', 'success');
        
        // Redirecionar para o painel
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        showMessage('❌ Senha inválida! Verifique sua senha premium.', 'error');
    }
});

// Função para mostrar mensagens
function showMessage(message, type) {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
    messageDiv.textContent = message;
    
    const form = document.getElementById('loginForm');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Remove mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Verificar se já está logado
window.addEventListener('load', function() {
    const savedPassword = localStorage.getItem('premiumAccess');
    if (savedPassword && validPasswords.includes(savedPassword)) {
        window.location.href = 'dashboard.html';
    }
});