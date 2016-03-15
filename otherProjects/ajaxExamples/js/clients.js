$(document).ready(function() {

    $("#getClients").on("click", function() {
      //when u click on the button this function is called

      var url = "http://brookesDaphne.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
      $.getJSON(url, function(data) {

        //table format
        //<table>
        //<tr> <th></th> <th></th> </tr>
        //<tr> <td></td> <td></td> </tr>
        //<table>

        var html = "<table class='table table-hover table-striped'>"+
          "<tr> <th>Name</th> <th>Email</th> <th>Company</th> </tr>";

        $.each(data, function(index, item) {

          //$("#data").append(item.name);

html+= "<tr>"+
"<td>" + item.name + "</td>" +
"<td>" + item.email + "</td>" +
"<td>"+item.company + "</td>" +
"</tr>";

        })

        html += "</table>";

//puts all html into the div
        $("#data").append(html);

        //alert(data;)
        //dir makes it readable for humans in the console
        //  console.dir(data);

        //end json
      })

      //end click
    })

  }) //document ready
