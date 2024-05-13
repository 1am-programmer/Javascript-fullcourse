/**
 * Import and Export:- You export code in one file and import it in another
 * Also it allows you import only certain functions from a file or only certain variables
 *
 *
 * To import we use the import statement
 * What we are importing , and
 * Where we are importing from

Change the file extension of your JavaScript file from .js to .mjs. This will indicate to Node.js that you're using ECMAScript modules.
 */
import { CAPITALISE_LETTERS } from "./35Export.mjs";

const useExportedFile = CAPITALISE_LETTERS("i am daniel");
console.log(useExportedFile);
//Output I AM DANIEL
//Here we import the function from an external file  and then makes use of it here

//How to import everything from a file
import * as everythingObj from "./35Export.mjs";
/**
 * Import * means everything in the file
 * Then you store it in an object, in our case, it is everythingObj
 */

// When importing named export
import { PI, double } from "./35Export.mjs";
console.log(PI); // Output: 3.14
console.log(double(5)); // Output: 10

// When importing default export

import defaultexport from "./35Export.mjs";
console.log(defaultexport("Daniel")); // Output: Hello, Daniel!
