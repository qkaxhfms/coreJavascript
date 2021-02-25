// 비구조할당
const landscape = {
    title: 'language',
    photographer: 'Nathan',
    equipment: 'SAMSUNG',
    format: 'Digital',
    src: '/landscape-nm.jpg',
    location: [32.8222222, -103.456389],
};

// const { title, photographer, equipment, format, src } = landscape;

// console.log(title);
// console.log(photographer);
// console.log(equipment);
// console.log(format);
// console.log(src);

const { photographer, ...addtional } = landscape; //전개연산자로 간소화

console.log(landscape);
console.log(addtional); //사진 객체를 삭제한 후 반환한 값과 같다.
