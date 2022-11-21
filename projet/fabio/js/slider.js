// "Module" gérant les fonctionnalités liées au slider
const slider = {

    // Propriétés (variables du module)
    // Propriété permettant de stocker la position de l'image actuellement affichée
    currentPosition: 0,

    // Propriété permettant de stocker la liste des images du slider
    images: [],
    

    /**
     * Méthode appelée au chargement de la page. Contient toutes les actions à faire au démarrage et qui concernent le slider
     */
    init: function() {

        // Au démarrage on génère toutes les images
        slider.generateSliderImages();

        // Une fois les images générées sur la page, on les sélectionne dans un tableau rangé dans une propriété
        slider.images = document.querySelectorAll('.slider__img');


        // On a besoin de surveiller les clics sur les boutons de navigation
        const sliderButtons = document.querySelectorAll('.slider__btn');

        // QuerySelectorAll nous renvoie un tableau. Le bouton précédent sera toujours le 1er élément du tableau, et le bouton suivant toujours le second
        const prevButtonElement = sliderButtons[0];
        const nextButtonElement = sliderButtons[1];

        // On pose les écouteurs sur les boutons
        prevButtonElement.addEventListener('click', slider.handlePreviousSlide);
        nextButtonElement.addEventListener('click', slider.handleNextSlide);

        // setTimeout permet d'exécuter un handler UNE FOIS au bout X millisecondes (1000 millisecondes = 1s)
        // setTimeout(slider.handleNextSlide, 5000);

        //setInterval permet d'exécuter un handler TOUTES LES X millisecondes
        setInterval(slider.handleNextSlide, 5000);


    },
    /**
     * Méthode appelée par l'écouteur d'événement placé sur le bouton précédent
     */
    handlePreviousSlide: function() {
        // On commence par calculer la position de l'image à afficher
        // Image précédente  = image actuelle - 1
        let newPosition = slider.currentPosition - 1;

        // Si la nouvelle position calculée est inférieure à 0, alors la redéfinit sur le dernier index du tableau
        if(newPosition < 0) {
            newPosition = slider.images.length - 1;
        }

        // On appelle la méthode dédiée au changement de slide en lui donnant la position de la slide à afficher
        slider.goToSlide(newPosition);

     
    },
    /**
     * Méthode appelée par l'écouteur d'événement placé sur le bouton suivante
     */
    handleNextSlide: function() {
        // On commence par calculer la position de l'image à afficher
        // Image suivante  = image actuelle + 1
        let newPosition = slider.currentPosition + 1;

        // Si la nouvelle position dépasse la longueur du tableau, alors on redéfinit la position à la première image 
        if(newPosition >= slider.images.length) {
            newPosition = 0;
        }

        // On appelle la méthode dédiée au changement de slide en lui donnant la position de la slide à afficher

        slider.goToSlide(newPosition);
            


    },
    /**
     * Permet d'afficher une des slides données selon sa position
     * @param {Integer} newPosition Position de l'image à afficher
     */
    goToSlide: function(newPosition) {
        // On récupère l'image actuellement affichée et on lui retire la classe current
        const currentImage = document.querySelector('.slider__img--current');
                    
        //  Version en allant chercher dans le tableau des images
        // const currentImage = slider.images[slider.currentPosition];

        currentImage.classList.remove('slider__img--current');

        // On récupère l'image à afficher grace à la nouvelle position
        const imageToDisplay = slider.images[newPosition];

        // On ajoute la classe qui permet d'afficher l'image
        imageToDisplay.classList.add('slider__img--current');

        // On met à jour la nouvelle position avec celle qu'on vient de calculer
        slider.currentPosition = newPosition;
    },
    /**
     * Méthode permettant de générer toutes les images du slider
     */
    generateSliderImages: function() {

        const sliderImages = [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
            '7.png',
            '8.png',
            '9.png',
            '27.png',
        ];
    
        // On sélectionne l'élément qui va recevoir l'image (on le fait à l'extérieur de la boucle pour éviter d'avoir à le sélectionner autant de fois qu'il ya d'images)
        const sliderElement = document.querySelector('.slider');
    
    
        // On boucle sur toutes les entrées du tableau et pour chaque entrée :
    
        for (const imageName of sliderImages) {
            
            // On se crée une image
            const newImage = document.createElement('img');
            
            // On définit la source de l'image
            newImage.src = "img/" + imageName;
    
            // On ajoute les classes
            newImage.classList.add('slider__img');
    
            // On ajoute l'attribut alt
            newImage.alt = "Image de slider";
    
            // On ajoute l'image avant les enfants actuels de slider
            sliderElement.prepend(newImage);
        }
        
    
        // Une fois les images générées, on veut afficher la première
        // Donc cherche la première image de la page qui porte la classe .slider__img
        const firstImageElement = document.querySelector('.slider .slider__img');
    
        // On lui ajoute la classe current
        firstImageElement.classList.add('slider__img--current');
    
    },

    

}


// On pose un écouteur sur le document qui surveille l'événement DOMContentLoaded. Cet événement est émis par le navigateur quand le DOM est totalement chargé. Ainsi on garantit à JS  que tout pret et qu'il peut venir appliquer ses modifications sur le DOM. En gros, on attend que la page soit totalement chargée pour lancer notre code.
// document.addEventListener('DOMContentLoaded', slider.init);

