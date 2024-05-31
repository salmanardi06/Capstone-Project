import '../scripts/component/navbar.js';
import '../scripts/component/footer.js';

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
});
