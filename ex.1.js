/*ask 5 qeustions 
keep track of questions correct 
provide final message for the number of correct questions
give crown */

var question1 = prompt("what is the best codng language")
var question2 = prompt("what is the name of the mavs top player")
var question3 = prompt("who won last years finals")
var question4 = prompt("Who was nba Mvp last year")
var question5 = prompt("What team did kobe play for")
var correctAnswers = 0;

if(question1.toUpperCase() === "JavaScript"){
    correctAnswers += 1;
}
if (question2.toUpperCase === "Dirk" || "Nowitzki" || "Dirk Nowitzki"){
correctAnswers += 1;
}
if (question3.toUpperCase === "Warriors" || "Golden State"){
    correctAnswers += 1;
}
if (question4.toUpperCase === "Russell" || "Westbrook"){
    correctAnswers += 1;
}
if (question5.toUpperCase === "Lakers" || "LA Lakers"){
    correctAnswers += 1;
}

document.write("you got " + correctAnswers + " out of 5")
//crons for number of correct questions

if (correctAnswers === 5){
 document.write('you get a gold crown bitch');
} else if (correctAnswers >= 3){
    document.write('you get a silver crown ');
}else if (correctAnswers >=2){
    document.write("yeah weak - heres a bronze");
}else {
    document.write ("you fucking suck");
}
