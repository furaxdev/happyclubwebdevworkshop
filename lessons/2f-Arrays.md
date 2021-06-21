---
path: "/2F-Arrays"
title: "Arrays"
order: "2F"
section: "JAVASCRIPT"
description: "Arrays"
---

Arrays are use d to store several pieces of data in one space.

Arrays start with opening square bracket and end with a closing bracket with comma between every entry 

```js
    let fruits = ['mango','apple', 'orange']
```
Array elements can have different type of data types as its element. 

```js
    let a = [1 , 'a', 2 , 'b']
```

We can access any element of a array by its index.
    
```js
    let a = [1 , 'a', 2 , 'b']
    let b = a[1]
    console.log(b) // a
```

Getting array length 
we can get length of an array using its length property

```js
    let a = [1 , 'a', 2 , 'b']
    let b = a.length
    console.log(b) // 4
```

Adding element to array 
You can add element to a array by using push method

```js
    let a = [1 , 'a', 2 , 'b']
    a.push(3)
    console.log(a) // [1 , 'a' , 2 , 'b' , 3]
```

Removing element from a array 
You can add remove element from a array by using pop method

```js
    let a = [1 , 'a', 2 , 'b']
    a.pop()
    console.log(a) // [1 , 'a' , 2 ]
```