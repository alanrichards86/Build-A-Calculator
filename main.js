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
var equal = document.querySelector('#equals');
var period = document.querySelector('#period');
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
period.addEventListener('click', fun1);
equal.addEventListener('click', fun1);
clear.addEventListener('click', fun1);

let calcOpp =[];
let calculations = [];
let clearIt = {clear:""};
let evaluate = {equals:'='};
let operators = {plus:'+', minus:'-', multiply:'*', divide:'/'};
let buttonValues = {zero:'0', one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, period:'.'};



function fun1() {
  let id = event.srcElement.id;

  if (buttonValues[id]) {
    console.log(event);
    // calculations.push(buttonValues[id]);
    console.log(calculations);
    return answerZone.textContent += buttonValues[id];



  } else if (operators[id]) {
      // calculations.push(buttonValues[id]);
      calcOpp.push(operators[id]);
      calculations.push(answerZone.innerHTML);
      answerZone.textContent += operators[id];
      console.log('hi');
      console.log(calcOpp);
      console.log(calculations);

  }else if (evaluate[id]) {
    let num1 = parseInt(calculations[0]);
    let opp = calcOpp[id];
    let num2= parseInt(calculations[1]);
    // return answerZone.textContent = num1 + num2;
    console.log('hello');

        // NESTED IF STATEMENTS HERE TO CHECK WHAT OPPERATION BEING INPUTED
    for (let n = 0; n < calcOpp.length; n++) {
        if (calcOpp[n] == "*") {
          console.log('MULTIPLY');
          return answerZone.textContent = num1 * num2;
        }else if (calcOpp[n] == "/") {
          console.log('DIVIDE');
          return answerZone.textContent = num1 / num2;
        }else if (calcOpp[n] == "+") {
          console.log('ADD');
          return answerZone.textContent = num1 + num2;
        }else if (calcOpp[n] == "-") {
          console.log('MINUS');
          return answerZone.textContent = num1 - num2;
        }

      }

  }  else {
      answerZone.textContent = "";
      console.log('hi');
      console.log(event);
      calcOpp = [];
      calculations = [];
      console.log(calcOpp);
      console.log(calculations);
  }
  
