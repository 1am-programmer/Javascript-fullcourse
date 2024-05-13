//Switching place of variables using destructuring
let first = 60,
  second = 20;

(() => {
  "use strict";
  [first, second] = [second, first];
})();
console.log(first, second); //Output 20 60

//Destructing assignment with the rest operator
let arr = [1, 2, 3, 4, 5, 6];
let [a, b, ...c] = arr; //We represented 1,2 with a and b

console.log(c); //And then printed ...c representing the rest of the array, aside a and b

//Using Destructuring assignment to pass an object as a function's parameter
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
};

const half = (function () {
  "use strict";
  return function half({ max, min }) {
    return max + min / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));
/*Instead of using the stat as the parameter of the function, which would have returned the whole data,
we desructured it, selecting only the min and max datas in the object
 */
