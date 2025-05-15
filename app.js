console.log("Calculator App...");

let display = document.getElementById("display");
let expression = "";

function appendNumber(number){
    expression = expression + number;
    display.innerText = expression;
}

function appendOperator(operator){
    expression = expression + " " + operator + " ";
    display.innerText = expression;
}

function calculate(){
    try {
        expression = eval(expression);
        display.innerText = expression;
    } catch (error){
        display.innerText = "Error!"
    }
}

function clearDisplay(){
    expression = "";
    display.innerText = "";
}
