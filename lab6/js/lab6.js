/*
Author: Christian Rouse
Professor: Wes Modes
Due Date: 2 February 2021
Class: Art-101-01: Introdcution to Computer Programming for the Arts
*/
var myTransport = ["car", "plane", "bicycle", "rideshare"];

var myMainRide = {make: "ford", model: "taurus", color: "rusty", year: 1995};


document.writeln("Mode of transportation: " + myTransport[0] + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
