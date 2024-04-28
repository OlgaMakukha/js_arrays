function numberToString(number) {
    let numberToString = number.toString().split('');
    for (let i = 0; i < numberToString.length; i++) {
        if (numberToString[i] % 2 !== 0 && (i+1 < numberToString.length && numberToString[i+1] % 2 !== 0)) {
            numberToString[i] += ':';
        }
    }
    return numberToString.join('');
}

console.log(numberToString(87193201));
