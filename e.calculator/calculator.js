// calculator
const inputForm = document.querySelector("#inputForm");
const inputBox = document.querySelector(".inputBox");
const btnPlus = document.querySelector(".btnPlus");
const btnResult = document.querySelector(".btnResult");

let resultArr = [];
let defaultArr = [];

let num = 0;

btnPlus.addEventListener("click", (e) => {
    e.preventDefault();

    num++;
    // console.log("+");
    let inputValue = inputBox.value;
    // inputValue += "";

    // console.log(defaultArr);
    console.log(num);
    resultArr.push(inputValue);

    if (num > 1) {
        // console.log("1보다 큼");
        inputValue = "";
        // console.log(resultArr);
    }
    // console.log(inputValue);
    console.log(resultArr);

    // let resultArr2 = resultArr.map((idx, val) => {
    //     console.log(idx);
    //     console.log(val);
    // });

    // if (resultArr.length > 1) {
    //     console.log("개수가 많아짐");
    // } else {
    //     console.log(resultArr[1]);
    // }
    // resultArr = "";
    // console.log(resultArr);
    // console.log(resultArr[1] == "");

    /*
    
    더하기
    1. 값을 배열에 넣는다.
    2. 배열에 넣을때는 다 따로따로 넣는다.
    3. 배열에 넣은 값을 더한다.
    4. 넣은 배열은 +를 누르면 초기화되고 새로운 값을 받는다.
    5. 결과를 출력한다.
    
    
    */
});

btnResult.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("=");
});

console.log("클릭했습니다!");
