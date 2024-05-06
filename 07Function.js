//Local scope and functions
/* Variables which are declared within a function as well as the function parameters, have 
local scope, that means that they are only visible within the function
 */

function localScope() {
  var scope = 10;
  console.log(scope);
}
localScope();
//10 willl be printed in the console, because var scope is declared within the function

// console.log(scope);
//But if we try to access the variable outside the function we get a reference error

//Global scope vs Local scope in functions

/*It is possible for a local and global variable to have same name,
when you do this the local variable takes precedent over the global variable
*/

var fruit = "Apple";

function localPrecedence() {
  var fruit = "Banana";
  console.log(fruit);
}
localPrecedence();
//Output = Banana

console.log(fruit);
//Output = Apple,.. because here the console,log is referring to the global variable, because a local variable cannot be called outside it's function

// Return a value using return
function returnFunction(num) {
  return num - 3;
}
console.log(returnFunction(7));
//Output 4 because the function returned 4

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(3));
//Output is 15

//Understanding undefined from a returned function
var num = 5;
function returnNothing() {
  num += 3;
  //No return statement
  //   so undefined is returned by default
}

//Asignment wth a returned value
var notChanged = 0;
function change(num) {
  return (num + 5) / 3;
}
notChanged = change(10);
console.log(notChanged);

//Here 10 is passed to the parameter num, calculation is made and then reassigned to notChanged
//output is 5
