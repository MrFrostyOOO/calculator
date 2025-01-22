// Declaring Global variables

const display = document.getElementById("display");
const secDisplay = document.getElementById("secDisplay");
let bufferInput = "";

function takeInput(input) {
  if (display.value == "Math Error" || display.value == "Syntax Error") {
    bufferInput= "";
    display.value = "";
  }
  if(display.value.length < 15) {
    bufferInput += input;
    display.value = bufferInput.replace(/\*\*/g, "^");
  }
}

function backspace() { 
  display.value = display.value.slice(0, -1);
  bufferInput = display.value.replace(/\^/g, "**"); //taking the last character from the buffer while making sure no error occurs
}

function clearDisplay() {
  if (display.value != "") {
    bufferInput = "";
    display.value = "";
  } else if (secDisplay != "") {
    secDisplay.value = "";
  }
}

function calculate() {
  try {
    if (/\/\/|\*\//.test(bufferInput)) { //checking for syntax error that do not occur with eval function
      display.value = "Syntax Error";
    } else if (
      display.value != "Math Error" &&  //checking that the expression can proceed further
      display.value != "Syntax Error"
    ) {
      let result = eval(bufferInput); //storing the anser in a result variable
      secDisplay.value = bufferInput.replace(/\*\*/g, "^")+" = "+eval(display.value); //showing expression in secDisplay

      if (isNaN(result) && display.value != "") { //checking if the answer can be shown
        display.value = "Math Error"; //showing math error if it is not a proper answer
      } else if (display.value != "") { //checking that the expression is not just empty string
        result = result.toString();
        if (result.includes(".")) { //checking if the answer is a floating value or not
          display.value = parseFloat(result).toFixed(2); //shortning the answer and displaying if float
        } else {
          display.value = result; //displaying the answer if integer
        }
      }
    }
  } catch (Error) {
    display.value = "Syntax Error"; //showing syntax error if the eval function causes any error
  }
}
