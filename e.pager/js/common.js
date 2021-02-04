// common
const removeAll = () => {
    btnStepAll.forEach(function (val) {
        let currentItem = val;
        currentItem.classList.remove("active");
    });
};

const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const btnStepAll = document.querySelectorAll(".btnStep");
let btnTotal = btnStepAll.length;
let current = document.querySelector(".btnStep.active");
btnTotal = btnTotal - 1;

let count = "";
let result = "";

for (let i = 0; i < btnStepAll.length; i++) {
    btnStepAll[i].addEventListener("click", function () {
        removeAll();
        btnStepAll[i].classList.add("active");
    });
}

btnNext.addEventListener("click", function () {
    // all
    removeAll();

    count++;
    result = count - 1;
    btnStepAll[result].classList.add("active");
});

/*

1. 버튼을 누른다.
2. 한칸씩 옆으로 이동한다.
3. 
4. 

*/
