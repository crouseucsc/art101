/*
Authored: Christian Rouse
Professor: Wes Modes
Class: Art-101-01: Introduction to Computer Programming for the Arts
Due Date: 8 February 2021
*/

//Set functions.
function firstThing(test) {
  console.log(test + ": This is the first thing. <br>")
}
function secondThing(test) {
  console.log(test + ": This is the second thing. <br>")
}
function thirdThing(test) {
  console.log(test + ": This is the third thing. <br>")
}

//Test 1. Type in console.
firstThing("TEST1");
secondThing("TEST1");
thirdThing("TEST1");

//Test 2. Type in console. Value at the end clarified in test 3.
setTimeout(function() {
  firstThing("TEST2");
}, 0);

setTimeout(function() {
  secondThing("TEST2");
}, 0);

setTimeout(function() {
  thirdThing("TEST2");
}, 0);

//Test 3. Type in console.The value at the end determines time before the function is executed in millisenconds(?). Assigning a value of 3, 1, and 2 nets te same order.
setTimeout(function() {
  firstThing("TEST3");
}, 3000);

setTimeout(function() {
  secondThing("TEST3");
}, 1000);

setTimeout(function() {
  thirdThing("TEST3");
}, 2000);
