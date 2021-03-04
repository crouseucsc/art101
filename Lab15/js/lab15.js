// Author: Christian Rouse
// Professor: Wes Modes
// TA: Brock Stuessi
// Class: Art-101-01: Introduction to Computer Programming for the Arts
// Due Date: 4 March 2021

$('#activate').click(function() {
  var topic =$('#topic').val();
  var apiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + topic.replace(" ", "_") + "?redirect=true";

$.ajax({
    url: apiURL,
    data: { },
    type: "GET",
    dataType : "json",
    success: function(data) {
      if (data.extract_html) {
        $('#output-text').html(data.extract_html);
      } else {$("#output").html("<p>Could not find any information, try another spelling or inoput a different topic.");}
    },
    error: function (jqXHR, errorThrown) {
      $('#output-text').html("<p>Could not find any information, try another spelling or input a different topic.");
        console.log("Error:", errorThrown);
    }
  })
})
