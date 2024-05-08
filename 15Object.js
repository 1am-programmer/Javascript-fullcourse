/*
Objects are used to store date like arrays, but instead of indexes, we use properties to search an object
Arrays []
Objects {}
*/

var aboutMe = {
  name: "Dan",
  age: 5,
  hobby: ["Coding", "Reading", "Exercising"],
};
/*Objects can take in all data types including another object */

//THERE ARE TWO MAIN WAYS OF ACCESSING PROPERTIES IN AN OBJECTS
/*
Items in the left hand side of the : is called key , while items on the right hand side are called values

To access a property in an objects, we use the object name and the key, the value i.e
*/

var theObj = {
  key: "values",
};
/*To access values, we use 
theObj.key 

This is referred to as dot notation

Besides using the dot notation, we can use the bracket notation but it is required if the key has a space in it, e.g 
*/
var spaceObjects = {
  "an entry": true,
  "second entry": false,
  "this course": "Javascript",
};

var getCourse = spaceObjects["this course"];
console.log(getCourse);
//Output Javascript

//ACCESSING OBJECT PROPERTIES WITH VARIABLES
var myObj = {
  key: "value",
};

var myKey = "key";

console.log(myObj[myKey]);
/*Output Value

Here the key is set to a variable "myKey", and to access the value tied to the key, we use the bracket notation method
*/

//Another example
var footballer = {
  name: "Messi",
  age: 33,
  position: "Forward",
  team: "Barcelona",
};

var messiTeam = "team";
console.log(footballer[messiTeam]); //Output Barcelona

var messiAge = "age";
console.log(footballer[messiAge]); //Output 33
