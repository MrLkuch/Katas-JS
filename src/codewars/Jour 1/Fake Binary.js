/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x) {
    let numbers = x.split('');
    for (number in numbers) {
        if (numbers[number] >= 5) {
            numbers[number] = 1;
        } else {
            numbers[number] = 0;
        }
    }
    return numbers.join('');
}