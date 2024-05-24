## Name : Who likes it?

```js

function likes(names) {
    console.log(names.length)
    if (names.length > 0) {
        if (names.length == 1) {
            return `${names[0]} likes this`;
        }
        else if (names.length == 2) {
            return `${names[0]} and ${names[1]} like this`;
        }
        else if (names.length == 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }
        else {
            let count = names.length - 2
            return `${names[0]}, ${names[1]} and ${count} others like this`;
        }
    }
    return 'no one likes this';
}

```

### other solution

```js
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
```

## Name : Find the odd int

```js

function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let num = A[i]
        let arr = A.map((x) => (x == A[i]) ? x : 'x')
        arr = arr.filter(function (nb) { return nb != 'x' });

        if (arr.length % 2 != 0) {

            return num;
        }

    }

}

```

### other solution

```js

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
```

### or

```js
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```

## Name : Replace With Alphabet Position

```js

function alphabetPosition(text) {
    text = text.toLowerCase();
    console.log(text)
    let textInNum = [];
    for (n in text) {
        if ((text.charCodeAt(n) >= 97 && text.charCodeAt(n) < 123)) {

            textInNum.push((text.charCodeAt(n) - 96).toString());


        }
    }
    return textInNum.join(' ')
}

```

## Name : Unique In Order

```js

var uniqueInOrder = function (iterable) {
    let arr = [];
    if (iterable.length != 0) {

        arr = [iterable[0]]
        for (let i = 1; i < iterable.length; i++) {

            if (iterable[i] != iterable[i - 1]) {

                arr.push(iterable[i]);
            }

        }
    }
    return arr;
}

```

### other solution

```js
ar uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
```

## Name : Take a Ten Minutes Walk

```js

function isValidWalk(walk) {
    console.log(walk)
    if (walk.length == 10) {

        let valid = 0
        for (n in walk) {
            switch (walk[n]) {
                case 'n':
                    valid += 1;
                    break;
                case 's':
                    valid -= 1;
                    break;
                case 'e':
                    valid += 2;
                    break;
                case 'w':
                    valid -= 2;
                    break;
            }console.log(valid)
        }
        console.log('end')
        console.log(valid)
        if (valid == 0) {
            return true;
        }
    } return false;
}

```

## Name : Find the unique number

```js

function findUniq(arr) {
    let nb1 = arr[0];
    let countNb1 = 1;
    let countNb2 = 1;
    let nb2 = '';

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != nb1) {
            nb2 = arr[i];
            countNb2 += 1;
        } else {
            countNb1 += 1;
        }

    }
    if (countNb1 > 1) {
        return nb2;
    } return nb1;
}


```

### other solution

```js
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
```

## Name : Highest Scoring Word

```js

function high(x) {
    x = x.split(' ');
    let highScore = 0;
    let word = '';
    x.forEach(function (element) {
        let count = 0;
        for (n in element) {
            count += element.charCodeAt(n) - 96;
        }
        if (count > highScore) {
            highScore = count;
            word = element;
        }
    })
    return word;
}

```

## Name : Persistent Bugger.

```js

function persistence(num) {
    num = String(num).split('');
    let persis = 0;
    while (num.length > 1) {
        let count = 1;
        for (n in num) {
            count *= num[n];
        }
        persis++
        num = String(count).split('');
    }
    return persis;
}

```

## Name : Multiples of 3 or 5

```js

function solution(number) {
    if (number > 0) {
        let arr = [];
        let count = 0;
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                arr.push(i)
            }
        }
        for (n in arr) {
            count += arr[n];
        }
        return count;
    }
    return 0;
}

```

### other solution

```js
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
```

## Name : Count characters in your string

```js

function count(string) {
    let obj = {}
    string = string.split('');
    for (n in string) {
        console.log(obj)
        if (string[n] in obj) {
            console.log('yes')
            obj[string[n]] += 1;
        } else {
            obj[string[n]] = 1;
        }
    }
    console.log(obj)
    return obj;
}

```

## Name : Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

```js

function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        let test = i.toString().split('');
        for (n in test) {

            test[n] = test[n] ** (+n + 1);

        }
        let sum = test.reduce((accumulator, currentValue) => {
            return +accumulator + +currentValue
        }, 0);

        if (sum == i) {
            arr.push(i);

        }
    }
    return arr;
}


```

### other solution

```js

function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
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