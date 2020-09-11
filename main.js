//Reference items to be mainpulated within DOM
const buttons = document.querySelector('button'); 


// Create operator functions to perform maths

// Add
const add = (num1, num2) => num1 + num2;

// Subtract

const subtract = (num1, num2) => num1 - num2;

// Multiply 

const multiply = (num1, num2) => num1 * num2;

// Divide

const divide = (num1, num2) => num1 / num2;

//Create operate function to call operator functions

const operate = (operator, num1 , num2) => operator(num1, num2);

// Create function to populate display
const getInput = ()

