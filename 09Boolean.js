//There are only two boolean values, which are true and false

/*Using conditional logic with if statements
An if statement is used to make decision in codes
*/

function howTrue(isTrue) {
  if (isTrue) {
    return "Yes it's true";
  }
  return "No it's not";
}
console.log(howTrue(true));

//Output Yes it's true

/*
Comaprison operator with equality operator ==
A single equal sign is an assignment operator
*/

function testEqual(num) {
  if (num == 10) {
    return true;
  }
  return "not equal";
}

console.log(testEqual(12));
//Output not equal because the value in num is 12, which is not equal to 10

/*
Comparison operator with strict equality operator ===
A double equal sign is a comparison operator
A single equal sign is an assignment operator

=== Checks the data types, and if they are not of the same datatypes, it returns false

IMPORTANT THING TO NOTE IS, == can change the data type, if it is a number with a string , but === will not for example
*/

function testStrict(num) {
  if (num === 10) {
    return true;
  }
  return "not equal";
}
console.log(10);
//Output true because the value in num is 10, which is equal to 10

// checking 10 and "10" using == and === operators"
function testStrictEqual(num) {
  if (num === 10) {
    return true;
  }
  return "not equal";
}
console.log(testStrictEqual("10"));
//Output not equal

function doubleEqual(num) {
  if (num == "10") {
    return true;
  }
  return false;
}
console.log(doubleEqual(10));
//Output true

/*
here 10 is a number and "10" is a string
==  returns true because it overlooks the string, but focuses on the number
=== returns not equal because it does not overlook the string
*/
