// Variables declared with var, let and const
var myVar = "This is my var variable"; // var variable
let myLet = 28; // let variable
const myConst = [1, 2, 3]; // const variable

// Named function
function namedFunction() {
    console.log("This is a named function.");
}
namedFunction();

// Anonymous function assigned to a variable
let anonymousFunction = function() {
    console.log("This is an anonymous function.");
};
anonymousFunction();

// Built-in function (example: parseInt)
let numberString = "456";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);

// If/else conditional statement
let condition = false;
if (condition) {
    console.log("Condition is true.");
} else {
    console.log("Condition is false.");
}

// Switch conditional statement
let season = 6;
switch (season) {
    case 1:
        console.log("Spring");
        break;
    case 2:
        console.log("Summer");
        break;
    case 3:
        console.log("Autumn");
        break;
    case 4:
        console.log("Winter");
    default:
        console.log("Summer");
}

// Arrays of different data types
let stringArray = ["football", "rugby", "cricket"]; // array of strings
let numberArray = [1, 2, 3, 4, 5]; // array of numbers
let mixedArray = ["text", 28, false]; // array of mixed data types

// Loop through an array
for (let i = 0; i < stringArray.length; i++) {
    console.log("String array element:", stringArray[i]);
}

// Creating and using objects
let person = {
    firstName: "John",
    lastName: "Smith",
    age: 42,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log("Person's first name:", person.firstName); // Access firstName property
console.log("Person's full name:", person.fullName()); // Call fullName method