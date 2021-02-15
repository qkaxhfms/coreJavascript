/*
1. 초기값 생성
2. 누른 값 calculatorScreen에 넣기
3. 연산 실행
*/

//초기값
const defaultValue = {
    calculatorScreen: 0,
    currentNum: 0,
};
const resultValue = [];
const btnValues = document.querySelectorAll(".btnValue");
const calculatorScreen = document.querySelector(".calculatorScreen");

// const result = () => {
//     console.log("계산");
//     console.log(defaultValue.calculatorScreen);
// };
// calculatorScreen.value = defaultValue.calculatorScreen; // calculatorScreen에 value 값 출력

for (const button of btnValues) {
    button.addEventListener("click", function () {
        let btnNumTrans = Number(this.value); //누르면 값 추출해서 number로 변경
        // console.log(btnNumTrans);
        // console.log((defaultValue.calculatorScreen = btnNumTrans));
        calculatorScreen.value = btnNumTrans;
        let result = calculatorScreen.value;
        // const result = resultValue.push(btnNumTrans);
        console.log(result);
    });
}
const btnOperators = document.querySelectorAll(".operator");
for (const button of btnOperators) {
    button.addEventListener("click", function () {
        let btnOperator = this.value;
        // console.log(btnOperator);
    });
}

// console.log(3 + 5);

/*

결합과정
1. 숫자를 누른다.
2. 배열에 담긴다.
3. 연산자를 누르면 합쳐져서 배열에 들어간다.
1~3번 값을 하나로 인식한다.

*/
