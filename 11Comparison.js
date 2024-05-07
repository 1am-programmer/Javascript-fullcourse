/*Comparison with Logical Operator*/

//Using greater than
function testGreaterThan(num) {
  if (num > 10) {
    return "above 10";
  }
}
console.log(testGreaterThan(15));
//Output above 10

//Using greater than or equalto  >=
function test(num) {
  if (num >= 10) {
    return true;
  }
  return false;
}
console.log(test(15));

//Using less than < operator
function lessThan(num) {
  if (num < 10) {
    return "less than 10";
  }
  return "False! above 10";
}
console.log(lessThan(15));

//Using less than or equal to <= operator
function less(num) {
  if (num <= 10) {
    return true;
  }
  return false;
}
console.log(less(10));

//The AND operator
/*
This is a away of avoiding nested if statements
for example
*/

function nestedIF(num) {
  if (num > 10) {
    if (num < 100) {
      return "Yes";
    }
  }
  return "No";
}
//If num is greater than 10, but less than 100, return yes

console.log(nestedIF(20));
/*Output is yes, because 20 is greater than 10, but less than 100,
This is a bit confusing, so using the and operator && is preferable */

function andOperator(num) {
  if (num < 50 && num > 30) {
    return "Yes num is less than 50, but greater than 30";
  }
  return "No it's not";
}
console.log(andOperator(31));

/*
NOTE IN THE AND OPERATOR, BOTH THE LEFT HAND SIDE AND THE RIGHT HAND SIDE MUST BE TRUE */
