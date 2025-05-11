document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    const introCard = document.querySelector('.intro-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    
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
    
    // Lightbox functionality
    cards.forEach(card => {
        const imagePlaceholder = card.querySelector('.image-placeholder');
        const caption = card.querySelector('.caption').textContent;
        
        imagePlaceholder.addEventListener('click', () => {
            const imageUrl = imagePlaceholder.getAttribute('data-image');
            if (imageUrl && imageUrl !== '[Image URL will go here]') {
                lightboxImage.src = imageUrl;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close lightbox
    const closeLightboxHandler = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    closeLightbox.addEventListener('click', closeLightboxHandler);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxHandler();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightboxHandler();
        }
    });
}); 