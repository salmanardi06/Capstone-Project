document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    // Form submission handler
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const suggestion = document.getElementById('suggestion').value;
        const phoneNumber = '6281292962869';
        
        const message = `Saran yang diberikan untuk Website JelajahiJawa.id.%0ANama : ${name}%0ASaran : ${suggestion}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappURL, '_blank');
    });
});
