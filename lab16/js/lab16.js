// Author: Christian Rouse
// Professor: Wes Modes
// TA: Brock Stuessi
// Class: Art-101-01: Introduction to Computer Programming for the Arts
// Due Date: 9 March 2021

var apiEndpoint = "https://xkcd.com/info.0.json"; //information origin.
$("#api-button").click(doAPIStuff);
function putTextOnPage(text){
  $("#output").html(text);
} //on button click, activate doAPIStuff function defined below.
function doAPIStuff() {
  $.ajax({
    url: apiEndpoint,
    data: { }, //data from th URL will be input.
    type: "GET", //fetch sounds better
    dataType: "json",
    success: function(data) {
      var textData = JSON.stringify(data); //take the data and covert it into a string.
      var str = "";
      var imageURL = data.img; //get image
      var title = data.title; //get title
      var alt = data.alt; //get alternate info
      str += "<h3>" + title + "</h3>";
      str += "<img src='" + imageURL + "' title='" + alt + "'>";
      putTextOnPage(str);
      console.log("Success:", textData); //display in the console if functionning correctly.
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
})
}
