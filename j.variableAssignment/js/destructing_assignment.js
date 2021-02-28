// 비구조할당
const landscape = {
    title: 'language',
    photographer: 'Nathan',
    equipment: 'SAMSUNG',
    format: 'Digital',
    src: '/landscape-nm.jpg',
    location: [32.8222222, -103.456389],
};

const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
        name: 'New Mexico',
        abbereviation: 'NM',
    },
};

function getCityAndState({ location }) {
    const { city, state } = determineCityAndState(location);
    return {
        city, // 해체할당으로 꺼낸 city를 단축 속성명으로 추가
        state: state.abbereviation, //키-값 할당 방법을 사용
    };
}

function setRegion({ location, ...details }) {
    //필요로 하는 객체를 만들기 위해 details를 이렇게 처리
    const { city, state } = determineCityAndState(location);
    return {
        city,
        state: state.abbereviation,
        ...details,
    };
}
