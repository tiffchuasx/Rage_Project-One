
var timerSecond = 60

//Creating file reader and uploading image
$(function() {

  console.log($("input"));
  $("input").change(function(e) {


          var file = e.target.files[0];
          var reader = new FileReader();
          reader.onloadend = function() {
            //setting the image as the result of the file reading
            //img.src = reader.result;

            $('#punchball').css('background-image','url(' + reader.result + ')');

          }
          reader.readAsDataURL(file);
  });

//Creating timer once page loads
startTimer =  setInterval(countDown,1000) //countdown per every second.

function countDown(){
  var timer = document.getElementById('timer')

  if (timerSecond != 0) {
    timerSecond -= 1

    if (timerSecond < 10) {
      timer.innerHTML = "00:0" + timerSecond
    }
    else if (timerSecond < 60) {
      timer.innerHTML = "00:" + timerSecond
    }
    else {
      timer.innerHTML = "00:00"
  }
  }
  }

})
