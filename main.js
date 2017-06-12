// var btn1 = document.querySelectorAll(".row-button");
var numZero = document.querySelector('#zero')
var numOne = document.querySelector('#one');
var numTwo = document.querySelector('#two');
var numThree = document.querySelector('#three');
var numFour = document.querySelector('#four');
var numFive = document.querySelector('#five');
var numSix = document.querySelector('#six');
var numSeven = document.querySelector('#seven');
var numEight = document.querySelector('#eight');
var numNine = document.querySelector('#nine');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var clear = document.querySelector('#clear');
var answerZone = document.querySelector('#info');
// btn1.addEventListener('click', fun1);
numZero.addEventListener('click', fun1);
numOne.addEventListener('click', fun1);
numTwo.addEventListener('click', fun1);
numThree.addEventListener('click', fun1);
numFour.addEventListener('click', fun1);
numFive.addEventListener('click', fun1);
numSix.addEventListener('click', fun1);
numSeven.addEventListener('click', fun1);
numEight.addEventListener('click', fun1);
numNine.addEventListener('click', fun1);
plus.addEventListener('click', fun1);
minus.addEventListener('click', fun1);
multiply.addEventListener('click', fun1);
divide.addEventListener('click', fun1);
clear.addEventListener('click', fun1);
console.log(event);
var calculations = [];
var buttonValues = { zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9};
var buttonValueClear = {clear:""};


function runCalculations() {
  var calcuValue = 0;
  let id = event.srcElement.id
  for (let i = 0; i < calculations.length; i++) {
    //If Operators (not a number)
    // if ( calculuations[i] === 'plus') {
    //   let number = calculuations[i - 1]; //number
    //   console.log(event);
    // }
  }
}
function fun1() {
  let id = event.srcElement.id;
  if (buttonValues[id] > -1) {
    return answerZone.textContent += buttonValues[id];


  } else{
      calculations.push(answerZone.textContent);
      calculations.push(id);

      console.log(calculations);
      runCalculations();
  }

 // plus:'+', minus:'-', multiply:'*', divide:'/'
}



// for (let i = 0; i < btnList.length; i++) {
//   let btn = btnList[i];

// id === 'zero' || id === 'one' || id === 'two' || id === 'three' || id === 'four' || id === 'five' || id === 'six' || id === 'seven' || id === 'eight' || id === 'nine'





// onClick = 'calculator.stage'
// var btnList = document.querySelectorAll(".row-button");
// var info = document.querySelector(".stage");
// var memoryValue = 0; // The current
// var currentValue = ""; // What the user just entered
// var currentOperator = ""; //Operator that was pressed
//
//
// for (let i = 0; i < btnList.length; i++) {
//   let btn = btnList[i];
//
//   btn.addEventListener("click", calculate);
// }
// // If press button and its a number
//   // Check for current operator, if then save new value to currentValue
//   // if operator save operator
//
// function calculate(event) {
//   let id = event.srcElement.id;
//   console.log(event);
//   let buttonValues = { zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9};
//   //If its a Number
//   if(buttonValues > "-1"){
//     currentValue = currentValue + buttonValues[id];
//
//   //If its a an operator
//   } else{
//
//     if(id === 'add'){
//       //Operator Not blank
//       currentOperator = "add";
//       console.log(currentOperator);
//     }
//
//
//   }
//   // calculatorValue = add(calculatorValue, buttonValues[id]);
//   info.stage = currentValue; //string
//
// }
// //add, subtract, multiply, divide, equals, clear
//
// function add(num1, num2) {
//   return num1 + num2;
// }
//
// function subtract(num1, num2) {
//   return num1 - num2;
// }
//
// function multiply(num1, num2) {
//   return num1 * num2;
// }
//
// function divide(num1, num2) {
//   return num1 / num2;
// }

  // btn = ["", 7, 8, 9, "", 4, 5, 6, "", 1, 2, 3, "", 0, "", "", ""];
  // console.log("you clicked button number " + btn[i]);
