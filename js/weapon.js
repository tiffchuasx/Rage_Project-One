var Weapon = function(settings) {

  var handCursor = document.getElementsByClassName('arena')[0].style.cursor="url('hand.png'), none"
  var knifeCursor = document.getElementsByClassName('arena')[0].style.cursor="url('knife.png'), none"

      $('.arena').on('click', function(event){

          if(handCursor){
            var clicks = settings.handClick++;
            if (clicks > 15)
            $('#damage5').show();
          }

        });


    this.render = function(interactions,gameWeapon){
      // movement(interactions);
      //create(gameWeapon);
    }


    //init();
};
