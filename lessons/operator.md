---
path: "/operator"
title: "OPERATORS"
order: "4A"
section: "JAVASCRIPT"
description: "Learn operators"
---
## Assignment operator:
The assignment operator (=) assigns a value to a variable. The +=, -=, /=, *= assignment operator can also be used to add, substract, divide and multiply respectively to the same variables.
```js
const a = 2
const b = "js"
const c = true
let d = 0
console.log(d+=6)//6
console.log(d*=6)//36
console.log(d/=2)//18
console.log(d-=3)//15
console.log(d)//15
```
## Addition operator:
The addition operator (+) adds numbers:
```js
const a = 2
const b = 3
console.log(a+b)//5
```
## Substraction operator:
The subtraction operator (-) subtracts numbers.
```js
const a = 32
const b = 16
console.log(a-b)//16
```
## Multiplication operator:
The multiplication operator (*) multiplies numbers.
```js
const x = 5;
const y = 2;
console.log(x * y);//10
```
## Division operator:

The division operator (/) divides numbers.

```js
const x = 5;
const y = 2;
console.log(x / y);//2.5
```
## Remainder:
The modulus operator (%) returns the division remainder.
```js
const x = 5;
const y = 2;
console.log(x % y);//1
```
## Incrementing:
The increment operator (++) increments numbers by 1.
```js
let x = 5;
console.log(x++)//first stores in the variable and print into the console then increment it
const y = x
console.log(y)//6
console.log(++x)//7. first increment and store into the variable x and print into the console

```
## Decrementing
The decrement operator (--) decrements numbers by 1.
```js
let x = 5;
let y = x--;//first stores in the x variable and assign that value into y and the increment the value of x
console.log(y);//5
let z = x;
console.log(x, z); //4,4
console.log(--x)//3. first decrement the variable x then stores in the value of x and print into the console.
```

## Exponentiation:
The exponentiation operator (**) raises the first operand to the power of the second operand.
```js
const a = 3**5;// means 3 to the power 5
console.log(a)//243
```
## Operator Precedence:
Operator precedence describes the order in which operations are performed in an arithmetic expression.

![Precedance table](precedance.png)
