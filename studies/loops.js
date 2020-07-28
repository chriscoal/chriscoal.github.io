/**
 * 
 *      Loops
 * 
 *  0. Easy way to do things repeatedly 
 * 
 * 
 *  1. Some loops work better then others it just depends on what your working with
 * 
 * 
 * 
 * 
 */
 
//  for (var i = 0; i <> .length; i++)
// versatile for looping through arrays and strings
let array = ["one", "two", "three"];
for (var j =0; j < array.length; j++){
    console.log(array[j]);
};
// iterate through array 3 times printing one two and three in the console
for (var j = array.length; j >= 0; j--){
    console.log(array[j]);
};
// should print in reverse

//  for (var key in object)
let object = {
    1 : "one",
    2 : "two",
    3 : "three"
};
for (let key in object){
    console.log(key);
};
// iterate through keys of object, should print "1", "2", "3"

//  do {expression} while (boolean)
let x = 0
do {x++} while (x < 5);
while (x === 4){
    console.log(x)
}
// x should equal 4 after running through loop, then print 4
