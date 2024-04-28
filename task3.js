const words = ['радар', 'анна', 'машина', 'шалаш', 'казан',
'варяг', 'потоп'];
const polyWords = [];

for (let i = 0; i < words.length; i++) {
    let newWord = words[i].split('').reverse().join('');
    if (words[i] === newWord) {
        polyWords.push(words[i]);
    }
}

console.log(polyWords);