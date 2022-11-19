const reviews = {

    init: function() {
        console.log('Module reviews démarré');

        // On sélectionne les trois checkboxes 
        const checkboxElements = document.querySelectorAll('.filter input');
        
        // On place un écouteur sur chaque checkbox
        for (const currentCheckbox of checkboxElements) {
            
            currentCheckbox.addEventListener('click', reviews.handleCheckboxClick);
        }
    },

    handleCheckboxClick: function(event) {
        // console.log('clic sur une checkbox');
        // On récupère la checkbox sur laquelle on a cliqué
        const clickedCheckbox = event.currentTarget;
        // On récupère la valeur associée à la checkbox 
        const rating = clickedCheckbox.value
        
        // On transmet cette valeur à une méthode qui se charge d'afficher ou cacher les commentaires liés
        reviews.toggleReviews(rating);
    },

    toggleReviews: function(rating){

        // On sélectionne tous les commentaires qui ont pour dataset data-rating la valeur apportée en paramètre
        const reviewElements = document.querySelectorAll(`.review[data-rating="${rating}"]`);
        
        // On parcourt la liste des commentaires récupérés
        for (const currentReview of reviewElements) {

            // On utilise toggle pour ajouter ou retirer la classe qui cache les  commentaires.
            currentReview.classList.toggle('review--hidden');
            
        }
    }

}