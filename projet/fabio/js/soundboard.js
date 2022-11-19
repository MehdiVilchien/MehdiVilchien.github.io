const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  junoElement: null,
  daveElement: null,
  abbaElement: null,
  lepersElement: null,
  dassinElement: null,
 
  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  junoAudio: null,
  daveAudio: null,
  abbaAudio: null,
  lepersAudio: null,
  dassinAudio: null,
 
  /**
   * Méthode permettant d'initialiser la sound board
   */
  init: function() {
    soundboard.definePads();
    soundboard.preloadSamples();
    soundboard.attachEvents();
  },

  /**
   * Méthode permettant de sélectionner dans le DOM
   * les différents éléments pads
   */
  definePads: function() {
    soundboard.junoElement = document.querySelector('.juno');
    soundboard.daveElement = document.querySelector('.dave');
    soundboard.abbaElement = document.querySelector('.abba');
    soundboard.lepersElement = document.querySelector('.lepers');
    soundboard.dassinElement = document.querySelector('.dassin');
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.junoAudio = new Audio('https://www.cjoint.com/doc/20_08/JHtsIUsoTet_francois-juno-la-chanson-de-kiki.mp3');
    soundboard.daveAudio = new Audio('audio/dave.mp3');
    soundboard.abbaAudio = new Audio('audio/abba.mp3');
    soundboard.lepersAudio = new Audio('http://gwendou.free.fr/MP3/07-Deretourdevacances.mp3');
    soundboard.dassinAudio = new Audio('https://www.cjoint.com/doc/21_03/KCxcmHFoKLR_Joe-Dassin-Siffler-sur-la-colline.mp3');
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "juno" est pressé
   */
  handleJunoClick: function() {
    console.log('click');
    soundboard.junoAudio.currentTime = 0;
    soundboard.junoAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "dave" est appuyé
   */
  handleDaveClick: function() {
    soundboard.daveAudio.currentTime = 0;
    soundboard.daveAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "abba" est appuyé
   */
  handleAbbaClick: function() {
    soundboard.abbaAudio.currentTime = 0;
    soundboard.abbaAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "lepers" est appuyé
   */
  handleLepersClick: function() {
    soundboard.lepersAudio.currentTime = 0;
    soundboard.lepersAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "dassin" est appuyé
   */
  handleDassinClick: function() {
    soundboard.dassinAudio.currentTime = 0;
    soundboard.dassinAudio.play();
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    soundboard.junoElement.addEventListener('click', soundboard.handleJunoClick);
    soundboard.daveElement.addEventListener('click', soundboard.handleDaveClick);
    soundboard.abbaElement.addEventListener('click', soundboard.handleAbbaClick);
    soundboard.lepersElement.addEventListener('click', soundboard.handleLepersClick);
    soundboard.dassinElement.addEventListener('click', soundboard.handleDassinClick);

  },
}