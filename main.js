//Reference items to be mainpulated within DOM
const display = document.querySelector('#text');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('#clear');
let result = '';
let displayValue = 0;
let counter = 0;
let clickFirstOperand = false;

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

const operate = (operator, num1, num2) => operator(num1, num2);

// Create fucntion to update display
const updateDisplay = () => {
    //display.textContent = displayValue;
    switch (true) {
        case counter == 0:
            display.textContent = displayValue;
            counter++;
            break;
        case counter >= 1 && counter != 9:
            let fullDisplay = display.textContent = displayValue;
            counter++
            break;
        case counter == 9 && counter >= 1:
            display.textContent = fullDisplay;
            break;
    }
}

// Create function to enter digit selections
const enterDigit = (digit) => {
    switch (true) {
        case displayValue === 0 || displayValue === undefined:
            displayValue = digit;
            break;
        case digit === '.':
        case !displayValue.indexOf('.'):
            displayValue += digit;
            break;
        default:
            displayValue += digit;
    }
    updateDisplay();
}

// Create function to enter operators
const enterOperator = (newOperation) => {
    if (clickFirstOperand) {
        displayValue = operate(operation, initalValue, displayValue);
        updateDisplay;
    }
    operation = newOperation;
    intitalValue = displayValue;
    clickFirstOperand = true;
    displayValue = 0;
}


//Event listener for number/operator button presses
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'button':
                enterDigit(e.target.innerHTML);
                break;
            case 'divide':  
            case 'multiply':
            case 'subtract':
            case 'add':
                enterOperator(e.target.id);
                break;
            case 'equal':
            case 'MU':
        }

    })
});