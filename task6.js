function filterNumbers(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function isEvenNumber(number) {
    return number % 2 === 0;    
}

function isPositiveNumber(number) {
    return number >= 0;    
}

console.log(filterNumbers([1, 2, 3, 4, 5, -1, -2, -3], isEvenNumber));
console.log(filterNumbers([1, 2, 3, 4, 5, -1, -2, -3], isPositiveNumber));