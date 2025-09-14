// operation control
let number1;
let numer2;
let operator;

function operate(num1, num2, op) {
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

console.log(operate(2,8,'+'))