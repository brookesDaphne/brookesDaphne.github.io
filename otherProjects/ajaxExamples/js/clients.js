$(document).ready(function() {

    $("#getClients").on("click", function() {
      //when u click on the button this function is called

      var url = "http://brookesDaphne.github.io/otherProjects/ajaxExamples/jsonDatabase.clients.js"
      $.getJSON(url, function(data) {


        $.each(data, function(index, item) {

          $("#data").append(item.name);
        })



        //alert(data;)
        //dir makes it readable for humans in the console
        //  console.dir(data);

        //end json
      })

      //end click
    })

  }) //document ready
