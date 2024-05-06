//Arrays [] allows you to store pieces of data in one place

var arr = ["Apple", 2, true];

//Nested Arrays or Multi dimensional arrays
//When the elements of an array is another array

var nestedArr = [1, 2, [3, 4], 5, "yes", true];

//Access arrays data with Index
var indexArr = [1, 2, 3, 5];
console.log(indexArr[2]); //output = 3, which is the 3rd element in our array

//Modify AArray datas with indexes
var indexArr = [1, 2, 3, 5];
indexArr[2] = 4;
console.log(indexArr); //output = [1, 2, 4, 5]

//Access Multi-Dimensional Arrays with indexes
var multiArray = [[1, 2, 3], "Javascript", true, [4, 5, 6]];
var multiArrayData = multiArray[0][0];
console.log(multiArrayData);
//Output is 1 because the first item in the array at index 0 is [1,2,3] and its first index is 1

var multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var multiArrData = multiArr[3][0][1];
console.log(multiArrData);

/*It means the index 3 of the main array, which is [ [10,11,12], 13, 14] the first data of it, which is  the array of [10,11,12]
 and finally it's index 1 which is 11  */

/*Manipulate Array with push
push function adds an element to the end of an array*/

var arr = [1, 2, 3, 4, 5];
arr.push(4, 5, "added");
console.log(arr);
//output [1,2,3,4,5,"added"]

/*Manipulate Array with pop
pop function removes the last element of an array*/
var arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); //Output [1,2,3,4]
