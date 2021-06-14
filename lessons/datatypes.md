---
path: "/datatypes"
title: "DATATYPES"
order: "3B"
section: "JAVASCRIPT"
description: "datatypes"
---
# Datatypes

We have learn about values and variable lets talk about what is datatypes.

Datatypes is what kind of data we can store in variables. It indicates the characteristics of data.

## There are two types of datatypes
1. Primitive Datatypes
2. Composite/reference Datatypes

## Primitive Datatypes:

Primitive datatypes are the datatypes that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. Most of the time, a primitive value is represented directly at the lowest level of the language implementation. All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## **String:**
The String is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method. It is represented by either single quotes or doube quotes.
```js
const character = "This is the string"
const str = 'This is a string'
const concat = character + str

console.log(concat) //This is the stringThis is a string
// to give the space between This is the stringThis is a string
console.log(character + " " + str)
//This is the string This is a string
```
To access the character of the string we use charAt property.
```js
const character = "This is the string"
console.log(character.charAt(1)) //h
//or
console.log(character[1]) //h
```
Now lets talk about template literals. Instead of using single quote or double quote we can use back tick.
```js
const character = `This is string`
const firstName = "sulabh"
const age = 25
console.log(`My name is ${firstName} and my age is ${age}`)
//My name is sulabh and my age is 25
```
lets see string length.
```js
const club = "my favorite club of wrc is happy club"
console.log(club.length) //37
```
Now what is indexing of string??? lets see:

```js
const language = 'js is awesome'
```
In this case index is as follow:
Index always starts with 0. Character at 0, -12 is 'j', Character at 1, -11 is 's', Character at 2, -10 is ' ', Character at 3, -9 is 'i', Character at 4, -8 is 's', Character at 5, -7 is ' ', Character at 6, -6 is 'a', Character at 7, -5 is 'w', Character at 8, -4 is 'e', Character at 9, -3 is 's', Character at 10, -2 is 'o', Character at 11,-1 is 'e'

### Escape sequences in js

Escape characters are characters that can be interpreted in some alternate way then what we intended to. To print these characters as it is, include backslash ‘\’ in front of them.

**`\b`**:	Backspace,
**\f**:	Form Feed,
**\n**:	New Line,
**`\r`**:	Carriage Return,
**`\t`**:	Horizontal Tabulator,
**`\v`**:	Vertical Tabulator,
**`\'`**:	Single quote,
**`\"`**:	Double quote,
**`\\`**:	Backslash,

```js
console.log("JavaScript, often\b abbreviated as JS\f, is a \"programming\" \'language\' that conforms\t to the ECMAScript\r specification\n JavaScript is \\high-level, often\v just-in-time compiled, and multi-paradigm");
/*specificationte abbreviated as JS♀, is a "programming" 'language' that conforms         to the ECMAScript
 JavaScript is \high-level, often♂ just-in-time compiled, and multi-paradigm*/
```

There are lots of methods in the string. Lets see some of them.
### indexOf("string", "the starting position")
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. If the text is not found returns -1
```js
const str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); //7
```
### lastIndexOf("string", "the starting position")
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string. If the text is not found return -1.
```js
const str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate")); //21
```
### replace("specified", "another value")

The replace() method replaces a specified value with another value in a string. The replace() method does not change the string it is called on. It returns a new string. By default, the replace() method replaces only the first match. The replace() method is case sensitive.
```js
const str = "Please visit Microsoft and Microsoft!";
console.log(str.replace("Microsoft", "Facebook")); //Please visit Facebook and Microsoft!. completely return new string
console.log(str); //Please visit Microsoft and Microsoft!
console.log(str.replace('microsoft','facebook'))//Please visit Microsoft and Microsoft!. Didnot find the string but it return same string
```
### upper and lower case:

A string is converted to upper case with toUpperCase().
```js
const text1 = "Hello World!";
console.log(text1.toUpperCase());//HELLO WORLD!
```
And A string is converted to lower case with toLowerCase().
```js
const text1 = "Hello World!";
console.log(text1.toLowerCase()); //hello world!
```
### trim():
The trim() method removes whitespace from both sides of a string.
```js
const str = "       Hello World!        ";
console.log(str.trim());//Hello World! without any spaces
```
### includes():
The includes() method determines whether a string contains the characters of a specified string. This method returns true if the string contains the characters, and false if not. The includes() method is case sensitive.

```js
const str = "Hello world, welcome to the universe.";
console.log(str.includes("world"));//true
```
### split():
The split() method is used to split a string into an array of substrings, and returns the new array. If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string.
```js
const str = "How are you doing today?";
console.log(str.split());//[ 'How are you doing today?' ]
console.log(str.split(" "));//[ 'How', 'are', 'you', 'doing', 'today?' ]. splits with empty space
//without space
 console.log(str.split(""));
/*[
   'H', 'o', 'w', ' ', 'a',
   'r', 'e', ' ', 'y', 'o',
   'u', ' ', 'd', 'o', 'i',
   'n', 'g', ' ', 't', 'o',
   'd', 'a', 'y', '?'
 ]
*/
```
### slice("start", "end"):
The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. The original string will not be changed.
```js
const str = "How are you doing today?";
 console.log(str.slice(1, 3));//ow
 console.log(str.slice(2));//w are you doing today?
```
## **Number:**

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript has only one type of number. Numbers can be written with or without decimals. Extra large or extra small numbers can be written with scientific (exponent) notation. 
```js
const x = 6.14;    // A number with decimals
const y = 6;       // A number without decimals
const x = 132e5;    // 13200000
const y = 132e-5;   // 0.00132
```
### **Precision**
Integers (numbers without a period or exponent notation) are accurate up to 15 digits. The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate. To solve the problem above, it helps to multiply and divide.
```js
const x = 999999999999999;
const y = 9999999999999999;
console.log(x, y)//999999999999999 10000000000000000
const x = 0.2 + 0.1;
console.log(x)//0.30000000000000004
const y = (0.2*10 + 0.1*10) / 10;
console.log(y)//0.3
```
## **Bigint:**
BigInt is a built-in object whose constructor returns a bigint primitive — also called a BigInt value,  to represent whole numbers larger than 2^53 - 1. A BigInt value, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() constructor (but without the new operator) and giving it an integer value or string value.
It is basically means big integer. 9007199254740991 or 2^53 - 1 is the largest number JavaScript can represent with a number primitive (or Number value). BigInt values can be used for arbitrarily large integers.

```js
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
const bigData = 12n
console.log(typeof bigData)//bigint. typeof operator return waht type of datatypes i
const maxInteger = 9007199254740991n
console.log(typeof maxInteger) //bigint
```
more on this later in this course.

## **Boolean:**
A JavaScript Boolean represents one of two values: true or false. Very often, in programming, you will need a data type that can only have one of two values, like
YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

```js
const a= true
console.log(typeof a)//boolean
```
More on this in type casting and operator
## **undefined:**

In JavaScript, a variable without a value, has the value undefined. The type is also undefined. Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

```js
let a;
let b;
console.log(typeof a, typeof b)//undefined undefined
```
## **Symbol:**

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
```js
let sym1 = Symbol()
let sym2 = Symbol('js is fun')
let sym3 = Symbol('js is fun')
console.log(sym2===sym3)//false
```
## **null:**
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object. It should be null.
You can empty an object by setting it to null:

```js
let a = null
console.log(typeof null)//object
```
## **Difference between null and undefined**
```js
let a = undefined
let b = null
console.log(a===b)// false
```
undefined is undefined that is a contains value but it is undefined. But null doesnot hold any value.

## if you didnot understood some of datatypes then dont worry you will understand thoroughly in the course.

## Composite/reference Datatypes
A composite data type in JavaScript has multiple values, which grouped together. It works the same as the object in the class. It is mutable. Objects, array and function are the composite datatypes.



## **object:**
You have already learned that JavaScript variables are containers for data values. Objects are variables too. But objects can contain many values.
The values are written as key:value pairs (key and value separated by a colon).

```js
const person = {firstName:"ravi", lastName:"lamichhane", age:23};
console.log(person)//{ firstName: 'ravi', lastName: 'lamichhane', age: 23 }
```
Lets think how can we access the firstName. To access the first name:
```js
console.log(person.firstName)//ravi
//OR
console.log(person['firstName'])//ravi
```
## **Array:**
An array is a special variable, which can hold more than one value at a time. JavaScript arrays are used to store multiple values in a single variable.
```js
const a = "alpha"
const b = "beta"
const c = "gamma"
```
Can you loop all this variable one at a time???
yes we can using array
```js
const sym = ["alpha", "beta", "gamma"]
for(let i = 0; i<sym.length; i++){
    console.log(sym[i])
}
/*alpha
beta
gamma
*/
```
Basically we can loop through array.
We have seperate section about this and we will talk about this more in future in this lecture.

## **function:**
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it). A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...). The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
Lets see an example:
```js
//function defination
function addTwoNumber(a, b){
    return a+b
}
//function invoking/calling
const c = addTwoNumber(2,5)
console.log(c)//7
```

We have seperate section about this and we will talk about this more in future in this lecture.


### Coding challenge 2:
1. Define the variable of yourName and assign the value to your full name. print your into the console. 
2. slice your surname and print it into the console.
3. Define the function whose name is division give a and b parameter. Give the value of a(number) and b(number) and divide a/b and return it inside the function and call that function.
4. Define the variables name, age and print I am 'name'(it should print your name in the name) and i am 'age'(it should print your age).
5. Define the variable call nameOfCars and assign the array of string contaning the name of car and log it to the console.

https://codesandbox.io/s/hungry-heyrovsky-5v7in?file=/src/index.js