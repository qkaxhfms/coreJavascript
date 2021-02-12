// 버튼
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const btnStepAll = document.querySelectorAll(".btnStep");

let currentNum;

const stepNext = () => {
    console.log("다음으로 이동");
};
const stepPrev = () => {
    console.log("이전으로 이동");
};

for (let i = 0; i < btnStepAll.length; i++) {
    const stepCurrent = () => {
        for (let k = 0; k < btnStepAll.length; k++) {
            btnStepAll[k].classList.remove("active");
        }
        btnStepAll[i].classList.add("active");
    };
    btnStepAll[i].addEventListener("click", stepCurrent);
}

btnNext.addEventListener("click", stepNext);
btnPrev.addEventListener("click", stepPrev);

/*

기본
1. 버튼을 누른다.
2. 누른 버튼이 활성화 된다.

다음
1. 다음 버튼을 누른다.
2. btnStep에서 순차적으로 활성화된다.

중요
전 버튼을 기억하고 다음을 활성화 해야함

*/
