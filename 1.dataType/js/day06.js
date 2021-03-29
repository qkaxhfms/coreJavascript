const arr1 = [1,2,3,4];
const sum = arr1.reduce((pre,val,idx,arr) => {
    return pre + val;
})
console.log(sum);