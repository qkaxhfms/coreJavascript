/* 계산기 */
/*

1. 클릭을 한다. -> 그 값이 console에 찍힌다.
2. 클릭한 값이 updateDisplay에 찍힌다.

*/

const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(valueEach) {
    console.log("각 항목 값 출력");

    const { displayValue, waitingForSecondOperand } = calculator;
    // 현재 값이 '0'이면 'displayValue'를 덮어쓰거나 여기에 추가

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue =
            displayValue === "0" ? valueEach : displayValue + valueEach;
    }
    console.log(calculator);
}

function inputDemical(dot) {
    if (!calculator.displayValue.includes(dot)) {
        //소숫점이 포함되어 있지 않다면
        calculator.displayValue += dot;
    }
}
//연산자 처리
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue); // 문자열 내용을 변환, 부동소수점 번호로

    // firstOperand가 null이고, inputValue가 있는지 확인합니다. , Nan 값이 아닙니다.
    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
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
