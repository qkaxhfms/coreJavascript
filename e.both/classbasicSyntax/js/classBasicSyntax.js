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

let user = new User('John');
user.sayHi();
