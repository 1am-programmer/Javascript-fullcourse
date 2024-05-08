//Testing Objects for properties
/*
You can check if an object has a property using the hasOwnproperty method 
*/
var myObj = {
  key: "value",
  key2: "value2",
  key3: "value3",
};

function checkObject(objectKey) {
  if (myObj.hasOwnProperty(objectKey)) {
    console.log("myObj has a key property");
  } else {
    return "Not found";
  }
}
checkObject("key");
//Output myObj has a key property
/*
Here the function check if the object has the key passed into the function's argument, and if it does, it returns
myObject has a key property else it returns Not found e.g 
*/
console.log(checkObject("key5")); //Output Not found

//MANIPULATING COMPLEX OBJECTS
var dev = [
  {
    name: "Dan",
    profession: "Developer",
    skills: ["HTML", "CSS", "Javascript"],
    jobType: "Remote",
  },

  {
    name: "Danny",
    profession: "Programmer",
    skills: ["Next js", "React js", "Tailwind CSS"],
    session: true,
  },
];

//ACCESSING NESTED OBJECTS
var about = {
  name: {
    firstName: "Dan",
    languages: {
      basic: "Html",
      styling: "Tailwind CSS",

      complex: {
        advanced: "Typescript",
        framework: "Next js",
        library: "React js",
      },
    },
    hobbies: ["Coding", "Reading", "Exercising"],
    age: 5,
  },
};

//Using dot notation
console.log(about.name.firstName); //Output Dan
console.log(about.name.languages.complex.advanced); //Output Typescript
console.log(about.name.hobbies[1]); //Output Reading

//Using bracket notation
console.log(about["name"]["languages"]["complex"]["advanced"]); //Output Typescript
