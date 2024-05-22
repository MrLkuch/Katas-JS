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