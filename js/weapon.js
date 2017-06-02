var Weapon = function(settings) {

  var click = 0;
  var timerSecond = 30;
  var clicked = false;

  // Sound effects
  var firstBlood = document.getElementById('firstblood');
  var killingSpree = document.getElementById('killingspree');
  var unstoppable = document.getElementById('unstoppable');
  var wickedSick = document.getElementById('wickedsick');
  var monsterKill = document.getElementById('monsterkill');
  var ultraKill = document.getElementById('ultrakill');
  var dominating = document.getElementById('dominating');
  var lastResort = document.getElementById('lastresort');

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

  $('.weapon').on('click',function(event){
    if(!clicked) {
      startTimer =  setInterval(countDown,1000) //countdown per every second.
    }

    clicked = true;

    lastResort.play();

  })

  $('.arena').on('click', function(event){

    var Cursor = document.getElementsByClassName('arena')[0].style.cursor;

      if(Cursor == 'url("hand.png"), none'){

        var clicks = settings.handClick++;

        if (clicks === 150){
          $('#hdamage4').show();
          dominating.play();
        } else if (clicks === 70){
          $('#hdamage3').show();
          unstoppable.play();
        } else if (clicks > 35){
          $('#hdamage2').show();
        } else if (clicks > 10){
          $('#hdamage1').show()
        }


      }

      if(Cursor == 'url("knife.png"), none'){

        var clicks = settings.knifeClick++;

        if (clicks === 150){
          $('#kdamage4').show();
          ultrakill.play();
        } else if (clicks > 70){
          $('#kdamage3').show();
        } else if (clicks > 25){
          $('#kdamage2').show();
        } else if (clicks === 10){
          $('#kdamage1').show()
          firstBlood.play();
        }
      }

      if(Cursor == 'url("egg.png"), none'){

        var clicks = settings.eggClick++;

        if (clicks === 150){
          console.log('egg click >10')
          $('#edamage4').show();
          monsterKill.play();
        } else if (clicks > 90){
          $('#edamage3').show();
        } else if (clicks === 50){
          $('#edamage2').show();
          wickedSick.play();
        } else if (clicks > 20){
          $('#edamage1').show()
        }
      }

      if(clicks > 150){
        clicks = 150;
      }

      var width = (100 / 150) * clicks
      $('.progress-bar').css('width', width + '%');

  });


    this.render = function(gameWeapon){
    }

};
