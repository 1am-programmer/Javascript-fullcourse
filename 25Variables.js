//Difference betwen Var and let

/*
For a long time in Javascript, if you're to declare a variable, you must use the var keyword,
But starting in 2015 we can now declare variables with let and const
*/

/*
Let does not let you declare a variable twice
*/
var names = "Javascript";
var names = "Typescript";

console.log(names); //Output Typescript

//While let
let language = "Javascript";
// let language = "Typescript";
console.log(language); //Output Error

//But if we reinitialize without using the keyword let, it does not throw an error
language = "C++";
console.log(language);
//Output C++ Because variables can be reinitialised but not declared twice using same let keyword

/*"Use strict" :- This enables strict mode which catches common coding mistakes and unsafe actions, it can 
be used in a top of the file or in a function
e.g if you write a variable and don't declare it with var, let and const
*/

//SCOPES OF KEYWORDS
/*
If a variable is declared with VAR, it is declared globally and can be used anywhere, or locally when it is declared inside in a function
If a variable is declared with LET, it is declared locally and can only be used inside the block in which it is declared
*/

//FOR VAR
function checkScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    var i = "block scope";
    console.log("Block Scope i is ", i); //Output => Block scope is stll block scope
  }
  console.log("Function scope", i);
  return i;
}
checkScope(); //Output => Function scope is stll block scope

//FOR LET
function checkBlock() {}
