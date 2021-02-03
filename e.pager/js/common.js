// common
const btnPrev = document.querySelector(".btnPrev");
let btnStepAll = document.querySelectorAll(".btnStep");
const btnNext = document.querySelector(".btnNext");

let count = "";
let result = "";

btnNext.addEventListener("click", function () {
    // all
    btnStepAll.forEach(function (val) {
        let currentItem = val;
        currentItem.classList.remove("active");
    });
    // click
    count++;
    result = count - 1;
    btnStepAll[result].classList.add("active");
    console.log(result);
});

for (let i = 0; i < btnStepAll.length; i++) {
    btnStepAll[i].addEventListener("click", function () {
        btnStepAll.forEach(function (val) {
            let currentItem = val;
            currentItem.classList.remove("active");
        });
        btnStepAll[i].classList.add("active");
    });
}

/*
1. 버튼을 누른다.
2. 한칸씩 옆으로 이동한다.
3. 
4. 
*/
