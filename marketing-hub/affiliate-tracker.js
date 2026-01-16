// Sistema de Afiliados - MarketIA Hub
class AffiliateTracker {
    constructor() {
        this.affiliateId = this.getAffiliateId();
        this.trackPageView();
    }

    getAffiliateId() {
        const urlParams = new URLSearchParams(window.location.search);
        const affiliate = urlParams.get('ref') || urlParams.get('aff');
        if (affiliate) {
            localStorage.setItem('affiliate_id', affiliate);
            return affiliate;
        }
        return localStorage.getItem('affiliate_id') || 'direct';
    }

    trackPageView() {
        this.sendEvent('page_view', {
            page: window.location.pathname,
            affiliate: this.affiliateId,
            timestamp: new Date().toISOString()
        });
    }

    trackClick(element, action) {
        this.sendEvent('click', {
            element: element,
            action: action,
            affiliate: this.affiliateId,
            timestamp: new Date().toISOString()
        });
    }

    trackConversion(product, value) {
        this.sendEvent('conversion', {
            product: product,
            value: value,
            affiliate: this.affiliateId,
            timestamp: new Date().toISOString()
        });
    }

    sendEvent(eventType, data) {
        // Enviar para Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventType, {
                'custom_parameter_1': data.affiliate,
                'custom_parameter_2': data.action || data.product,
                'value': data.value || 0
            });
        }

        // Enviar para webhook próprio
        fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: eventType, data: data })
        }).catch(e => console.log('Tracking error:', e));
    }
}

// Inicializar rastreamento
const tracker = new AffiliateTracker();

// Rastrear cliques em links de afiliados
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && (link.href.includes('ref=') || link.classList.contains('affiliate-link'))) {
        tracker.trackClick(link.href, 'affiliate_click');
    }
    
    if (e.target.classList.contains('btn-premium') || e.target.classList.contains('buy-btn')) {
        tracker.trackClick('premium_button', 'premium_click');
    }
});

// Rastrear conversões (simular)
function trackPurchase(product, price) {
    tracker.trackConversion(product, price);
}