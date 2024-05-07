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
