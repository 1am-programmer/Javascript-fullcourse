/*If we pass in the name and the property, it should return the  value, e.g if we pass in the name Dan, and the
Property age, it should return 5
But if the name passed in does not exist,it should return No such contact and if there's no property, it should return no such property 
*/
var contacts = [
  {
    name: "Dan",
    age: 5,
    hobbies: ["exercising", "coding", "farming"],
  },
  {
    name: "Dave",
    age: 6,
    hobbies: ["coding", "farming", "exercising"],
  },
  {
    name: "Daniel",
    age: 7,
    hobbies: ["farming", "exercising", "coding"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i][prop] || "No such property";
    }
    return "No such contact";
  }
}
var result = lookUpProfile("Dan", "age");
console.log(result); //Output 5, because Dan & age exists in the array

//Where name does not exist
var resultName = lookUpProfile("Bob", "age");
console.log(resultName); //Output No such contact

//Where property does not exist
var resultProp = lookUpProfile("Dan", "Skills");
console.log(resultProp); //Output No such property
