//Updating Object properties

var newObj = {
  key1: "First value",
  key2: "Second value",
  key3: "Third value",
};

//We can update objects using dot notation
newObj.key1 = "Replaced First value";
console.log(newObj.key1);
//Output Replaced First value the equal sign is the assignment operator

//Adding to a new key and value to an object
newObj.key4 = "Fourth value";
console.log(newObj.key4); //Output Fourth value

//Deleting a key and value from an object
delete newObj.key4;
console.log(newObj.key4);
//Output undefined , because the key4 has been removed

//We can also use bracket notation to add to an object
newObj["key5"] = "Fifth value";
console.log(newObj.key5); //Output Fifth value
//We can also use bracket notation to delete a key and value from an object
delete newObj["key5"];
console.log(newObj.key5);
//Output undefined , because the key5 has been removed
