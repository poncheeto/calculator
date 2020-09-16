//Reference items to be mainpulated within DOM
const display = document.querySelector('#text');
const buttons = document.querySelectorAll('.button'); 
const clearBtn = document.querySelector('#clear');

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
const displayInput = (e) => {
    const input = document.createElement('p');
    input.classList.add('userInput');
    input.textContent='9';
    display.appendChild(input);
};

//Event listener for number/operator button presses
buttons.forEach((button) => {
    button.addEventListener('click', displayInput)
    });