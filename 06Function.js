//Functions allow us create useable code in Javascript

function myFunction() {
  console.log("My first function");
}
myFunction(); //Here the function is being called :- The code in the function runs anytime it is being called

//Passing values to the function with an argument
/*
Parameters are variables that act as placeholders for the values that are to be inputed to a function  when is called
*/
function yourFunction(a, b) {
  console.log(a - b);
}
yourFunction(10, 5);
//Output is 5

function ourFunction(x, y) {
  console.log(x + y);
}
ourFunction(80, 20);

//Global scope and functions
/* Scope Refers to the visibility of variables
- Variables which are defined outside of your functions have global scope
- Global scope means that it can be seen everywhere in your Javascript code
 */

var globalScope = 10;

function test() {
  automaticGlobal = 5;
  /*If we had added a var keyword to the variable above, it would have been scoped to the test function
  But since there is no keyword, then the variable becomes a global variable and can be accessed anywhere*/
}

function checkScope() {
  var output = "";
  if (typeof globalScope != undefined) {
    output += globalScope + automaticGlobal;
    /*Run in a browser and not in the CLI, because the CLI automatically adds a var keyword to the automaticGlobal variable,
     thus causing an eror of not defined*/
  }
}
checkScope();
