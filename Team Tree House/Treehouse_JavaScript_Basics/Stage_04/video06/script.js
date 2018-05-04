

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt("Nope the randomNUmber is more than the number you guessed")// a new variabe is created since user guessed a number that was less than the randomNUmber - this var i created to give the user another chance
    if (parseInt(guessMore) === randomNumber){
        correctGuess = true;
    }
}else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt("the randomnumber you guessed is less than the number your guesses")
    if(parseInt(guessLess)=== randomNumber)
    correctGuess = true;
}
/// below is just testing if correctGuess is true the first option appears if not (false) then the second was appears
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}