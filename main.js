// const btnC = document.querySelector("#clear");
// btnC.addEventListener('click', event);
//
// const btn7 = document.querySelector('#seven');
// btn7.addEventListener('click', event);
//
// const btn8 = document.querySelector('#eight');
// btn8.addEventListener('click', event);
//
// const btn9 = document.querySelector('#nine');
// btn9.addEventListener('click', event);

// const btn4 = document.querySelector(#seven)
// const btn5 = document.querySelector(#seven)
// const btn6 = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)
// const sevenBtn = document.querySelector(#seven)

var btnList = document.querySelectorAll(".row-button");
var info = document.querySelector(".textContent");
var memoryValue = 0; // The current
var currentValue = ""; // What the user just entered
var currentOperator = "";

for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("click", calculate);
}

// If press button and its a number
  // Check for current operator, if then save new value to currentValue;
  // if operator save operator


function calculate(event) {
  let id = event.srcElement.id;
  let buttonValues = { zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9};
  console.log(buttonValues[id]);
  
  //If its a Number
  if(buttonValues > -1){
    currentValue = currentValue + buttonValues[id];


  //If its a an operator
  }else{

    if(id === 'add'){
      //Operator Not blank
      currentOperator = "add";
    }

  }
  // calculatorValue = add(calculatorValue, buttonValues[id]);
  info.textContent = currentValue; //string

}
//add, subtract, multiply, divide, equals, clear

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

  // btn = ["", 7, 8, 9, "", 4, 5, 6, "", 1, 2, 3, "", 0, "", "", ""];
  // console.log("you clicked button number " + btn[i]);
