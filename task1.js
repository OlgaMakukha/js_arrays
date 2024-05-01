function getArray(a, b) {
    let newArray = a.concat(b);
    let sumArrays = 0;
    
    for (let i = 0; i < newArray.length; i++) {
        sumArrays += newArray[i];
    }

    return sumArrays;
}

const array1 = [123, 456, 789, 234, 567];
const array2 = [345, 678, 987, 321, 654, 100];
console.log(getArray(array1, array2));
