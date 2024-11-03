// Check localStorage for night mode preference
if (localStorage.getItem('nightMode') === 'enabled') {
    document.body.classList.add('night-mode');
}

// Night Mode Toggle
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    // Save preference to localStorage
    if (document.body.classList.contains('night-mode')) {
        localStorage.setItem('nightMode', 'enabled');
    } else {
        localStorage.removeItem('nightMode');
    }
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
