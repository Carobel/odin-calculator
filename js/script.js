// operation control: stored as strings for easier concatenation 
let number1 = '';
let operator;
let number2 = '';
let sound = true;
const CLICK_SOUND = new Audio('bin/clicker.mp3')

// convert globals to strings and carry out operation
function operate(num1, op, num2) {
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

// handle operator entry
function handleOperator(op) {
    // if full equation has already been entered, evaluate it before updating operator
    if (operator && number2) {
        const result = operate(number1, operator, number2);
        clear();
        handleDigit(result);
    }
    operator = op;
}

// handle = entry
function handleEquals() {
    if (number1 && operator && number2) {
        const result = operate(number1, operator, number2);
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
            case 'sound':
                sound = !sound;
                break;
        }
    }
        if (sound) {
        playClickSound();
    }
});

//Play clicking sound
function playClickSound() {
    CLICK_SOUND.play();
}