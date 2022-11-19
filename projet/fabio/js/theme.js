// "Module" gérant les fonctionnalités de thème
const theme = {

    // Méthode init appelée au chargement de la page
    init: function() {
        console.log("Module theme lancé !");

        // On veut vérifier si l'utilisateur possède une préférence de thème entre sombre et clair en allant lire son localStorage
        theme.initLocalState();

        // On pose un écouteur sur le bouton de changement de thème sombre/clair
        const themeButton = document.querySelector('#theme-switch');
        themeButton.addEventListener('click', theme.toggleDark);

        // On sélectionne les trois pastilles de couleur
        const colorThemeButtons = document.querySelectorAll('.theme-button');
 
        // On parcourt l'ensemble des boutons sélectionnés
        for (const currentButton of colorThemeButtons) {

            // On place un écouteur de clic sur chaque bouton
            currentButton.addEventListener('click', theme.handleColorButtonClick);

        }

    },
    
    /**
     * Méthode permettant de passer du thème light au thème dark et inversement
     */
    toggleDark: function() {
        console.log("Change le thème");
    
        // Comme le changement de thème se fait grace à une classe présente ou non sur le body : 
        // On commence par sélectionner le body
        const body  = document.querySelector('body');
    
        // On vérifie la présence de la classe "theme-dark"
        if(body.classList.contains('theme-dark')) {
            console.log('La classe theme dark est présente donc on l\'enlève');
            // Si elle est présente, on la retire
            body.classList.remove('theme-dark');
        } else {
            // Si elle est absente, on l'ajoute au body
            body.classList.add('theme-dark');
        }
    
    
        // Version plus rapide avec l'outil toggle qui se charge de faire les vérifications sur la présence de la classe
        // body.classList.toggle('theme-dark');

        // Une fois le thème modifié, on appelle la méthode qui se charge de sauvegarder le choix du thème dans localStorage
        theme.saveToLocalStorage();

    
    },

    /**
     * Méthode appelée par l'écouteur des clics sur les boutons de changement de thème de couleur
     * @param {Event} event 
     */
   /*  handleColorButtonClick: function(event) {

        // On récupère l'élément sur lequel on a cliqué
        const clickedButton = event.currentTarget;

        // On récupère le nom du thème à appliquer grace à l'ID du bouton (qui porte le meme nom)
        const colorTheme = clickedButton.id;

        // On appelle la méthode qui se charge de modifier le thème
        theme.changeColorTheme(colorTheme);

        // On sauvegarde dans localStorage le thème choisi
        localStorage.setItem('colorTheme', colorTheme);
    },   */

    /**
     * Méthode permettant de modifier le thème de couleur de la page
     * @param {String} themeName Nom du thème à appliquer (theme-red,theme-green, theme-blue)
     */
  /*   changeColorTheme: function(themeName) {

        // On commence par retirer toutes les classes liées à un thème de couleur
        document.body.classList.remove('theme-green', 'theme-red', 'theme-blue');

        // On ajoute le nom du thème reçu en paramètre en tant que classe du body
        document.body.classList.add(themeName);

        


    }, */

    /**
     * Sauvegarde dans le localStorage l'info du mode Dark actuelle.
     */
    saveToLocalStorage: function() {

        // On vérifie si le body contient la classe "theme-dark" à l'aide de la méthode contains de classList
        // * Petite astuce : Document.body est un raccourci pour sélectionner le body sans utiliser de sélecteur
        const isDark = document.body.classList.contains('theme-dark');


        // localStorage ne peut stocker que des chaines de caractères, on doit donc transformer notre valeur booléene en string avec stringify
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        const isDarkString = JSON.stringify(isDark);

        // On sauvegarde l'information dans localStorage à l'aide de la méthode setItem
        localStorage.setItem('darkMode', isDarkString);

    },

    /**
     * Méthode permettant de lire dans localStorage les préférences utilisateur et de les traduire en comportement sur le site (passer au thème dark par exemple)
     */
    initLocalState: function() {

        // On lit dans localStorage l'entrée "darkMode"
        const localSave = localStorage.getItem('darkMode');

        // On convertit cette valeur en JS (car elle est stockée en JSON)
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
        const isDark = JSON.parse(localSave);


        // Si la valeur récupérée est "true", alors on applique le thème sombre
        // Si c'est "false" ou si "darkMode n'existe pas", alors on ne fait rien
        if( isDark ) {
            theme.toggleDark();
        }

        // On récupère dans localStorage le thème de couleur s'il existe
        const colorTheme = localStorage.getItem('colorTheme');

        if(colorTheme) {

            // On appelle la méthode chargée d'appliquer un thème en lui passant le nom de celui-ci (qui était stocké en localstorage)
            theme.changeColorTheme(colorTheme);

        }
    }

}


// Au chargement de la page, on lance la méthode init rangée dans le module theme. 
// document.addEventListener('DOMContentLoaded', theme.init);

