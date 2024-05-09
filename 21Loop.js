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
