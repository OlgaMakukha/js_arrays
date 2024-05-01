function getFormatedString(number) {
    let array = number.toString().split('');
    for (let i = 0; i < array.length; i++) {
        if (!array [i + 1]) {
            break;
        }
        if (array[i] % 2 !== 0 && array[i+1] % 2 !== 0) {
            array[i] += ':';
        }
    }
    return array.join('');
}

console.log(getFormatedString(87193201));
