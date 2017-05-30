var Weapon = function(settings) {

    // Settings
    hand = document.createElement('div');

    function movement(interactions){

        hand.style.top = parseInt(hand.style.top)+"px";

    }

    // Create punching motion with every click
    function punching(gameWeapon){
      //create hand and move
      // console.log(gameWeapon)
      hand.src = '../hand.png'; //must put ../ if picture if outside
      hand.style.top = "800px";
      hand.style.left = "400px";
      hand.style.height = "100px";
      hand.style.position = "absolute"
      var weapon1 = document.getElementById('weapon1')
      weapon1.appendChild(hand);
      movement(hand);
    }

    function effect(){
      //create effect on picture
    }


    function create(gameWeapon) {
      punching(gameWeapon)
    }

    function init(){

    }

    this.render = function(interactions,gameWeapon){
      // movement(interactions);
      create(gameWeapon);
    }

    init();
}
