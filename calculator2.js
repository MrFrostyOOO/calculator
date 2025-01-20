const display = document.getElementById("display");
const secDisplay = document.getElementById("secDisplay");

function takeInput(input) {
  if (display.value == "Math Error" || display.value == "Syntax Error") {
    display.value = "";
  }

  if (display.value.length < 15) {
    display.value += input;
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  if (display.value != "") {
    display.value = "";
  } else if (secDisplay != "") {
    secDisplay.value = "";
  }
}

function calculate() {
  try {
    if (/\/\/|\*\//.test(display.value)) {
      display.value = "Syntax Error";
    } else if (
      display.value != "Math Error" &&
      display.value != "Syntax Error"
    ) {
      let result = eval(display.value);
      secDisplay.value = display.value;

      if (isNaN(result) && display.value != "") {
        display.value = "Math Error";
      } else if (display.value != "") {
        result = result.toString();
        if (result.includes(".")) {
          display.value = parseFloat(result).toFixed(2);
        } else {
          display.value = result;
        }
      }
    }
  } catch (Error) {
    display.value = "Syntax Error";
  }
}
