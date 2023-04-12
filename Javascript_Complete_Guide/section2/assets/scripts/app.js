// alert('This works - but from app.js!');

// const keyword - Constant 
// variable declarations are done with "let"
// let userName = "Laura"
// camelCase recommended, python _ variable naming style not recommended
// can start with a $ or an _
// can contain a digit, but cannot start with a digit
// $ and _ are the only allowed special characters
// reserved keywords are not allowed (const, let )
// ending ; is generally optional
const baseResultValue = 0;  // Constant declaration
let calculatedResult;  // this is allowed, does not require initialization
let currentResult = baseResultValue; // can also initialize the variable
// however, a ";" is required to do something like this:
let newResult; let newerResult = 0;
// let whatWasCalculated = String(currentResult) + ' + 10 = '  // String cast is not required

let whatWasCalculated
let errorMessage = 'An error occured in function \n' + 
                    '<function name>';

if (currentResult === 0) {
    // whatWasCalculated = baseResultValue + ' + 10 = ';
    // Can also do this, akin to python print(f""), only works with the backtick
    whatWasCalculated = `${baseResultValue} + 10 = `;  
    // Backtick also allows breaking the string into multiple lines, other "" don't
    // whatWasCalculated = `${baseResultValue} 
    //
    //+ 10 = `;  
}
else {
    whatWasCalculated = currentResult + ' + 10 = ';
}

currentResult = currentResult + 10;

// outputResult is a function in vendor.js that takes 2 values
// outputResult(currentResult, ""); 
// outputResult(currentResult, errorMessage);
outputResult(currentResult, whatWasCalculated);

// Data types

// Numbers  2, -3, 22.956
// Strings  '' or "" or ``

// Assignment 1
// Create two variable, one for user input (any number) and one that holds no value
let userInput1 = 15;
let result;

// Set result to 18 plus userInput
result = 18 + userInput1;

// add three additional lines of code changing result again - by subtracting, multiplying and dividing
result = (result - 7) * 3 / 5;
alert(result);
alert(userInput1);