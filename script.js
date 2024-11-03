// Night Mode Toggle with Local Storage
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    if (document.body.classList.contains('night-mode')) {
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'day');
    }
}

// Load theme from Local Storage on page load
window.onload = () => {
    if (localStorage.getItem('theme') === 'night') {
        document.body.classList.add('night-mode');
    }
};

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Popup with Accessibility
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

// Night Mode Toggle
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// Toggle Hamburger Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
