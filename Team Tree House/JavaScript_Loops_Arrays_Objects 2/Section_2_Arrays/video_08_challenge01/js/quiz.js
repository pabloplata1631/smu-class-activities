/*
ask questions and evaluate each questions 
display number of correct and incorrect questions 

used 2dim array - hold question and answer
use loop to cicle thru each question - 
prompt method to ask question 
if - to see if to see icorrect question 


create 2 new arrays 

one to keep track or correct and 
another one for incorrect 

print array as a bullletin list 

*/






var quiz = [
  ['what year did the mavs win the NBA finals?', 2011],
  ['how many NBA seasons have Dirk play?', 20],
  ['what sport is played in the NBA?', 6]
];
var correct= 0;
var question;
var answer;
var response;
var html;


// below keeps tracks to correct and incorrect list of questions

var incorrectList = [

];

var wrongList = [];

function print(message) {
var outputDiv = document.getElementById('output')

}

function buildList (arr){
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i ++){
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</o>';
  return listHTML;

}

for(i = 0; i < quiz.length; i += 1){
question = quiz [i][0];  // first we need to acces  an element from outer array [i] then acces the questions with [0]
answer = quiz[i][1];
response = parseInt(prompt(question)); // parseInt convert string value from prompt question into a number 
if (response === answer){
  correct += 1;
  correctList.push(question)
  }else {
    wrongList.push(question);
  }
}

html = 'You got ' + correct + " answers correct out of " + quiz.length;
document.write(html);
