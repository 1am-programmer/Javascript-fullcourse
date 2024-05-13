/*Object literals are a fundamental syntax in JavaScript for creating objects. 
They allow you to define objects and their properties and values in a concise and readable manner
- Object literals allow for the creation of complex data structures by nesting objects and arrays within each other.
 They are commonly used for organizing and manipulating data in JavaScript programs.

 => Access object values using their keys, either dot notation or bracket notation are syntax of objects literals
 => All in our object section is an object literal

Writing Concise object literals declaration using simple fields
*/

let car = {
  name: "Mercedes",
  model: "AMG 350",
  getPrice: function () {
    return 5000;
  },
  printDesc: function () {
    console.log(this.name + " " + this.model);
  },
  year: 2023,
};

car.printDesc(); //A function in an object is called a method

//Nesting array of objects in an object
const carInventory = {
  cars: [
    {
      brand: "Toyota",
      model: "Camry",
      year: 2020,
      color: "blue",
    },
    {
      brand: "Honda",
      model: "Civic",
      year: 2018,
      color: "red",
    },
    {
      brand: "Ford",
      model: "Fusion",
      year: 2019,
      color: "silver",
    },
  ],
};

const nest = carInventory.cars[1].brand;
console.log(nest);

/*When you have to return an objects with key and value pairs of same name, write only one, and javascript understands
that you are returning an object with key and value pairs of same name */

const me = (name, age, gender) => {
  //Old way
  //   return {
  //     name: name,
  //     age: age,
  //     gender: gender,
  //   };

  //New way
  return {
    name,
    age,
    gender,
  };
};
console.log(me("Dan", 5, "Male"));
//Output {name: "Dan", age: 5, gender: "Male"}
