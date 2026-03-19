const btn = document.getElementById("showMoreBtn");
const hiddenCerts = document.querySelectorAll(".hidden");
btn.addEventListener("click", function(){
hiddenCerts.forEach(cert => {
cert.style.display = "block";
});
btn.style.display = "none";
});
/* Section particule js */
particlesJS("particles-js", {
particles:{
number:{value:60},
color:{value:"#00bcd4"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#00bcd4"
},
move:{enable:true,speed:2}
}
});
// Données du projet unique
const projectData = {
    title: "Détection et classification automatisée des maladies rétinienne",
    image: "images/Projet.png",
    description: "Ce projet utilise l'intelligence artificielle pour détecter et classifier automatiquement les maladies rétiniennes à partir d'images OCT. L'interface graphique utilisateur permet aux professionnels de santé de charger des images et d'obtenir des diagnostics précis en quelques secondes. Le modèle a été entraîné sur plus de 100.000 images OCT et atteint une précision de 95% dans la détection des pathologies rétiniennes courantes. Cette application facilite le travail des ophtalmologistes en automatisant le processus de dépistage et en réduisant les erreurs de diagnostic."
};

// Ouvrir la modale
function openModal() {
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modal-title').textContent = projectData.title;
    document.getElementById('modal-image').src = projectData.image;
    document.getElementById('modal-description').textContent = projectData.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Empêche le scroll en arrière-plan
}

// Fermer la modale
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Réactive le scroll
}

// Événements
document.addEventListener('DOMContentLoaded', function() {
    // Bouton pour ouvrir la modale
    const projectLink = document.querySelector('.project-link');
    if (projectLink) {
        projectLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    // Fermer avec le bouton X
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Fermer en cliquant en dehors de la modale
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});