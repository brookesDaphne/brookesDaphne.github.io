$(document).ready(function() {

    //to change the nav depending on what page is being viewed
    //get all the nav li, add click event
    $(".nav").find("li").on("click", function() {

      //remove all active class
      $(".nav").find("li").removeClass("active");

      //add active class to clicked li in nav
      $(this).addClass("active");
      //put an id on it
      var page = $(this).attr("id");
      getPartial(page);
    })

    //get partial
    function getPartial(partial) {

      $("#pageContent").hide();

      //conditional logic
      if (partial == "homePage") { //get home.html
        $.get("partials/home.html", function(data) {
            $("#pageContent").html(data);
            $('.carousel').carousel();

          }) //end get
          //if not home page, models page
      } else if (partial == "models") { //get models.html

        //js was pasted here from dogs.json from a previous assignment
        //call or get json to html page using js

        $.getJSON("jsonDatabase/final.json", function(data) {

            //data to console
            console.dir(data);
            //where the data goes
            var html = "";
            //each chunk of data has a type, colour, style, and image
            $.each(data, function(index, item) {
                html += '<div class="col-md-4 cap">' +
                  '<div class="type">' + item.type + '</div>' +
                  '<div class="colour">' + item.colour + '</div>' +
                  '<div class="style">' + item.style + '</div>' +
                  '<img class="capImage" src="' + item.image + '"/>' +
                  //'<div class="commentsContainer">';

                  '<div class="panel panel default">' +
                  //reviews heading
                  '<div class="panel-heading" id="reviews-text">Reviews . . .</div>';
                //put json in console
                console.dir(item.comments);

                //followed by a username, comment and rating section
                $.each(item.comments, function(ind, i) {
                    html += '<div class="buyerName">' + i.username + '</div>' +
                      '<div class="buyerComment">' + i.comment + '</div>' +
                      '<div class="buyerStars">';

                    //function to show the right amount of stars
                    var numStars = Number(i.stars);

                    //if less than five full is used
                    for (var i = 1; i <= 5; i++) {
                      //conditional logic
                      if (i <= numStars) {
                        html += '<img class="fullheart" src="images/fullheart.gif"/>';

                        //if not, an empty image is used
                      } else {
                        html += '<img src="images/emptyheart.gif"/>';

                      }
                    }

                    html += '</div>'; //end stars
                  }) //each comment

                html += '</div>' + //end panel
                  '</div>'; //col-md-4


              }) //each cap

            //html content
            $("#pageContent").html(html);

          }) //end get .json
          //end of js pasted

        //link order form hmtl page
      } else if (partial == "order") { //get order2.html
        $.get("partials/order2.html", function(data) {
            $("#pageContent").html(data);

            //activate the datepicker
            $('#startRentDate, #endRentDate').datepicker({});

            //click event
            //When you click the submitButton it validates
            $("#submitButton").on("click", function() {

                //make empty areas red bc invalid
                $("input, select").filter(function() {
                  return !this.value;
                }).closest("div").addClass("has-error");

                //remove the red for areas that have been filled in
                $("input, select").filter(function() {
                  return this.value;
                }).closest("div").removeClass("has-error");

                //make a variable errors to target areas with errors
                var errors = $(".has-error");

                //if there are no errors, confirm the request
                if (errors.length < 1) {
                  //  alert("no");

                  sendConfirmation();
                }

              }) //click

            //start takeAnOrder.js copy

            //focus
            $("#mySingleLineText").on("focus", function() {
                $("#log").append("<br/>Input Focus")
                $(this).css("background-color", "#EAF9E0")
              })
              //blur
              .on("blur", function() {
                $("#log").append("<br/>Input Change")
                $(this).css("background-color", "#FFF")
              });

            //focus
            $("#mySingleLineText2").on("focus", function() {
              $("#log").append("<br/>Input Focus")
              $(this).css("background-color", "#EAF9E0")
            })

            //blur
            .on("blur", function() {
              $("#log").append("<br/>Input Change")
              $(this).css("background-color", "#FFF")
            });

            //mouseenter
            $("#myButton").on("mouseenter", function() {
              $("#log").append("<br/>Button Mouse Enter")
              $(this).text("Buy Now")
            })

            //mouse leave
            .on("mouseleave", function() {
              $("#log").append("<br/>Button Mouse Leave")
              $(this).text("Purchase")
            });

            //change
            $("#mySelect").on("change", function() {
              $("#log").append("<br/>Change Selection")
              var val = $(this).val();
              $("#mySelectMessage").html(val + " selected");
            });

            //click
            $("#myButton").on("click", function() {

              $("#log").append("<br>User clicked the button!");
              var userOrder = {};
              userOrder.myInput = $("#mySingleLineText").val();
              userOrder.myInput2 = $("#mySingleLineText2").val();
              userOrder.myTextArea = $("#myTextArea").val();
              userOrder.mySelect = $("#mySelect").val();
              userOrder.myRadio = $("[name='color']:checked").val();
              userOrder.myCheckValues = [];

              //each is a jquery loop for objects/arrays
              $("[name='extra']:checked").each(function() {

                userOrder.myCheckValues.push($(this).val());
              });
              //json info text
              $("#log").append("<br>User clicked the button: " + userOrder.myInput + " " + userOrder.myInput2);
              $("#log").append("<br>Value of textarea is: " + userOrder.myTextArea);
              $("#log").append("<br>Value of select is: " + userOrder.mySelect);
              $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
              $("#log").append("<br> Value of check is: " + userOrder.myCheckValues.join());
              $("#log").append("<br> Value of userOrder is " + " " + JSON.stringify(userOrder));

            })
          }) //end

      }

      //make the models page fade in
      $("#pageContent").fadeIn();

    }

    //tell the user they made a purchase
    function sendConfirmation() {

      //make var to record data for database
      var order = {};

      var formData = $("input, select");
      //for each jquery object
      formData.each(function() {
          //get the id of the element
          var id = $(this).attr("id");
          //set the field and the value
          order[id] = $(this).val();


        }) //formData

      //alerts when they click the purchase button repeating their order

      alert("Sending to database and checking the validity of your credit" + JSON.stringify(order));
      $("#successMsg").html("<br/>Order Received!<br/>" +
        "Your hat " + "will be delivered on " +
        order.startRentDate);

    } //sendConfirmation

    //begin the program, get the homepage carousel
    getPartial("homePage");

  }) //end brackets for doc ready
