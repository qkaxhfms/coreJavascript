// 기본값
const defaultValue = {
    defaultScreen: 0,
    operCheck: false,
    numberCheck: true,
    equlasCheck: true,
};

// 단계
let stepAll = {
    step0: null,
    step1: [],
    step2: null,
    step3: [],
    step4: null,
};

// 버튼클릭
// const btnNumClick = document.querySelectorAll('.num');
// const btnOperatorClick = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('.btn');
const buttonNumbers = document.querySelectorAll('.btnNum');

// 화면표시
const calculatorScreen = document.querySelector('.calculatorScreen');
calculatorScreen.value = defaultValue.defaultScreen;
console.log(calculatorScreen.value);

const buttonChange = Array.from(buttons);
let button = buttonChange.map((button) => {
    return button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'number':
                numberClick();
                break;
            case 'operator':
                operatorClick();
                break;
            case 'ac':
                clearAll();
                break;
            case 'equals':
                equalsAll();
                break;
        }
    });
});

let current = '';
const numberClick = (currentValue) => {
    console.log('숫자표시');

    // console.log(currentValue);
};

const resultAll = () => {
    console.log('결과표시');
};

const operatorClick = () => {
    console.log('계산');
    // console.log(operValue);
};

const clearAll = () => {
    console.log('초기화');
};

const equalsAll = () => {
    console.log('계산결과');
};
