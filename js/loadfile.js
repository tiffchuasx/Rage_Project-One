
var timerSecond = 30

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


})
