document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    const introCard = document.querySelector('.intro-card');
    
    // Add fade-in animation to intro card
    introCard.style.opacity = '0';
    introCard.style.transform = 'translateY(20px)';
    setTimeout(() => {
        introCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        introCard.style.opacity = '1';
        introCard.style.transform = 'translateY(0)';
    }, 100);

    // Add staggered fade-in to memory cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Add click interaction
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Add a subtle bounce effect
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
}); 