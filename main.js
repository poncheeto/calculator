//Reference items to be mainpulated within DOM
const display = document.querySelector('#text');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('#clear');

let displayValue = 0;
let initialValue = null;
let operation = null;
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

const operate = (operator, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
};

// Create fucntion to update display
const updateDisplay = () => {
    //display.textContent = displayValue;
    switch (true) {
        case counter == 0:
            display.textContent = displayValue;
            counter++;
            break;
        case counter >= 1 && counter != 9:
            fullDisplay = display.textContent = displayValue;
            counter++
            break;
        case counter == 9 && counter >= 1:
            display.textContent = fullDisplay;
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
        displayValue = operate(operation, initialValue, displayValue);
        updateDisplay();
    }
    operation = newOperation;
    initialValue = displayValue;
    clickFirstOperand = true;
    displayValue = 0;
}

// Create function for equals button press
const enterEquals = () => {
    if (operation && initialValue) {
        displayValue = operate(operation, initialValue, displayValue);
        clickFirstOperand = false;
        updateDisplay();
    }
}

// Create function for the clear button
const clear = () => {
    displayValue = 0;
    operation = null;
    initialValue = null;
    hasFirstOperand = false;
    updateDisplay();
}

//Event listener for number/operator button presses
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case '7':
            case '8':
            case '9':
            case '4':
            case '5':
            case '6':
            case '1':
            case '2':
            case '3':
            case '0':
            case '.':
                enterDigit(e.target.id);
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                enterOperator(e.target.id)
                break;
            case 'equal':
                enterEquals();
                break;
            case 'clear':
                clear();
                break;
            case 'MU':
            //TODO
            case 'percent':
            //TODO
        }
    })
});