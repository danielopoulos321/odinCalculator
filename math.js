let num1;
let num2;
let operator = '';
let displayNum = '';

const screen = document.getElementById('screen');
const numKeys = document.getElementsByClassName('number');
const clearKey = document.getElementById('clear');
const oppKeys = document.getElementsByClassName('opp');
const equalKey = document.getElementById('equals');

for (i of numKeys) {
    i.addEventListener('click', function() {
      updateScreen(this.textContent);
    });
  }

for (i of oppKeys) {
    i.addEventListener('click', function() {
    if (operator == ''){
        num1 = parseInt(displayNum);
        operator = this.textContent;
        displayNum = '';
    } else {
        equals();
        num1 = parseInt(displayNum);
        operator = this.textContent;
        displayNum = '';
    }});
  }

clearKey.addEventListener('click', () => reset());
equalKey.addEventListener('click', () => {
    equals(); 
    operator = ''
});

function reset(){
    displayNum = '';
    operator = '';
    screen.textContent = 0;
}

function updateScreen(num){
    if(displayNum == 0 && num == 0){
        return;
    } else {
        displayNum += num;
        screen.textContent = displayNum;
    }

}

function equals(){
    if(num1 && operator != ''){
        num2 = parseInt(displayNum);
        displayNum = operate(num1, num2, operator);
        screen.textContent = displayNum;
        num1 = parseInt(displayNum);
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