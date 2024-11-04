// Night Mode Toggle
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const isNightMode = document.body.classList.contains('night-mode');
    localStorage.setItem('nightMode', isNightMode ? 'enabled' : 'disabled');
    updateDropdownNightMode(isNightMode);
}

// Load Night Mode Preference on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const nightModeSetting = localStorage.getItem('nightMode');
    if (nightModeSetting === 'enabled') {
        document.body.classList.add('night-mode');
        updateDropdownNightMode(true);
    }
});

// Toggle Mobile Menu Visibility
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// Apply Night Mode Styles to Dropdown
function updateDropdownNightMode(isNightMode) {
    const navLinks = document.getElementById('navLinks');
    if (isNightMode) {
        navLinks.classList.add('night-mode');
    } else {
        navLinks.classList.remove('night-mode');
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
