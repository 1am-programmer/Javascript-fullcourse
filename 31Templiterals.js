/*Template Literals:-
Are a special type of string that makes creating complex strings easier
you make them with backticks {` `}
*/
const person = {
  name: "Dan",
  language: "Javascript",
  age: 5,
};

const aboutMe = `My name is ${person.name}, I am ${person.age} years old. My favorite language is ${person.language}`;
console.log(aboutMe);

/*
Advantages of using this 
1. You can make multi line strings
2. You can add single or double quotation marks in the string
3. You can put variables right in the string
4. You can write Javascript inside of a string
*/

//Example

const test = {
  success: ["First", "Second", "Third"],
  average: ["Fourth", "Fifth", "Sixth"],
  fail: ["Seventh", "Eighth", "Ninth"],
};
function makeList(arr) {
  const AVERAGE = [];
  for (let index = 0; index < arr.length; index++) {
    AVERAGE.push(`<li> ${arr[index]}</li>`);
  }
  return AVERAGE;
}
console.log(makeList(test.average));
/*- Test An object, whose key value pairs are arrays
- function makeList takes the a parameter arr, representing the array which will be passed in {In our case, the test.average array} 
- const average is an empty array where the values of array at the index of the iterating loop will be passed in
- a for loop, where index will keep iterating, until the length of the array passed in to the parameter arr is achieved
- the value of the array at the index of the iterating loop will be pushed into the AVERAGE array
**The values pushed to the AVERAGE array is an li html tag, whole value is the array at each index
in this case  ["Fourth", "Fifth", "Sixth"]
- AVERAGE array should be returned 
- We print the makelist funtion taking in the test object, with the key average which is an array

"After iterating through the array passed to the makeList function, each element is encapsulated within <li> tags,
 forming an unordered list. This function essentially converts a plain array into an HTML list,
  which can be useful for dynamically generating content in web applications. In this specific case,
   when makeList(test.average) is called,
 it generates an HTML list containing the elements from the 'average' array in the test object."

*/
