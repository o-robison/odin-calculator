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
    if(parseInt(e.target.id)==NaN) {
        if(e.target.id==="clear") clear();
        else setOperator(e.target.id);
    }
    else setNumber(e.target.id);
    return;
}
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", buttonHandler);