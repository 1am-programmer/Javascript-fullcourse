//FOR LOOP
/*
The most common type of loop in Javascript

It takes in three Parameters seperated by a semi-colon
- The initialization
- The condition
- The Final expression
in that order

The initialization happens before any code inside the loop runs, 
then the condition; once it evaluates to false, we break out of the loop, 
the expression ; this is what we do at the end of each iteration
*/
var arr = [];
for (let index = 0; index < 10; index++) {
  arr.push(index);
}
console.log(arr);

/*
initialization => First index is 0,

condition => Then the loop checks if index is less than 10, if yes,

expression => then index increments by 1, on first iteration, it is 0, then 0 + 1 = 1

And it keeps looping until the last integer less than 10 is gotten
*/

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let index = 1; index < arr2.length; index++) {
  const element = arr2[index];
  console.log(element);
}
console.log(arr2);
/*
An array of 1-8, whose length is 8, and index of 0 - 7
in the for loop,
- initailization => index = 1 , 

- condition => index < arr2.length, this loop keeps running until the last integer less than 8 is achieved

- expression => index++ for every iteration of the loop, increment index by 1

- const element = arr2[index]  which means element is reinitializing the items of the array to the values printed in the index ++ i.e 1-7
- and its been printed out in the console.log(element);

- console.log(arr2)=> finally print out the arr 
*/

/*

 var arr2= [1, 2, 3, 4, 5, 6, 7, 8];: This line initializes an array arr with values from 1 to 8.
The for loop iterates over each element in the arr array.
let index = 0;: Initialize a variable index with value 0.
index < arr.length;: The loop continues as long as index is less than the length of the array arr.
index++: Increment index by 1 in each iteration.
const element = arr2[index];: Inside the loop, it retrieves the element at the current index in the array arr and assigns it to a constant variable element.
console.log(element);: It prints each element of arr to the console.
After the loop finishes, console.log(arr2); prints the entire array arr to the console.
So, when you run this code, you'll see each element of the arr array printed to the console individually, followed by the entire array printed again
*/
