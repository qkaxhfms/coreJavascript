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
const btnValues = document.querySelectorAll(".btnValue");
const calculatorScreen = document.querySelector(".calculatorScreen");
calculatorScreen.value = defaultValue.calculatorScreen; // calculatorScreen에 value 값 출력

for (const button of btnValues) {
    button.addEventListener("click", function () {
        let btnNumTrans = Number(this.value); //누르면 값 추출해서 number로 변경
        console.log(btnNumTrans);
        // console.log((defaultValue.calculatorScreen = btnNumTrans));
        calculatorScreen.value = btnNumTrans;
    });
}
const btnOperators = document.querySelectorAll(".operator");
for (const button of btnOperators) {
    button.addEventListener("click", function () {
        let btnOperator = this.value;
        console.log(btnOperator);
    });
}
