document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
}); 