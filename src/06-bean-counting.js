// Bean Counting

function countBs(string) {
    let count = 0;
    for (B in string) {
        if (string[B] == 'B') {
            count += 1;
        }
    }
    return count;
}

function countChar(string, letter) {
    let count = 0;
    for (letters in string) {
        if (string[letters] == letter) {
            count += 1;
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4