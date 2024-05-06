//Manipulate Arrays with shift
/*
Similar to the pop function, just that it removes the first element of an array
 */
var arr = [1, 2, 3, 4];
arr.shift();
console.log(arr); //Output [2,3,4]

//Manipulate Arrays with unshift
/*
Similar to the push function, just that it adds the first element of an array
 */
var arr = [1, 2, 3, 4];
arr.unshift(0);
console.log(arr); //Output [0,1,2,3,4]

//Practice Nested array, push function, pop and shift/unshift functions
var shopList = [
  ["Milk", 2],
  ["Bread", 3],
  ["Eggs", 12],
  ["Cheese", 1],
];
shopList.pop();
console.log(shopList);
//We removed cheese from the list

shopList.push(["Butter", 2]);
console.log(shopList);
//Now we've added butter to the list , therefore replacing cheese

shopList.unshift(["Chocolate", 5]);
console.log(shopList);
//Added chocolate to the list

shopList.shift();
console.log(shopList);
//Removed chocolate from the list
