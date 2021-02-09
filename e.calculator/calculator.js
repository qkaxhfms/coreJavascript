const calculator = {
    displayValue: "0",
    firstOperand: null, // 첫번째 피연산자 저장
    waitingForSecondOperand: false, // 기본적으로 첫번째와 연산자가 모두 입력되었는지 확인
    operator: null, // 키 발현에 대한 연산자 저장
};

function inputDigit(digit) {
    const { displayValue } = calculator;

    calculator.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
}

function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.displayValue;
}

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        console.log("operator", target.value);
        return;
    }
    if (target.classList.contains("demical")) {
        console.log("demical", target.value);
        return;
    }
    if (target.classList.contains("all-clear")) {
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
