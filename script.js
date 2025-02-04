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
    if(!operator) return;
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
            if(parseInt(secondNumber)===0){
                alert("Don't divide by zero!");
                result = parseInt(firstNumber);
            }
            else result = divide(parseInt(firstNumber), parseInt(secondNumber));
            break;
    }
    firstNumber = result.toString();
    operator = undefined;
    secondNumber = '';
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
    if(isNaN(parseInt(e.target.id))) {
        if(e.target.id==="clear") clear();
        else if(e.target.id==='=') operate();
        else setOperator(e.target.id);
    }
    else setNumber(e.target.id);
    return;
}
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", buttonHandler);