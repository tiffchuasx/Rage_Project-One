// function handleFileSelect(evt) {
//     var files = evt.target.files; // FileList object
//
//     // Loop through the FileList and render image files as thumbnails.
//     for (var i = 0, f; f = files[i]; i++) {
//
//       // Only process image files.
//       if (!f.type.match('image.*')) {
//         continue;
//       }
//
//       var reader = new FileReader();
//
//       // Closure to capture the file information.
//       reader.onload = (function(theFile) {
//         return function(e) {
//           // Render thumbnail.
//           var span = document.createElement('span');
//           span.innerHTML = ['<img id="thumb" src="', e.target.result,
//                             '" title="', escape(theFile.name), '"/>'].join('');
//           document.getElementById('list').insertBefore(span, null);
//         };
//       })(f);
//
//       // Read in the image file as a data URL.
//       reader.readAsDataURL(f);
//     }
//   }
//
//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
$(function() {
  $("input").change(function(e) {

          var node = $('#thumb')[0]
          console.log(node.childNodes)
          while(node.childNodes[2]) {
            node.removeChild(node.childNodes[2]);
          }
          var file = e.target.files[0];

          var img = document.createElement("img");
          var reader = new FileReader();
          reader.onloadend = function() {
            //setting the image as the result of the file reading
               img.src = reader.result;
          }
          console.log('before read')
          reader.readAsDataURL(file);
          $("input").after(img);
          var uploaded = $('#thumb img')[0]
          uploaded.setAttribute("style", "width:450px; height:480px;")
          uploaded.setAttribute("id", "img")

  });
})
