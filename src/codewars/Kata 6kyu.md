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

## Name : 

```js



```