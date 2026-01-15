// Mostrar modal de pagamento
function showPayment() {
    document.getElementById('paymentModal').style.display = 'block';
}

// Fechar modal de pagamento
function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Copiar código PIX
function copyPix() {
    const pixCode = document.querySelector('.pix-code').textContent;
    navigator.clipboard.writeText(pixCode).then(() => {
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> PIX Copiado!';
        button.style.background = '#2ecc71';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#667eea';
        }, 2000);
    });
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}