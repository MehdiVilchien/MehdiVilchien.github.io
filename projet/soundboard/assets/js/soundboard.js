const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  kickElement: null,
  hihatElement: null,
  snareElement: null,
  wobbleElement: null,
  vocalElement: null,
  scratchElement: null,
  grenadeElement: null,
  violonElement: null,
  triangleElement: null,
  saxophoneElement: null,
  tambourElement: null,
  clapElement: null,
  fluteElement: null,
  aigleElement: null,
  rotElement: null,
  sifflementElement: null,
  cornemuseElement: null,
  rythmeElement: null,
  castagnetteElement: null,
  ukuleleElement: null,
  alarmeElement: null,
  applaudissementElement: null,
  boucheElement: null,
  hoquetElement: null,
  annonceElement: null,
  xylophoneElement: null,
  tarzanElement: null,
  
  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  kickAudio: null,
  hihatAudio: null,
  snareAudio: null,
  wobbleAudio: null,
  vocalAudio: null,
  scratchAudio: null,
  grenadeAudio: null,
  violonAudio: null,
  triangleAudio: null,
  saxophoneAudio: null,
  tambourAudio: null,
  clapAudio: null,
  fluteAudio: null,
  aigleAudio: null,
  rotAudio: null,
  sifflementAudio: null,
  cornemuseAudio: null,
  rythmeAudio: null,
  castagnetteAudio: null,
  ukuleleAudio: null,
  alarmeAudio: null,
  applaudissementAudio: null,
  boucheAudio: null,
  hoquetAudio: null,
  annonceAudio: null,
  xylophoneAudio: null,
  tarzanAudio: null,

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
    soundboard.kickElement = document.querySelector('.pad-1');
    soundboard.hihatElement = document.querySelector('.pad-2');
    soundboard.snareElement = document.querySelector('.pad-3');
    soundboard.wobbleElement = document.querySelector('.pad-4');
    soundboard.vocalElement = document.querySelector('.pad-5');
    soundboard.scratchElement = document.querySelector('.pad-6');
    soundboard.grenadeElement = document.querySelector('.pad-7');
    soundboard.violonElement = document.querySelector('.pad-8');
    soundboard.triangleElement = document.querySelector('.pad-9');
    soundboard.saxophoneElement = document.querySelector('.pad-10');
    soundboard.tambourElement = document.querySelector('.pad-11');
    soundboard.clapElement = document.querySelector('.pad-12');
    soundboard.fluteElement = document.querySelector('.pad-13');
    soundboard.aigleElement = document.querySelector('.pad-14');
    soundboard.rotElement = document.querySelector('.pad-15');
    soundboard.sifflementElement = document.querySelector('.pad-16');
    soundboard.cornemuseElement = document.querySelector('.pad-17');
    soundboard.rythmeElement = document.querySelector('.pad-18');
    soundboard.castagnetteElement = document.querySelector('.pad-19');
    soundboard.ukuleleElement = document.querySelector('.pad-20');
    soundboard.alarmeElement = document.querySelector('.pad-21');
    soundboard.applaudissementElement = document.querySelector('.pad-22');
    soundboard.boucheElement = document.querySelector('.pad-23');
    soundboard.hoquetElement = document.querySelector('.pad-24');
    soundboard.annonceElement = document.querySelector('.pad-25');
    soundboard.xylophoneElement = document.querySelector('.pad-26');
    soundboard.tarzanElement = document.querySelector('.pad-27');
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.kickAudio = new Audio('assets/audio/kick.opus');
    soundboard.hihatAudio = new Audio('assets/audio/hihat.opus');
    soundboard.snareAudio = new Audio('assets/audio/snare.opus');
    soundboard.wobbleAudio = new Audio('assets/audio/wobble.opus');
    soundboard.vocalAudio = new Audio('assets/audio/voice.opus');
    soundboard.scratchAudio = new Audio('assets/audio/scratch.opus');
    soundboard.grenadeAudio = new Audio('assets/audio/grenade.opus');
    soundboard.violonAudio = new Audio('assets/audio/violon.opus');
    soundboard.triangleAudio = new Audio('assets/audio/triangle.opus');
    soundboard.saxophoneAudio = new Audio('assets/audio/saxophone.opus');
    soundboard.tambourAudio = new Audio('assets/audio/tambour.opus');
    soundboard.clapAudio = new Audio('assets/audio/clap.opus');
    soundboard.fluteAudio = new Audio('assets/audio/flute.opus');
    soundboard.aigleAudio = new Audio('assets/audio/aigle.opus');
    soundboard.rotAudio = new Audio('assets/audio/rot.opus');
    soundboard.sifflementAudio = new Audio('assets/audio/sifflement.opus');
    soundboard.cornemuseAudio = new Audio('assets/audio/cornemuse.opus');
    soundboard.rythmeAudio = new Audio('assets/audio/rythme.opus');
    soundboard.castagnetteAudio = new Audio('assets/audio/castagnette.opus');
    soundboard.ukuleleAudio = new Audio('assets/audio/ukulele.opus');
    soundboard.alarmeAudio = new Audio('assets/audio/alarme.opus');
    soundboard.applaudissementAudio = new Audio('assets/audio/applaudissement.opus');
    soundboard.boucheAudio = new Audio('assets/audio/bouche.opus');
    soundboard.hoquetAudio = new Audio('assets/audio/hoquet.opus');
    soundboard.annonceAudio = new Audio('assets/audio/annonce.opus');
    soundboard.xylophoneAudio = new Audio('assets/audio/xylophone.opus');
    soundboard.tarzanAudio = new Audio('assets/audio/tarzan.opus');
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "kick" est pressé
   */
  handleKickClick: function() {
    soundboard.kickAudio.currentTime = 0;
    soundboard.kickAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "hi-hat" est appuyé
   */
  handleHihatClick: function() {
    soundboard.hihatAudio.currentTime = 0;
    soundboard.hihatAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "snare" est appuyé
   */
  handleSnareClick: function() {
    soundboard.snareAudio.currentTime = 0;
    soundboard.snareAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "wobble" est appuyé
   */
  handleWobbleClick: function() {
    soundboard.wobbleAudio.currentTime = 0;
    soundboard.wobbleAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "vocal" est appuyé
   */
  handleFxClick: function() {
    soundboard.vocalAudio.currentTime = 0;
    soundboard.vocalAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "scratch" est appuyé
   */
  handleScratchClick: function() {
    soundboard.scratchAudio.currentTime = 0;
    soundboard.scratchAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "grenade" est appuyé
  */
  handleGrenadeClick: function() {
    soundboard.grenadeAudio.currentTime = 0;
    soundboard.grenadeAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "violon" est appuyé
  */
  handleViolonClick: function() {
    soundboard.violonAudio.currentTime = 0;
    soundboard.violonAudio.play();
  },
  
  /**
  * Méthode/Handler exécuté lorsque le pad "triangle" est appuyé
  */
  handleTriangleClick: function() {
    soundboard.triangleAudio.currentTime = 0;
    soundboard.triangleAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "saxophone" est appuyé
  */
  handleSaxophoneClick: function() {
    soundboard.saxophoneAudio.currentTime = 0;
    soundboard.saxophoneAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "tambour" est appuyé
  */
  handleTambourClick: function() {
    soundboard.tambourAudio.currentTime = 0;
    soundboard.tambourAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "clap" est appuyé
  */
  handleClapClick: function() {
    soundboard.clapAudio.currentTime = 0;
    soundboard.clapAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "flute" est appuyé
  */
  handleFluteClick: function() {
    soundboard.fluteAudio.currentTime = 0;
    soundboard.fluteAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "aigle" est appuyé
  */
  handleAigleClick: function() {
    soundboard.aigleAudio.currentTime = 0;
    soundboard.aigleAudio.play();
  },

   /**
  * Méthode/Handler exécuté lorsque le pad "rot" est appuyé
  */
  handleRotClick: function() {
    soundboard.rotAudio.currentTime = 0;
    soundboard.rotAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "sifflement" est appuyé
  */
  handleSifflementClick: function() {
    soundboard.sifflementAudio.currentTime = 0;
    soundboard.sifflementAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "cornemuse" est appuyé
  */
  handleCornemuseClick: function() {
    soundboard.cornemuseAudio.currentTime = 0;
    soundboard.cornemuseAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "rythme" est appuyé
  */
  handleRythmeClick: function() {
    soundboard.rythmeAudio.currentTime = 0;
    soundboard.rythmeAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "castagnette" est appuyé
  */
  handleCastagnetteClick: function() {
    soundboard.castagnetteAudio.currentTime = 0;
    soundboard.castagnetteAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "ukulele" est appuyé
  */
  handleUkuleleClick: function() {
    soundboard.ukuleleAudio.currentTime = 0;
    soundboard.ukuleleAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "alarme" est appuyé
  */
  handleAlarmeClick: function() {
    soundboard.alarmeAudio.currentTime = 0;
    soundboard.alarmeAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "applaudissement" est appuyé
  */
  handleApplaudissementClick: function() {
    soundboard.applaudissementAudio.currentTime = 0;
    soundboard.applaudissementAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "bouche" est appuyé
  */
  handleBoucheClick: function() {
    soundboard.boucheAudio.currentTime = 0;
    soundboard.boucheAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "hoquet" est appuyé
  */
  handleHoquetClick: function() {
    soundboard.hoquetAudio.currentTime = 0;
    soundboard.hoquetAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "annonce" est appuyé
  */
  handleAnnonceClick: function() {
    soundboard.annonceAudio.currentTime = 0;
    soundboard.annonceAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "xylophone" est appuyé
  */
  handleXylophoneClick: function() {
    soundboard.xylophoneAudio.currentTime = 0;
    soundboard.xylophoneAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque le pad "tarzan" est appuyé
  */
  handleTarzanClick: function() {
    soundboard.tarzanAudio.currentTime = 0;
    soundboard.tarzanAudio.play();
  },

  /**
  * Méthode permettant d'ajouter la class active à chaque pad lorsque la touche est enfoncé
  */
  handleKeyboard: function(event) {
    if(event.key === 'a') {soundboard.kickElement.click();soundboard.kickElement.classList.add('active');}
    if(event.key === 'z') {soundboard.hihatElement.click();soundboard.hihatElement.classList.add('active');}
    if(event.key === 'e') {soundboard.snareElement.click();soundboard.snareElement.classList.add('active');}
    if(event.key === 'r') {soundboard.wobbleElement.click();soundboard.wobbleElement.classList.add('active');}
    if(event.key === 't') {soundboard.vocalElement.click();soundboard.vocalElement.classList.add('active');}
    if(event.key === 'y') {soundboard.scratchElement.click();soundboard.scratchElement.classList.add('active');}
    if(event.key === 'u') {soundboard.grenadeElement.click();soundboard.grenadeElement.classList.add('active');}
    if(event.key === 'i') {soundboard.violonElement.click();soundboard.violonElement.classList.add('active');}
    if(event.key === 'o') {soundboard.triangleElement.click();soundboard.triangleElement.classList.add('active');}
    if(event.key === 'p') {soundboard.saxophoneElement.click();soundboard.saxophoneElement.classList.add('active');}
    if(event.key === 'q') {soundboard.tambourElement.click();soundboard.tambourElement.classList.add('active');}
    if(event.key === 's') {soundboard.clapElement.click();soundboard.clapElement.classList.add('active');}
    if(event.key === 'd') {soundboard.fluteElement.click();soundboard.fluteElement.classList.add('active');}
    if(event.key === 'f') {soundboard.aigleElement.click();soundboard.aigleElement.classList.add('active');}
    if(event.key === 'g') {soundboard.rotElement.click();soundboard.rotElement.classList.add('active');}
    if(event.key === 'h') {soundboard.sifflementElement.click();soundboard.sifflementElement.classList.add('active');}
    if(event.key === 'j') {soundboard.cornemuseElement.click();soundboard.cornemuseElement.classList.add('active');}
    if(event.key === 'k') {soundboard.rythmeElement.click();soundboard.rythmeElement.classList.add('active');}
    if(event.key === 'l') {soundboard.castagnetteElement.click();soundboard.castagnetteElement.classList.add('active');}
    if(event.key === 'm') {soundboard.ukuleleElement.click();soundboard.ukuleleElement.classList.add('active');}
    if(event.key === 'w') {soundboard.alarmeElement.click();soundboard.alarmeElement.classList.add('active');}
    if(event.key === 'x') {soundboard.applaudissementElement.click();soundboard.applaudissementElement.classList.add('active');}
    if(event.key === 'c') {soundboard.boucheElement.click();soundboard.boucheElement.classList.add('active');}
    if(event.key === 'v') {soundboard.hoquetElement.click();soundboard.hoquetElement.classList.add('active');}
    if(event.key === 'b') {soundboard.annonceElement.click();soundboard.annonceElement.classList.add('active');}
    if(event.key === 'n') {soundboard.xylophoneElement.click();soundboard.xylophoneElement.classList.add('active');}
    if(event.key === ' ') {soundboard.tarzanElement.click();soundboard.tarzanElement.classList.add('active');}
  },

   /**
  * Méthode permettant d'ajouter la class active à chaque pad lorsque le pavé tactile est enfoncé
  */
  handleTouchStart: function(event) {
    if(event.key === soundboard.kickElement) {soundboard.handleKickClick();soundboard.kickElement.classList.add('active');}
    if(event.key === soundboard.hihatElement) {soundboard.handleHihatClick();soundboard.hihatElement.classList.add('active');}
    if(event.key === soundboard.snareElement) {soundboard.handleSnareClick();soundboard.snareElement.classList.add('active');}
    if(event.key === soundboard.wobbleElement) {soundboard.handleWobbleClick();soundboard.wobbleElement.classList.add('active');}
    if(event.key === soundboard.vocalElement) {soundboard.handleFxClick();soundboard.vocalElement.classList.add('active');}
    if(event.key === soundboard.scratchElement) {soundboard.handleScratchClick();soundboard.scratchElement.classList.add('active');}
    if(event.key === soundboard.grenadeElement) {soundboard.handleGrenadeClick();soundboard.grenadeElement.classList.add('active');}
    if(event.key === soundboard.violonElement) {soundboard.handleViolonClick();soundboard.violonElement.classList.add('active');}
    if(event.key === soundboard.triangleElement) {soundboard.handleTriangleClick();soundboard.triangleElement.classList.add('active');}
    if(event.key === soundboard.saxophoneElement) {soundboard.handleSaxophoneClick();soundboard.saxophoneElement.classList.add('active');}
    if(event.key === soundboard.tambourElement) {soundboard.handleTambourClick();soundboard.tambourElement.classList.add('active');}
    if(event.key === soundboard.clapElement) {soundboard.handleClapClick();soundboard.clapElement.classList.add('active');}
    if(event.key === soundboard.fluteElement) {soundboard.handleFluteClick();soundboard.fluteElement.classList.add('active');}
    if(event.key === soundboard.aigleElement) {soundboard.handleAigleClick();soundboard.aigleElement.classList.add('active');}
    if(event.key === soundboard.rotElement) {soundboard.handleRotClick();soundboard.rotElement.classList.add('active');}
    if(event.key === soundboard.sifflementElement) {soundboard.handleSifflementClick();soundboard.sifflementElement.classList.add('active');}
    if(event.key === soundboard.cornemuseElement) {soundboard.handleCornemuseClick();soundboard.cornemuseElement.classList.add('active');}
    if(event.key === soundboard.rythmeElement) {soundboard.handleRythmeClick();soundboard.rythmeElement.classList.add('active');}
    if(event.key === soundboard.castagnetteElement) {soundboard.handleCastagnetteClick();soundboard.castagnetteElement.classList.add('active');}
    if(event.key === soundboard.ukuleleElement) {soundboard.handleUkuleleClick();soundboard.ukuleleElement.classList.add('active');}
    if(event.key === soundboard.alarmeElement) {soundboard.handleAlarmeClick();soundboard.alarmeElement.classList.add('active');}
    if(event.key === soundboard.applaudissementElement) {soundboard.handleApplaudissementClick();soundboard.applaudissementElement.classList.add('active');}
    if(event.key === soundboard.boucheElement) {soundboard.handleBoucheClick();soundboard.boucheElement.classList.add('active');}
    if(event.key === soundboard.hoquetElement) {soundboard.handleHoquetClick();soundboard.hoquetElement.classList.add('active');}
    if(event.key === soundboard.annonceElement) {soundboard.handleAnnonceClick();soundboard.annonceElement.classList.add('active');}
    if(event.key === soundboard.xylophoneElement) {soundboard.handleXylophoneClick();soundboard.xylophoneElement.classList.add('active');}
    if(event.key === soundboard.tarzanElement) {soundboard.handleTarzanClick();soundboard.tarzanElement.classList.add('active');}
  },

  /**
  * Méthode permettant de suprimmer la class active de chaque pad lorsque le touche est relaché
  */
  handleUpKeyboard: function(event) {
    if(event.key === 'a') {soundboard.kickElement.classList.remove('active');}
    if(event.key === 'z') {soundboard.hihatElement.classList.remove('active');}
    if(event.key === 'e') {soundboard.snareElement.classList.remove('active');}
    if(event.key === 'r') {soundboard.wobbleElement.classList.remove('active');}
    if(event.key === 't') {soundboard.vocalElement.classList.remove('active');}
    if(event.key === 'y') {soundboard.scratchElement.classList.remove('active');}
    if(event.key === 'u') {soundboard.grenadeElement.classList.remove('active');}
    if(event.key === 'i') {soundboard.violonElement.classList.remove('active');}
    if(event.key === 'o') {soundboard.triangleElement.classList.remove('active');}
    if(event.key === 'p') {soundboard.saxophoneElement.classList.remove('active');}
    if(event.key === 'q') {soundboard.tambourElement.classList.remove('active');}
    if(event.key === 's') {soundboard.clapElement.classList.remove('active');}
    if(event.key === 'd') {soundboard.fluteElement.classList.remove('active');}
    if(event.key === 'f') {soundboard.aigleElement.classList.remove('active');}
    if(event.key === 'g') {soundboard.rotElement.classList.remove('active');}
    if(event.key === 'h') {soundboard.sifflementElement.classList.remove('active');}
    if(event.key === 'j') {soundboard.cornemuseElement.classList.remove('active');}
    if(event.key === 'k') {soundboard.rythmeElement.classList.remove('active');}
    if(event.key === 'l') {soundboard.castagnetteElement.classList.remove('active');}
    if(event.key === 'm') {soundboard.ukuleleElement.classList.remove('active');}
    if(event.key === 'w') {soundboard.alarmeElement.classList.remove('active');}
    if(event.key === 'x') {soundboard.applaudissementElement.classList.remove('active');}
    if(event.key === 'c') {soundboard.boucheElement.classList.remove('active');}
    if(event.key === 'v') {soundboard.hoquetElement.classList.remove('active');}
    if(event.key === 'b') {soundboard.annonceElement.classList.remove('active');}
    if(event.key === 'n') {soundboard.xylophoneElement.classList.remove('active');}
    if(event.key === ' ') {soundboard.tarzanElement.classList.remove('active');}
  },

  /**
  * Méthode permettant de suprimmer la class active de chaque pad lorsque le pavé tactile est relaché
  */
  handleTouchEnd: function(event) {
    if(event.key === soundboard.kickElement) {soundboard.kickElement.classList.remove('active');}
    if(event.key === soundboard.hihatElement) {soundboard.hihatElement.classList.remove('active');}
    if(event.key === soundboard.snareElement) {soundboard.snareElement.classList.remove('active');}
    if(event.key === soundboard.wobbleElement) {soundboard.wobbleElement.classList.remove('active');}
    if(event.key === soundboard.vocalElement) {soundboard.vocalElement.classList.remove('active');}
    if(event.key === soundboard.scratchElement) {soundboard.scratchElement.classList.remove('active');}
    if(event.key === soundboard.grenadeElement) {soundboard.grenadeElement.classList.remove('active');}
    if(event.key === soundboard.violonElement) {soundboard.violonElement.classList.remove('active');}
    if(event.key === soundboard.triangleElement) {soundboard.triangleElement.classList.remove('active');}
    if(event.key === soundboard.saxophoneElement) {soundboard.saxophoneElement.classList.remove('active');}
    if(event.key === soundboard.tambourElement) {soundboard.tambourElement.classList.remove('active');}
    if(event.key === soundboard.clapElement) {soundboard.clapElement.classList.remove('active');}
    if(event.key === soundboard.fluteElement) {soundboard.fluteElement.classList.remove('active');}
    if(event.key === soundboard.aigleElement) {soundboard.aigleElement.classList.remove('active');}
    if(event.key === soundboard.rotElement) {soundboard.rotElement.classList.remove('active');}
    if(event.key === soundboard.sifflementElement) {soundboard.sifflementElement.classList.remove('active');}
    if(event.key === soundboard.cornemuseElement) {soundboard.cornemuseElement.classList.remove('active');}
    if(event.key === soundboard.rythmeElement) {soundboard.rythmeElement.classList.remove('active');}
    if(event.key === soundboard.castagnetteElement) {soundboard.castagnetteElement.classList.remove('active');}
    if(event.key === soundboard.ukuleleElement) {soundboard.ukuleleElement.classList.remove('active');}
    if(event.key === soundboard.alarmeElement) {soundboard.alarmeElement.classList.remove('active');}
    if(event.key === soundboard.applaudissementElement) {soundboard.applaudissementElement.classList.remove('active');}
    if(event.key === soundboard.boucheElement) {soundboard.boucheElement.classList.remove('active');}
    if(event.key === soundboard.hoquetElement) {soundboard.hoquetElement.classList.remove('active');}
    if(event.key === soundboard.annonceElement) {soundboard.annonceElement.classList.remove('active');}
    if(event.key === soundboard.xylophoneElement) {soundboard.xylophoneElement.classList.remove('active');}
    if(event.key === soundboard.tarzanElement) {soundboard.tarzanElement.classList.remove('active');}
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    soundboard.kickElement.addEventListener('click', soundboard.handleKickClick);
    soundboard.hihatElement.addEventListener('click', soundboard.handleHihatClick);
    soundboard.snareElement.addEventListener('click', soundboard.handleSnareClick);
    soundboard.wobbleElement.addEventListener('click', soundboard.handleWobbleClick);
    soundboard.vocalElement.addEventListener('click', soundboard.handleFxClick);
    soundboard.scratchElement.addEventListener('click', soundboard.handleScratchClick);
    soundboard.grenadeElement.addEventListener('click', soundboard.handleGrenadeClick);
    soundboard.violonElement.addEventListener('click', soundboard.handleViolonClick);
    soundboard.triangleElement.addEventListener('click', soundboard.handleTriangleClick);
    soundboard.saxophoneElement.addEventListener('click', soundboard.handleSaxophoneClick);
    soundboard.tambourElement.addEventListener('click', soundboard.handleTambourClick);
    soundboard.clapElement.addEventListener('click', soundboard.handleClapClick);
    soundboard.fluteElement.addEventListener('click', soundboard.handleFluteClick);
    soundboard.aigleElement.addEventListener('click', soundboard.handleAigleClick);
    soundboard.rotElement.addEventListener('click', soundboard.handleRotClick);
    soundboard.sifflementElement.addEventListener('click', soundboard.handleSifflementClick);
    soundboard.cornemuseElement.addEventListener('click', soundboard.handleCornemuseClick);
    soundboard.rythmeElement.addEventListener('click', soundboard.handleRythmeClick);
    soundboard.castagnetteElement.addEventListener('click', soundboard.handleCastagnetteClick);
    soundboard.ukuleleElement.addEventListener('click', soundboard.handleUkuleleClick);
    soundboard.alarmeElement.addEventListener('click', soundboard.handleAlarmeClick);
    soundboard.applaudissementElement.addEventListener('click', soundboard.handleApplaudissementClick);
    soundboard.boucheElement.addEventListener('click', soundboard.handleBoucheClick);
    soundboard.hoquetElement.addEventListener('click', soundboard.handleHoquetClick);
    soundboard.annonceElement.addEventListener('click', soundboard.handleAnnonceClick);
    soundboard.xylophoneElement.addEventListener('click', soundboard.handleXylophoneClick);
    soundboard.tarzanElement.addEventListener('click', soundboard.handleTarzanClick);
    document.addEventListener('keydown', soundboard.handleKeyboard);
    document.addEventListener('keyup', soundboard.handleUpKeyboard);
    document.addEventListener('touchstart', soundboard.handleTouchStart);
    document.addEventListener('touchend', soundboard.handleTouchEnd);
  },
}