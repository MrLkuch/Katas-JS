## Name :

```js



```

## Name : Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

```js
const quarterOf = (month) => {
  if(month<=3){
    return 1;
  }else if(month <= 6){
    return 2;
  }else if(month <= 9){
    return 3;
  }
  else{
    return 4;
  }
}

```

### Other solution :

```js 
const quarterOf = m => Math.ceil(m/3);

```

## Name : Grasshopper - Grade book

```js

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3)/ 3;
  if(90 <= avg && avg <= 100){
    return 'A';
  }else if(80 <= avg && avg < 90){
    return 'B';
  }else if(70 <= avg && avg < 90){
    return 'C';
  }else if(60 <= avg && avg < 70){
    return 'D';
  }else{
    return 'F';
  }
}

```

### other solution

```js
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

```

## Name : Transportation on vacation

```js
function rentalCarCost(d) {
    let total = 0;
    for (let i = 0; i < d; i++) {
        total += 40;
    }
    if (d >= 7) {
        total -= 50;
        return total;
    } else if (d >= 3) {
        total -= 20;
        return total;
    } else {
        return total;
    }
}

```

### other solution
```js

function rentalCarCost(d) {
  if(d<3) return d * 40;
  if(7>d && d>=3) return (d*40 -20);
  if(d>=7) return (d*40 -50);
}
```

## Name : Remove exclamation marks

```js
function removeExclamationMarks(s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '!') {
            arr[i] = ''
        }
    }

    return arr.join('');
}


```

### other solution

```js
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

```

## Name : Total amount of points

```js

function points(games) {
    console.log(games)
    let points = 0;
    let scores = [];

    for (let i = 0; i < games.length; i++) {

        scores = games[i].split(':')
        if (scores[0] > scores[1]) {
            points += 3;
        } else if (scores[0] == scores[1]) {
            points += 1;
        }

    }
    console.log('end')
    return points;
}

```

### other solution
```js

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

```

## Name : Volume of a Cuboid

```js

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

```

## Name : Third Angle of a Triangle

```js

function otherAngle(a, b) {
  return 180 - a - b;
}

```

## Name : Area or Perimeter

```js
const areaOrPerimeter = function (l, w) {
    if (l == w) {
        return l * w;
    }
    return l * 2 + w * 2;
};


```

## Name :

```js



```

## Name :

```js



```

## Name :

```js



```

## Name :

```js



```