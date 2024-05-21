/*There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!*/

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (points in classPoints) {
        sum += classPoints[points];
    }
    let avg = Math.round(sum / classPoints.length);

    return yourPoints > avg;
}
