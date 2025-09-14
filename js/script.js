// operation control: stored as strings for easier concatenation 
let number1 = '';
let operator;
let number2 = '';

function operate(num1, num2, op) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// math operations
function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 = num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 == 0 ? 'Nice try.' : num1 / num2;
}

// handle digit entry
function handleDigit(digit) {
    if (!operator) {
        number1 += digit;
        updateDisplay(number1);
    } else {
        number2 += digit;
        updateDisplay(number2);
    }
}

// update display
function updateDisplay(num) {
    display = document.querySelector('#display');
    display.textContent = num;
}

// buttons event listener
buttonBox = document.querySelector('#button-box');
buttonBox.addEventListener('click', (event) => {
    const targetId = event.target.id;
    const digits = ['0','1','2','3','4','5','6','7','8','9'];
    const operators = ['+','-','*','/'];

    if (digits.includes(targetId)) {
        console.log('nr', targetId);
        handleDigit(targetId);
    } else if (operators.includes(targetId)) {
        console.log('operator', targetId)
    } else {
        console.log('choice not implemented')
    }

    // IF clicked is nr
    // ELSE IF clicked is operant
    // ELSE 
    // SWITCH ID, all other cases



    // IF class is number
    //  IF (!operator (is not null or undefined))
    //      add to first nr
    //   ELSE
    //      add to second nr
});