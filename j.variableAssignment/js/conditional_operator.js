// 삼항연산자를 빠르게
// 데이터를 확인하라

// 너무 길면 삼항연산자 보다는 if를 사용하도록]
// 지.나.치.게 코드가 모호해진다면 읿반적인 if로 돌아가는게 맞다.

// 이거 보다는
function canDrinkAlcohol(age) {
    if (age > 15) {
        console.log('true');
    } else {
        console.log('false');
    }
}

canDrinkAlcohol(20);
// if (active) {
//     var display = 'bold';
// } else {
//     var display = 'normal';
// }

// 이렇게;
// var display = active ? 'bold' : 'normal';

// let age = 30;
// let canDrinkAlcohol = age > 15 ? 'true' : 'false';
// console.log(canDrinkAlcohol);
