// 형 인식
console.log(1 == '1');
console.log(1 === '1');
console.log(1 === 1);

console.log('' == false);

if ('') {
    console.log('false가 아님');
} else {
    console.log('false');
}

const employee = {
    name: 'Eric',
    equipmentTraining: '',
};

// if (!employee.equipmentTraining) {
//     return '기계를 작동할 권한이 없습니다.';
// }
