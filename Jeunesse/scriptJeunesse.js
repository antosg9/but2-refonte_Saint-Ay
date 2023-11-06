// Attache un écouteur d'événement pour définir la barre de navigation en mode "sticky" lors du défilement
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// Attache un écouteur d'événement au chargement du document pour gérer la navigation par défilement
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les liens de défilement
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Pour chaque lien de défilement
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            // Récupère l'ID de la cible sans le préfixe #
            const targetId = this.getAttribute('href').substring(1);

            // Trouve l'élément cible
            const targetElement = document.getElementById(targetId);

            // Si l'élément cible existe
            if (targetElement) {
                // Fait défiler l'élément cible en douceur
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fonction pour vérifier si une section est dans la vue
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Fonction pour gérer le défilement et animer les sections
function handleScroll() {
    var sections = document.querySelectorAll('.animated-section');

    sections.forEach(function (section) {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Attachez un écouteur d'événement de défilement
window.addEventListener('scroll', handleScroll);

// Appelez la fonction handleScroll une fois au chargement de la page pour gérer les sections initiales
document.addEventListener('DOMContentLoaded', handleScroll);
