// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    var multThree = [];
    var multFive = [];
    for (var i = 0; i < 100; i += 3){
        multThree.push(i);
    }
    for (var i = 0; i <= 100; i += 5){
        multFive.push(i);
    }
    for (var i = 1; i <= 100; i++){
        if (multFive.includes(i) && multThree.includes(i)){
            console.log("FizzBuzz");
        } else if (multThree.includes(i)){
            console.log("Fizz");
        } else if (multFive.includes(i)){
            console.log("Buzz");
        } else console.log(i);
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}