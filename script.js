// Night Mode Toggle
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Popup Gallery
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        // Create overlay for popup with ARIA attributes
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        // Style overlay
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';

        // Create and add image to overlay
        const img = document.createElement('img');
        img.src = image.src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        img.setAttribute('alt', image.alt);
        overlay.appendChild(img);

        // Append overlay to body
        document.body.appendChild(overlay);

        // Remove overlay on click
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
