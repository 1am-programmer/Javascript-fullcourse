//Escape sequences in a string
// \': single quote
// \": double quote
// \\: backslash
// \n: new line
// \t: tab, 8 spaces
// \b : backspace
// \r : carriage return
// \f : form feed

//String Concatenation

//Plus operator
var myName = "I am " + "Javascript";
console.log(myName); // I am Javascript

// Plus equal operator
var myName = "I am ";
myName += "Javascript";
console.log(myName);

//Concatenating strings with variables
var myName = "I am ";
var myAge = myName + 25;

console.log(myAge); //I am 25

//Appending variables to strings
var anAdjective = "Awesome!";
var word = "Javacript is ";
word += anAdjective;
console.log(word); //Output Javascript is awesome

//Length of a string
var job = "Programmer";
console.log(job.length); //Output 10,  there are 10 characters in the word "p r o g r a m m e r"

//Bracket Notation to find a string first character
// using their index
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//Bracket Notation to find a string second character
var secondLetterOfFirstName = "";
var firstName = "Ada";
secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

//Bracket Notation to find a string last character
var lastname = "Javascript";
var lastLetterOfLastName = lastname[lastname.length - 1];
console.log(lastLetterOfLastName); //output t

//String Immutability
var hey = "Jello World";
hey[0] = "H";
//This will throw an error, because strings are immutable, so it is best you do it as
hey = "Hello world";
