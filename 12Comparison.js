//The OR operator ||
function nestedIF(num) {
  if (num > 10) {
    return "Greater than 10";
  }
  if (num < 20) {
    return "Less than 20";
  }
}
console.log(nestedIF(15));
//Output Greater than 10
// it is better to use the Or operator

function orOPerator(num) {
  if (num > 10 || num < 7) {
    return true;
  }
}
console.log(orOPerator(6));
//In the Or opertaor, only one side needs to be true

// ELSE STATEMENT
/*
Returns the opposite of the if statement
*/
function ifElse(num) {
  if (num > 10) {
    return "Greater than 10";
  } else {
    return "Less than 10";
  }
}
console.log(ifElse(5));
//Output less than 10

//  ELSE IF STATEMENT
/*
    The else if statement is used to check a condition
    if the first condition is false 
        then the second condition is checked
          if the second condition is false
             then the third condition is checked
              if the third condition is false
                then the fourth condition is checked*/
//For the neatness of your code, else if is not always needed

function elseIfstatement(str) {
  if (str === "Hello") {
    return "Hello World";
  } else if (str != "Hello") {
    return " Hey World";
  } else {
    return "Goodbye";
  }
}

console.log(elseIfstatement("Hi"));
//Output Hey world, because the value of str (hi) is not equal to hello

//Chaining if and else statements
