// var a;
// a = "abc";
// var a = "abc";

// console.log(a);

/*

효율적으로 문자열의 데이터의 변환을 처리하려면 변수와 데이터를
별도의 공간에 나누어 저장하는 것이 최선이다.

*/

var a = "abc";
a = a + "def";

var b = 5;
var c = 5;
b = 7;
console.log(a);
console.log(b);
console.log(c);

/* 참조형 데이터 할당 */
var obj1 = {
    a: 1,
    b: "bbb",
};

console.log(obj1.a);
obj1.a = 2;
console.log(obj1.a);
