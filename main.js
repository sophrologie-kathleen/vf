// Gestion du modal de rendez-vous
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('rdvModal');
    const openBtn = document.getElementById('openRdvModal');
    const closeBtn = document.getElementById('closeRdvModal');
    const rdvForm = document.getElementById('rdvForm');
    const rdvInfo = document.getElementById('rdvInfo');

    openBtn.onclick = () => {
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
        document.body.style.overflow = 'hidden';
        rdvForm.style.display = 'block';
        rdvInfo.style.display = 'none';
        rdvForm.reset();
    };

    closeBtn.onclick = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            closeBtn.click();
        }
    };

    // Validation du formulaire RDV
    document.getElementById('rdvBtn').onclick = () => {
        const firstName = document.getElementById('rdvFirstName').value.trim();
        const lastName = document.getElementById('rdvLastName').value.trim();
        const phone = document.getElementById('rdvPhone').value.trim();
        const message = document.getElementById('rdvMessage').value.trim();
        const legalConsent = document.getElementById('rdvLegalConsent').checked;
        
        if (!firstName || !lastName || !phone || !message) {
            alert("Merci de remplir tous les champs obligatoires.");
            return;
        }
        
        if (!legalConsent) {
            alert("Vous devez accepter les conditions de traitement des données personnelles pour continuer.");
            return;
        }
        
        rdvForm.style.display = 'none';
        rdvInfo.style.display = 'block';
        document.getElementById('rdvInfoText').textContent = "Votre demande a été enregistrée. Kathleen vous recontactera rapidement.";
    };

    // Gestion des témoignages
    const testimonialForm = document.getElementById('testimonialForm');
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('testimonialName').value.trim() || 'Anonyme';
            const text = document.getElementById('testimonialText').value.trim();
            
            if (!text) {
                alert("Merci d'écrire votre avis.");
                return;
            }
            
            const testimonialDiv = document.createElement('div');
            testimonialDiv.className = 'testimonial';
            testimonialDiv.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
            
            const testimonialsList = document.getElementById('testimonialsList');
            testimonialsList.insertBefore(testimonialDiv, testimonialsList.firstChild);
            
            testimonialForm.reset();
            alert("✅ Merci pour votre témoignage ! Il est maintenant visible. 😊");
        });
    }
});
