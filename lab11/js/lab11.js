/*
Authored: Christian Rouse
Professor: Wes Modes
TA: Brock Stuessi
Class: Art-101-01: Introduction to Computer Programming for the Arts
Due Date: 16 February 2021
*/
// var userName = window.prompt("Please enter your full name: ");
buttonEl = document.getElementById('submit-button');//get Button element.
buttonEl.addEventListener("click", function(){//Add event listener.
  nameEl = document.getElementById('name');//get name element.
  var userName = nameEl.value;//assign value of nameEl to userName.
  userName = userName.toUpperCase().split('').sort().reverse().join('');//Mess with name like in lab7.
  titleEl = document.getElementById('title');//get title element.
  titleEl.innerText = userName;
  console.log("user name:", userName);
});
