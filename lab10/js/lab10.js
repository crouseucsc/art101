/*
Authored: Christian Rouse
Professor: Wes Modes
TA: Brock Stuessi
Class: Art-101-01: Introduction to Computer Programming for the Arts
Due Date: 16 February 2021
*/
var outputEl = document.getElementById("output"); /*Get element denoted with
the id of output located in HTML.*/
var new1El = document.createElement("h1"); /*Put HTML attribute inside the <div>
tag/output element *not visible in HTML*.*/
new1El.innerHTML = "If you see this and the font size doesn't make sense, then it's working as intended.";
//Insert this string into the HTML attribute. *Is visible in HTML.*
var new2El = document.createElement("h4"); /*Put HTML attribute inside the <div>
tag/output element *not visible in HTML*.*/
new2El.innerHTML = ".innerHTML really needs to be mentioned in the prompt."
//Insert this string into the HTML attribute. *Is visible in HTML.*
outputEl.appendChild(new1El); /*Force whatever is in new1El into the element
denoted with the id of output in located HTML*/
outputEl.appendChild(new2El); /*Force whatever is in new2El into the element
denoted with the id of output in located HTML*/
