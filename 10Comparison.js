function compare(x, y) {
  if (x == y) {
    return "Equal";
  }
  return "Not equal";
}

console.log(compare(7, "7"));

//WHILE
function compareNum(x, y) {
  if (x === y) {
    return "Equal";
  }
  return "Not Equal cos of string";
}

console.log(compareNum(7, "7"));

/*Comparison with inequality operator !=  
! is a not operator, which means anything with an ! means opposite of it's literal meaning
!true mwans not true
!yes means no
*/

function notOperator(num) {
  if (num != 99) {
    return "true Not equal";
  }
  return "Equal";
}
console.log(notOperator(100));
//Output true not equal, because 100 is not equal to 99

function compare(x, y) {
  if (x != y) {
    return "Not equal";
  }
  return "Equal";
}
console.log(compare(7, "7"));
//Output equal because 7 is equal is "7" since it is not being compared by a === operator

/*
Not operator with a strict inequality operator  !== and it does not overlook strings too
*/

function strictNotOperator(num) {
  if (num !== 99) {
    return "Not equal because of string";
  }
  return "Equal";
}
console.log(strictNotOperator("99"));
