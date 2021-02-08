/*

기본형과 참조형의 차이
기본형은 주소값을 복사하는 과정이 한번만 이루어지고
참조형은 한 단계를 더 거친다.

*/

var a = 10;
var b = a;

var obj1 = { c: 10, d: "ddd" };
var obj2 = obj1;

console.log(a);
console.log(b);
console.log(obj1);
console.log(obj2);
