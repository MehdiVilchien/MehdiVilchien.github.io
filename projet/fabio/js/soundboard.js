const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  playjunoElement: null,
  playdaveElement: null,
  playabbaElement: null,
  playlepersElement: null,
  playdassinElement: null,

  pausejunoElement: null,
  pausedaveElement: null,
  pauseabbaElement: null,
  pauselepersElement: null,
  pausedassinElement: null,
 
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
    soundboard.playjunoElement = document.querySelector('.play-juno');
    soundboard.playdaveElement = document.querySelector('.play-dave');
    soundboard.playabbaElement = document.querySelector('.play-abba');
    soundboard.playlepersElement = document.querySelector('.play-lepers');
    soundboard.playdassinElement = document.querySelector('.play-dassin');

    soundboard.pausejunoElement = document.querySelector('.pause-juno');
    soundboard.pausedaveElement = document.querySelector('.pause-dave');
    soundboard.pauseabbaElement = document.querySelector('.pause-abba');
    soundboard.pauselepersElement = document.querySelector('.pause-lepers');
    soundboard.pausedassinElement = document.querySelector('.pause-dassin');
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.junoAudio = new Audio('audio/juno.mp3');
    soundboard.daveAudio = new Audio('audio/dave.mp3');
    soundboard.abbaAudio = new Audio('audio/abba.mp3');
    soundboard.lepersAudio = new Audio('audio/lepers.mp3');
    soundboard.dassinAudio = new Audio('audio/dassin.mp3');
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "juno" est pressé
   */
  handleJunoClick: function() {
    soundboard.junoAudio.currentTime = 0;
    soundboard.junoAudio.play();
  },

  handlePauseJunoClick: function() {
    soundboard.junoAudio.pause();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "dave" est appuyé
   */
  handleDaveClick: function() {
    soundboard.daveAudio.currentTime = 0;
    soundboard.daveAudio.play();
  },

  handlePauseDaveClick: function() {
    soundboard.daveAudio.pause();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "abba" est appuyé
   */
  handleAbbaClick: function() {
    soundboard.abbaAudio.currentTime = 0;
    soundboard.abbaAudio.play();
  },

  handlePauseAbbaClick: function() {
    soundboard.abbaAudio.pause();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "lepers" est appuyé
   */
  handleLepersClick: function() {
    soundboard.lepersAudio.currentTime = 0;
    soundboard.lepersAudio.play();
  },

  handlePauseLepersClick: function() {
    soundboard.lepersAudio.pause();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "dassin" est appuyé
   */
  handleDassinClick: function() {
    soundboard.dassinAudio.currentTime = 0;
    soundboard.dassinAudio.play();
  },

  handlePauseDassinClick: function() {
    soundboard.dassinAudio.pause();
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    soundboard.playjunoElement.addEventListener('click', soundboard.handleJunoClick);
    soundboard.playdaveElement.addEventListener('click', soundboard.handleDaveClick);
    soundboard.playabbaElement.addEventListener('click', soundboard.handleAbbaClick);
    soundboard.playlepersElement.addEventListener('click', soundboard.handleLepersClick);
    soundboard.playdassinElement.addEventListener('click', soundboard.handleDassinClick);

    soundboard.pausejunoElement.addEventListener('click', soundboard.handlePauseJunoClick);
    soundboard.pausedaveElement.addEventListener('click', soundboard.handlePauseDaveClick);
    soundboard.pauseabbaElement.addEventListener('click', soundboard.handlePauseAbbaClick);
    soundboard.pauselepersElement.addEventListener('click', soundboard.handlePauseLepersClick);
    soundboard.pausedassinElement.addEventListener('click', soundboard.handlePauseDassinClick);

  },
}