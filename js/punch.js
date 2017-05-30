var Punch = function(settings) {

    // Settings
    var punch = null;

    // Create punching motion with every click
    function punching(interactions){


    }

    // Move the ball around manually



    function create() {
        // Create the object asset
    }

    function init(){
      // create();
      ballElement = document.getElementById('ball');
      ballElement.style.top = '400px';
      ballElement.style.left = '400px';
      ballElement.style.height = '100px';
      ballElement.style.width = '100px';

    }

    this.render = function(interactions){
      move(interactions);
    }

    init();
}
