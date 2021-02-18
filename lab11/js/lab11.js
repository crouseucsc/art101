/*
Authored: Christian Rouse
Professor: Wes Modes
TA: Brock Stuessi
Class: Art-101-01: Introduction to Computer Programming for the Arts
Due Date: 18 February 2021
*/
//Show Challenge Description
var challengeSection = $("#challenge");
challengeSection.append("<button id=challenge-button>Add Challenge Section</button>");
$("#challenge-button").click(function(){
  document.getElementById("challenge").innerHTML = "<p>Challenge Test</p>"
});
//Show Problem Description
var problemSection = $("#problem");
problemSection.append("<button id=problem-button>Add Problem Section</button>");
$("#problem-button").click(function(){
  document.getElementById("problem").innerHTML = "<p>Problem Test</p>"
});
//Show Results Desription
var resultSection = $("#result");
resultSection.append("<button id=result-button>Add Result Section</button>");
$("#result-button").click(function(){
  document.getElementById("result").innerHTML = "<p>Result Test</p>"
});

//JQuery Toggle Class Special
$(document).ready(function(){
  $("#css-button").click(function(){
    $("#challenge").toggleClass("special");
    $("#problem").toggleClass("special");
    $("#result").toggleClass("special");
  });
});



// //Challenge
// challengeBut = document.getElementById("challenge-button");
// challengeBut.addEventListener("click", function(){
//   $("#challenge").innerHTML = "<p>Challenge Test</p>"
// });
//Problem
// problemBut = document.getElementById("problem-button");
// problemBut.addEventListener("click", function(){
//   document.getElementById("problem").innerHTML = "<p>Problem Test</p>"
// });
// //Results
// resultBut = document.getElementById("result-button");
// resultBut.addEventListener("click", function(){
//   document.getElementById("result").innerHTML = "<p>Result Test</p>"
// });

// var problemSection = $("#problem");
// problemSection.append("<button id=problem-button>Add Problem Section</button>");
// $("#problem-button").click("click", function(){
//   document.getElementById("problem").innerHTML = "<h2>Problem</h2>"
// })
// var resultSection = $("#result");
// resultSection.append("<button id=result-button>Add Result Section</button>");
// $("#result-button").click("click", function(){
//   document.getElementById("result").innerHTML = "<h2>Result</h2>"
// })
