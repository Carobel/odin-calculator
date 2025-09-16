// operation control: stored as strings for easier concatenation 
let number1 = '';
let operator;
let number2 = '';
let result;


const CLICK_SOUND = new Audio('bin/clicker.mp3')
const BUTTON_SOUND = new Audio('bin/button.mp3')
const MEOW_SOUND = new Audio('bin/meow.mp3')
let sound = CLICK_SOUND;

// convert globals to strings and carry out operation
function operate(num1, op, num2) {
    // cast to Number
    num1 = Number(num1);
    num2 = Number(num2);

    let result;
    switch (op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }

    // round if float
    if (!Number.isInteger(result)) {
        result = round(result);
    }

    // cast to String and return
    return String(result);
}

// basic math operations
function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 == 0 ? 'Nice try.' : num1 / num2;
}

// rounds the nr 
function round(float) {
    return float.toFixed(2);
}

// handle digit entry (or decimal point)
function handleDigit(digit) {
    const limit = 15;
    
    // if digit is pressed after displaying result, wipe and start anew
    if (result) {
        clear();
    }
    // add digit to correct variable
    if (!operator) {
        if (number1.length <= limit) {
            number1 += digit;
            updateDisplay(number1);
        }

    } else {
        if (number2.length <= limit) {
            number2 += digit;
            updateDisplay(number2);
        }
    }
}

// handle operator entry
function handleOperator(op) {
    // if full equation has already been entered, evaluate it before updating operator
    if (operator && number2) {
        res = operate(number1, operator, number2);
        clear();
        handleDigit(res);
        operator = op;
    // handle unary minus before one of the nrs
    } else if (op == '-' && !number1) {
        number1 += op;
        updateDisplay(number1);
    } else if (op == '-' && number1 && operator) {
        number2 += op;
        updateDisplay(number2);
    // handle normal case where operator is put between the two numbers
    } else {
        operator = op;
    }
    
}

// handle = entry
function handleEquals() {
    if (number1 && operator && number2) {
        result = operate(number1, operator, number2);
        updateDisplay(result);
    }
}

// update display
function updateDisplay(num) {
    display = document.querySelector('#display');
    display.textContent = num;
}

// clear everything
function clear() {
    number1 = '';
    operator = null;
    number2 = '';
    result = null;
    updateDisplay('');
}

// handle button clicks
buttonBox = document.querySelector('#button-box');
buttonBox.addEventListener('click', (event) => {
    const targetId = event.target.id;
    const digits = ['0','1','2','3','4','5','6','7','8','9'];
    const operators = ['+','-','*','/'];

    if (digits.includes(targetId)) {
        handleDigit(targetId);
    } else if (operators.includes(targetId)) {
        handleOperator(targetId);
    } else {
        switch (targetId) {
            case '=':
                handleEquals();
                break;
            case 'clear':
                clear();
                break;
            case 'sound1':
                sound = CLICK_SOUND
                break;
            case 'sound2':
                sound = BUTTON_SOUND
                break;
            case 'sound3':
                sound = MEOW_SOUND
                break;
            case 'dot':
                handleDigit('.');
                break;
        }
    }

    playClickSound();

});

//Play clicking sound
function playClickSound() {
    sound.play();
}