const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        const value = button.textContent;
        if(value === 'C'){
            currentInput = '';
            display.value = '';
            return
        }

        if(value === '='){
            try{
                const expression = currentInput.replace(/x/g, '*');
                const result = eval(expression);
                display.value = result;
                currentInput = result.toString();
                resultDisplayed = true
            } catch(e){
                display.value = 'Error';
                currentInput = '';
            }
            return
        }
        if(resultDisplayed && !isNaN(value)){
            currentInput = value;
            resultDisplayed = false;
        }
        else{
            currentInput += value;
        }
        display.value = currentInput;
    })
})