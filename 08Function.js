//Stand in line
/*
A cue is an abstract data structure, where items are kept in order..
New items are added to the back of the cue and old items are taken off from the cue,
|| eg. the shift and push functions
 */

function nextInLine(arr, item) {
  arr.push(item); //This adds a number to the last element in the array
  return arr.shift(); //And this returns the new array without the popped off item
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//You can add an item to the array that is passed in. And then it's going to return the first item on the list
//JSON.stringify is a way to turn array into strings
