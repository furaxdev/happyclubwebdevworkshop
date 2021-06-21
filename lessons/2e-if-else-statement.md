---
path: "/2B-if-else-statement"
title: "CONDITIONAL:IF-Else"
order: "2B"
section: "JAVASCRIPT"
description: "conditional"
---

# Truthy And Falsy Value 

Before talking about if and else we should know truthy and falsy value. A truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN). It return Boolean value. As long as there is values and doesnot contains `false, 0, -0, 0n,"", null, undefined and NaN` is the truthy value and always return true.

# If
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```
Now lets see the example of truthy and falsy and if statement.

```js
if(true){
    console.log("This is truthy value")
}
if(false){
    console.log("This is truthy value")
}
if(0){
    console.log("This is truthy value")
}
if(-42){
    console.log("This is truthy value")
}
```
```js
const time = 9
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
# else if
Use the else if statement to specify a new condition if the first condition is false.

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
else if is excuted only if the if statement return false.
```js
const time = 14
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

# else statement

Else statement will be executed if all other statement is false.

```js
const time = 25
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

# switch  

The switch statement is used to perform different actions based on different conditions. We use switch statement to select one of many code blocks to be executed.

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

## Break statement

When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway. If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

## Default statement

The default keyword specifies the code to run if there is no case match. The default case does not have to be the last case in a switch block. f default is not the last case in the switch block, remember to end the default case with a break.

```js
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are RS 59 per kg');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are RS 79 kg.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```


https://codesandbox.io/s/vibrant-nightingale-356o5?file=/src/index.js