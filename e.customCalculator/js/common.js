// 기본값
const defaultValue = {
    defaultScreen: 0,
};

/* -----------------------------------------------------
누른 값을 저장한다.
첫번쨰 배열의 값이 있다면 초기화하고 새로 넣는다.
----------------------------------------------------- */

// 버튼클릭
const btnNumClick = document.querySelectorAll(".num");
const btnOperatorClick = document.querySelectorAll(".operator");

// 결과값
let step0 = null;
let step1 = [];
let step2 = null;
let step3 = [];
let step4 = null;
let resultAll = null;

// 화면표시
const calculatorScreen = document.querySelector(".calculatorScreen");
calculatorScreen.value = defaultValue.defaultScreen;
console.log(calculatorScreen.value);

//유사배열을 배열로 변경
const btnNumClickEvent = Array.from(btnNumClick);
// console.log(btnNumClickEvent);
// console.log(typeof btnNumClickEvent);

// 각 숫자버튼 클릭
let btnNum = btnNumClickEvent.map((item) => {
    return item.addEventListener("click", () => {
        let btnValue = item.value;
        step0 = btnValue;
        step1.push(step0);
        // calculatorScreen.value = step1.join(",");
        let step1Change = step1.join("");
        calculatorScreen.value = step1Change;
        // console.log(step1);
        // console.log(step1.join(","));
        // console.log(step1.join(""));
        // console.log(step1Change);
        // console.log(step1);
        // console.log(step2);
        // console.log(step3);

        if (step1[0] == 0) {
            console.log("0으로 시작");
            step1[0] = "";
        }
        // console.log(step1);
        // console.log(step4);

        // 0으로 시작하면 제거한다.
        //
        //
        //
        //
        //
        //
        //
    });
});

//유사배열을 배열로 변경
const btnOperatorClickEvent = Array.from(btnOperatorClick);
// console.log(btnOperatorClickEvent);
// console.log(typeof btnOperatorClickEvent);

// 연산자 클릭
let Operator = btnOperatorClickEvent.map((item) => {
    return item.addEventListener("click", () => {
        let btnOperator = item.value;
        step2 = step1.join("");
        step3.push(step2);
        step1.length = 0; // 배열 초기화

        console.log(step1);
        console.log(step2);
        console.log(step3);
        console.log(step4);

        if (btnOperator == "+") {
            resultAll = step3.reduce((a, b) => Number(a) + Number(b));
            calculatorScreen.value = resultAll;

            console.log(resultAll);
        }
        if (btnOperator == "=") {
            resultAll = step3.reduce((a, b) => Number(a) + Number(b));
            calculatorScreen.value = resultAll;
        }
        if (btnOperator == "ac") {
            calculatorScreen.value = 0;
            step0 = null;
            step1.length = 0;
            step2 = null;
            step3.length = 0;
            step4 = null;
        }
    });
});
