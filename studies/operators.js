/**
 * 
 *      OPERATORS
 * 
 * 
 *  0. performs some operation on single or multiple operands and produces a result
 * 
 *  1. Used all over code to modify and run our code, add constraints and eliminate edge cases
 * 
 *  2. binary operaters takes two values like comparison operators
 *      urnary operaters takes a single value (ex typeOf) ternary takes more than 2
 * 
 */


//  assignment operator (=) assigns a value to a variable
//
//      =	    x = y	    x = y
//      +=	    x += y	    x = x + y
//      -=	    x -= y	    x = x - y
//      *=	    x *= y	    x = x * y
//      /=	    x /= y	    x = x / y
//      %=	    x %= y	    x = x % y
//      **=	    x **= y	    x = x ** y


//  Arithmetic operators are used to perform arithmetic on numbers
//
//      +	Addition
//      -	Subtraction
//      *	Multiplication
//      **	Exponentiation
//      /	Division
//      %	Modulus (Division Remainder)
//      ++	Increment
//      --	Decrement
//  adding a string and a number will return a string


//  Comparison Operaters
// dealing with boolean values
//      ==	equal to
//      ===	equal value and equal type
//      !=	not equal
//      !==	not equal value or not equal type
//      >	greater than
//      <	less than
//      >=	greater than or equal to
//      <=	less than or equal to
//      ?	ternary operator    shortcut for an if statement
//  (ifThisIsTruthy ? runThis : ifFalsy);
(1 == "1"); (1 === 1); (1 !== 2)
// truthy,  truth,      False


//  Logical Operaters
//      &&	logical and
//      ||	logical or
//      !	logical not
// help significantly with adding parameters to if statements

//  typeof Operaters
//  Operaters can be written as well
//  typeof	    Returns the type of a variable as a string
//  instanceof	Returns true if an object is an instance of an object type  
//  delete      Returns said index of function as undefined
var str = new String("strings here");
str instanceof String == true
// great for checking if its a date 