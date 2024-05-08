//ACCESSING NESTED ARRAYS
var about = [
  {
    name: "Dan",
    languages: ["Html", "CSS", "Javascript"],
    jobType: "Remote",
  },
  {
    name: "Danny",
    languages: ["Next js", "React js", "Tailwind CSS"],
    session: true,
  },
];
console.log(about[0].languages[2]);
/*About at index which is the first array, using dot notation to navigate through the language key,
 at the index 2, which is the 3rd element in the array => Javascript*/

//RECORD COLLECTION

const record = {
  messi: {
    age: 33,
    position: "Forward",
    goalAgainst: [
      "Manchester City F.C.",
      "Barcelona",
      "Real Madrid C.F.",
      "Liverpool",
      "PSG",
    ],
  },
  ronaldo: {
    age: 36,
    position: "Forward",
    goalAgainst: [
      "Manchester UTD",
      "Juventus",
      "Barcelona",
      "PSG",
      "Liverpool",
    ],
    penalties: [],
  },

  neymar: {
    age: 29,
    position: "Forward",
    goalAgainst: [
      "Liverpool",
      "PSG",
      "Manchester City F.C.",
      "Barcelona",
      "Real Madrid C.F.",
      "Liverpool",
      "PSG",
    ],
  },
};

var recordCopy = JSON.parse(JSON.stringify(record));
//This is just a fancy way of saving the original copy of the records, since we'll be updating it via the function below

function updateRecords(player, properties, values) {
  if (values === "") {
    delete record[player][properties];
  } else if (properties === "goalAgainst") {
    record[player][properties] = record[player][properties] || [];
    record[player][properties].push(values);
  } else {
    record[player][properties] = values;
  }

  return record;
}
console.log(
  updateRecords("ronaldo", "goalAgainst", "Bayern")
); /*In your output, under ronaldo.goalAgainst, ayern has been added, 
try replacing bayern with an empty string, and see it's output and also replace goalAgainst with something else,
 the more you manipulate the function, the better you understand */

/* EXPLAINING THE CONDISTIONAL STATEMENT
-If the value is blank, delete the property,

- Else If the properties is goal against, check the record.player.property; If it exists, it should be equal to itself,
otherwise add an empty array.
-It exists i.e goalAgainst , so we push an values into the end of the array,

-Else when the properties is not goalAgainst, then we just set the properties to equal the value.
*/
