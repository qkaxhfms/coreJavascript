// common
const btnPrev = document.querySelector(".btnPrev");
let btnStepAll = document.querySelectorAll(".btnStep");
const btnNext = document.querySelector(".btnNext");

let count = "";
btnNext.addEventListener("click", function () {
    // all
    // count = 0;
    btnStepAll.forEach(function (val) {
        let currentItem = val;
        currentItem.classList.remove("active");
    });
    // click
    count++;

    let result = count - 1;
    btnStepAll[result].classList.add("active");
    console.log(result);
    // return result;
    // return result;
    // console.log(this);
});

count = 5;
btnPrev.addEventListener("click", function () {
    // all
    btnStepAll.forEach(function (val, el) {
        let currentItem = val;
        currentItem.classList.remove("active");
    });
    count--;
    let result = count;
    btnStepAll[result].classList.add("active");
    console.log(result);
    // count--;
    // result = count + 1;
    // btnStepAll[result].classList.add("active");
});

/*
1. 버튼을 누른다.
2. 한칸씩 옆으로 이동한다.
3. 뒤로 누르면 뒤로 한칸씩 이동한다.
4. 
*/
