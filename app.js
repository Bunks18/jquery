// your code here!

$(function(){
$( "#button" ).click(function(event) {
  event.preventDefault();

//remove the hidden class
  $("#d1").removeClass("hidden");

  // count the # of words
    var str = $('#user-text').val();
    console.log(str.match(/(\w+)/g).length);

// count the # of unique words
  var uniqueArray = ($.unique(str.split(' '))).length;
  console.log(uniqueArray);

// avg word length
  var strSplit = str.split(" ")
  var strLength = [];

  for (var i = 0; i < strSplit.length; i++){
  strLength.push(strSplit[i].length);
  };

  var avg = 0;
  for ( var k = 0; k < strLength.length; k ++){
    avg += strLength[k];
  }
  var newAvg = avg / strLength.length;

  console.log(newAvg);

//loop through to make an array out of the # of lines
var lines = [];

  function calculate() {
       var textArea = document.getElementById("user-text");
       var arrayOfLines = textArea.value.split("\n");
       for(var i = 0;i < arrayOfLines.length; i++){
        lines.push(arrayOfLines[i].length);
       }
   }
   calculate();

   //calculate the average

   var avg1 = 0;

   for(var a = 0; a < lines.length; a ++){
     avg1 +=  lines[a];
   }
  linesAvg = avg1/lines.length;
  console.log(linesAvg);

  // push the results
$('#wordCount-spot').html(str.match(/(\w+)/g).length)
$('#uniqueCount-spot').html(uniqueArray);
$('#avgWordLength').html(newAvg.toFixed(2));
$('#avgSentence').html(linesAvg.toFixed(2));

});
});
