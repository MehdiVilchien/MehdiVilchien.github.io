const app = {

  /**
   * Méthode permettant d'initialiser l'application
   * et de démarrer les composants nécessaires
   */
  init: function() {
    soundboard.init();

    window.addEventListener('keydown', function(e) {
      if(e.key == ' ' && e.target == document.body) {
        e.preventDefault();
      }
    });
    
  },

}

/**
 * Écouteur d'évènement qui exécute la méthode app.init
 * lorsque le DOM est prêt
 */
document.addEventListener('DOMContentLoaded', app.init);