for (i = 0; i < 101; i++) {
 var three = i % 3;
 var five = i % 5;
 if (three === 0 && five === 0) {
   console.log(i + " FizzBuzz");
 } else if (three === 0 && !(five === 0)) {
   console.log(i + " Fizz");
 } else if (!(three === 0) && five === 0) {
   console.log(i + " Buzz");
 } else {
   console.log(i);
 }
}

// % percent sign is to get remainder from a division i believe 
// sort of like 2%15=5 with a remainder




function prime(x) {
    //if 1 or 2, it's prime
    if(x <= 2 && x > 0){
        return true;
    }
    //if any divisible by any number between 1 and x, not prime
    for(var i = 2; i < x; i++){
        if(x % i === 0){
            return false;
        }
    }
    //else, prime
    return true;
}
