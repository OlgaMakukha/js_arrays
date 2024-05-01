const numbers = [42, 17, -5, 100, 0, 8, -23, -55, -7, 91];
let maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log(maxNumber);