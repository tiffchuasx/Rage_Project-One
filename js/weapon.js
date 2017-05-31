var Weapon = function(settings) {

  var hit = 0;

    $('.arena').on('click', function(){
        hit++;
        if(hit > 5){
          $('#damage').show();
        }
      });


    this.render = function(interactions,gameWeapon){
      // movement(interactions);
      //create(gameWeapon);
    }


    //init();
};
