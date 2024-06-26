## Name : Vowel Count

```js

function getCount(str) {
    str = str.split(/[aeiou]/g)
    return str.length - 1;
}

```

### other solution

```js
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

## Name : Disemvowel Trolls

```js

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

```

### other solution
```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

## Name : Square Every Digit

```js

function squareDigits(num) {
    num = String(num).split('');
    num = num.map((x) => x * x);
    num = +num.join('');
    return num;
}

```

## Name : Highest and Lowest

```js

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    let arr = [numbers[0], numbers[0]];

    for (n in numbers) {

        if (+numbers[n] > arr[0]) {

            arr[0] = +numbers[n];
        } else if (+numbers[n] < arr[1]) {

            arr[1] = + numbers[n];
        }
    }
    return arr.join(' ');
}

```

### simpler method

```js
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
```

## Name : Descending Order

```js

function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}

```

## Name : List Filtering

```js

function filter_list(l) {
    let arr = [];
    for (n in l) {
        if (typeof (l[n]) === 'number') {
            arr.push(l[n]);
        }
    }
    return arr;
}

```

### other solution

```js
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}
```

## Name : The highest profit wins!

```js

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}

```

## Name : You're a square!

```js
var isSquare = function (n) {
    
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    }
    return false;
}


```

### other solution

```js
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
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