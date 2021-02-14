// 버튼
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const btnStepAll = document.querySelectorAll(".btnStep");

let currentNum = btnStepAll[0];
currentNum.classList.add("active");
console.log(currentNum);

const stepNext = () => {
    // console.log("다음으로 이동");
    for (let k = 0; k < btnStepAll.length; k++) {
        btnStepAll[k].classList.remove("active");
    }
    if (currentNum.classList.contains("btnStep")) {
        // if (currentNum) {
        currentNum.nextElementSibling.classList.add("active");
        currentNum = currentNum.nextElementSibling;
        // }
    }
    if (btnNext.classList.contains("active")) {
        btnNext.classList.remove("active");
    }
};
const stepPrev = () => {
    // console.log("이전으로 이동");
    for (let k = 0; k < btnStepAll.length; k++) {
        btnStepAll[k].classList.remove("active");
    }
    if (currentNum.classList.contains("btnStep")) {
        // if (currentNum) {
        currentNum.previousElementSibling.classList.add("active");
        currentNum = currentNum.previousElementSibling;
        // }
    }
    if (btnPrev.classList.contains("active")) {
        btnPrev.classList.remove("active");
    }
};

for (let i = 0; i < btnStepAll.length; i++) {
    const stepCurrent = (e) => {
        for (let k = 0; k < btnStepAll.length; k++) {
            btnStepAll[k].classList.remove("active");
        }
        btnStepAll[i].classList.add("active");
        currentNum = e.target; //현재값
        console.log(currentNum);
    };
    btnStepAll[i].addEventListener("click", stepCurrent);
}

btnNext.addEventListener("click", stepNext);
btnPrev.addEventListener("click", stepPrev);
