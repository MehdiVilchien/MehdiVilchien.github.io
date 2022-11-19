// Module "message" dont le but est de stocker tous les outils permettant de manipuler les messages d'erreur
const messages = {

    // Propriétés (variable dans un objet/tableau asso)
    // entree1: "valeur",

    // Méthodes (fonction dans un objet/tableau asso)

    /**
     * Méthode permettant d'ajouter un message d'erreur donné dans un parent donné
     * @param {String} textMessage Message d'erreur à afficher
     * @param {Element} parentElement Elément dans lequel afficher le message d'erreur
     */
    create: function(textMessage, parentElement) {

        //Avant de créer le nouveau message d'erreur, on supprime les potentiels messages existants
        messages.delete(parentElement);

        // On crée un message d'erreur
        const errorElement = document.createElement('p');

        // On ajoute les différentes infos au message (classe,texte)
        errorElement.classList.add('message');
        // On ajoute le texte qui provient du paramètre
        errorElement.textContent = textMessage;

        // On ajoute l'erreur en haut du parent
        parentElement.prepend(errorElement);

    },

    /**
     * Méthode permettant de supprimer tous les messages d'erreur dans un élément donné
     * @param {Element} parentElement Element dans lequel on supprime tous les messages
     */
    delete: function(parentElement) {

        // On cherche dans le parent fourni tous les messages d'erreur pour les supprimer
        const oldMessages = parentElement.querySelectorAll('.message');

        // Comme querySelectorAll renvoie toujours un tableau contenant les éléments trouvés, on parcourt ce tableau pour supprimer les messages un par un.

        for (const oldMessage of oldMessages) {
            
            // Pour chaque message, on appelle la méthode remove qui permet de les supprimer
            oldMessage.remove();

        }

    }

}

