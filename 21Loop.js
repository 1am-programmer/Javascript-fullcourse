//ITERATE EVEN NUMBERS WITH A FOR LOOP
/*Loops doesnt always have to increment by 1 */
var arr = [];
for (let j = 0; j < 40; j += 2) {
  arr.push(j);
}
console.log(arr); //Output even numbers betweeen 0 and 38

//ITERATE ODD NUMBERS WITH A FOR LOOP

var arr = [];
for (let j = 1; j < 40; j += 2) {
  arr.push(j);
}
console.log(arr); //Output odd numbers betweeen 1 and 39

//COUNT BACKWARDS WITH A FOR LOOP
var myArr = [];
for (let i = 10; i > 0; i--) {
  myArr.push(i);
}
console.log(myArr); //on each iteration, decrement i, until it is 1

//ITERATE THROUGH AN ARRAY, WITH A FOR LOOP
var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total); //Output: 20

//NESTING FOR LOOPS
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    //Checks the length of the main array
    for (let j = 0; j < arr[i].length; j++) {
      //Checks the length of subarray, at index i of the main array
      product *= arr[i][j]; //[i] represents the outer array, [j] represents the inner array
    }
  }

  return product;
}
var products = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(products);
//Output 5040 because it multiplies all items in the array

//ITERATE WITH DO WHILE LOOP
/*
Difference between a while loop and a do while loop:
A while loop:- checks the condition before it runs the code, while
A do while loop, runs atleast once before it checks the condition
*/
