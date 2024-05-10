/*Math. random 
is a Simple way to create random decimal numbers in Javascript 
Decimal numbers between 0 and 1, can be 0 but never 1
*/
function randomDec() {
  return Math.random();
}
console.log(randomDec());

/*Math.floor
Rounds down to the nearest whole number
*/
function roundDecimals() {
  var roundDown = Math.floor(Math.random() * 20);
  console.log(roundDown);
}
roundDecimals();
/*First generates a random number, and multiplies it by 20,
 then the math.floor function rounds the random number down to the nearest
 whole number
 the more you console.log, the more random numbers you get
 */

// Generates whole numbers within a range

function range(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
range(1, 9);
/*
Generates a random number, multiplies it by the output of our function's argument
in this case 9 and 1, 
and then rounds it down to the nearest whole number,
before adding the result to the min which in our case is 1 
*/

//Math.round
var x = 3.45678;
x = Math.round(x);
console.log(x); //Output = 3

//Math.ceil, rounds a decimal/floating number up to the nearest integer
let y = 3.45678;
y = Math.ceil(y);
console.log(y); //Output = 4

//Math.pow
let z = Math.pow(2, 3);
console.log(z); //Output 8 >> 2 X 2 X 2 = 8
//First number is the base, secind number is the exponent

//Math.square root
let a = Math.sqrt(16);
console.log(a); //Output 4

//Absolut value, that is the distance away from 0
let b = Math.abs(-10);
console.log(b); //Output 10

//Maximum and minimum
var i = 8;
var j = 7;
var k = 10;

var l = Math.max(i, j, k);
console.log(l); //Output = 10, because it is the maximum of all three

var m = Math.min(i, j, k);
console.log(m); //Output = 7, because it is the minimum of all three

//Math,.PI
var n = Math.PI;
console.log(n);

//PARSEINT FUNCTION
//It takes a string and returns an integer
function convertInteger(str) {
  return parseInt(str);
}
console.log(convertInteger("57"));

/*ParseInt function with Radix
the base of a system of numeration.
*/
function baseInt(str) {
  return parseInt(str, 2); //This is a base 2 number, so we pass in the base number, so the computer understands and converts it to integer
}
console.log(baseInt("11111111"));
