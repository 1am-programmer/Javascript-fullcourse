/*Tenrary Operators
It's like a one line if and else statement
The data after the question mark is ran if true, while the data after the colon is ran if false 
*/

function tenaryOp(x, y) {
  return x > y ? true : false;
}
console.log(tenaryOp(6, 2));
//Output true 6 is greater than 2

//Multiple Tenary operators
function checksign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checksign(10)); //Output Positive
console.log(checksign(-10)); //Output Negative
console.log(checksign(0)); //Output Zero

/*Checks if num is greater than 0, if true returns positive,
else if num is less than 0, if true, returns negative, else returns Zero
*/
