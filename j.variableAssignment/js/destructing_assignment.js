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

//전개연산자로 간소화
// const { photographer, ...addtional } = landscape;

// console.log(landscape);
// //사진 객체를 삭제한 후 반환한 값과 같다.
// console.log(addtional);

const { src: url } = landscape;
// console.log(src);
console.log(url); //photo.src의 정보를 변수 이름 url에 삽입한다.
