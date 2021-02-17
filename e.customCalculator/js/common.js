// 기본값
const defaultValue = {
    defaultScreen: 0,
};

// 버튼클릭
const btnNumClick = document.querySelectorAll('.num');
const btnOperatorClick = document.querySelectorAll('.operator');

// 결과값
let step0 = null;
let step1 = [];
let step2 = null;
let step3 = [];
let step4 = null;
let resultAll = null;

// 화면표시
const calculatorScreen = document.querySelector('.calculatorScreen');
calculatorScreen.value = defaultValue.defaultScreen;
console.log(calculatorScreen.value);

//유사배열을 배열로 변경
const btnNumClickEvent = Array.from(btnNumClick);

// 각 숫자버튼 클릭
let btnNum = btnNumClickEvent.map((item) => {
    return item.addEventListener('click', () => {
        let btnValue = item.value;
        step0 = btnValue;
        step1.push(step0);
        let step1Change = step1.join('');
        calculatorScreen.value = step1Change;

        if (step1[0] === 0) {
            step1[0] = '';
        }
    });
});

//유사배열을 배열로 변경
const btnOperatorClickEvent = Array.from(btnOperatorClick);

// 연산자 클릭
let Operator = btnOperatorClickEvent.map((item) => {
    return item.addEventListener('click', () => {
        let btnOperator = item.value;
        step2 = step1.join('');
        step3.push(step2);
        step1.length = 0; // 배열 초기화

        if (btnOperator == 'ac') {
            calculatorScreen.value = 0;
            step0 = null;
            step1.length = 0;
            step2 = null;
            step3.length = 0;
            step4 = null;
        }

        if (btnOperator == '+') {
            resultAll = step3.reduce((a, b) => Number(a) + Number(b));
            calculatorScreen.value = resultAll;
        }

        if (btnOperator == '-') {
            console.log('빼기');
        }

        if (btnOperator == '=') {
            resultAll = step3.reduce((a, b) => Number(a) + Number(b));
            calculatorScreen.value = resultAll;
        }
    });
});
