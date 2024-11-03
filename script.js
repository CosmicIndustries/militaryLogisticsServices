// Toggle Night Mode
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// Toggle Mobile Menu Visibility
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
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
