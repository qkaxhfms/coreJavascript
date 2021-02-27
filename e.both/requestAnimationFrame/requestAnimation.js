// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame

// 움직이는 박스
const btn = document.querySelector('button');
const box = document.querySelector('#box');
let duration = 500;
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

    // 진행률 (반복된 누적시간을 전체 총 시간으로 나누면 0~1까지 진행률을 환산 가능)
    let progress = timeLast / duration;

    // 진행률이실행도리 떄 초기값이 음수로 넘억마으로 음수일 때 무조건 0으로 보정
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // 진행률이 1에 도달하지 않으면 계속해서 requestAnimationFrame으로 run함수 반복
    // 진행률이 1에 돋라하면 cancleANimationFrame으로 run함수 종료

    if (progress < 1) {
        timer = requestAnimationFrame(run);
    } else {
        cancelAnimationFrame(timer);
    }

    console.log(`현재까지 걸린 시간 :${timeLast}/진행률:${progress}`);
    box.style.marginLeft = 450 * progress + 'px';
}
