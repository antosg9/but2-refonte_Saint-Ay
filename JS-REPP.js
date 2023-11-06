
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

  