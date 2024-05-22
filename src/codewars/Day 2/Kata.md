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

## Name : Thinkful - Logic Drills: Traffic light

```js
function updateLight(current) {
    if (current == 'green') {
        return 'yellow';
    } else if (current == 'yellow') {
        return 'red';
    } else {
        return 'green'
    }
}
```
### other solution

```js
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

```

## Name : L1: Set Alarm

```js

function setAlarm(employed, vacation) {
    if (employed == true && vacation == false) {
        return true;
    } return false;
}

```

### other solution

```js

function setAlarm(employed, vacation){
  return employed && !vacation;
}
```

## Name : Sum without highest and lowest number

```js

function sumArray(array) {

    if (array && array.length > 2) {
        let sum = 0;
        let high = array[0];
        let low = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > high) {
                high = array[i];
            }
            if (array[i] < low) {
                low = array[i];
            }
            sum += array[i];
        }

        return sum - high - low;
    }
    return 0;
}

```

## Name : Sum Mixed Array

```js

function sumMix(x) {
    let sum = 0;
    for (number in x) {
        sum += + x[number];
    }
    return sum;
}

```

## Name : Grasshopper - Messi goals function

```js
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

```

## Name : Double Char

```js

function doubleChar(str) {
    let res = ''
    for (letter in str) {
        res += str[letter] + str[letter]
    }
    return res;
}


```

### other solution

``` js

const doubleChar = (str) => str.split("").map(c => c + c).join("");

```

## Name : The Feast of Many Beasts

```js

function feast(beast, dish) {
    beast.split('');
    dish.split('');
    if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
        return true;
    } return false;
}

```
### other solution

```js
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
```

## Name : Array plus array

```js

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for (n in arr1) {
        sum += arr1[n];
    }
    for (m in arr2) {
        sum += arr2[m];
    }
    return sum;
}

```

## Name : Parse nice int from char problem

```js
function getAge(inputString) {
    for (n in inputString) {
        return +inputString[n];
    }
}


```

### simpler solution

```js
function getAge(inputString){
  return parseInt(inputString);
}
```

## Name : Beginner Series #4 Cockroach

```js

function cockroachSpeed(s) {
    return Math.floor(s / 360 * 10000);
}

```

### other solution

```js
const cockroachSpeed = s => Math.floor(s / 0.036);
```

## Name : Grasshopper - Check for factor

```js

function checkForFactor(base, factor) {
    if (base % factor == 0) {
        return true;
    } return false;
}

```
### other solution

```js
function checkForFactor (base, factor) {
  return base % factor === 0;
}
```

## Name : Switch it Up!

```js

function switchItUp(number) {
    switch (number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
    }
}

```

### other solution

```js
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
```

## Name : Function 2 - squaring an argument

```js

let square = (n) => n**2;

```

## Name : Keep up the hoop

```js

function hoopCount(n) {
    if (n >= 10) {
        return 'Great, now move on to tricks';
    } return 'Keep at it until you get it';
}


```

## Name : Twice as old

```js

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = 0;
    if (dadYearsOld == sonYearsOld * 2) {
        return 0;
    } else if (dadYearsOld > sonYearsOld * 2) {
        while (dadYearsOld > sonYearsOld * 2) {
            years++;
            dadYearsOld--;
        }
    }
    else {
        while (dadYearsOld < sonYearsOld * 2) {
            years++;
            dadYearsOld++;
        }
    }
    return years;
}

```

### other solution

```js
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
```

## Name : Removing Elements

```js
function removeEveryOther(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    } return arr;
}

```

## Name : Count the Monkeys!

```js

function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

```

## Name : Will there be enough space?

```js

function enough(cap, on, wait) {
    let res = cap - (on + wait);
    console.log(res)
    if (res < 0) {
        return - res;
    }
    return 0;
}

```

## Name : All Star Code Challenge #18

```js

function strCount(str, letter) {
    let count = 0;
    for (letters in str) {
        if (str[letters] == letter) {
            count += 1;
        }
    }
    return count;
}

```

### other solution

```js
function strCount(str, letter){  
  return str.split(letter).length-1
}
```

## Name : Grasshopper - Terminal game move function

```js

function move(position, roll) {
    return position + (roll * 2);
}

```

## Name : What is between?

```js

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

```

## Name : Grasshopper - Debug sayHello

```js

function sayHello(name) {
  return 'Hello, ' + name;
}

```

## Name : Find the first non-consecutive number

```js

function firstNonConsecutive(arr) {
    let res = null;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] + 1 != arr[i + 1] && arr[i + 1] != undefined) {
            console.log('yes')
            console.log(arr[i + 1])
            res = arr[i + 1];
            return res;
        }
    }
    return res;

}

```
### other solution

```js
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}
```

## Name : Is it even?

```js

function testEven(n) {
    if(n%2){
      return false;
    }return true;
}

```
### other solution

```js
function testEven(n) {
    return n%2===0;
}
```

## Name : Is the string uppercase?

```js

String.prototype.isUpperCase = function () {
    if (this == this.toUpperCase()) {
        return true;
    } return false;
}

```

## Name : Powers of 2

```js

function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

```

## Name : Cat years, Dog years

```js

var humanYearsCatYearsDogYears = function (humanYears) {
    let hum = humanYears;
    let cat = 15;
    let dog = 15;

    for (let i = 2; i <= hum; i++) {
        if (i > 2) {
            cat += 4;
            dog += 5;
        } else {
            cat += 9;
            dog += 9;
        }
    }
    return [hum, cat, dog];
}

```

## Name : altERnaTIng cAsE <=> ALTerNAtiNG CaSe

```js

String.prototype.toAlternatingCase = function () {
  let arr = this.split('');
  for(n in arr){
    if(arr[n] == arr[n].toUpperCase()){
      arr[n] = arr[n].toLowerCase();
    }else{
      arr[n] = arr[n].toUpperCase();
    }
    
  }
  arr = arr.join('');
  return arr;
  
}

```

## Name : Correct the mistakes of the character recognition software

```js

function correct(string) {
    let arr = string.split('');
    for (n in arr) {
        switch (arr[n]) {
            case '0':
                arr[n] = 'O';
                break;
            case '1':
                arr[n] = 'I';
                break;
            case '5':
                arr[n] = 'S';
                break;
        }
    }
    return arr.join('');
}

```

## Name : Is it a palindrome?

```js

function isPalindrome(x) {
    let y = x.split('').reverse().join('').toLowerCase();
    console.log(y)
    if (x.toLowerCase() == y) {
        return true;
    } return false;
}

```

## Name : Student's Final Grade

```js

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }

}

```

## Name : Expressions Matter

```js

function expressionMatter(a, b, c) {
    let res1 = a * (b + c);
    let res2 = a * b * c;
    let res3 = (a + b) * c;
    let res4 = a + b * c;
    let res5 = a + b + c;

    let arr = [res1, res2, res3, res4, res5];
    console.log(arr)
    console.log(Math.max(...arr))
    return Math.max(...arr);
}

```

## Name :  Sum The Strings

```js

function sumStr(a, b) {
    let res = +a + +b;
    return String(res);
}

```

## Name : Difference of Volumes of Cuboids

```js

function findDifference(a, b) {
    let volA = 1;
    let volB = 1;
    for (n in a) {
        volA *= a[n];
    }
    for (m in b) {
        volB *= b[m];
    }
    let res = volA - volB;
    if (res < 0) {
        return -res;
    } return res;

}

```

## Name : I love you, a little , a lot, passionately ... not at all

```js

function howMuchILoveYou(nbPetals) {
    let counter = 0;
    for (let i = nbPetals; i > 0; i--) {
        counter += 1;
        if (counter > 6) {
            counter = 1;
        }
    }
    console.log(counter);
    switch (counter) {
        case 1:
            return "I love you";
        case 2:
            return "a little";
        case 3:
            return "a lot";
        case 4:
            return "passionately";
        case 5:
            return "madly";
        case 6:
            return "not at all";
    }
}


```

## Name : Reverse List Order

```js

function reverseList(list) {
    return list.reverse();
}

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