// Declaring Global variables
const empty = "";
const display = document.getElementById("display");
const secDisplay = document.getElementById("secDisplay");

let bufferInput = empty;

function takeInput(input) {
  if (isDisplayingError()) {
    bufferInput = empty;
    display.value = empty;
  }
  if (display.value.length < 15) {
    bufferInput += input;
    display.value = bufferInput.replace(/\*\*/g, "^");
  }
}

function backspace() {
  if (isDisplayingError()) {
    bufferInput = empty;
    display.value = empty;
  }else{
    display.value = display.value.slice(0, -1);
    bufferInput = display.value.replace(/\^/g, "**");
  }
}

function Cclicked() {
  if (!displayIsEmpty()) {
    bufferInput = empty;
    display.value = empty;
  } else if (!secDisplayIsEmpty()) {
    secDisplay.value = empty;
  }
}

function displayAnswer(result) {
  result = result.toString();

  if (result.includes(".")) {
    bufferInput = parseFloat(result).toFixed(2);
    display.value = bufferInput;
  } else {
    bufferInput = result;
    display.value = result;
  }
}

function validate() {
  try {
    let result = eval(bufferInput);

    if (/\/\/|\*\//.test(bufferInput)) {
      displaySyntaxError();
    } else if ((isNaN(result) || !isFinite(result)) && !displayIsEmpty()) {
      displayMathError();
    } else if (!isDisplayingError() && !displayIsEmpty()) {
      displayEquationInSecDisplay();
      displayAnswer(result);
    }
  } catch (error) {
    displaySyntaxError();
  }
}

function displaySyntaxError() {
  display.value = "Syntax Error";
}

let displayMathError = () =>{ 
  display.value = "Math Error";
};

function displayEquationInSecDisplay() {
  secDisplay.value =
  bufferInput.replace(/\*\*/g, "^") + " = " + eval(display.value);
}

function displayIsEmpty() {
  if (display.value == empty) {
    return true;
  }else{
    return false;
  }
}

function secDisplayIsEmpty() {
  if (secDisplay.value == empty) {
    return true;
  }else{
    return false;
  }
}

function isDisplayingError() {
  if (display.value == "Math Error" || display.value == "Syntax Error") {
    return true;
  }
  else{
    return false;
  }
}
