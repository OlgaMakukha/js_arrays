const numbers = [1, 2, 3, 4, 5];

function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let j = array.length - i - 1;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        
    return array;
}

console.log(reverseArray(numbers));
