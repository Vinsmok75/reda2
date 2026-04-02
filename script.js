document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksList = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            // Change icon from bars to times
            const icon = navToggle.querySelector('i');
            if (navLinksList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Menu Link Click - just close menu on click for multi-page
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu if open (mobile)
            if (navLinksList.classList.contains('active')) {
                navLinksList.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. Form Submission Handling (Mock behavior for frontend)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const nom = document.getElementById('nom').value.trim();
            const email = document.getElementById('email').value.trim();
            const objet = document.getElementById('objet').value.trim();
            const message = document.getElementById('message').value.trim();

            if (nom && email && objet && message) {
                // Mock success message
                formStatus.textContent = `Merci ${nom}, votre message concernant "${objet}" a bien été envoyé !`;
                formStatus.className = "form-status success-msg";
                contactForm.reset();
            } else {
                formStatus.textContent = "Veuillez remplir tous les champs obligatoires.";
                formStatus.className = "form-status error-msg";
            }

            // Clear status message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = "";
                formStatus.className = "form-status";
            }, 6000);
        });
    }
});
