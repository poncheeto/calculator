//Reference items to be mainpulated within DOM
const display = document.querySelector('#text');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('#clear');
let value = '';
let counter = 0;

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

//Event listener for number/operator button presses
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'button':
                switch (true) {
                    case counter == 0:
                        display.textContent = button.textContent;
                        value = button.textContent;
                        counter++;
                        break;
                    case counter >= 1 && counter != 9:
                        let fullDisplay = display.textContent += button.textContent;
                        value += button.textContent;
                        counter++
                        break;
                    case counter == 9 && counter >= 1:
                        display.textContent = fullDisplay;
                        value = button.textContent;
                }
                break;

            case 'op':
            case 'plus':
                // Create variables to store numbers and operation
                let num1, num2, operator;

                num1 = value;
                switch (true) {
                    case button.textContent == '&plus':
                        operator = 'add';
                        return operator;
                    case button.textContent == '&minus':
                        operator = 'subtract';
                        return operator;
                    case button.textContent == '&times':
                        operator = 'multiply';
                        return operator;
                    case button.textContent == '&divide':
                        operator = '&divide';
                        
                    }
                    num2 = 3;
            // case 'equal':
            //     operate(operator, num1, num2);
            //     console.log(operate);
        }

    })
});