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
const decimalKey = document.getElementById('decimal');

for (i of numKeys) {
    i.addEventListener('click', function() {
      updateScreen(this.textContent);
      operatorPressed = false;
      enableOpps();
    });
  }

for (i of oppKeys) {
    i.addEventListener('click', function() {
        enableOpps();
    if (operator == ''){
        num1 = parseFloat(screen.textContent);
        operator = this.textContent;
        displayNum = '';
        operatorPressed = true;
        this.disabled = true;
    } else {
        if(operatorPressed){
            operator = this.textContent;
            this.disabled = true;
        } else if (!operatorPressed && displayNum ==''){
            num1 = parseFloat(screen.textContent);
            operator = this.textContent;
            displayNum = '';
            operatorPressed = true;
            this.disabled = true;
        } else {
            equals();
            num1 = parseFloat(screen.textContent);
            operator = this.textContent;
            displayNum = '';
            this.disabled = true;
        }
    }});
  }

clearKey.addEventListener('click', () => reset());
equalKey.addEventListener('click', () => {
    enableOpps();
    if(screen.textContent == '0.'){
        displayNum = 0;
        screen.textContent = displayNum;
    }
    if(!operatorPressed){
        equals(); 
        operator = '';
    }
});
decimalKey.addEventListener('click', () => {
    if(screen.textContent == '0'){
        displayNum = '0.';
        screen.textContent = displayNum;
    } else if(screen.textContent.includes('.')){
        return;
    } else if(displayNum == ''){
        updateScreen('0.');
    } else {
        updateScreen('.');
    }
});

function reset(){
    displayNum = '';
    operator = '';
    screen.textContent = 0;
    enableOpps();
}

function updateScreen(num){
    if(screen.textContent == 0 && num == 0){
        return;
    } else if(displayNum.length > 15){
        screen.textContent = parseFloat(displayNum).toExponential(10);
    } else {
        displayNum += num;
        screen.textContent = displayNum;
    }

}

function equals(){
    if(screen.textContent == '0.'){
        screen.textContent = 0;
        displayNum = '';
    }
    if(typeof num1 === 'number' && operator != ''){
        num2 = parseFloat(displayNum);
        displayNum = round(operate(num1, num2, operator));
        screen.textContent = displayNum;
        num1 = parseFloat(displayNum);
        displayNum = '';
    }
    if(!num1 && !num2){
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
    return parseFloat(num1 * num2).toExponential(10);
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

function round(num){
    return Math.round(num * 1000000)/1000000;
}

function enableOpps(){
    for (button of oppKeys){
        button.disabled = false;
    }
}