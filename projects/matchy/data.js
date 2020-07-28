/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "C. Lupis";
animal["name"] = "Scooby";
animal["noises"] = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
//assignment by reference or array methods
noises[0] = "roar";
noises.push("Purr");
noises.unshift("Meow");
noises[noises.length] = "skkkks";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
// in dot notation then bracket notaion and store  value in whats now the last index 
animal.noises[noises.length] = "rwaae";
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
// make new objects of animal's to add into animals array
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
};
animals.push(duck);
console.log(animals);
var penguin = { 
    species: 'Emporer Penguin', 
    name: 'Jermy', 
    noises: ['honkk', 'honk', 'sneeze', 'woosh'] 
};

var lion = { 
    species: 'Panthera Leo', 
    name: 'Simba', 
    noises: ['honkk', 'honk', 'sneeze', 'woosh'] 
};
// use push() and add these animal objects into the animals array
animals.push(penguin);
animals.push(lion);
console.log(animals);
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
function getRandom(){
    // make locally available variable of the max index to give
    // return a number thats the rounded random range between 0 and the last index
    let range = (animals.length - 1);
    var randIndex = Math.floor(Math.random() * range);
    return randIndex;
    
}
friends.push(addAFriend());
//hoist function and add a random name 
function addAFriend (){
    //locally store a random name string from animals array to return a string
    let name = animals[getRandom()].name;
    return name;
}
function addAFriendsToAnimals (){
    // assign firends to a random animals index and name the key friends using bracket notation and assign the friends array
    animals[getRandom()]['friends'] = friends;
    return;
}
console.log(friends);
// call function to add friends array to a random animal
addAFriendsToAnimals();
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}