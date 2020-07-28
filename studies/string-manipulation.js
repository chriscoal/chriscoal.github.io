/**
 * 
 *    String Manipulation
 * 
 * 
 *  0. To modify a string and replace a string, or access certain characters
 * 
 *  1. Some methods store the change some have to be stored to be accessed
 * 
 *  2. Format starts with stringName.ManipulationCmmnd();
 * 
 *
 */ 

//  toLowerCase and toUpperCase
//  - modifiy the string in the line, does not store value changed unless you store it
// 
var string = "say a name";
string = string.toUpperCase();
// expect => string = "SAY A NAME"

// Spliting the string
// splits on said pattern, whether -_" " and an end index, returns a new array of string
// str.split(pattern, limit)
var str = "string";
str = str.split("", 3);
// expect console log to print an array of s, t, r

// Joining Strings
// would be used on an array of strings to combine them with a certain character
// str.join(seperator)
var strTwo = ["two", "Three", "four"];
strTwo = strTwo.join("-");
// expect ["two-Three-four"]

// Concat your strings
// used to join one or more strings and return a string value
// str.concat(otherArray)
str = str.concat(strTwo);
// expect string "stringtwo-Three-four"

// Length 
// used to get the number of indexes are in an array or string and return a number value
// str.length
str.length === 21;

// Slice
// returns a portion of the string after whatever index input into function to the last index
// If one end is missing it'll end at the end of string
// str.slice(start, end)
string.slice(0 ,2);
// => "say"

// Bracket Notation
// call on a specific point in string if you want a certain character
string[0];
let stringFirst = string[0];
// should expect to store the value "s"

// Index Of
// find the starting index in a string of an input string to search for
string.indexOf("his");
// should return index number 4

// Replace
// take out an input1 and replace it with input2 inside string
// str.replace("str", "replac");
// should expect str => "replacing"