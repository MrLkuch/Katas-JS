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