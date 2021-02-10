/* 계산기 */
/*

1. 클릭을 한다. -> 그 값이 console에 찍힌다.
2. 클릭한 값이 updateDisplay에 찍힌다.

*/

const calculator = {
    displayValue: "0",
    // firstOperand: null,
    // waitingForSecondOperand: false,
    // operator: null,
};

function inputDigit() {
    console.log("결과값출력");
}

function updateDisplay() {
    console.log("업데이트");
    const display = document.querySelector(".calculatorScreen");
    display.value = calculator.displayValue;
}

const btnValues = document.querySelectorAll(".btnValue");

for (i = 0; i < btnValues.length; i++) {
    btnValues[i].addEventListener("click", function () {
        console.log(this.value);
        // return this.value;

        // let calculatorValue = calculatorScreen.value;
        // let this.value = push.calculatorValue;
        // console.log(this.value)
        inputDigit();
        updateDisplay();
    });
}

// let resultArr = [];
// let defaultArr = [];

// let num = 0;

// btnPlus.addEventListener("click", function () {
//     console.log("sdhjgsdlbdf");
//     let calculatorValue = calculatorScreen.value;
//     resultArr.push(calculatorValue);
//     console.log(resultArr);
// });

// console.log(btnValues[0]);
// console.log(btnValues[1]);
// console.log(btnValues[2]);
// console.log(btnValues[3]);
// console.log(btnValues.length);

// console.log(updateDisplay());
