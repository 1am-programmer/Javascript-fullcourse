//Exported files
export const CAPITALISE_LETTERS = (str) => str.toUpperCase();
//Takes a string, and converts all words to uppercase

//Types of export

/*
Named export and default export are two different ways to export values (functions, objects, variables, etc.) from a module in JavaScript.

1. **Named Export**:
   - With named exports, you can export multiple values from a module by giving each value a name.
    These exports are explicit, meaning you need to specify which values you want to export.
   - You can have multiple named exports in a single module.
   - Named exports are imported using the same name you used when exporting them.*/

// Exporting multiple values using named exports
export const PI = 3.14;
export function double(num) {
  return num * 2;
}

/*
2. **Default Export**:
   - With default exports, you export only one value from a module, and it doesn't have to be explicitly named.
    You can think of it as the primary export of the module.
   - You can only have one default export per module.
   - Default exports are imported using any name of your choice.
   */

// Exporting a single value using default export
const greet = (name) => `Hello, ${name}!`;
export default greet;

/*
In summary, named exports allow you to export multiple values from a module with specific names, 
while default export allows you to export a single value as the default, which can be imported using any name.
*/
