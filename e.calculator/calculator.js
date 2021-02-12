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

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    // 현재 값이 '0'이면 'displayValue'를 덮어쓰거나 여기에 추가

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue =
            displayValue === "0" ? digit : displayValue + digit;
    }
    // console.log(calculator);
}

function inputDemical(dot) {
    // 연산자를 입력한 후 소숫점을 클릭하면 두번째의 일부가 아닌 첫밴째 피연산자에 추가된다.
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0.";
        calculator.waitingForSecondOperand = false;
        return;
    }

    if (!calculator.displayValue.includes(dot)) {
        //소숫점이 포함되어 있지 않다면
        calculator.displayValue += dot;
    }
}

//연산자 처리
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // 10+2 하려다가 갑자기 10-2로바꿀때 연산자 무시가 필요해서 추가
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        // 속성에 연산자가 추가되었는지 확인
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    // console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === "+") {
        return firstOperand + secondOperand;
    } else if (operator === "-") {
        return firstOperand - secondOperand;
    } else if (operator === "*") {
        return firstOperand * secondOperand;
    } else if (operator === "/") {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

// 창 리셋
function resetCalculator() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

// 창 최신화
function updateDisplay() {
    // console.log("업데이트");
    const display = document.querySelector(".calculatorScreen");
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector(".calculatorKeys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches("button")) {
        return;
    }

    switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(value);
            break;
        case ".":
            inputDecimal(value);
            break;
        case "clearAll":
            resetCalculator();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }

    updateDisplay();
});
