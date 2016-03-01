$(document).ready(function() {

  var circleOrEx = "o"; // what does this variable represent
  //the first character is the letter 'o'
  var isGameInProgress = true; // what does this variable represent
  //everything is on track
  var winningCombos = { // what does this variable represent; explain what the keys and values represent
    //what placements of the x's and o's constitute a win
    //key represents the area click in
    //variables represents the other areas clicked with the same character that would make a win
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // Explain what this event does
  //this event finds the area that was clicked
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// Explain these conditions
      //if the game is being played and the area is empty it will be filled with an x or o
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //Explain
      //checks if that click won a game

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // Explain what this event does
  //once a game is over a new game with a blank slate begins
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable
    //the game board layout
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
      //filter empties the first square and does that action until square nine
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what is this if statement doing?
      //if the first square is empty, it has room for one click
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //Explain this each function
    //all the squares are empty, new game begins
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this function, describe the parameters; what are the possible values of the paramaters
  //this function checks if when a square is clicked, the game is won. it checks by the winningCombos to see if a player won.
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //Explain this nested for loop
      //if i is less than the length of mulitArr it increments and they won
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
          //if the clicked area doesn't constitute a win, they lost
          playerWon = false;
        }
      }

      if (playerWon) { //Explain the condition and every line in the block
        //if they won = condition

        for (var j = 0; j < mulitArr[i].length; j++) {
          //when j is less than the length of the mulitArr
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Explain this condition
          //the character is turned green in the clicked squares that constitute a win
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        //find the winning squares, make their characters green
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        //alert window says the winner is x or o
        isGameInProgress = false;
        //game ends
        return false; //this exits the loop
      }
    }


  }
})
