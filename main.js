const btnC = document.querySelector("#clear");
btnC.addEventListener('click', event);

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', event);

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', event);

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', event);

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


  for (let i = 0; i < btnList.length; i++) {
    let btn = btnList[i];

    btn.addEventListener("click", function(event){
      btn = ["", 7, 8, 9, "", 4, 5, 6, "", 1, 2, 3, "", 0, "", "", ""];
      console.log("you clicked button number " + btn[i]);
      console.log(event);

  })

  }
