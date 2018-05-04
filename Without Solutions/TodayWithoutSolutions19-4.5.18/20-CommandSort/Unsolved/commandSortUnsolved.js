// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var argument = process.argv;

// below to hold humbers
var numbers = [];

// for loop that starts with 3 so we skip path 
for (var i = 2; i < argument.length; i++){
 numbers.push(parseFloat(argument[i]));
}
// below is to print orig numbers
console.log(numbers);


var result =  numbers.sort(numbers);// to short out array of numbers 

