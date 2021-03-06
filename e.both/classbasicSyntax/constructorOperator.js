// 생성자 함수
// 함수의 첫글짜는 대문자로 시작
// 반드시 "new" 연산자를 붙여 실행

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

/*
1. 빈 객체를 만들어 this에 할당
2. 함수 본문을 실행, this에 새로운 프로퍼티를 추가해 this를 수정
3. this를 반환
*/

// function User(name){
//     this = {}; 빈 객체가 만들어짐
//     새로운 프로퍼티를 this에 추가함
//     this.name = name;
//     this.isAdmin = false;
//     return this; this가 반환됨
// }

//얘(1)
let user = new User('Jack');
// 얘(2)
// let user = {
//     name:"Jack",
//     isAdmin:false
// }
// 얘(1)는 얘(2)랑 같음

console.log(user.name);
console.log(user.isAdmin);
