/*

1. 계산기 뼈대 만들기
2. 버튼 클릭시 input에 텍스트 추가
3. ac 기능 구현
4. 계산 기능 구현
5. 예외 처리

*/

class Calculator {
    // calculator 클래스 만들고 인스턴스 생성

    constructor(displayElement) {
        // 1. 숫자 버튼을 누를때마다 displayContent 속성에 추가되고
        this.displayElement = displayElement;
        this.operatorCheck = true; // 11. 연산자 선택 여부 저장
        this.equalsCheck = false;
        this.clear(); // 6. constructor에서도 clear 메서드를 호출하도록 수정
    }

    // 2. input에도 표시되도록 appendNumber 추가
    appendNumber(number) {
        if (this.equalsCheck) {
            this.displayContent = number;
            this.equalsCheck = false; // 12. 숫자 입력시 false
        } else {
            this.displayContent += number;
        }
        this.operatorCheck = false;
    }

    // 4. 연산자 클릭시 호출되도록 연결
    appendOperator(operator) {
        if (this.operatorCheck) return false; // 13. operatorCheck값이 true면 함수 빠져나가기
        if (this.equalsCheck) this.equalsCheck = false;
        this.displayContent += operator;
        return (this.operatorCheck = true);
    }

    // 2. input에도 표시되도록 updateDispaly 추가
    updateDisplay() {
        this.displayElement.value = this.displayContent;
    }

    // 5. 초기화를 위한 clear메서드 추가
    clear() {
        this.displayContent = '';
        this.displayElement.value = 0;
        this.operatorCheck = true;
    }

    //8. 클래서에 compute 클래스를 추가하고 eval함수를 사용해서 계산 기능 구현
    compute() {
        if (this.operatorCheck) return;
        this.displayContent = eval(
            // 7. eval함수를 이용하여 문자로 표현된 자바스크립트 코드를 실행하기
            this.displayContent.replace('\u00D7', '*').replace('\u00F7', '/')
            // 10. × -> *로, ÷ -> / 로 변경해준 후 계산
        );
        this.equalsCheck = true;
    }
}

const buttons = document.querySelectorAll('.btn');
const displayElement = document.querySelector('.calculatorScreen');

const calculator = new Calculator(displayElement);
// displayElement 값 Calculator에 전달
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // switch문으로 data-type에 따라 버튼 구분
        switch (button.dataset.type) {
            case 'operator':
                if (calculator.appendOperator(button.innerText)) {
                    calculator.updateDisplay();
                }
                break;
            case 'ac':
                calculator.clear();
                break;
            case 'equals':
                // 9. 버튼 클릭 시 compute 메서드를 호출하도록 변경
                calculator.compute();
                calculator.updateDisplay();
                break;
            default:
                // 3. switch문의 default에서 추가한 메서드 호출
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
                break;
        }
    });
});
