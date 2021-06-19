---
path: "/5B-type-casting-and-type-coercion"
title: "TYPE CASTING AND TYPE COERCION"
order: "5B"
section: "JAVASCRIPT"
description: "Learn type casting and type coercion"
---

## Type Coercion:
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

```js
const x = 10;
const y = 20;
const z = x + y;
console.log(z) //200
```
```js
const x = '10';
const y = '20';
const z = x + y;
console.log(z) //1020
```

```js
const x = 10;
const y = '20';
const z = '5';
console.log(x-y) //-10. converts string into number
console.log(y-z)//15. converts string into number
```
```js
const x = 10;
const y = '20';
const z = "20";
console.log(x*y) //200. converts string into number
console.log(y*z)//400. converts strings into number
```
```js
const x = 10;
const y = '20';
const z = "20";
console.log(x/y) //0.5. converts string into number
console.log(y/z)//1. converts string into number
```
```js
const x = 56;
const y = '25';
const z = "20";
console.log(x%y) //6. converts string into number
console.log(y%z) //5. converts string into number
```
```js
console.log(2+true)//3. converts true to 1
console.log(2 + false)//2. converts false to 0.
```

## Type conversion/ Type Casting

```js
console.log(Number("6"))//6 which is number.
console.log(Number("a"))//NaN Not a Number. lets discuss this at the end of this topic
console.log(Number(true))//1
console.log(Number(false))//0
console.log(String(12))//12(string)
console.log(String(false))//false(string)
console.log(String(true))//true(string)
console.log(Boolean(12))//true
console.log(Boolean("a"))//true
console.log(Boolean())//false. if there is value it return true otherwise false
```

## NaN(Not a Number):
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

```js
const x = 100 / "Apple"; 
console.log(x) // x will be NaN (Not a Number)
```
```js
var x = 100 / "Apple";
console.log(isNaN(x));//true
```




