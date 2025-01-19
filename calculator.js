let equation = "";

function takeInput(userInput) {
  if (equation.length < 16) {
    let input = document.getElementById("display");
    equation = equation + userInput;
    input.value = equation.replace(/\*\*/g, "^");
    // console.log("userInput:"+userInput)
    // console.log("equation:"+equation)
  }
}

function calculate() {
  let secDisplay = document.getElementById("secDisplay");
  secDisplay.value = equation.replace(/\*\*/g, "^");
  try {
    if (isNaN(eval(equation))) {
      equation = "";
      let input = document.getElementById("display");
      input.value = "Math Error";
    } else {
      let input = document.getElementById("display");
      equation = eval(equation);
      equation = equation.toString();
      if (equation.includes('.') && (equation.split('.')[1].length + equation.split('.')[0].length)>15 ){
        equation = parseFloat(equation).toFixed(15 - equation.split('.')[0].length);
        input.value = equation;
        equation= parseFloat(equation).toFixed(2);

      } else {
        input.value = equation;
      }
      
      // console.log(equation);
      // console.log(equation.length);
    }
  } catch (error) {
    equation = "";
    let input = document.getElementById("display");
    input.value = "Syntax Error";
    // console.log("Error");
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
