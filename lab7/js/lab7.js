/*
Authored: Christian Rouse
Professor: Wes Modes
Due Date: 4 February 2021
Course: Art-101-01: Introduction to Computer Programming for the Arts
Assignment: Lab 6 Functions
*/
function getName() {
  //The prompt() method displays a dialog box that prompts the visitor for input.
  var userName = window.prompt("Please enter your full name: ");
  //        Display string    Input
  console.log("User name: ", userName);
  /*The split() method is used to split a string into an array of substrings,
  and returns the new array. If an empty string ("") is used as the separator,
  the string is split between each character.*/
  /*You can omitt specific letters by putting the omitted letter in the quotes
  of .split("")*/
  var nameArray = userName.split('');
  console.log("Name Array: ", nameArray);
  /*The sort() method sorts the items of an array. By default, the sort() method
  sorts the values as strings in alphabetical and ascending order. This method
  changes the original array.*/
  /*Changing .sort() to .reverse() prioritizes lowercase leters to display first
  and somehow preserves the spaces as well, if .sort() is implemented anywhere
  then the spaces between words will no longer be present, however, the effect
  of displaying lowercase letters first is still in effect. The order of these
  has no effect on the space preservation.*/
  var nameArraySort = nameArray.reverse(); //was nameArray.sort();
  console.log("nameArraySort: ", nameArraySort);
  /*The join() method returns the array as a string.
  The elements will be separated by a specified separator. The default separator
  is comma (,). This method will not change the original array.*/
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted: ", nameSorted);
  return nameSorted;
}
//Output
document.writeln("Your name is fixed!: ", getName(), "</br>");
