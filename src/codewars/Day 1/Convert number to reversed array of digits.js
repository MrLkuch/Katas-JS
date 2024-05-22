/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

function digitize(n) {

    let arr = String(n).split("").map((n) => {
        return Number(n)
    })

    for (let i = arr.length - 2; i >= 0; i--) {
        arr.push(arr[i]);
        arr.splice(i, 1);
    }
    return arr;
}

// simpler solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}