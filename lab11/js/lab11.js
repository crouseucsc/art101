/*
Authored: Christian Rouse
Professor: Wes Modes
TA: Brock Stuessi
Class: Art-101-01: Introduction to Computer Programming for the Arts
Due Date: 18 February 2021
*/
//Show Challenge Description Button
var challengeSection = $("#challenge");
challengeSection.append("<button id=challenge-button>Add Challenge Section</button>");
$("#challenge-button").click(function(){
  document.getElementById("challenge").innerHTML = "<p>The challenge in this lab was to get used to the implementation of JQuery and utilize it as a means to shorten the coding process along with importations as well as implementing a toggle CSS feature.</p>"
});

//Show Problem Description Button
var problemSection = $("#problem");//variable is now the div with the id problem
problemSection.append("<button id=problem-button>Add Problem Section</button>");//create a button under the variable and give it the id of problem-button as well as stamping the button with Add Problem description.
$("#problem-button").click(function(){//get the button with the id of problem-button and give it a click function so that when clicked it displays under the div-id of problem an insert into the HTML filed with the tags <p></p>.
  document.getElementById("problem").innerHTML = "<p>This lab was particularly arduous as this time I had many problems. Utilizing the methods from lab 10 I was able to creat buttons that functioned identically top the ones present in this lab, once I had translated my previous code to work, I then had to convert it to a JQuery format as well ass assigning both a class and unique div to each one. This lead to multiple iterations of essentially the same code and experimenting with whta could be replaced by '$' and what could not, in some cases it would read correctly, in others it would read the wrong things or not read at all. Implementing a button that would also toggle the css attributes was also very difficult as reveiw of the lecture was of no help in that area. Intially it was taken from w3 schools and inmplemented directly into the HTML file via script, howver this applied its attributed to only the example instead of the rest pof the page or specific tags and classes that were given. It took some time but through much trial and error I managed to both reduce the bulk of the code and remove it from the HTML where it was no longer needed.</p>"
});

//Show Results Desription Button
var resultSection = $("#result");
resultSection.append("<button id=result-button>Add Result Section</button>");
$("#result-button").click(function(){
  document.getElementById("result").innerHTML = "<p>If you can read this output, then this is an example of the the results of the coding, below you will find a button that can enable and disable a simple background color CSS attribute applied to this and the responses above.</p>"
});

//JQuery Toggle Class Special Button
$(document).ready(function(){//get ready a function in the entire document?
  $("#css-button").click(function(){//when the button under id of css-button is clicked
    $("#challenge").toggleClass("special");//toggle the css on or off of the div id of challenge with a class of 'special'
    $("#problem").toggleClass("special");//toggle the css on or off of the div id of problem with a class of 'special'
    $("#result").toggleClass("special");//toggle the css on or off of the div id of result with a class of 'special'
  });
});

$(document).ready(function(){//get ready a function in the entire document?
  $("#css-challenge").click(function(){//when the button under id of css-challenge is clicked
    $("#challenge").toggleClass("challenge");//toggle the css on or off of the div id of challenge with a class of 'special'
  });
});

$(document).ready(function(){//get ready a function in the entire document?
  $("#css-problem").click(function(){//when the button under id of css-problem is clicked
    $("#problem").toggleClass("problem");//toggle the css on or off of the div id of problem with a class of 'special'
  });
});

$(document).ready(function(){//get ready a function in the entire document?
  $("#css-result").click(function(){//when the button under id of css-result is clicked
    $("#result").toggleClass("result");//toggle the css on or off of the div id of result with a class of 'special'
  });
});

// Challenge
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
