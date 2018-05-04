var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p> hellow Im ' + person.name + '</p>';
message += '<p> i was born in the ' + person.country + '</p>';
person.name = 'Dick'; // changing value to the name property  
message += '<p> people call me ' + person.name + ' for some reason tho. </p>';

print(message);