/**
 * 
 *  CONTROL FLOW
 * 
 * 
 * 0. the order in which the computer executes statements in a script structure
 * 
 * 
 * 1. there are structures that change the control flow, such as conditionals, functions, and loops. 
 * 
 * 
 * 2. Can be nested inside code blocks that could run or could not
 *
 * 
 */
 
// program structure and how it affects order its runs statements. 
// structures that change the control flow, such as conditionals and loops. 

// if statement
if (true){
    console.log(true);
}
// should print true when the bool evaluates to true 

// else-if statement
if (!true){
    console.log(false);
} else if (!false){
    console.log(true);
}
// should print true after reversing bools it goes from the first if to the second without running console.log false

// else statement
var x = false;
if (x === true){
    // do this
} else {
    console.log(false);
}
// should print false

// switch statement
switch (expression){
    case undefined:
        console.log("undefined");
        break;
    case true:
        console.log("true");
        break;
    case false:
        console.log("false");
        break;
}
var expression;
// should print the string "undefined"
