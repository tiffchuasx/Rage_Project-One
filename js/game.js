var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.punchSpeed = 8;                // The speed of the punch
    //settings.walls = true;                 // The ball can not go outside the screen
    //settings.automatic = false;            // The ball will move by itself
    //settings.godmode = false;              // Debug mode

    // World settings
    var assets = [];                      // All game objects
    //var player = new Punch(settings);      // The player
    //assets[0] = player;
    var frame = 0;                        // Frames since the start of the game

    // Interactions
    var interactions = {};
    interactions.click = false;           // mouse pressed */

    // Setup event listeners
    function setupEvents() {

      document.addEventListener('click', function(event){
        targetName = event.target;
        console.log(targetName);

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
            })();

            init();
}

var g = new Game();
