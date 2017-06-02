var Weapon = function(settings) {
  var click = 0;

  // Sound effects
  var firstBlood = document.getElementById('firstblood');
  var killingSpree = document.getElementById('killingspree');
  var unstoppable = document.getElementById('unstoppable');
  var wickedSick = document.getElementById('wickedsick');

  // var handCursor = document.getElementsByClassName('arena')[0].style.cursor="url('hand.png'), none";
  // var knifeCursor = document.getElementsByClassName('arena')[0].style.cursor="url('knifeselect.png'), none";
  // var eggCursor = document.getElementsByClassName('arena')[0].style.cursor="url('egg.png'), none";

  $('.arena').on('click', function(event){

    var Cursor = document.getElementsByClassName('arena')[0].style.cursor;

      if(Cursor == 'url("hand.png"), none'){

        var clicks = settings.handClick++;

        if (clicks > 30){
          $('#hdamage3').show();
          unstoppable.play();
        } else if (clicks > 10){
          $('#hdamage2').show();
        } else if (clicks > 5){
          $('#hdamage1').show()
        }


      }

      if(Cursor == 'url("knife.png"), none'){

        var clicks = settings.knifeClick++;

        if (clicks > 20){
          $('#kdamage3').show();
          wickedSick.play();
        } else if (clicks > 10){
          $('#kdamage2').show();
        } else if (clicks > 5){
          $('#kdamage1').show()
          firstBlood.play();
        }
      }

      if(Cursor == 'url("egg.png"), none'){

        var clicks = settings.eggClick++;

        if (clicks > 50){
          $('#edamage3').show();
        } else if (clicks > 10){
          $('#edamage2').show();
        } else if (clicks > 5){
          $('#edamage1').show()
        }
      }

      if(clicks > 100){
        clicks = 100;
      }

      var width = (100 / 100) * clicks
      $('.progress-bar').css('width', width + '%');

  });


    this.render = function(gameWeapon){
    }

};
