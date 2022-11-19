// "Module" général du projet. Il sert à démarrer les autres modules et faire des actions générales au site
const app = {

    // Méthode appelée au démarrage de la page, elle se charge d'appeler les méthodes init des autres modules. 
    // Elle sert donc de point d'entrée unique à JS dans notre projet et de sommaire des modules utilisés
    init: function() {

        // On démarre les modules qui ont besoin d'etre démarrés au chargement de la page
        
        //newsletter.init();

        slider.init();
        
        theme.init();

        //destinations.init();

        reviews.init();

    }

}

// On pose un écouteur sur le document qui surveille l'événement DOMContentLoaded. Cet événement est émis par le navigateur quand le DOM est totalement chargé. Ainsi on garantit à JS  que tout pret et qu'il peut venir appliquer ses modifications sur le DOM. En gros, on attend que la page soit totalement chargée pour lancer notre code.
document.addEventListener('DOMContentLoaded', app.init);