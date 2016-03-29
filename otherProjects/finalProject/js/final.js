$(document).ready(function() {

      //to change the nav depending on what page is being viewed

      //get all the nav li, add click event
      $(".nav").find("li").on("click", function() {

        //remove all active class
        $(".nav").find("li").removeClass("active");

        //add active class to clicked li in nav
        $(this).addClass("active");



        var page = $(this).attr("id");
        getPartial(page);
      })

      function getPartial(partial) {

        if (partial == "homePage") { //ajax get home.html
          $.get("partials/home.html", function(data) {
            $("#pageContent").html(data);

          })
        } else if (partial == "models") { //ajax get models.html
          alert("2");


        } else if (partial == "order") { //ajax get order.html
          alert("3");

        }



        //begin the program, get the homepage
        getPartial("homePage");


      }) //end brackets for ready
