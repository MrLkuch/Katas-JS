/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000*/

function past(h, m, s) {
    let timeInMs = 0
    for (let i = 1; i <= h; i++) {
        timeInMs += 3600000;
    }
    for (let i = 1; i <= m; i++) {
        timeInMs += 60000;
    }
    for (let i = 1; i <= s; i++) {
        timeInMs += 1000;
    }
    return timeInMs;
}

// other solution

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}