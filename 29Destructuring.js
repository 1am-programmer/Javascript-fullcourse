//Destructuring Assignments
/* - Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
   -Is a special syntax for neatly assigning values taken correctly from an object to a variable
*/

var vowels = { a: 1, e: 5, i: 9, o: 15, u: 21 };
//To get the individuals values, the old way was
var a = vowels.a;
var e = vowels.e;
var i = vowels.i;
var o = vowels.o;
var u = vowels.u;
//The new way is
function results() {
  var { a, e, i, o, u } = vowels;
  console.log(vowels);
}
results(); //Output { a: 1, e: 5, i: 9, o: 15, u: 21 };
//Using the destructuring method to get the values from objects and assign them to another variable

const TEST_SCORES = {
  highest: 79,
  lowest: 10,
};

function getHighest(result) {
  "use strict";
  const { highest: theHighest } = result;
  //Gets the highest field from the result's object and then store it in theHighest variable
  return theHighest;
}
console.log(getHighest(TEST_SCORES)); //Output 79
//The function takes the TEST_SCORES as the argument passed for the parameter results

//DESTRUCTING ASSIGNMENTS WITH NESTED OBJECTS
const nestedObj = {
  maths: { best: 98, worst: 46 },
  english: { best: 95, worst: 32 },
};

function bestInMaths(subj) {
  "use strict";
  const {
    maths: { best: theBest },
  } = subj;
  return theBest;
}
console.log(bestInMaths(nestedObj)); //Output 98

/*To get the best in maths, with the destructuring method, 
  => first you take maths out , then assign it to another curly brace
  => and then take the best out of the maths object and assign it to theBest variable
  */

//Using Destructuring to assign variables from an array
/*

The difference between destructuring from an array and from an object is because you cannot specify
 which element goes into the destructured variable, it goes in order, except is we use a [  , , ]
 to skip the elements we don't want in the destructured variable 
*/

const [, b, c, , , f] = [1, 2, 3, 4, 5, 6];

console.log(b, c, f); //Output 2 3 6
/*
Because we only represented 2,3,6 by alphabets and printed the alphabet, while 
1,4,5 were represented by [ ,] and where filtered out
*/
