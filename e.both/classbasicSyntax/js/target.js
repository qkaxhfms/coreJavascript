// new target과 생성자 함수
// function User() {
//     console.log(new.target);
// }

// new없이 호출함
// User();

// "new"를 붙여 호출함
// new User(); //함수 본문에서 new target을 사용하면 해당 함수가 new와 함께 호출되었는지 아닌지를 확인할 수 있다.

// function User(name) {
//     if (!new.target) {
//         //new없이 호출해도
//         return new User(name); //new를 붙여준다.
//     }
//     this.name = name;
// }

// let john = User('John'); // "new User"를 쓴것처럼 바꿔줌
// console.log(john.name);

/*
생성자 함수엔 보통 return문이 없다.
반환해야할 것들은 모두 this에 저장되고
this는 자동으로 반환되기 떄문에 반환문을 명시적으로 써줄 필요가 없다.

근데 return문이 있따면

1. 객체를 return한다면 this 대신 객체가 반환된다.
2. 원시형을 return한다면, return문이 무시된다.

*/

function Biguser() {
    this.name = 'John';
    return { name: 'Godzilla' }; //<!-- this가 아닌 새로운 객체를 반환함
}
console.log(new Biguser().name);

function SmallUser() {
    this.name = 'John';
    return; //<!-- 얘는 this를 반환함
}

console.log(new SmallUser().name);

/*

생성자 함수는 일반함수이다. 다만, 일반함수와 구분하기 위해 함수 이름 첫글자를 대문자로 쓴다.
생성자 함수는 반드시 new와 함꼐 호출해야한다. new와 함께 호출하면 내부에서 this가 암시적으로 만들어지고, 마지막에 this가 반환된다.


*/
