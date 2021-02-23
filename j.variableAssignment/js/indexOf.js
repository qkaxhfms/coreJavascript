console.log(['a', 'b', 'c'].indexOf('a'));
// 배열에서 지정된 요소를 찾을수 있는 첫번째 인덱스 요소를 반환
// 없으면 -1이 반환됨

let arr = [2, 9, 9];
let result = arr.indexOf(2);
let result2 = arr.indexOf(9);
let result3 = arr.indexOf(9, 2);

console.log(result);
console.log(result2);
console.log(result3);

console.clear();

// 요소의 모든 요소 찾기
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
// console.log(idx);
while (idx != -1) {
    indices.push(idx);
    console.log(indices);
    idx = array.indexOf(element, idx + 1);
    // console.log(idx);
}
console.log(indices);
