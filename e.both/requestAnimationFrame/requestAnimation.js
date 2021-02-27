// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame

// 움직이는 박스
const btn = document.querySelector('button');
const box = document.querySelector('#box');
let duration = 2000;
let startTime;
let num = 0;

btn.onclick = function () {
    // requestAnimationFrame(run);
    // 이벤트 발생 시 시작시간 저장
    startTime = performance.now();

    requestAnimationFrame(run);
};
function run(time) {
    // 반복된 누적시간(해당 콜백이 반복될때마다의 시간에서 시작 시작을 뺴서 저장)
    let timeLast = time - startTime;
    timer = requestAnimationFrame(run);
    num++;
    if (num >= 100) cancelAnimationFrame(timer);
    console.log(`누적시간:${timeLast}`);
    console.log(num);
}

// function run() {
//     num++;
//     console.log(num);
//     timer = requestAnimationFrame(run);

//     if (num >= 300) cancelAnimationFrame(timer);
//     box.style.marginLeft = num + 'px';
// }
