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
const deleteKey = document.getElementById('delete');

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
        operatorPressed = false;
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
deleteKey.addEventListener('click', () => {
    if(displayNum.length <= 1){
        displayNum = '';
        screen.textContent = '0';
        return;
    } else{
        displayNum = displayNum.slice(0,-1);
    }
    screen.textContent = displayNum;
})

function reset(){
    displayNum = '';
    operator = '';
    screen.textContent = 0;
    enableOpps();
}

function updateScreen(num){
    if(screen.textContent == '0' && num == 0){
        return;
    } else if(displayNum.length > 8){
        screen.textContent = parseFloat(displayNum).toExponential(5);
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
        num2 = parseFloat(screen.textContent);
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
    return parseFloat(num1 * num2).toExponential(5);
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
    if(operator == '×'){
        return multiply(num1, num2);
    }
    if(operator == '÷'){
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
window.onkeydown = function(e){
    let pressedKey = e.key;
    let choice;
    switch(pressedKey){
        case '0':
            choice = document.getElementById('zero');
            choice.click();
            break;
        case '1':
            choice = document.getElementById('1');
            choice.click();
            break;
        case '2':
            choice = document.getElementById('2');
            choice.click();
            break;
        case '3':
            choice = document.getElementById('3');
            choice.click();
            break;
        case '4':
            choice = document.getElementById('4');
            choice.click();
            break;
        case '5':
            choice = document.getElementById('5');
            choice.click();
            break;
        case '6':
            choice = document.getElementById('6');
            choice.click();
            break;
        case '7':
            choice = document.getElementById('7');
            choice.click();
            break;
        case '8':
            choice = document.getElementById('8');
            choice.click();
            break;
        case '9':
            choice = document.getElementById('9');
            choice.click();
            break;
        case '.':
            choice = document.getElementById('decimal');
            choice.click();
            break;
        case '+':
            choice = document.getElementById('+');
            choice.click();
            break;
        case '-':
            choice = document.getElementById('-');
            choice.click();
            break;
        case '*':
            choice = document.getElementById('multiply');
            choice.click();
            break;
        case '/':
            choice = document.getElementById('divide');
            choice.click();
            break;
        case 'Enter':
            e.preventDefault();
            choice = document.getElementById('equals');
            choice.click();
            break;
        case '=':
            choice = document.getElementById('equals');
            choice.click();
            break;
        case 'c':
            choice = document.getElementById('clear');
            choice.click();
            break;
        case 'Backspace':
            choice = document.getElementById('delete');
            choice.click();
            break;
    }
}