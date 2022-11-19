// "Module" gérant les fonctionnalités de newsletter
const newsletter = {

    // Méthode appelée au chargement de la page et gérant les actions à faire le plus vite possible concernant la newsletter
    init: function() {

        // Au chargement de la page, on veut surveiller le bouton newsletter
        const newsletterButtonElement = document.querySelector('.newsletter-button');

        // On pose un écouteur de clic sur le bouton
        newsletterButtonElement.addEventListener('click', newsletter.handleClickOnNewsletterButton);


        // On veut aussi surveiller les clics sur le bouton de fermeture, on sélectionne donc ce bouton
        const closeButtonElement = document.querySelector('.newsletter__close');
        closeButtonElement.addEventListener('click', newsletter.handleClickOnCloseButton);

        // On veut surveiller quand l'utilisateur soumet le formulaire
        const newsletterFormElement = document.querySelector('.newsletter form'); 
        newsletterFormElement.addEventListener('submit', newsletter.handleFormSubmit);

    },

    /**
     * Méthode appelée quand on clique sur le lien newsletter du menu
     */
    handleClickOnNewsletterButton: function(event) {
        

        // Comme le clic sur le lien recharge la page, on bloque ce comportement par défaut
        event.preventDefault();
        
        // On sélectionne l'encart de newsletter
        const newsletterElement = document.querySelector('.newsletter');

        // On l'affiche en lui ajoutant la classe newsletter--on
        newsletterElement.classList.add('newsletter--on');


    },

    /**
     * Fonction appelée quand on clique sur le bouton de fermeture
     */
    handleClickOnCloseButton: function() {
        
        // On sélectionne l'encart de newsletter
        const newsletterElement = document.querySelector('.newsletter');

        // On le cache en retirant la classe newsletter--on
        newsletterElement.classList.remove('newsletter--on');

    },

    /**
     * Fonction appelée quand on soumet le formulaire
     */
    handleFormSubmit: function(event) {

        // Récupérer l'email entré par l'utilisateur
        const userEmail = document.querySelector('.newsletter__field').value;

        // On vérifie si l'email est interdit grace à une fonction dédiée
        const isForbidden = newsletter.isForbiddenEmail(userEmail);

        // Si l'email est interdit
        if(isForbidden) {
            
            // On arrete l'envoi du formulaire
            event.preventDefault();

        
            // Pour insérer l'erreur dans la page, on sélectionne le parent qui va la recevoir
            const newsletterElement = document.querySelector('.newsletter');

            // On appelle le module dédié à la création des messages d'erreur
            messages.create("Les adresses jetables ne sont pas admises !!!!!!", newsletterElement)

        }

    },


    /**
     *  Méthode permettant de tester si un email fait partie des domaines interdits.
     * @param {String} email email à tester
     * @returns {Boolean}
     */
    isForbiddenEmail: function(email) {

        // Liste des domaines interdits
        const forbiddenDomains = [
            '@yopmail.com',
            '@yopmail.fr',
            '@yopmail.net',
            '@cool.fr.nf',
            '@jetable.fr.nf',
            '@courriel.fr.nf',
            '@moncourrier.fr.nf',
            '@monemail.fr.nf',
            '@monmail.fr.nf',
            '@hide.biz.st',
            '@mymail.infos.st',
        ];
        
        // Pour vérifier que l'email est interdit, on doit parcourir la liste des domaines interdits
        for (const testedDomain of forbiddenDomains) {
            
            // Pour chaque domaine on vérifie s'il fait partie de l'email de l'utilisateur
            if(email.includes(testedDomain)) {
                // Si l'email inclut le domaine testé, on renvoie true
                return true;
            }

        }

        // Une fois le for terminé, si on a trouvé aucun domaine interdit, on renvoie false
        return false;

    }



}
