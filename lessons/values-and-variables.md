---
path: "/values-and-variables"
title: "VALUES AND VARIABLES"
order: "2A"
section: "JAVASCRIPT"
description: "Learn variables and datatypes"
---

# Variables and values
 Before talking about variables and values, lets talk about **console.log and comments**. 
 ### Console.log
 So what is **console.log**??? The answer is: console is an object and in this object there is a method /function (more on this later in this course) called log which logs in the terminal or console. 
 
 > For example:
 ```js
 console.log("My name is sulabh adhikari");
```
### Comments



#### **Single line comment**
Single line comments start with //.
Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
This example uses a single-line comment before each code line:
JavaScript comments can be used to explain JavaScript code, and to make it more readable.
JavaScript comments can also be used to prevent execution, when testing alternative code.
```js
// this is the comment
//let name = "sulabh"
```
#### **Multi-line comment**
Multi-line comments start with /* and end with */.
Any text between /* and */ will be ignored by JavaScript.
```js
/*
this
is
comment
```

 ## Values

 Lets talk about values. So What actually is a **values???**
 answer is: A values is basically a peice of data. It is the most fundamental unit of information that we have in programming.
 For example: 'sulabh', 45, true, 23+16+12+41 etc are actually values.

 ### Challenge 1: 
 >Log to the console your name, your surname and your age.

 https://codesandbox.io/s/hungry-heyrovsky-5v7in?file=/src/index.js


 ## Variables

 One extremely useful things that we can do with values is to store them into variables and this way we can reuse them over and over again
 ```js
 let firstName = 'sulabh';
 ```

 We have assign 'sulabh' in the firstName. Now we can use console.log to print the value of FirstName to the console.
 ```js
  console.log(firstName) => sulabh
  ```

 you can use this variable for many times.
```js 
console.log(firstName);
console.log(firstName);
console.log(firstName);

output:
    sulabh
    sulabh
    sulabh
```
 var, let and const is used to declare variables. For changeable variable let and var is user and for we use let and var and for constant variables we use const.

 ### **var**
 ```js
 var web = 'development'
 console.log(web);
 output:
    development
 ```
 To create variables var is used. = is assignment operator. It assign the 'development' to the 'web'.
 ```js
 web = design
 ```
 now we have reassign the value of 'web' to the 'design'.
 
 ```js
 console.log(web);

 output:
    design
```
### **let and const**
let and const were introduced in ES2015 or ES6 version.
 ### **let**
 ```js
   let fridge = "empty";
    console.log(fridge);

    Output:
        empty
```
We can reassign the value of fridge.
```js
fridge = 'full';
console.log(fridge);

Output:
    full
```
So what is the difference between let and var?? Answer is: let and const are block scoped(more about this later) but var is functional scoped(more about this later).

### **const**
```js
    const wrc = 'Engineering college';
    console.log(wrc);

    output:
        Engineering college
```
Lets see what happens if we reassign the const variable.
```js
wrc = "Management college"

Output: type error assignment to the const variables
```
Lets see what to use and when.

1. Avoid using var. It is the best practice to use let and const.
2. Only use let if the value of variable is changing.
3. Only use const if the value of variable is constant.

## Rules for naming variables and constant
1. Variables name are case-sensitive that is A and a are two different variables.
```js
const a = "Hello";
const A = "Bye";
console.log(a);
console.log(A);

Output:
    Hello
    Bye
```
2. Variable names should begin with lower case characters. It's not compulsory but it is a best practice.
3. Variable names cannot begin with number.
```js
let 3user; 

invalid code
```
4. Variable names cannot contain symbols.
```js
{
    let users;
    let sulabh3;
    let javaScript;
} //valid code
{
let 3sulabh;
let #sulabh
} // invalid code
```
5. Variable names cannot be a reserved javascript keywords.
```js
let Class = 8;
const let = 1

is invalid code
```
6. Camelcased variable are the best practice.
```js
const firstName = 'sulabh';
const lastName = 'Adhikari'
```
### Challenge 2:
1. Declare the variables (use var in this case) named yourName, yourSurname, yourAge. Print it into console.
Try to reasign the value of yourName to your friend name, yourSurname to your friend's surname and yourAge to your friend age.



2. Declare the variables (use let in this case) mountainOfNepal assign its value to the "Mount Everest" and declare itHeight variable assign its value to 8848. Try to reasign mountainOfNepal to "Mount Annapurna" and itHeight to 8091.


3. Declare the variables (use const) named myFavoriteFruits assign the value to "mango". Try to reasign the value with the another fruit name and see the error.  

https://codesandbox.io/s/hungry-heyrovsky-5v7in?file=/src/index.js




