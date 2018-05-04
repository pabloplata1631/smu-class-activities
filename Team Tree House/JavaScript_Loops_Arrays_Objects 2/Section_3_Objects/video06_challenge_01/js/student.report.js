var message = ' ';
var student;   // to hold student object each time the loop runs
var question= prompt('Search MVP NBA player here. type "quit" to exit out');
var userSearch; student.name

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  } // function to print 


  for( var i = 0; i < students.length; i ++){
      student = students[i];
      message += "<h2> Student: " + student.name + "</h2>";
      message += "<p> track: " + student.track + "</p>";
      message += "<p> trophies: " + student.trophies + "</p>";
      message += "<p> points: " + student.points + "</p>";
  }

  print(message);


  if (userSearch === student.name[1] ){
    message += "<h2> Student: " + student.name + "</h2>";
    message += "<p> track: " + student.track + "</p>";
    message += "<p> trophies: " + student.trophies + "</p>";
    message += "<p> points: " + student.points + "</p>";
    print(message);
  }else {
      document.write("ERRORS");
  }


  


  /// search records prompts use IF 


//for (var prop in students){
   // console.log(students[0]);
//}

