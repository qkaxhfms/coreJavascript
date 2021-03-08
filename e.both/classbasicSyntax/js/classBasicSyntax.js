// class MyClass {
//     // 여러 메서드를 정의할수 있음
//     constructor(){...}
//     method1(){...}
//     method2(){...}
//     method3(){...}
//     ...
// }

// 클래스는 함수의 한 종류이다.

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

// let user = new User('John');
// user.sayHi();

console.log(typeof User); // function

// 생성자 메서드와 동일
console.log(User === User.prototype.constructor); //true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
console.log(User.prototype.sayHi); //console.log(this.name)

// 클래스는 단순한 편의 문법이 아니다. = 기능이 동일하나 기존 문법을 쉽게 읽을 수 있게 만든 문법
