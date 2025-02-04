let firstNumber = '';
let secondNumber = '';
let operator = undefined;
let result = '';

const firstNumDisplay = document.querySelector("#firstNumber");
const secondNumDisplay = document.querySelector("#secondNumber");
const operatorDisplay = document.querySelector("#operator");
const resultDisplay = document.querySelector("#result");

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate() {
    switch (operator) {
        case '+':
            result = add(parseInt(firstNumber), parseInt(secondNumber));
            break;
        case '-':
            result = subtract(parseInt(firstNumber), parseInt(secondNumber));
            break;
        case '*':
            result = multiply(parseInt(firstNumber), parseInt(secondNumber));
            break;
        case '/':
            result = divide(parseInt(firstNumber), parseInt(secondNumber));
            break;
    }
    updateDisplay();
    return;
}

function updateDisplay() {
    if(firstNumber) firstNumDisplay.innerHTML = firstNumber;
    else firstNumDisplay.innerHTML = '';
    if(operator) operatorDisplay.innerHTML = operator;
    else operatorDisplay.innerHTML = '';
    if(secondNumber) secondNumDisplay.innerHTML = secondNumber;
    else secondNumDisplay.innerHTML = '';
    if(result) resultDisplay.innerHTML = result;
    else resultDisplay.innerHTML = '';
    return;
}

function setNumber(strNumber) {
    if(!operator){
        firstNumber += strNumber;
    }
    else {
        secondNumber += strNumber;
    }
    updateDisplay();
    return; 
}

function setOperator(op) {
    operator = op;
    updateDisplay();
    return;
}

function clear() {
    firstNumber = secondNumber = result = '';
    operator = undefined;
    updateDisplay();
    return;
}

function buttonHandler(e) {
    switch (e.target.id) {
        case '1':
            setNumber('1');
            break;
        case '2':
            setNumber('2');
            break;
        case '3':
            setNumber('3');
            break;
        case '4':
            setNumber('4');
            break;
        case '5':
            setNumber('5');
            break;
        case '6':
            setNumber('6');
            break;
        case '7':
            setNumber('7');
            break;
        case '8':
            setNumber('8');
            break;
        case '9':
            setNumber('9');
            break;
        case '0':
            setNumber('0');
            break;
        case '+':
            setOperator("+");
            break;
        case '-':
            setOperator("-");
            break;
        case '*':
            setOperator("*");
            break;
        case '/':
            setOperator("/");
            break;
        case '=':
            operate();
            break;
        case 'clear':
            clear();
            break;
    }
}
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", buttonHandler);