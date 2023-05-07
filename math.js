let num1;
let num2;
let operator = '';
let displayNum = '';
let operatorPressed = false;

const screen = document.getElementById('screen');
const numKeys = document.getElementsByClassName('number');
const clearKey = document.getElementById('clear');
const oppKeys = document.getElementsByClassName('opp');
const equalKey = document.getElementById('equals');

for (i of numKeys) {
    i.addEventListener('click', function() {
      updateScreen(this.textContent);
      operatorPressed = false;
    });
  }

for (i of oppKeys) {
    i.addEventListener('click', function() {
    if (operator == ''){
        num1 = parseFloat(screen.textContent);
        operator = this.textContent;
        displayNum = '';
        operatorPressed = true;
    } else {
        if(operatorPressed){
            operator = this.textContent;
        } else {
            equals();
            num1 = parseFloat(screen.textContent);
            operator = this.textContent;
            displayNum = '';
        }
    }});
  }

clearKey.addEventListener('click', () => reset());
equalKey.addEventListener('click', () => {
    if(!operatorPressed){
        equals(); 
        operator = '';
    }
});

function reset(){
    displayNum = '';
    operator = '';
    screen.textContent = 0;
}

function updateScreen(num){
    if(this.textContent == 0 && num == 0){
        return;
    } else if(displayNum.length > 15){
        screen.textContent = parseFloat(displayNum).toExponential(10);
    } else {
        displayNum += num;
        screen.textContent = displayNum;
    }

}

function equals(){
    if(num1 && operator != ''){
        num2 = parseFloat(displayNum);
        displayNum = roundResult(operate(num1, num2, operator));
        screen.textContent = displayNum;
        num1 = parseFloat(displayNum);
        displayNum = '';
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    if(operator == '+'){
        return add(num1, num2);
    }
    if(operator == '-'){
        return subtract(num1, num2);
    }
    if(operator == '*'){
        return multiply(num1, num2);
    }
    if(operator == '/'){
        return divide(num1, num2);
    }
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000
  }