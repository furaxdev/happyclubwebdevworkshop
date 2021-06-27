---
path: "/2K-Fuctional-js"
title: "Functions"
order: "2K"
section: "JAVASCRIPT"
description: "functions"
---

### Ways of writing a function 

1 . Function declaration
```js
    function a(){
        console.log('hello')
    }

```


2 . Function expression
```js
    let a = function(){
        console.log('hello')
    }

```

3 . Arrow Function
```js
    let a = ()=>{
        console.log('hello')
    }

```
### Parameters 
We can pass data to  a function . They are called Parameters.

```js
    function a(number){ // number is a parameter
        return number * 2
    }
```
### Argument 
An argument is the value that is passed to the function
```js
    function a(number){ // number is a parameter
        return number * 2
    }

    let b = a(2) // 2 is an argument
    console.log(b)
```

### Default values

```js
    function a(number = 4){ // number is a parameter
        return number * 2
    }

    let b = a()
    console.log(b) // 8

```




### higher order functions 

A function that returns another function or take a function as its argument is called higher order function

```js
    let a = function(){
        return function(){
            console.log('hello')
        }
    }

    let b = a() 
    console.log(c) // function 

    let c = b() // 'hello'

```

### call back functions 
a callback function is a function that is passed into another function as an argument.

```js
    function modifyNumber(number , callback){
        return callback(number)
    }

    function add2(number){
        return number + 2
    }

    let b = modifyNumber(4 , add2) // add 2 is a callback function
```


### Recursion 
Inside a function we can all many other functions . The case where we call a function itself is called recursion.

```js

// Iterative way

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// Recursive way

function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}


```

##  Exercise

https://codesandbox.io/s/zen-dust-3q3fd?file=/src/index.js


# Variable , Scope and Closure

### Code blocks
    A code block is any code inside { }.

### Scope 
    Scope refers to what variables are available inside code block

    There are two types of scope :
    1. Global Scope
    1. Local Scope

 If  variable is declared outside { } it is said to be on global scope
 If  variable is declared inside { } it is said to be on local scope
 

```js
    let a = 1 
    if(a>0){
        let b = 3
    }
```
In the above example a is global and b is local

Also we can categorise scope into two parts : 
1. Function Scope  // Inside function
1. Block Scope  // Inside { } except functions

variables declared with var are function scoped .

```js
    function a (){
        let b = 2
    }

    {
        let c = 2
    }
```

## Function Hoisting 
Functions when declared with a function declaration are always hoisted to the top of currenr scope.

```js
    a()
    function a () {
    console.log('Hello')
    }
```
above code is same as
```js
    function a () {
    console.log('Hello')
    }
    sayHello()
```

when a function is declared with expressin it is not hoisted .

### Nested Scopes 

When a function is defined in another function, the inner function has access to the outer function’s variables. This behavior is called lexical scoping.

```js
function Function1 () {
  const outer = `outer`

  function Function2() {
    const inner = `inner`
    console.log(outer) // 'outer'
  }

  console.log(inner) // 'inner'
}

```


## Closure

Whenever you create a function within another function, you have created a closure. The inner function is the closure. This closure is usually returned so you can use the outer function’s variables at a later time.

```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log(makeCounter()()) // 0
```

# Functional Programming :

Functional programming is a way of writing code by using functions.It has some paradigms and conventions. 

## Types of functions

### Pure Functions 
* Pure function always return same result when same argument are passed
* They only depend on input arguments
* It does not depend on any sate or data of program
* They donot have side effects like modifying arguments , network calls

### Impure functions
Any functions that are not pure are impure functions


## Naming Conventions :
It is always suggested to name your function with a verb prefix 

Some of the prefixes might be

* "get…" – return a value,
* "calc…" – calculate something,
* "create…" – create something,
* "check…" – check something and return a boolean, etc.


Some Examples : 
* showMessage()    
* getAge()        
* calcSum()        
* createForm()     
* checkPermission()

### Currying
Curryinf is a technique in functional programming in which a function takes one argument and if you have to pass multiple arguments you do it so by returning a function that takes another argument. 

```js
function add(a, b){
	return a + b;
}
console.log(add(1,2))

// Lets curry this function

function add2(a){
	return function(b){
            return a + b;
    }
}
console.log(add(1)(2))
let 
```

https://codesandbox.io/s/blue-fire-zped7?file=/src/index.js:202-203