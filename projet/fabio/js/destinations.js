// "Module" destination, gère toutes les actions sur la partie destinations de la page
const destinations = {
    // Méthode appelée au démarrage
    init: function() {

        // On sélectionne tous les coeurs de la page pour poser des écouteurs de clic dessus
        const heartElements = document.querySelectorAll('.btn__like');
        
        // On boucle sur tous les coeurs pour leur placer un écouteur un par un
        for (const currentHeartElement of heartElements) {

            currentHeartElement.addEventListener('click', destinations.handleHeartClick);

        }
    },

    // Méthode appelée lorsqu'on clique sur les coeurs
    handleHeartClick: function(event) {

        // On récupère l'élément sur lequel on a cliqué
        const clickedElement = event.target;

        // Avec la fonction closest, on peut récupérer le parent de notre bouton selon un sélecteur css.
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        // On cherche parmi les ancetres du bouton cliqué le premier qui a la classe card
        const parentElement = clickedElement.closest('.card');
        

        // On affiche le message grace au module dédié !
        messages.create("Vous devez etre connecté pour gérer vos favoris", parentElement);

    }
}

// Au démarrage, on lance la méthode init
// destinations.init();