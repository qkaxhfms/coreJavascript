/*

defer
해당 구문으로 외부 스크립트를 연결하면
거의 동시에 스크립트와 body를 같이 읽기 시작
다만 실행은 body 내용이 다 완료된 이후 실행

*/

// 호이스팅 방지를 위한 즉시실행함수 실행 방법
// for (var i = 0; i < lists.length; i++) {
//     (function (index) {
//         lists[index].onclick = function () {
//             console.log(index);
//         };
//     })(i); // 즉시실행함수
// }

// for (let i = 0; i < lists.length; i++) {
//     lists[i].onclick = function () {
//         console.log(i);
//     };
// }

// let i = 0;
// for (el of lists) {
//     el.addEventListener('click', function () {
//         console.log(i++);
//     });
// }

const lists = document.querySelectorAll('.lists-unknown__depth1 li');
const boxs = document.querySelectorAll('.lists-unknown__depth2 div');
// 이벤트 발생시 순서값 반환 코드
for (el of lists) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let i = Array.from(this.parentElement.children).indexOf(this);
        // console.log(i);
        activation(i, lists);
        activation(i, boxs);
    });
}

// 특정 노드리스트 활성화 함수 정의
const activation = (idx, arr) => {
    for (el of arr) {
        el.classList.remove('on');
    }
    arr[idx].classList.add('on');
};
