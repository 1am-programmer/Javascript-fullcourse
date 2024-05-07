/*Practice */
var careers = [
  "Programmer",
  "Doctor",
  "Scientist",
  "Engineer",
  "Sports Athlete",
];

/*Here we use age and salary to determine your career */

function yourCareer(age, salary) {
  if (age < 25 && salary > 180000) {
    return careers[0];
  } else if (age > 40 && salary > 170000) {
    return careers[1];
  } else if (age > 45 && salary > 200000) {
    return careers[2];
  } else if (age > 55 && salary > 100000) {
    return careers[3];
  } else if (age < 40 && salary > 300000) {
    return careers[4];
  } else {
    return "I am still a student";
  }
}

console.log(yourCareer(30, 350000));
//Output Athlete
/*
Because i am less than 30 years of and i earn over 300000
Feel free to manipulate the data to understand better
*/
