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
