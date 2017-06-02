var Game = function() {

    // Game settings
    var settings = {};                     // Contains all game settings
    settings.handClick = 0;
    settings.knifeClick = 0;
    settings.eggClick = 0;

    // World settings
    var assets = [];                      // All game objects
    var player = new Weapon(settings);      // The player
    assets[0] = player;
    var frame = 0;                        // Frames since the start of the game
    var secondsPassed = 0;
    var timerSecond = 30;
    var gameEnd = false;


    // Interactions
    var interactions = {};
    interactions.click = false;           // mouse pressed */
    var gameWeapon;                                // a is
    var clicked = false;

    // Setup event listeners
    function setupEvents() {
      document.body.style.cursor = 'auto'
      document.addEventListener('click', function(event){
        console.log('event listener up')

        var targetName = event.target;

        switch(targetName.id) {
          case "weapon1":
            document.getElementsByClassName('arena')[0].setAttribute("style", "cursor:url('hand.png'), none")
            break;
          case "weapon2":
            document.getElementsByClassName('arena')[0].setAttribute("style", "cursor:url('knife.png'), none")
            break;
          case "weapon3":
          document.getElementsByClassName('arena')[0].setAttribute("style", "cursor:url('egg.png'), none")
            break;
        }

      });

    }




    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render = function(){
      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }
      secondsPassed = frame / 60;
      frame++;
    }

    function checkGameEnd(){
      var timer = document.getElementById('timer')
      if(timer.innerHTML=='00:00'){
        gameEnd=true
      }
    }

    var self = this;
    window.requestAnimFrame = (function(){ //gets animation frame from the browser
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();

              (function animloop(){
                requestAnimFrame(animloop);
                self.render();
                checkGameEnd();
              })();


            init();
  }

document.getElementById('start-button').addEventListener('click', function(){
  document.getElementById('wrapper').setAttribute('style', 'display:none;')
  var g = new Game();
})
