$(document).ready(function() {

  /*
  click - done
  focus - done
  blur - done
  change - done
  mouseenter & mouseleave - done
  */

//focus
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br/>Input Focus")
      $(this).css("background-color", "#EAF9E0")
    })
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

    /*
        var myInput = $("#mySingleLineText").val();
        var myInput2 = $("#mySingleLineText2").val();
        var myTextArea = $("#myTextArea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='color']:checked").val();
    */

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

    $("#log").append("<br>User clicked the button: " + userOrder.myInput + " " + userOrder.myInput2);
    $("#log").append("<br>Value of textarea is: " + userOrder.myTextArea);
    $("#log").append("<br>Value of select is: " + userOrder.mySelect);
    $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
    $("#log").append("<br> Value of check is: " + userOrder.myCheckValues.join());
    $("#log").append("<br> Value of userOrder is " + " " + JSON.stringify(userOrder));

  });

});
