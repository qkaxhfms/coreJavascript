// 기존 정보를 복사해서 새로운 객체를 반환하는 함수
var copyObject = function (target) {
    // for in 문법을 활용해 result 객체에 target 객체의 프로퍼티들을 복사하는 함수
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name: "ms",
    gender: "male",
};

var user2 = copyObject(user);
user2.name = "jung";

// var changeName = function (user, newName) {
//     //함수가 새로운 객체를 반환하도록 수정
//     return {
//         name: newName,
//         gender: user.gender,
//     };
// };

// var user2 = changeName(user, "Jung");

if (user !== user2) {
    console.log("유저 정보가 변경 되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
