$(document).ready(function() {

    $.getJSON("jsonDatabase/dogs.json", function(data) {

      console.dir(data);
      var html = "";
      $.each(data, function(index, item) {
          html += '<div class="col-md-4 cap">' +
            '<div class="type">' + item.type + '</div>' +
            '<div class="colour">' + item.colour + '</div>' +
            '<div class="style">' + item.style + '</div>' +
            '<img class="capImage" src="' + item.image + '"/>' +
            //'<div class="commentsContainer">';


            '<div class="panel panel default">'+

            '<div class="panel-heading">Reviews</div>';


          console.dir(item.comments);

          $.each(item.comments, function(ind, i) {
              html += '<div class="buyerName">' + i.username + '</div>' +
                '<div class="buyerComment">' + i.comment + '</div>' +
                '<div class="buyerStars">';

var numStars = Number(i.stars);

              for (var i = 1; i <= 5; i++) {
                if (i <= numStars) {
                  html += '<img class="fullheart" src="images/fullheart.gif"/>';

                } else {
                  html += '<img src="images/emptyheart.gif"/>';


                }


              }

              html += '</div>'; //end stars
            }) //each comment

          html += '</div>' + //end panel
            '</div>'; //col-md-4


        }) //each cap


      $("#capdata").append(html);

    })


  })
  /*

  //one per cap
  <div class="col-md-4 cap">
  <div class="type"></div>
  <div class="colour"></div>
  <div class="style"></div>
  <img src=""/>
  <div class="commentsContainer"></div>
  //one per comment
  <div class="buyerName"></div>
  <div class="buyerLocation"></div>
  <div class="buyerStars"></div>
  //5 stars, some full, some empty

  </div> //end stars
  </div> //end commentsContainer
  </div> //end cap


  <div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
  <p>...</p>
  </div>

  <!-- Table -->
  <table class="table">
  ...
  </table>
  </div>



  */
