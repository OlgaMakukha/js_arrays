function getArray(a, b) {
    let sumArrays = 0;
    for (let i = 0; i < a.length; i++) sumArrays += a[i];
    for (let i = 0; i < b.length; i++) sumArrays += b[i];

    return sumArrays;
}

const array1 = [123, 456, 789, 234, 567];
const array2 = [345, 678, 987, 321, 654];
console.log(getArray(array1, array2));
