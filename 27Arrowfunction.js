/*
Arrow functions are shorter ways to represents function
And are wriiten this way =()=>{
    //code
}

In Most cases, arrow functions don't need return keyword, if the code is just a single line
 */
//Anonymous arror functions
var anon = () => {
  return new Date().getDate();
};

//Arrow functions with parameters
var anon = (a, b) => a + b;

console.log(anon(1, 2)); //Output 3

//Higher order arrow functions

/*
When one function takes another function as an argument, that is a good time for an arrow function 
Higher other functions involve map,filter,reduce
*/

const numberArr = [4, 5.6, -9.8, 3.14, 0, 1, 2];

// This function computes the square of only the positive integers in the array
const squareNum = (arr) => {
  const int = arr
    .filter(
      (num) => Number.isInteger(num) && num > 0
    ) /*Filters throught the array, and selects only integers, && integers greater than 0 which are [4, 1, 2] */
    .map((x) => x * x); //For each item in the array, multiply it by itself to get their squares

  return int;
};
const result = squareNum(numberArr);
console.log(result); //Output [16,1 ,4]
