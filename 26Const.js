//CONST
/*
Const has all the attributes of let, but it cannot be reassigned

Also when you're using const, it better to use all capital letters for variable name
*/
const MY_NAME = "Daniel";
// MY_NAME = "Dan" Uncomment this
console.log(MY_NAME); //Output error

//ARRAY, MUTATION DECLARED WITH CONST
const LANG = ["Java", "C++", "Javascript", "Python"];

function edit() {
  "use strict";
  //LANG = ["Typescript", "Swift", "Go"]
  /* Reassigning the elemts in the array, will throw an error, so we use thr bracket notation, to change their values */
  LANG[0] = "C#"; //LANG at index 0
  LANG[1] = "C";
  LANG[2] = "Kotlin";
}
edit();
console.log(LANG);
//Output LANG = ["C#","C","Kotlin"]

//Prevent Object Mutation
/*
The earlier example, makes it clear that even an array declared with const can be mutated

A way of preventing object preventing object mutation in Javascript is through object.freeze 
*/
const MATH_PI = {
  pi: 3.14,
  e: 2.71,
};
Object.freeze(MATH_PI); //By commenting this, the values in the objects can be changed

try {
  MATH_PI.e = 3.89; //This will change the value of e from 2.71 to 3.89, but with adding the object.freeze after the objects, no value can be changes
} catch (ex) {
  console.log(ex);
}
console.log(MATH_PI);
