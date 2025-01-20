let equation = "";

function takeInput(userInput) {
  if (equation.length < 16) {
    let input = document.getElementById("display");
    equation = equation + userInput;
    input.value = equation.replace(/\*\*/g, "^");
  }
}

function calculate() {
  // store values
  let secDisplay = document.getElementById("secDisplay");
  let input = document.getElementById("display");

  // store equation to secondary display
  secDisplay.value = equation.replace(/\*\*/g, "^");

  let answer = eval(equation);

  // for catching errors
  try {
    // checking if the answer is a number or not
    if(equation==""){
      equation="";
    }else if (isNaN(answer)) {

      equation = "";
      input.value = "Math Error";

    } else {

      equation = answer.toString();
      if (
        equation.includes(".") &&
        equation.split(".")[1].length + equation.split(".")[0].length > 15
      ) {
        equation = answer.toFixed(
          15 - equation.split(".")[0].length
        );
        input.value = equation;
        equation = answer.toFixed(2);
      } else {
        input.value = answer;
      }
    }
  } catch (error) {
    equation = "";
    let input = document.getElementById("display");
    input.value = "Syntax Error";
  }
}

function clearDisplay() {
  if (equation == "") {
    let secDisplay = document.getElementById("secDisplay");
    secDisplay.value = "";
  } else {
    let input = document.getElementById("display");
    equation = "";
    input.value = equation;
    console.log("equation:" + equation);
  }
}

function backspace() {
  let input = document.getElementById("display");
  equation = equation.slice(0, -1);
  input.value = equation;
}
