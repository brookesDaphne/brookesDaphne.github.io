$(document).ready(function(){

  //to change the nav depending on what page is being viewed

//get all the nav li, add click event
  $(".nav").find("li").on("click",function(){

//remove all active class
$(".nav").find("li").removeClass("active");

//add active class to clicked li in nav
$(this).addClass("active");



var page = $(this).attr("id");
alert(page);

  }) //end brackets for click




}) //end brackets for ready
