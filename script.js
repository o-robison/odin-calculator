let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;

const firstNumDisplay = document.querySelector("#firstNumber");
const secondNumDisplay = document.querySelector("#secondNumber");
const operatorDisplay = document.querySelector("#operator");

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

function operate(a, b, op) {
    switch (op) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
    return;
}

function updateDisplay() {
    if(firstNumber) firstNumDisplay.innerHTML = firstNumber;
    if(operator) operatorDisplay.innerHTML = operator;
    if(secondNumber) secondNumDisplay.innerHTML = secondNumber;
    return;
}

function setNumber(number) {
    if(!firstNumber){
        firstNumber = number;
    }
    else {
        secondNumber = number;
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
    firstNumber = secondNumber = undefined;
    operator = undefined;
    return;
}

function buttonHandler(e) {
    switch (e.target.id) {
        case '1':
            setNumber(1);
            break;
        case '2':
            setNumber(2);
            break;
        case '3':
            setNumber(3);
            break;
        case '4':
            setNumber(4);
            break;
        case '5':
            setNumber(5);
            break;
        case '6':
            setNumber(6);
            break;
        case '7':
            setNumber(7);
            break;
        case '8':
            setNumber(8);
            break;
        case '9':
            setNumber(9);
            break;
        case '0':
            setNumber(0);
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