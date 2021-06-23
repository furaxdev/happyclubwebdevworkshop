---
path: "/2G-Array-Methods"
title: "Array Methods"
order: "2H"
section: "JAVASCRIPT"
description: "Array Methods"
---

### join() method

Join method returns a string by joining them with given string 

```js
let a = ['a','b','c','d']
let b = a.join('&')
console.log(b) // 'a&b&c&d'
```

### toString() method

Tostring is same as if you have passed ',' in join

```js
let a = ['a','b','c','d']
let b = a.toString()
console.log(b) // 'a,b,c,d'
```

### pop() method

The pop method removes the last element from an array

It returns the popped value

```js
    let a = [1,2,3,4]
    let b = a.pop()
    console.log(a) // [1,2,3]
    console.log(b) // 3
```


### push() method
The push methods add a new element to the last of an array.
It returns the length of new array


```js
    let a = [1,2,3,4]
    let b = a.push(6)
    console.log(a) // [1,2,3,4,6]
    
```

### shift() method

shift method removes the first element of an array
It returns the the shifted out element

```js
    let a = [1,2,3,4,5]
    let b = a.shift()
    console.log(a) // [2,3,4,5]
    console.log(b) // 1
```

### unshift() method

This is the opposite of shift .
It adds new element to the start of an array

It returns the new length of array 

```js
    let a = [1,2,3,4,5]
    let b = a.unshift(0)
    console.log(a) // [0.1,2,3,4,5]
    console.log(b) // 6
```

### splice() method
This method is used to add new items to the array

It takes 3 or more than 3 parameters
First parameter is the position to add element
Second parameter is how many elements should be deleted.
The rest parameters are the new elements

It returns the array of removed elements

```js

    let a = [1,2,3,4,5]
    let b = a.splice(0, 0 , -1 , 0)
    console.log(a) // [-1,0,1,2,3,4,5]
    console.log(b) // []

```


### concat() method

This method is used to merge two arrays

It returns a new array concatenating the two arrays

```js
let a = [1,2,3]
let b = [4,5,6]

let c = a.concat(b)

console.log(a) // [1,2,3]
console.log(b) // [4,5,6]
console.log(c) // [1,2,3,4,5,6]

```

### slice() method 

The slice method slices the array from given position

It also returns a new array

```js
let a = [1,2,3,4,5]
let b = a.slice(2)

console.log(a) // [1,2,3,4,5]
console.log(b) // [3,4,5]

```

```js
let a = [1,2,3,4,5]
let b = a.slice(2,4)

console.log(a) // [1,2,3,4,5]
console.log(b) // [3,4]

```

### sort() method

This method is used to sort an array .
It returns the sorted array

```js
    let a = [1,4,5,3,6]
    let b = a.sort()
    console.log(a) // [1,2,3,4,5,6]
    console.log(b) // [1,2,3,4,5,6]

```


```js
    let a = ['a' , 'e' , 'd','c' , 'b']
    let b = a.sort()
    console.log(a) // ['a', 'b', 'c', 'd', 'e']
    console.log(b) // ['a', 'b', 'c', 'd', 'e']
```


We can also add a compare function to a sort method that takes two parameters Lets say a and b

If the function returns positive b is sorted befoe a

If the returns negative a is sorted before b.

If the function returns 0 no change is made 

```js
let  a = [30, 500, 2, 7, 20, 10];
let b = a.sort(function(a, b){
    return a - b
    }
);
console.log(a) // [ 2, 7, 10, 20, 30, 500 ]
console.log(b) // [ 2, 7, 10, 20, 30, 500 ]

```

### includes() method

This method returns whether the element is in the array or not
```js
    let a = [1, 2, 3];
    console.log(a.includes(5)); // false
    console.log(a.includes(1)); // true
```

### indexOf() method

This method retrurns the index of the element
It also takes an optional second parameter which is where to start searching

```js
  let a = [1, 2, 3 ,4 ,1 ,2];
  console.log(a.indexOf(2)) // 1
  console.log(a.indexOf(2, 4)) // 5
```

### reverse() method

```js
    let a = [1,2,3,4,5]
    let b = a.reverse()
    console.log(a) // [5,4,3,2,1]
    console.log(b) // [5,4,3,2,1]

```
### The forEach() method

The foreach method iterates through the array

It takes a function as its parameter and passes every elemrnt to the function 

```js

let a = [1,2,3,4,5,6];
a.forEach(function(element){
    console.log(element)
})
/**
    1
    2
    3
    4
    5
    6
*/

```


### filter() method

The filter method returns a new array .
It takes a function as its parameter and passes every elemrnt to the function
If the function returns true it will add the element to the array

```js

let a = [1,2,3,4,5,6];
let b = a.filter(function(element){
    return element%2 ===0
})
console.log(a) // [ 1, 2, 3, 4, 5, 6 ]
console.log(b) // [2,4,6]

```

### map() method

The map method returns a new array .
It takes a function as its parameter and passes every elemrnt to the function
If the function returns true it will add the element to the array

```js

let a = [1,2,3,4,5,6];
let b = a.map(function(element){
    return element%2 ===0
})
console.log(a) // [ 1, 2, 3, 4, 5, 6 ]
console.log(b) // [ false, true, false, true, false, true ]

```


The function foreach , map and filter methods take an optional parameter index of the element 

# EXERCISE

https://codesandbox.io/s/pensive-johnson-w37zh?file=/src/index.js