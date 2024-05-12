//Using the Rest operator with function parameters
/*  The rest operator allows you to create a function that takes a variable number of arguments */

const sum = (function () {
  return function sum(x, y, z) {
    const arg = [x, y, z];
    return arg.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); //Output 6
// while Using the rest operator

const sum2 = (function () {
  return function sum(...arg) {
    //  Converts everything passed in, into one array called arg, now we can have any number of arguments
    return arg.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum2(1, 2, 3)); //Output 6

//Spread operators
/*  The spread operator allows you to expand an array into a list of arguments. The spread operator looks just like a rest operator, "..."
But the rest parameter syntax allows you to represent an indefinite number of arguments as an array within a function.
While it spreads an already existing array
 */
