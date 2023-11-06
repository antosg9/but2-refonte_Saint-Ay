// Sélectionnez les éléments de bouton et de contenu
var rdvButton = document.getElementById('rdv-button');
var infoButton = document.getElementById('info-button');
var infoContent = document.getElementById('info-content');



// JavaScript code
window.addEventListener("keydown", (e) => {
    if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyF')) { 
      e.preventDefault();
      const search = document.querySelector('#search')
      search.focus()
    }
  })
  

  // Code JavaScript pour le bouton de retour en haut
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Afficher ou masquer le bouton en fonction de la position de la page
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Fonction pour remonter en haut de la page avec une animation
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Ouvrir la pop-up lorsqu'on clique sur le bouton
document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "block";
});

// Fermer la pop-up lorsqu'on clique sur le bouton de fermeture (X)
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
});
