// 예시
// const taxRate = 0.1; // 얘는 안변함
// const shipping = 5.0; // 얘는 안변함
// const total = 100 + 100 * taxRate + shipping; // 얘는 확실하지 않음
// // 무지막지하게 긴 코드가 있다.
// return `구매 금액은 ${total}입니다.`;

// const discountable = [];
// for (let i = 0; i < CaretPosition.length; i++) {
//     if (cart[i].discountAvailable) {
//         discountable.push(cart[i]);
//     }
// }

const discountable = cart.filter(item -> item.discountAvailable); // 작성하려면 이렇게 작성