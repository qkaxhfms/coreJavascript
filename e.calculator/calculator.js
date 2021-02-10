/* 계산기 */
/*

1. 클릭을 한다. -> 그 값이 console에 찍힌다.
2. 클릭한 값이 updateDisplay에 찍힌다.

*/

const calculator = {
    displayValue: "0",
    // displayValue: "1",
};

function inputDigit(valueEach) {
    console.log("각 항목 값 출력");

    const { displayValue } = calculator;
    // 현재 값이 '0'이면 'displayValue'를 덮어쓰거나 여기에 추가

    calculator.displayValue =
        displayValue === "0" ? valueEach : displayValue + valueEach;
}

// 창 최신화
function updateDisplay() {
    // console.log("업데이트");
    const display = document.querySelector(".calculatorScreen");
    display.value = calculator.displayValue;
}
updateDisplay();

const btnValues = document.querySelectorAll(".btnValue");

for (i = 0; i < btnValues.length; i++) {
    btnValues[i].addEventListener("click", function () {
        let valueEach = this.value;
        // console.log(valueEach);
        // calculator.displayValue = valueEach;
        // console.log(calculator.displayValue);

        inputDigit(valueEach);
        updateDisplay();
    });
}

// btnPlus.addEventListener("click", function () {
//     console.log("sdhjgsdlbdf");
//     let calculatorValue = calculatorScreen.value;
//     resultArr.push(calculatorValue);
//     console.log(resultArr);
// });
