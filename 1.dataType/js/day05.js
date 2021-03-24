// 직접적인 배열을 수정하는 배열 관련 함수들
// const fruits = ["Apple","Banana","Orange","Strawberry"];
// console.log(fruits);

// 맨 뒤 넣기
// let push = fruits.push("Grape"); 
// console.log(fruits);

// 맨 뒤 제거
// let pop = fruits.pop();
// console.log(fruits);

// 배열 첫번째 제거
// let shift = fruits.shift();
// console.log(fruits);

// 배열 앞에 아이템 추가
// let unshift = fruits.unshift("Grape");
// console.log(fruits);

// 배열 pos 번째부터 lenght 만큼 아이템 제거
// let splice = fruits.splice(1,2);
// console.log(splice);

// 배열 중 원본 배열은 변경하지 않은채로 메서드의 반환값으로 새로운 배열을 리턴하는 메서드

// 배열 끝에 새로운 요소 추가
// let arr = [1,2,3,4,5];

// let newArr = arr.concat(4,5,6);
// let newArr2 = arr.concat(4,[5,6]);
// console.log(arr);
// console.log(newArr);
// console.log(newArr2);

// Array.prototype.concat() 메서드는
// 인수로 받은 값을 원본 배열의 끝에 새로운 요소로 추가한 뒤 새로운 배열을 반환

// 배열의 요소 변환

// let newArr = arr.slice(); // 아무것도 안하면 복사
// let newArr2 = arr.slice(3); // 잘라낼 위치의 인덱스 앞 요소까지
// let newArr3 = arr.slice(2,4); // 배열의 요소 각각 선택
// console.log(arr);
// console.log(newArr);
// console.log(newArr2);
// console.log(newArr3);

// Array.prototype.slice() 메서드는
// 인수를 통해 지정한 만큼의 요소를 잘라낸 후 해당 배열을 반환 / 원본 배열은 그대로

// 배열의 요소를 문자열로 병합

// Array.prototype.join() 배열의 모든 요소를 하나의 문자열로 만들어 변환,
// 구분문자를 지정해 주지 않으면 기본값으로 쉼표를 사용하게 된다.

// var str = arr.join("-");
// var str2 = arr.join("");
// console.log(arr);
// console.log(str);
// console.log(str2);

// indexOf 일치하는 요소 반환

// arr.indexOf(value,start);
// arr.lastIndexOf(value,start);

let arr = [1, 5, "a", 0, true, 5, [1, 2], "9"];
// console.log(arr);
// let result = arr.indexOf(5);       // 1
// console.log(result);
// let result2 = arr.lastIndexOf(5);   // 5
// console.log(result2);
// let result3 = arr.indexOf(5, 5);    // 5
// console.log(result3);
// let result4 = arr.indexOf(true, 5)  // -1
// console.log(result4);

// let result = arr.some(function(x){
//     // 배열에 짝수가 하나라도 있따면 true
//     return x % 2 === 0;
// }) // -> true

// let result = arr.every(function(x){
//     return x % 2 === 0;
// }) // -> false

// console.log(result)

let result = arr.includes(1);
let result2 = arr.includes(3);
console.log(result)
console.log(result2)