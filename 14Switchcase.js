//Switch case can be used in place of chained if and else statement
/*
A switch statement tests a value and can have many case statements which define various possible values
*/
function switchCase(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }
}
switchCase(7);

/*Means if the value passed in day is 1, print Monday, and if the value passed is 2, print Tuesday
If the value passed is 3, print Wednesday, and so on.
THIS METHOD USES THE STRICT OPERATOR === , so 1 and "1" are not the same
*/

//Break means we are at the end of the case statement, if you do not add a break statement, it will just run all the codes automatically
//The default is like the else in an if-else statement, if all cases are false, then run the default

/*
Switch case with multiple identical option statements
*/

function identicalCase(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("Weekday");
      break;
    case 6:
    case 7:
      console.log("Weekend");
      break;
    default:
      console.log("Invalid day");
  }
}
identicalCase(5);

//Return Boolean from a function
function isLess(x, y) {
  return x > y;
}
console.log(isLess(7, 9));
//Returns false because 7 is not greater than 9

//Return early pattern from Functions
