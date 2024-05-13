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
