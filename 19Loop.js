//LOOPS
/*
Loops allow you run code multiple times
- While loop:- Runs when a specific condition is true, ad stops when it is no longer true


*/

var arr = [];
var i = 0;
while (i < 5) {
  arr.push(i);
  i++;
}
console.log(arr);

/*
arr is an empty array
i is 0
While loop 
While i is less than 5,push i into arr and increment i

so this means this code will keep pushing all the integers less than 5, into the empty array

OUTPUT = [0,1,2,3,4]
*/

//ANOTHER EXAMPLE
var arr2 = [];
var j = 0;
while (j <= 15) {
  arr2.push(j);
  j++;
}
console.log(arr2);
/*
While j is less than or = 15, keep pushing integers into the array, until j = 15
*/

//Decrement
var arr3 = [];
var k = 10;
while (k >= 5) {
  arr3.push(k);
  k--;
}
console.log(arr3);
//While k is greater than or = 5, keep decrementing k until k is 5,
