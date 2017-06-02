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
    var lastResort = document.getElementById('lastresort');

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

        if(!clicked) {
          startTimer =  setInterval(countDown,1000) //countdown per every second.
        }

        clicked = true;

        lastResort.play();

      });

    }

    function countDown(){
      var timer = document.getElementById('timer')

          if (timerSecond != 0) {
            timerSecond -= 1

            if (timerSecond < 10) {
              timer.innerHTML = "00:0" + timerSecond
            }
            else if (timerSecond < 30) {
              timer.innerHTML = "00:" + timerSecond
            }
            else {
              timer.innerHTML = "00:00"
            }
          }
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

            if(gameEnd == false){
              (function animloop(){
                requestAnimFrame(animloop);
                self.render();
                checkGameEnd();
              })();
            }

            init();
}

var g = new Game();
