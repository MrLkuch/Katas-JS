/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

function grow(x) {
    let res = x[0];
    for (let i = 1; i < x.length; i++) {
        res *= x[i];
    }
    return res;
}

// other solution

function grow(x) {
    return x.reduce((a, b) => a * b, 1);
}