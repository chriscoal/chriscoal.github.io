/**
 *  FUNCTIONS
 * 
 * 
 * 0. Function is a subprogram of your code containing a series of statements which can 
 *      be call on externally to run the function body and return a value
 * 
 * 1. Functions are first class Onjects since they can have properties and methods just like other objects
 *      the only difference is that it can be called upon
 * 
 * 
 */
// Function Declarations
// a name of function, list of parameters to the function, enclosed in parentheses and separated by commas.
// the JavaScript statements that define the function, enclosed in curly brackets {}
// if multiple Arguments are inputed they can be found with the object arguments or (...theArgs)(a,b,...manyMoreArgs)
// that changes the arguments into an array of what was input
// to return a value or something from a function you'll have to have a return statement and to call the function by using
// it's name(args)
function funkOne(arg1, arg2){
    return;
}
// Function Expressions
var test = function (){
    console.log("assigned function to variable/ does not get hoisted");
}
// unlike the declaration the function expression does not get hoisted, expressions do not
// need to be named and can be anonymous, they can also be set up to be immediately invoked 
// (function(){
// console.log("test");
// })();
// invoking the function with () after

// First Class Functions
// functions that can be passed as an argument to other functions, can be returned by another function
// can be assigned as a value to a variable